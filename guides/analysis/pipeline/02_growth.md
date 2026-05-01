---
kind: analysis-pipeline
name: growth
version: 0.3.0
implementation: ai
depends_on:
  - reference/philosophy.md
inputs:
  - business.json    # 모듈 1 출력
outputs:
  - growth.md
  - growth.json      # 모듈 3이 파싱
---

# 모듈 2. 성장 분석

## 1. 목적 (Why)

모듈 1이 식별한 사업부별 성장 요소를 받아, **사업 구조의 변화**를 분석하고 그 변화 위에서 **Bear/Base/Bull 시나리오를 구조적으로 정립**한다 — 필요조건·근거·증거·분기 trigger까지.

다음 모듈(DCF Factor 산정)이 시나리오를 정량 factor로 환산할 수 있도록 **정성 anchor와 정량 단서**를 완성하는 게 목적.

---

## 2. 입력 (Inputs)

- **`business.json`** — 모듈 1의 사업 분석 결과
  - **핵심 입력**: `segments[].conclusion.handoff.growth_driver_candidates` (모듈 2의 분석 대상)
  - **(b) 사업 구조 변화 분석에 활용**: `strategic_bet`, `differentiation_summary`, `moats[]`, `moat_trend`, `revenue_model.profit_levers`, `conclusion.thesis`
  - **(c) 시나리오 정립에 활용**: `conclusion.confirmed_strengths`, `conclusion.confirmed_vulnerabilities`
  - **baseline**: `revenue_amount`, `operating_income_amount`, `revenue_growth_yoy`, `fiscal_year`
- [reference/philosophy.md](../reference/philosophy.md) — 성장 lens (10배 요소·필요 CAGR·규모 저항·재투자 ROIC·자본 경량성)
- **외부 데이터** (AI가 직접 조회):
  - 산업 리포트 (TAM·성장률·침투율 — 변화 동인·시나리오 근거)
  - 경쟁자 가이던스·실적 (시장점유율·가격 추이 — 차별점·증거)
  - 회사 가이던스 (매출·이익·CapEx — 현재 위치·시나리오 anchor)
  - 거시 지표 (해당 산업 영향 — 시나리오 전제)

---

## 3. 출력 (Outputs)

### `growth.md` (사람이 읽음)

