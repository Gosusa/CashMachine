# DCF 분석 가이드

이 가이드는 `02_base_guide.md`의 **7. 밸류에이션 & DCF** 섹션에서 참조된다.
기업 유형에 따라 올바른 가치평가 방식을 선택하고, 선택 근거를 결과물에 명시한다.

---

## 핵심 원칙

1. **기업 유형에 맞는 방식을 선택한다** — 획일적 FCF DCF는 다수 업종에서 심각한 왜곡을 만든다
2. **선택 근거를 출력물에 명시한다** — "왜 이 방식인가 / 다른 방식은 왜 부적합한가"
3. **멀티플·할인율은 실측 근거로** — 희망적 수치 금지, 업종 peer 역사 범위 준수
4. **Terminal 의존도 확인** — DCF에서 Terminal 비중 70% 초과면 멀티플 기반으로 교차검증
5. **보수적 가정 우선** — Base는 가이던스보다 소폭 낮게, Bear는 관찰 가능한 취약 경로 반영 (확률 배분·가중평균 금지)

---

## Step 1. 사업 유형 판별 — 어떤 DCF 방식을 써야 하는가

기업 특성을 아래 질문으로 판별한다. 위에서부터 순서대로 매칭되는 첫 번째 방식을 사용한다.

| 판별 질문 | 해당 시 | 방식 |
|---------|---------|------|
| 이익 구조가 2개 이상 이질적 세그먼트(성격·멀티플 상이)로 구성? | 대체자산운용사, 지주회사, 복합기업 | **B. SOTP** |
| 자본 규제 하 운영되는 은행/보험/자산운용? (Book Value 중심) | 은행, 생명보험, 손보 | **C. Excess Returns / DDM** |
| 기업 가치가 보유 자산의 순자산가치에 의해 주로 결정? | REIT, 자원개발사, 투자회사, 폐쇄형 펀드 | **D. NAV 기반** |
| 안정적 FCF 생성 + 단일 사업 + 성숙 단계? | 일반 제조·소비재·산업재·성숙 SaaS | **A. Standard FCF DCF** |
| 초기 성장·적자·현금흐름 왜곡이 커서 FCF 불가? | 고성장 테크, 적자 사이클 기업 | **E. Forward Multiple** (보조 활용) |

> **원칙**: 의심 시 더 보수적인(보유 자산 기반) 방식을 택한다. 성장 기대에 의존하는 방식(FCF DCF)은 낙관 왜곡 위험이 크다.

---

## Step 2. 방식별 가이드

### A. Standard FCF DCF — 일반 제조·소비재·SaaS 등

**대상**: 단일 주력 사업, 안정적 현금흐름 생성, 자본집약도 예측 가능.

**공식**:
```
기업가치 (EV) = Σ [ FCF_t / (1+WACC)^t ]  +  Terminal Value / (1+WACC)^N
주주가치      = EV - Net Debt - Minority Interest + Non-operating Assets
목표가        = 주주가치 / 희석 주식수

FCF = NOPAT + D&A - CapEx - ΔWC
Terminal Value (Gordon) = FCF_(N+1) / (WACC - g)
Terminal Value (Exit Multiple) = EBITDA_N × Exit EV/EBITDA
```

**필수 가정**:

| 항목 | 전형적 범위 | 비고 |
|------|-----------|------|
| 예측 기간 (N) | 5~10년 | 성숙도 낮을수록 길게 |
| WACC | 7~12% | 베타·자본구조·국가 프리미엄 반영 |
| 영구성장률 (g) | 2~3% | **장기 GDP 성장률 상한**, 절대 WACC 초과 금지 |
| Exit Multiple | EV/EBITDA 역사 평균 ±20% | Peer 비교 필수 |

**Terminal Value 체크**:
- TV가 EV의 70%+ 차지하면 → **멀티플 DCF로 교차검증** (Exit Multiple 방식 병행)
- g와 WACC-g 스프레드에 대한 민감도 분석 필수

**시나리오별 변동 변수**:
- 매출 성장률, EBITDA 마진, CapEx 비중, WACC(스트레스 시 +200bp)
- Bear 시나리오에서 TV 공식 자체를 낮은 Exit Multiple로 대체

