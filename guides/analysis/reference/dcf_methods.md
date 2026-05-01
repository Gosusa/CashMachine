---
kind: analysis-reference
name: dcf_methods
version: 0.3.0
referenced_by:
  - pipeline/01_business.md     # 사업부 유형 인식
  - pipeline/03_dcf_factors.md  # 사업부별 DCF 방법 선정 + Factor 산정
  - pipeline/04_dcf_compute.md  # Python 코드 엔진 명세
---

# DCF 방법론 카탈로그 (Reference)

> 5가지 DCF 방법(A~E)의 정의·공식·입력 변수.
> 분석 단위는 **사업부** — 사업부마다 다른 방법 가능 (SOTP의 일반화).
> 모듈 1이 사업부 유형 인식, 모듈 3이 방법 선정·Factor 산정, 모듈 4가 코드로 계산.

---

## 1. 핵심 원칙

1. **사업부 유형에 맞는 방식 선택** — 획일적 FCF DCF는 다수 업종에서 심각한 왜곡을 만든다
2. **멀티플·할인율은 실측 근거로** — 희망적 수치 금지, 업종 peer 역사 범위 준수
3. **보수적 가정 우선** — Base는 가이던스보다 소폭 낮게, Bear는 관찰 가능한 취약 경로, Bull은 복수 카탈리스트가 동시 작동하는 시나리오

> **Cyclical 사업부 함정**: 피크 이익 = 저PER = 고점 신호 (멀티플 역작동).
> Forward PE 대신 Normalized PE (사이클 평균) 사용. 구체적 입력 보정은 모듈 3 가이드 참조.

---

## 2. 사업부 유형 판별 — 어떤 방법을 쓸 것인가

각 사업부 특성을 아래 질문으로 판별. 위에서부터 순서대로 매칭되는 첫 번째 방식 사용.

| 판별 질문 | 방식 |
|---|---|
| 안정적 FCF 생성 + 성숙 단계? (일반 제조·소비재·산업재·성숙 SaaS) | **A. Standard FCF DCF** |
| 자본 규제 하 운영되는 은행/보험? (Book Value 중심) | **C. Excess Returns** |
| 사업부 가치가 보유 자산의 순자산가치에 의해 주로 결정? (REIT, E&P, 투자회사) | **D. NAV** |
| FCF 정의 불가 (고성장 적자, 사이클 초기)? | **E. Forward Multiple** (보조) |
| 위 4개 중 하나로 단일 처리 안 되고 사업부 안에 또 이질적 sub-segment 공존? (드묾) | **B. SOTP** (재귀) |

---

## 3. 방법별 가이드

> **시나리오별 변동**: 입력 변수는 시나리오별(Bear/Base/Bull)로 다른 값을 가질 수 있다 — 단, 확정된 과거·현재 수치(`*_y0`, `total_debt` 등)는 시나리오 간 동일.
>
> **출력 bucket**: 각 메서드는 §4 합산을 위한 bucket을 선언한다 — `'operating_ev'` 또는 `'equity'`.

### A. Standard FCF DCF

**대상**: 안정 FCF 생성 사업부.

**변수 정의**:
- **FCF** = NOPAT + D&A − CapEx − ΔWC
- **NOPAT** = EBIT × (1 − t)
- **WACC** = (E/V × CoE) + (D/V × CoD × (1 − t))
- **CoE (CAPM)** = Rf + β × (Rm − Rf)

**계산 공식**:
```
EV = Σ [FCF_t / (1+WACC)^t] + TV / (1+WACC)^N
TV (Gordon)        = FCF_(N+1) / (WACC − g)
TV (Exit Multiple) = EBITDA_N × Multiple
```

**입력 변수**:

| 변수 | 타입 | 설명 |
|---|---|---|
| forecast_years | int | 예측 기간 N |
| revenue_y0 | number | 직전 연도 매출 |
| revenue_cagr | number | 연평균 매출 성장률 (%) |
| ebit_margin_start | number | 1년차 EBIT 마진 (%) |
| ebit_margin_end | number | N년차 EBIT 마진 (%, 선형 보간) |
| tax_rate | number | 실효세율 (%) |
| da_pct_revenue | number | D&A / 매출 (%) |
| capex_pct_revenue | number | CapEx / 매출 (%) |
| nwc_pct_revenue_change | number | NWC 변동 / ΔRevenue (%) |
| wacc | number | (%) |
| terminal_method | enum | `'gordon'` \| `'exit_multiple'` |
| terminal_g | number | gordon 선택 시 (%) |
| exit_multiple | number | exit_multiple 선택 시 (EV/EBITDA배수) |

