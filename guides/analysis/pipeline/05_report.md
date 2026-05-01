---
kind: analysis-pipeline
name: report
version: 0.1.0
implementation: ai
depends_on:
  - reference/philosophy.md
  - pipeline/03_dcf_factors.md
inputs:
  - business.json    # 모듈 1
  - growth.json      # 모듈 2
  - dcf_factors.json # 모듈 3
  - dcf_results.json # 모듈 4
outputs:
  - report.md        # 사용자 노출 narrative
  - report.json      # UI 렌더링용 구조화 데이터
---

# 모듈 5. 리포트 작성

> M1·M2·M3·M4 결과를 종합해 **이익 성장 관점의 narrative**로 정제한다.
> 사용자에게 노출되는 최종 산출물.

## 1. 목적 (Why)

분석 결과를 "이 회사가 왜 이익이 자랄 수밖에 없는가 / 왜 못 자라는가"의 스토리로 정제하고, philosophy 두 목적에 대한 판정을 명시한다.

- **목적 1 — 해자 평생 보유 가능?**
- **목적 2 — 15%+ 복리 가능?**

증권사 리포트의 정보 밀도(한 번 읽고 의사결정)를 가져오되, **매수/매도 판정 없이 DCF 범위만 표기**한다.

## 2. 입력 (Inputs)

- `business.json` — 사업부 구성·해자·전략 베팅 (모듈 1)
- `growth.json` — 사업 구조 변화 8질문·시나리오·DCF 환산 핸드오프 (모듈 2)
- `dcf_factors.json` — 사업부별 method 확정·factor·factor_rationale (모듈 3)
- `dcf_results.json` — 사업부별·시나리오별 가치 + 회사 종합 (모듈 4)
- [reference/philosophy.md](../reference/philosophy.md) — 가치관 렌즈 (두 목적·매수 판정 금지·지지/반대 대등)

## 3. 출력 (Outputs)

### 3.1 `report.md` — 사용자 노출 narrative

섹션 구조:

- **헤더** — 회사명·티커·작성일·카테고리
- **TL;DR** — 두 판정 + 근거 + DCF 범위 + 핵심 리스크
- **§1. 회사 개요** — 사업부 + 카테고리 + 정체성·현재 구조 변화
- **§2. 투자 포인트 & 리스크** — 왜 자랄 수밖에 없는가 / 왜 못 자라는가
- **§3. 시나리오 & DCF 범위** — Bear/Base/Bull thesis + DCF 결과
- **§4. 사업부별 결론** — segment-by-segment (사업·해자·DCF 방법·factor·시나리오·합산 bucket)
- **§5. 감지 대시보드** — 분기 점검용 trigger

### 3.2 `report.json` — UI 렌더링용 구조화 데이터

스키마: [packages/shared-types/schemas/report.ts](../../../packages/shared-types/schemas/report.ts)

report.md와 동일한 내용을 카드·표·대시보드 컴포넌트가 직접 사용할 수 있는 구조로 노출. 사람이 읽는 .md와 UI 렌더링용 .json은 같은 데이터의 두 표현.

## 4. 핵심 원칙 (Principles)

### 4.1 TL;DR — 한 번 읽고 판정이 서야 한다

TL;DR만 읽어도 두 판정(해자 / 15%+)과 근거, DCF 범위, 핵심 리스크가 모두 닫혀야 한다. 본문은 TL;DR 근거의 확장.

### 4.2 YES / 조건부 / NO 세 선택지만 — 보류 금지

각 판정은 세 선택지 중 하나로 명시. "추후 판단", "보류"는 판정 미완으로 본다.

### 4.3 "조건부"는 구체 수치·이벤트로

"경영진이 잘하면", "시장이 받쳐주면" 같은 모호한 조건 금지. "AI 매출 비중이 20% 이상 유지", "다음 3분기 RPO QoQ 성장 유지" 같은 검증 가능한 형태.

### 4.4 지지·반대 대등 — 한쪽만 나열하면 확증 편향

판정 근거에 지지 증거와 반대 증거가 모두 다뤄져야 한다. 지지만 나열하면 YES 편향, 반대만 나열하면 NO 편향. 한쪽이 명백히 약하면 **그 사실 자체를 명시**한다 (예: "반대 증거가 빈약 — 추가 리서치 필요").

### 4.5 매수/매도 판정 금지 — DCF 범위만 표기

"현재가가 Base 이하면 매수" 같은 문장 금지. DCF 범위(Bear/Base/Bull)는 **관찰 기록**으로만 표기. 매수·매도·보유 판정은 상위 portfolio 단계 소관.

### 4.6 출처는 모듈 결과 링크로 — 수치 복제·재계산 금지

