---
kind: analysis-pipeline
name: report
version: 0.0.1
implementation: ai
depends_on:
  - reference/philosophy.md
inputs:
  - business.json    # 모듈 1
  - growth.json      # 모듈 2
  - dcf_results.json # 모듈 4
outputs:
  - report.md        # 사용자에게 보여주는 최종 리포트
  - report.json      # UI 컴포넌트 렌더링용 구조화 데이터
---

# 모듈 5. 리포트 작성

> 모든 모듈 결과를 종합해 **이익 성장 관점**의 내러티브 리포트를 작성한다.
> 사용자에게 노출되는 최종 산출물.

## 1. 목적 (Why)

분석 결과를 "이 회사가 왜 이익이 자랄 수밖에 없는가 / 왜 못 자라는가"의 스토리로 정제.

판정(해자 가능 / 15%+ 가능)과 그 근거, 사업부별 결론, DCF 범위, 감지 대시보드를 한 문서로 통합.

## 2. 입력 (Inputs)

- `business.json` — 사업·해자 결론 (모듈 1)
- `growth.json` — 성장 시나리오·근거 (모듈 2)
- `dcf_results.json` — 시나리오별 목표가 (모듈 4)
- [reference/philosophy.md](../reference/philosophy.md) — 가치관 렌즈

## 3. 출력 (Outputs)

### `report.md` (사용자 노출)

섹션 구조 (TODO: 본문 작성 시 확정):
- 회사 한눈에 (이익 구조, 카테고리, 사업부 구성)
- TL;DR — 해자 가능? 15%+ 가능?
- 이익 성장 내러티브 — 현재 → 동력 → 15% 수학 → 해자가 보호하는 메커니즘
- 사업부별 핵심 결론 (사업·해자·성장·시나리오 요약)
- 가격 범위 (DCF 결과 표기, 매수 판정 X)
- 감지 대시보드 — 스토리·원인 붕괴 감지 수치

### `report.json` (UI 렌더링용)

스키마: [packages/shared-types/schemas/report.ts](../../../packages/shared-types/schemas/report.ts)

## 4. 핵심 원칙 (Principles)

> TODO: 작성. 후보:
> - 판정 명시 (해자 가능 YES/조건부/NO, 15%+ YES/조건부/NO)
> - 매수/매도 판정 금지 (가격 범위만 표기)
> - 지지·반대 증거 대등 (한쪽만 나열 금지)
> - 사업부별 결론을 회사 종합으로 합칠 때 어느 사업부가 무게 중심인지 명시

## 5. 본체 (Process)

> TODO: 작성. 큰 흐름 — TL;DR → 이익 성장 내러티브 → 사업부별 결론 → DCF 범위 → 감지 대시보드

## 6. 연결 (Cross-references)

- 이전 모듈: [04_dcf_compute.md](./04_dcf_compute.md)
- 가치관: [reference/philosophy.md](../reference/philosophy.md)

## 7. 체크리스트 (Checklist)

> TODO: 본문 작성 시 작성.

---

**범위 외**:
- 회피 게이트 (부채/경영진) — MVP 범위 외
- 분기 업데이트 워크플로우 — `guides/earnings/` 소관 (별도 가이드)