**수학적 제약**:
- Terminal g < WACC (필수)
- Terminal g ≤ 장기 GDP 성장률

**출력 bucket**: `'operating_ev'`

---

### B. SOTP (재귀)

**대상**: 사업부 안에 또 이질적 sub-segment가 공존 (드묾).

**변수 정의**:
- sub-segment 가치 = Earnings × Multiple (이익 기반) 또는 자산 시장가치 (자산 기반, 부채 차감 없음)

**계산 공식**:
```
사업부 EV = Σ_i [Earnings_i × Multiple_i] + Σ_j [Asset_j (시장가치)]
```

**입력 변수**:

| 변수 | 타입 | 설명 |
|---|---|---|
| sub_segments | array | sub-segment 목록 |
| sub_segments[].kind | enum | `'earnings'` \| `'asset'` |
| sub_segments[].value | number | 이익 (세후) 또는 자산 시장가치 (부채 차감 없음) |
| sub_segments[].multiple | number? | 멀티플 (kind='earnings'일 때만 필수) |

**원칙**:
- 이익은 **세후 통일**
- Double counting 방지 (예: Carry를 Income과 Balance Sheet에 동시 계상 X)

**출력 bucket**: `'operating_ev'`

---

### C. Excess Returns

**대상**: 자본 규제 하 운영 (은행·보험), Book Value 중심.

**변수 정의**:
- **BV** (Book Value) = 주주 지분
- **ROE** = 순이익 / 평균 BV
- **CoE** = Rf + β × (Rm − Rf), 금융섹터는 +1~2%p 프리미엄 권장
- **BV 성장률** = (1 − 배당성향) × ROE

**계산 공식**:
```
사업부 Equity = BV_현재
              + Σ [(ROE_t − CoE) × BV_t / (1+CoE)^t]
              + Terminal [(ROE_T − CoE) × BV_T / ((CoE − g) × (1+CoE)^N)]
```

**교차검증 — 정당화 P/B**:
```
정당화 P/B = (ROE − g) / (CoE − g)
```
모델 결과의 implied P/B → peer/역사 P/B와 비교.

**입력 변수**:

| 변수 | 타입 | 설명 |
|---|---|---|
| forecast_years | int | 예측 기간 N |
| bv_y0 | number | 현재 Book Value |
| roe_start | number | 1년차 ROE (%) |
| roe_terminal | number | N년차 ROE (%, 선형 보간) |
| coe | number | Cost of Equity (%) |
| dividend_payout | number | 배당성향 (%, BV 성장률 계산용) |
| terminal_g | number | (%) |

**수학적 제약**:
- Terminal g < CoE
- Terminal g ≤ 장기 GDP 성장률

**출력 bucket**: `'equity'` (자본 규제 model — 이미 equity 가치)

---

### D. NAV

**대상**: 보유 자산 가치가 사업부 가치를 결정 (REIT, E&P, 투자회사).

**변수 정의**:
- **NAV** = Σ 자산 시장가치 − 부채 − 우선주
- **Cap Rate** (REIT) = NOI / 자산 가치
- **PV-10** (E&P, SEC 표준) = 매장량 미래 수익 PV (할인율 10%, 세전)

**계산 공식**:
```
사업부 Equity (NAV) = Σ 자산 시장가치 − 총부채 − 우선주
```
(per share 환산은 §4 회사 종합에서 한 번에 처리)

**자산 유형별 평가**:

| 자산 | 평가 방식 |
|---|---|
| 부동산 (REIT) | NOI / Cap Rate |
| 석유·가스 매장량 | PV-10 (SEC 표준) |
| 상장 보유주식 | 시장가 × (1 − 세금·유동성 할인) |
| 기타 (`'other'`) | 위 표에 없는 자산 — 모듈 3 판단으로 시장가치 산출 |

> `assets[].value`는 위 평가 방식을 적용해 **모듈 3가 산출한 시장가치**. 모듈 4는 단순 합산만 수행.

**입력 변수**:

| 변수 | 타입 | 설명 |
|---|---|---|
| assets | array | 자산 목록 |
| assets[].kind | enum | `'real_estate'` \| `'reserves'` \| `'equity'` \| `'other'` |
| assets[].value | number | 시장가치 |
| assets[].discount | number | 유동성·세금 할인 (%, optional) |
| total_debt | number | 총부채 |
| preferred | number | 우선주 |