**부적합한 경우**:
- 이익 구조가 분리된 세그먼트 복합 → SOTP
- Working Capital·투자 부채 구조가 Balance Sheet 중심 → Excess Returns
- FCF 자체가 정의 불가(고성장 적자) → Forward Multiple

**출력 예시**:
```
매출 CAGR: 8%
EBIT 마진: 22% → 24%
세율: 23%
D&A 비중: 매출의 5%
CapEx 비중: 매출의 6%
NWC 변동: 매출 증가분의 15%
WACC: 9%
Terminal g: 2.5%
────────────────
Y1~Y10 FCF PV 합계: $X
Terminal Value PV:   $Y (EV의 Z%)
EV:                  $X+Y
- Net Debt:          -$D
주주가치:             $V
÷ 희석 주식수:        S
목표가:              $V/S
```

---

### B. SOTP (Sum-of-the-Parts) — 대체자산운용사·지주회사·복합기업

**대상**: 이익 성격이 근본적으로 다른 세그먼트를 동시에 보유하는 기업.
**대표 종목**: KKR, BX, APO, ARES, BRK, MSFT(부분 적용), 복합재벌(LG전자 등)

**공식**:
```
기업가치 = Σ [ 세그먼트별 (이익 or 자산) × 세그먼트별 멀티플 ]
         + Balance Sheet 자산 (NAV or Book)
         - Net Debt - Preferred - Minority Interest
주주가치 ÷ 희석 주식수 = 목표가
```

**세그먼트별 표준 평가 방식** (자산운용사 기준):

| 세그먼트 | 이익 지표 | 적용 멀티플 (정상) | 근거 |
|---------|---------|--------------|------|
| **Fee-Related Earnings (FRE)** | 세후 FRE (Management Fees - 운영비 × (1-세율)) | 22~28x | 반복·안정, PE·IFM 비즈니스 표준 |
| **Realized Carry / Performance Fees** | 3년 평균 실현 Carry (세후) | 6~10x | 변동성 크므로 낮은 멀티플 |
| **Net Accrued Performance (미실현)** | 대차대조표 Accrued Carry (세후 PV) | 1x (또는 70~80% 할인) | 실현 불확실 반영 |
| **Insurance Operating Earnings** | 세후 Insurance OE | 7~10x | 자본집약·규제, P/B 0.8~1.3x 교차검증 |
| **Strategic/Balance Sheet Investments** | NAV 또는 Book Value | 0.9~1.1x NAV | 할인은 유동성·세금 반영 |
| **Strategic Holdings / Core PE** | 세후 Operating Earnings | 12~18x | 영구 보유 운영이익 |

**시나리오별 멀티플 조정** (스트레스 시):

| 환경 | FRE | Carry | Insurance | SH | NAV |
|------|-----|-------|-----------|-----|-----|
| 정상 | 25~28x | 8~10x | 8~10x | 14~18x | 1.0x |
| 스트레스 | 18~22x | 5~7x | 6~8x | 10~12x | 0.85x |
| 위기 | 12~16x | 2~4x | 4~6x | 6~8x | 0.70x |

**필수 검증**:
- 이익 분류가 중복되지 않는지 확인 (double counting 방지). Carry를 Balance Sheet Accrued와 동시에 계상하지 않음
- 각 세그먼트 이익은 **세후** 기준으로 통일 (세율 차이가 크면 세그먼트별 유효세율 사용)
- Insurance는 이익 기반과 Book 기반 중 하나 선택, 두 방식 결과를 교차검증

**부적합한 경우**:
- 단일 사업 기업 → 일반 FCF DCF
- Balance Sheet 자체가 이익의 주된 원천(REIT 등) → NAV 방식

**출력 예시**:
```
                        FY25 actual   세후(22%)   멀티플   기여
Fee-Related Earnings:   $3.7B       → $2.89B  × 26x  = $75.1B
Realized Carry (3y avg):$0.8B       → $0.62B  ×  8x  =  $5.0B
Insurance OE:           $1.1B       → $0.86B  ×  9x  =  $7.7B
Strategic Holdings OE:  $0.17B      → $0.13B  × 15x  =  $2.0B
──────────────────────────────────────────────────────
이익 기반 합계:                                        $89.8B
+ Net Accrued Carry (세후 PV):                         $3.0B
+ Balance Sheet Investments (NAV):                    $15.0B
- Net Debt:                                          -$10.0B
──────────────────────────────────────────────────────
주주가치:                                            $97.8B
÷ 희석 주식수: 888M
목표가:                                              $110
```

