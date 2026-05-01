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
| `catalog` | 종목 유니버스, 메타데이터, 가격 데이터, **사업부 매핑** | `apps/web` (조회) + `workers/prices` |
| `analysis` | **5-모듈 파이프라인** (사업→성장→Factor→DCF→리포트). 모듈별 결과·버저닝·조회 | `apps/api` + `workers/analysis` (생성) + `apps/web` (조회) |
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

-- 사업부 (분석·추적 단위 — 공시 세그먼트 기준)
ticker_segments(id, ticker_id, name, reported_segment_codes[], 
                effective_from, effective_to, is_whole_company)
  -- 공시 세그먼트는 분할 금지, 병합 가능 (현금흐름 본질이 같으면)
  -- 단일 보고 회사 = is_whole_company=true, reported_segment_codes=[]
  -- 회사가 보고 구조 바꾸면 effective_to 닫고 새 행

segment_quarterly_actuals(segment_id, quarter, revenue, operating_income, ...
                          PK(segment_id, quarter))
  -- 분기 워커가 10-Q에서 적재. Factor와 비교해 궤도 판정

-- 가이드 버저닝 (Git에서 sync)
guide_versions(id, kind, name, version, content_md, hash, synced_at)
  -- kind: 'analysis-pipeline' | 'analysis-reference' | 'scenario' | 'earnings' | 'news_impact'
  -- name: 'business' | 'growth' | 'dcf_factors' | 'dcf_compute' | 'report' | 'philosophy' | 'dcf_methods' | ...

-- 분석 (5-모듈 파이프라인. 모듈별로 행을 쌓음 → 부분 재실행·캐싱 가능)
analyses(id, ticker_id, status, started_at, completed_at)
  -- 한 번의 분석 실행 (root). status: 'running' | 'completed' | 'failed'

analysis_business(id, analysis_id, guide_version_id, content_md, content_json,
                  model, cost_usd, created_at)
analysis_growth(id, analysis_id, business_id FK, guide_version_id,
                content_md, content_json, model, cost_usd, created_at)
analysis_dcf_factors(id, analysis_id, growth_id FK, guide_version_id,
                     content_json, model, cost_usd, created_at)
analysis_dcf_results(id, analysis_id, factors_id FK, content_json, computed_at)
  -- 모듈 4 = 코드. AI 비용·model 없음
analysis_report(id, analysis_id, business_id FK, growth_id FK, dcf_results_id FK,
                guide_version_id, content_md, content_json, model, cost_usd, created_at)

  -- 모든 모듈 결과 행은 덮어쓰기 금지. 부분 재실행 시 새 행 + 후속 모듈도 재실행.
  -- 후속 모듈은 자기 입력 모듈의 id를 FK로 추적 → 정확히 어떤 입력으로 만들어졌는지 보존

-- 시나리오
scenarios(id, user_id, base_report_id FK, name, user_thesis_md, ai_synthesis_md,
          guide_version_id, created_at, updated_at)

-- 분기 실적 검증
earnings_events(id, ticker_id, quarter, report_date, transcript_url, raw_text)
thesis_checkpoints(id, target_type, target_id, earnings_event_id, alignment_md, score, created_at)
  -- target_type: 'report' | 'scenario'
  -- 추가로 segment_quarterly_actuals와 dcf_factors 비교해 사업부별 궤도 판정

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

자세한 컬럼·인덱스는 `docs/DATA_MODEL.md`로 (예정).

### 핵심 원칙

- **AI 결과 행은 절대 덮어쓰기 금지**: 가이드 버전이 바뀌면 새 행. 모듈 단위 재실행 시도 새 행
- **모듈 간 FK 추적**: `growth → business`, `factors → growth`, `dcf_results → factors`, `report → all` — 정확히 어떤 입력으로 만들어졌는지 보존
- **부분 재실행 지원**: 모듈 N 재실행 시 후속 모듈도 다시 도는 게 기본. 사용자가 Factor만 만지면 모듈 4·5만 재실행 (비용 절감)
- **시나리오는 report의 특정 버전을 참조**: 분석 재생성해도 사용자 시나리오 안 깨짐
- **segment 추적**: 모든 분석 결과는 사업부 단위로 저장. 분기 실적 적재 시 자동으로 궤도 판정 가능

---

## 6. AI 레이어 + 분석 파이프라인 (모듈식)

분석은 **5개 독립 모듈**의 DAG. 각 모듈은 입력·출력이 명확하고, 독립적으로 재실행·캐싱 가능.

### 6.1 분석 파이프라인 DAG

