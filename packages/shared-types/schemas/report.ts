// Report — 모듈 5 출력 (사용자 노출 최종 리포트)
// AI가 M1·M2·M3·M4 결과를 종합해 narrative로 정제
// 가이드: guides/analysis/pipeline/05_report.md

import { z } from 'zod';

// ─── enum ────────────────────────────────────────────────────────────────────

export const VerdictSchema = z.enum(['YES', 'CONDITIONAL', 'NO']);

// ─── 헤더 ────────────────────────────────────────────────────────────────────

export const HeaderSchema = z.object({
  company_name: z.string(),
  ticker: z.string(),
  written_date: z.string(), // YYYY-MM-DD
  category: z.string(), // 회사 종합 카테고리 (사업부별 다르면 복합 표기)
});

// ─── TL;DR ───────────────────────────────────────────────────────────────────

export const ScenarioPriceSchema = z.object({
  bear: z.number(),
  base: z.number(),
  bull: z.number(),
});

export const TldrSchema = z.object({
  // 두 판정 (M2 직접 매핑)
  moat_lifelong_holdability: VerdictSchema,
  fifteen_pct_feasibility: VerdictSchema,
  // 판정 근거 (지지·반대 대등)
  judgment_basis: z.string(), // narrative
  // 조건부 유지 조건 (조건부 판정 시)
  conditional_terms: z.string().optional(),
  // DCF 범위
  dcf_range: ScenarioPriceSchema,
  // 핵심 리스크
  key_risk: z.string(),
});

// ─── §1 회사 개요 ────────────────────────────────────────────────────────────

export const SegmentCompositionItemSchema = z.object({
  name: z.string(),
  revenue_pct: z.number(),
  category: z.string(),
});

export const CompanyOverviewSchema = z.object({
  segments: z.array(SegmentCompositionItemSchema),
  identity_paragraph: z.string(),
  current_structural_change: z.string(), // M2 structural_change.changing_pattern + change_drivers narrative
});

// ─── §2 투자 포인트 & 리스크 ────────────────────────────────────────────────

export const InvestmentPointsAndRisksSchema = z.object({
  investment_points: z.string(), // narrative — 왜 자랄 수밖에 없는가 (M1 해자 + M2 8질문 + 복리 엔진)
  risks: z.string(), // narrative — 왜 못 자랄 수 있는가 (M1 vulnerabilities + M2 Bear)
});

// ─── §3 시나리오 & DCF 범위 ────────────────────────────────────────────────

export const ScenarioThesisSchema = z.object({
  thesis: z.string(), // 회사 차원 thesis (핵심 사업부 베이스 + cross-segment 영향)
  key_triggers: z.array(z.string()),
});

export const ScenarioAndDcfRangeSchema = z.object({
  thesis: z.object({
    bear: ScenarioThesisSchema,
    base: ScenarioThesisSchema,
    bull: ScenarioThesisSchema,
  }),
  dcf_range: ScenarioPriceSchema, // company_results.target_price 매핑
  scenario_premise: z.string(), // 시나리오별 핵심 전제 narrative (어느 사업부·method·factor가 시나리오 가른 핵심)
});

// ─── §4 사업부별 결론 ──────────────────────────────────────────────────────

export const SegmentConclusionItemSchema = z.object({
  segment_id: z.string(),
  business_conclusion: z.string(), // 카테고리 + 해자 결론
  dcf_method: z.string(), // method (A/B/C/D/E) + 그 이유
  key_factors: z.string(), // WACC·g·N 등 핵심 변수 + factor_rationale narrative
  scenario_conclusion: z.object({
    bear: z.number(), // segment_value
    base: z.number(),
    bull: z.number(),
  }),
  bucket: z.enum(['operating_ev', 'equity']),
});

export const SegmentConclusionsSchema = z.array(SegmentConclusionItemSchema);

// ─── §5 감지 대시보드 ──────────────────────────────────────────────────────

export const DetectionTriggerSchema = z.object({
  scenario: z.enum(['bear', 'base', 'bull', 'risk']), // bear/base/bull 시나리오 trigger 또는 risk
  trigger: z.string(), // 구체 수치·이벤트
  source: z.string(), // M1 vulnerabilities or M2 quarterly_triggers 출처
});

export const DetectionDashboardSchema = z.array(DetectionTriggerSchema);

// ─── 최상위 (report.json) ──────────────────────────────────────────────────

export const ReportSchema = z.object({
  ticker: z.string(),
  analysis_date: z.string(),
  guide_version_id: z.string(),

  // 입력 추적
  based_on: z.object({
    business_analysis_id: z.string(),
    growth_analysis_id: z.string(),
    dcf_factors_id: z.string(),
    dcf_results_id: z.string(),
  }),

  header: HeaderSchema,
  tldr: TldrSchema,
  company_overview: CompanyOverviewSchema, // §1
  investment_points_and_risks: InvestmentPointsAndRisksSchema, // §2
  scenario_and_dcf_range: ScenarioAndDcfRangeSchema, // §3
  segment_conclusions: SegmentConclusionsSchema, // §4
  detection_dashboard: DetectionDashboardSchema, // §5

  report_md: z.string(), // 사람이 읽는 전체 마크다운 (.md 동일 데이터의 narrative 표현)
});

// ─── types ───────────────────────────────────────────────────────────────────

export type Report = z.infer<typeof ReportSchema>;
export type Verdict = z.infer<typeof VerdictSchema>;
export type Tldr = z.infer<typeof TldrSchema>;
export type ScenarioPrice = z.infer<typeof ScenarioPriceSchema>;
export type SegmentConclusionItem = z.infer<typeof SegmentConclusionItemSchema>;
export type DetectionTrigger = z.infer<typeof DetectionTriggerSchema>;
