// Business Analysis — 모듈 1 출력
// AI가 사업·해자·전략 베팅을 사업부별로 분석한 결과 (정성)
// 가이드: guides/analysis/pipeline/01_business.md

import { z } from 'zod';

// ─── enum / 공통 ──────────────────────────────────────────────────────────────

export const CategorySchema = z.enum([
  'Stalwart',
  'FastGrower',
  'Cyclical',
  'SlowGrower',
  'Turnaround',
  'AssetPlay',
]);

export const MoatTrendSchema = z.enum(['strengthening', 'stable', 'weakening']);

export const TimeHorizonSchema = z.enum([
  'short_1_2y',
  'mid_3_5y',
  'long_5_10y',
  'very_long_10y_plus',
]);

export const DcfMethodCandidateSchema = z.enum([
  'A_FCF',
  'B_SOTP',
  'C_ExcessReturns',
  'D_NAV',
  'E_ForwardMultiple',
]);

// ─── nested 구조 ──────────────────────────────────────────────────────────────

export const RevenueModelSchema = z.object({
  profit_levers: z.array(z.string()), // philosophy 5경로 중 가동 중인 것
  what_sold: z.string(),
  customer_type: z.string(),
  recognition: z.string(), // 매출 인식 방식
  recurring_revenue_pct: z.number().optional(), // 반복 매출 비중
  unit_economics: z.string(), // narrative
});

export const SupplyDemandSchema = z.object({
  demand_drivers: z.array(z.string()),
  supply_constraints: z.array(z.string()),
  pricing_power: z.string(), // narrative + 등급
});

export const MoatItemSchema = z.object({
  lens: z.string(), // philosophy 5렌즈 중 (전환비용·네트워크 효과·규모·브랜드·자본 경량성·장기 지속성)
  claim: z.string(), // 회사 주장
  evidence: z.string(), // 검증 증거
  verdict: z.enum(['established', 'unverified', 'not_a_moat']),
  transition_condition: z.string().optional(), // unverified 시 검증 조건
});

export const MoatErosionSchema = z.object({
  path: z.string(), // 훼손 경로
  current_signals: z.string(),
  estimated_timing: z.string(),
});

export const StrategicBetSchema = z.object({
  what: z.string(),
  why: z.string(),
  aiming_for: z.string(),
  differentiation_vs_competitors: z.string(),
  time_horizon: TimeHorizonSchema,
});

export const GrowthDriverCandidateSchema = z.object({
  name: z.string(),
  description: z.string(),
  source: z.enum(['profit_levers', 'demand_drivers', 'strategic_bet']),
});

export const SegmentConclusionSchema = z.object({
  thesis: z.string(), // 본질 1~2줄
  confirmed_strengths: z.array(z.string()), // 'type:detail' 형식 (예: 'moat_established:전환비용')
  confirmed_vulnerabilities: z.array(z.string()), // 'type:detail' 형식
  handoff: z.object({
    growth_driver_candidates: z.array(GrowthDriverCandidateSchema), // 모듈 2용
    unit_economics_summary: z.string(), // 모듈 3용
  }),
});

// ─── 사업부별 분석 ────────────────────────────────────────────────────────────

export const SegmentBusinessAnalysisSchema = z.object({
  segment_id: z.string(),

  // 카테고리
  category: CategorySchema,
  category_evidence: z.string(),

  // Baseline (절대값 기준)
  fiscal_year: z.string(), // 예: 'FY2025'
  revenue_amount: z.number(), // $M
  revenue_pct: z.number(), // 회사 매출 대비 %
  operating_income_amount: z.number(), // $M
  operating_income_pct: z.number(), // 회사 영업이익 대비 %
  revenue_growth_yoy: z.number(), // 매출 YoY 성장률 %

  // 사업 구조
  revenue_model: RevenueModelSchema,
  supply_demand: SupplyDemandSchema,

  // 해자
  moats: z.array(MoatItemSchema),
  moat_trend: z.string(), // MoatTrendSchema 값 + 근거 narrative
  moat_erosion: z.array(MoatErosionSchema),

  // 차별점·전략
  differentiation_summary: z.string(),
  strategic_bet: StrategicBetSchema,

  // DCF 방법 후보
  dcf_method_candidate: DcfMethodCandidateSchema,
  dcf_method_rationale: z.string(),

  // 결론·핸드오프
  conclusion: SegmentConclusionSchema,
});

// ─── 회사 종합 ────────────────────────────────────────────────────────────────

export const CompanyOverallBusinessSchema = z.object({
  combined_category: z.string(), // 단일 또는 복합 카테고리 (예: 'Stalwart' or 'Stalwart + FastGrower')
  character_summary: z.string(),
});

// ─── 최상위 ──────────────────────────────────────────────────────────────────

export const BusinessAnalysisSchema = z.object({
  ticker: z.string(),
  analysis_date: z.string(), // ISO date
  guide_version_id: z.string(),

  company_summary: z.string(),
  company_overall: CompanyOverallBusinessSchema,

  segments: z.array(SegmentBusinessAnalysisSchema),
});

// ─── types ───────────────────────────────────────────────────────────────────

export type BusinessAnalysis = z.infer<typeof BusinessAnalysisSchema>;
export type SegmentBusinessAnalysis = z.infer<typeof SegmentBusinessAnalysisSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type MoatTrend = z.infer<typeof MoatTrendSchema>;
export type MoatItem = z.infer<typeof MoatItemSchema>;
export type StrategicBet = z.infer<typeof StrategicBetSchema>;
export type DcfMethodCandidate = z.infer<typeof DcfMethodCandidateSchema>;
