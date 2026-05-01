// DCF Factors — 모듈 3 출력
// AI가 정성 결론을 결정적 계산 가능한 정량값으로 변환
// 이 스키마가 모듈 4(Python 코드 엔진)의 입력 계약
// 가이드: guides/analysis/pipeline/03_dcf_factors.md
//        guides/analysis/reference/dcf_methods.md
//        guides/analysis/reference/factor_catalog.md
//
// 옵션 A 패턴: driver 1개 시나리오별 + invariant + (필요 시) causal

import { z } from 'zod';

// ─── enum ────────────────────────────────────────────────────────────────────

export const DcfMethodSchema = z.enum([
  'A_FCF',
  'B_SOTP',
  'C_ExcessReturns',
  'D_NAV',
  'E_ForwardMultiple',
]);

export const TerminalMethodSchema = z.enum(['gordon', 'exit_multiple']);

export const AssetKindSchema = z.enum(['real_estate', 'reserves', 'equity', 'other']);

export const SubSegmentKindSchema = z.enum(['earnings', 'asset']);

export const ForwardMultipleMetricSchema = z.enum(['sales', 'ebitda', 'eps']);

// ─── Method A — Standard FCF DCF ────────────────────────────────────────────

export const FactorsAInvariantSchema = z.object({
  revenue_y0: z.number(),
  fiscal_year: z.string(),
  da_pct_revenue: z.number(),
  nwc_pct_revenue_change: z.number(),
  capex_pct_revenue_start: z.number(), // t=0 비율 (buildout 피크 시 높음)
  capex_pct_revenue_end: z.number(), // t=N 비율 (정상화). 변동 없으면 start = end
  ebit_margin_baseline_start: z.number(), // t=0 segment-direct margin (early-stage 시 낮음/음수). corporate 제외
  ebit_margin_baseline_end: z.number(), // t=N segment-direct margin (정상화). 변동 없으면 start = end
});

export const FactorsADriverScenarioSchema = z.object({
  revenue_cagr: z.number(),
});

export const FactorsACausalSchema = z.object({
  margin_leverage: z.number(), // 매출 cagr delta → t=N 마진 delta 계수. 0이면 fixed baseline
  margin_narrative: z.string(),
  capex_narrative: z.string(),
});

export const FactorsATerminalSchema = z.object({
  method: TerminalMethodSchema,
  terminal_g: z.number().optional(),
  exit_multiple: z.number().optional(),
});

export const FactorsASchema = z.object({
  forecast_years: z.number().int(),
  invariant: FactorsAInvariantSchema,
  driver_scenarios: z.object({
    bear: FactorsADriverScenarioSchema,
    base: FactorsADriverScenarioSchema,
    bull: FactorsADriverScenarioSchema,
  }),
  causal: FactorsACausalSchema,
  terminal: FactorsATerminalSchema,
});

// ─── Method B — SOTP (단순 모델, dcf_methods §3 B 일관) ─────────────────────

// M3가 내부적으로 sub에 옵션 A 적용해 value 산출 후 박음
// M4는 단순 합산 (kind='earnings' → value × multiple, kind='asset' → value)
export const SubSegmentSchema = z.object({
  name: z.string(),
  kind: SubSegmentKindSchema, // 'earnings' | 'asset'
  value: z.number(), // 이익 (세후) 또는 자산 시장가치 (부채 차감 없음)
  multiple: z.number().optional(), // kind='earnings' 시 필수
});

export const FactorsBSchema = z.object({
  sub_segments: z.array(SubSegmentSchema),
});

// ─── Method C — Excess Returns ──────────────────────────────────────────────

export const FactorsCInvariantSchema = z.object({
  bv_y0: z.number(),
  coe: z.number(),
  dividend_payout: z.number(),
});

export const FactorsCDriverScenarioSchema = z.object({
  roe_start: z.number(),
  roe_terminal: z.number(),
});

export const FactorsCSchema = z.object({
  forecast_years: z.number().int(),
  invariant: FactorsCInvariantSchema,
  driver_scenarios: z.object({
    bear: FactorsCDriverScenarioSchema,
    base: FactorsCDriverScenarioSchema,
    bull: FactorsCDriverScenarioSchema,
  }),
  // Method C는 ROE 자체가 driver. causal 생략
  terminal: z.object({
    terminal_g: z.number(),
  }),
});

// ─── Method D — NAV ──────────────────────────────────────────────────────────

