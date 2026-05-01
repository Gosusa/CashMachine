---
kind: analysis-reference
name: factor_catalog
version: 0.1.0
referenced_by:
  - pipeline/01_business.md   # M1 핸드오프 인식
  - pipeline/02_growth.md     # M2 핸드오프 인식
  - pipeline/03_dcf_factors.md # M3 환산
---

# DCF Factor 카탈로그 (Reference)

> 모듈 3가 산출하는 모든 factor의 **정의·시나리오 변동 여부·출처**를 single source of truth로 정리.
> 모듈 1·2는 이 catalog 보고 어떤 핸드오프 필드를 채워야 하는지 인지.
> 모듈 3는 환산 시 catalog 출처 매핑 따름.

---

## 1. 목적 (Why)

5-모듈 파이프라인에서 **factor 정의·출처가 분산되면** M1·M2·M3 간 핸드오프가 깨지기 쉽다. 이 catalog는:

1. 모듈 3가 산출해야 하는 모든 factor를 한 곳에 명시
2. 각 factor의 출처 (M1·M2·외부) 매핑
3. 시나리오 변동 여부 (확정값 vs Bear/Base/Bull)
4. M1·M2가 무엇을 핸드오프해야 하는지 역추적 가능

> **변수 정의·계산 공식·수학적 제약**은 [dcf_methods.md](./dcf_methods.md)에. 이 파일은 **factor의 출처와 의존성**에 집중.

### Factor 부재 시 처리 원칙

모든 factor를 억지로 채우지 않는다. 채울 수 없는 경우 다음 원칙 따름:

1. **method-specific 무관** — 적용 method가 아니면 `factors_X` 객체 자체 `null`. 다른 method의 factor를 억지로 산출 X
2. **proxy 우선** — 직접 데이터 없으면 산업 평균·peer 값 사용. **proxy임을 명시** (`factor_rationale`에 "proxy: industry avg X")
3. **N/A 명시** — proxy도 없거나 사업부에 적용 불가하면 `null` 또는 `'N/A'` + 사유 기록 (예: "매출 없는 R&D 사업부")
4. **핵심 factor 부재 시 분석 보류** — `revenue_y0`·`WACC`·`diluted_shares_outstanding` 같은 핵심이 진짜 없으면 **method 변경 또는 분석 자체 보류**. 억지 추정 금지
5. **`factor_rationale`에 부재·proxy 사유 의무** — null이든 proxy든 모든 케이스에 사유 기록 (감사 가능성)

---

## 2. 회사 단위 Factor

회사 단위로 한 번 산출해 모든 사업부·시나리오에 적용. 사업부별 risk·세율 차이 큰 경우만 segment override.

| Factor | 정의 | 시나리오 변동 | M1 출처 | M2 출처 | 외부 데이터 |
|---|---|---|---|---|---|
| `wacc` | 가중평균자본비용 (CAPM 기반) | 확정 | — | — | ✅ Rf·Beta·ERP·CoD·D/E weight |
| `wacc_components.rf` | 무위험 수익률 | 확정 | — | — | ✅ 작성일 10Y Treasury |
| `wacc_components.beta` | 시장 베타 | 확정 | — | — | ✅ 5년 weekly Beta (시장 데이터) |
| `wacc_components.equity_risk_premium` | 시장 위험 프리미엄 | 확정 | — | — | ✅ 5~6% (Damodaran 또는 시장 표준) |
| `wacc_components.cost_of_debt` | 부채비용 | 확정 | — | — | ✅ 회사 장기채 yield 또는 평균 borrowing rate |
| `wacc_components.debt_to_equity_weight` | 시장가치 D/E weight | 확정 | — | — | ✅ 시가총액 + 부채 시장가치 |
| `effective_tax_rate` | 실효세율 | 확정 | — | — | ✅ 재무제표 IS 3년 평균 (income tax / pretax income) |
| `net_debt` | 순부채 | 확정 | — | — | ✅ BS (총부채 − 현금성 자산) |
| `minority_interest` | 소수주주 지분 | 확정 | — | — | ✅ BS Non-controlling interest |
| `non_operating_assets` | 비영업자산 | 확정 | — | — | ✅ BS (장기 투자·잉여 부동산 등) |
| `corporate_overhead_annual` | 회사 차원 corporate cost (HQ overhead·회사 R&D·executive comp 등) — segment 배분 X, 회사 차원 영구 after-tax PV로 차감 | 확정 | — | — | ✅ 재무제표 (Corporate/Unallocated 항목 + 별도 식별. 회사 단위 영구 비용) |
| `diluted_shares_outstanding` | 희석 주식수 | 확정 | — | — | ✅ Quarterly report (Diluted, RSU·옵션·전환사채 포함) |

