# CashMachine — 주식 리서치

미국 주식 장기 가치투자 분석 워크스페이스.

> 앱(대시보드, DCF 엔진, 데이터 레이어) 관련 작업은 상위 폴더의 `app/` 하위에서 별도 진행한다. 이 폴더(`stocks/`)는 순수 리서치/분석 산출물만 다룬다.

## 프로젝트 목적

1. 투자 기준 정의 및 체크리스트 관리
2. DCF 시나리오 기반 적정주가 산출 (Extreme Bear / Bear / Base / Bull / Thesis)
3. 사용자 Thesis 팩트체크 및 Revaluation

## 투자 기준 파일

종목 분석 요청 시 아래 파일을 기준으로 판단:

- [01_criteria/01_analysis_guide.md](01_criteria/01_analysis_guide.md) — 종목 분석 결과물 작성 가이드

**모든 분석은 보수적 가정을 우선으로 한다.**

## 종목 평가 워크플로우

종목 분석은 **Base → Thesis → Revaluation** 3단계로 진행한다.
Base는 시장 컨센서스 관점의 리서치, Revaluation은 사용자의 장기 투자 엣지를 반영한 재평가다.

### 1단계: Base 분석 — "{TICKER} 평가해줘" / "{TICKER} base 평가해줘"

시장이 평가하는 수준의 순수 Base. 가이드만으로 도출 가능한 컨센서스.

1. [01_criteria/01_analysis_guide.md](01_criteria/01_analysis_guide.md)를 읽는다
2. **섹션별 작성 규칙**을 따라 `07_stocks/{TICKER}_base.md` 파일을 생성한다
3. 작성 완료 전 가이드 하단의 **체크리스트**를 확인한다

> 이 파일은 **시장 컨센서스 Base**로 보존한다. Revaluation 시에도 덮어쓰지 않는다.

### 2단계: 사용자 Thesis 작성 (사용자가 작성)

사용자가 `07_stocks/{TICKER}_thesis.md` 파일에 장기 투자 관점의 엣지 근거/시나리오를 직접 작성한다.
Claude는 이 단계에서 파일을 작성하지 않는다. 사용자가 작성하는 파일에는 보통 다음이 포함된다:

- 장기적으로 이 종목을 좋게 보는 근거 (guide 기반 Base가 놓친 부분)
- 예상 시나리오 (구체적 이벤트, 시장 변화, 사업 전환 등)
- 기대 영향 (매출/이익/CF 증가 규모, 멀티플 리레이팅 등)

### 3단계: Revaluation — "{TICKER} 재평가해줘"

사용자 thesis를 팩트체크하고 Base에 반영해 재평가한다.

1. `07_stocks/{TICKER}_base.md` 와 `07_stocks/{TICKER}_thesis.md` 를 읽는다
2. **Thesis 팩트체크**:
   - 각 근거의 타당성 판단 (✅ 독립 소스 확인 / ⚠️ 회사 자체 공시만 / ❌ 반박 근거 존재)
   - 각 시나리오의 **실현 확률 (%)** 판단과 근거
3. **Base + Thesis 재평가**: `07_stocks/{TICKER}_revaluation.md` 파일을 생성한다
   - Base의 DCF 시나리오 (Extreme Bear / Bear / Base / Bull) 에 **Thesis Case 시나리오 추가**
   - Thesis Case 확률 = thesis의 실현 확률 × 팩트체크 감쇠
   - 기존 4개 시나리오 확률 재조정 (합계 100% 유지)
   - 실현 시 증가분 현금흐름 × 실현 확률로 기댓값 반영
   - 새 가중평균 목표가 산출
4. **마지막 섹션: Base vs Revaluation 비교**
   - 근거 차이: thesis가 추가로 반영한 엣지 요약
   - DCF value 차이: Base 가중평균 vs Revaluation 가중평균 목표가 비교표
   - 엣지의 기댓값 기여 ($ 단위)

## 폴더 구조 (`stocks/`)

```
stocks/
├── CLAUDE.md           # 본 파일
├── 01_criteria/        # 투자 기준 정의
│   └── 01_analysis_guide.md
└── 07_stocks/          # 종목별 분석 결과물
    ├── {TICKER}_base.md         — Base 리서치 (가이드 기반)
    ├── {TICKER}_thesis.md       — 사용자 엣지 시나리오
    └── {TICKER}_revaluation.md  — 팩트체크 + 재평가 + 비교
```

## Git 브랜치 전략

- `main` — 안정 버전
- `Develop/Feature/*` — 기능 개발

## 주의사항

- 모든 분석은 **보수적 가정**을 우선으로 한다
- 투자자 배경: C/C++ 경험, Python 초급
