// 분석 파이프라인 모듈 간 데이터 계약
//
// 흐름:
//   ticker → [모듈 1: AI] → BusinessAnalysis
//                          → [모듈 2: AI] → GrowthAnalysis (driver/causal/invariant + 두 판정)
//                                          → [모듈 3: AI] → DcfFactors (Method A·B·C·D·E + corporate_overhead)
//                                                          → [모듈 4: 코드] → DcfResults (corporate_overhead_pv 차감)
//                                                                            → [모듈 5: AI] → Report
//
// 옵션 A 패턴: driver 1개 시나리오별 + invariant + (필요 시) causal
// 가이드: ../../guides/analysis/

export * from './segment';
export * from './business';
export * from './growth';
export * from './dcf-factors';
export * from './dcf-results';
export * from './report';
