---
ticker: AMD
name: Advanced Micro Devices, Inc.
sector: Semiconductor
analysis_date: 2026-04-19
thesis_summary: AI GPU Second Source + OpenAI 장기 계약으로 점유율 확대
target_price: 174
extreme_bear_price: 26
bear_price: 109
base_price: 278
bull_price: 511
---
# AMD — Advanced Micro Devices, Inc.
> x86 서버·클라이언트 CPU 2위, AI 가속기 머천트 2위 — Data Center(Instinct GPU + EPYC CPU) + Client/Gaming(Ryzen) + Embedded(Xilinx) 4개 세그먼트 구조, NVDA 단독 의존 회피 수요의 유일 대안

---

## 투자 thesis

- **AI GPU Second Source 지위 + OpenAI 6GW 계약 (효율적 규모 + 장기 계약)**: FY25 Data Center 매출 $16.6B(+32% YoY), MI350 양산·MI450 2H'26 출시. OpenAI 6GW 멀티제너레이션 파트너십(2025-10-06, 잠재 하드웨어 매출 $90B) 확보, 첫 1GW 2H'26 배치 → 하이퍼스케일러·프론티어 랩의 NVDA 단독 의존 회피 수요가 AMD에 구조적으로 유입
- **x86 서버 CPU 점유율 급성장 (원가·성능 우위)**: 2017년 2% → 2025년 36.5% (revenue share Q1'25 41%) 서버 CPU 점유. EPYC이 Intel Xeon 대비 성능·전력효율 우위. FY25 Client+Gaming $14.6B(+51%), 5세대 EPYC(Turin) + 6세대 Venice(256 코어 2nm)로 추가 점유율 확장 여력
- **Heterogeneous full-stack 플랫폼 (전환비용 + 무형 자산)**: CPU(EPYC/Ryzen) + GPU(Instinct) + DPU(Pensando) + FPGA(Xilinx) + Adaptive Computing 일체형. Helios rack(72 MI455X, 2.9 exaFLOPS FP4) = 랙 단위 판매 가능한 유일한 NVDA 대안. FY25 Non-GAAP Op Income $7.8B(+69%), EPS $4.17(+38%)

**분석 작성일**: 2026-04-19
**목표가 (가중평균 내재가치)**: $174
**투자 기간**: 3년 (FY28까지)

---

## 사업 구조 및 해자

### 2-1. 세그먼트 요약

FY2025 (2025-12-27 종료) 연간 매출 $34.6B (+32% YoY):

| 세그먼트 | 수익원 | 규모 지표 (FY25) | 해자 유형 | 해자 강도 |
|---------|------|---------|---------|---------|
| **Data Center** | Instinct GPU (MI300X/350/400/450) + EPYC 서버 CPU + Pensando DPU | $16.6B (48%), YoY +32% | 효율적 규모, 원가/성능 우위, 장기 계약, 무형 자산 | **Narrow** |
| **Client** | Ryzen 데스크톱/노트북 CPU (Zen 5/6) | $10.6B (31%), YoY +51% | 원가/성능 우위, 브랜드 | Narrow |
| **Gaming** | Radeon GPU + 콘솔 세미커스텀(PS5/XBOX) | ~$2.8B (8%), Q4 +50% YoY | 장기 계약, 브랜드 | Narrow |
| **Embedded** | Xilinx FPGA, Versal Adaptive SoC | ~$3.5B (10%), FY24 -33% 저점에서 회복 | 전환비용, 무형 자산 | Narrow (일부 Wide 지점) |

### 2-2. 세그먼트별 상세

#### Data Center — 효율적 규모 + 원가/성능 우위 + 장기 계약 (핵심 Narrow Moat)

**사업 구조**: (i) AI 학습·추론용 Instinct GPU 시리즈(MI300X·MI325X·MI350·MI355X, 2H'26 MI450/MI455X) (ii) 서버 CPU EPYC(5세대 Turin, 6세대 Venice 2nm 256코어 예정) (iii) Pensando DPU. 고객: Hyperscaler(MSFT/AWS/META/GOOG/ORCL), 주권 AI, 네오클라우드, 프론티어 랩(OpenAI, Anthropic).

| 해자 유형 | 검증 |
|---------|------|
| 효율적 규모 (GPU, HBM4 공급망) | ✅ |
| 원가/성능 우위 (EPYC) | ✅ |
| 장기 계약 (OpenAI 6GW, 잠재 $90B) | ⚠️ (LOI 성격) |
| 무형 자산 (ROCm, Helios rack, OCP 표준) | ⚠️ (ROCm vs CUDA 격차 존재) |

**효율적 규모**: TSMC 3nm/2nm CoWoS 공정 접근권, HBM4 공급망 선점. MI400 = 432GB HBM4(NVDA B200 288GB 대비 +50%), 메모리 대역 19.6TB/s (B200 8TB/s의 2.45x). 머천트 AI 가속기에서 NVDA에 이어 유일한 credible 2위 공급자 지위.

**원가/성능 우위 (EPYC)**: Zen 5c 코어 밀도가 Intel Xeon Granite Rapids 대비 성능/와트 20~40% 우위. Q1'25 x86 서버 매출 점유 41% 달성(Mercury Research). 하이퍼스케일러는 TCO 최적화로 AMD 선호 강화. 2017년 2% → 2025년 36.5%, 8년간 18배 성장으로 아키텍처 리더십 입증.

**장기 계약**: OpenAI 6GW 멀티제너레이션(2025-10-06, 잠재 매출 $90B) 첫 1GW 2H'26. 8/10 Top AI 기업이 Instinct 프로덕션 사용(Lisa Su Q4'25 코멘트). Sony/MS 콘솔 장기 세미커스텀 사례로 설계 채택 후 세대 교체까지 공급 락인. $90B 잠재 매출은 AMD-OpenAI 양사의 표기이나 실현 조건(가격·물량·기간) 불확실 — 독립 검증 제한(⚠️).

**무형 자산**: ROCm 6.0+(FP8, 멀티-GPU, PyTorch 공식) + Helios rack(72 MI455X, 31TB HBM4, 2.9 exaFLOPS FP4). OCP(Open Compute Project) 표준 채택으로 Meta 등 오픈 표준 선호 고객 확보. 단 ROCm <5% 점유는 CUDA 92% 대비 절대 열세 (⚠️).

**주요 계약/수주 현황 (2026-04 기준)**:

| 계약 | 규모 | 시점 |
|------|------|------|
| OpenAI 6GW Multi-year Partnership | 잠재 $90B, 멀티제너레이션 Instinct | 첫 1GW 2H'26 |
| OpenAI Warrant | 최대 160M 주 @ $0.01 (~10% 희석) | 성과·주가 마일스톤 |
| Oracle Cloud MI300X/MI355X | 30,000+ MI300X, MI355X 확장 중 | 진행 중 |
| MSFT/Meta/AWS/Google Cloud MI300X | 8/10 Top AI 기업 Instinct 사용 | 진행 중 |
| MI350 양산 | H1'26 ramp | Q1'26 |
| MI450 + Helios rack | 2H'26 양산 (Q3 초기, Q4 볼륨) | Q4'26~FY27 |
| MI500 (CDNA 6, 2nm, HBM4E) | 2027 양산 계획 | 2027 |
| 6세대 Venice EPYC (Zen 6, 2nm, 256코어) | 2026~2027 양산 계획 | 2026~2027 |

**해자 리스크**:
- ROCm vs CUDA 소프트웨어 격차 (ROCm <5% vs CUDA 92%) — 현실화 2026~2027 진행 중
- NVDA Rubin(2H'26) 성능 리드 재확대 — 현실화 2H'26
- 하이퍼스케일러 커스텀 ASIC 점유 확대 — 현실화 2026~2028 진행 중
- OpenAI 단일 고객 집중도 (DC 성장의 40%+ 기여 가능) — 상시

#### Client — 원가/성능 우위 + 브랜드 (Narrow)

**사업 구조**: Ryzen 데스크톱·노트북 CPU. Zen 5(Granite Ridge/Strix Point) 2024 출시 후 FY25 +51% 성장, AI PC 트렌드 수혜. Intel Core Ultra 대비 성능·효율 우위가 지속되며 데스크톱 DIY 시장 ~80% 점유(Mindfactory 등 유럽 기준).

| 해자 유형 | 검증 |
|---------|------|
| 원가/성능 우위 (Zen 5/6 IPC·효율) | ✅ |
| 브랜드 (DIY 80%+ 점유) | ✅ |

**원가/성능 우위**: Zen 5/6 코어 아키텍처가 Intel 대비 IPC·전력효율 리드. Phoronix, AnandTech 독립 벤치마크 확인. AI PC(NPU 통합 Ryzen AI 300) 트렌드로 OEM 채택 확대. Mindfactory 2025 EU DIY 시장 점유 80%+ (Ryzen 재출시 2016년 이후 10년 축적).

**해자 리스크**: Intel 18A 공정 양산 성공 시 서버·Client CPU 반격 — 현실화 2026~2027.

#### Gaming — 장기 계약 + 브랜드 (Narrow)

**사업 구조**: (i) Radeon 디스크리트 GPU (RX 9000 시리즈, RDNA 4) (ii) 콘솔 세미커스텀(PS5, PS5 Pro, Xbox Series, 차세대 PS6/Xbox 개발 중). Q4 FY25 Gaming $843M(+50% YoY) — RX 9070 출시 + 콘솔 수요 회복.

| 해자 유형 | 검증 |
|---------|------|
| 장기 계약 (Sony/MS 콘솔 세미커스텀) | ✅ |
| 브랜드 (디스크리트 GPU 2위) | ⚠️ (DLSS 격차) |

**장기 계약**: Sony·MS와 다세대 세미커스텀 계약. 차세대 PS6/Xbox도 AMD 채택 유력(TSMC 미세공정 접근권 + Xilinx/Radeon IP 통합 우위). 콘솔 사이클 5~7년 안정적이나 성장 동력 아님.

**브랜드**: NVDA GeForce에 이어 2위, DIY 게이머 일부 확보. 레이트레이싱/FSR 격차로 시장점유 15~20% 정체. DLSS 4.0 대비 격차가 구조적 불리 (⚠️).

**해자 리스크**: 디스크리트 GPU NVDA 추격 어려움 (DLSS 4.0 + RTX 격차 지속) — 상시.

#### Embedded (Xilinx) — 전환비용 + 무형 자산 (Narrow, 일부 Wide 지점)

**사업 구조**: Xilinx(2022년 인수, $49B) + Pensando(2022년 인수, $1.9B) 통합 세그먼트. FPGA(Field-Programmable Gate Arrays), Adaptive SoC(Versal), 네트워크(SmartNIC/DPU). 고객: 항공우주·방산, 테스트·측정, 통신 인프라, 산업 자동화, 자동차 ADAS.

| 해자 유형 | 검증 |
|---------|------|
| 전환비용 (Vivado/Vitis 개발 툴체인) | ✅ |
| 무형 자산 (Xilinx IP, Versal AI Core) | ✅ |

**전환비용**: Vivado·Vitis 개발 환경이 수십 년 축적된 고객 IP·디자인 자산 보유. FPGA 대안(Intel Altera, 라티스)으로 전환 시 설계 재검증 필요 — 방산·항공은 재인증 1~3년 소요(MIL-STD, DO-254).

**무형 자산**: Versal AI Core/Premium 등 AI 엣지 추론 특화 제품군, 고대역 SerDes IP, RF IP. Intel이 2024년 Altera 사업 분사 중이라 FPGA 머천트 시장에서 AMD 지위 강화 (경쟁 약화 → 해자 강화 요인).

**현재 상태**: FY24 -33% 급감(고객 재고조정) 후 FY25 완만 회복 — Q1-Q2'25 각 $823-824M(-3~4% YoY), Q4'25 $950M(+3% YoY). FY26 mgmt 가이던스 "progressive recovery throughout 2026".

**해자 리스크**: 사이클 기업 변동성 (통신·산업·자동차 재고조정 주기적) — 상시. Xilinx 인수 후 시너지 실현이 기대 대비 느림.

### 2-3. 해자 강도 판정

**최종 판정**: **Narrow Moat ⚠️**

**핵심 근거**:
1. **시간 지평**: ROCm parity 미달 + OpenAI 단일 고객 집중도는 투자 기간(3년) 내 결정적 훼손 가능성 존재. NVDA의 Wide Moat(CUDA 20년 축적)와 달리 AMD의 해자는 **후발주자 포지션**에서 나옴 — NVDA가 약화되거나 CUDA 락인이 깨지는 시점까지만 유효한 "상대적 해자"
2. **전략적 헤지**: 4개 세그먼트 다각화(Data Center 48% + Client 31% + Gaming 8% + Embedded 10%)가 단일 세그먼트 충격 흡수. 그러나 성장 드라이버가 Data Center에 집중되어 있어 실질 헤지 효과는 제한적
3. **계약/구조적 보호**: OpenAI 6GW + 서버 CPU EPYC 하이퍼스케일러 채택 확대 + Sony/MS 콘솔 다세대 계약이 FY27~FY28 매출 가시성 일부 확보. 그러나 NVDA의 OpenAI 10GW + Stargate 규모 대비 절대적으로 작음

**주의 구간 (Narrow 판정 균열 선행 지표)**:
- OpenAI 첫 1GW 2H'26 배치 일정 6개월+ 지연 시 OpenAI 딜 전체 회의감 확산
- MI450 양산 수율 + Helios rack 수주: Q4'26 실제 분기 매출 공시 확인
- ROCm vs CUDA parity 측정: MLPerf 벤치마크에서 AMD 비율 30%+ 돌파 여부
- OpenAI 재무 상태: OpenAI ARR·자본 확충·파산 위험 (MI450 계약 이행 능력 직결)

---

## 경쟁 구도 및 경쟁 우위

### 3-1. 경쟁사 식별 및 포지셔닝

| 경쟁사 | 시가총액 (2026-04) | 핵심 사업 영역 | 시장점유율 | 포지셔닝 |
|--------|-----|-------------|----------|---------|
| **AMD** | ~$457B | Instinct GPU + EPYC CPU + Ryzen + Xilinx | AI 가속기 5~8%, 서버 CPU 36.5%, DIY Ryzen 80%+ | NVDA 대안 + Intel 추격자 |
| NVDA | ~$4.6T | Data Center GPU + Networking | AI 가속기 80~86%, AI 프레임워크 92% | 표준 플랫폼, CUDA 락인 |
| Intel | ~$100B | Xeon, Core Ultra, Gaudi 3, 18A 공정 | 서버 CPU 62% rev(감소 중), Client 70%대 | 구조조정 중, Altera 분사 |
| Broadcom | ~$1.5T | 하이퍼스케일러 커스텀 ASIC | 커스텀 ASIC ~60% | AI ASIC 파트너 |
| Google/AWS/MSFT/Meta | ~$10T (합산) | TPU v7, Trainium3, Maia 200, MTIA | 각 사 내부 인퍼런스 확대 | 수직 통합, 비매출 |
| ARM | ~$180B | Arm Neoverse 서버 코어 (Grace, Graviton) | 서버 ~15% (ARM 기반) | 아키텍처 경쟁 |

### 3-2. 핵심 성장동력 경쟁 비교

| 성장동력 | AMD | NVDA | Intel | 판정 |
|---------|-----|------|-------|------|
| AI GPU 성능(학습) | MI355X, MI450(2H'26) | B200/GB200 + Rubin | Gaudi 3 | 🥈 AMD (격차 10~20%) |
| AI GPU 성능(인퍼런스) | MI355X Llama 3.1 405B +30% vs B200 | B200/H200 TensorRT-LLM | 미미 | 🥇 AMD (특정 워크로드) |
| 메모리/대역 스펙 | 432GB HBM4, 19.6TB/s (MI450) | 288GB HBM3e(B200) | N/A | 🥇 AMD |
| 소프트웨어 생태계 | ROCm 6.0+ (<5%) | CUDA 92% | oneAPI (미미) | 🥉 AMD |
| Networking(스케일업) | Broadcom Tomahawk 6 의존 | NVLink/NVSwitch + InfiniBand ($31B+) | 미미 | 🥉 AMD |
| 서버 CPU(per watt) | EPYC Turin (Zen 5c) | Grace (Arm) | Xeon Granite Rapids | 🥇 AMD (vs Intel) |
| 제품 사이클 속도 | MI350→MI400→MI500(2027) | Hopper→Blackwell→Rubin→Feynman | 18A 지연 | 🥈 AMD (NVDA 1년 리드) |
| 영업이익률(Non-GAAP) | 22.5% (FY25) | 60%+ (FY26) | 10%대 | 🥈 AMD |
| FCF 규모 | $2.1B (FY25) | $96.7B (FY26) | 적자 | 🥈 AMD |

**해석**: NVDA가 AI GPU 학습·소프트웨어·Networking·마진·사이클 속도 모두 리드. AMD는 메모리 스펙(HBM4 432GB)과 특정 인퍼런스 워크로드에서만 우위. 서버 CPU는 AMD가 Intel 대비 압도적 리드하나 NVDA Grace(Arm)와는 아키텍처 경쟁 중. AMD의 머천트 AI 가속기 2위 지위는 NVDA Wide Moat 유지 하에서만 유효한 **상대적** 포지션.

### 3-3. 경쟁 우위 원천

**1. NVDA Second Source — 구조적 수요 (복제 난이도: 중간~높음)**
- NVDA 단독 의존 회피 수요가 AMD에 지속적 유입. OpenAI 6GW 대표 사례
- 정량: 8/10 Top AI 기업 Instinct 병행 사용, Meta OCP 표준 Helios 채택
- Intel Gaudi 거의 퇴출 — 머천트 2위 자리 사실상 AMD 독점
- **격차 지속: 3~5년** (NVDA Wide Moat 유지 동안)

**2. x86 서버 CPU 원가/성능 우위 (복제 난이도: 매우 높음)**
- EPYC 5세대 연속 리드 (Milan→Genoa→Bergamo→Turin→Venice)
- 정량: 서버 CPU revenue share 41% (2025 Q1). 2017년 2% → 2025년 36.5% (8년간 18배)
- Intel 18A 양산 지연 + Altera 분사 → 구조조정 모드
- **격차 지속: 5~7년** (Intel 턴어라운드 여부 의존)

**3. Heterogeneous Compute Integration (복제 난이도: 높음)**
- 단일 기업이 CPU·GPU·DPU·FPGA·Adaptive SoC 전부 보유한 유일 반도체사
- Helios rack이 EPYC Venice + MI455X + Pensando + Xilinx NIC 통합
- NVDA는 Grace(Arm) + GPU 제한, Intel은 GPU 퇴출, Broadcom은 ASIC·네트워크만
- Xilinx $49B + Pensando $1.9B M&A 재현 어려움
- **격차 지속: 5~10년**

**4. ROCm 소프트웨어 생태계 (불리한 원천)**
- 오픈소스 CUDA 대안, PyTorch 공식 지원, "wartime mode" 10x 가속
- 정량: MLPerf 인퍼런스 벤치마크 제출 증가, Lisa Su "parity by end 2026" 목표
- 경쟁 격차: CUDA 92% vs ROCm <5%
- **2~3년 내 parity 달성 or 실패가 투자 thesis 결정**

### 3-4. 투자 차별화 근거

1. **머천트 AI 가속기 2위 독점 지위**: NVDA 외 유일한 credible 대안. 하이퍼스케일러·프론티어 랩의 공급사 다각화 수요 = 구조적 tailwind — NVDA 점유 80~86% → 75%로 5pp 이동만 해도 AMD TAM $10B+ 추가
2. **EPYC 서버 CPU 점유율 복리 성장**: 2017년 2% → 2025년 36.5% (CAGR ~40%). 40% → 50% 달성 시 추가 $20B+ 매출 기여 잠재
3. **Heterogeneous full-stack 역량 (Xilinx 포함)**: CPU+GPU+DPU+FPGA 전방위 보유한 유일한 반도체사 — 엔터프라이즈·주권 AI 고객에게 원스톱 솔루션 제공 가능

**밸류에이션 비교 (2026-04 기준)**:

| 지표 | AMD | NVDA | AVGO | Intel | 섹터 평균 |
|------|------|-----|------|------|----|
| Forward PE (FY26) | ~35x | 23.8x | ~35x | N/A | 25x |
| EV/EBITDA (TTM) | ~50x | ~30x | ~28x | N/A | 22x |
| PEG (FY26~FY28) | ~1.0 | ~0.4 | ~1.3 | N/A | ~1.0 |
| FCF Yield (FY25) | ~0.5% | 2.1% | 1.5% | 적자 | 3% |
| EV/Sales (FY26E) | ~10x | ~15x | ~20x | ~2x | ~5x |

**해석**: AMD는 NVDA 대비 Forward PE 프리미엄(+47%) — "NVDA Second Source 구조적 수요" + "AI 가속기 시장 점유율 확대 기대" 반영된 프리미엄. 단 PEG 1.0은 성장 지속 조건부이며, MI450 램프 실적 미달 시 급격한 멀티플 압축 위험. NVDA의 PEG 0.4 대비 밸류에이션 매력도 낮음. FCF Yield 0.5%는 시총 $457B 대비 FCF $2.1B로 빈약 — 성장 기업으로 허용되나 감속 시 지지력 약함.

---

## 리스크 요인

### 1. ROCm 소프트웨어 생태계 격차 — CUDA Moat 유지 ⚠️

**리스크 설명 및 규모**: CUDA 92% vs ROCm <5% 점유 격차. AI 학습·프론티어 모델은 여전히 NVDA 편중. Lisa Su "parity by end 2026" 목표 실패 시 AMD AI GPU 채택이 인퍼런스 특정 워크로드로 제한. AMD Data Center 매출의 ~40%(추정)가 Instinct GPU — CUDA parity 실패 시 AI GPU 성장 CAGR 60% → 30% 감소 가능, Data Center 세그먼트 -20~30%pt 영향.

**현실화 시점**: 2026~2027 진행 중

| 지표 | 현재 (2026) | 목표 (2026 말) |
|------|-----------|-----------|
| AI 프레임워크 점유 | ROCm <5% | ROCm ~15~20% |
| PyTorch 공식 지원 | Linux ✅, Windows preview | Windows 공식 |
| MLPerf 벤치마크 제출 비율 | AMD <10% | 20~30% |
| 독립 성능 벤치마크 (vs CUDA) | -18~27% | parity |

**시나리오별 영향**:
- Base: ROCm 격차 일부 해소, 인퍼런스 워크로드 중심 채택 확대 — DC CAGR +45%
- Bear: ROCm parity 실패, 학습 워크로드 NVDA 편중 유지 — DC CAGR +25%
- Extreme Bear: ROCm 개발 지연 + 고객 이탈 — DC FY27 매출 정체

**완화 요인**: (a) 오픈소스 + Meta/MSFT 다공급원 전략, (b) AMD "wartime mode" 10x 투자 가속, (c) PyTorch 2.x 공식 지원으로 진입장벽 저하

**팩트체크**: ✓ — ROCm 점유/벤치마크는 독립 소스(Phoronix, MLPerf) 확인 가능

### 2. OpenAI 단일 고객 집중도 ⚠️

**리스크 설명 및 규모**: OpenAI 6GW 딜이 AMD FY27~FY28 Data Center 성장의 핵심 변수. 잠재 매출 $90B는 AMD FY25 총매출 $34.6B의 2.6배. FY27~FY30 기간 연 ~$15~25B 기여 가정 시 Data Center 매출의 40~50% 기여 가능. OpenAI 자체 칩 개발 성공, 계약 재협상, 재무 악화, 경영진 변동 시 AMD 밸류에이션 직접 타격.

**현실화 시점**: 상시

| 항목 | 규모 | 시점 |
|------|------|------|
| 첫 1GW 배치 | ~$6~8B 매출 | 2H'26 시작 |
| 6GW 완료 | ~$90B 잠재 | 2027~2030 |
| OpenAI Warrant | 160M 주 @ $0.01 | 성과 마일스톤 |
| 희석 효과 (mid-case) | ~10% | 조건부 |

**시나리오별 영향**:
- Base: 첫 1GW 2H'26 정시 배치, 6GW 3~4년 분산 — DC 가이드 +60% CAGR 실현
- Bear: OpenAI 배치 지연 1~2 분기, 6GW 완료 늦어짐 — DC CAGR +35%
- Extreme Bear: OpenAI 재무 악화·계약 취소 — AMD AI 성장 경로 훼손, 멀티플 급락

**완화 요인**: (a) 8/10 Top AI 기업 Instinct 사용으로 고객 다각화, (b) 주권 AI·네오클라우드 시장 성장, (c) OpenAI 자금 조달 지속(Stargate $400B+)

**팩트체크**: ⚠️ — $90B 잠재 매출은 회사 주장. 실제 확정 계약 규모는 SEC 10-K Performance Obligations 추가 확인 필요

### 3. NVDA Rubin(2H'26) 성능 리드 재확대 ⚠️

**리스크 설명 및 규모**: NVDA Vera Rubin이 MI450보다 연산성능·NVLink·소프트웨어 모든 면에서 우위 확립 시 AMD의 머천트 2위 지위는 유지되나 점유율 확장은 제한. AI 가속기 시장 점유 5~8% → 12~15% 확장이 AMD Base 핵심 가정. Rubin이 격차 재확대 시 점유율 확장 실패 → Bear 경로.

**현실화 시점**: 2H'26~FY27

**시나리오별 영향**:
- Base: MI450 vs Rubin 성능 차 ±10%, AMD 가격·가용성·OpenAI 계약으로 대응 → 12~15% 점유
- Bear: Rubin 성능 2x+ 리드 → AMD 점유 10% 미만 유지 → DC CAGR +25%
- Extreme Bear: Rubin + NVDA 공격적 가격 정책 → AMD 매출 정체

**완화 요인**: (a) Helios rack OCP 표준 채택으로 Meta·주권 AI 경쟁력 유지, (b) EPYC+Instinct 번들 판매, (c) 공급 부족 상황에서 성능 격차 일부 허용

**팩트체크**: ⚠️ — Rubin 실제 스펙/성능은 2H'26 양산 후 확인

### 4. 하이퍼스케일러 커스텀 ASIC 확대 ⚠️

**리스크 설명 및 규모**: Google TPU v7, AWS Trainium3, MSFT Maia 200, Meta MTIA가 인퍼런스 15~25% 점유. AMD는 NVDA와 함께 머천트 시장 자체가 좁아질 리스크. AMD 잠재 TAM이 AI 가속기 머천트 시장 $300~500B(2028E)의 2위(~15~20% 점유 목표). ASIC 점유 확대 시 머천트 TAM 자체 축소.

**현실화 시점**: 2026~2028 진행 중

**시나리오별 영향**:
- Base: ASIC 15~20% 점유, 머천트 시장은 하이퍼스케일러 캐펙스 증가로 절대 매출 증가
- Bear: ASIC 30%+ 점유 → 머천트 시장 정체 → AMD 점유율 확장 실패

**완화 요인**: (a) AMD는 주권 AI·엔터프라이즈·네오클라우드 비-하이퍼스케일러 시장 확대, (b) Custom ASIC은 내부 워크로드 한정, 외부 확산은 Broadcom에만 유리

**팩트체크**: ✓ — 각 ASIC 공식 공개

### 5. Intel 18A 공정 턴어라운드 ⚠️

**리스크 설명 및 규모**: Intel이 2025~2026 18A 공정 양산 성공 시 서버·Client CPU 반격 → AMD 점유율 확장 둔화. EPYC 서버 CPU 점유 36.5% → 45~50% 확장이 AMD Bull 가정. Intel 18A 성공 시 40% 부근 정체 가능.

**현실화 시점**: 2026~2027

**시나리오별 영향**:
- Base: Intel 18A 양산 지연 지속 → AMD 서버 CPU 점유 40~43% 확장
- Bear: Intel 18A 성공 → AMD 점유 36~38% 정체

**완화 요인**: (a) Intel이 Altera 분사 중이라 자원 분산, (b) TSMC 최선단 공정 접근권은 AMD가 유지, (c) Client CPU에도 같은 리스크이나 AI PC 트렌드로 AMD 수혜

**팩트체크**: ⚠️ — Intel 18A 실제 수율은 2026년 하반기 확인

### 6. OpenAI Warrant 희석 ⚠️

**리스크 설명 및 규모**: OpenAI가 최대 160M AMD 주를 $0.01에 매수 가능한 Warrant (성과·주가 마일스톤 달성 시). 현재 시총 기준 ~10% 희석 효과. 현재 1.65B 주 → 최대 1.81B 주 (+10%). 주당 지표 모두 -10% 영향.

**현실화 시점**: 조건부 (주가 마일스톤 도달 시)

**시나리오별 영향**:
- Base: 마일스톤 일부 달성, 50~100M 주 행사 → 주당 EPS -5~7%
- Bull: 전 마일스톤 달성 → -10% 희석

**완화 요인**: (a) Warrant 조건이 주가 마일스톤 연동되어 주주와 이해관계 일치, (b) OpenAI가 AMD 생태계 참여 인센티브

**팩트체크**: ❓ — Warrant 마일스톤 조건 세부사항 SEC 10-K·8-K 추가 확인 필요

### 7. 밸류에이션 리스크 (현재 Forward PE 35x) ⚠️

**리스크 설명 및 규모**: AMD 1년 +218% 상승 후 Forward PE ~35x = NVDA(24x) 대비 47% 프리미엄. 성장 감속·마일스톤 미달 시 멀티플 급락 위험. PE 35x → 22x 복귀 시 주가 -37%. 역사적 AMD PE 범위 20~50x (사이클 따라).

**현실화 시점**: Base~Bear 시나리오 일부 반영

**시나리오별 영향**: Extreme Bear PE 12x / Bear 20x / Base 28x / Bull 35x

**완화 요인**: PEG 1.0은 섹터 평균 수준이며 극단 고평가는 아님. 그러나 NVDA 대비 절대 프리미엄.

**팩트체크**: ❓ — 과거 사이클 벤치마크(AMD 2000년대 Opteron 사이클) 적용 가능성 논쟁

### 8. AI Capex Peak 조기 도래 ⚠️

**리스크 설명 및 규모**: 2026~2027 하이퍼스케일러 캐펙스 $700B+ 피크 후 감속. AMD는 NVDA보다 성장 의존도 높아 캐펙스 감속 시 더 큰 타격. AMD DC CAGR 60% 가정이 하이퍼스케일러 캐펙스 +15~20% 성장 전제. 캐펙스 감속 시 DC CAGR 30%로 감소.

**현실화 시점**: 2027~2028

**시나리오별 영향**: Bear 시나리오 핵심 변수. Extreme Bear에서 캐펙스 -20% 가정.

**완화 요인**: (a) OpenAI 6GW 다년 확정 수요, (b) 인퍼런스 TAM 지속 성장, (c) 주권 AI 확산

**팩트체크**: ✓ — 각 하이퍼스케일러 2026 캐펙스 공식 가이던스

### 리스크 독립성

- 리스크 1(ROCm) + 3(Rubin)은 **상관성 높음** — 둘 다 AI GPU 경쟁력 요인
- 리스크 2(OpenAI) + 8(Capex Peak)은 **일부 상관** — 거시 캐펙스 감속 시 OpenAI 배치도 지연
- 리스크 4(ASIC)는 **반대 방향 조정** — ASIC 확대가 AMD+NVDA 둘 다 피해이나 NVDA가 더 크게 피해 (AMD 상대적 수혜)
- 리스크 5(Intel)는 **독립** — 서버/Client CPU 한정
- 리스크 6(Warrant) + 7(밸류에이션)은 **파생 리스크** — 다른 리스크 현실화 시 자동 발동
- **독립 사업**: Embedded(Xilinx)는 AI 사이클과 독립 — 방산·항공 등 안정 수요 (매출 10%)

---

## 가치평가

### 5-1. DCF 방법론

**적용 방식**: **A. FCF DCF** (Exit Multiple Terminal + Forward PE 교차검증)

**선택 근거**: AMD는 (i) 단일 산업(반도체) 4개 세그먼트이나 모두 유사한 멀티플 체계(반도체 PE 20~35x) (ii) FCF 생성 능력 확보 (FY25 $2.1B, Op Margin 22.5% 비GAAP) (iii) 자본 규제 미적용 (iv) Balance Sheet NAV 중심 아님 → Option A 부합. NVDA와 동일 접근.

**대안 대비 우위**:
- SOTP 부적합: AMD 세그먼트는 이익 "성격" 크게 다르지 않음(모두 제품 판매 기반 반도체). 이질적 자산 부재
- Forward Multiple 부적합: AMD는 안정 FCF 생성 기업 — "초기 성장·적자" 아님. 교차검증 보조 활용
- NAV/Excess Returns 부적합: 이익 기반, 자본 규제 없음

**주요 가정**:
- WACC: **10.5%** (Rf 4.31% + 베타 1.6 × ERP 5.5%, NVDA 대비 베타 상향)
- 예측 기간: 3년 (FY26~FY28)
- Terminal: FY28 EPS × 시나리오별 Applied PE (Exit Multiple 방식)
- 희석 주식수: FY25 ~1.65B → FY28 1.68~1.81B (OpenAI Warrant 일부 행사 반영)
- 실효세율: 13% (FY25 실측 반영, Q1'26 가이던스 13% 연속)

**멀티플 기준 — 역사적 실측**:
- AMD 5년 평균 Forward PE: 약 30~35x (AI 랠리 포함)
- AMD 10년 평균: 약 25x (사이클 포함, 2019~2021 피크 50x+)
- 사이클 하단(2022 Bear): 18~20x
- 사이클 상단(2020~2021, 2025~2026): 40~50x
- 시나리오 배정: Extreme Bear 12x / Bear 20x / Base 28x / Bull 35x

### 5-2. 시나리오 요약

| 시나리오 | 확률 | FY28 목표가 | 현재 내재가치 |
|---------|------|-------|-------|
| Extreme Bear | 15% | $26 | $19 |
| Bear | 30% | $109 | $80 |
| Base | 35% | $278 | $205 |
| Bull | 20% | $511 | $377 |

**Extreme Bear 전제**: AI Capex 피크 2026~2027 조기 도달 후 30%+ 감소 (Cisco 2002 유사), MI450 양산 수율 문제·OpenAI 계약 조건 재협상(실질 매출 기여 50% 감소), AMD AI 가속기 점유 5% 고정, Op Margin 22.5% → 12%(재고 write-down + 가격 경쟁), Intel 18A 양산 성공 시 EPYC 점유 35% 정체. 핵심 가정: 매출 $35B(flat), EPS $2.15, Applied PE 12x. 진입 신호: 하이퍼스케일러 캐펙스 가이던스 -10%+ 하향(3사 이상), OpenAI 첫 1GW 6개월+ 지연, MI450 수율 문제 발표.

**Bear 전제**: ROCm parity 실패, AI 학습 시장 NVDA 편중 지속, NVDA Rubin 성능 2x+ 리드, MI450 인퍼런스 특정 워크로드 제한, AMD AI 점유 8~10%, DC CAGR +25%(가이던스 +60% 실패), OpenAI 6GW 1~2년 지연, Op Margin 22.5% → 20%, Intel 18A 부분 성공. 핵심 가정: 매출 $52.6B(CAGR +15%), DC $32B, EPS $5.43, Applied PE 20x. 진입 신호: ROCm MLPerf <10% 2026 말 지속, OpenAI 1GW 2H'26 미달, DC 분기 YoY +25% 밑, NVDA Rubin vs MI450 2x+ 리드.

**Base 전제**: MI450 2H'26 정시 양산, OpenAI 첫 1GW 배치 달성, ROCm "practical parity"(인퍼런스 주요 워크로드), AMD AI 점유 10~15%, DC CAGR +45%(가이던스 60% 대비 보수), Op Margin 22.5% → 26%(GPU mix + 스케일), Intel 18A 지연 지속, EPYC 점유 40~43% 확장, Helios rack 초기 수용(Meta + 주권 AI). 핵심 가정: 매출 $74B(CAGR +29%), DC $51B, EPS $9.94, Applied PE 28x. 진입 신호: Q1~Q2'26 DC YoY +40% 유지, MI450 Q3'26 초기 수주 + Q4'26 볼륨 램프. Base EPS $9.94는 mgmt "$20 EPS 전략 목표(5년)" 궤적 중간 — FY28 $20 달성은 Bull 수준.

**Bull 전제**: MI450 성능 B200 대비 우위 + Helios rack 주류 표준, ROCm CUDA parity 2026 말 달성, AMD AI 점유 20%+(하이퍼스케일러 4사 모두 대량 배치), DC CAGR +60%(가이던스 실현), OpenAI 6GW 가속 + 추가 Anthropic/Meta 대형 계약, Op Margin 22.5% → 30%(규모 + GPU mix), Intel 18A 지연 지속 EPYC 점유 50%+, AMD 5년 $20 EPS 전략 목표 FY28 조기 달성. 핵심 가정: 매출 $101B(CAGR +43%), DC $68B, EPS $14.59, Applied PE 35x. 희석주식수 1.81B(Warrant 100% 행사 가정). 진입 신호: Rubin 벤치마크 대비 MI450 경쟁력 입증, ROCm MLPerf 점유 25%+, DC 분기 매출 $15B+ 돌파(Q4'26), 제2·제3 대형 GW급 계약.

#### Bull 시나리오 실현 가능성 분석

| 전제 조건 | 실현 가능성 | 근거 | 선행/반례 |
|---------|-----------|------|----------------|
| MI450 vs Rubin 경쟁력 확보 | 중간 | HBM4 432GB 메모리 우위 | 선행: MI300X Llama 인퍼런스. 반례: NVDA 연간 사이클 6~12개월 리드 |
| ROCm "parity by end 2026" | 낮음~중간 | Lisa Su 공식 목표, 10x 투자 | 반례: CUDA 20년 축적, 2024~2025 약속 미달 |
| AMD AI 점유 20%+ | 낮음 | OpenAI 6GW + 대형 계약 | 선행: 서버 CPU 2→36%(8년). 반례: CUDA 락인 제약 |
| DC CAGR +60% | 중간 | mgmt 가이던스, MI450 램프 | 반례: 역사적 반도체 성장 30~40% |
| Op Margin 30% | 낮음~중간 | GPU mix 상승 | 선행: NVDA 60%+. 반례: Client/Gaming/Embedded 구조상 상한 |
| EPYC 점유 50%+ | 중간 | Intel 턴어라운드 실패 | 선행: 2017→2025 2→36.5%. 반례: Intel 18A 성공 |
| OpenAI Warrant 전 행사 | 중간 | 주가 마일스톤 연동 Bull 자동 달성 | — |

**실현 경로 (인과 체인)**: MI450 성능 입증 → 고객 확대 → DC $15B+ 분기 돌파 → Op Margin 확장 → Bull 멀티플 유지 → OpenAI Warrant 마일스톤 달성 (Warrant 행사 -10% 희석이나 주가 상승 상쇄)

**전제 간 독립성**:
- MI450 경쟁력과 ROCm parity는 **연관** (HW + SW 동시 개선 필요)
- AMD AI 점유 확대는 **위 두 전제의 결과**
- EPYC 점유 확대는 Intel 18A 지연의 **독립 확률** (AI 무관)
- Op Margin 30%는 GPU mix의 **종속 변수**

**종합 실현 확률 판단**: 개별 전제 실현 확률 30~50%. HW·SW·점유 확대 체인은 연관성 높아 실제 가중 확률 **20%** 유지. 과대 아님.

**붕괴/전환 조건**:
- MI450 양산 6개월+ 지연
- ROCm parity 2027년까지 미달
- OpenAI 딜 조건 축소 or 재협상
- Intel 18A 양산 성공 + EPYC 점유 정체
- NVDA 가격 공격 전환

### 5-3. 가중평균 내재가치

```
시나리오       확률    FY28 목표가   현재 내재가치   기여
─────────────────────────────────────────────────────
Extreme Bear   15%    $26          $19            $2.85
Bear           30%    $109         $80            $24.00
Base           35%    $278         $205           $71.75
Bull           20%    $511         $377           $75.40
─────────────────────────────────────────────────────
가중평균 내재가치:                                 $174.00
가중평균 범위:           $19 ~ $377
```

**확률 배분 근거**:
- **Extreme Bear 15%**: AI 버블 터짐·OpenAI 딜 취소·MI450 실패 3중 조건. 개별 확률 낮으나 동시 발현 가능성 상존. 10~20% 범위 중앙 상단 (AMD는 NVDA 대비 성장 의존도 높아 더 취약)
- **Bear 30%**: ROCm parity 실패 + NVDA Rubin 리드 재확대 + OpenAI 배치 지연 combination이 가장 현실적. 20~30% 범위 상단 (보수 우선)
- **Base 35%**: DC +45% CAGR + MI450 정시 양산 + EPYC 점유 유지. 35~45% 범위 하단 (성장 가속 경로 실패 가능성 반영)
- **Bull 20%**: mgmt 가이던스(+60% DC CAGR, $20 EPS) 실현. 15~25% 범위 중앙

Bear + Extreme Bear 합 = 45% (가이드 35%+ 크게 초과, 보수적 가중 — AMD가 현재가 +218% 상승 상태로 하방 확대 반영).

### 5-4. 현재 실적 위치

| 지표 | FY25 실측 | YoY | DCF Case 위치 |
|------|------|-----|-------------|
| 매출 | $34.6B | +32% | Base 시작점 |
| Data Center | $16.6B | +32% | Base 하단 |
| Data Center Q4 | $5.4B | +39% | Base-Bull 경계 |
| Client+Gaming | $14.6B | +51% | Bull 경로 |
| Embedded | ~$3.5B | flat | Bear-Base 경계 (회복 중) |
| Non-GAAP GM | 52% FY / 54.6% Q4 | +3pp (Q4) | Base 범위 |
| Non-GAAP Op Margin | 22.5% | +5pp | Base 하단 |
| Non-GAAP NI | $6.8B | +38% | Base |
| Non-GAAP EPS | $4.17 | +38% | Base |
| FCF | $2.1B | — | Base (3% FCF/매출) |
| Q1'26 가이던스 | $9.8B ±$300M (+32%) | | Base 연장 |

**트렌드 판단**:
```
매출 궤적: FY23 $22.7B → FY24 $25.8B → FY25 $34.6B → FY26E $42~48B
DC 매출 궤적: FY23 $6.5B → FY24 $12.6B → FY25 $16.6B → FY26E $24~30B
Op Margin 궤적: FY23 17% → FY24 17.5% → FY25 22.5% → FY26E 24~27%
Q4'25 스냅샷: $10.3B (+34%), DC $5.4B (+39%) — 모멘텀 가속
──────────────────────────────────
현재 위치: Base 트랙 (FY25 실적은 Base 진입 상태)
트렌드 방향: 가속 → Bull 가능성 상승
단, MI450 2H'26 실제 수주·양산이 Bull 경로 확정 조건
```

**가이던스 반영 방향**:
- Q1'26 $9.8B 달성 + Q2~Q4 MI350 램프: FY26 $42~45B 지지 → Base 확고 + Bull 가능성 상승
- Q1'26 미달 (<$9.5B): Bear 진입 경계
- MI450 Q4'26 볼륨 램프 확인: Bull 결정 시점

**핵심 관찰**:
- **가장 중요한 변수**: Data Center 분기 매출 (특히 Instinct GPU 부문)
- **향후 확인 시점**: Q1'26 실적 (2026-05-06), MI350 양산 스케일·MI450 초기 수주 (Q2~Q3'26), OpenAI 첫 1GW 배치 (2H'26), Q4'26 실적 (MI450 볼륨 램프, 2027-02)

### 5-5. 가치평가 결과

| 지표 | 수치 | 평가 |
|------|------|------|
| 가중평균 내재가치 | $174 ($19~$377) | 투자 기간 3년 기준 |
| Base 목표가 | $205 | DC CAGR +45% + MI450 정시 양산 반영 |
| 손익비 (Bull 업사이드 / Bear 다운사이드) | $172 / $125 | 1.38 (상방 우위 완만) |
| 손익비 (Bull / Extreme Bear) | $172 / $186 | 0.92 (다운사이드 우위) |
| 애널리스트 평균 목표가 | $273~290 | 참고용 (12개월 전망) |

**손익비 상세 (Base 목표가 $205 기준, PV 기준)**:
- Bull 업사이드 = $377 − $205 = $172
- Bear 다운사이드 = $205 − $80 = $125
- Bull/Bear 비율 1.38 — 상방 완만 우위이나 뚜렷한 비대칭 아님
- Extreme Bear 반영 시 다운사이드 확대(-$186) — 꼬리 리스크 무시 불가
- 애널리스트 평균 $273~290은 12개월 전망으로 Bear 30%/Extreme Bear 15% 꼬리 리스크 고려 제한

**결론**: Base 시나리오 달성 시 FY28 $278 도달 (PV $205). Bull 실현 시 FY28 $511 (PV $377). Bear/Extreme Bear 다운사이드 합산 45% 확률이 DCF 가이드 35%+ 기준 크게 초과 — 보수적 가중. 현재 FY25 실적이 Base 진입 상태이나 가격은 이미 Bull 프리미엄 선반영. **MI450 2H'26 양산 실적 + OpenAI 첫 1GW 배치 확인**이 Bull 진입 경로 재평가 조건. Base → Bull 전환 조건 달성 시 재진입 검토.

---

## 종합 판정

```
[ AMD ] 평가 요약
────────────────────────────────
비즈니스 퀄리티  : ⚠️ Narrow Moat, NVDA Second Source 구조적 수요이나 독자적 해자 약함
시장 환경        : ✅ AI Capex $700B+ 호황, OpenAI 6GW 대형 계약 확보
가치평가         : ❌ Base vs Bear 손익비 1.38 제한적, Bear+Extreme Bear 45% 꼬리 리스크
리스크           : ⚠️ ROCm parity 실패·OpenAI 단일 의존·밸류에이션 고점 3중 복합
────────────────────────────────
종합 의견        : 비중축소
────────────────────────────────
핵심 모니터링:
  1. OpenAI 첫 1GW 배치 일정 (2H'26) — 지연 시 Bear 즉시 진입
  2. ROCm "parity by end 2026" 달성 여부 (MLPerf 기준)
  3. MI450 양산 + Data Center 분기 매출 가속 (Q4'26 $15B+ 돌파)
```

**왜 매수가 아닌가**:
- 손익비 구조: Base vs Bear Bull/Bear 비율 1.38에 그침. Bull/Extreme Bear 0.92는 다운사이드 우위. 20%+ 할인(매수 기준) 미충족 — 현재 구조적 매력도 제한적
- Bear + Extreme Bear 합계 45% — DCF 가이드 35%+ 기준 크게 초과. 하방 가중치가 구조적으로 큼
- Bull 조건(MI450 경쟁력 + ROCm parity + AI 점유 20%+ + DC CAGR +60% + Op Margin 30%) 다중 연쇄 필요 — HW·SW 동시 개선 + 고객 확대 + 마진 확장의 조건부 체인
- 해자 Narrow: AMD 해자는 **후발주자 상대적** 성격 — NVDA가 약화되거나 CUDA 락인 깨지는 시점까지만 유효

**왜 매도가 아닌가**:
- 머천트 AI 가속기 2위 독점 지위 — NVDA 외 유일 credible 대안. 하이퍼스케일러 공급사 다각화 수요 구조적
- OpenAI 6GW(잠재 $90B) + 8/10 Top AI 기업 Instinct 사용 + Sony/MS 콘솔 다세대 계약 — FY27~FY28 매출 가시성 일부 확보
- EPYC 서버 CPU 점유 2→36.5%(8년 18배) 복리 성장, Intel 18A 지연·Altera 분사로 구조조정 모드 — 추가 확장 여력
- Heterogeneous full-stack 역량 (CPU+GPU+DPU+FPGA 일체형) — 유일 보유, 엔터프라이즈·주권 AI 원스톱 솔루션
- Q4'25 DC $5.4B (+39%), Op Margin 22.5%(+5pp) — 모멘텀 가속, 구조적 훼손 증거 없음

**분할 매수 근거**:
- Bear 수준 PV $80 이하 진입 시 손익비 개선 (Bull $377 / Bear $80 = 4.7x 비대칭)
- MI450 2H'26 양산 성공 + OpenAI 첫 1GW 배치 확인 후 Bull 확률 20% → 25%+ 상향 검토 시 재진입
- ROCm "parity by end 2026" MLPerf 기준 달성 확인 시 Bear 확률 30% → 25% 하향 검토

**가장 취약한 숫자**:
- **Base FY28 EPS $9.94**: mgmt "$20 EPS 전략 목표"(5년) 궤적 중간 — 3년 DCF 기간 $20 달성은 Bull에서도 어려움. mgmt 목표가 5년 기준이면 Bull 시나리오도 보수 해석 가능
- **Bull Applied PE 35x**: 현재 Forward PE 35x 유지 가정 — AI 사이클 지속 전제
- **Extreme Bear Applied PE 12x**: 과거 AMD 사이클 하단(2022) 18x 대비 매우 보수 — Cisco 2002 수준
- **OpenAI 6GW $90B 잠재 매출**: LOI 성격, 구속력 있는 최종 계약 규모 불투명
- **OpenAI Warrant 희석**: 최대 -10% 주당 지표 영향, 조건 세부사항 10-K 추가 확인 필요
- **FY25 FCF Yield 0.5%**: 시총 $457B 대비 FCF $2.1B 빈약. 성장 기업으로 허용되나 감속 시 지지력 약함

---

## 스트레스 테스트

> **리스크 요인(4번)과 차이**: 리스크 요인은 DCF 시나리오 확률에 직접 반영. 스트레스는 DCF 가중평균 미반영, 외생 충격·꼬리 위험 별도 점검.

### 7-1. 시나리오별 스트레스 테스트

#### S1. TSMC 대만 공급망 쇼크 (지정학)

**가정**: 대만해협 긴장 고조 — 군사 봉쇄 혹은 경제 봉쇄로 TSMC 2nm/3nm CoWoS capacity 6~12개월 차질. AMD Instinct MI350/MI400 양산 50%+ 감축, EPYC Venice(2nm) 지연. Samsung Foundry 대체는 수율·CoWoS 미보유로 제한 (AMD는 NVDA보다 Samsung 이력 부족).

| 항목 | 값 |
|------|---|
| 재무/밸류에이션 충격 | FY27 매출 $50B → $32B (-36%), GM 52% → 12% Op Margin, PE 35x → 13x |
| 주가 충격 | -55% |
| 실현가능성 | 8% |
| Bear DCF 반영 시 기여 | -4.4%pt |

**버티는 근거**: AMD는 팹리스(자산경량) — 생산 차질은 TSMC 리스크, AMD 대차대조표 직접 타격 없음. OpenAI 계약은 multi-year 장기 — 공급 회복 시 delayed demand 이연. Samsung 2nm, Intel 18A 장기 옵션(2~3년 리드타임).

**취약 근거**: TSMC CoWoS/HBM4 패키징 단기 대체 불가 (NVDA 동일 공급망). AMD는 NVDA 대비 시장 2위라 공급 부족 시 고객(MSFT/Meta/OpenAI)이 NVDA 우선 배정을 요구할 가능성. EPYC Venice 지연 시 Intel 18A Xeon 반격 기회 — 서버 CPU 점유 재역전 리스크.

**관찰 지표**: 대만-중국 군사 긴장 지수(CBAS, CFR), TSMC 월간 CoWoS 공급 capacity 업데이트, 미국 정부 대만 정책 발언 강도.

#### S2. ROCm parity 실패 → CUDA 락인 영속화 (AMD 구조적)

**가정**: AMD ROCm 7.0/8.0이 PyTorch·JAX·vLLM 호환성 달성해도 실무 성능(throughput/$, inference latency) CUDA 대비 20~30% 열세 지속. OpenAI 6GW 첫 1GW 배치 시 실제 training/inference 효율 기대 대비 하락 → 6GW 전량 이행 지연 혹은 축소. 하이퍼스케일러가 Instinct를 인퍼런스 전용 한정 배치, 학습은 NVDA 단독. AMD 점유 5~8% → 10% 상한 (mgmt Bull 가정 12~15% 실패).

| 항목 | 값 |
|------|---|
| 재무/밸류에이션 충격 | DC CAGR +60% → +20%, FY28 DC $51B → $27B, Op Margin 26% → 18%, PE 28x → 16x |
| 주가 충격 | -50% |
| 실현가능성 | 30% |
| Bear DCF 반영 시 기여 | -15.0%pt (최대 기여) |

**버티는 근거**: EPYC 서버 CPU와 Embedded(Xilinx)는 ROCm과 무관 — 매출 40%+ 영향 없음. 인퍼런스 TCO 경쟁력 유지 — 완전 NVDA 독점 방지. Pensando DPU, Helios rack 등 rack-scale 차별화가 일부 고객 확보 유지.

**취약 근거**: AMD Bull 내러티브는 "AI GPU 2위 머천트 공급자" 대부분 의존 — ROCm parity가 모든 프리미엄의 전제. OpenAI 6GW 근거가 NVDA 단독 회피 수요 — 실무 성능 격차 지속 시 계약 구속력 약화. NVDA는 CUDA에 연 $50B+ 투자(개발자·라이브러리) → AMD ROCm 구조적 후발주자.

**관찰 지표**: AMD MLPerf Training/Inference 벤치마크(분기별), OpenAI 공개 자료상 MI450 vs B200/Rubin 성능 비교, PyTorch 2.8+/vLLM 릴리즈 노트상 ROCm parity, 하이퍼스케일러 AMD vs NVDA Capex 배분 공개, AMD DC Q2/Q3'26 YoY <30% 시 warning.

#### S3. OpenAI 6GW 계약 축소/취소 (single-customer concentration)

**가정**: OpenAI 재무 악화 (연 $50B+ 손실 상태로 2025 추산) — 외부 투자 유치 실패 혹은 사업 모델 위기로 AI Capex 50% 축소. 6GW 중 첫 1GW(2H'26) 이후 잔여 5GW 이행 연기 혹은 취소. 잠재 $90B의 20~30%만 실현 (AMD Bull 전제 핵심 부분 훼손). AI 프론티어 랩(Anthropic, xAI, Google DeepMind) 유사 사태 파급 가능.

| 항목 | 값 |
|------|---|
| 재무/밸류에이션 충격 | FY27~28 누적 매출 -$25~35B, FY28 DC $51B → $38B, Op Margin 26% → 22%, PE 28x → 20x |
| 주가 충격 | -40% |
| 실현가능성 | 20% |
| Bear DCF 반영 시 기여 | -8.0%pt |

**버티는 근거**: OpenAI 이탈 고객이 MSFT/Meta/Anthropic 등 타 고객으로 일부 이전. AMD 고객 분산: 8/10 Top AI 기업 Instinct 사용 — OpenAI 단일 의존 아님. 계약 취소 시 OpenAI Warrant(160M 주) 미행사 확정 → EPS 희석 방지. EPYC·Xilinx 매출 영향 없음.

**취약 근거**: OpenAI 6GW 계약은 AMD 2025-10 발표 이후 주가 폭등의 직접 원인 — 취소 시 1년 랠리 되돌림. 6GW 규모(= AMD FY25 매출 $34.6B의 ~2.6x) 단일 딜은 AMD 역사상 최대 계약 — 재현 불가. 잠재 $90B가 Bull EPS $14.59 핵심 — 축소 시 Bull 경로 완전 소멸.

**관찰 지표**: OpenAI 신규 투자 라운드(2026~2027, Softbank·Microsoft), OpenAI 분기별 revenue run rate(2025 말 $11.6B → 2026 $20B+), AMD DC Q3/Q4'26 첫 1GW 배치 매출 인식 ($2~3B 수준), Microsoft Azure OpenAI 비중 공시 (Azure 성장률 둔화 시 선행 시그널).

#### S4. NVDA Rubin + 공격적 가격 전환 (경쟁 구도 변화)

**가정**: NVDA Rubin(2026-2H)이 MI450 대비 2x+ 성능 리드 (메모리·interconnect·CUDA 최적화 복합). NVDA GM 75% → 65% 수용 대신 가격 -25% 인하로 AMD 진입 차단 (JP Morgan/Qualcomm 대응 과거 패턴). AMD는 가격 유지 시 점유율 침식, 가격 대응 시 GM 크러시 (GM 52% → 42%). AI 가속기 머천트 AMD 점유 5~8% → 3~5% 후퇴.

| 항목 | 값 |
|------|---|
| 재무/밸류에이션 충격 | FY28 매출 $74B → $52B, Op Margin 26% → 15%, EPS $9.94 → $4.20 (-58%), PE 28x → 14x |
| 주가 충격 | -60% |
| 실현가능성 | 15% |
| Bear DCF 반영 시 기여 | -9.0%pt |

**버티는 근거**: OpenAI 6GW 계약은 multi-year 장기 — 단기 가격 전쟁에서도 물량 보장. EPYC 서버 CPU는 NVDA와 경쟁 영역 아님(Intel 대상) — 매출 다각화 완충. NVDA가 자체 GM -10%pt 수용 유인 제한적 — NVDA 주가도 동시 타격이므로 지속 어려움. AMD Helios rack-scale 통합 가치는 가격으로 대체 불가.

**취약 근거**: AMD 자본여력(cash $5.7B) 대비 NVDA($56B) 1/10 — 장기 가격 전쟁 여력 열세. AMD 수익성 회복은 DC AI GPU 규모 확장 전제 — 점유 후퇴 시 구조적 훼손. AMD Client/Gaming/Embedded는 성장 동력 아님 — DC 의존도 높음.

**관찰 지표**: NVDA Rubin 실제 성능 벤치마크 (MLPerf 2026-Q4~2027), AMD vs NVDA DC 분기별 매출 추이(격차 확대 시 경고), 하이퍼스케일러 capex mix(NVDA vs AMD), AMD DC GM 공개(62%~64% → 55% 이하 시 경쟁 악화), NVDA 가격 인하 공지 혹은 H200/B200 ASP 하락 기조.

#### S5. AI Capex Bubble Burst — AMD 고베타 노출 (Telecom 2000 유사)

**가정**: 2027~2028 AI ROI 압박 심화 — 하이퍼스케일러 Capex $500B+ 대비 AI 매출화 $100B 미달. MSFT/GOOG/META 3사 Capex 가이던스 -30~40% 축소(시장은 "AI 수요 둔화" 해석). AI 가속기 수요 공급 과잉 → AMD Instinct 단가 -20%, 물량 -15% 동시 발생. Cisco 2000~2002 유사 멀티플 압축 (Forward PE 35x → 12x). AMD는 NVDA보다 beta 높음 — 2위 프리미엄 소멸 + 성장 스토리 훼손 이중 압박.

| 항목 | 값 |
|------|---|
| 재무/밸류에이션 충격 | FY28 매출 $74B → $55B (-25%), DC $51B → $35B, Op Margin 26% → 18%, EPS $9.94 → $5.80, PE 28x → 10x |
| 주가 충격 | -70% |
| 실현가능성 | 15% |
| Bear DCF 반영 시 기여 | -10.5%pt |

**버티는 근거**: AMD Client/Gaming/Embedded는 AI Capex와 무관 — 매출 40%+ 방어선. 수요 축소는 2~3년 사이클로 복구 가능(2000~2004 vs 2006 통신 인프라 회복 사례). EPYC 서버 CPU는 데이터센터 운영비 절감 수요로 AI 다운사이클에서도 유지. AMD 자산경량(팹리스) → 고정비 부담 낮음.

**취약 근거**: AMD Forward PE 35x는 AI 고성장 프리미엄 — 사이클 종료 시 멀티플 압축이 NVDA보다 더 큼(2위 할인 추가). 1년 +218% 상승분이 거의 AI 내러티브 — 되돌림 시 -60%+ 가능. OpenAI Warrant 조건부 희석은 AI 붐 유지 시에만 유효 — bust 시 dead. AMD는 NVDA 대비 현금·FCF 약함 → 사이클 버티기 어려움.

**관찰 지표**: 하이퍼스케일러 분기별 Capex 가이던스(MSFT/GOOG/META, 2027~2028 하향), AI 매출화 progress(OpenAI ARR, Azure AI, Google Cloud AI), Goldman Sachs/Sequoia "AI revenue gap" 보고서, NVDA GM 추이(75% → 65% 이하 경고), AMD DC 분기 성장률 YoY <20% 위기 시그널.

### 7-2. Bear DCF 시뮬레이션 합산

| # | 시나리오 | 주가 충격 | 실현가능성 | Bear 기여(%pt) |
|---|---------|---------|---------|---------|
| 1 | TSMC 대만 쇼크 | -55% | 8% | -4.4%pt |
| 2 | ROCm parity 실패 | -50% | 30% | -15.0%pt |
| 3 | OpenAI 6GW 축소/취소 | -40% | 20% | -8.0%pt |
| 4 | NVDA Rubin + 가격 전쟁 | -60% | 15% | -9.0%pt |
| 5 | AI Capex Bubble Burst | -70% | 15% | -10.5%pt |
| | **단순 합산** | | | **-46.9%pt** |

**동조성 해석**:
- S2(ROCm 실패) × S4(Rubin 리드): **강한 정의 상관** — CUDA 락인 지속의 양 측면. 중복 가능성 50%
- S3(OpenAI 축소) × S5(Capex Burst): **강한 정의 상관** — AI ROI 압박의 서로 다른 발현. 중복 가능성 60%
- S1(TSMC 쇼크): **독립** — 지정학 외생 충격
- S2 × S3(OpenAI): **약한 상관** — ROCm 실패가 OpenAI 축소 유발 가능(간접)
- **동조성 보정 합산**: -46.9%pt × 0.55 보정 계수 = **-25.8%pt**

### 7-3. Bear → Stress 반영 시 비교

Base 파일의 Bear 목표가 FY28 $109 / PV $80, Extreme Bear FY28 $26 / PV $19 기준:

```
원본 Bear (FY28):                  $109 (PV $80)
단순 합산 적용 시:                 $109 × (1 - 0.469) = $58 (PV $43)
동조성 보정 적용 시:              $109 × (1 - 0.258) = $81 (PV $59)
Base 파일 Extreme Bear:            $26 (PV $19)
────────────────────────────────────
```

**시사점**:
- 스트레스 단순 합산 시 Bear가 $58로 Extreme Bear($26)와 Bear($109) 중간 이동. 단순 합산은 동조성 미보정 극단 케이스
- 동조성 보정 시 $81 — Bear가 $109에서 $81로 깊어지는 수준. Bear 확률 30% → 35~40% 재배정 논의 가능
- **AMD는 NVDA 대비 스트레스 노출이 더 큼** — ROCm/OpenAI 단일 종속 리스크가 AMD-specific. NVDA는 동조성 보정 Bear -18% 하락, AMD는 -26% 하락
- **결론**: 현재 Base 가중평균 내재가치 $174도 Bear 30% 가정에서 산출. 스트레스 동조성 보정 반영 시 Bear 확률 상향(30% → 35%) 논의 가능. 이 경우 가중평균은 약 $160 수준 추가 하락. "비중축소" 판정 강화 근거

**주의**: Revaluation 가중평균에는 반영하지 않음. "참고용 시뮬레이션"으로만 활용.

---

## 모니터링 지표

### 통합 모니터링 테이블

| 구분 | 모니터링 항목 | 기준값 | 현재 상태 | 시나리오 연결 |
|------|------------|-------|------|-------------|
| 해자 | Data Center 분기 매출 YoY | +35%+ 유지 | ✅ Q4'25 +39% | <30% 시 Bear / <25% 시 Extreme Bear |
| 해자 | Instinct GPU 분기 매출 | 공시 데이터 (Lisa Su 코멘트) | ⚠️ 회사 공시 의존 | 감속 시 Bear 경사 |
| 해자 | 서버 CPU revenue share (Mercury) | 40%+ 유지 | ✅ Q1'25 41% | <38% 시 EPYC 해자 약화 |
| 해자 | ROCm MLPerf 제출 비율 | 20%+ | ⚠️ <10% 추정 | <10% 지속 시 Bear / parity 달성 시 Base 확고 |
| 해자 | MI350/MI450 양산 일정 | MI450 2H'26 정시 | 진행 중 | 6개월+ 지연 시 Bull 붕괴, Bear 경사 |
| 해자 | Ryzen DIY 점유 (Mindfactory) | 75%+ 유지 | ✅ ~80% | 급락 시 Client 해자 약화 |
| 해자 | Embedded 분기 매출 YoY | 플러스 전환 지속 | ✅ Q4'25 +3% | 재하락 시 Xilinx 시너지 실패 |
| 리스크 | OpenAI 첫 1GW 배치 | 2H'26 달성 | 진행 중 | 6개월+ 지연 시 Bull 붕괴, Bear 즉시 진입 |
| 리스크 | OpenAI ARR + 자금 조달 | ARR 2026 $20B+ 달성 | 2025 말 $11.6B | 정체·자금 실패 시 Extreme Bear 트리거 |
| 리스크 | Rubin 성능 벤치마크 | vs MI450 ±10% 이내 | 공개 전 | 2x+ 리드 시 Bear 진입 |
| 리스크 | 하이퍼스케일러 자체 ASIC 비중 | <30% 유지 | 15~20% ⚠️ | ≥30% 시 Bear 경사 |
| 리스크 | Intel 18A 수율/양산 시점 | 2026 양산 | 지연 지속 ✅ | 성공 시 Bear 진입 |
| 리스크 | AMD 희석주식수 추이 | +5%+ 증가 시 | 모니터링 필요 | Warrant 대량 행사 시 주당 지표 -10% |
| 리스크 | Top-4 하이퍼스케일러 분기 캐펙스 YoY | +15%+ 유지 | ✅ 현재 +60% | <0% 시 Bear / <-10% 시 Extreme Bear |
| 경쟁 | 머천트 AI 가속기 2위 매출 규모 | AMD DC 성장 >30% YoY | ✅ Q4 +39% | <30% 시 2위 지위 약화 |
| 경쟁 | Helios rack 수주/배치 건수 | Q4'26 이후 공개 | 아직 | 수용 실패 시 rack-scale 차별화 실패 |
| 경쟁 | ROCm "Parity by end 2026" | 2026 말 MLPerf 판정 | 진행 중 | 실패 시 Bear 확정 |
| 매크로 | 10Y Treasury | 5%+ 돌파 | 4.31% ✅ | 5%+ 시 멀티플 압축 |
| 매크로 | PHLX Semi (SOXX) YoY | -20%+ 이탈 | 모니터링 | -30%+ 시 Extreme Bear 경사 |

### 즉시 재검토 트리거

- OpenAI 첫 1GW 2H'26 배치 지연 (3+ 개월) or 계약 조건 축소 발표
- MI450 양산 수율 문제 or 2H'26 출시 지연
- ROCm "parity by end 2026" 목표 달성 실패 (MLPerf 기준)
- AMD Data Center 분기 매출 YoY +25% 밑으로 하락
- Intel 18A 양산 성공 + EPYC 점유율 감소 시작
- Forward PE 40x 돌파 or 20x 이하 급락
- OpenAI 재무 악화 or Warrant 조건 재협상 뉴스
- NVDA Rubin 가격 -20%+ 인하 발표
- TSMC 대만 공급 중단 사태
