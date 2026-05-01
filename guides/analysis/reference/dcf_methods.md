---
kind: analysis-reference
name: dcf_methods
version: 0.0.1
referenced_by:
  - pipeline/01_business.md  # 사업 유형 인식용
  - pipeline/03_dcf_factors.md  # 사업부별 방법 선정
  - pipeline/04_dcf_compute.md  # 코드 엔진 구현 명세
---

# DCF 방법론 카탈로그 (Reference)

> 5가지 DCF 방법(A~E)의 정의·공식·필수 가정·적용 기준.
> 모듈 1이 사업 유형 인식, 모듈 3이 사업부별 방법 선정, 모듈 4가 코드 구현에 참조.

## 1. 사업 유형 판별 — 어떤 방법을 쓸 것인가

> TODO: 본문 작성. 옛 `03_dcf_guide.md` Step 1 판별 테이블 가져옴.
>
> 큰 분류:
> - **A. Standard FCF DCF** — 단일 사업, 안정 FCF
> - **B. SOTP** — 이질적 세그먼트 다수 (자산운용사, 지주, 복합기업)
> - **C. Excess Returns / DDM** — 자본 규제 금융기관 (은행, 보험)
> - **D. NAV** — 자산 가치 중심 (REIT, 자원개발, 투자회사)
> - **E. Forward Multiple** — 초기 성장·적자 (보조용)

## 2. 방법별 가이드

### A. Standard FCF DCF

> TODO: 옛 가이드 Step 2-A 본문 가져옴. 공식, 필수 가정, 시나리오별 변동 변수.

### B. SOTP

> TODO: 옛 가이드 Step 2-B. 세그먼트별 표준 평가 + 시나리오별 멀티플 조정.

### C. Excess Returns / DDM

> TODO: 옛 가이드 Step 2-C.

### D. NAV

> TODO: 옛 가이드 Step 2-D.

### E. Forward Multiple

> TODO: 옛 가이드 Step 2-E.

## 3. 공통 원칙

> TODO: 할인율(WACC), 세율, Terminal Value, 희석 주식수.

## 4. 시나리오 구성 규칙

> TODO: Bear/Base/Bull 3시나리오, 확률 가중·가중평균 금지, 매수 판정 금지.

---

**옛 출처**: `C:\Stocks\CashMachineRefactoring\stocks\01_criteria\03_dcf_guide.md`

**범위 외**:
- Damodaran 5규율 교차검증 — MVP 범위 외