**출력 bucket**: `'equity'` (NAV — 이미 부채·우선주 차감)

---

### E. Forward Multiple (보조용)

**대상**: 현재 이익·FCF가 미래 정상화 수준을 반영 못 함 (고성장 적자, 사이클 초기, IPO 직후).

**변수 정의**:
- **N**: 사업이 정상 궤도에 진입하는 추정 시점 (정상화 시점)
- **할인율**: 미래 가치 → 현재 환산 (10%+ 권장, 일반 WACC보다 높게)

**계산 공식**:

EV 기반 멀티플 (`'sales'` = EV/Sales, `'ebitda'` = EV/EBITDA):
```
사업부 EV = metric_y_n × Multiple / (1 + 할인율)^(N−1)
```

Equity 기반 멀티플 (`'eps'` = P/E):
```
사업부 Equity = metric_y_n × Multiple / (1 + 할인율)^(N−1)
```

**지표 선택**:

| 지표 | 적용 |
|---|---|
| EV/Sales | 초기 SaaS, 바이오 |
| EV/EBITDA | 사이클 정상화 후 |
| Forward PE | 일반 (보조) |

**입력 변수**:

| 변수 | 타입 | 설명 |
|---|---|---|
| metric_name | enum | `'sales'` \| `'ebitda'` \| `'eps'` |
| metric_y_n | number | Y_N 시점 지표 값. `'sales'`/`'ebitda'`는 회사 전체 $M, `'eps'`는 EPS × 희석 주식수로 환산해 입력 |
| multiple | number | 적용 멀티플 |
| years_to_normalize | int | N (정상화 시점) |
| discount_rate | number | (%) |

**경고**: 보조용. 단독으로 주된 목표가 산출 금지. 가능하면 다른 방법(A·D)과 병기.

**출력 bucket**: `metric_name`에 따라 — `'sales'`/`'ebitda'` → `'operating_ev'`, `'eps'` → `'equity'`.

---

## 4. 사업부별 적용 + 회사 종합

각 사업부에 위 5가지 방법 중 하나 선택 → 회사 종합 산출.

**회사 종합** (두 bucket 합산):
```
회사 주주가치 = [Σ 'operating_ev' bucket 사업부 − 회사 Net Debt − Minority + Non-op]
             + [Σ 'equity' bucket 사업부]
회사 목표가   = 회사 주주가치 / 희석 주식수
```

> 각 사업부는 메서드 정의에 따라 **`'operating_ev'` bucket** 또는 **`'equity'` bucket**으로 출력 (§3 메서드별 출력 bucket 참조).
> Net Debt · Minority · Non-op은 `'operating_ev'` bucket에만 한 번 적용. `'equity'` bucket은 이미 부채·우선주 등이 차감되어 그대로 합산.

**시나리오 합산 — 일관성 필수**:
```
Bear 회사 = Σ Bear 사업부
Base 회사 = Σ Base 사업부
Bull 회사 = Σ Bull 사업부
```

**금지**:
- **시나리오 합성** — Bear Cloud + Bull Hardware 같은 회사 결과 X. 모든 사업부가 동시에 같은 거시 환경을 겪는다는 가정.
- **확률 가중·가중평균** — 3시나리오 범위 그대로 출력.
- **매수/매도 판정** — 가치 산정만. 매수 판정은 상위 portfolio 단계.

**단일 사업 회사**: 사업부 1개로 처리. 두 bucket 합산 식 그대로 적용 (해당 사업부의 bucket에만 한 항목, 다른 bucket은 0).

---

## 5. 공통 원칙

- **무위험 수익률 (Rf)**: 작성일 시점 10Y Treasury (직접 조회 필수)
- **세율**: 실효세율 = 최근 3년 평균. 사업부별 세율 상이 시 (해외 자회사 등) 개별 적용
- **희석 주식수**: 반드시 **Diluted** Shares Outstanding (RSU·옵션·전환사채 포함)

---

## MVP 범위 외 (추후 복원 가능)

- **Damodaran 5규율 교차검증** (Terminal g ≤ rf, Sales-to-Capital, Unlevered Beta, Implied Multiple 역검증, Story↔숫자 정합성). 모듈 3 또는 4에서 sanity check 단계로 추후 추가 가능.