---

## 3. 방법별 Factor

### 3.1 Method A — Standard FCF DCF

안정 FCF 생성 사업부 (제조·소비재·산업재·성숙 SaaS).

**Invariant** (시나리오 무관):

| Factor | 정의 | M1 출처 | M2 출처 | 외부 |
|---|---|---|---|---|
| `forecast_years` | 예측 기간 N | `strategic_bet.time_horizon` (참고) | — | (모듈 3 판단, 일반 5~10) |
| `revenue_y0` | 직전 연도 매출 | ✅ `revenue_amount` | — | — |
| `fiscal_year` | revenue_y0 기준 FY | ✅ `fiscal_year` | — | — |
| `tax_rate` | 실효세율 | — | — | (회사 단위 또는 사업부 override) |
| `da_pct_revenue` | D&A / 매출 | — | — | ✅ 재무제표 3년 평균 |
| `nwc_pct_revenue_change` | NWC 변동 / ΔRevenue | — | — | ✅ 재무제표 3년 평균 |
| `capex_pct_revenue_start` | t=0 CapEx 비율 (buildout 피크 케이스 시 높음) | `moats[].lens 4 자본 경량성` (참고) | ✅ `capex_response` (회사 가이던스 단기) | — |
| `capex_pct_revenue_end` | t=N CapEx 비율 (정상화). 변동 없으면 start = end | — | ✅ `capex_response` (장기 정상화) + `structural_insights.capital_intensity_direction` | — |
| `ebit_margin_baseline_start` | t=0 segment-direct EBIT 마진 (early-stage 시 낮음/음수). corporate 제외 | ✅ `operating_income_amount/revenue_amount` LTM (early-stage 시 현재 음수 마진) | ✅ `margin_response` (early baseline) | — |
| `ebit_margin_baseline_end` | t=N segment-direct EBIT 마진 (정상화). 변동 없으면 start = end | — | ✅ `margin_response` (정상화 baseline) + `structural_insights.operating_leverage_direction` | — |
| `terminal_method` | `'gordon'` \| `'exit_multiple'` | — | — | (모듈 3 판단) |

**Driver** (시나리오별 — 본질 분기점 1개):

| Factor | 정의 | M1 출처 | M2 출처 | 외부 |
|---|---|---|---|---|
| `driver_scenarios.{bear/base/bull}.revenue_cagr` | 연평균 매출 성장률 (driver) | `revenue_growth_yoy` (LTM 추세 검증용) | ✅ `driver.{bear/base/bull}_anchor` | — |

**Causal** (driver → 다른 변수 인과 룰, 시나리오 무관):

| Factor | 정의 | M1 출처 | M2 출처 | 외부 |
|---|---|---|---|---|
| `causal.margin_leverage` | 매출 cagr delta → t=N 마진 delta 계수 (0이면 fixed) | — | ✅ `margin_response` (operating leverage 적용 시 계수) + `structural_insights.operating_leverage_direction` | — |
| `causal.margin_narrative` | 인과 적용 근거 narrative | — | ✅ `margin_response` 그대로 + 정량 환산 | — |
| `causal.capex_narrative` | capex 적용 근거 narrative | — | ✅ `capex_response` 그대로 + 정량 환산 | — |

**Terminal**:

| Factor | 정의 | M1 출처 | M2 출처 | 외부 |
|---|---|---|---|---|
| `terminal_g` (gordon 선택 시) | 영구 성장률 | `moats[].lens 5 장기 지속성` (보수성) | — | ✅ Rf·GDP 보수 적용 |
| `exit_multiple` (exit 선택 시) | EV/EBITDA 배수 | `category` (Cyclical 보정) | — | ✅ peer 역사 범위 |

**수학적 제약** (dcf_methods §3 A 참조):
- terminal_g < WACC
- terminal_g ≤ Rf ≤ 장기 GDP 성장률

---

