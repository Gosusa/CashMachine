# MU — 스트레스 테스트

> **목적**: Base DCF 시나리오(Extreme Bear~Bull)로 포착 어려운 **외생 충격·꼬리 위험**을 별도 트랙에서 점검.
>
> **주의**: Revaluation 가중평균에 반영하지 않는다. "만약 이 충격이 현실화된다면 Bear가 얼마나 더 깊어지는가"를 점검하는 참고 시뮬레이션.

참조: [MU_base.md](MU_base.md) Base($200) / Bear($77) / Extreme Bear($22) 현재 내재가치 기준 (FY29 목표가 각각 $270 / $105 / $30).

---

## 1. 메모리 사이클 조기 reversion — FY27 정점 후 GM 80% → 30% 급락 (구조적 반복)

**가정**:
- 메모리 history 5번째 사이클 반복 — FY27 GM 정점 후 12~18개월 내 급락 시작
- DRAM/NAND 가격 -50%, 공급 과잉 가속 (CXMT 가속 + 3사 CapEx 동반 확대 부메랑)
- FY28 GM 30% → FY29 마이너스 진입
- HBM 매출 비중 30%로 사이클 충격 일부 완화되나 commodity DRAM 70% 매출이 압도적

**재무/밸류에이션 충격**:
- FY28 EPS $20 → $5 (Base 가정 대비 -75%)
- FY29 EPS $15 → -$3 (적자 진입)
- Forward PE 7.7x → 손실로 PE 무의미, P/B 5x → 1.5x (메모리 trough 평균)
- BV $50/share × 1.5x = **목표가 $75**
- **주가 충격: -83%** ($452 → $75)

**버티는 근거**:
- 미국 정부 CHIPS Act 보조금 ($6B Idaho/NY 팹 지원) — 적자 사이클에서도 정부 지원
- 자사주 매입 가속 (FY26~FY27 호황 EPS로 자본 확보 → trough에서 매입 효과)
- HBM 구조적 수요는 사이클 무관 — AI Capex 지속 시 일부 매출 floor

**취약 근거**:
- Memory history 100% 패턴: FY18·FY22 정점 후 모두 GM 50%+ 압축 + EPS 적자 → "이번에는 다르다"는 매번 틀림
- CapEx FY27 $30B+ 가이던스 = 공급 과잉 가속 신호 (Hynix·Samsung도 동시 확대 중)
- Q4 FY26~Q1 FY27 가격 변곡점 신호 시 시장 반응 즉각 (memory는 후행 지표 없음)

**관찰 지표**:
- DRAMeXchange 월간 DRAM contract price (peak 대비 -10% 이탈 시 reversion 시작)
- Micron 분기 inventory days (정상 100일 → 130일 돌파 시 신호)
- 3사(SK Hynix·Samsung·Micron) CapEx 가이던스 합계 ($90B+ 시 공급 과잉 확정)
- NAND wafer start YoY (+15% 이탈 시 NAND 사이클 반전)

**실현가능성**: **40%** — 메모리 history 100% 반복 패턴. "이번에는 다른가" 입증 안 됨. 단 HBM 비중 확대로 Bear 시나리오는 historical 정점-trough 진폭 대비 완화 가능
**Bear DCF 반영 시 기여**: -83% × 40% = **-33.2%pt** Bear 추가 할인

---

## 2. CXMT 중국 DRAM 자립 가속 + BIS 통제 완화

**가정**:
- CXMT (중국 메모리) DDR5 양산 수율 60%+ 도달 → FY28 글로벌 DRAM 점유 5% → 10%
- 트럼프 행정부 vs 시진핑 무역 deal로 BIS 통제 완화 → CXMT 글로벌 시장 진입
- CXMT 저가 정책 (글로벌 평균가 -20%)으로 DRAM 가격 압박 가속
- MU/SK Hynix/Samsung 3사 oligopoly 가격 결정력 약화

**재무/밸류에이션 충격**:
- FY28~FY29 DRAM ASP -20% (Base 가정 대비)
- Volume +10% 성장이 가격 -20% 상쇄 못해 매출 -10%
- GM 81% 정점 → 50% (가격 압박 + capacity utilization 하락)
- FY28 EPS $20 → $12, FY29 EPS $15 → $8
- Forward PE 7x 적용 → **목표가 $56**
- **주가 충격: -88%** ($452 → $56)

