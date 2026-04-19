# JNJ — 스트레스 테스트

> **Base 파일 연결**: `JNJ_base.md` 의 Bear $160 / Extreme Bear $107 (1-year forward target) 값을 기준으로 시뮬레이션한다.
> **주의**: 본 파일의 시나리오는 DCF 가중평균에 **반영하지 않는다**. 외생 충격·꼬리 위험 점검용 참고 자료다.

**작성일**: 2026-04-19
**선택 기준**: JNJ에 관련성 높은 5개 시나리오 (금리, talc 합의 폭발, IRA 확장, Pharma tariff 결렬, MedTech CAPEX 충격). 일반 매크로(US-China decoupling, 일반 경기침체)는 base의 리스크 요인에서 부분 커버되어 제외.

---

## 1. 금리 상승 (WACC +200bp)

### 가정
- 연준 재긴축 또는 재정 리스크로 **10Y UST 4.26% → 6.26% (+200bp)**. 2026~27 디스인플레이션 정체(CPI 3.5%+ 고착) + term premium 확대 시나리오
- JNJ WACC 7.5% → 9.5%
- IM EBITDA Multiple 14x → 11x (장기 CF 비중 높은 pharma 듀레이션 민감)
- MedTech EBITDA Multiple 20x → 15x (MedTech는 장기 capacity 투자 비중 높음)

### 재무/밸류에이션 충격 추정
- IM Value: $25.8B × 11x = $284B (vs Base $361B, -$77B)
- MedTech Value: $10.0B × 15x = $150B (vs Base $200B, -$50B)
- Subtotal: $434B (vs $561B, -$127B / -23%)
- 주주가치: $434B - $20B - $10B = $404B / 2.41B = **$168 (vs Base $220, -24%)**
- 영향 크기: **-$52/share, -24%**

### 버티는 근거
- JNJ는 **AAA 신용등급** (전세계 2개사 중 하나) — 차환 비용 IG spread 50bp 수준 (피어 80~120bp 대비), 금리 상승 환경에서 **상대적 자본 비용 우위**
- Pharma + MedTech 현금흐름은 **소득 비탄력 일부** (환자 health spending 우선순위 높음). Q1'26 +10% 성장은 매크로 둔화에도 가속
- **60+년 연속 배당 증액** + AAA → 금리 상승 환경에서 **defensive equity 수요** (2022~23 상대 강세 이력 — JNJ -3% vs S&P -19%)
- FY25 Net Debt $20B, 가중평균 듀레이션 8년 — 신규 발행 비중 낮음

### 취약 근거
- JNJ Forward PE 21x는 historical 평균(17x) 대비 약간 고평가 — 할인율 상승 시 **압축 여지 큼**
- Pharma는 본질적으로 **growth duration**: Tremfya/Carvykti/TAR-200 peak는 5~7년 미래 → TV 비중 70%+ → 금리 충격 직격
- MedTech CAPEX 사이클 (Abiomed/Shockwave 통합, Ottava 개발, PFA 시설) 진행 중 → 신규 발행 금리 상승 시 재투자 수익률 저하