### 3.2 Method B — SOTP (재귀)

사업부 안에 또 이질적 sub-segment 공존 (드뭄). sub-segment별로 A/D/E factor 적용.

| Factor | 정의 | 출처 |
|---|---|---|
| `sub_segments[]` | sub-segment 목록 | 모듈 3 분해 (M1 사업부 분리에서 시작) |
| `sub_segments[].kind` | `'earnings'` \| `'asset'` | 모듈 3 판단 |
| `sub_segments[].value` | 이익 (세후) 또는 자산 시장가치 | 각 sub에 A/D/E factor 적용 → 그 결과값 |
| `sub_segments[].multiple` | 멀티플 (kind='earnings' 시) | ✅ peer 역사 범위 |

> sub-segment에 적용되는 factor는 §3.1·§3.4·§3.5 (A·D·E) 규칙을 그대로 따름.

---

### 3.3 Method C — Excess Returns

자본 규제 하 운영 (은행·보험·자본 집약 금융).

**확정값**:

| Factor | 정의 | M1 출처 | M2 출처 | 외부 |
|---|---|---|---|---|
| `forecast_years` | 예측 기간 N | `strategic_bet.time_horizon` (참고) | — | (모듈 3 판단) |
| `bv_y0` | 현재 Book Value | — | — | ✅ BS (주주 지분) |
| `coe` | Cost of Equity | — | — | ✅ 회사 WACC 기반 + 금융섹터 +1~2%p 프리미엄 |
| `dividend_payout` | 배당성향 | — | — | ✅ 재무제표 3년 평균 |

**Driver** (시나리오별 — ROE trajectory가 driver):

| Factor | 정의 | M1 출처 | M2 출처 | 외부 |
|---|---|---|---|---|
| `driver_scenarios.{bear/base/bull}.roe_start` | 1년차 ROE (driver 시작) | ✅ `moats[]` (해자 강도가 ROE 결정) | ✅ `driver.bear/base/bull_anchor` (reinvestment_roic_vs_wacc 인과) | (재무제표 LTM ROE 검증) |
| `driver_scenarios.{bear/base/bull}.roe_terminal` | N년차 ROE (선형 보간 끝점) | `moats[].lens 5 장기 지속성` | ✅ `structural_insights.reinvestment_roic_direction` | — |

> Method C는 ROE 자체가 driver — start·end 두 값으로 trajectory 표현. 다른 변수 인과 없음 (causal 생략).

**Terminal**:

| Factor | 정의 | 출처 |
|---|---|---|
| `terminal_g` | 영구 성장률 | ✅ Rf·GDP 보수 (terminal_g < CoE) |

---

### 3.4 Method D — NAV

보유 자산 가치가 사업부 가치 결정 (REIT·E&P·투자회사).

| Factor | 정의 | M1 출처 | M2 출처 | 외부 |
|---|---|---|---|---|
| `assets[]` | 자산 목록 | (사업부에 속한 자산 인식) | (default 시나리오 무관 — 드물게 시장 환경 driver 시 M2 `driver` 인용) | ✅ 자산 시장가치 산출 |
| `assets[].kind` | `'real_estate'`\|`'reserves'`\|`'equity'`\|`'other'` | — | — | (모듈 3 분류) |
| `assets[].value` | 시장가치 | — | — | ✅ 평가 방식별 산출 |
| `assets[].discount` | 유동성·세금 할인 | — | — | ✅ 자산 종류별 표준 |
| `total_debt` | 총부채 | — | — | ✅ BS |
| `preferred` | 우선주 | — | — | ✅ BS |

**자산 평가 방식** (dcf_methods §3 D 참조):
- 부동산 (REIT): NOI / Cap Rate
- 매장량 (E&P): PV-10 (SEC 표준)
- 상장 보유주식: 시장가 × (1 − 유동성·세금 할인)
- 기타: 모듈 3 판단

> NAV의 자산 가치가 시나리오별로 다를 수 있음 (Cap Rate 변동·유가 변동 등). 모듈 2 anchor 활용 시 시나리오 분기.

---

### 3.5 Method E — Forward Multiple (보조용)

현재 이익·FCF가 미래 정상화 수준 반영 못 함 (고성장 적자·사이클 초기·IPO 직후).

**Invariant** (시나리오 무관):