```markdown
# {TICKER} — 성장 분석

> {회사 한 줄 요약 + 회사 전체 15%+ 가능성 한 줄}

## 사업부별 성장 요약

| # | 사업부 | 15%+ 가능성 | 현재 위치 | 핵심 동력 | 핵심 리스크 |
|---|-------|----------|---------|---------|----------|
| 1 | {이름} | YES/조건부/NO | Bear/Base/Bull | ... | ... |

---

## 사업부 1. {이름}

### 성장 요소 (모듈 1 인수)

- {요소 1}: {설명, 출처 모듈 1 필드}
- {요소 2}: ...

### 사업 구조 변화 분석

1. **사업 구조 변화 양상** (현재 → 미래): {어떻게 변화하는가}
2. **변화 동인**:
   - 외부: {시장·기술·경쟁 환경 변화}
   - 내부: {회사 내부 동인}
3. **회사의 전략적 선택**: {모듈 1 strategic_bet 받기 + 변화 맥락에서 재해석}
4. **경쟁사와의 차별점**: {모듈 1 differentiation_summary 받기 + 변화로 어떻게 강화/약화}
5. **해자 구축/강화 가능성**: {모듈 1 moats[] 받기 + 변화가 해자 형성에 미치는 영향}
6. **이익 성장 연결**: {변화가 이익 경로(profit_levers)와 어떻게 연결되어 성장 만들어내는가}
7. **해자 강화/약화 방향**: {변화 후 해자 trend → 강화/유지/약화 + 근거}
8. **복리 엔진** (재투자 + 복리 성장):
   - 재투자 기회: {TAM·R&D·M&A·신사업 — 어디 재투자할 곳 있나}
   - 재투자 ROIC vs WACC: {재투자된 자본이 가치 만드나 — 정성 anchor (강함/중간/약함) + 근거}
   - 결론: {복리 엔진 작동 가능 / 약함 / 중단 — 한 줄}

### Bear / Base / Bull 시나리오

> 정량값(매출 CAGR·마진 등)은 모듈 3에서 산정. 여기서는 narrative + 정성 anchor + 정량 단서까지.

#### Bear — {시나리오 thesis 한 줄}
- **필요조건**: {시나리오 성립 위해 충족되어야 할 것 — list}
- **뒷받침하는 근거**: {필요조건이 충족될 만한 이유 — 논리}
- **근거를 정당화하는 증거**: {외부 데이터·과거 사례 — 실증}
- **분기 추적 trigger**: {이 시나리오 강화/약화 알 수 있는 분기 지표·이벤트}

#### Base — {시나리오 thesis}
(동일 형식)

#### Bull — {시나리오 thesis}
(동일 형식)

### 현재 실적 위치

- **LTM 매출**: ${X}M, **LTM 영업이익**: ${Y}M (모듈 1 baseline + 신규 분기)
- **트렌드 방향**: 가속 / 유지 / 감속 — {분기별 추이}
- **가이던스 정합성**: 회사 가이던스가 어느 시나리오 narrative와 부합
- **시나리오 위치 (정성)**: 현재 추세가 Bear/Base/Bull 중 어디와 가장 부합 — {근거}

### 사업부 성장 결론

**15%+ 가능성**: YES (실현 경로 명확) / 조건부 (조건 명시) / NO (구조적 한계)

**핵심 성장 동력**: {(b) 구조 변화 + (c) 시나리오에서 가장 강한 1~3}

**핵심 리스크**: {Bear 시나리오 핵심 필요조건 (역방향) 1~2}

**다음 모듈(DCF Factor) 환산 핸드오프**:

| 시나리오 | 매출 CAGR anchor | 마진 anchor | CapEx anchor | 핵심 근거 |
|---------|--------------|-----------|------------|---------|
| Bear | {정성 + 정량 단서} | ... | ... | ... |
| Base | | | | |
| Bull | | | | |

**구조 인사이트**:
- 자본집약도: {경량/중간/집약 + 근거 한 줄}
- Operating leverage: {강함/중간/약함 + 근거 한 줄}
- 재투자 ROIC 방향: {강화/유지/약화 + 근거 한 줄}

**DCF 방법 review**: {모듈 1 후보 그대로 통과 / 다음 의견으로 revise 권고}

---

(사업부 N개 반복)

---

## 회사 종합

- **회사 전체 15%+ 가능성**: {사업부별 결론을 매출 비중에 비추어 종합. 가중평균 단일 점수 X}
- **종합 성장 성격**: {복리형/사이클형/전환 중/혼합 — 한두 줄}
- **회사 차원 핵심 동력**: {여러 사업부에 공통 적용되는 동력}
- **회사 차원 핵심 리스크**: {복수 사업부에 동시 영향 주는 리스크}
```

### `growth.json` (모듈 3이 파싱)

스키마: [packages/shared-types/schemas/growth.ts](../../../packages/shared-types/schemas/growth.ts)

