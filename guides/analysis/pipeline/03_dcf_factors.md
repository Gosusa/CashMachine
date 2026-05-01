---
kind: analysis-pipeline
name: dcf_factors
version: 0.1.0
implementation: ai
depends_on:
  - reference/dcf_methods.md
  - reference/factor_catalog.md
inputs:
  - business.json    # 모듈 1 — DCF 방법 후보·baseline
  - growth.json      # 모듈 2 — 시나리오 anchor·구조 인사이트
outputs:
  - dcf_factors.md
  - dcf_factors.json # 모듈 4가 파싱
---

# 모듈 3. DCF Factor 산정

## 1. 목적 (Why)

모듈 1의 사업부 분리·DCF 방법 후보 + 모듈 2의 시나리오 anchor·구조 인사이트를 받아, **사업부별 DCF 방법을 확정**하고 **시나리오별 정량 factor**를 산정한다. 회사 단위 factor (WACC·세율·Net Debt·희석 주식수)도 함께 산출.

다음 모듈(DCF 계산 — Python 코드)이 결정적으로 가치 산정을 수행할 수 있도록 **모든 정량 입력을 완성**하는 게 목적.

---

## 2. 입력 (Inputs)

- **`business.json`** — 모듈 1 결과
  - **방법 후보**: `segments[].dcf_method_candidate`, `dcf_method_rationale`
  - **baseline 확정값**: `fiscal_year`, `revenue_amount`, `operating_income_amount`
  - **단위 경제학·자본 강도**: `revenue_model.unit_economics`, `moats[]` (lens 4 자본 경량성), `conclusion.handoff.unit_economics_summary`
- **`growth.json`** — 모듈 2 결과
  - **시나리오 anchor**: `segments[].conclusion.handoff.scenario_anchors` (Bear/Base/Bull 각각 revenue·margin·capex anchor + 정량 단서)
  - **구조 인사이트**: `structural_insights` (자본집약도·operating leverage·재투자 ROIC 방향)
  - **방법 review**: `conclusion.handoff.dcf_method_review` (그대로 통과 / revise 권고)
- [reference/dcf_methods.md](../reference/dcf_methods.md) — 방법별 변수 정의·계산 공식·수학적 제약·출력 bucket
- [reference/factor_catalog.md](../reference/factor_catalog.md) — **factor의 정의·시나리오 변동·출처 매핑** (single source of truth). 모듈 3가 산출해야 하는 모든 factor와 M1·M2·외부 데이터 출처
- **외부 데이터** (AI가 직접 조회):
  - 재무제표 (BS·IS·CFS, 최근 3~5년) — 실효세율·D&A·NWC·Net Debt·Minority·희석 주식수
  - 시장 데이터 — 작성일 10Y Treasury (Rf), 회사 Beta (5년 weekly), 시장 위험 프리미엄 (5~6%)
  - 부채 데이터 — Cost of Debt (장기채 yield 또는 평균 borrowing rate)
  - peer 멀티플 (Forward Multiple·Exit Multiple 적용 시) — 역사 범위
  - 보유 자산 (NAV 적용 시) — 시장가치, 유동성·세금 할인

---

## 3. 출력 (Outputs)

### `dcf_factors.md` (사람이 읽음)