```
[reference 가이드 — 모든 모듈이 참조]
 ├─ philosophy.md       # 가치관·렌즈 (M1·M2·M5)
 ├─ dcf_methods.md      # 5가지 DCF 방법 변수·공식·제약 (M1·M2·M3·M4)
 └─ factor_catalog.md   # factor 정의·출처 매핑 (M1·M2·M3)
        │
        ▼ (필요 시 참조)

[모듈 1: 사업 분석] ◀── ticker
        │ business.json
        ├──────────┐
        ▼          │
[모듈 2: 성장]    │
        │ growth.json
        ├─────────┼─────────┐
        ▼         ▼         │
[모듈 3: DCF Factor 산정]  │
        │ dcf_factors.json  │
        ▼                   │
[모듈 4: DCF 계산 (코드)]  │
        │ dcf_results.json  │
        └────────┬──────────┘
                 ▼
        [모듈 5: 리포트] → report.md
```

| 모듈 | 구현 | 입력 | 출력 |
|---|---|---|---|
| 1. 사업 분석 | AI | ticker, philosophy, dcf_methods, factor_catalog | business.json/md |
| 2. 성장 분석 | AI | business.json, philosophy, dcf_methods, factor_catalog | growth.json/md |
| 3. DCF Factor 산정 | AI | business.json, growth.json, dcf_methods, factor_catalog | dcf_factors.json |
| 4. DCF 계산 | **Python 코드** | dcf_factors.json, dcf_methods | dcf_results.json |
| 5. 리포트 작성 | AI | business.json, growth.json, dcf_factors.json, dcf_results.json, philosophy | report.md/json |

**모듈 4가 코드인 이유**: DCF는 결정적 산수. AI가 산수 틀리면 안 됨. Factor가 정해지면 같은 입력 = 같은 출력 보장. 사용자가 UI에서 Factor 슬라이더 만져도 즉시 새 결과 (AI 재호출 X).

### 6.2 코드 구조

```
ai/
├── prompts/                       # 시스템 프롬프트 (코드)
├── clients/
│   ├── anthropic.py              # Claude 래퍼 (caching, retry, cost log)
│   └── cache.py                  # 가이드 캐싱 헬퍼
├── pipelines/
│   ├── analysis/                 # 5-모듈 파이프라인
│   │   ├── __init__.py          # 오케스트레이션 (DAG 실행)
│   │   ├── module_1_business.py # AI
│   │   ├── module_2_growth.py   # AI
│   │   ├── module_3_factors.py  # AI
│   │   ├── module_4_dcf.py      # 코드 (DCF 엔진)
│   │   └── module_5_report.py   # AI
│   ├── scenario.py               # base report + 사용자 thesis → 시나리오
│   ├── earnings.py               # transcript + report → alignment
│   └── news_impact.py            # 뉴스 + report → severity + 분석
└── guides_loader.py              # DB에서 활성 가이드 로드
```

### 6.3 가이드 구조

```
guides/
├── analysis/
│   ├── pipeline/    # 모듈별 가이드 (5개)
│   │   ├── 01_business.md
│   │   ├── 02_growth.md
│   │   ├── 03_dcf_factors.md
│   │   ├── 04_dcf_compute.md  # 얇음, 코드 명세
│   │   └── 05_report.md
│   └── reference/   # 지식 베이스 (모든 모듈이 참조)
│       ├── philosophy.md      # 가치관·렌즈
│       ├── dcf_methods.md     # 5가지 DCF 방법 변수·공식·제약
│       └── factor_catalog.md  # factor 정의·출처 매핑 (single source of truth)
├── scenario/, earnings/, news_impact/  # 다른 도메인 (추후)
```

### 6.4 원칙

- 가이드는 Git이 origin → 배포/수동 트리거로 `guide_versions` 테이블로 sync
- 파이프라인은 DB에서 활성 가이드 버전을 읽어 호출
- 모든 모듈 결과 행에 `guide_version_id` 기록 → 어떤 버전으로 만들어졌는지 추적
- 모든 AI 호출은 `cost_usd` 기록 + Anthropic prompt caching 활성화 (가이드 캐싱 효과 큼)
- 모듈 출력은 **md + JSON 동시** — md는 사람이 읽고, JSON은 다음 모듈이 파싱
  - JSON 스키마: [`packages/shared-types/schemas/`](../packages/shared-types/schemas/)

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
- **분석 = 5-모듈 파이프라인** (사업·성장·Factor·DCF·리포트). 모듈 4는 Python 코드
- **추적 단위 = 공시 세그먼트** (분할 금지, 병합 가능). 단일 보고 회사는 whole company 1개
- **모듈 출력 = md + JSON 동시**, JSON 스키마는 `packages/shared-types/schemas/`
- MVP 범위 외: 회피 게이트 (부채/경영진), Damodaran 5규율 교차검증 — 추후 추가 가능

