# CashMachineArch — Architecture

> 주식 분석 SaaS. AI가 가이드를 기반으로 base 분석을 만들고, 사용자가 자기 투자 논리를 얹은 시나리오를 만들어 분기마다 검증하고, 포트폴리오 시뮬레이션과 일일 뉴스 영향 분석까지 제공.

작성: 2026-05-01 / Owner: Gosusa

---

## 1. 핵심 기능

| # | 기능 | 도메인 |
|---|---|---|
| 1 | AI가 가이드 기반으로 base 분석 파일 생성 → DB 저장 | `analysis` |
| 2 | 사용자가 base를 가져다 자기 투자 논리를 얹은 시나리오 파일 생성 (AI가 합성) | `scenario` |
| 3 | 분기 실적 발표 시 base/시나리오의 논리가 흘러가고 있는지 검증 | `earnings` |
| 4 | 포트폴리오 시뮬레이션 (장기 수익률, S&P500 대비 아웃퍼폼, 시각화) | `portfolio` |
| 5 | 보유 종목 일일 뉴스 크롤 + 펀더맨탈 영향 분석 + 알림 | `news` |

---

## 2. 스택 결정

| 항목 | 선택 | 이유 |
|---|---|---|
| 웹 | Next.js 15 (App Router) | 기존 자산, SSR, Vercel 통합 |
| 모바일 | **MVP에선 PWA로** Next.js 그대로. v2에서 Expo(RN) 추가 | 출시 속도 우선. 앱은 별도 프로젝트로 추가 시 `packages/sdk` 재사용 |
| 백엔드 (light) | Next.js API routes (Vercel serverless) | 인증·CRUD·조회·webhook은 가볍고 사용량 과금 |
| 백엔드 (heavy) | FastAPI (Python, Fly.io 또는 Railway) | AI 호출·크롤링·시뮬레이션은 길고 메모리 ↑ |
| 백그라운드 잡 | Workers (Python) + Supabase pg_cron | 일일 가격·뉴스, 분기 실적 트리거 |
| DB / Auth | Supabase (Postgres + Auth + Storage) | 기존 자산, 빠른 부트 |
| AI | Anthropic Claude (with prompt caching) | 가이드가 길어서 캐싱 효과 큼 |
| 결제 | Stripe (구독, 웹 전용) | 표준. 앱 IAP 30% 회피 |
| 모노레포 | pnpm workspaces + Turborepo | 웹·앱·SDK·타입 공유 |

### 분담 원칙 (백엔드)

> **"수초 안에 끝나면 Next.js, 그 이상이면 FastAPI"**

- Next.js API routes: 인증, 사용자 데이터 CRUD, 조회, Stripe webhook, 잡 트리거(큐에 enqueue만), SSE/WebSocket 진행상황 푸시
- FastAPI: AI 호출, 시뮬레이션 계산, 크롤링, 무거운 데이터 처리
- Workers: 스케줄/큐 기반 백그라운드 작업

세부 분담은 기능 단위로 결정. 첫 기능(`analysis` 파이프라인) 구현하며 패턴 확정.

---

## 3. 모노레포 구조

```
CashMachineArch/
├── apps/
│   ├── web/                  # Next.js 15 — 사용자 화면 + light API
│   ├── api/                  # FastAPI — heavy 작업
│   └── mobile/               # (v2) Expo / React Native
├── packages/
│   ├── sdk/                  # 타입드 API 클라이언트 (web/mobile 공용)
│   ├── shared-types/         # zod 스키마 → TS/Python 타입
│   └── ui/                   # (선택) 공용 React 컴포넌트
├── workers/
│   ├── analysis/             # base 분석 생성 워커
│   ├── scenario/             # 사용자 시나리오 합성 워커
│   ├── earnings/             # 분기 실적 정합성 검증
│   ├── news/                 # 일일 뉴스 크롤 + 영향 평가
│   └── prices/               # 일일 가격 적재
├── ai/
│   ├── prompts/              # 시스템 프롬프트 템플릿
│   ├── clients/              # Anthropic 래퍼 (caching, retry, cost log)
│   └── pipelines/            # analysis/scenario/earnings/news 파이프라인
├── guides/                   # AI 가이드 마크다운 (Git source of truth)
│   ├── analysis/             # base 분석 방법론
│   ├── scenario/             # 시나리오 합성 가이드
│   ├── earnings/             # 분기 검증 가이드
│   └── news_impact/          # 뉴스 영향 평가 가이드
├── infra/
│   ├── supabase/migrations/  # DB 스키마 마이그레이션
│   ├── docker/
│   └── github-actions/
└── docs/
    ├── ARCHITECTURE.md       # 이 파일
    └── DATA_MODEL.md         # 테이블·관계 상세
```