```markdown
# {TICKER} — DCF Factors

> {회사 단위 factor 한 줄 요약: WACC X%, 세율 Y%, Net Debt $Z}

## 회사 단위 Factor

| 항목 | 값 | 근거 |
|---|---|---|
| WACC | X% | Rf Y% / Beta Z / ERP W% / CoD V% / D/E weight U |
| 실효세율 | X% | 최근 3년 평균 (10-K) |
| Net Debt | ${X}M | 총부채 ${A} − 현금성 자산 ${B} |
| Minority Interest | ${X}M | BS Non-controlling interest |
| Non-operating Assets | ${X}M | BS 비영업자산 |
| 희석 주식수 | X.X M | Diluted (RSU·옵션·전환사채 포함) |

---

## 사업부별 Factor

### 사업부 1. {이름}

**확정 방법**: {A_FCF / B_SOTP / C_ExcessReturns / D_NAV / E_ForwardMultiple}

**방법 확정 근거**:
- 모듈 1 후보: {X}
- 모듈 2 review: {그대로 통과 / revise → Y}
- 최종: {Z} — {근거 한 줄}

**확정값** (시나리오 무관):
| 변수 | 값 | 출처 |
|---|---|---|
| revenue_y0 | ${X}M | 10-K FY{Y} |
| ... | | |

**시나리오별 Factor** (방법별 변수는 [dcf_methods.md §3](../reference/dcf_methods.md#3-방법별-가이드) 참조):
| 변수 | Bear | Base | Bull | 근거 (모듈 2 anchor) |
|---|---|---|---|---|
| revenue_cagr | X% | Y% | Z% | "low/mid/high" + 정량 단서 |
| ... | | | | |

**Terminal**:
- 방법: {gordon / exit_multiple}
- 값: {terminal_g X% (제약: < WACC, ≤ Rf, ≤ GDP) / exit_multiple X.Xx (peer 역사 범위)}

**factor_rationale** (모듈 2 anchor → 정량 환산 근거):
- revenue_cagr: {Bear "low" → 5% — 침체기 -15% 사례 보수적 적용 / Base "mid" → 10% — 가이던스 보수 / Bull "high" → 20% — TAM 침투 가속}
- 마진/CapEx/Terminal: ...

---

(사업부 N개 반복)
```

### `dcf_factors.json` (모듈 4가 파싱)

스키마: [packages/shared-types/schemas/dcf-factors.ts](../../../packages/shared-types/schemas/dcf-factors.ts)

핵심 구조:
```
{
  ticker, analysis_date, guide_version_id,
  based_on_business_analysis_id,
  based_on_growth_analysis_id,

  company_factors: {
    wacc,
    wacc_components: { rf, beta, equity_risk_premium, cost_of_debt, debt_to_equity_weight },
    effective_tax_rate,                  // 사업부 override 시 segments[].tax_rate_override
    net_debt,
    minority_interest,
    non_operating_assets,
    diluted_shares_outstanding
  },

  segments: [
    {
      segment_id,
      method,                             // 'A_FCF'|'B_SOTP'|'C_ExcessReturns'|'D_NAV'|'E_ForwardMultiple'
      method_finalization: {
        m1_candidate, m2_review, final, rationale
      },
      tax_rate_override?,                 // 해외 자회사 등 사업부별 차이 시

      // 방법별 factor — 확정 method 하나만 채워짐
      factors_A?: {                       // Standard FCF DCF
        forecast_years,
        invariant: { revenue_y0, fiscal_year, da_pct_revenue, nwc_pct_revenue_change },
        scenarios: {
          bear: { revenue_cagr, ebit_margin_start, ebit_margin_end, capex_pct_revenue },
          base: {...}, bull: {...}
        },
        terminal: { method, terminal_g?, exit_multiple? }
      },
      factors_B?: { sub_segments: [...] },                  // SOTP
      factors_C?: {                                          // Excess Returns
        forecast_years,
        invariant: { bv_y0, coe, dividend_payout },
        scenarios: { bear: { roe_start, roe_terminal }, base, bull },
        terminal: { terminal_g }
      },
      factors_D?: { assets: [...], total_debt, preferred }, // NAV
      factors_E?: {                                          // Forward Multiple
        invariant: { metric_name, years_to_normalize, discount_rate },
        scenarios: { bear: { metric_y_n, multiple }, base, bull }
      },

      factor_rationale: {                  // 모듈 2 anchor → 정량 환산 근거
        revenue_or_metric_basis,
        margin_basis,
        capex_basis,
        terminal_basis,
        wacc_basis                         // 사업부 risk 다른 경우만
      }
    }
  ]
}
```

---

## 4. 핵심 원칙 (Principles)