**버티는 근거**:
- CXMT는 DDR4 기준 양산 — DDR5/HBM 격차 5년+ (TSMC/SK Hynix HBM 노드 격차)
- BIS 통제 완화도 EUV 장비 수출 금지는 유지 → CXMT 1z·1α 노드 막힘
- 미국 정부의 CHIPS Act 보조금 강화 가능성 (대중 견제 확대)
- HBM은 SK Hynix·Samsung·Micron 3사 게임 — CXMT 진입 어려움

**취약 근거**:
- CXMT는 정부 보조금 무한 자본 — 손실 감수 후 점유 확대 전략 (LCD·태양광 패턴)
- 글로벌 commodity DRAM 70% 매출은 CXMT 침투 시 가격 결정력 즉시 상실
- Trump 행정부 정책 변동성 — 무역 deal 시 통제 완화 가능
- BIS 통제 우회 (말레이시아·베트남 패키징) 가능성

**관찰 지표**:
- BIS Entity List 분기별 업데이트 (CXMT·YMTC 추가/완화 신호)
- TrendForce CXMT DRAM 점유 분기 보고
- CXMT DDR5 양산 발표 (수율 60%+ 시 변곡점)
- CHIPS Act 추가 보조금 발표 (대중 견제 강화 신호)

**실현가능성**: **22%** — CXMT 가속 + BIS 완화 동시 발생 시. CXMT 단독 진전은 가능성 높으나(40%) BIS 완화 동반은 낮음(30%)
**Bear DCF 반영 시 기여**: -88% × 22% = **-19.4%pt** Bear 추가 할인

---

## 3. NVDA Rubin HBM4 단독 SK Hynix 계약 — Micron 점유 컷오프

**가정**:
- NVDA Rubin GPU (2026~2027 양산) HBM4 발주에서 SK Hynix가 75%+ 단독 확보
- SK Hynix HBM4 12-Hi 양산 우위 (TSV 기술 + Logic die 통합)로 NVDA 우선 공급권
- Micron HBM4 NVDA 점유 5% 이하 (현재 HBM3e 21% 대비 급감)
- Samsung HBM4도 부진 → SK Hynix 1강 체제

**재무/밸류에이션 충격**:
- HBM 매출 FY27 $20B 가이드 → $8B (-60%)
- Total 매출 -10%, GM 81% → 70% (HBM mix 효과 상실)
- FY27 EPS $50 → $35, FY28 EPS $20 → $10, FY29 EPS $15 → $5
- HBM 구조적 성장 thesis 붕괴 → Forward PE 7x → 5x
- **목표가 $25** (FY29 EPS $5 × 5x)
- **주가 충격: -94%** ($452 → $25)

**버티는 근거**:
- HBM4 디자인 인 윈도우는 분산 — NVDA 단일 의존도는 낮음 (AMD MI400, Google TPU v8, AWS Trainium 4 발주)
- Micron HBM4는 12-Hi 양산 일정 NVDA Rubin과 일치 (이미 검증)
- Samsung HBM4 부진 시 NVDA는 dual-source 전략 강요 — Micron 수혜
- HBM 시장 자체가 $50B+ TAM — NVDA 단독 의존 아님

**취약 근거**:
- SK Hynix HBM 우위 격차 확대 추세 (HBM3e 55% → HBM4 70%+ 가능)
- NVDA Jensen은 SK Hynix와 직접 파트너십 (메모리 단일 공급 안전 우선)
- Rubin Ultra 8-die HBM4 스펙 → 성능 차이가 양산 우위 차이로 직결
- Micron HBM4 양산 지연 (Idaho 팹 가동 일정 변동성)

**관찰 지표**:
- TrendForce 분기 HBM 점유 발표 (Micron HBM4 점유 15% 이하 시 신호)
- NVDA Rubin 양산 일정 발표 (SK Hynix 단독 공급 명시 시)
- Micron 분기 컨퍼런스 콜 HBM 점유 가이던스 (downward revision 시)
- Samsung HBM4 NVDA 검증 통과 발표 (실패 시 SK Hynix 1강)

**실현가능성**: **18%** — SK Hynix 우위는 사실이나 NVDA dual-source 전략이 일반적. HBM4 점유 컷오프까지 가는 것은 극단적
**Bear DCF 반영 시 기여**: -94% × 18% = **-16.9%pt** Bear 추가 할인

---

## 4. AI Capex Bubble Burst — 메모리는 NVDA보다 1년 선행 충격

**가정**:
- 2027년 후반 하이퍼스케일러 AI Capex 둔화 신호 → 2028 캐펙스 YoY -25%
- 메모리는 commodity 특성상 NVDA보다 가격·물량 충격 선행 (1~2분기)
- AI Capex 둔화 + commodity DRAM 동반 reversion → 2중 충격
- HBM 매출 -40%, DDR5 가격 -30%, NAND -25%

