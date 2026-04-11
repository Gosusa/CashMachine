# DCF 모델링 가이드

> DCF 파라미터 수정 또는 신규 종목 추가 시 이 파일을 먼저 읽는다.

---

## 1. 공통 DCF 구조

```
FCF = NOPAT + D&A − CapEx − NWC증가
NOPAT = 매출 × 영업이익률 × (1 − 세율)

EV   = Σ PV(FCF₁~₅) + PV(터미널밸류)
주가  = (EV − 순부채) / 희석주식수
```

- **할인 기간**: mid-year convention (0.5 / 1.5 / 2.5 / 3.5 / 4.5년)
- **터미널밸류**: 5년차 FCF × (1 + tg) / (WACC − tg), period 4.5로 할인
- **순부채**: `net_debt > 0` → 차감 / `net_debt < 0` → 순현금이므로 가산
- **시나리오 가중**: Bear 25% / Base 50% / Bull 25% (대시보드에서 조정 가능)

---

## 2. 비즈니스 유형별 핵심 개념

### Type A — 일반 제조·SaaS (TSLA, ADBE, ROP)
- **segments = GAAP 매출** (손익계산서 "Revenue"와 직접 비교 가능)
- **op_margin** = GAAP 영업이익률
- 실적 업데이트 시 참고 재무제표: **손익계산서 (Revenue / Operating Income)**

### Type B — 자산운용사 (KKR)
- **segments = 경영이익** (FRE·Carry·Insurance는 GAAP 매출이 아닌 세그먼트 순이익)
- **op_margin = 1.00** 이 맞음 — 세그먼트 값이 이미 이익 숫자이기 때문
- GAAP 손익계산서의 "Total Revenue"와 비교하면 안 됨 (보험료 등 포함으로 훨씬 큼)
- 실적 업데이트 시 참고: **Supplement / Earnings Release의 FRE·Distributable Earnings**

### Type C — 대규모 설비투자 전환 기업 (ORCL)
- **segments = GAAP 매출** (일반과 동일)
- **D&A 고정 금액** 사용 (매출에 비례하지 않음 — 과거 인수합병 상각 고정)
- **CapEx 2단계**: 초기(NOPAT×비율) → 전환 후(매출×10%)
- 실적 업데이트 시 참고: **Cash Flow Statement의 CapEx / D&A 금액**

### Type D — 원자재·에너지 (OXY)
- **segments = GAAP 매출** (유가 연동)
- D&A가 매우 높음 (12%) — 유정 감가상각(Depletion)
- CapEx가 매우 높음 (14%) — 시추·개발비
- NWC 변동도 유의미 (1%)
- 성장률은 **유가 방향성**이 핵심 — 경기 시나리오와 연동
- 실적 업데이트 시 참고: **Production Volume + Realized Price (배럴당 단가)**

---

## 3. 종목별 상세 가이드

---

### TSLA — Tesla Inc

#### 모델 구조
| 항목 | 값 | 비고 |
|------|----|------|
| segments | Automotive / Energy / Services | GAAP 매출 |
| net_debt | −$29,000M | 순현금 → EV에 가산 |
| da_pct | 5% | 설비 감가상각 |
| capex_pct | 8% | Gigafactory 투자 |
| nwc_pct | 2% | 재고/매출채권 증가 |
| margin_growth_per_year | 1%p/년 | 규모의 경제 마진 개선 |

#### 무엇을 봐야 하나
- **Automotive 매출**: 차량 인도 대수 × ASP — 가장 큰 매출 비중
- **Gross Margin**: 제조 효율 척도. 20% 이하면 Bear 가정 재검토
- **Energy GWh**: 배터리 스토리지 성장 확인 (Energy 세그먼트 핵심)
- **CapEx 가이던스**: 연간 투자 규모로 capex_pct 업데이트

#### 파라미터 업데이트 기준
```
Automotive growth  = 전년 인도대수 YoY 성장률
Energy growth      = Energy GWh 또는 매출 YoY
op_margin (base)   = 최근 Adj. Operating Margin (Non-GAAP 권장)
net_debt           = Cash & Equivalents − Total Debt (분기 기준)
```

#### Bear / Bull 핵심 가정 차이
- **Bear**: 중국 경쟁 심화 → Automotive 마진 압박, 성장 둔화
- **Bull**: FSD 상용화 → Services 폭발적 성장, 고마진 소프트웨어 매출 반영

---