---

## 4. 도메인 분리

| 도메인 | 책임 | 위치 |
|---|---|---|
| `catalog` | 종목 유니버스, 메타데이터, 가격 데이터 | `apps/web` (조회) + `workers/prices` |
| `analysis` | base 분석 파일 (생성·버저닝·조회) | `apps/api` (생성) + `apps/web` (조회) |
| `scenario` | 사용자별 시나리오 (생성·조회·수정) | `apps/api` (AI 합성) + `apps/web` (CRUD) |
| `earnings` | 실적 이벤트, 정합성 체크포인트 | `workers/earnings` + `apps/web` (조회) |
| `portfolio` | 보유종목, 시뮬레이션, 벤치마크 | `apps/api` (시뮬) + `apps/web` (CRUD) |
| `news` | 크롤·영향 평가·알림 | `workers/news` + `apps/web` (조회) |
| `payments` | 구독 (Stripe), entitlement | `apps/web` (Stripe webhook + UI) |
| `ai` | 프롬프트, 모델 호출, 결과 버저닝 | `ai/` (라이브러리, api·workers 공용) |

---

## 5. 데이터 모델 (요약)

```sql
-- 사용자 (Supabase Auth가 auth.users 관리)
profiles(user_id PK FK, display_name, plan, ...)

-- 카탈로그
tickers(id, symbol, name, sector, exchange, ...)
prices_daily(ticker_id, date, open, high, low, close, volume, PK(ticker_id, date))
sp500_daily(date PK, close)

-- 가이드 버저닝 (Git에서 sync)
guide_versions(id, kind, version, content_md, hash, synced_at)
  -- kind: 'analysis' | 'scenario' | 'earnings' | 'news_impact'

-- 분석
analyses(id, ticker_id, guide_version_id, content_md, model, cost_usd, created_at)
  -- 같은 ticker라도 가이드/모델 변경 시 새 행. 덮어쓰기 금지.

-- 시나리오
scenarios(id, user_id, base_analysis_id, name, user_thesis_md, ai_synthesis_md,
          guide_version_id, created_at, updated_at)

-- 분기 실적 검증
earnings_events(id, ticker_id, quarter, report_date, transcript_url, raw_text)
thesis_checkpoints(id, target_type, target_id, earnings_event_id, alignment_md, score, created_at)
  -- target_type: 'analysis' | 'scenario'

-- 포트폴리오
portfolios(id, user_id, name, created_at)
holdings(portfolio_id, ticker_id, weight, entry_price, entry_date, PK(portfolio_id, ticker_id))
simulations(id, portfolio_id, params_json, result_json, created_at)

-- 뉴스
news_items(id, ticker_id, source, url, published_at, raw_text, hash)
news_impact(id, news_item_id, user_id NULL, impact_md, severity, created_at)

-- 알림
notifications(id, user_id, kind, payload_json, read_at, created_at)

-- 결제
subscriptions(id, user_id, stripe_customer_id, stripe_sub_id, plan, status, current_period_end)
```

자세한 컬럼·인덱스는 `docs/DATA_MODEL.md`로.

### 핵심 원칙

