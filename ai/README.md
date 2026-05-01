# ai

AI 레이어 — `apps/api`와 `workers/`에서 공용.

```
ai/
├── prompts/        # 시스템 프롬프트 (코드)
├── clients/        # Anthropic 래퍼 (caching, retry, cost log)
├── pipelines/      # analysis/scenario/earnings/news_impact 파이프라인
└── guides_loader.py # DB에서 활성 가이드 버전 로드
```

원칙:
- 가이드는 `guides/` (Git) → `guide_versions` 테이블로 sync
- 모든 AI 결과 행에 `guide_version_id` 기록
- prompt caching 활성화 (가이드가 길어서 효과 큼)
- `cost_usd` 기록
