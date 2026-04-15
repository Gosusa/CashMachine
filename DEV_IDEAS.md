# 개발 아이디어

> 시간 날 때 구현용 메모. 정리 전 초안.

---

## 뉴스 크롤링 자동화 → 보유 주식 리스크 판정 시스템

### 목적
보유 종목별 뉴스를 자동 수집하고, 각 종목의 `{TICKER}_ai.md`(섹션 5 모니터링 지표 / 섹션 6 취약 가정)와 매칭하여 리스크 등급 판정 및 시나리오 확률 이동을 산출.

### 구성 (3-Layer)

#### 1. 수집 레이어 (Collector)
- 종목별 소스 리스트를 JSON으로 관리 (예: `scripts/sources/{TICKER}.json`)
- 소스 후보:
  - Yahoo Finance RSS
  - SEC EDGAR (10-K/10-Q/8-K filings)
  - Google News RSS (종목명 + 티커 쿼리)
  - 회사 IR 페이지 / Press Release
  - (선택) Seeking Alpha, Bloomberg, FT — 유료/rate limit 주의
- 스케줄러: Python `APScheduler` 또는 OS cron
- 주기: 일 1~N회 pull
- 저장: `news_raw/{TICKER}/{YYYY-MM-DD}_{hash}.json` (URL 해시로 중복 제거)
- 원문 + 메타데이터(source, published_at, url, title, body) 보존

#### 2. 매칭·판정 레이어 (Analyzer)
- **1차 pre-filter (비용 절감)**: `{TICKER}_ai.md` 섹션 5 키워드 정규식 매칭 → 무관 뉴스 drop
- **2차 LLM 판정**: Claude Haiku 4.5 API 호출
  - 입력: 뉴스 본문 + `{TICKER}_ai.md` 섹션 1/5/6
  - 출력 스키마:
    ```json
    {
      "impact_level": "none | watch | warning | immediate_review",
      "affected_assumption": "섹션 6의 어떤 가정에 해당하는지",
      "scenario_shift": "Bear +Xpp / Thesis -Ypp 등",
      "summary_ko": "한 줄 요약",
      "confidence": 0.0~1.0
    }
    ```
- 모델 선택: 개별 뉴스 분류는 Haiku, 주간 종합 리포트는 Sonnet

#### 3. 출력 레이어 (Reporter)
- `02_stocks/{TICKER}/news_log.md` 에 일자별 append (판정 결과 포함)
- 경고(warning) 이상만 일일 다이제스트
  - 파일: `daily_digest/{YYYY-MM-DD}.md`
  - 알림: 이메일 / Slack / Discord webhook (선택)
- 즉시 재검토(immediate_review) 발동 시 별도 강조 표시

### 핵심 트레이드오프
- 소스 범위 ↑ → 신호 ↑ but 노이즈·토큰 비용 ↑
- 시작은 티커당 3~5개 소스로 좁게, 1차 pre-filter 정확도 올려 LLM 호출 최소화
- 가성비 최적: 정규식 pre-filter → Haiku 판정 → 경고급만 사람이 리뷰

### 디렉토리 구조 (제안)
```
CashMachine/
├── scripts/
│   ├── collect.py          # 수집 엔진
│   ├── analyze.py          # 매칭·판정 엔진
│   ├── report.py           # 다이제스트 생성
│   ├── sources/
│   │   ├── ORCL.json
│   │   ├── KKR.json
│   │   └── ...
│   └── prompts/
│       └── news_impact.md  # Claude API용 시스템 프롬프트
├── news_raw/
│   └── {TICKER}/{date}_{hash}.json
├── daily_digest/
│   └── {YYYY-MM-DD}.md
└── stocks/02_stocks/{TICKER}/
    ├── {TICKER}_ai.md       # 이미 존재, 읽기 전용
    └── news_log.md          # 신규, append-only
```

### MVP 단계
1. ORCL 1개 종목 수동 파이프라인 (RSS fetch → Python 스크립트 → ai.md 매칭 → 콘솔 출력)
2. 4개 보유 종목으로 확장 + 파일 출력
3. 스케줄러 + 알림 연동
4. Pre-filter 키워드 사전 정교화 (ai.md 섹션 5에서 자동 추출)

### 미해결 질문
- 유료 소스 (Bloomberg/FT) 포함 여부 → 비용 vs 정보 우위 판단 필요
- 한국어 뉴스도 포함할 것인지 (네이버/조선비즈 등) — 보유 종목 다 미국주라 우선순위 낮음
- 판정 이력 누적 후 백테스트 방법 (판정이 실제 주가에 얼마나 부합했는지 사후 검증)
- `{TICKER}_ai.md` 업데이트 시점 트리거를 자동화할지 (현재는 수동 — 중대 이벤트만 사람이 판단)