핵심 구조:
```
{
  ticker, analysis_date, guide_version_id,
  based_on_business_analysis_id,
  segments: [
    {
      segment_id,
      growth_elements: [
        { name, source_from_business }
      ],
      structural_change: {
        changing_pattern,                       // 현재 → 미래 구조
        change_drivers: { external, internal },
        strategic_response,                      // 모듈 1 strategic_bet 위에 재해석
        competitive_differentiation,             // 모듈 1 differentiation 위에 변화 영향
        moat_building_potential,
        profit_growth_link,
        moat_trend_after_change,                 // 'strengthening'|'stable'|'weakening' + 근거
        compound_engine: {                       // 복리 엔진 (질문 8)
          reinvestment_opportunity,              // 재투자할 곳 (TAM·R&D·M&A·신사업) + 근거
          reinvestment_roic_vs_wacc,             // 'strong'|'moderate'|'weak' + 근거
          verdict                                 // 'working'|'weak'|'stalled' + 한 줄 결론
        }
      },
      scenarios: {
        bear: {
          thesis,
          necessary_conditions: [],
          supporting_logic,
          justifying_evidence: [],
          quarterly_triggers: [
            { indicator, threshold, direction_when_hit }
          ]
        },
        base: {...},
        bull: {...}
      },
      current_position: {
        ltm_revenue, ltm_operating_income,
        trend_direction,                         // 'accelerating'|'stable'|'decelerating'
        guidance_alignment,
        scenario_position_qualitative
      },
      conclusion: {
        fifteen_pct_feasibility,                 // 'YES'|'CONDITIONAL'|'NO'
        feasibility_basis,
        key_drivers: [], key_risks: [],
        handoff: {
          scenario_anchors: {
            bear: {
              revenue_cagr_anchor,               // 정성 + 정량 단서 ("low + 5-8% range, 침체기 -15% 사례")
              margin_anchor, capex_anchor,
              key_basis
            },
            base: {...}, bull: {...}
          },
          structural_insights: {
            capital_intensity_direction,         // 'light'|'moderate'|'heavy' + narrative
            operating_leverage_direction,        // 'strong'|'moderate'|'weak' + narrative
            reinvestment_roic_direction          // 'strengthening'|'stable'|'weakening' + narrative
          },
          dcf_method_review: {
            inherited_from_m1,                   // M1 후보 그대로 / revise 권고
            revision_suggestion                   // revise 권고 시 의견 (없으면 null)
          }
        }
      }
    }
  ],
  company_overall: {
    aggregate_15pct_feasibility,
    growth_character_summary,
    cross_segment_drivers: [],
    cross_segment_risks: []
  }
}
```

---

## 4. 핵심 원칙 (Principles)

1. **요소 식별은 모듈 1에서, 모듈 2는 그 위에 구조 변화·시나리오를 짓는다** — 모듈 2가 새 성장 요소 발굴 X
2. **사업 구조 변화 8질문 강제** — (b)에서 8질문 모두 답함. 단일 요소만 분석하는 게 아니라 **구조적 맥락**에 둠. 마지막 질문 "복리 엔진 작동?"은 매출 성장 함정 방지용 (성장만 보면 재투자 ROIC < WACC 케이스에서 가치 파괴 못 잡음)
3. **시나리오 = 필요조건·근거·증거·trigger 4축** — Bear/Base/Bull 각각이 이 4축으로 정의됨. "낙관/비관" 점수가 아니라 **구조적 모델**
4. **분기 trigger는 추적 가능한 지표·이벤트로** — 매분기 누적 시각화 feature가 활용. 모호한 narrative 금지
5. **정량값은 모듈 3 소관, 여기는 정성 anchor + 정량 단서까지** — 매출 CAGR·마진 정확한 수치는 모듈 3. 여기는 anchor (고/중/저) + 단서 ("침체기 -15% 사례" 같은 range hint)
6. **확률 가중평균 금지** — Bear/Base/Bull 점수 평균해서 단일 가능성 만들지 않음

---

## 5. 본체 (Process)

작성 흐름: **사업부별 성장 분석 → 회사 종합**. 사업부 분리는 모듈 1에서 끝났으므로 모듈 2는 사업부 단위로 직접 진입.

### 5.1 사업부별 성장 분석

각 사업부마다 5개 항목 채움 — 4개 분석 (a)~(d) + 결론 (e). 각 항목 첫머리에 **답하는 가치관 물음**을 명시하고, 답이 안 나오면 사유를 기록.

#### (a) 성장 요소 인수 (intake)
**답하는 물음**: 모듈 1이 식별한 이 사업부의 성장 요소는 무엇인가?

**출발점**: 모듈 1 `conclusion.handoff.growth_driver_candidates`

추출:
- 핸드오프 받은 성장 요소를 깔끔한 list로 정리
- 모듈 1 핸드오프가 부족하면 보강 단서에서 추가 (`profit_levers`, `strategic_bet`, `demand_drivers`)
- **새 요소 발굴 X** — 모듈 1 사업 분석 위에서 식별된 것만 다룸