본문 §1~§5에서 인용하는 모든 수치·결론은 어느 모듈 출력에서 왔는지 인라인으로 명시 (예: "Bull thesis [growth.scenarios.bull.thesis]", "사업부 가치 [dcf_results.segments[].base.segment_value]"). report에서 자체 측정·재계산하지 않는다.

**적용 범위**: 본문 §1~§5에만 적용. **TL;DR·헤더는 본문 종합 결과**라 인라인 출처 의무에서 면제 (출처는 본문에서 이미 추적 가능).

> **fan-out 표기 규칙**: 사업부별 분석 필드는 `segments[]` 배열 안에 있다 (예: 실제 경로는 `growth.segments[].scenarios.bear.thesis`). 가독성을 위해 본문 인용은 **간략 표기**(`[growth.scenarios.bear.thesis]` 또는 `[dcf_results.segments[].segment_value]`)로 쓰되, 사업부별 §4 작성 시 segments 배열을 fan-out해 segment마다 채운다. 회사 종합은 `*.company_overall.*` 또는 `*.company_results.*`로 별도 인용.

## 5. 본체 (Process)

### 5.1 헤더

- 회사명 + 티커
- 작성일 (YYYY-MM-DD)
- 카테고리 (회사 종합 — 사업부별 카테고리가 다르면 복합 표기. philosophy §3)

### 5.2 TL;DR

다음 요소가 모두 포함되어야 한다 (배치 순서는 가독성 우선):

- **두 판정**: 해자 평생 보유 가능 (YES/조건부/NO) · 15%+ 복리 가능 (YES/조건부/NO) — M2가 산출한 두 회사 차원 판정 [growth.company_overall.moat_lifelong_holdability], [growth.company_overall.aggregate_15pct_feasibility]을 직접 매핑 (M5는 산출 X)
- **판정 근거**: 지지 증거와 반대 증거 모두 표기. 두 판정에 공통 근거가 있으면 묶고, 다르면 분리
- **조건부 유지 조건**: "조건부" 판정이 있으면 구체 수치·이벤트 형태로 기재
- **DCF 범위**: Bear / Base / Bull 시나리오별 가치
- **핵심 리스크**: 두 판정을 뒤집을 가장 큰 요인 (M1 vulnerabilities 또는 M2 시나리오 trigger에서 도출)

### 5.3 §1 회사 개요

- **사업부 구성** — segment 이름 + 매출 비중 + 카테고리 [business.segments]
- **회사 정체성** — 무엇을 파는 회사인가, 주 고객은 누구인가, 어떤 구조적 특성이 카테고리를 결정하는가
- **현재 구조 변화** — 회사가 지금 어떤 변화 중인지 압축 narrative [growth.structural_change.changing_pattern + change_drivers]. 전문용어 첫 등장 시 괄호 주석으로 풀어쓰기

§1은 첫 독자가 TL;DR을 이해할 수 있게 하는 컨텍스트. 회사 전체 서술이 아니다 — TL;DR 판정의 배경만 제공한다.

### 5.4 §2 투자 포인트 & 리스크

**투자 포인트** (왜 이익이 자랄 수밖에 없는가):
- M1 해자 결론 [business.moats] + M2 사업 구조 변화 8질문 결과 [growth.structural_change]를 narrative로 결합
- 핵심 동력이 단일 사업부에 집중되면 그 사업부를 명시 (회사 종합 ≠ 균질 분산)
- 복리 엔진 결론 (재투자 ROIC vs WACC) 표기 [growth.structural_change.compound_engine]

**리스크** (왜 못 자랄 수 있는가):
- M1 confirmed_vulnerabilities [business.confirmed_vulnerabilities] + M2 Bear 시나리오 thesis·trigger [growth.scenarios.bear]
- 사업 취약점이 어느 사업부의 어떤 해자를 위협하는지 연결

투자 포인트만 나열하면 확증 편향 — 반대 증거가 빈약하면 그 사실 자체를 명시한다.

### 5.5 §3 시나리오 & DCF 범위

**시나리오 thesis**:
- Bear / Base / Bull 각각의 **회사 차원 thesis** + 핵심 trigger
- 회사 차원 thesis는 사업부별 thesis [growth.scenarios] 중 **핵심 사업부(회사 가치 무게중심)의 thesis를 베이스로**, cross-segment 영향 [growth.company_overall.cross_segment_drivers·cross_segment_risks]을 합쳐 narrative로 작성
- thesis 4축(필요조건·근거·증거·trigger) 전체는 growth.json 참조로 갈음 (본문은 thesis + trigger 노출)

**DCF 범위** [dcf_results.company_results]:
- Bear / Base / Bull 시나리오별 회사 가치
- 시나리오별 핵심 전제 (어느 사업부·어느 method·어느 factor가 시나리오를 가른 핵심인지) [dcf_factors.factor_rationale]
- **매수/매도 판정 금지** — DCF 범위는 관찰 기록으로만 노출. 현재가 대비 비교·매수 판단은 상위 portfolio 단계 소관