### OXY — Occidental Petroleum

#### 모델 구조
| 항목 | 값 | 비고 |
|------|----|------|
| segments | Oil & Gas / Chemicals / Midstream | GAAP 매출 |
| net_debt | +$28,000M | 순부채 → EV에서 차감 |
| da_pct | 12% | 유정 감가상각(Depletion) |
| capex_pct | 14% | 시추·개발 투자 |
| nwc_pct | 1% | 운전자본 변동 |

#### 무엇을 봐야 하나
- **Oil & Gas 성장률 = 유가 방향 × 생산량 변화**
  - 유가 상승기: Base/Bull 성장률 상향
  - 유가 하락기: Bear 성장률 마이너스
- **Op Margin**: Gross Margin − OpEx 비율. 유가에 매우 민감
  - WTI $70 → ~45% / WTI $80 → ~54% / WTI $90+ → ~61%
- **D&A (12%)**: Depletion 방식으로 인식 — 매출 변화에 비례해 유지
- **CapEx (14%)**: 유지보수 CapEx + 성장 CapEx 합산
- **순부채 ($28B)**: Berkshire Hathaway 투자 이후 감소 추세 — 매분기 확인

#### 파라미터 업데이트 기준
```
oil_gas_growth  = 유가 YoY 변화 + 생산량 가이던스
op_margin       = 분기 실적의 (EBIT / Revenue)
net_debt        = 분기 보고서 Long-term Debt − Cash
```

#### 주의사항
- OXY는 **경기 민감 주식** — WACC에 risk premium 반영 필수
- terminal_g를 Bear에서 0%로 설정한 이유: 장기 화석연료 수요 감소 반영
- Midstream은 고정 계약 수익 → 상대적으로 안정적

---

### KKR — KKR & Co Inc

#### 모델 구조 (핵심 주의)
| 항목 | 값 | 비고 |
|------|----|------|
| segments | FRE / Carry / Insurance | **GAAP 매출 아님 — 경영이익** |
| op_margin | 1.00 | 의도적 설정 — 세그먼트가 이미 이익 |
| net_debt | 0 | 운용사 특성상 기업 레벨 순부채 없음 |
| da_pct | 0% | 자산경량 비즈니스 |
| capex_pct | 0% | 설비 투자 없음 |

#### GAAP 재무제표와 절대 직접 비교하지 말 것
KKR의 GAAP 매출에는 Global Atlantic 보험료 수입, 투자 관련 수익 등이 포함되어 세그먼트 수치보다 수배 크게 나온다. yfinance 실적 비교가 의미 없는 이유.

#### 무엇을 봐야 하나
- **FRE (Fee-Related Earnings)**: AUM × 운용보수율
  - KKR Earnings Release "FRE" 항목 직접 확인
  - AUM이 성장하면 FRE 성장
- **Carry (Performance Income)**: 투자 회수 시 발생 — 주식시장·PE 환경에 매우 민감
  - 호황기: 높음 / 불황기: 0 근처
  - Bear 시나리오에서 Carry growth = 0% 가정 이유
- **Insurance (Global Atlantic)**: 보험 운용 이익 — 비교적 안정적

#### 파라미터 업데이트 기준
```
FRE              = Earnings Release "Fee-Related Earnings" ($M)
Carry            = 최근 2~3년 평균 Realized Performance Revenue ($M)
Insurance        = Global Atlantic Adjusted Operating Earnings ($M)
FRE growth       = AUM 성장률 추이 (10-Q/10-K)
```

#### Bear / Bull 핵심 가정 차이
- **Bear**: PE 시장 냉각 → Carry 0%, FRE만 성장
- **Bull**: PE 호황 + 보험 확장 → 전 세그먼트 고성장

---

### ORCL — Oracle Corp

#### 모델 구조 (특수 설정 2가지)
| 항목 | 값 | 비고 |
|------|----|------|
| segments | Cloud & License / Cloud Other / HW & Services | GAAP 매출 |
| net_debt | +$118,000M | 순부채 (구채무 $88B + 신규채권 $30B) |
| da_fixed | $5,500M/년 | **매출에 비례하지 않는 고정 금액** |
| capex_mode | nopat | CapEx = NOPAT × 비율 |
| capex_phase_switch_year | 2 | 3년차부터 매출 × 10%로 전환 |
| shares | 2,901M | 기존 2,760 + ATM 신주 141M 포함 |

