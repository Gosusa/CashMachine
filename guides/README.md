# guides

AI 가이드 마크다운. **Git이 source of truth** — 배포/수동 트리거로 `guide_versions` 테이블에 sync.

| 폴더 | 용도 | 사용처 |
|---|---|---|
| `analysis/` | base 분석 방법론 (DCF, 철학, 평가 기준 등) | `ai/pipelines/analysis.py` |
| `scenario/` | 사용자 thesis를 base에 합성하는 가이드 | `ai/pipelines/scenario.py` |
| `earnings/` | 분기 실적과 thesis 정합성 검증 가이드 | `ai/pipelines/earnings.py` |
| `news_impact/` | 뉴스의 펀더맨탈 영향 평가 가이드 | `ai/pipelines/news_impact.py` |

수정 시:
1. PR로 가이드 변경
2. 머지 후 sync 워커가 `guide_versions`에 새 행 추가 (version, hash)
3. 이후 AI 호출은 새 버전 사용. 과거 결과는 옛 `guide_version_id`로 보존
