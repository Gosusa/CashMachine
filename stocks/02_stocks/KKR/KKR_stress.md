# KKR — 스트레스 테스트

> 매크로·구조적 취약점에 대한 시나리오 테스트. **Revaluation에 반영하지 않는다** — Report 말미 참고용.
> 초기 생성: 2026-04-16 (Claude). 사용자가 자유롭게 시나리오를 추가·확장.

---

## 1. 금리 인하 사이클 심화 — Global Atlantic 스프레드 압축

**가정**: Fed 2026~2027 구간 공격적 인하 (누적 -200bp). 10Y Treasury 3%대 복귀. GA FIA 재투자 수익률 < 기존 부채 비용 역전 구간 발생.

**재무/밸류에이션 충격**:
- GA 순투자스프레드 ~150bps → 80~100bps로 압축 (1% 하락 시 첫 3년 50bps 압축 추정)
- Insurance 세그먼트 OE -25~35% → 전사 OE -5~8%
- 자산 $219B × 스프레드 50bp 축소 = 연 ~$1.1B 이익 증발
- SOTP Insurance 부문 가치 -30% → 전사 $10~15/주 하방

**버티는 근거**:
- GA 자산 ~70%가 floating/5년 이내 재가격 → ALM 매칭 작동
- KKR 자산운용보수 수취는 스프레드와 독립 → 이중 포착 구조의 절반은 보존
- Asset Management·Strategic Holdings는 금리 인하 시 오히려 수혜 (PE 엑싯·밸류에이션 상승)

**취약 근거**: 시장은 KKR을 "Insurance 포함 spread 비즈니스"로 단순화 평가 → 스프레드 축소 뉴스는 주가에 과잉 반영됨 (이미 2026-04 주가 -34% 폭락에서 선반영 조짐)

**관찰 지표**: GA 순투자스프레드 130bps 미만 2Q 연속, 10Y Treasury vs FIA 재투자 yield 역전, GA 신규 FIA 판매량 YoY

**실현가능성**: 35% — 2026~2027 Fed 인하 사이클 진입 가능성 base case 인접. 단 -200bp 누적까지 가는 시나리오는 경기침체 동반 필요
**Bear DCF 반영 시**: SOTP 충격 -10%(주가 환산) × 35% = **Bear에 -3.5%pt 기여**

---

## 2. PE 엑싯 시장 장기 침체 — Carry 실현 지연 장기화

**가정**: IPO·M&A 시장 2026~2028 3년 연속 침체. LP 분배(DPI) 지연으로 Realized Performance Income이 2023~2025 수준의 50% 이하에서 정체. Carry 클로백 추가 발생.

**재무/밸류에이션 충격**:
- 연간 Realized Carry $1.5~2B → $0.5~0.8B로 감소
- ANI 대비 Carry 비중 15% → 5%로 하락
- 2028년 FY OE/주 성장 정체 → 컨센서스 EPS 10%+ 하향
- Carry 부문 SOTP 가치 50% 감액 → 전사 -8~12% 밸류 영향

**버티는 근거**:
- FRE (관리보수)는 AUM·락업 구조상 안정 → ~$4.17/주 OE의 70%+ 방어
- Carry 지연은 소멸이 아닌 이연 — Unrealized carry $6B+ 누적 → 엑싯 시장 회복 시 일시 폭증
- Strategic Holdings OE는 운영이익 기반으로 엑싯 사이클과 독립

**취약 근거**: 시장이 Carry를 "반복적 이익"으로 가정하고 밸류에이션. 지연 장기화는 고품질 이익 비중 재평가로 이어짐. 2026-04 주가 하락의 본질적 원인

**관찰 지표**: 분기 Net Realized Performance Income $300M 미달 4Q 연속, Unrealized carry balance 추이, 미국 IPO 발행건수 YoY, PE 펀드 DPI 중앙값 (Preqin)

**실현가능성**: 40% — 이미 2024~2025 일부 현실화 중. 2026-04 주가 -34% 폭락이 본질적 신호 → 3년 연속 침체는 base case에 가까움
**Bear DCF 반영 시**: 주가 충격 -10% × 40% = **Bear에 -4.0%pt 기여**

---

## 3. K-Series Redemption Gate 발동

**가정**: 2022~2023 BREIT 사례 재현 — 시장 스트레스 + 리테일 심리 악화로 K-Series 분기 redemption rate 5%+ 초과, gate 작동.

**재무/밸류에이션 충격**:
- K-Series AUM $34B → 12~18개월 내 $20~25B로 감소
- 신규 모집 둔화 12~18개월 지속 → FPAUM 성장률 -3~5%p
- 평판 훼손이 다른 semi-liquid 상품 모집에도 파급
- 연 FRE 성장 9% → 4~5%로 감속, 주가 멀티플 -15%

**버티는 근거**:
- BREIT 사례: gate 걸려도 thesis 자체는 파괴되지 않고 최종 회복
- K-Series는 전체 FPAUM의 ~6%, 총 AUM의 4.6% → 정량적 영향 제한
- 영구자본 51% 기반은 훼손되지 않음

**취약 근거**: "리테일 wealth 채널 성장"이 2025~2030 내러티브 핵심 → gate 뉴스는 narrative 훼손으로 밸류에이션 재평가 유발. 경쟁사(Blackstone, Apollo) 대비 상대적 피해 가능성

**관찰 지표**: 분기 K-Series redemption rate 공시 (5%+/Q 경고, 10%+/Q 위기), BREIT·SREIT 등 경쟁 상품 redemption 추이, 리테일 wealth advisor 채널 신규 유입