1. **모듈 1·2 anchor 위에서 산출** — 새 정성 판단 X. 모듈 2 `scenario_anchors`를 정량으로 환산할 뿐. 모듈 2 anchor가 빠진 영역에 대해 모듈 3가 새 가정 만들지 않음
2. **시나리오 차이 = factor 차이, 시나리오 합성 금지** — Bear cloud + Bull hardware 같은 회사 결과 X. 모든 사업부가 같은 거시 환경을 겪는다는 가정
3. **확정값 = 시나리오 무관** — `*_y0`, `fiscal_year`, `tax_rate`, `total_debt`, `희석 주식수` 등. 시나리오별로 다르게 두지 않음
4. **WACC·세율·Net Debt = 회사 단위** — 사업부별 risk 또는 해외 세율 차이가 큰 경우만 segment-level override (드뭄)
5. **보수적 가정 우선** — Base는 가이던스보다 약간 낮게. terminal_g ≤ Rf ≤ 장기 GDP 성장률 (수학적 제약 + 보수)
6. **외부 데이터 직접 조회 (작성일 시점)** — Rf (10Y Treasury), Beta, peer multiple 등 모델 지식 컷오프에 의존 X
7. **factor_rationale 의무** — 모든 시나리오별 factor에 모듈 2 anchor·근거를 명시 (감사 가능성)

---

## 5. 본체 (Process)

작성 흐름: **회사 단위 factor 산출 → 사업부별 방법 확정 → 사업부별 factor 산정**.

### 5.1 회사 단위 factor 산출

회사 단위로 한 번 산출해 모든 사업부에 적용 (사업부별 차이 큰 경우만 segment override).

**WACC** — CAPM 기반:
- **Rf**: 작성일 시점 10Y Treasury (직접 조회)
- **Beta**: 5년 weekly Beta (시장 데이터). 사업부별 risk 다르면 unlevered → re-lever (드뭄)
- **Equity Risk Premium**: 5~6% (Damodaran 또는 시장 표준)
- **Cost of Equity**: Rf + Beta × ERP
- **Cost of Debt**: 회사 장기채 yield 또는 평균 borrowing rate (Interest expense / 평균 부채)
- **D/E weight**: 시장가치 기준 (시가총액 / (시가총액 + 부채 시장가치))
- **WACC**: (E/V) × CoE + (D/V) × CoD × (1 − t)

**실효세율**: 최근 3년 평균 (Income tax / Pretax income). 해외 자회사 비중으로 사업부별 차이 큰 경우 segment override

**Net Debt**: 총부채 (단기·장기 차입금 + 리스 부채 등) − 현금성 자산 (현금 + 단기투자 + 시장성 증권)

**Minority Interest**: BS의 non-controlling interest (소수주주 지분)

**Non-operating Assets**: BS의 비영업자산 (장기 투자 주식·잉여 부동산 등)

**희석 주식수**: Diluted Shares Outstanding (RSU·스톡옵션·전환사채 포함). 직전 분기 말 기준

> 회사 단위 factor는 **모든 사업부 시나리오에 동일 적용**. 시나리오별로 다르게 두지 않음 (시나리오 합성 금지 원칙과 일관).

### 5.2 사업부별 방법 확정

