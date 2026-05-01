# CashMachineArch

주식 분석 SaaS — AI가 가이드 기반으로 종목 분석을 만들고, 사용자가 자기 투자 논리를 얹은 시나리오를 만들어 분기마다 검증하고, 포트폴리오 시뮬레이션과 일일 뉴스 영향 분석까지 제공.

## 구조

| 폴더 | 용도 |
|---|---|
| [`apps/web/`](apps/web/) | Next.js 15 — 사용자 화면 + light API |
| [`apps/api/`](apps/api/) | FastAPI — heavy 작업 (AI, 시뮬레이션, 크롤링) |
| [`apps/mobile/`](apps/mobile/) | (v2) Expo / React Native |
| [`packages/`](packages/) | 공용 SDK·타입·UI |
| [`workers/`](workers/) | 백그라운드 잡 (가격·뉴스·실적·분석·시나리오) |
| [`ai/`](ai/) | AI 레이어 (프롬프트·클라이언트·파이프라인) |
| [`guides/`](guides/) | AI 가이드 마크다운 (Git source of truth) |
| [`infra/`](infra/) | Supabase 마이그레이션, Docker, CI/CD |
| [`docs/`](docs/) | [ARCHITECTURE.md](docs/ARCHITECTURE.md) 등 |

## 시작

(MVP 빌드 진행 중. 첫 작업: 분석 파이프라인 — 가이드 + ticker → AI → DB)

## 결정 락인 / 보류

자세한 내용은 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) 참조.
