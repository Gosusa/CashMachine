// DCF Results — 모듈 4 출력
// Python 코드 엔진이 결정적으로 계산한 결과
// 같은 DcfFactors 입력은 항상 같은 DcfResults 출력
// 가이드: guides/analysis/pipeline/04_dcf_compute.md

import { z } from 'zod';
import { DcfMethodSchema } from './dcf-factors';

// ─── 사업부별 결과 ──────────────────────────────────────────────────────────

export const SegmentValueComponentsSchema = z.record(z.string(), z.unknown());
// method별 PV 분해 (감사용)
// Method A: { pv_fcf, pv_terminal, terminal_method, fcf_per_year? }
// Method B: { sub_segment_breakdowns: [{index, kind, value, multiple?, contribution}] }
// Method C: { bv_y0, pv_excess, pv_terminal, implied_p_b }
// Method D: { total_asset_value, total_debt, preferred, asset_breakdown }
// Method E: { future_value, discount_rate, years_to_normalize }

export const SegmentScenarioResultSchema = z.object({
  segment_value: z.number(), // EV (operating_ev) 또는 Equity (equity)
  components: SegmentValueComponentsSchema,
});

export const BucketSchema = z.enum(['operating_ev', 'equity']);

export const SegmentDcfResultSchema = z.object({
  segment_id: z.string(),
  method: DcfMethodSchema,
  bucket: BucketSchema, // M4가 method에서 산출
  scenarios: z.object({
    bear: SegmentScenarioResultSchema,
    base: SegmentScenarioResultSchema,
    bull: SegmentScenarioResultSchema,
  }),
});

// ─── 회사 종합 (시나리오별) ─────────────────────────────────────────────────

export const CompanyScenarioResultSchema = z.object({
  operating_ev_sum: z.number(), // Σ operating_ev bucket segment_value
  equity_sum: z.number(), // Σ equity bucket segment_value
  net_debt: z.number(),
  minority_interest: z.number(),
  non_operating_assets: z.number(),
  corporate_overhead_pv: z.number(), // corporate_overhead_annual × (1 − tax) / WACC (영구 PV)
  shareholder_value: z.number(), // (op_ev_sum − net_debt − minority + non_op − corp_pv) + equity_sum
  diluted_shares_outstanding: z.number(),
  target_price: z.number(), // shareholder_value / diluted_shares
});

export const CompanyResultsSchema = z.object({
  bear: CompanyScenarioResultSchema,
  base: CompanyScenarioResultSchema,
  bull: CompanyScenarioResultSchema,
});

// ─── 최상위 ──────────────────────────────────────────────────────────────────

export const DcfResultsSchema = z.object({
  ticker: z.string(),
  analysis_date: z.string(),
  guide_version_id: z.string(),
  based_on_factors_id: z.string(), // 모듈 3 결과 FK
  computed_at: z.string(), // ISO datetime

  segments: z.array(SegmentDcfResultSchema),
  company_results: CompanyResultsSchema,
});

// ─── types ───────────────────────────────────────────────────────────────────

export type DcfResults = z.infer<typeof DcfResultsSchema>;
export type SegmentDcfResult = z.infer<typeof SegmentDcfResultSchema>;
export type SegmentScenarioResult = z.infer<typeof SegmentScenarioResultSchema>;
export type CompanyScenarioResult = z.infer<typeof CompanyScenarioResultSchema>;
export type CompanyResults = z.infer<typeof CompanyResultsSchema>;
export type Bucket = z.infer<typeof BucketSchema>;