### 보류 (첫 기능 만들며 결정)
- 모듈별 엔드포인트 분담 (Next.js ↔ FastAPI 경계). 큰 원칙은 "AI 모듈=FastAPI, 트리거/조회=Next.js"
- 진행상황 푸시 방식 (polling / SSE / WebSocket) — 5단계라 SSE 유리할 듯
- 가이드 sync 트리거 (배포 시? 수동 어드민? 둘 다?)
- 모듈 4 위치: `ai/pipelines/analysis/module_4_dcf.py` 안 vs `ai/dcf_engine/` 별도 (시뮬레이션·시나리오 모듈도 사용 가능성)

---

## 11. 다음 단계

**완료**:
1. ✅ 디렉터리 스캐폴딩 + 각 폴더 placeholder README
2. ✅ 루트 `README.md`, `.gitignore`
3. ✅ 분석 파이프라인 모듈 가이드 본문 (5 pipeline + 3 reference)
   - philosophy / dcf_methods / factor_catalog
   - 01_business / 02_growth / 03_dcf_factors / 04_dcf_compute / 05_report
4. ✅ **Option A scenario model 도입** (commit `cb605d4`)
   - 시나리오 = driver 1개 변동 + 인과(causal) + invariant
   - Method A (revenue_cagr), C (ROE start/terminal), E (metric) 옵션 A 적용
   - Method B는 단순 합산 모델 (kind/value/multiple)
5. ✅ **Time trajectory + Corporate overhead** (commit `cb605d4`)
   - capex_pct_revenue·ebit_margin_baseline → start/end (buildout·early-stage 표현)
   - segment-direct margin + 회사 차원 영구 PV 차감 (`corporate_overhead_pv`)
6. ✅ **Two judgments** — M2가 두 판정 산출 (15%+ + 해자 평생 보유), M5는 직접 매핑
7. ✅ Zod schema 5개 본문 (`packages/shared-types/schemas/*.ts`) — 옵션 A 패턴 반영
8. ✅ ORCL/KKR 시범 검증 — Method A (ORCL CSLS), Method C (KKR Insurance) 작동

**다음 (우선순위 순)**:

9. **M4 Python 엔진 구현** (`ai/pipelines/analysis/module_4_dcf.py`)
   - 가이드 04_dcf_compute.md §5 알고리즘 그대로 구현
   - Method A (FCF DCF) 구현 + Method B/C/D/E stub (NotImplementedError)
   - 입력 검증 (terminal_g·start/end 등) + corporate_overhead_pv 차감
   - 시범 단계는 ORCL 폴더에 일회용 compute_dcf.py 작성 — 정식 모듈로 이전

10. **pnpm workspace setup**
    - 루트 `package.json`, `pnpm-workspace.yaml`
    - `packages/shared-types/package.json` + `tsconfig.json` (zod 의존성)
    - `tsc --noEmit` 검증 가능하게

11. **Supabase 마이그레이션 `0001_init.sql`** — §5 데이터 모델 적용
    - profiles, tickers, ticker_segments, prices_daily, sp500_daily
    - guide_versions, analyses, analysis_business/growth/dcf_factors/dcf_results/report
    - scenarios, earnings_events, thesis_checkpoints, portfolios·holdings·simulations
    - news_items·news_impact, notifications, subscriptions

12. **AI 모듈 1·2·3·5 파이썬 구현 + 오케스트레이션** (`ai/pipelines/analysis/`)
    - 가이드 캐싱 (Anthropic prompt caching)
    - 모듈별 입력 검증 + 출력 zod schema 검증
    - DAG 오케스트레이션 (M1 → M2 → M3 → M4 → M5)

13. **다른 도메인 가이드** (MVP 후 확장)
    - `guides/scenario/` — 사용자 시나리오 합성
    - `guides/earnings/` — 분기 실적 정합성 검증 + 분기 업데이트 워크플로우
    - `guides/news_impact/` — 뉴스 영향 평가

**시범 단계 한계 (운영 단계 해결)**:
- 외부 데이터 자동 조회 (Beta·재무제표·EDGAR) — 작성일 시점 정확도
- M4 Python 엔진 자동 실행 (현재는 폴더별 일회용)
- Schema vs 가이드 자동 동기화 (현재는 수동)