#### (b) 사업 구조 변화 분석
**답하는 물음** (8질문):
1. 사업 구조가 어떻게 변화하고 있는가? (현재 → 미래)
2. 왜 변화하는가? (외부 동인 + 내부 동인)
3. 변화 속에서 회사의 전략적 선택은?
4. 변화로 발생하는 경쟁사와의 차별점은?
5. 변화가 경제적 해자를 구축/강화할 수 있는가?
6. 변화가 이익 성장으로 이어지는가?
7. 변화로 해자가 강화·약화되는 방향은?
8. **번 돈을 재투자할 곳이 있고, 재투자가 복리 성장을 만드는가?** (복리 엔진)
   - 재투자 기회: TAM 확장·R&D·M&A·신사업 진출 등
   - 재투자 ROIC vs WACC: 재투자된 자본이 가치를 만드는가
   - 매출 성장만으로는 함정 — 재투자 ROIC < WACC면 성장할수록 가치 파괴

**출발점**: 
- 모듈 1 `strategic_bet` (질문 3·8 재투자 기회), `differentiation_summary` (질문 4), `moats[]` (질문 5·7), `moat_trend` (질문 7), `revenue_model.profit_levers` (질문 6), `supply_demand.demand_drivers` (질문 8 TAM), `moats[].lens 4 자본 경량성` (질문 8), `conclusion.thesis` (전반)
- 외부 데이터: 산업 리포트, 경쟁사 가이던스 (변화 양상·동인·증거), 재무제표 (질문 8 재투자 ROIC·WACC)

추출 원칙:
- (a) 성장 요소를 **구조 변화의 맥락**에 둠 — 단일 요소 분석이 아니라 구조 안에서 위치
- 8질문은 인과 체인 — 1·2가 변화 사실, 3이 회사 대응, 4·5·6·7이 결과·함의, 8이 복리 가능성 검증 (재투자 ROIC > WACC?)
- 모듈 1 정보를 **변화 맥락에서 재해석** (snapshot이 아니라 trajectory)

#### (c) Bear / Base / Bull 시나리오 정립
**답하는 물음**: (b) 구조 변화를 토대로 사업부 성장의 합리적 범위는?

각 시나리오를 **thesis + 4축 (필요조건·근거·증거·trigger)**으로 구조화:

**시나리오 thesis** — 한 줄 정의 (이 시나리오의 본질)

**필요조건** — 이 시나리오가 성립하려면 무엇이 충족되어야 하는가 (list)
- (b) 8질문에서 도출된 변화 요소가 어떻게 작동/실패하느냐
- 모듈 1 `confirmed_vulnerabilities` (Bear) / `confirmed_strengths` (Bull) 활용

**뒷받침하는 근거** — 필요조건이 충족될 만한 이유 (논리)
- 시장 동학·구조 변화·회사 capability 등 논리 체인

**근거를 정당화하는 증거** — 외부 데이터·과거 사례 (실증)
- 산업 리포트, 경쟁사 사례, 과거 침체기 패턴 등

**분기 추적 trigger** — 매분기 어떤 지표·이벤트를 보면 이 시나리오가 강화/약화되는지 알 수 있나
- 추적 가능한 지표 (예: "OCI 매출 YoY", "EU 규제 이벤트")
- threshold + 방향 (예: "+30% 달성 시 Bull 강화")
- **분기 누적 시각화 feature가 직접 활용하는 데이터**

**시나리오 정의:**
- **Bear** — 핵심 요소 실패 + (b) 8질문에서 도출된 부정적 변화 (모듈 1 confirmed_vulnerabilities 현실화)
- **Base** — 가능성 높은 핵심 요소만 작동 + 가이던스 약간 보수적 연장
- **Bull** — 모든 요소 동시 작동 + (b) 변화로 해자 구축 + (모듈 1 strategic_bet 성공)

#### (d) 현재 실적 위치
**답하는 물음**: 직전 4분기 실적이 어느 시나리오 narrative에 가장 부합하는가?

**출발점**: 모듈 1 baseline (`revenue_amount`, `operating_income_amount`, `revenue_growth_yoy`, `fiscal_year`) + 신규 분기 데이터

추출:
- LTM 매출·영업이익
- **트렌드 방향** — 가속/유지/감속 (분기별 추이)
- **가이던스 정합성** — 회사 가이던스가 어느 시나리오 narrative와 부합
- **시나리오 위치 (정성)** — 현재 추세가 Bear/Base/Bull 중 어디와 가장 부합

> 정량 위치 비교 (LTM vs 시나리오별 $ 가정)는 모듈 3 factor 산출 후 가능. 여기선 narrative 정렬만.

