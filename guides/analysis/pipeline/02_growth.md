---
kind: analysis-pipeline
name: growth
version: 0.0.1
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

> 사업 결론을 받아 "어떻게 자랄 수 있는가"를 판단한다.
> 사업부별 15%+ 가능성, 시나리오 근거, Bear→Bull 전환 가능성을 결론으로 만든다.

## 1. 목적 (Why)

모듈 1이 만든 사업 결론에서 출발해, 사업부별로:
- 15%+ 이익 성장 가능성과 실현 경로
- 장기 성장 시나리오 요소 + 근거 + 팩트체크
- 구조적 성장 요소 (수요·공급·시장 확장 등)
- Base 시나리오의 Bull 전환 가능성

다음 모듈(DCF Factor 산정)이 사업부별 Bear/Base/Bull 가정을 정량화할 수 있도록 정성적 결론을 만드는 게 목적.

## 2. 입력 (Inputs)

- `business.json` — 모듈 1의 사업부 분리·해자 결론
- [reference/philosophy.md](../reference/philosophy.md) — 성장 렌즈 (10배 요소, 필요 CAGR, 규모 저항)
- 외부 데이터: 산업 리포트, TAM 추정, 경쟁자 가이던스, 거시 지표 등

## 3. 출력 (Outputs)

### `growth.md` (사람이 읽음)

섹션 구조 (TODO):
- 사업부별:
  - 15%+ 성장 요소 — 후보 + 근거 + 팩트체크 결과
  - 장기(10년+) 시나리오 요소
  - Bear / Base / Bull 정성 정립 (정량값은 모듈 3에서)
  - Bear → Bull 전환 매핑 — 어떤 Bear 요인이 해소되면 어떻게 Bull로 가는가
- 회사 종합 — 사업부 합산 시 회사 전체 15%+ 가능성

### `growth.json` (모듈 3이 파싱)

스키마: [packages/shared-types/schemas/growth.ts](../../../packages/shared-types/schemas/growth.ts)

## 4. 핵심 원칙 (Principles)

> TODO: 작성. 후보:
> - **요소 → 근거 → 검증 → 결론** 순서 강제 (근거 없는 요소 불가)
> - 모든 시나리오 가정은 segment 단위로 작성 (회사 합산은 마지막)
> - Bull은 복수 요인 동시 작동 시. Base는 가이던스 약간 보수, Bear는 관찰된 취약 경로
> - 확률 가중·평균 금지

## 5. 본체 (Process)

> TODO: 작성. 큰 흐름 — 사업부별 성장 요소 수집 → 팩트체크 → Bear/Base/Bull 정립 → Bear→Bull 전환

## 6. 연결 (Cross-references)

- 이전 모듈: [01_business.md](./01_business.md)
- 다음 모듈: [03_dcf_factors.md](./03_dcf_factors.md)
- 가치관 (성장 렌즈): [reference/philosophy.md](../reference/philosophy.md)

## 7. 체크리스트 (Checklist)

> TODO: 본문 작성 시 작성.

---

**범위 외**:
- DCF 수치 (Factor 산정은 모듈 3, 계산은 모듈 4)
- Damodaran 교차검증 — MVP 범위 외