- **AI 결과 행은 절대 덮어쓰기 금지**: 가이드 버전이 바뀌면 새 행. 사용자가 히스토리 비교 가능
- **시나리오는 base의 특정 버전을 참조**: base 재생성해도 사용자 시나리오 안 깨짐
- **모든 AI 결과 행에 `guide_version_id`**: 어떤 버전으로 만들어졌는지 추적

---

## 6. AI 레이어

```
ai/
├── prompts/              # 시스템 프롬프트 (코드)
├── clients/
│   ├── anthropic.py     # Claude 래퍼 (caching, retry, cost log)
│   └── cache.py         # 가이드 캐싱 헬퍼
├── pipelines/
│   ├── analysis.py      # 가이드 + ticker → base 분석
│   ├── scenario.py      # base + 사용자 thesis → 시나리오
│   ├── earnings.py      # transcript + base/scenario → alignment
│   └── news_impact.py   # 뉴스 + base → severity + 분석
└── guides_loader.py      # DB에서 활성 가이드 로드
```

- 가이드는 Git이 origin → 배포/수동 트리거로 DB로 sync (`guide_versions` 테이블)
- 파이프라인은 DB에서 가이드를 읽어 호출
- 모든 호출은 `cost_usd` 기록 + Anthropic prompt caching 활성화

---

## 7. 스케줄·트리거

| 시점 | 작업 | 실행자 |
|---|---|---|
| 매일 04:00 UTC | 가격 적재 (유니버스 + 보유) | `workers/prices` |
| 매일 사용자 TZ 09:00 | 보유 종목 뉴스 크롤·영향 평가·알림 | `workers/news` |
| 실적 발표 감지 시 | thesis_checkpoint 생성 | `workers/earnings` |
| 사용자 요청 | 분석/시나리오 생성 | `workers/analysis`, `workers/scenario` |

스케줄러: **Supabase pg_cron** (MVP). 부하 늘면 Cloud Run Jobs / Temporal로 이전.

큐: MVP는 Postgres `jobs` 테이블 + 워커 폴링 (Supabase 한 곳에서 관리). 확장 시 Redis/SQS.

---

## 8. 호스팅

| 컴포넌트 | 호스팅 |
|---|---|
| Web (Next.js) | Vercel |
| FastAPI | Fly.io 또는 Railway |
| Workers | Fly.io machine 또는 cron job |
| DB / Auth / Storage | Supabase |
| Mobile (v2) | Expo EAS |

---

## 9. 결제·플랜

- **구독만**, **웹에서만** 결제 (Stripe Checkout)
- 모바일 IAP 30% 수수료 회피: 앱에서는 가입 안내만, 결제 안내·링크 X (Spotify·Netflix 패턴)
- 광고: **post-MVP**. 트래픽 검증 후 AdSense + 쿠키 동의 UI 추가
- ❌ 시나리오 마켓플레이스: 한국 자본시장법(무인가 투자자문) 리스크로 제외

---

## 10. 결정 락인 / 보류

### 락
- 스택 (위)
- 모노레포 구조 (위)
- 가이드 버저닝: Git 원본 + DB sync, AI 결과에 `guide_version_id` 추적
- 결제 (구독·웹 only)

### 보류 (첫 기능 만들며 결정)
- 분석 파이프라인의 정확한 엔드포인트 분담 (Next.js ↔ FastAPI 경계)
- 진행상황 푸시 방식 (polling / SSE / WebSocket)
- 가이드 sync 트리거 (배포 시? 수동 어드민? 둘 다?)

---

## 11. 다음 단계

1. 디렉터리 스캐폴딩 + 각 폴더 placeholder README
2. 루트 `README.md`, `.gitignore`, `package.json` (workspace), `pyproject.toml`
3. Supabase 마이그레이션 `0001_init.sql` (위 스키마)
4. **첫 기능 — `analysis` 파이프라인**: 가이드 마크다운 + ticker → AI 호출 → `analyses` 행 → 웹에서 조회. 이걸 만들면서 백엔드 분담·진행상황 푸시 방식 확정
