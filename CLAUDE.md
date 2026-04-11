# CashMachine

미국 주식 장기 가치투자 분석 및 자동화 시스템.

## 프로젝트 목적

1. 투자 기준 정의 및 체크리스트 관리
2. DCF 모델링으로 적정주가 산출 (Base / Bull / Bear)
3. 뉴스/이벤트 크롤링 → 영향 종목 자동 분석
4. 이벤트 반영 DCF 재산출 → 상승/하락 종목 판단

## 투자 기준 파일

종목 분석 요청 시 아래 파일들을 기준으로 판단:

- [01_criteria/01_business_quality.md](01_criteria/01_business_quality.md) — 비즈니스 퀄리티
- [01_criteria/02_market_environment.md](01_criteria/02_market_environment.md) — 시장 환경 및 트렌드
- [01_criteria/03_valuation_scenarios.md](01_criteria/03_valuation_scenarios.md) — 가치 평가 및 시나리오
- [01_criteria/04_risk_return.md](01_criteria/04_risk_return.md) — 기대 수익 및 리스크 관리
- [01_criteria/05_masters.md](01_criteria/05_masters.md) — 거장 투자 철학 참고
- [01_criteria/06_evaluation_session.md](01_criteria/06_evaluation_session.md) — 종목 평가 세션 구조

**모든 분석은 보수적 가정을 우선으로 한다.**

## app_instructions.md 업데이트 규칙

`app_instructions.md`는 위 criteria/ 파일 6개를 기반으로 자동 생성되는 파일이다.
"app_instructions 업데이트해줘" 또는 유사한 요청 시 반드시 아래 순서로 작업한다:

1. criteria/ 파일 6개를 모두 읽는다
2. 각 파일의 `### 나의 기준` 섹션에서 변경된 내용을 확인한다
3. app_instructions.md를 criteria/ 내용 기반으로 새로 작성한다
4. 지침용 파일이므로 간결하게 유지한다 (상세 설명보다 기준값 중심)

## 종목 평가 세션 규칙

"[종목명] 평가해줘" 또는 유사한 요청 시 반드시 아래 순서로 작업한다:

1. 01_criteria/ 파일 6개를 모두 읽는다
2. 06_evaluation_session.md의 Step 1~6 구조를 따른다
3. 05_masters.md의 거장 관점을 포함한다
4. 06_evaluation_session.md에 기록된 매수 근거가 있으면 "가정이 유효한가" 함께 점검한다

## 프로젝트 구조

```
CashMachine/
├── 01_criteria/       # 투자 기준 정의
├── 02_dashboard/      # 포트폴리오 대시보드
├── 03_dcf/            # DCF 모델링 코드 + 엑셀
├── 04_crawler/        # 뉴스 크롤러 (추후)
├── 05_analysis/       # 이벤트 영향 분석 (추후)
└── 06_data/           # 공유 데이터 (portfolio_data.py 등)
```

## Git 브랜치 전략

- `main` — 안정 버전
- `Develop/Feature/*` — 기능 개발

## 주의사항

- API 키, 계좌 정보는 `.env`에 저장, 절대 커밋 금지
- 언어: Python (데이터 분석/자동화)
- 투자자 배경: C/C++ 경험, Python 초급