**재무/밸류에이션 충격**:
- FY28 매출 $50B → $32B, GM 81% → 35%
- Inventory write-down $2~3B (재고자산 평가손실)
- FY28 EPS $20 → $5, FY29 EPS $15 → $0 (적자 진입)
- Forward PE 무의미, P/B 5x → 1.2x → **목표가 $60** (BV $50 × 1.2x)
- **주가 충격: -87%** ($452 → $60)

**버티는 근거**:
- 메모리는 NVDA 대비 sticky margin 부재 — 단 commodity 특성으로 사이클 회복도 빠름 (12~18개월)
- HBM은 AI 수요 둔화에도 고대역폭 수요 영구 — 일부 매출 floor
- 자사주 매입 가속 + CHIPS Act 보조금 → 적자 사이클 자본 보호
- 2023 trough 사례 (FY23 EPS -$4.45) 후 FY26 $58 회복 — 사이클 회복력 입증

**취약 근거**:
- 메모리는 캐펙스 사이클 leveraged play — AI Capex 둔화 시 메모리가 가장 먼저 무너짐 (history 일관)
- 2000년 닷컴 + 2008 금융위기 시 메모리는 매출 -50% 즉시 반응
- $14.6B 부채 (2026 기준) + CapEx FY27 $30B 가이드 → 적자 사이클에서 자본 압박
- 시장 심리 급변 — 메모리는 사이클 반전 인식 즉시 -50% 멀티플 압축

**관찰 지표**:
- NVDA·AMD 분기 매출 가이던스 (downward revision = 메모리 1~2분기 후행 충격)
- 4사 하이퍼스케일러 캐펙스 가이던스 (동반 하향 시 메모리 즉시 충격)
- Memory contract price 일주일 단위 모니터링 (DRAMeXchange)
- DRAM·NAND wafer start YoY (+15% 이탈 시 공급 과잉 신호)

**실현가능성**: **15%** — Cisco/Optical 버블 재현은 가능하나 현재 AI 수요는 더 실질적. 단 메모리는 충격 선행
**Bear DCF 반영 시 기여**: -87% × 15% = **-13.1%pt** Bear 추가 할인

---

## 5. Taiwan/Korea 지정학 리스크 — 메모리 공급망 충격

**가정**:
- 한반도 긴장 고조 (북한 도발 또는 중국 압박) — SK Hynix Icheon·Samsung Pyeongtaek 팹 단기 차질
- 또는 대만 봉쇄 → TSMC HBM 패키징 (CoWoS) 6~12개월 차질 → 전체 HBM 공급 -30%
- Micron Taiwan 팹 (Taichung) 직접 영향 + Idaho 팹 가동 가속 압박
- 단기 메모리 공급 부족 → 가격 급등 (단기 호재) → 12개월 이상 지속 시 수요 파괴 (장기 악재)

**재무/밸류에이션 충격**:
- 단기 (6개월): DRAM 가격 +50% → MU 매출 일시 급등 → 주가 +30%
- 중기 (12~24개월): 수요 파괴 + 공급망 재편 비용 → 매출 -30%, GM 81% → 50%
- FY28~FY29 EPS Base 대비 -40%
- 시장 risk premium 확대 → Forward PE 7x → 5x
- **주가 충격: -50%** ($452 → $226) — 평균 효과 (단기 +30% / 중기 -50% 평균)

**버티는 근거**:
- Micron US 본사 + Idaho 팹 (FY27~FY28 가동) — 미국 내 capacity 보호
- 일본 Hiroshima 팹 (FY26 가동) 분산 — 대만/한국 의존도 낮음
- US 정부 CHIPS Act 보조금 + 정부 안보 보장 직접 지원
- 단기 가격 급등으로 EPS 일시 급증 가능

**취약 근거**:
- HBM 패키징은 TSMC CoWoS 의존 — 대만 봉쇄 시 단기 대체 불가
- SK Hynix·Samsung 차질 시 글로벌 메모리 공급 -50% → 단기 호재이나 수요 파괴
- 글로벌 risk-off 시 메모리 사이클 주식 매도 압력 (cyclical premium 상실)
- Taiwan/Korea 의존도가 메모리 산업 자체 — Micron만의 문제 아님

**관찰 지표**:
- 한반도 긴장 지수 (CSIS, CFR 모니터링)
- 대만-중국 군사 긴장 지수 (CBAS 보고)
- TSMC 월간 CoWoS 공급 capacity 업데이트
- Micron Idaho 팹 가동 진행률 (분기 보고)