**실현가능성**: 15% — BREIT 사례 학습 후 KKR이 K-Series 유동성 설계를 보수적으로 가져감. 단 시나리오 5(크레딧 경색)와 동조 발동 가능성 잔존
**Bear DCF 반영 시**: 주가 충격 -15% × 15% = **Bear에 -2.25%pt 기여**

---

## 4. OECD Pillar Two + SEC Private Fund Rules 중첩 규제

**가정**: Pillar Two (15% 글로벌 최저세) 2027 완전 시행 + SEC Private Fund Adviser Rules 강화 (Side letter·Preferential treatment 금지 확대) + EU AIFMD III 동시 진행.

**재무/밸류에이션 충격**:
- 실효세율 22~23% → 26~28% (버뮤다·케이맨 구조 efficiency 감소)
- 세후이익 -4~6% 지속
- Preferential treatment 제한 → 대형 LP와의 관계 우위 희석 → 신규 모집 경쟁 격화, FRE bps 평균 -5~10bp
- Compliance 비용 연 $100~200M 증가

**버티는 근거**:
- 대형 운용사(KKR, Blackstone, Apollo)는 compliance 인프라 규모의 경제로 후발주자보다 유리 → 상대적 해자 강화
- 규제 변화는 2~3년 선반영되어 급격한 충격보다 점진적

**취약 근거**: 대체투자 업계 전반의 세후 이익률 절대 수준 축소는 multi-year de-rating 요인

**관찰 지표**: KKR 연간 실효세율 추이 (>25% 구조화), SEC 집행 제소·합의 사례, Pillar Two 적용 범위 확정 공시, EU AIFMD III 진행 상황

**실현가능성**: 50% — Pillar Two 시행은 거의 확정. 다만 충격 강도(실효세율 상승폭)는 KKR 구조 최적화로 일부 완화 가능
**Bear DCF 반영 시**: 주가 충격 -5% × 50% = **Bear에 -2.5%pt 기여**

---

## 5. 크레딧 스프레드 급확대 — HY OAS 700bp+

**가정**: 글로벌 신용 경색 (2008·2020급). HY OAS 500bp 관리 가능 → 700~900bp로 급등. PE 포트폴리오 companies 디폴트 우려 확대.

**재무/밸류에이션 충격**:
- KKR Credit 포트폴리오 mark-to-market 충격 → 단기 unrealized loss $2~4B 가능
- PE 포트폴리오 밸류에이션 감액 → NAV -15~25%
- 엑싯 사실상 중단 → Carry 실현 18~24개월 정지
- KKR 본사 자체 부채 refinancing 스프레드 확대 → 자본비용 +150~200bp
- 주가 -30~45% 가능 (과거 2020년 3월 2주간 -50% 경험)

**버티는 근거**:
- KKR 신용등급 A 유지 (2025), Debt/Adj EBITDA ~2.0x로 관리 가능 범위
- 위기는 역사적으로 PE의 **신규 투자 기회** — dry powder $60B+는 저가 매수 화력 (2008·2020 이후 top-quartile IRR 기록)
- 영구자본 51% 구조는 LP redemption 압박 없음 → 위기 때 가장 큰 구조적 우위

**취약 근거**: 단기 1~2년 주가·이익 변동성 극단. GA 포트폴리오 duration 매칭 일부 균열 시 자본 재투입 필요성 발생 가능

**관찰 지표**: HY OAS 600bp+ 돌파, KKR 신용등급 Negative outlook 변경, GA RBC ratio 하락, 주요 PE 포트폴리오 company 디폴트·감액 공시

**실현가능성**: 10% — 2008·2020급 tail event. 단 발동 시 충격 강도 가장 큼
**Bear DCF 반영 시**: 주가 충격 -37.5% × 10% = **Bear에 -3.75%pt 기여**

---

## Bear DCF 시뮬레이션 합산 (참고용, Reval 미반영)

| #   | 시나리오                  | 충격(주가)   | 실현가능성 | Bear 기여 |
|-----|------------------------|----------|--------|---------|
| 1   | 금리 인하 GA 스프레드 압축    | -10%     | 35%    | -3.50%pt |
| 2   | PE 엑싯 시장 장기 침체       | -10%     | 40%    | -4.00%pt |
| 3   | K-Series Redemption Gate | -15%   | 15%    | -2.25%pt |
| 4   | OECD Pillar Two + SEC 규제 | -5%   | 50%    | -2.50%pt |
| 5   | 크레딧 스프레드 급확대 (tail) | -37.5%   | 10%    | -3.75%pt |
| **합계** |                    |          |        | **-16.0%pt** |

**해석**: 시나리오 1·2·5는 매크로/신용 사이클 동조성 강함 → 단순 합산 -16%pt를 결합 시 -10~12%pt가 현실적. 이미 2026-04 주가 -34% 급락이 시나리오 1·2를 부분 선반영.

### Bear → Stress 반영 시 비교

Revaluation 기준값: **Bear $78 / Extreme Bear $47** (Reval `KKR_revaluation.md` L113~114)

| 케이스 | Bear 가격 |
|------|---------|
| 원본 Bear (Reval) | **$78** |
| Stress 단순합산 (-16.0%) 반영 | **$66** (Extreme Bear $47 대비 +40% 위) |
| Stress 동조성 보정 (-11%) 반영 | **$69** |
| Extreme Bear (Reval) | $47 |

**시사점**: Stress 누적해도 Bear가 Extreme Bear까지 가지 않음. 영구자본 51% + dry powder $60B+ 구조가 stress 누적의 자연 floor. 단 Extreme Bear $47 자체가 현재가 대비 -49%로 깊어 Bear-EB 거리($31) 자체는 절대값으로는 작음 → tail risk 발동 시 진폭 큼.

**Reval 가중평균에는 반영하지 않음.**
