---
kind: analysis-pipeline
name: dcf_compute
version: 0.0.1
implementation: code  # AI 아님 — Python 엔진
depends_on: []
inputs:
  - dcf_factors.json  # 모듈 3 출력
outputs:
  - dcf_results.json  # 모듈 5가 인용
---

# 모듈 4. DCF 계산 (코드)

> 이 모듈은 **AI가 아니라 Python 코드**.
> 모듈 3에서 결정된 Factor를 받아 DCF 수식을 결정적으로 계산한다.

## 1. 목적 (Why)

DCF 계산은 결정적 산수 — AI가 할 일이 아니다.
- 같은 입력 = 같은 출력 (재현 가능)
- 단위 테스트로 검증 가능
- 사용자가 UI에서 Factor 슬라이더 만져도 즉시 계산 가능 (AI 호출 X)

## 2. 입력 (Inputs)

`dcf_factors.json` — 스키마는 [dcf-factors.ts](../../../packages/shared-types/schemas/dcf-factors.ts).

사업부별 × 시나리오(Bear/Base/Bull)별로:
- DCF 방법 (A~E 중 하나)
- 방법별 입력값 (성장률, 마진, WACC, terminal g, 멀티플 등)
- 회사 공통: 희석 주식수, Net Debt

## 3. 출력 (Outputs)

`dcf_results.json` — 스키마는 [dcf-results.ts](../../../packages/shared-types/schemas/dcf-results.ts).

구조:
- 사업부별 × {Bear, Base, Bull} 시나리오별 EV·주주가치·주당 기여
- 회사 종합 = 사업부 합산 - Net Debt → 주당 목표가
- 시나리오별 현재가 대비 수익률

## 4. 핵심 원칙 (Principles)

- **결정적 (deterministic)**. 같은 입력은 항상 같은 출력
- **5가지 DCF 방법(A~E) 모두 구현** — 사업부마다 다른 방법 가능
- 입력 검증 (Factor 범위, 누락) → 명시적 에러
- 단위 테스트 필수 (방법별 최소 1개)

## 5. 구현

위치 (TODO 결정):
- 옵션 A: `ai/pipelines/analysis/module_4_dcf.py` (AI 파이프라인 안)
- 옵션 B: `ai/dcf_engine/` 별도 모듈 (재사용성 ↑ — 시뮬레이션·시나리오 모듈도 사용)

테스트 위치: `tests/dcf_engine/`
- 알려진 사례 입력 → 출력 일치 검증
- 옛 분석(예: 2026-04 ORCL) Factor 입력 → 옛 결과와 매칭 확인

## 6. 연결 (Cross-references)

- 이전 모듈: [03_dcf_factors.md](./03_dcf_factors.md)
- 다음 모듈: [05_report.md](./05_report.md)
- DCF 방법론: [reference/dcf_methods.md](../reference/dcf_methods.md)
- 입력 스키마: [dcf-factors.ts](../../../packages/shared-types/schemas/dcf-factors.ts)
- 출력 스키마: [dcf-results.ts](../../../packages/shared-types/schemas/dcf-results.ts)

## 7. 체크리스트 (Checklist)

- [ ] 5가지 방법(A~E) 모두 구현
- [ ] 단위 테스트 (방법별 최소 1개)
- [ ] 입력 검증 + 명시적 에러
- [ ] 사업부 합산 로직 검증 (single-segment edge case 포함)
- [ ] 옛 분석 1건으로 매칭 검증

---

**범위 외**:
- 시나리오 확률 가중·가중평균 — 금지 (3시나리오 범위 그대로 출력)
- Damodaran 교차검증 — MVP 범위 외
