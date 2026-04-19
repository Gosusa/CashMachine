# AMD — 스트레스 테스트

> **목적**: Base DCF 시나리오(Extreme Bear~Bull)로 포착 어려운 **외생 충격·꼬리 위험**을 별도 트랙에서 점검.
>
> **주의**: Revaluation 가중평균에 반영하지 않는다. "만약 이 충격이 현실화된다면 Bear가 얼마나 더 깊어지는가"를 점검하는 참고 시뮬레이션.

참조: [AMD_base.md](AMD_base.md) Base(FY28 $278 / PV $205) / Bear(FY28 $109 / PV $80) / Extreme Bear(FY28 $26 / PV $19) 목표가 기준. 현재가 $277.11.

---

## 1. TSMC 대만 공급망 쇼크 (지정학)

**가정**:
- 대만해협 긴장 고조 — 군사 봉쇄 혹은 대만 경제 봉쇄로 TSMC 2nm/3nm CoWoS capacity 6~12개월 차질
- AMD Instinct MI350/MI400 양산 50%+ 감축, EPYC Venice(2nm) 지연
- Samsung Foundry 대체 가능성은 수율·CoWoS 미보유로 제한 (AMD는 NVDA보다 Samsung 이력 부족)

**재무/밸류에이션 충격**:
- FY27 매출 $50B → $32B (-36%)
- GM 52% 유지되나 매출 절대 하락 + 고정비 흡수 악화 → Op Margin 22% → 12%
- Forward PE 35x → 13x 멀티플 압축 (지정학 디스카운트 + 순이익 훼손 이중 타격)
- **주가 충격: -55%** (Bear FY28 $109 → $49, PV $80 → $36)

**버티는 근거**:
- AMD는 자산경량(팹리스) — 생산 차질은 TSMC 리스크, AMD 대차대조표 직접 타격 없음
- OpenAI 계약은 멀티제너레이션 장기 — 공급 회복 시 delayed demand 이연
- 대만 밖 Samsung 2nm, Intel 18A 옵션 장기적으로 존재 (2~3년 리드타임)

**취약 근거**:
- TSMC CoWoS/HBM4 패키징은 단기 대체 불가 (NVDA와 동일 공급망 의존)
- AMD는 NVDA 대비 시장 2위라 공급 부족 시 고객(MSFT/Meta/OpenAI)이 NVDA 우선 배정을 요구할 가능성
- EPYC Venice 지연 시 Intel 18A Xeon이 반격 기회 획득 — 서버 CPU 점유 재역전 리스크

**관찰 지표**:
- 대만-중국 군사 긴장 지수 (CBAS, CFR 모니터링)
- TSMC 월간 CoWoS 공급 capacity 업데이트 (AMD는 NVDA 다음 순위 우선권)
- 미국 정부 대만 정책 발언 강도

**실현가능성**: **8%** — 단기(3년 내) 실제 봉쇄는 낮으나 Tail risk. NVDA와 동일 확률
**Bear DCF 반영 시 기여**: -55% × 8% = **-4.4%pt** Bear 추가 할인

---

## 2. ROCm parity 실패 → CUDA 락인 영속화 (AMD 구조적)

**가정**:
- AMD ROCm 7.0/8.0이 PyTorch·JAX·vLLM 호환성 달성해도 실무 성능(throughput/$, inference latency)이 CUDA 대비 20~30% 열세 지속
- OpenAI 6GW 첫 1GW 배치 시 실제 training/inference 효율이 기대 대비 하락 → 6GW 전량 이행 지연 혹은 축소
- 하이퍼스케일러(MSFT/Meta/AWS/GOOG)가 Instinct를 인퍼런스 전용으로 한정 배치, 학습은 NVDA 단독 유지
- AMD 점유율 확장 경로 차단: 5~8% → 10% 상한 (mgmt Bull 가정 12~15% 달성 실패)

