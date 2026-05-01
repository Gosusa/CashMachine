---
kind: analysis-pipeline
name: business
version: 0.3.0
implementation: ai
depends_on:
  - reference/philosophy.md
  - reference/dcf_methods.md
inputs:
  - ticker
outputs:
  - business.md       # 사람이 읽는 결과
  - business.json     # 모듈 2가 파싱
---

# 모듈 1. 사업 분석

## 1. 목적 (Why)

사업의 본질을 사업부 단위로 분해하고 결론을 낸다 — 수익 원리, 수급 구조, 해자 근원, 경쟁자 대비 우위, 전략적 베팅까지.

다음 모듈(성장 분석)이 "이 사업이 어떻게 자랄 수 있는가"를 판단할 수 있도록 사업 자체의 그림을 완성하는 게 목적.

---

## 2. 입력 (Inputs)

- **종목 코드** (예: ORCL, AAPL)
- [reference/philosophy.md](../reference/philosophy.md) — 가치관 렌즈 (해자·이익·성장·전략 의도 등)
- [reference/dcf_methods.md](../reference/dcf_methods.md) — 사업부 유형 판별 (DCF 방법 후보 산정용)
- **외부 데이터** (AI가 직접 조회):
  - 최신 10-K, 10-Q (공시 세그먼트, 매출·이익 분포, 단위 경제학)
  - 경쟁자 공시 + 산업 리포트 (해자 검증·경쟁 분석)
  - 컨퍼런스콜·연차보고서 (전략 의도·자본 흐름 추론)

---

## 3. 출력 (Outputs)

### `business.md` (사람이 읽음)

```markdown
# {TICKER} — {회사 정식명}

> {회사 한 줄 요약: 업종·핵심 사업·종합 카테고리}

## 사업부 구성

| # | 사업부 | 카테고리 | 매출 비중 | 영업이익 비중 | DCF 방법 후보 |
|---|-------|---------|----------|------------|-------------|
| 1 | {이름} | {Stalwart/...} | {%} | {%} | {A/B/C/D/E} |

---

## 사업부 1. {이름}

### 카테고리
**카테고리**: {philosophy §3 6개 중 하나}
**근거**: {성장률·시장 지위·사업 성격 — 수치 포함}

### 수익 모델

**가동 중인 이익 경로** (philosophy 5경로 중 해당하는 것):
- {경로명}: {증거 한 줄}

**무엇을 파는가**
- 제품/서비스: ...
- 고객 유형: {B2B/B2C, 산업, 지역}
- 매출 인식: {일회성/구독/라이선스/수수료/성과 보수}
- 반복 매출 비중: {X% — 구독·계약 사업이면}

**단위 경제학**
- 평균 판가, COGS 구조, 단위당 마진
- (구독·B2B인 경우) CAC, LTV, 해지율, NRR

### 수급 구조

**수요 동력**
- 수요 원천: ...
- TAM 규모와 성장: ...

**공급 제약·병목**
- 공급 측 제약: {캡엑스 사이클·병목·라이선스·인력·원료}

**힘의 균형**
- 가격결정력의 위치: ... (정량 근거: 상위 3개 공급자 의존도, Top 10 고객 비중, 가격 인상 이력 등)

### 해자 분석

| 해자 lens | 적용 | 근거 (수치+출처) | 검증 등급 |
|---------|-----|---------------|---------|
| 수요 규모·지속성 | | | established/unverified/not_a_moat |
| 복제 난이도 | | | |
| 단위 원가·가격 인상 이력 | | | |
| 자본 경량성 | | | |
| 장기 지속성 (15~25년) | | | |

**해자 훼손 징후** (관찰되는 경우만)

| 훼손 경로 | 현재 근거 | 현실화 시점 추정 |
|---------|---------|-------------|

**해자 추세** (지난 5년 방향): {강해짐/유지/약화 — 시장점유율·ROIC·영업이익률·가격인상 이력·재계약률 등 시계열 근거 한 줄}

### 경쟁자 대비 우위

**차별화 결론**: {경쟁사 1~3개와 정량 비교(시장점유율·가격·마진)로 도출된 우위 — 해자/원가/기술/관계 중 어디서 우위가 나오는가, 1~3줄}

### 전략적 베팅
- **무엇에**: {자본·인력·시간이 어디 집중 — capex/R&D/M&A/인력}
- **왜**: {시장 신호·구조 변화·경쟁 동학 인식}
- **무엇을 얻고자**: {시장점유율·신규 매출·해자 강화·원가 우위 등}
- **경쟁사 베팅과의 차이**: {같은 시장에서 경쟁사는 어디 배팅 vs 이 회사는?}
- **결과 horizon**: {언제쯤 결과 가시화 — 단기(1~2년)/중기(3~5년)/장기(5~10년)/초장기(10년+)}

### DCF 방법 후보
**후보**: {A_FCF / B_SOTP / C_ExcessReturns / D_NAV / E_ForwardMultiple}
**근거**: {dcf_methods.md §2 판별 표 인용}

### 사업부 결론

**본질** (1~2줄): {왜 돈을 벌고 왜 지속되는가 — (b)~(f) 종합 판단}

**확정 강점** (`type:detail` 형식):
- 예: `moat_established:전환비용 (갱신율 97%)`, `profit_lever:가격인상 (연 5% 인상 이력)`, `differentiation:OCI 클라우드 (멀티-클라우드 1위)`
- 1~3개

**확정 취약점** (`type:detail` 형식):
- 예: `moat_unverified:네트워크 효과 (회사 자체 공시만)`, `moat_erosion:오픈소스 LLM (3년 내 위협)`, `competitive_threat:AWS Aurora`
- 1~2개

**다음 모듈 핸드오프**:
- 성장 동력 후보 (→ 모듈 2):
  - {후보 1}: {한 줄 설명} — source: {(b) 이익 경로 / (c) 수요 동력 / (f) 전략 베팅 중 어디서 도출}
  - {후보 2}: ...
  - (1~3개)
- 단위 경제학 요약 (→ 모듈 3): {핵심 마진·자본 강도 한 줄}
- DCF 방법 후보 (→ 모듈 3): {(g) 결과}

---

(사업부 N개 반복)

---

## 회사 종합

- **사업부 구성 요약**: {사업부 N개. 매출 비중 X% + Y% + ...}
- **종합 카테고리**: {가장 큰 사업부 카테고리 또는 복합 표기, 예: "Stalwart-주력 + Fast Grower-신규"}
- **회사 전체 성격**: {복리형/사이클형/혼합 등 한두 줄}
```