### 5.6 §4 사업부별 결론

각 사업부에 대해:

- **사업 결론** — 카테고리 + 해자 결론 [business.segments]
- **DCF 방법** — 어느 method (A/B/C/D/E) 적용, 그 이유 [dcf_factors.method_finalization]
- **핵심 factor** — WACC·g·N 등 사업부 가치를 가르는 변수 + factor_rationale [dcf_factors.factor_rationale]
- **시나리오 결론** — Bear/Base/Bull에서 사업부별 가치 [dcf_results.segments[].segment_value]
- **합산 bucket** [dcf_results.segments[].bucket] — operating_ev (영업 EV, 회사 종합 시 net_debt·minority 차감 대상) / equity (자기자본 가치, 직접 합산). M4가 method에서 산출 (A·B·C → operating_ev, D·E → equity)

§4는 우리 도구의 차별점. 회사 종합 narrative가 가린 사업부별 차이를 노출 — "회사는 Stalwart인데 일부 사업부는 Fast Grower" 같은 비대칭이 보여야 한다.

### 5.7 §5 감지 대시보드

분기 실적·공시에서 점검할 trigger 모음:
- M2 시나리오 trigger (Bear/Base/Bull 각각의 진입 신호) [growth.scenarios.*.quarterly_triggers]
- M1 confirmed_vulnerabilities 중 정량 점검 가능한 항목 [business.confirmed_vulnerabilities]

각 trigger는 **구체 수치·이벤트** 형태 (예: "RPO QoQ 역성장", "갱신율 90% 미만"). 모호한 "업황 악화" 금지.

§5는 감지 도구 — 트리거 히트가 자동 판정 변경을 의미하지 않는다 (일회성 vs 구조적 맥락은 분기 업데이트 단계 소관).

## 6. 연결 (Cross-references)

- 이전 모듈: [04_dcf_compute.md](./04_dcf_compute.md) (M4 dcf_results.json 산출)
- 다른 입력: [01_business.md](./01_business.md), [02_growth.md](./02_growth.md), [03_dcf_factors.md](./03_dcf_factors.md)
- 가치관: [reference/philosophy.md](../reference/philosophy.md) (두 목적·매수 판정 금지·지지/반대 대등)

## 7. 체크리스트 (Checklist)

작성 완료 전 확인. **무엇이 들어가야 하는가**의 점검 (개수·분량 규칙 없음):

- [ ] TL;DR만 읽어도 두 판정·근거·DCF 범위·핵심 리스크가 모두 닫히는가
- [ ] 두 판정(해자 / 15%+)이 각각 YES/조건부/NO 중 하나로 명시되었는가 (보류 없음)
- [ ] "조건부" 판정에 구체 수치·이벤트 형태의 조건이 명시되었는가
- [ ] 판정 근거에 지지 증거와 반대 증거가 모두 다뤄졌는가 (한쪽만 나열되지 않았는가)
- [ ] 반대 증거가 빈약하면 그 사실 자체가 명시되었는가
- [ ] §1이 첫 독자가 TL;DR을 이해할 컨텍스트를 제공하는가 (회사 전체 서술이 아니라)
- [ ] 전문용어가 첫 등장 시 괄호 주석으로 풀어쓰였는가
- [ ] §2 투자 포인트가 M1·M2 결론에 근거하고, 핵심 동력이 단일 사업부에 집중되면 그 사실이 노출되었는가
- [ ] §3 시나리오 thesis가 M2 결과를 인용하고, DCF 범위에 매수/매도 판정 문장이 없는가
- [ ] §4 사업부별 결론에 카테고리·해자·DCF 방법·factor·시나리오 결론·합산 bucket이 모두 포함되었는가
- [ ] §5 감지 대시보드의 trigger가 구체 수치·이벤트 형태인가 (모호한 업황 표현 없는가)
- [ ] 모든 수치·결론에 인라인 출처(M1/M2/M3/M4 출력 링크)가 있고 자체 재계산이 없는가
- [ ] 회사 카테고리가 사업부별 차이와 맞물려 표기되었는가 (단일이면 단일, 복합이면 복합)

---

**범위 외**:
- 회피 게이트 (부채·경영진 검증) — 별도 도메인 (향후 `guides/avoidance/`)
- 분기 업데이트 워크플로우 (snapshots/, trajectory.md) — `guides/earnings/` 소관
- 산업·시장 분석 — philosophy "회사 내부 구조 우선" 원칙으로 제외
- 외부 재무제표 데이터 표시 — 우리 도구 입력 범위 외
- 15% 경로 기준선 (요구 EPS CAGR 역산) — MVP 범위 외 (외부 EPS 데이터 필요)