---

### C. Excess Returns / DDM — 은행·보험사

**대상**: 자본 규제 하 운영, Book Value 성장이 가치의 핵심 동인, 배당 정책이 안정적인 금융기관.
**대표 종목**: JPM, BAC, WFC, PNC, MET, PRU, AIG, Allstate

**공식 — Excess Returns Model**:
```
주주가치 = Book Value_현재
         + Σ [ (ROE_t - Cost of Equity) × Book Value_t / (1+CoE)^t ]
         + Terminal [(ROE_T - CoE) × BV_T / ((CoE - g) × (1+CoE)^N)]
```

**핵심 아이디어**: ROE가 CoE(자본비용)를 초과할 때만 Book Value 위 프리미엄. CoE 미달 시 BV 이하 거래 정당화.

**공식 — DDM (배당할인모델)**:
```
주주가치 = Σ [ DPS_t / (1+CoE)^t ] + Terminal [DPS_(N+1) / (CoE - g)]
```

**필수 가정**:

| 항목 | 전형적 범위 | 비고 |
|------|-----------|------|
| 예측 기간 | 5~10년 | 금리 사이클 1~2회 포함 |
| Cost of Equity | 9~13% | CAPM + 금융섹터 프리미엄 |
| ROE | 8~18% | 역사 평균 + 전망 반영 |
| BV 성장률 | Retention × ROE | = (1 - 배당성향) × ROE |
| Terminal g | 2~3% | 경제 성장률 상한 |
| P/B 교차검증 | 정상 0.9~1.5x | ROE-CoE 스프레드와 일관성 확인 |

**시나리오별 변동 변수**:
- ROE (신용비용·NIM·수수료수익 가정에 따라), CoE (신용스프레드 + 시장 변동성)
- Bear 시나리오: ROE < CoE → BV 이하 거래 가능성 반영

**교차검증 공식** (직관적 벤치마크):
```
정당화 P/B = (ROE - g) / (CoE - g)
```
→ ROE 12%, CoE 10%, g 2.5% → 정당화 P/B ≈ 1.27x

**부적합한 경우**:
- 자본 규제 없는 일반 기업 → FCF DCF
- 자산운용사(AUM 성장 중심) → SOTP의 FRE 멀티플 방식

---

### D. NAV 기반 — REIT·자원개발사·투자회사

**대상**: 기업가치가 보유 자산의 현재 가치에 의해 주로 결정되며, 자산 개별 평가가 가능한 사업.
**대표 종목**: Prologis, Realty Income, Simon Property, 석유/광산 E&P(XOM의 E&P 부분), BDC, CEF

**공식**:
```
NAV = Σ [ 자산별 시장가치 ] - 총부채 - 우선주
주주가치 = NAV
목표가 = NAV / 희석 주식수

교차검증: Premium/Discount to NAV = (주가 - NAV) / NAV
```

**자산 유형별 평가 방식**:

| 자산 유형 | 평가 방식 |
|---------|---------|
| 부동산 (REIT) | NOI / Cap Rate (시장 Cap Rate 사용) |
| 석유·가스 매장량 | PV-10 (SEC 표준) + 미증명 매장량 할인 |
| 광산 | DCF of extraction + 매장량 risk-adjusted |
| 상장 보유주식 | 시장가 × (1 - 세금 및 유동성 할인) |
| 비상장 투자 | 회계상 Fair Value 또는 직전 거래가 |

**필수 가정**:

| 항목 | 전형적 범위 | 비고 |
|------|-----------|------|
| Cap Rate (REIT) | 5~8% | 섹터·지역별 상이, Green Street 등 참조 |
| 유동성 할인 | 10~30% | 비상장 자산 |
| 세금 할인 | 유효세율 × 미실현이익 | 매각 시 세금 |
| NAV 프리미엄/디스카운트 역사 | 섹터별 ±10~30% | 현재 수준과 비교 |