### `business.json` (모듈 2가 파싱)

스키마: [packages/shared-types/schemas/business.ts](../../../packages/shared-types/schemas/business.ts)

핵심 구조:
```
{
  ticker, analysis_date, guide_version_id,
  company_summary,
  company_overall: { combined_category, character_summary },
  segments: [
    {
      segment_id,
      category, category_evidence,
      fiscal_year,                              // 절대값 기준 FY
      revenue_amount, revenue_pct,              // 절대값($M) + 회사 매출 대비 %
      operating_income_amount, operating_income_pct,
      revenue_growth_yoy,                       // 매출 YoY 성장률 (모듈 2 raw 핸드오프)
      revenue_model: {
        profit_levers[],                        // 가동 중인 이익 경로 (philosophy 5경로 중)
        what_sold, customer_type, recognition,
        recurring_revenue_pct,                  // 반복 매출 비중 (해당 시)
        unit_economics
      },
      supply_demand: { demand_drivers[], supply_constraints[], pricing_power },
      moats: [
        { lens, claim, evidence, verdict, transition_condition? }
      ],
      moat_trend,                               // 'strengthening' | 'stable' | 'weakening' + 근거
      moat_erosion: [
        { path, current_signals, estimated_timing }
      ],
      differentiation_summary,
      strategic_bet: {
        what, why, aiming_for, differentiation_vs_competitors,
        time_horizon                          // 'short_1_2y'|'mid_3_5y'|'long_5_10y'|'very_long_10y_plus'
      },
      dcf_method_candidate, dcf_method_rationale,
      conclusion: {
        thesis,                                  // 본질 1~2줄
        confirmed_strengths: [],                 // 'type:detail' 형식 (예: 'moat_established:전환비용')
        confirmed_vulnerabilities: [],           // 'type:detail' 형식 (예: 'moat_unverified:네트워크 효과')
        handoff: {
          growth_driver_candidates: [            // 모듈 2용
            { name, description, source }        // source: 'profit_levers'|'demand_drivers'|'strategic_bet'
          ],
          unit_economics_summary                 // 모듈 3용
        }
      }
    }
  ]
}
```