| Factor | 정의 | M1 출처 | M2 출처 | 외부 |
|---|---|---|---|---|
| `metric_name` | `'sales'`\|`'ebitda'`\|`'eps'` | `category` (참고) | — | (모듈 3 판단) |
| `years_to_normalize` | 정상화 시점 N | `strategic_bet.time_horizon` | ✅ scenario narrative | — |
| `discount_rate` | 미래 → 현재 환산 할인율 | — | — | ✅ 10%+ 권장 (일반 WACC보다 높게) |
| `multiple` | 적용 멀티플 (peer 역사 평균, 시나리오 무관) | — | — | ✅ peer 역사 범위 |

**Driver** (시나리오별 — metric이 driver):

| Factor | 정의 | M1 출처 | M2 출처 | 외부 |
|---|---|---|---|---|
| `driver_scenarios.{bear/base/bull}.metric_y_n` | Y_N 시점 지표 값 (driver) | — | ✅ `driver.bear/base/bull_anchor` 환산 | — |

> Method E는 metric이 driver. multiple은 invariant (peer 역사). 사이클 사업의 peak/trough multiple 차이는 metric_y_n 자체에 사이클 phase 반영하면 충분.

**경고**: 보조용. 단독 주된 목표가 산출 금지. 가능하면 다른 방법(A·D)과 병기.

---

## 4. 출처 종합

### 4.1 모듈 1이 채워야 할 핸드오프 (M3가 활용)

`business.json`의 `segments[]`에서:

| 필드 | 활용처 |
|---|---|
| `segment_id` | 사업부 매칭 (모든 method) |
| `category` | Method E `metric_name`, Method A `exit_multiple` 보정 |
| `fiscal_year` | A `fiscal_year`, baseline 확정값 |
| `revenue_amount` | A `revenue_y0`, E `metric_y_n` 검증 |
| `operating_income_amount` | A `ebit_margin_baseline_start` LTM 시작점 (early-stage 시 현재 음수 마진 가능) |
| `revenue_growth_yoy` | A `revenue_cagr` Base 시나리오 검증 |
| `revenue_model.profit_levers` | A `ebit_margin` 정합성 (가격 인상 lever 시 margin 상향) |
| `moats[]` (특히 lens 4·5) | A `capex_pct_revenue`, `terminal_g` 보수성, C `roe_start` |
| `moat_trend` | A·C 마진·ROE trajectory anchor |
| `strategic_bet.time_horizon` | A·C `forecast_years`, E `years_to_normalize` |
| `dcf_method_candidate`, `dcf_method_rationale` | 방법 확정 (M3 §5.2) |
| `conclusion.thesis` | factor_rationale narrative |
| `conclusion.confirmed_strengths/vulnerabilities` | 시나리오 anchor 일관성 검증 |
| `conclusion.handoff.unit_economics_summary` | A `ebit_margin`·`capex_pct_revenue` baseline |
| `conclusion.handoff.growth_driver_candidates` | A `revenue_cagr` 시나리오 anchor 검증 |

### 4.2 모듈 2가 채워야 할 핸드오프 (M3가 활용)

`growth.json`의 `segments[]`에서:

| 필드 | 활용처 |
|---|---|
| `segment_id` | 사업부 매칭 |
| `growth_elements` | factor_rationale (시나리오 anchor 출처) |
| `structural_change.compound_engine` | A·C `roe`/마진/capex 일관성 (재투자 ROIC vs WACC) |
| `scenarios.bear/base/bull` (thesis·필요조건·근거·증거) | factor_rationale narrative |
| `current_position` | A·E LTM 위치 검증 |
| `conclusion.fifteen_pct_feasibility` | factor 보수성 정렬 |
| **`conclusion.handoff.driver`**: | **driver 시나리오별 환산의 핵심 (옵션 A)** |
| ⤷ `type` | M3 driver type 인식 (default `revenue_cagr`) |
| ⤷ `bear_anchor` / `base_anchor` / `bull_anchor` | A `driver_scenarios.{bear/base/bull}.revenue_cagr` 환산 |
| ⤷ `rationale` | factor_rationale (driver 식별 근거) |
| **`conclusion.handoff.margin_response`** | A `causal.margin_leverage` (정량 계수) + `causal.margin_narrative` + invariant `ebit_margin_baseline_start/end` (시계열 trajectory) |
| **`conclusion.handoff.capex_response`** | A invariant `capex_pct_revenue_start/end` (시계열 trajectory, 회사 가이던스) + `causal.capex_narrative` |
| `conclusion.handoff.structural_insights.capital_intensity_direction` | A `capex_pct_revenue_start/end` baseline 보정 |
| `conclusion.handoff.structural_insights.operating_leverage_direction` | A `causal.margin_leverage` 보정 |
| `conclusion.handoff.structural_insights.reinvestment_roic_direction` | C `roe_terminal`, A·C 효과성 |
| `conclusion.handoff.dcf_method_review` | 방법 확정 (M3 §5.2) |