### 관찰 지표
- 10Y UST yield 5.0% 상향 돌파 or 30Y 6.0% 돌파
- TIPS 10Y breakeven 3%+ (인플레 고착 신호)
- JNJ AAA → AA 등급 강등 신호 (S&P/Moody's outlook 수정)
- Forward PE 18x 이하 지속 (멀티플 압축 개시 신호)

### 실현가능성: **15%**
- 근거: 연준 2026~27 dot plot은 중립금리 3.5~4.0% 구간, 시장 forward curve는 4~5% 수준 예상. 단, 재정 리스크(국채 수급 악화)로 term premium 확대 시 realized yield 5~6% 가능. Base case는 아니나 완전 무시 불가

### Bear DCF 반영 시 기여
- **주가 충격 ≈ -24%** × **실현가능성 15%** = **-3.6%p** Bear 추가 기여
- 산식: Bear $160 × (1 − 0.036) = $154 (금리 단독 반영 시)

---

## 2. Talc Litigation 합의 폭발 ($30B+ 합의 또는 추가 jury verdict 누적)

### 가정
- 2026 mediator(Fouad Kurdi) 단계 결렬 → 추가 bankruptcy 시도 또는 글로벌 합의 $30B+ 강제
- 추가 동기: **Kenvue 책임 분쟁 대법원** 판결 시 J&J 단독 책임 비중 70%+ 확정, 또는 plaintiff bar 추가 case 5,000건+ 등록
- **추가 jury verdict 누적**: 분기당 $1B+ verdict 1~2건 발생 (2024 미주리 $2B 사례 반복)
- 합의금 PV: Base $10B → Stress $30B (3배 충격)

### 재무/밸류에이션 충격 추정
- Talc PV: -$10B → -$30B (-$20B 추가)
- IM 멀티플: 14x → 12x (uncertainty discount 2x)
- MedTech 멀티플: 20x → 18x (J&J 전체 valuation discount)
- IM Value: $25.8B × 12x = $310B (vs Base $361B)
- MedTech Value: $10.0B × 18x = $180B (vs Base $200B)
- Subtotal: $490B
- 주주가치: $490B - $20B - $30B = $440B / 2.41B = **$183 (vs Base $220, -17%)**
- 영향 크기: **-$37/share, -17%**

### 버티는 근거
- **AAA 신용 + $19.7B FCF** → $30B 합의도 5~6년 분할 시 흡수 가능 (FY25 FCF 기준 1.5년 분량)
- **Kenvue 일부 책임 분담** — 2024-04 Garcia case에서 Kenvue 공동 피고 확정, 2023 분리 후 SOTP 법적 분담 가능
- 합의 자체가 **uncertainty discount 해소 catalyst** — 시장이 talc 디스카운트 -$15B 이상 반영 중이라면, $30B 합의 발표는 단기 충격 후 valuation rebound 가능
- **60+년 연속 배당 증액 유지 의지** → 합의금 분할 시 배당 보호 유지

### 취약 근거
- $30B+ 합의는 **회계상 special charge** 처리 → 1회 EPS -$10/share 임팩트 + 멀티플 압축 동반 (perception risk)
- AAA 신용 등급 **outlook 수정 가능** — Moody's/S&P 등급 압박 → 차환 비용 +30~50bp
- **Class action 확장 위험** — 추가 plaintiff 등록 시 (현재 67,115건) 100,000건+ 가능 → 합의 후 추가 "tail" 사건 누적

### 관찰 지표
- Mediator (Kurdi) 합의 발표 (2026~27) — 합의 규모 $20B 초과 시 경고
- 추가 jury verdict 분기 모니터링 ($1B+ verdict 분기당 1건 이상 발생 시 경고)
- Kenvue 분담 비율 대법원 판결 (2026~27 예상)
- J&J 신용 outlook 수정 (S&P/Moody's "Negative" 변경 시 경고)
- Plaintiff bar 신규 등록 trend (drugwatch.com 집계)

### 실현가능성: **15%**
- 근거: 회사 제안 $8B와 plaintiff 청구 $20B+ 격차에서 mediator 합의는 $12~18B 범위 가장 가능성 높음. $30B+ 합의는 추가 jury verdict 누적 + Kenvue 분담 거부 + 신규 case 확장 동시 충족 시. **부분 시나리오 30% × 전면 30% = 약 10%, plus mediator 결렬 5%**

### Bear DCF 반영 시 기여
- **주가 충격 ≈ -17%** × **실현가능성 15%** = **-2.6%p** Bear 추가 기여
- 산식: Bear $160 × (1 − 0.026) = $156 (talc 단독 반영 시)

---

## 3. IRA 확장 — 2027 cycle Tremfya 지정 + Part B 확장

### 가정
- 2026-02 CMS 2027 cycle 발표에서 **Tremfya 지정** (J&J 핵심 성장 동력 직접 충격)
- 동시 **IRA Part B 확장** — Carvykti 등 infusion 약물 협상 대상 포함 (2026~27 의회 입법 시도)
- Tremfya 협상가 list 대비 -50% 적용 (Stelara -66%보다 완화)
- Carvykti -40% (high-cost CAR-T 정치적 압력)

### 재무/밸류에이션 충격 추정
- Tremfya peak $10B → $5B (Medicare 50% 점유 가정 × -50% 가격 인하)
- Carvykti peak $5B → $3B
- 합계 영향: -$7B 매출 / -$3.5B EBITDA (peak 기준)
- FY28~30 IM EBITDA -$3.5B → IM Value 14x × $22.3B = $312B (vs Base $361B, -$49B)
- 주주가치: $312B + $200B - $20B - $10B = $482B / 2.41B = **$200 (vs Base $220, -9%)**
- 영향 크기: **-$20/share, -9%**

### 버티는 근거
- **Tremfya 적응증 확장** (IBD, AS 등)으로 미협상 시장 (privately insured + ex-US) 비중 60%+ 유지 가능
- Trump 행정부의 IRA "수정" 의지 — 2025년 small molecule 보호 9년 → 13년 연장 입법 논의
- **Carvykti는 자가 CAR-T 제조 비용** 자체가 $400K+ → IRA Part B 확장도 가격 인하 폭 제한적
- ex-US 매출 비중 (Tremfya ~40%, Carvykti ~30%) → IRA 무영향

### 취약 근거
- Tremfya는 **biologic** (large molecule)이라 IRA 보호 13년 적용 — 2017 first approval 기준 2030부터 협상 가능
- **첫 cycle 약물 가격 -65~70% 인하 패턴** 확립 → 2027 cycle도 유사 폭 적용 가능성
- Carvykti high-cost ($400K+/환자) 정치적 표적 — Medicare for All 정치 사이클에서 우선 타겟
- **IRA Part B 확장**은 의료서비스 제공자에게도 충격 → 의사 처방 패턴 변화 가능

### 관찰 지표
- 2026-02 CMS 2027 cycle 약물 발표 — Tremfya 포함 여부
- IRA Part B 확장 입법 발의 (의회 health committee)
- Trump 행정부 IRA 수정 EO 진행 (2026~27)
- Tremfya quarterly Medicare/private payer mix 변화

### 실현가능성: **15%**
- 근거: Tremfya 2027 cycle 지정 가능성 25% (2017 approval 기준 9년차 2026 가능, 단 biologic 13년 보호 적용 시 미해당). Part B 확장은 입법 단계로 25% 가능성. **합산 시나리오 약 15%**

### Bear DCF 반영 시 기여
- **주가 충격 ≈ -9%** × **실현가능성 15%** = **-1.4%p** Bear 추가 기여
- 산식: Bear $160 × (1 − 0.014) = $158 (IRA 단독 반영 시)

---

## 4. Trump MFN 합의 결렬 + Pharma Tariff 부분 발효

### 가정
- 2026~27 Trump-J&J MFN 합의 결렬 (TrumpRx 매출 미달 또는 OECD 가격 매칭 추가 약물 거부)
- **brand drug 100% tariff 부분 발효** — EU/Ireland 생산 약물 (Stelara biosimilar용 supply chain은 별개) 영향
- J&J Innovative Medicine 약 25% EU/Ireland 생산 의존 (FY25 segment 기준)
- 보복관세 가능성: EU/Ireland → US 수출 약물에 동일 100% tariff

### 재무/밸류에이션 충격 추정
- COGS 증가: FY25 IM COGS $14B × EU/Ireland 비중 25% × 100% tariff = **연 $3.5B 비용 증가**
- 단, 기존 inventory 6~12개월 + 신규 미국 시설 (PA + NC, 2027~28 가동) 전환 가능
- 영향 기간: 2026 Q3~2028 Q4 (전환 기간 2~3년)
- IM EBITDA 영향: -$2~3B/년 (FY27 peak 영향)
- IM Value: $25.8B - $2.5B = $23.3B × 12x (uncertainty discount) = $280B (vs Base $361B)
- 주주가치: $280B + $200B - $20B - $10B = $450B / 2.41B = **$187 (vs Base $220, -15%)**
- 영향 크기: **-$33/share, -15%**

### 버티는 근거
- J&J는 **2025-11 MFN 합의 + PA/NC 신규 시설 발표** → 합의 결렬 가능성 낮은 정치적 시그널
- $5B+ US CAPEX 분산 투자 → 2027~28 US 공급 비중 70%+ 목표
- ex-US 매출 비중 (IM 약 50%) → 보복관세 피해도 부분
- Carvykti, Caplyta 등 신규 자산은 **이미 US 제조** → tariff 노출 없음

### 취약 근거
- MFN 합의 자체가 정치적 — Trump 행정부 변경 또는 정책 변경 시 결렬 가능
- Stelara biosimilar 공급망은 EU 의존도 높음 — biosimilar 가격 더 인하 시 tariff 비용 흡수 어려움
- 신규 시설 가동까지 **18~24개월** 시간차 — 2026~28 transition window 취약

### 관찰 지표
- White House MFN 합의 추가 약물 발표 (반기 모니터링)
- TrumpRx 직판 매출 데이터 (회사 quarterly disclosure)
- USTR Section 232 pharmaceutical 추가 조치
- J&J PA/NC 시설 가동 timeline 진척
- EU Commission 보복관세 발표

### 실현가능성: **10%**
- 근거: MFN 합의 결렬은 정치 변경 시나리오 (15%) × tariff 부분 발효 (50% 조건부) = 약 7~8%. 약간 상향 10% 채택

### Bear DCF 반영 시 기여
- **주가 충격 ≈ -15%** × **실현가능성 10%** = **-1.5%p** Bear 추가 기여
- 산식: Bear $160 × (1 − 0.015) = $158 (tariff 단독 반영 시)

---

## 5. MedTech CAPEX/공급망 충격 — Abiomed/Shockwave 통합 실패 + Ottava 추가 지연

### 가정
- Abiomed Impella **PROTECT IV 가이드라인 미등재** + Shockwave IVL **CALCIFY trial 후속 데이터 부진** → cardiovascular 가속 둔화 (Q1'26 +14.4% → +5%)
- **Ottava 상업화 추가 2년 지연** (현재 2026~27 → 2028~29) — Intuitive da Vinci + Medtronic Hugo 양면 압박 가속
- DePuy 분사 진행에도 **Spinco 가치 평가 약세** (ZBH peer 8x EBITDA가 6x로 하향)
- MedTech CAPEX (PFA 시설, robotic 개발) 비용 증가 → margin -200bp

### 재무/밸류에이션 충격 추정
- MedTech 매출: $37B → $34B (cardiovascular 둔화 + ortho 약세)
- MedTech EBITDA 마진: 27% → 25% (-200bp)
- MedTech EBITDA: $8.5B (vs Base $10B)
- MedTech 멀티플: 20x → 16x (성장 둔화 + 가이던스 신뢰성 하락)
- MedTech Value: $8.5B × 16x = $136B (vs Base $200B, -$64B)
- 주주가치: $361B + $136B - $20B - $10B = $467B / 2.41B = **$194 (vs Base $220, -12%)**
- 영향 크기: **-$26/share, -12%**

### 버티는 근거
- IM segment ($361B) 무영향 — JNJ는 segment 다각화로 일부 상쇄
- AAA 신용 + $19.7B FCF → CAPEX 지속 + M&A 옵션 유지
- Cardiovascular 시장 자체 (PCI, EP, AFib) **장기 성장 유효** — 기술 표준 변경되어도 신규 acquire 가능
- Vision (Acuvue) 안정 매출 buffer

### 취약 근거
- DePuy 분사 진행 중인 시점에서 **MedTech 가치 unlock 기대**가 핵심 catalyst인데, 이 시나리오는 정확히 그 catalyst 무력화
- Cardiovascular Q1'26 +14.4%는 Abiomed/Shockwave 인수 효과 검증 데이터 — 둔화 시 인수 정당성 의문 (impairment risk)
- Ottava 추가 지연은 **5년 누적 6+ 회 지연** 패턴 — investor confidence 압박

### 관찰 지표
- Abiomed Impella 분기 매출 trend (감소 시 경고)
- Shockwave IVL 분기 매출 trend
- Ottava IDE timeline (2026 H2 데이터 readout)
- DePuy 분사 valuation 시장 평가 (2026 mid 업데이트 시)
- BSX Farapulse + MDT PulseSelect 분기 매출 (J&J 점유 잠식 신호)

### 실현가능성: **10%**
- 근거: Abiomed/Shockwave 통합 실패 가능성 15% × Ottava 추가 지연 50% × 동시 발생 약 8%. 약간 상향 10% 채택

### Bear DCF 반영 시 기여
- **주가 충격 ≈ -12%** × **실현가능성 10%** = **-1.2%p** Bear 추가 기여
- 산식: Bear $160 × (1 − 0.012) = $158 (MedTech 단독 반영 시)

---

## Bear DCF 시뮬레이션 합산

### 시나리오별 충격 × 확률 = Bear 기여

| # | 시나리오 | 주가 충격 | 실현가능성 | Bear 기여 (%pt) |
|---|---------|---------|----------|--------------|
| 1 | 금리 +200bp (WACC 9.5%) | -24% | 15% | -3.6% |
| 2 | Talc 합의 폭발 ($30B+) | -17% | 15% | -2.6% |
| 3 | IRA 2027 Tremfya + Part B 확장 | -9% | 15% | -1.4% |
| 4 | MFN 합의 결렬 + Tariff 부분 발효 | -15% | 10% | -1.5% |
| 5 | MedTech 통합 실패 + Ottava 지연 | -12% | 10% | -1.2% |
| **합계 (단순 합산)** | | | | **-10.3%** |

### 동조성 해석 (상관관계 고려 합산)

- **시나리오 1 ↔ 2**: **약한 양의 상관** — 금리 상승은 talc 차입 비용 증가, but 합의 자체는 무관
- **시나리오 1 ↔ 3**: **독립** — 금리는 매크로, IRA는 정치 정책
- **시나리오 1 ↔ 4**: **중상관** — 금리 상승 + tariff는 동일 매크로 위기 환경에서 동조 가능
- **시나리오 1 ↔ 5**: **약한 양의 상관** — 금리 상승 시 MedTech CAPEX 비용 증가 → 통합 실패 가속 가능
- **시나리오 2 ↔ 4**: **독립** — talc 합의와 tariff는 무관
- **시나리오 3 ↔ 4**: **중상관** — IRA + MFN은 동일 정치 사이클에서 동조 가능 (Democratic vs Republican)
- **시나리오 4 ↔ 5**: **약한 양의 상관** — Tariff는 MedTech 디바이스 가격에도 일부 영향 (수입 부품)

**동조성 보정**:
- 시나리오 1 + 4 동조 (중상관) → 개별 합 -5.1% → 동조 시 -4.0%로 보정
- 시나리오 3 + 4 동조 (중상관) → 개별 합 -2.9% → 동조 시 -2.0%로 보정 (시나리오 4 부분 중복)
- 시나리오 2 (독립 유지)
- 시나리오 5 (독립 유지)

**보정 후 Bear 기여 합계**: -4.0% (금리+tariff) + -2.0% (IRA+tariff 잔여) + -2.6% (talc 독립) + -1.2% (MedTech 독립) = **약 -9.8%** (단, 시나리오 4 더블 카운트 제거 시 -8%)

**최종 보정**: **약 -9%** (동조성 + 더블카운트 제거)

---

## Bear → Stress 반영 시 비교

| 구분 | 값 | 대비 |
|------|------|------|
| **Base 파일 Bear 1-year target** | $160 | 기준선 |
| **Base 파일 Extreme Bear 1-year target** | $107 | -33% vs Bear |
| **단순 합산 적용 시 Bear → $144** | $160 × (1 − 0.103) | -10.3% |
| **동조성 보정 적용 시 Bear → $146** | $160 × (1 − 0.09) | -9% |

### 시사점

1. **동조성 보정 $146는 Extreme Bear $107보다 $39 높다** — Base 파일의 Extreme Bear는 본 Stress 시나리오 대부분을 이미 반영한 구조 (Talc 합의 폭발 + 신약 가속 둔화 + IRA 확장 + 매크로 위기가 **동시 발생**). 즉, Extreme Bear는 Stress 시뮬레이션 전부 반영한 수준보다 보수적.

2. **가장 큰 기여**: 금리 상승 (Scenario 1, -3.6%) > Talc 합의 폭발 (Scenario 2, -2.6%) > MFN 결렬 (Scenario 4, -1.5%) > IRA 확장 (Scenario 3, -1.4%) > MedTech 통합 (Scenario 5, -1.2%)
   - **Scenario 1 (금리)** 은 확률 15% × 충격 -24%로 Bear 기여 최대 — JNJ는 defensive equity로 분류되나 본질적으로 growth duration (TV 비중 70%+)
   - **Scenario 2 (Talc)** 는 확률 15% × 충격 -17%로 두 번째 — 일회성 충격이지만 멀티플 압축 동반

3. **참고**: 본 Stress 시뮬레이션은 Revaluation 가중평균에 **반영하지 않는다**. Extreme Bear 10% 확률 설정은 본 Stress 합계보다 우선한다. 본 시뮬레이션은 **"모두 발생했을 때 Bear가 얼마나 더 깊어질 수 있는가"** 점검용이다.

4. **Extreme Bear $107이 보수적으로 설정되어 있는 이유**: SOTP IM 9x + MedTech 13x (멀티플 압축) + Talc -$25B + Net Debt -$25B (talc 차입 반영). 단일 macro/legal 충격보다 **복합 충격(LOE 가속 + 합의 폭발 + IRA + 매크로)** 을 반영한 설계.

5. **모니터링 우선순위 (꼬리 위험 관점)**:
   - **1순위**: 10Y UST 5%+ 지속 여부 (금리 충격)
   - **2순위**: Talc mediator 합의 발표 ($20B+ 시 경고)
   - **3순위**: 2026-02 CMS IRA 2027 cycle 약물 발표 (Tremfya 포함 여부)
   - **4순위**: MedTech Q2~Q3'26 cardiovascular 분기 매출 trend (둔화 시 통합 의문)
   - **5순위**: Trump 행정부 MFN 합의 추가 약물 발표 또는 결렬 시그널