---

## 4. 핵심 원칙 (Principles)

1. **모든 주장에 수치 + 출처** — "강한 해자"가 아니라 "갱신율 97%, 평균 계약 5년 (10-K p.32)"
2. **회사가 주장한다고 해자가 아니다** — 외부 데이터로 실증되어야 해자. 검증 3등급 (`established`/`unverified`/`not_a_moat`). 회사 자체 공시만으로는 `established` 인정 불가
3. **사업부 = 공시 세그먼트 기준** — 분할 금지, 병합 가능 (현금흐름 본질이 같으면). 단일 보고 회사 = whole company 1개 사업부
4. **DCF 방법은 후보까지만** — 확정·Factor 산정은 모듈 3 소관. 여기서는 [dcf_methods.md §2 판별 표](../reference/dcf_methods.md#2-사업부-유형-판별--어떤-방법을-쓸-것인가)로 후보 1개 제시
5. **이 모듈 범위 외** — 성장 시나리오·DCF 계산·매수 판정·자본배분·재무건전성·리스크 게이트. 그건 모듈 2~5 또는 MVP 외 소관

---

## 5. 본체 (Process)

작성 흐름: **사업부 분리 → 사업부별 분석 → 회사 종합**.

### 5.1 사업부 분리

1. 회사 10-K / 10-Q에서 보고 세그먼트 확인
2. 보고 세그먼트를 그대로 사업부로 사용 — **분할 금지** (분기 데이터 출처 없음)
3. 보고 세그먼트끼리 **현금흐름 본질이 같으면 병합 가능** (예: "Cloud Services" + "Cloud License" → 통합 "Cloud")
4. 각 사업부에 ID 부여 (DB의 `ticker_segments.id`)

세그먼트별 매출 비중·영업이익 비중은 사업부 구성 표에 기록. **절대값($M)·기준 FY는 JSON에 함께 저장** (후속 모듈 + 분기 점검에서 사용).

### 5.2 사업부별 분석

각 사업부마다 8개 항목 채움 — 7개 분석 항목 (a)~(g) + 결론 항목 (h). 각 항목 첫머리에 **답하는 가치관 물음**을 명시하고, 답이 안 나오면 사유를 기록 (예: "단위 경제학 추출 불가 — 세그먼트 공시 없음").

#### (a) 카테고리 분류
**답하는 물음**: 이 사업부는 어떤 사업 성격을 가지는가? (philosophy §3)

philosophy §3 6개 카테고리 중 **단일** 선택 + 근거 (성장률·시장 지위·사업 성격, 수치 포함).

#### (b) 수익 모델
**핵심 질문**: 이 사업은 어떻게 돈을 버는가?

**답하는 물음**:
- [이익] philosophy 이익 5경로 중 어떤 경로가 가동 중인가?
- [해자] 매일·정기적으로 구매되는 구조인가?

추출:
- **가동 중인 이익 경로** — philosophy 5경로(비용절감·가격인상·신규시장 진출·기존시장 매출 확대·적자 사업 재편) 중 해당하는 것 모두 명시. 각 경로마다 증거 한 줄 (수치+출처)
- **무엇을 파는가** — 제품/서비스 목록, 고객 유형 (B2B/B2C·산업·지역), 매출 인식 (일회성/구독/라이선스/수수료/성과 보수), 반복 매출 비중 (구독·계약 사업이면 %)
- **단위 경제학** — 평균 판가, COGS 구조, 단위당 마진. 구독·B2B면 CAC·LTV·해지율·NRR

#### (c) 수급 구조
**답하는 물음**:
- [해자] 수요 규모와 지속성은 어떤가?
- [해자] 가격결정력이 어느 쪽인가?

추출:
- **수요 동력** — 수요 원천, TAM 규모와 성장
- **공급 제약·병목** — 캡엑스 사이클·병목·라이선스·인력·원료
- **힘의 균형** — 가격결정력의 위치. 정량 근거 (상위 3개 공급자 의존도, Top 10 고객 비중, 10%+ 단일 고객 존재 여부, 가격 인상 이력)

#### (d) 해자 분석
**핵심 질문**: 이익이 복리로 오를 수 있는가?

**답하는 물음** ([philosophy §2 해자 lens](../reference/philosophy.md) 5개):
- 수요 규모·지속성
- 복제 난이도 (시간·자본·라이선스)
- 단위 원가·가격 인상 이력
- 자본 경량성
- 장기 지속성 (15~25년)

각 lens마다:
1. **적용 여부** — 이 사업부에 해당하는 lens인가
2. **근거 수집** — 수치 + 출처
3. **검증 등급** 부여:
   - **established** — **외부 출처** (경쟁사 공시·3자 리서치·규제 공시·산업 통계)로 수치 교차검증 완료. **이 등급만 해자로 인정**
   - **unverified** — 회사 자체 공시·IR만 존재. 해자로 인정 X. 어떤 외부 데이터가 있으면 `established`로 전환 가능한지 함께 기록 (다음 분기 점검 포인트)
   - **not_a_moat** — 수치가 주장과 불일치 또는 훼손 증거 관찰

**해자 훼손 징후** — 관찰되는 경우만 별도 표로 기록. 경쟁 기술·비즈니스 모델 등장, 규제 변화, 업계 통합 등.

**해자 추세** — 지난 5년간 해자가 강해졌는가/유지인가/약화되는가. 시장점유율·ROIC·영업이익률·가격인상 이력·재계약률 등 시계열 데이터로 한 줄 결론.

> **두 항목의 차이**: **해자 추세** = 과거 5년 retrospective (역사적 방향). **해자 훼손 징후** = 현재 관찰되는 forward-looking 위협. 추세가 'stable'/'strengthening'이어도 새로운 erosion 신호는 있을 수 있음 (기술 파괴 등). 활용처도 다름 — 추세는 모듈 2의 해자 방향 판단, 훼손 징후는 Bear 시나리오 필요조건과 분기 trigger.

#### (e) 경쟁자 대비 우위
**답하는 물음**: 경쟁자 대비 어떤 차별화가 정량적으로 측정되는가?

추출:
- 주요 경쟁사 1~3개 (시가총액·시장점유율 기준; 비상장이라도 점유율 5%+ 또는 파괴력 있으면 포함)
- 정량 비교 (시장점유율·가격·마진)
- 차별화 결론 (해자·원가·기술·관계 중 어디서 우위가 나오는가)

#### (f) 전략적 베팅
**핵심 질문**: 회사는 어떤 미래에 베팅하고 있는가?

**답하는 물음** (philosophy "사업부 전략 의도" lens):
- 자본·인력·시간이 어디 집중되는가
- 회사가 본 시장 신호·구조 변화는 무엇인가
- 무엇을 얻고자 하는가
- 경쟁사 베팅과의 차이는 무엇인가
- 베팅 결과는 언제 가시화되는가 (horizon)

5가지를 모두 채움. 근거는 **결정과 결과** (capex 추이·R&D 추이·M&A 이력·인력 채용 패턴·세그먼트 자원 배분)에서 추출. 발언이 아닌 자원 흐름이 베팅이다.

**Horizon 분류**: 단기 (1~2년, 가격 정책·SKU 출시 등) / 중기 (3~5년, 신규 시장·M&A 통합) / 장기 (5~10년, 주력 제품 전환·신사업 자리잡기) / 초장기 (10년+, 플랫폼·생태계). horizon은 **모듈 2 시나리오의 시간 축**으로 활용됨.

#### (g) DCF 방법 후보
**답하는 물음**: 이 사업부의 현금흐름 본질은 어떤 DCF 방법에 적합한가?

[dcf_methods.md §2 판별 표](../reference/dcf_methods.md#2-사업부-유형-판별--어떤-방법을-쓸-것인가)로 후보 1개 + 근거. 모듈 3에서 확정.

#### (h) 사업부 결론 (synthesis)
**핵심 질문**: 이 사업부는 평생 보유하면서 15%+ 복리가 가능한가?

(a)~(g) 결과를 종합해 사업부 단위 결론을 낸다. **다음 모듈이 다시 합성하지 않도록 핵심을 모아둔다.**

- **본질** (1~2줄) — 왜 돈을 벌고 왜 지속되는가. (b) 수익 모델 + (d) 해자 + (f) 전략 베팅의 합성 판단
- **확정 강점** — (b)~(f)에서 입증된 항목 중 핵심 1~3. **`type:detail` 형식**으로 작성 (type ∈ {`moat_established`, `profit_lever`, `differentiation`}). 예: `moat_established:전환비용 (갱신율 97%)`. 모듈 2가 type별로 시나리오 활용.
- **확정 취약점** — (d) unverified·훼손, (e) 경쟁 위협 중 모니터링이 필요한 1~2. **`type:detail` 형식** (type ∈ {`moat_unverified`, `moat_erosion`, `competitive_threat`}). 예: `moat_unverified:네트워크 효과 (회사 자체 공시만)`
- **다음 모듈 핸드오프**:
  - 성장 동력 후보 (→ 모듈 2): 1~3개. 각 후보에 **source 명시** ((b) 이익 경로 / (c) 수요 동력 / (f) 전략 베팅 중 어디서 도출). 모듈 2가 어떤 모듈 1 필드를 깊이 봐야 하는지 판단 도움
  - 단위 경제학 요약 (→ 모듈 3): (b) 마진 + (d) 자본 경량성 한 줄
  - DCF 방법 후보 (→ 모듈 3): (g) 결과

### 5.3 회사 종합

- 사업부 구성 요약 (개수·매출 비중)
- 종합 카테고리 (가장 큰 사업부 또는 복합 표기)
- 회사 전체 성격 한두 줄 (복리형·사이클형·혼합 등)

회사 종합은 **요약**일 뿐, 사업부별 결론을 덮어쓰지 않는다.

---

## 6. 연결 (Cross-references)

- 다음 모듈: [02_growth.md](./02_growth.md) — business.json을 받아 사업부별 성장 시나리오 정립
- 가치관 참조: [reference/philosophy.md](../reference/philosophy.md)
- DCF 방법 카탈로그: [reference/dcf_methods.md](../reference/dcf_methods.md)

---

## 7. 체크리스트 (Checklist)

**사업부 분리:**
- [ ] 모든 사업부가 식별됨 (공시 세그먼트 기반, 분할 없음)
- [ ] 사업부 구성 표에 매출 비중·영업이익 비중 기록됨. JSON에는 절대값($M)·기준 FY 포함

**사업부별 분석:**
- [ ] 각 사업부에 8개 항목(카테고리·수익 모델·수급 구조·해자·경쟁·전략 베팅·DCF 후보·사업부 결론) 채워짐
- [ ] 각 항목이 답해야 할 가치관 물음에 수치 + 출처로 답함 (공란이면 사유 기록)
- [ ] (b) 수익 모델에 **가동 중인 이익 경로** (philosophy 5경로 중) 명시됨
- [ ] (d) 해자 lens 5개 각각에 검증 등급 명시. `established` 항목은 외부 출처 인용
- [ ] (d) `unverified` 항목에 `established` 전환 조건 기록
- [ ] (d) 해자 훼손 징후가 관찰되면 표로 기록
- [ ] (f) 전략적 베팅 5개 항목(무엇·왜·무엇을 얻고자·경쟁사 차별화·결과 horizon) 모두 채워짐
- [ ] (g) DCF 방법 후보가 dcf_methods.md §2 판별 표와 일관
- [ ] (h) 사업부 결론에 본질·확정 강점·확정 취약점·다음 모듈 핸드오프 4개 모두 채워짐

**회사 종합·정합:**
- [ ] 회사 종합에 사업부 구성·종합 카테고리·전체 성격 포함
- [ ] business.json이 schema와 정합