**시나리오별 변동 변수**:
- Cap Rate (금리 상승 시 +50~150bp), NOI 성장률, 자산 가치 할인
- 원자재 가격 (E&P 시)

**교차검증**:
- FFO / AFFO 멀티플 (REIT)
- EV/Reserve (석유·가스)
- P/B (투자회사, BDC)

**부적합한 경우**:
- 이익 창출이 자산 가치와 분리된 사업(브랜드·기술 기반 제조업) → FCF DCF

---

### E. Forward Multiple — 사이클 초기·적자 기업 (보조용)

**대상**: 현재 이익·FCF가 미래 정상화 수준을 반영하지 못하는 기업.
**대표 종목**: 고성장 SaaS 초기 단계, 적자 사이클 중 기업, IPO 직후 기업.

**공식**:
```
목표가 = (Y_N 예상 이익 지표/주) × 적용 멀티플 / (1+할인율)^(N-1)
```

**사용 지표 선택**:

| 지표 | 적용 업종 | 멀티플 기준 |
|------|---------|-----------|
| EV/Sales | 초기 SaaS, 바이오 | 역사 범위 3~15x |
| EV/EBITDA | 사이클 기업 정상화 후 | 업종 평균 8~14x |
| Forward PE | 일반 성숙 | 성장률 대비 PEG 1~2x |
| P/AUM | 자산운용사 | 보조용, SOTP 교차검증 |

**경고**:
- 이 방식은 **보조적으로만** 사용. 단독으로 주된 목표가 산출에 의존 금지
- 멀티플은 반드시 역사적 실측 범위. "미래 정상화 시 peer 평균" 가정은 취약
- 할인율 10%+ 적용 (3~5년 미래 가치를 현재가로 환산)

**부적합한 경우**:
- FCF가 안정적으로 생성되는 기업 → FCF DCF
- 자산 성격이 분명한 기업 → 해당 방식

---

## 다모다란 교차검증 — 모든 방식 공통 (Step 2 산출 후 필수)

Step 2의 방식(A~E)으로 1차 목표가 산출 후, Aswath Damodaran(NYU Stern, DCF 대가)의 규율 5개로 sanity check. **대체가 아닌 교차검증** — 1차 결과와 불일치 시 가정을 재검토한다.

### 1. Terminal g ≤ 10Y 무위험수익률 규율

> **영구성장률(g)은 10Y 국채 수익률을 넘을 수 없다.** 초과 시 "영원히 경제 크기 초과"를 의미하는 수학적 불가능. 낙관적 DCF 대부분을 즉시 걸러내는 가장 강력한 필터.

- 우리 g vs 작성일 10Y Treasury yield 비교
- 위반 시: g를 rf 이하로 낮추고 재산출, Terminal Value 변화폭 기록
- 적용 범위: FCF DCF, Excess Returns, SOTP의 Terminal 가정 등 영구성장률 포함하는 모든 방식

### 2. Sales-to-Capital 정합성 (재투자 ↔ 성장)

> **"1달러 재투자하면 매출이 얼마 나오나"**를 과거 실측으로 계산한 뒤, 미래 성장 가정에 필요한 재투자 규모를 역산. 성장률 가정과 재투자 가정의 괴리를 강제로 드러낸다.

```
Sales-to-Capital = ΔSales / Δ(투하자본)  (과거 5~10Y 평균)
필요 재투자 = 미래 예상 ΔSales / Sales-to-Capital
→ 우리 모델의 CapEx + ΔWC 가정과 비교
불일치 시: 성장률 ↓ 또는 재투자율 ↑ 로 재조정
```

### 3. Unlevered Beta — 산업평균 → 회사 자본구조 재조정

> 개별 회사 beta는 최근 주가 변동성에 좌우되어 불안정. 다모다란은 **산업 unlevered beta → 회사 D/E로 re-lever** 방식 권장 (damodaran 사이트 연간 업데이트 자료 사용).

```
levered β = 산업 unlevered β × [1 + (1-t)(D/E)]
→ 우리 WACC 베타와 ±0.3 이상 차이 시 근거 기재 또는 조정
```

