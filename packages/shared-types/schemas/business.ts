// Business Analysis — 모듈 1 출력
// AI가 사업 결론을 만든 뒤 이 스키마로 구조화

import { z } from 'zod';
import { SegmentSchema } from './segment';

export const MoatVerdictSchema = z.enum(['established', 'unverified', 'not_a_moat']);

export const SegmentBusinessAnalysisSchema = z.object({
  segment: SegmentSchema,
  // TODO: 본문 작성 시 확정. 후보 필드:
  // - revenueModel: { type, unitEconomics, recurringRevenuePct }
  // - supplyDemand: { demandDrivers, supplyConstraints, pricingPower }
  // - moats: [{ type, evidence, verdict: MoatVerdictSchema }]
  // - competitiveEdge: string[]
  // - strategicBet: string  // 이 사업부는 무엇에 배팅했는가
  // - category: 'Stalwart' | 'FastGrower' | 'Cyclical' | 'SlowGrower' | 'Turnaround' | 'AssetPlay'
  placeholder: z.string().optional(),
});

export const BusinessAnalysisSchema = z.object({
  ticker: z.string(),
  analysisDate: z.string(), // ISO date
  guideVersionId: z.string(), // 가이드 버전 추적
  companySummary: z.string(),
  segments: z.array(SegmentBusinessAnalysisSchema),
  // TODO: 회사 종합 결론 필드
});

export type BusinessAnalysis = z.infer<typeof BusinessAnalysisSchema>;
export type SegmentBusinessAnalysis = z.infer<typeof SegmentBusinessAnalysisSchema>;
export type MoatVerdict = z.infer<typeof MoatVerdictSchema>;