각 사업부에 대해:
1. 모듈 1 `dcf_method_candidate` 받기
2. 모듈 2 `dcf_method_review` 확인 (그대로 통과 / revise 권고)
3. revise 권고 시 [dcf_methods.md §2 판별 표](../reference/dcf_methods.md#2-사업부-유형-판별--어떤-방법을-쓸-것인가) 재확인하여 변경 여부 결정
4. 최종 방법 1개 확정 + 근거 (모듈 1·2 의견 종합)

> **B. SOTP 선택 시**: 사업부 안에 또 이질적 sub-segment가 공존하는 드문 경우. 적용 시 sub-segment 분해 (각 sub에 A·D·E 적용)까지 모듈 3 책임. 분해 결과는 `factors_B.sub_segments[]`에 저장.

### 5.3 사업부별 Factor 산정

확정 방법에 해당하는 factor 산출.

> **각 factor의 정의·시나리오 변동·출처 매핑은 [factor_catalog.md §3 방법별 Factor](../reference/factor_catalog.md#3-방법별-factor) 따름.** 변수 정의·계산 공식·수학적 제약은 [dcf_methods.md §3](../reference/dcf_methods.md#3-방법별-가이드). 부재 시 처리는 [factor_catalog.md §1 부재 시 처리 원칙](../reference/factor_catalog.md#factor-부재-시-처리-원칙) 따름.

#### 공통 산출 원칙

- **모듈 1 baseline → 확정값**: `revenue_y0` ← `revenue_amount` (M1 fiscal_year 기준)
- **모듈 2 anchor → 시나리오별 정량 환산**: 정성 anchor (low/mid/high) + 정량 단서 (range·과거 사례) → 정확한 %로 환산
- **모듈 2 구조 인사이트 → 보강**: `capital_intensity_direction`이 'heavy'면 capex_pct_revenue 상향, 'light'면 하향 등
- **재무제표 → 확정값**: `da_pct_revenue`, `nwc_pct_revenue_change` 최근 3년 평균
- **수학적 제약 만족**: terminal_g < WACC (gordon), terminal_g ≤ Rf ≤ GDP

#### 방법 적용 시 핵심

- **A. Standard FCF DCF** — 일반 안정 FCF 사업. 시나리오별 변동 = `revenue_cagr`·`ebit_margin`·`capex_pct_revenue`
- **B. SOTP** — 사업부 안에 또 이질적 sub-segment 공존 시 분해 후 각 sub에 A/D/E 적용
- **C. Excess Returns** — 은행·보험. `coe`는 회사 WACC + 금융섹터 +1~2%p 프리미엄
- **D. NAV** — REIT·E&P·투자회사. 자산 시장가치 산출 (부동산 NOI/Cap Rate, 매장량 PV-10 SEC, 상장주식 × (1−할인))
- **E. Forward Multiple (보조용)** — 고성장 적자·사이클 초기. `discount_rate` 10%+. 단독 주된 목표가 산출 금지 (A·D와 병기 권장)

### 5.4 일관성 점검

- **시나리오 일관성**: 같은 시나리오 안에서 모든 사업부 factor가 같은 거시 환경 가정 (예: Bear에서 cloud capex 늘었는데 hardware capex 줄지 않음)
- **모듈 2 anchor 매핑 명시**: 각 시나리오별 factor가 모듈 2 어느 anchor에서 환산됐는지 `factor_rationale`에 기록
- **수학적 제약**: terminal_g·WACC·multiple 모두 [dcf_methods.md](../reference/dcf_methods.md) 제약 만족

---

## 6. 연결 (Cross-references)

- 이전 모듈: [01_business.md](./01_business.md), [02_growth.md](./02_growth.md)
- 다음 모듈: [04_dcf_compute.md](./04_dcf_compute.md) — Python 코드 엔진. dcf_factors.json 받아 사업부별 가치 + 회사 종합 (`'operating_ev'` / `'equity'` bucket 합산) 계산
- 방법론 카탈로그: [reference/dcf_methods.md](../reference/dcf_methods.md) — 변수 정의·공식·제약
- Factor 카탈로그: [reference/factor_catalog.md](../reference/factor_catalog.md) — **모든 factor의 출처·시나리오 변동·부재 시 처리 원칙** (이 모듈의 핵심 reference)

---

## 7. 체크리스트 (Checklist)

**입력 정합성:**
- [ ] business.json·growth.json `segment_id` 매칭
- [ ] 모듈 2 `dcf_method_review` 확인 (그대로 통과 / revise 권고)

**회사 단위 factor:**
- [ ] WACC + 구성 요소 (Rf, Beta, ERP, CoD, D/E weight) 산출 + 출처
- [ ] 실효세율 (최근 3년 평균)
- [ ] Net Debt, Minority, Non-operating Assets
- [ ] 희석 주식수 (Diluted, RSU·옵션 포함)

**사업부별 Factor:**
- [ ] 각 사업부에 방법 확정 + 근거 (M1·M2 종합)
- [ ] 확정값 (`*_y0`, `fiscal_year` 등) 산출 + 출처
- [ ] Bear/Base/Bull 시나리오별 factor 산출
- [ ] `factor_rationale`에 모듈 2 anchor → 정량 환산 근거 명시 (모든 시나리오 변수)
- [ ] Terminal 방법·값 + 수학적 제약 만족 (terminal_g < WACC, ≤ Rf, ≤ GDP)
- [ ] 사업부별 risk·세율 차이 시 segment override 명시

**일관성:**
- [ ] 같은 시나리오 안에서 모든 사업부가 같은 거시 환경 가정
- [ ] dcf_factors.json schema 정합
- [ ] dcf_methods.md 방법별 변수 정의·제약과 일관
