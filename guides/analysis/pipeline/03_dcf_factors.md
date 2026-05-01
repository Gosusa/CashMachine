---
kind: analysis-pipeline
name: dcf_factors
version: 0.0.1
implementation: ai
depends_on:
  - reference/dcf_methods.md
inputs:
  - business.json    # 모듈 1 — DCF 방법 선정 근거
  - growth.json      # 모듈 2 — Factor 값의 정성 근거
outputs:
  - dcf_factors.json # 모듈 4가 즉시 계산 가능한 정량값
---

# 모듈 3. DCF Factor 산정

> 모듈 1·2 결론을 받아 사업부별로 (a) DCF 방법 선정 + (b) Bear/Base/Bull Factor 정량값을 산출한다.
> 이 출력은 그대로 모듈 4(코드 엔진)의 입력이 된다.

## 1. 목적 (Why)

분석의 정성 결론을 **결정적으로 계산 가능한 숫자**로 변환. AI가 정량 추정을 마치는 마지막 단계.

이후 모듈 4는 순수 코드로, 같은 Factor를 받으면 항상 같은 목표가를 낸다.

## 2. 입력 (Inputs)

- `business.json` — 사업부별 사업 성격 (DCF 방법 선정 근거)
- `growth.json` — 사업부별 성장 시나리오 (Factor 값 산정 근거)
- [reference/dcf_methods.md](../reference/dcf_methods.md) — 5가지 DCF 방법 카탈로그

## 3. 출력 (Outputs)

### `dcf_factors.json` (모듈 4가 즉시 사용)

스키마: [packages/shared-types/schemas/dcf-factors.ts](../../../packages/shared-types/schemas/dcf-factors.ts)

구조:
```
{
  ticker, analysis_date, current_price, shares_diluted, net_debt,
  segments: [
    {
      segment_id,
      dcf_method: "A_FCF" | "B_SOTP" | "C_ExcessReturns" | "D_NAV" | "E_ForwardMultiple",
      factors: {
        bear: { ... 방법별 입력값 ... },
        base: { ... },
        bull: { ... }
      }
    }
  ]
}
```

> 마크다운(`dcf_factors.md`)도 부산물로 생성. 사람이 산정 근거 검토용.

## 4. 핵심 원칙 (Principles)

> TODO: 작성. 후보:
> - 사업부마다 다른 DCF 방법 가능 (SOTP의 일반화)
> - 모든 Factor 값에는 근거가 `growth.json`의 어느 항목에서 왔는지 명시
> - 멀티플은 역사적 실측 범위 (희망적 수치 금지)
> - WACC·할인율은 작성일 시점 10Y Treasury 기준

## 5. 본체 (Process)

> TODO: 작성. 큰 흐름 — 사업부별 방법 선정 → 시나리오별 Factor 산정 → 회사 공통값(주식수, Net Debt) 추가

## 6. 연결 (Cross-references)

- 이전 모듈: [02_growth.md](./02_growth.md)
- 다음 모듈: [04_dcf_compute.md](./04_dcf_compute.md)
- DCF 방법론 카탈로그: [reference/dcf_methods.md](../reference/dcf_methods.md)

## 7. 체크리스트 (Checklist)

> TODO: 본문 작성 시 작성.

---

**범위 외**:
- 실제 DCF 계산 (모듈 4)
- Damodaran 교차검증 — MVP 범위 외