export const NavAssetSchema = z.object({
  kind: AssetKindSchema,
  value: z.number(),
  discount: z.number().optional(), // 유동성·세금 할인 (default 0)
});

export const FactorsDSchema = z.object({
  // Default: scenario-invariant. 자산 시장가치 단일값
  assets: z.array(NavAssetSchema),
  total_debt: z.number(),
  preferred: z.number(),
  // 드물게 시나리오 변동 시 driver_scenarios 옵션
  driver_scenarios: z.object({
    bear: z.object({ asset_value_multiplier: z.number() }),
    base: z.object({ asset_value_multiplier: z.number() }),
    bull: z.object({ asset_value_multiplier: z.number() }),
  }).optional(),
});

// ─── Method E — Forward Multiple ────────────────────────────────────────────

export const FactorsEInvariantSchema = z.object({
  metric_name: ForwardMultipleMetricSchema,
  years_to_normalize: z.number().int(),
  discount_rate: z.number(),
  multiple: z.number(), // peer 역사 평균 (시나리오 무관)
});

export const FactorsEDriverScenarioSchema = z.object({
  metric_y_n: z.number(),
});

export const FactorsESchema = z.object({
  invariant: FactorsEInvariantSchema,
  driver_scenarios: z.object({
    bear: FactorsEDriverScenarioSchema,
    base: FactorsEDriverScenarioSchema,
    bull: FactorsEDriverScenarioSchema,
  }),
});

// ─── 사업부별 ────────────────────────────────────────────────────────────────

export const MethodFinalizationSchema = z.object({
  m1_candidate: DcfMethodSchema,
  m2_review: z.enum(['inherited', 'revised']),
  final: DcfMethodSchema,
  rationale: z.string(),
});

export const FactorRationaleSchema = z.object({
  revenue_or_metric_basis: z.string(),
  margin_basis: z.string(),
  capex_basis: z.string(),
  terminal_basis: z.string(),
  wacc_basis: z.string().nullable(), // 사업부 risk 다른 경우만, 없으면 null
});

export const SegmentDcfFactorsSchema = z.object({
  segment_id: z.string(),
  method: DcfMethodSchema,
  method_finalization: MethodFinalizationSchema,
  tax_rate_override: z.number().optional(), // 해외 자회사 등 사업부별 차이 시

  // 방법별 factor — 확정 method 하나만 채워짐
  factors_A: FactorsASchema.optional(),
  factors_B: FactorsBSchema.optional(),
  factors_C: FactorsCSchema.optional(),
  factors_D: FactorsDSchema.optional(),
  factors_E: FactorsESchema.optional(),

  factor_rationale: FactorRationaleSchema,
});

// ─── 회사 단위 factor ────────────────────────────────────────────────────────

export const WaccComponentsSchema = z.object({
  rf: z.number(),
  beta: z.number(),
  equity_risk_premium: z.number(),
  cost_of_debt: z.number(),
  debt_to_equity_weight: z.number(),
});

export const CompanyFactorsSchema = z.object({
  wacc: z.number(),
  wacc_components: WaccComponentsSchema,
  effective_tax_rate: z.number(),
  net_debt: z.number(),
  minority_interest: z.number(),
  non_operating_assets: z.number(),
  corporate_overhead_annual: z.number(), // 회사 차원 corporate cost (segment 배분 X). 0 허용
  diluted_shares_outstanding: z.number(),
});

// ─── 최상위 ──────────────────────────────────────────────────────────────────

export const DcfFactorsSchema = z.object({
  ticker: z.string(),
  analysis_date: z.string(),
  guide_version_id: z.string(),
  based_on_business_analysis_id: z.string(),
  based_on_growth_analysis_id: z.string(),

  company_factors: CompanyFactorsSchema,
  segments: z.array(SegmentDcfFactorsSchema),
});

// ─── types ───────────────────────────────────────────────────────────────────

export type DcfFactors = z.infer<typeof DcfFactorsSchema>;
export type SegmentDcfFactors = z.infer<typeof SegmentDcfFactorsSchema>;
export type DcfMethod = z.infer<typeof DcfMethodSchema>;
export type CompanyFactors = z.infer<typeof CompanyFactorsSchema>;
export type FactorsA = z.infer<typeof FactorsASchema>;
export type FactorsB = z.infer<typeof FactorsBSchema>;
export type FactorsC = z.infer<typeof FactorsCSchema>;
export type FactorsD = z.infer<typeof FactorsDSchema>;
export type FactorsE = z.infer<typeof FactorsESchema>;
