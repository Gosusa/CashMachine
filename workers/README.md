# workers

스케줄·큐 기반 백그라운드 작업.

| 워커 | 트리거 | 하는 일 |
|---|---|---|
| `analysis/` | 사용자 요청 (큐) | 가이드 + ticker → AI → `analyses` 행 |
| `scenario/` | 사용자 요청 (큐) | base + 사용자 thesis → AI → `scenarios` 행 |
| `earnings/` | 실적 발표 감지 | base/시나리오 정합성 검증 → `thesis_checkpoints` |
| `news/` | 매일 09:00 사용자 TZ | 보유 종목 뉴스 크롤 + 영향 평가 |
| `prices/` | 매일 04:00 UTC | 가격 적재 |

큐: MVP는 Postgres `jobs` 테이블 + 폴링.
스케줄러: Supabase pg_cron.