**실현가능성**: **10%** — 단기(3년 내) 실제 봉쇄·전쟁은 낮으나 Tail risk로 완전 배제 불가
**Bear DCF 반영 시 기여**: -50% × 10% = **-5.0%pt** Bear 추가 할인

---

## Bear DCF 시뮬레이션 합산

> **주의**: 아래 시뮬레이션은 **참고용**. 실제 Bear 현재 내재가치 $77은 Base DCF 계산에서 독립적으로 산출된 값. 스트레스 시나리오를 단순 합산하여 Bear를 추가 감액하는 것은 과도한 보수일 수 있음(동조성 고려 필요).

| # | 시나리오 | 주가 충격 | 실현가능성 | Bear 기여(%pt) |
|---|---------|---------|---------|---------|
| 1 | 메모리 사이클 조기 reversion | -83% | 40% | -33.2%pt |
| 2 | CXMT 자립 가속 + BIS 완화 | -88% | 22% | -19.4%pt |
| 3 | NVDA Rubin HBM4 SK Hynix 단독 | -94% | 18% | -16.9%pt |
| 4 | AI Capex Bubble Burst | -87% | 15% | -13.1%pt |
| 5 | Taiwan/Korea 지정학 충격 | -50% | 10% | -5.0%pt |
| | **단순 합산** | | | **-87.6%pt** |

**동조성 해석**:
- #1(사이클 reversion) + #4(AI Capex Bust)는 상관성 매우 높음 — Capex 둔화가 사이클 반전의 트리거. 이중 계산 주의
- #1(사이클 reversion) + #2(CXMT)는 상관성 중간 — CXMT 진입이 사이클 깊이 가속
- #3(NVDA HBM4 컷오프) + #1(사이클 reversion)는 부분 독립 — HBM은 사이클 무관 구조적 요인
- #5(지정학)는 대체로 독립 — 단기 호재 + 중기 악재 양면성
- #1은 Base 가정에 부분 반영 (Bear 시나리오 자체가 사이클 reversion 가정) — 추가 합산 시 이중 계산
- **동조성 보정 합산**: -87.6%pt × 0.45 보정 계수 = **-39.4%pt**

### Bear → Stress 반영 시 비교

Base 파일의 Bear 현재 내재가치 $77 (FY29 목표가 $105) 기준:

```
원본 Bear 현재 내재가치:        $77
단순 합산 적용 시:              $77 × (1 - 0.876) = $9.5  (Extreme Bear $22 하회)
동조성 보정 적용 시:            $77 × (1 - 0.394) = $46.7
Base 파일 Extreme Bear:         $22
────────────────────────────────────────
```

**시사점**:
- 스트레스 단순 합산 시 Bear가 $9.5로 Extreme Bear($22)도 크게 하회 — 비현실적 수준
- 동조성 보정 시 $46.7 — Bear($77)와 Extreme Bear($22) 사이로 이동
- Extreme Bear $22는 모든 스트레스 시나리오 동시 발현 + BV floor도 하회한 극단 케이스
- **결론**: Base 가중평균 내재가치 $192는 적절 수준이나, **메모리 사이클 산업 특성상 Bear 확률을 25% → 30~32%로 상향 검토 필요**. 시나리오 #1(사이클 reversion)의 40% 실현가능성이 Base의 Bear 25% 가정과 정합성 차이 — 사용자 thesis 단계에서 재검토 권장
- 단, Bull 시나리오(20%)도 현재 실적 흐름이 강하게 지지하므로 Bull 비중 조정은 신중

---

## 모니터링 요약 — 사용자 자유 추가 영역

이 아래는 사용자가 새로운 매크로·구조적 시나리오를 자유롭게 추가하는 영역입니다.

추가 가능한 시나리오 예시:
- HBM 기술 패러다임 변화 (HBM4E·HBM5 표준 변경 → 점유 재편)
- 인공 합성 광물 / 새로운 메모리 기술 (CXL, MRAM, ReRAM) 상용화 시 DRAM 위치 약화
- Sanjay Mehrotra CEO 승계 리스크 (장기 CEO 은퇴 이벤트)
- US 연방 반독점 조사 (HBM 3사 oligopoly 가격 담합 의혹)
- CHIPS Act 보조금 정치적 변동 (트럼프 행정부 재검토 가능성)
- 환율 충격 — 원화 약세 시 SK Hynix·Samsung 가격 경쟁력 우위 → MU 점유 압박
- ESG·기후 리스크 — 메모리 팹 전력·물 사용량 규제 강화
- 패키징 기술 파괴 (Apple M-series 같은 SoC 통합 메모리 확산 시 DRAM 외주 시장 축소)