#### CapEx 2단계 구조 이해
```
Year 1~2 (투자기): CapEx = NOPAT × {Bear:80% / Base:70% / Bull:60%}
                   → AI 인프라·데이터센터 집중 투자 반영
Year 3~5 (성숙기): CapEx = 매출 × 10%
                   → 투자 사이클 완료 후 유지보수 수준으로 정상화
```

#### 무엇을 봐야 하나
- **Cloud & License 성장률**: 전체 EV의 핵심 드라이버 (매출 비중 80%+)
  - AI 수요 반영한 클라우드 계약 성장률 확인
- **Operating Margin**: Non-GAAP 기준 권장 (주식보상 제외)
- **D&A ($5,500M)**: 인수합병 상각 — 분기 Cash Flow Statement에서 확인
  - 큰 변화 있으면 da_fixed 수정 필요
- **CapEx**: Capital Expenditures (Cash Flow Statement)
  - 투자 사이클 전환 시점 확인 → capex_phase_switch_year 수정
- **순부채**: 10-Q의 Long-term Debt − Cash
  - 추가 채권 발행 있으면 net_debt 업데이트
- **주식수**: 희석 주식수 + ATM 발행 계획 반영

#### 파라미터 업데이트 기준
```
Cloud_License_growth = Earnings Release의 Cloud Revenue YoY
op_margin (base)     = Non-GAAP Operating Margin (IR 자료)
da_fixed             = Cash Flow Statement "Depreciation & Amortization"
net_debt             = Total Debt − Cash (10-Q)
shares               = Diluted Shares Outstanding + 예정 ATM 규모
```

---

## 4. 파라미터 수정 체크리스트

### 실적 발표 후 업데이트 순서

```
1. 손익계산서
   [ ] Revenue (세그먼트별) → segments / growth 검토
   [ ] Operating Income → op_margin 검토
   [ ] EPS → 세율 확인

2. 현금흐름표
   [ ] D&A → da_pct 또는 da_fixed 검토
   [ ] CapEx → capex_pct 또는 capex_ratio 검토
   [ ] Working Capital 변동 → nwc_pct 검토

3. 재무상태표
   [ ] Cash & Equivalents
   [ ] Short/Long-term Debt
   → net_debt = Debt − Cash 재계산

4. 가이던스
   [ ] 다음 분기/연도 성장률 가이던스 → growth 조정
   [ ] 마진 가이던스 → op_margin 조정
   [ ] CapEx 가이던스 → capex_pct 조정
```

### WACC 조정 기준
```
WACC 올리는 경우: 금리 상승 / 부채 증가 / 경쟁 심화 / 실적 불확실성 확대
WACC 내리는 경우: 금리 하락 / 비즈니스 안정성 입증 / 부채 감소

통상 범위:
  안정적 대형주 (KKR, ADBE, ROP): 8.5~10%
  성장주 (TSLA, ORCL):             9~11%
  경기민감주 (OXY):               7.5~11% (시나리오 간 큰 차이)
```

### terminal_g 기준
```
0%:   원자재·쇠퇴 산업 (OXY Bear)
1.5~2%: 성숙 비즈니스 보수적 가정
3%:   GDP 성장률 수준 (일반 기업 Base)
4~5%: 고성장 기업 Bull (단, WACC − tg > 0 유지 필수)
```

---

## 5. 신규 종목 추가 가이드

### dcf_data.py에 추가하기 전 확인 사항

```
Q1. 이 회사의 "매출"은 GAAP 매출인가, 아니면 다른 지표인가?
    → GAAP 매출: 일반 구조 (Type A/D)
    → 경영이익/FRE 등: op_margin=1.0 구조 (Type B, KKR 참고)

Q2. D&A는 매출에 비례하는가, 고정 금액인가?
    → 비례: da_pct 사용
    → 고정: da_fixed 사용 (ORCL 참고)

Q3. CapEx 성격은?
    → 매출 비례 유지보수형: capex_mode="rev"
    → NOPAT 연동 투자형 (전환 계획 있음): capex_mode="nopat" + phase_switch

Q4. 순부채 계산
    → net_debt = 총 차입금 − 현금성 자산
    → 양수 = 순부채 (EV에서 차감)
    → 음수 = 순현금 (EV에 가산)

Q5. 주식수
    → 희석 주식수 (Diluted Shares Outstanding) 사용
    → 스톡옵션, RSU, 전환사채 포함 여부 확인
```