**재무/밸류에이션 충격**:
- Data Center 매출 CAGR 가이던스 +60% → +20% (MI350/450 단가·물량 동반 하락)
- FY28 Data Center 매출 $51B(Base) → $27B, 매출 $74B → $48B
- Op Margin 26% → 18% (규모 불경제 + 가격 할인)
- Forward PE 28x → 16x (AI 2위 프리미엄 축소)
- **주가 충격: -50%** (Bear FY28 $109 → $55, PV $80 → $40)

**버티는 근거**:
- EPYC 서버 CPU와 Embedded(Xilinx)는 ROCm과 무관 — 매출 40%+는 영향 없음
- 인퍼런스 TCO(total cost of ownership) 경쟁력은 유지 — 완전한 NVDA 독점은 방지
- Pensando DPU, Helios rack 등 rack-scale 차별화가 일부 고객 확보 유지

**취약 근거**:
- AMD의 Bull 내러티브는 "AI GPU 2위 머천트 공급자"에 대부분 의존 — ROCm parity는 모든 프리미엄의 전제
- OpenAI 6GW는 NVDA 단독 의존 회피 수요가 근거 — 실무 성능 격차 지속 시 계약 구속력 약화 리스크
- NVDA는 CUDA 생태계에 연 $50B+ 투자(개발자·라이브러리) → AMD ROCm은 구조적 후발주자

**관찰 지표**:
- AMD MLPerf Training/Inference 벤치마크 (2026-04 분기별)
- OpenAI 공개 자료상 MI450 vs B200/Rubin 성능 비교
- PyTorch 2.8+/vLLM 릴리즈 노트상 ROCm 기능 parity 여부
- 하이퍼스케일러 AMD vs NVDA Capex 배분 공개 (MSFT/Meta IR)
- AMD Data Center Q2/Q3'26 YoY 성장률 <30% 시 warning

**실현가능성**: **30%** — ROCm이 지난 3년간 PyTorch 공식 지원 등 진전 있었으나 여전히 실성능 격차 존재. AMD-specific 구조적 리스크로 가장 높은 확률 배정
**Bear DCF 반영 시 기여**: -50% × 30% = **-15.0%pt** Bear 추가 할인 (최대 기여 시나리오)

---

## 3. OpenAI 6GW 계약 축소/취소 (single-customer concentration)

