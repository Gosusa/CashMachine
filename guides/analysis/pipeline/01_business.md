---
kind: analysis-pipeline
name: business
version: 0.0.1
implementation: ai
depends_on:
  - reference/philosophy.md
  - reference/dcf_methods.md  # 사업 유형 분류 인식용
inputs:
  - ticker
outputs:
  - business.md       # 사람이 읽는 결과
  - business.json     # 모듈 2가 파싱
---

# 모듈 1. 사업 분석

> 회사가 무엇을 하고, 어떻게 돈을 벌고, 해자가 어디서 나오는지를 결론낸다.
> 성장·시나리오·DCF는 다루지 않는다 (모듈 2~4).

## 1. 목적 (Why)

가치관 기반으로 사업의 본질을 분해. 사업부 구성, 수익 원리, 수급 구조, 해자 근원, 경쟁자 대비 우위, 전략적 베팅까지를 결론으로 만든다.

다음 모듈(성장 분석)이 "이 사업이 어떻게 더 자랄 수 있는가"를 판단할 수 있도록 사업 자체의 그림을 완성하는 게 목적.

## 2. 입력 (Inputs)

- 종목 코드 (예: ORCL, AAPL)
- [reference/philosophy.md](../reference/philosophy.md) — 가치관 렌즈
- [reference/dcf_methods.md](../reference/dcf_methods.md) — 사업 유형 분류 (Stalwart / Fast Grower 등)
- 외부 데이터: 최신 10-K, 10-Q, 공시 세그먼트 정보, 경쟁자 공시 등

## 3. 출력 (Outputs)

### `business.md` (사람이 읽음)

섹션 구조 (TODO: 본문 작성 시 확정):
- 회사 한 줄 + 카테고리
- 사업부 분리 (공시 세그먼트 기준)
- 사업부별:
  - 어떻게 돈을 버는지 (수익 모델, 단위 경제학)
  - 수급 구조 (수요 동력 + 공급 제약/병목)
  - 해자 근원 (해자 유형 + 검증 등급)
  - 경쟁자 대비 우위
  - 전략적 베팅 — 이 사업부는 무엇에 배팅했는가

### `business.json` (모듈 2가 파싱)

스키마: [packages/shared-types/schemas/business.ts](../../../packages/shared-types/schemas/business.ts)

## 4. 핵심 원칙 (Principles)

> TODO: 본문 작성 시 확정. 후보:
> - 모든 주장에 수치 + 출처
> - 해자 검증 3등급 (성립 / 미검증 / 해자 아님). 회사 자체 공시만으로는 해자 인정 불가
> - segment 정의 = **공시 세그먼트** (분할 금지, 병합 가능). 단일 보고 회사 = whole company 1개
> - 성장·시나리오는 이 모듈에서 다루지 않음 (모듈 2 소관)

## 5. 본체 (Process)

> TODO: 작성. 큰 흐름 — 사업부 분리 → 사업부별 분석 → 회사 종합

## 6. 연결 (Cross-references)

- 다음 모듈: [02_growth.md](./02_growth.md)
- 가치관 참조: [reference/philosophy.md](../reference/philosophy.md)
- 카테고리 분류: [reference/dcf_methods.md](../reference/dcf_methods.md)

## 7. 체크리스트 (Checklist)

> TODO: 본문 작성 시 핵심 항목만 추려서 정리.

---

**범위 외**:
- 회피 게이트 (부채/경영진) — 현재 MVP 범위에서 제외, 추후 추가 가능
- DCF 계산·시나리오 — 모듈 3·4 소관