### 4. Implied Multiple 역검증

> DCF 결과에서 **내재 멀티플을 역산해 peer·역사 범위와 비교**. 범위 밖이면 가정 과도 — 구조적 프리미엄/디스카운트 근거를 기재하거나 가정 재조정.

```
Implied Fwd P/E     = 목표가 / Y+1 EPS
Implied EV/EBITDA   = (목표가 × 주식수 + Net Debt) / Y+1 EBITDA
→ Peer 평균·5Y 역사 범위와 대조
```

### 5. Story ↔ 숫자 정합성

> **1~6번 섹션의 사실·판단·해석이 7번 DCF 가정과 모순되지 않는가.** 숫자는 story의 구체화여야 한다. **절대 숫자 먼저 맞추고 story를 역산하지 않는다.**

| 체크 항목 | 검증 |
|---------|------|
| 1번 매출 구조 | Base 시나리오 매출 CAGR이 1-2 세그먼트 믹스·1-1 수익 모델과 일관? |
| 2-2 해자 강도 | 영업이익률·ROIC 가정이 2-3 해자 지속성 지표 추세와 일관? |
| **2-6 영속성 판정** | 평생 보유 "YES"면 Terminal g·Exit Multiple 상단 사용 허용. "NO"면 Terminal 비중 축소·짧은 예측기간 |
| 3-3 재투자율 | CapEx/R&D 가정이 실측 재투자율과 일치? Sales-to-Capital(#2)과 교차 정합? |
| 3-1 15년+ 런웨이 | 런웨이 "소진 임박"이면 Base 시나리오 성장률 감속 반영 |
| 4-1 자본배분 | 자사주·배당 가정이 5~10Y 이력과 일관? 희석 주식수 추세 반영? |
| 5-1 재무구조 | WACC의 부채비용이 실제 조달비용·만기 구조와 일치? |
| 6-3 스트레스 | Bear 시나리오 전제가 6-1/6-3의 실제 취약 경로와 대응? |

### 교차검증 출력 블록 (필수)

7번 DCF 섹션 말미에 아래 블록 기재:

```markdown
### 7-7. 다모다란 교차검증

**1. Terminal g ≤ rf**: g=X% vs 10Y rf=Y% | 통과 / 위반 → 조정 결과
**2. Sales-to-Capital**: 실측 X배, 필요 재투자 $Y vs 모델 $Z | 정합 / 부분 / 위반
**3. Unlevered Beta**: 산업β re-lever Y vs 모델 β Z | 차이 ±W (근거 or 조정)
**4. Implied Multiple**: Fwd P/E X, EV/EBITDA Y vs peer·역사 | 범위 내 / 근거 기재
**5. Story ↔ 숫자**: 정합 / {불일치 항목 + 재조정 내역}
```

---

## Step 3. 공통 원칙

### 할인율 (WACC / CoE)

| 구성 요소 | 전형적 범위 |
|---------|-----------|
| 무위험 수익률 | 10Y Treasury + 작성일 시점 yield |
| 시장 리스크 프리미엄 | 5~6% (미국) |
| 베타 | 업종 평균 + 기업 특성 조정 |
| 기업 특화 리스크 프리미엄 | 0~3% (소형주·유동성) |

- 세션 작성 시점 10Y Treasury를 **직접 조회**해서 반영
- 스트레스 시나리오에서 +100~300bp 상향

### 세율

- 실효세율 = 최근 3년 평균 + 구조 변화 반영
- 법인세율 변경·OECD Pillar Two 등 반영 필수
- 세그먼트별 세율이 다른 경우(버뮤다 재보험 등) SOTP에서 개별 적용

### Terminal Value (FCF DCF)

- Terminal g ≤ 장기 GDP 성장률 (미국 기준 2~3%)
- Terminal g < WACC 반드시 유지 (수학적 필수)
- Exit Multiple 방식과 Gordon 방식 결과가 **30% 이상 괴리** 시 가정 재검토

### 희석 주식수

- **반드시 희석 기준** (Diluted Shares Outstanding)
- RSU·옵션·전환사채 포함
- 자사주 매입 프로그램이 활발하면 5년 연평균 감소율 반영 (Base 시나리오)

---

## Step 4. 3시나리오 구성 규칙

본 규칙은 `02_base_guide.md` 7-3과 정합.

**시나리오는 Bear / Base / Bull 3개.**

| 시나리오 | 성격 |
|---------|------|
| **Bear** | 성장 둔화·리스크 부분 현실화·마진 압축 |
| **Base** | 현재 궤도·가이던스 연장 |
| **Bull** | 복수 카탈리스트 동시 작동 |

**구성 원칙**:
- 각 시나리오마다 **전제 조건**을 수치로 기재 (매출 성장률, 마진, CapEx, WACC, Terminal g 등)
- Bear 전제는 **6-3 스트레스 시나리오**에서 취약 등급("취약"/"중간") 받은 충격과 대응
- **Bull 전제는 실현 가능성이 개별 평가**되어야 한다 — 선행 사례/반례, 전제 간 독립성, 실현 경로 (상세: `02_base_guide.md` 7-3 Bull 시나리오 블록)
- **보수 우선** — Base는 가이던스보다 소폭 낮게, Bull은 낙관적 극단

**금지**:
- 확률 배분 (Bear 30% / Base 45% / Bull 25% 같은 배분) — 가중평균을 유도하므로 금지
- 가중평균 내재가치 계산 — 범위를 단일 숫자로 뭉개지 않는다 (과적화)
- 매수 판정 (현재가 대비 X% 할인이면 매수 등) — 이 파일은 매일 갱신되지 않으므로 현재가 기반 판정은 이 영역이 아니다

**출력 형태**: 3시나리오 목표가 범위만 제시
```
Bear   ${X}
Base   ${Y}
Bull   ${Z}
─────────────
범위:  ${Bear} ~ ${Bull}
```

---

## Step 5. 출력물 명시 요구사항

`{TICKER}_base.md`의 `## 7. 밸류에이션 & DCF` 섹션 **첫머리**에 아래 블록 필수 기재:

```markdown
### 7-1. DCF 방법론 선택 (필수)

- **적용 방식**: {A. FCF DCF / B. SOTP / C. Excess Returns / D. NAV / E. Forward Multiple}
- **선택 근거**: {왜 이 기업에 이 방식이 적합한가 — 사업 구조 특성 언급}
- **대안 대비 우위**: {다른 방식이 왜 부적합한가 — 최소 1개 대안 언급}
- **주요 가정 요약**: {할인율, Terminal g 또는 멀티플 범위, 세율 등}
```

이 블록이 없으면 작성 미완료로 간주한다.

---

## 체크리스트 — DCF 작성 완료 전 확인

- [ ] 7-1 DCF 방법론 선택 블록이 작성되었는가
- [ ] 선택된 방식이 Step 1 판별 질문과 일치하는가
- [ ] **7-7 다모다란 교차검증 블록**이 5개 항목(Terminal g, Sales-to-Capital, Beta, Implied Multiple, Story↔숫자)으로 작성되었는가
- [ ] **Terminal g ≤ 작성일 10Y Treasury yield**인가 (위반 시 조정 기록)
- [ ] Story ↔ 숫자 정합성에서 **2-6 영속성 판정·3-1 런웨이**가 Terminal 가정에 반영되었는가
- [ ] 멀티플 근거가 역사적 실측 범위인가 (희망적 수치 아닌가)
- [ ] 할인율에 작성일 시점 10Y Treasury가 반영되었는가
- [ ] **Bear / Base / Bull 3시나리오**로 구성되었는가 (4시나리오·확률 배분·가중평균 없는가)
- [ ] Bull 시나리오의 전제 조건별 실현 가능성이 개별 평가되었는가 (선행 사례/반례 포함)
- [ ] **매수 판정이 결과에 포함되지 않았는가** (현재가 대비 할인율은 상단 절차 영역)
- [ ] SOTP 사용 시 이익 분류 중복(double counting) 여부 확인했는가
- [ ] FCF DCF 사용 시 Terminal Value 비중 70% 이하이거나 교차검증했는가
- [ ] 세그먼트 이익 기반은 **세후** 통일했는가
- [ ] 희석 주식수 기준인가 (RSU·옵션 포함)
