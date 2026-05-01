// Segment — 분석·추적 단위. 공시 세그먼트 기준.
// - 공시 세그먼트는 분할 금지 (분기 데이터 출처 없음)
// - 공시 세그먼트는 병합 가능 (현금흐름 본질이 같으면)
// - 단일 보고 회사: isWholeCompany=true, reportedSegmentCodes=[]

import { z } from 'zod';

export const SegmentSchema = z.object({
  id: z.string(), // ticker_segments.id (DB)
  name: z.string(), // 우리가 부르는 이름
  reportedSegmentCodes: z.array(z.string()), // 공시 세그먼트 코드 (병합 시 다수)
  isWholeCompany: z.boolean(),
  // TODO: 추가 필드 결정 — sector, region 등 필요 시
});

export type Segment = z.infer<typeof SegmentSchema>;