### 4.3 외부 데이터 (M3가 직접 조회)

| 데이터 | 활용처 | 조회 시점 |
|---|---|---|
| 10Y Treasury (Rf) | WACC, terminal_g 제약 | 작성일 |
| Beta (5년 weekly) | WACC | 작성일 |
| Equity Risk Premium | WACC | 5~6% 표준 |
| Cost of Debt | WACC | 회사 장기채 yield |
| 시가총액·부채 시장가치 | WACC D/E weight | 작성일 |
| 재무제표 (BS·IS·CFS, 3~5년) | da_pct, nwc_pct, tax_rate, BV, Net Debt, Minority, Non-op, dividend_payout, 희석 주식수, Cost of Debt | 최근 |
| Peer 멀티플 (역사 범위) | exit_multiple, Method E multiple | 최근 |
| 자산 시장가치 (NAV) | D `assets[]` | 최근 |
| GDP 성장률 (장기) | terminal_g 제약 | 표준 (~2~3%) |

---

## 5. 모듈 활용 가이드

### 5.1 모듈 1 작성 시

이 catalog의 §4.1을 기준으로 `business.json`의 핸드오프 필드를 채움:
- `segments[].handoff.growth_driver_candidates` 필수
- `segments[].handoff.unit_economics_summary` 필수
- `dcf_method_candidate` + `dcf_method_rationale` 필수
- `strategic_bet.time_horizon` (forecast_years 결정에 직접 활용)
- `moats[].lens 4 자본 경량성`, `lens 5 장기 지속성` 명시 (capex·terminal_g 보수성)

### 5.2 모듈 2 작성 시

이 catalog의 §4.2를 기준으로 `growth.json`의 핸드오프 필드를 채움:
- `conclusion.handoff.driver` 필수 (사업부 본질 분기점 1개 — type + bear/base/bull anchor + rationale)
  - 각 anchor에 **정성 (low/mid/high) + 정량 단서 (range·과거 사례)** 둘 다 채움
  - 변수 여러 개 시나리오별 독립 fitting 금지 (격차 폭증 방지)
- `conclusion.handoff.margin_response` 필수 (driver → 마진 인과 narrative + 정량 단서)
- `conclusion.handoff.capex_response` 필수 (driver → capex 인과 narrative + 정량 단서)
- `conclusion.handoff.structural_insights` 필수 (capex·margin·ROE 보정 — 시나리오 무관 정성)
- `conclusion.handoff.dcf_method_review` 명시 (M1 후보 그대로 / revise 권고)
- `structural_change.compound_engine` 명시 (재투자 ROIC vs WACC)

### 5.3 모듈 3 환산 시

각 factor의 출처 매핑 (§3 method별 표) 따름:
- M1·M2 출처 우선 (정성 → 정량 환산)
- 외부 데이터 (재무제표·시장 데이터) 직접 조회
- 새 정성 판단 X (M1·M2 anchor에 충실)
- 모든 시나리오 변동 factor에 `factor_rationale` 의무 (M1·M2 어느 필드에서 환산됐는지)

---

## 6. 정합성 점검

이 catalog 사용 시:
- [ ] 모듈 1 출력 필드 list와 §4.1 활용처 list가 정합 (M1 가이드 점검)
- [ ] 모듈 2 출력 필드 list와 §4.2 활용처 list가 정합 (M2 가이드 점검)
- [ ] 모듈 3 §3 출력 JSON이 §2·§3 모든 factor 포함
- [ ] 모듈 3 §5.3 환산 절차가 §3·§4 출처 매핑 따름
- [ ] 외부 데이터 조회 시점이 §4.3 따름 (작성일 기준 데이터)
