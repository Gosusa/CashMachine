// Growth Analysis — 모듈 2 출력
// 모듈 1 사업 결론을 받아 사업부별 성장 시나리오 정성 정립

import { z } from 'zod';

export const ScenarioKindSchema = z.enum(['bear', 'base', 'bull']);

export const SegmentGrowthAnalysisSchema = z.object({
  segmentId: z.string(),
  // TODO: 본문 작성 시 확정. 후보 필드:
  // - growthFactors: [{ factor, evidence, factCheckStatus, verdict }]
  // - longTermScenarios: { bear, base, bull }   // 정성 서술 (정량은 모듈 3)
  // - bearToBullTransitions: [{ bearFactor, resolutionCondition, bullContribution }]
  // - fifteenPctFeasibility: 'YES' | 'CONDITIONAL' | 'NO'
  // - realizationPath: string
  placeholder: z.string().optional(),
});

export const GrowthAnalysisSchema = z.object({
  ticker: z.string(),
  analysisDate: z.string(),
  guideVersionId: z.string(),
  basedOnBusinessAnalysisId: z.string(), // 모듈 1 결과 추적
  segments: z.array(SegmentGrowthAnalysisSchema),
  companyOverall: z.object({
    fifteenPctFeasibility: z.enum(['YES', 'CONDITIONAL', 'NO']).optional(),
    // TODO: 추가 필드
  }),
});

export type GrowthAnalysis = z.infer<typeof GrowthAnalysisSchema>;
export type SegmentGrowthAnalysis = z.infer<typeof SegmentGrowthAnalysisSchema>;
export type ScenarioKind = z.infer<typeof ScenarioKindSchema>;
