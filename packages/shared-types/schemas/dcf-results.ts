// DCF Results — 모듈 4 출력
// Python 코드 엔진이 결정적으로 계산한 결과
// 같은 DcfFactors 입력은 항상 같은 DcfResults 출력

import { z } from 'zod';

export const ScenarioResultSchema = z.object({
  enterpriseValue: z.number(),
  equityValue: z.number(),       // EV - netDebt + non-operating assets
  pricePerShare: z.number(),
  upsidePct: z.number(),         // (price - currentPrice) / currentPrice
});

export const SegmentDcfResultSchema = z.object({
  segmentId: z.string(),
  dcfMethod: z.string(),
  results: z.object({
    bear: ScenarioResultSchema,
    base: ScenarioResultSchema,
    bull: ScenarioResultSchema,
  }),
});

export const DcfResultsSchema = z.object({
  ticker: z.string(),
  computedAt: z.string(),
  basedOnDcfFactorsId: z.string(),

  segments: z.array(SegmentDcfResultSchema),

  // 회사 종합 (사업부 합산 - Net Debt → 주당)
  companyTotal: z.object({
    bear: ScenarioResultSchema,
    base: ScenarioResultSchema,
    bull: ScenarioResultSchema,
  }),
});

export type DcfResults = z.infer<typeof DcfResultsSchema>;
export type SegmentDcfResult = z.infer<typeof SegmentDcfResultSchema>;
export type ScenarioResult = z.infer<typeof ScenarioResultSchema>;
