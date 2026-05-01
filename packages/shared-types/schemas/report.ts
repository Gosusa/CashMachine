// Report — 모듈 5 출력 (사용자 노출 최종 리포트)
// AI가 모듈 1·2·4 결과를 종합해 이익 성장 관점 내러티브로 작성

import { z } from 'zod';

export const VerdictSchema = z.enum(['YES', 'CONDITIONAL', 'NO']);

export const ReportSchema = z.object({
  ticker: z.string(),
  reportDate: z.string(),
  guideVersionId: z.string(),

  // 입력 추적
  basedOn: z.object({
    businessAnalysisId: z.string(),
    growthAnalysisId: z.string(),
    dcfResultsId: z.string(),
  }),

  // 핵심 판정
  verdicts: z.object({
    moatBased: VerdictSchema,        // 해자 기반 장기 보유 가능?
    fifteenPctCagr: VerdictSchema,    // 10년 평균 15%+ 가능?
  }),

  // TODO: 본문 작성 시 확정. 후보 필드:
  // - companyOneliner
  // - earningsGrowthNarrative: { current, drivers, math15pct, moatProtection }
  // - segmentConclusions: [{ segmentId, summary, keyDriver }]
  // - priceRange: { bear, base, bull, currentPrice }
  // - detectionDashboard: [{ trigger, watchValue, threshold }]
  placeholder: z.string().optional(),

  reportMd: z.string(), // 사람이 읽는 전체 마크다운
});

export type Report = z.infer<typeof ReportSchema>;
export type Verdict = z.infer<typeof VerdictSchema>;
