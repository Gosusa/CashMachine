// Growth Analysis — 모듈 2 출력
// AI가 사업 구조 변화 분석·시나리오·DCF 환산 핸드오프·두 판정 산출
// 가이드: guides/analysis/pipeline/02_growth.md

import { z } from 'zod';

// ─── enum / 공통 ──────────────────────────────────────────────────────────────

export const ScenarioKindSchema = z.enum(['bear', 'base', 'bull']);
export const VerdictSchema = z.enum(['YES', 'CONDITIONAL', 'NO']);
export const TrendDirectionSchema = z.enum(['accelerating', 'stable', 'decelerating']);
export const StructuralIntensitySchema = z.enum(['light', 'moderate', 'heavy']);
export const StructuralLeverageSchema = z.enum(['strong', 'moderate', 'weak']);
export const ReinvestmentRoicDirectionSchema = z.enum([
  'strengthening',
  'stable',
  'weakening',
]);
export const CompoundEngineVerdictSchema = z.enum(['working', 'weak', 'stalled']);

// ─── 사업 구조 변화 ──────────────────────────────────────────────────────────

export const CompoundEngineSchema = z.object({
  reinvestment_opportunity: z.string(), // narrative + 근거 (TAM·R&D·M&A·신사업)
  reinvestment_roic_vs_wacc: z.enum(['strong', 'moderate', 'weak']), // + 근거 narrative는 detail
  verdict: CompoundEngineVerdictSchema,
});

export const StructuralChangeSchema = z.object({
  changing_pattern: z.string(), // 현재 → 미래 구조
  change_drivers: z.object({
    external: z.string(),
    internal: z.string(),
  }),
  strategic_response: z.string(), // M1 strategic_bet 위에 재해석
  competitive_differentiation: z.string(), // M1 differentiation 위에 변화 영향
  moat_building_potential: z.string(),
  profit_growth_link: z.string(),
  moat_trend_after_change: z.string(), // 'strengthening'|'stable'|'weakening' + 근거 narrative
  compound_engine: CompoundEngineSchema, // 8질문 (재투자 + 복리 성장)
});

// ─── 시나리오 (4축) ──────────────────────────────────────────────────────────

export const QuarterlyTriggerSchema = z.object({
  indicator: z.string(),
  threshold: z.string(),
  direction_when_hit: z.enum(['strengthens', 'weakens']),
});

export const ScenarioSchema = z.object({
  thesis: z.string(),
  necessary_conditions: z.array(z.string()),
  supporting_logic: z.string(),
  justifying_evidence: z.array(z.string()),
  quarterly_triggers: z.array(QuarterlyTriggerSchema),
});

// ─── 현재 위치 ──────────────────────────────────────────────────────────────

export const CurrentPositionSchema = z.object({
  ltm_revenue: z.number(),
  ltm_operating_income: z.number(),
  trend_direction: TrendDirectionSchema,
  guidance_alignment: z.string(),
  scenario_position_qualitative: z.string(),
});

// ─── 옵션 A 핸드오프 ─────────────────────────────────────────────────────────

export const DriverHandoffSchema = z.object({
  type: z.string(), // 사업부 본질 분기점 (자유 string, default 'revenue_cagr')
  bear_anchor: z.string(), // 정성 + 정량 단서
  base_anchor: z.string(),
  bull_anchor: z.string(),
  rationale: z.string(), // 왜 이게 본질 분기점인지
});

export const StructuralInsightsSchema = z.object({
  capital_intensity_direction: z.string(), // StructuralIntensitySchema 값 + narrative
  operating_leverage_direction: z.string(),
  reinvestment_roic_direction: z.string(),
});

export const DcfMethodReviewSchema = z.object({
  inherited_from_m1: z.boolean(),
  revision_suggestion: z.string().nullable(), // revise 권고 시 의견
});

export const ConclusionHandoffSchema = z.object({
  driver: DriverHandoffSchema,
  margin_response: z.string(), // narrative + 정량 단서 (예: "operating leverage 1.5x, baseline 30%")
  capex_response: z.string(), // narrative + 정량 단서 (예: "회사 가이던스 25%, 시나리오 무관")
  structural_insights: StructuralInsightsSchema,
  dcf_method_review: DcfMethodReviewSchema,
});

// ─── 사업부 결론 ────────────────────────────────────────────────────────────

export const SegmentConclusionSchema = z.object({
  fifteen_pct_feasibility: VerdictSchema,
  feasibility_basis: z.string(),
  key_drivers: z.array(z.string()),
  key_risks: z.array(z.string()),
  handoff: ConclusionHandoffSchema,
});

// ─── 사업부별 성장 분석 ──────────────────────────────────────────────────────

export const GrowthElementSchema = z.object({
  name: z.string(),
  source_from_business: z.string(), // 'profit_levers'|'demand_drivers'|'strategic_bet' 등
});

export const SegmentGrowthAnalysisSchema = z.object({
  segment_id: z.string(),

  growth_elements: z.array(GrowthElementSchema), // (a) M1 인수
  structural_change: StructuralChangeSchema, // (b) 8질문

  scenarios: z.object({
    // (c) Bear/Base/Bull 4축
    bear: ScenarioSchema,
    base: ScenarioSchema,
    bull: ScenarioSchema,
  }),

  current_position: CurrentPositionSchema, // (d)
  conclusion: SegmentConclusionSchema, // (e) 핸드오프
});

// ─── 회사 종합 (두 판정 포함) ───────────────────────────────────────────────

export const CompanyOverallGrowthSchema = z.object({
  aggregate_15pct_feasibility: VerdictSchema, // 회사 차원 15%+ 판정 + 근거 (M5 TL;DR 직접 매핑)
  moat_lifelong_holdability: VerdictSchema, // 회사 차원 해자 평생 보유 판정 + 근거 (M5 TL;DR 직접 매핑)
  growth_character_summary: z.string(), // 복리형/사이클형/전환 중/혼합
  cross_segment_drivers: z.array(z.string()),
  cross_segment_risks: z.array(z.string()),
});

// ─── 최상위 ──────────────────────────────────────────────────────────────────

export const GrowthAnalysisSchema = z.object({
  ticker: z.string(),
  analysis_date: z.string(),
  guide_version_id: z.string(),
  based_on_business_analysis_id: z.string(),

  segments: z.array(SegmentGrowthAnalysisSchema),
  company_overall: CompanyOverallGrowthSchema,
});

// ─── types ───────────────────────────────────────────────────────────────────

export type GrowthAnalysis = z.infer<typeof GrowthAnalysisSchema>;
export type SegmentGrowthAnalysis = z.infer<typeof SegmentGrowthAnalysisSchema>;
export type ScenarioKind = z.infer<typeof ScenarioKindSchema>;
export type Verdict = z.infer<typeof VerdictSchema>;
export type DriverHandoff = z.infer<typeof DriverHandoffSchema>;
export type StructuralChange = z.infer<typeof StructuralChangeSchema>;
export type CompanyOverallGrowth = z.infer<typeof CompanyOverallGrowthSchema>;
