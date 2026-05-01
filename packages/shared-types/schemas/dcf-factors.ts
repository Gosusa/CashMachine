// DCF Factors — 모듈 3 출력
// AI가 정성 결론을 결정적 계산 가능한 정량값으로 변환
// 이 스키마가 모듈 4(Python 코드 엔진)의 입력 계약

import { z } from 'zod';

export const DcfMethodSchema = z.enum([
  'A_FCF',           // Standard FCF DCF
  'B_SOTP',          // Sum of the Parts
  'C_ExcessReturns', // Excess Returns / DDM (금융기관)
  'D_NAV',           // Net Asset Value
  'E_ForwardMultiple', // 보조용
]);

// TODO: 방법별 Factor 스키마를 더 엄격히 정의.
// MVP에선 일단 z.record로 유연하게 받음. 모듈 4 구현 시 방법별 스키마로 좁힘.
export const ScenarioFactorsSchema = z.record(z.string(), z.unknown());

export const SegmentDcfFactorsSchema = z.object({
  segmentId: z.string(),
  dcfMethod: DcfMethodSchema,
  factors: z.object({
    bear: ScenarioFactorsSchema,
    base: ScenarioFactorsSchema,
    bull: ScenarioFactorsSchema,
  }),
  // 산정 근거 — growth.json의 어느 항목에서 왔는지 추적
  rationale: z.object({
    bear: z.string(),
    base: z.string(),
    bull: z.string(),
  }).optional(),
});

export const DcfFactorsSchema = z.object({
  ticker: z.string(),
  analysisDate: z.string(),
  guideVersionId: z.string(),
  basedOnGrowthAnalysisId: z.string(),

  // 회사 공통 입력
  currentPrice: z.number(),
  sharesDiluted: z.number(),
  netDebt: z.number(),
  taxRate: z.number(),
  riskFreeRate10Y: z.number(), // 작성일 시점 10Y Treasury

  segments: z.array(SegmentDcfFactorsSchema),
});

export type DcfFactors = z.infer<typeof DcfFactorsSchema>;
export type SegmentDcfFactors = z.infer<typeof SegmentDcfFactorsSchema>;
export type DcfMethod = z.infer<typeof DcfMethodSchema>;