#### (e) 사업부 성장 결론 (synthesis)
**답하는 물음**: 이 사업부 15%+ 성장 가능한가, 다음 모듈에 어떻게 환산해 넘기나?

(a)~(d) 결과를 종합. **다음 모듈이 다시 합성하지 않도록 핵심을 모아둔다.**

- **15%+ 가능성** — YES (실현 경로 명확) / 조건부 (조건 명시) / NO (구조적 한계) + 근거
- **핵심 성장 동력** — (b) 구조 변화 + (c) 시나리오에서 가장 강한 1~3
- **핵심 리스크** — Bear 시나리오 핵심 필요조건의 역방향 1~2
- **DCF 환산 핸드오프** (→ 모듈 3):
  - **시나리오별 anchor 표** — Bear/Base/Bull 각각 매출 CAGR·마진·CapEx에 대해 정성 anchor (고/중/저) + 정량 단서 (range·과거 사례)
  - **구조 인사이트** — 자본집약도 (경량/중간/집약), operating leverage (강함/중간/약함), 재투자 ROIC 방향 (강화/유지/약화) + 각 narrative
  - **DCF 방법 review** — 모듈 1 후보 그대로 통과 또는 revise 권고 (의견)

> WACC·세율·terminal growth·working capital 등 재무 도메인 factor는 **모듈 3에서 자체 산정**. 모듈 2는 성장 관련 인풋만 핸드오프.

### 5.2 회사 종합

- **회사 전체 15%+ 가능성** — 사업부별 결론을 매출 비중에 비추어 종합 (사업부별 결론 함께 제시)
- **종합 성장 성격** — 복리형/사이클형/전환 중/혼합 (한두 줄)
- **회사 차원 핵심 동력** — 여러 사업부에 공통 적용되는 동력
- **회사 차원 핵심 리스크** — 복수 사업부에 동시 영향 주는 리스크

회사 종합은 요약일 뿐, 사업부별 결론을 덮어쓰지 않는다.

---

## 6. 연결 (Cross-references)

- 이전 모듈: [01_business.md](./01_business.md) — business.json 입력
- 다음 모듈: [03_dcf_factors.md](./03_dcf_factors.md) — growth.json을 받아 정량 factor 산정 (성장 관련) + 자체 도메인 factor (WACC·세율 등) 추가
- 가치관 (성장 lens): [reference/philosophy.md](../reference/philosophy.md)

---

## 7. 체크리스트 (Checklist)

**입력 정합성:**
- [ ] business.json의 사업부 ID와 growth.json `segment_id` 매칭
- [ ] (a) 성장 요소가 모듈 1 `handoff.growth_driver_candidates` 위에서 식별됨 (새 요소 발굴 X)

**사업부별 성장 분석:**
- [ ] 각 사업부에 5개 항목((a)~(e)) 채워짐
- [ ] 각 항목이 답해야 할 가치관 물음에 수치 + 출처로 답함 (공란이면 사유 기록)
- [ ] (b) 사업 구조 변화 8질문 모두 답변 (마지막 8번 "복리 엔진" 포함). 모듈 1 필드 (`strategic_bet`, `differentiation_summary`, `moats[]`, `moat_trend`, `supply_demand.demand_drivers`) 명시적으로 인용
- [ ] (c) Bear/Base/Bull 각각에 thesis + 4축 (필요조건·근거·증거·trigger) 모두 채움
- [ ] (c) 분기 trigger가 추적 가능한 지표·이벤트로 명시 (threshold + 방향 포함)
- [ ] (d) LTM 트렌드 방향·가이던스 정합성·시나리오 위치 (정성) 명시
- [ ] (e) 결론에 15%+ 가능성·핵심 동력·핵심 리스크·DCF 환산 핸드오프 모두 채움
- [ ] (e) DCF 핸드오프에 시나리오 anchor 표 (정성+정량 단서) + 구조 인사이트 + DCF 방법 review 모두 포함

**회사 종합·정합:**
- [ ] 회사 전체 15%+ 가능성 + 종합 성격 포함
- [ ] 가중평균 단일 점수로 환산하지 않음
- [ ] growth.json schema 정합
