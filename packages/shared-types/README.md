# packages/shared-types

zod 스키마 → TS 타입 자동 생성. Python 쪽은 별도로 pydantic 모델로 미러링.

## 구조

```
schemas/
├── segment.ts         # 분석·추적 단위 (공시 세그먼트 기준)
├── business.ts        # 모듈 1 출력 (사업 분석)
├── growth.ts          # 모듈 2 출력 (성장 분석)
├── dcf-factors.ts     # 모듈 3 출력 (DCF Factor 산정)
├── dcf-results.ts     # 모듈 4 출력 (DCF 계산 결과)
├── report.ts          # 모듈 5 출력 (사용자 리포트)
└── index.ts           # re-export
```

## 원칙

- **소스 오브 트루스**: 이 폴더의 zod 스키마
- 모듈 간 데이터 전달은 반드시 이 스키마를 통과
- Python 측(`apps/api`, `workers/`)은 pydantic 모델로 미러링 (수동 → 향후 자동화)
- 스키마 변경 시 두 언어 동기화 필요

## 가이드 연결

각 스키마는 [guides/analysis/](../../guides/analysis/)의 해당 모듈 가이드와 1:1 대응.

## 현재 상태

스캐폴딩만 완료. 각 스키마의 본 필드는 모듈 가이드 본문 작성과 함께 확정 예정.