**가정**:
- OpenAI 재무 악화 (연 $50B+ 손실 상태로 2025 추산) — 외부 투자 유치 실패 혹은 사업 모델 위기로 AI Capex 50% 축소
- 6GW 멀티제너레이션 계약 중 첫 1GW(2H'26) 이후 잔여 5GW 이행 연기 혹은 취소
- 잠재 $90B 하드웨어 매출의 20~30%만 실현 (AMD 측 시나리오상 Bull 전제 핵심 부분 훼손)
- AI 프론티어 랩(Anthropic, xAI, Google DeepMind) 유사 사태 파급 가능성

**재무/밸류에이션 충격**:
- Data Center FY27~28 누적 매출 약 -$25~35B 차감
- FY28 Data Center $51B(Base) → $38B, 매출 $74B → $59B
- Op Margin 26% → 22% (규모 축소 및 일회성 비용)
- OpenAI Warrant 미행사 확정 → 주식수 1.68B 유지 (주당 EPS 희석 리스크는 해소, 그러나 주가 하락이 더 큼)
- Forward PE 28x → 20x (성장 스토리 훼손)
- **주가 충격: -40%** (Bear FY28 $109 → $65, PV $80 → $48)

**버티는 근거**:
- OpenAI 이탈 고객이 MSFT/Meta/Anthropic 등 타 고객으로 일부 이전 (GPU 수요 자체는 존재)
- AMD 고객 분산: 8/10 Top AI 기업 Instinct 사용 — OpenAI 단일 의존 아님
- 계약 취소 시 마일스톤 미달성으로 OpenAI Warrant(160M 주) 미행사 확정, EPS 희석 방지
- EPYC·Xilinx 매출은 영향 없음

**취약 근거**:
- OpenAI 6GW 계약은 AMD가 2025-10 발표 이후 주가 폭등의 직접 원인 — 취소 시 1년 랠리 되돌림
- 6GW 규모(= AMD FY25 매출 $34.6B의 ~2.6x) 단일 딜은 AMD 역사상 최대 계약 — 재현 불가
- 잠재 $90B 하드웨어 매출이 Bull 시나리오 EPS $14.59의 핵심 — 축소 시 Bull 경로 완전 소멸

**관찰 지표**:
- OpenAI 신규 투자 라운드 (2026~2027, Softbank·Microsoft 추가 투자 여부)
- OpenAI 분기별 revenue run rate 공개 수치 (2025 말 $11.6B → 2026 $20B 이상 필요)
- AMD Data Center Q3/Q4'26 첫 1GW 배치 매출 인식 확인 ($2~3B 수준 예상)
- Microsoft Azure OpenAI 비중 공시 (Azure 성장률 둔화 시 선행 시그널)

**실현가능성**: **20%** — OpenAI 재무 리스크는 실재하나, Microsoft/Softbank 등 구원 투자자 있음. 완전 취소보다 축소 가능성이 더 현실적이나 둘 다 동일 카테고리로 취급
**Bear DCF 반영 시 기여**: -40% × 20% = **-8.0%pt** Bear 추가 할인

---

## 4. NVDA Rubin + 공격적 가격 전환 (경쟁 구도 변화)

**가정**:
- NVDA Rubin(2026-2H)이 MI450 대비 2x+ 성능 리드 (메모리·interconnect·CUDA 최적화 복합)
- NVDA GM 75% → 65% 수용 대신 가격 -25% 인하로 AMD 진입 차단 (JP Morgan/Qualcomm 대응 과거 패턴)
- AMD는 가격 유지 시 점유율 침식, 가격 대응 시 GM 크러시 (GM 52% → 42%)
- AI 가속기 머천트 시장 AMD 점유 5~8% → 3~5%로 후퇴

**재무/밸류에이션 충격**:
- AMD는 선택의 딜레마 — 가격 방어 시 Data Center 매출 -30%, GM 방어 시 -40%
- FY28 매출 $74B(Base) → $52B, Op Margin 26% → 15%
- Non-GAAP EPS $9.94 → $4.20 (-58%)
- Forward PE 28x → 14x (2위 프리미엄 소멸, Intel처럼 할인 멀티플)
- **주가 충격: -60%** (Bear FY28 $109 → $44, PV $80 → $32)

**버티는 근거**:
- OpenAI 6GW 계약은 multi-year 장기 — 단기 가격 전쟁에서도 물량 보장
- EPYC 서버 CPU는 NVDA와 경쟁 영역 아님 (Intel 대상) — 매출 다각화 완충
- NVDA가 자체 GM -10%pt 수용 유인 제한적 — NVDA 주가도 동시 타격이므로 지속 어려움
- AMD Helios rack-scale 통합 가치는 가격으로 대체 불가 (고객 statement)

**취약 근거**:
- AMD는 자본여력(cash $5.7B) 대비 NVDA($56B) 1/10 — 장기 가격 전쟁 여력 열세
- AMD의 수익성 회복은 Data Center AI GPU 규모 확장 전제 — 점유 후퇴 시 구조적 훼손
- AMD Client/Gaming/Embedded는 성장 동력 아님 — Data Center 의존도 높음

**관찰 지표**:
- NVDA Rubin 실제 성능 벤치마크 (MLPerf 2026-Q4~2027)
- AMD vs NVDA Data Center 분기별 매출 추이 (AMD 분기 성장률 NVDA 대비 격차 확대 시 경고)
- 하이퍼스케일러 capex mix (NVDA vs AMD 배분 공개)
- AMD Data Center GM 공개 (62%~64% 수준 → 55% 이하 하락 시 경쟁 악화)
- NVDA 가격 인하 공지 혹은 H200/B200 ASP 하락 기조

**실현가능성**: **15%** — Rubin 2x 리드 가능성 존재하나 NVDA가 GM 희생한 가격 전쟁 개시할 유인은 제한적. 중간 시나리오
**Bear DCF 반영 시 기여**: -60% × 15% = **-9.0%pt** Bear 추가 할인

---

## 5. AI Capex Bubble Burst — AMD 고베타 노출 (Telecom 2000 유사)

**가정**:
- 2027~2028 사이 AI ROI 압박 심화 — 하이퍼스케일러 Capex $500B+ 대비 AI 매출화 $100B 미달
- MSFT/GOOG/META 3사 Capex 가이던스 -30~40% 축소 (시장은 이를 "AI 수요 둔화" 신호로 해석)
- AI 가속기 수요 공급 과잉 → AMD Instinct 단가 -20%, 물량 -15% 동시 발생
- Cisco 2000~2002 유사 멀티플 압축 (Forward PE 35x → 12x, -65%)
- AMD는 NVDA보다 beta 높음 — 2위 프리미엄 소멸 + 성장 스토리 훼손의 이중 압박

**재무/밸류에이션 충격**:
- FY28 매출 $74B → $55B (-25%), Data Center $51B → $35B
- Op Margin 26% → 18%, EPS $9.94 → $5.80
- Forward PE 28x → 10x (Cisco 2002 수준)
- **주가 충격: -70%** (Bear FY28 $109 → $33, PV $80 → $24). Extreme Bear 수준 근접

**버티는 근거**:
- AMD Client/Gaming/Embedded는 AI Capex와 무관 — 매출 40%+ 방어선
- 수요 축소는 2~3년 사이클로 복구 가능 (2000~2004 vs 2006 통신 인프라 회복 사례)
- EPYC 서버 CPU는 데이터센터 운영비 절감 수요로 AI 다운사이클에서도 유지
- AMD 자산경량(팹리스) → 고정비 부담 낮음

**취약 근거**:
- AMD의 Forward PE 35x는 AI 고성장 프리미엄 — 사이클 종료 시 멀티플 압축이 NVDA보다 더 큼 (2위 할인 추가)
- 1년 +218% 상승분이 거의 AI 내러티브 — 되돌림 시 -60%+ 가능
- OpenAI Warrant 조건부 희석은 AI 붐이 유지될 때만 유효 — bust 시 구조 자체가 dead
- AMD는 NVDA 대비 현금·FCF 약함 → 사이클 버티기 어려움

**관찰 지표**:
- 하이퍼스케일러 분기별 Capex 가이던스 (MSFT/GOOG/META, 2027~2028 하향 조정)
- AI 매출화 progress (OpenAI ARR, Azure AI revenue, Google Cloud AI revenue)
- Goldman Sachs, Sequoia의 "AI revenue gap" 보고서 업데이트
- NVDA GM 추이 (75% → 65% 이하 하락 시 경고)
- AMD Data Center 분기 성장률 YoY <20% 시 위기 시그널

**실현가능성**: **15%** — 3년 내 실현 가능성. AI ROI 리스크는 모니터링 필요 카테고리. NVDA 대비 동일 확률, 그러나 AMD는 beta가 더 높아 충격도 큼
**Bear DCF 반영 시 기여**: -70% × 15% = **-10.5%pt** Bear 추가 할인

---

## Bear DCF 시뮬레이션 합산

> **주의**: 아래 시뮬레이션은 **참고용**. 실제 Bear 목표가 (FY28 $109, PV $80)는 Base DCF 계산에서 독립적으로 산출된 값. 스트레스 시나리오를 단순 합산하여 Bear를 추가 감액하는 것은 과도한 보수일 수 있음(동조성 고려 필요).

| # | 시나리오 | 주가 충격 | 실현가능성 | Bear DCF 기여(%pt) |
|---|---------|---------|---------|---------|
| 1 | TSMC 대만 쇼크 | -55% | 8% | **-4.4%pt** |
| 2 | ROCm parity 실패 | -50% | 30% | **-15.0%pt** |
| 3 | OpenAI 6GW 축소/취소 | -40% | 20% | **-8.0%pt** |
| 4 | NVDA Rubin + 가격 전쟁 | -60% | 15% | **-9.0%pt** |
| 5 | AI Capex Bubble Burst | -70% | 15% | **-10.5%pt** |
| | **단순 합산** | | | **-46.9%pt** |

**동조성 해석**:
- #2 (ROCm 실패) × #4 (Rubin 리드): **강한 정의 상관** — CUDA 락인 지속의 양 측면. 중복 가능성 50%
- #3 (OpenAI 축소) × #5 (Capex Burst): **강한 정의 상관** — AI ROI 압박의 서로 다른 발현. 중복 가능성 60%
- #1 (TSMC 쇼크): 독립 — 지정학 외생 충격
- #2 × #3 (OpenAI): 약한 상관 — ROCm 실패가 OpenAI 축소 유발 가능 (간접)

- **동조성 보정 합산**: -46.9%pt × 0.55 보정 계수 = **-25.8%pt**

### Bear → Stress 반영 시 비교

참조: [AMD_base.md](AMD_base.md) 8-3 가중평균 내재가치 산출.

```
Base 파일 기준:
  Bear FY28 목표가:       $109
  Bear 현재 내재가치(PV):  $80
  Extreme Bear FY28:      $26 (PV $19)
  현재가:                 $277.11

Stress 단순 합산 적용 시 (FY28 $ 기준):
  Bear $109 × (1 - 0.469) = $58 (PV $43)

Stress 동조성 보정 적용 시 (0.55 계수):
  Bear $109 × (1 - 0.258) = $81 (PV $59)

비교:
  원 Bear:           $109 (PV $80)
  단순 합산 Bear:     $58  (PV $43)  ← Extreme Bear $26에 근접 (중간 영역)
  동조성 보정 Bear:   $81  (PV $59)  ← Bear 대비 -26% 하락
  원 Extreme Bear:   $26  (PV $19)
```

**해석**:
- 스트레스 단순 합산 시 Bear가 $58로 Extreme Bear($26)와 Bear($109) 중간으로 이동. 단순 합산은 동조성 미보정 극단 케이스
- 동조성 보정 시 $81 — Bear가 $109에서 $81로 깊어지는 수준. Bear 확률 30% → 35~40% 재배정 논의 가능
- **AMD는 NVDA 대비 스트레스 노출이 더 큼** — ROCm/OpenAI 단일 종속 리스크가 AMD-specific. NVDA는 동조성 보정 Bear $108로 -18% 하락, AMD는 동조성 보정 Bear $81로 -26% 하락
- **결론**: 현재 Base 가중평균 내재가치 $174도 Bear 30% 가정에서 산출. 스트레스 동조성 보정 반영 시 Bear 확률 상향(30% → 35%) 논의 가능. 이 경우 가중평균은 약 $160 수준으로 추가 하락. 현재가 $277 대비 -42% 할증 상태 → **"비중축소" 판정 강화** 근거

---

## 모니터링 요약 — 사용자 자유 추가 영역

> 아래는 시나리오별 관찰 지표의 **압축 요약**. 사용자가 이후 필요한 시나리오를 추가하거나 기존 지표를 세분화해 기록한다.

**분기별 체크**:
- AMD MLPerf Training/Inference 벤치마크 공개
- AMD Data Center 분기 매출 및 YoY 성장률 (Q2/Q3'26 <30% 시 warning)
- OpenAI ARR 업데이트 (2025 $11.6B → 2026 목표치 달성 여부)
- 하이퍼스케일러 Capex 가이던스 변경 (MSFT/GOOG/META)
- NVDA 분기별 Data Center 매출 vs AMD 격차 추이

**연 1~2회 체크**:
- 대만-중국 긴장도, TSMC 월간 CoWoS capacity
- AMD vs NVDA 시장점유율 (Mercury Research, Omdia)
- OpenAI 신규 투자 라운드 여부
- NVDA Rubin 실성능 공개 (2026-Q4~2027)
- EPYC vs Intel 18A Xeon 점유율 추이

**즉시 트리거 (긴급 재평가)**:
- OpenAI 6GW 공식 취소/축소 발표
- NVDA Rubin 가격 -20%+ 인하 발표
- TSMC 대만 공급 중단 사태
- AMD Data Center 분기 매출 YoY 마이너스 진입
- AMD MI450 양산 공식 지연 6개월+ 발표
