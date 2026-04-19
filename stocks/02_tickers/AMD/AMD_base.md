# AMD — Advanced Micro Devices, Inc.
> x86 서버·클라이언트 CPU 2위, AI 가속기 머천트 2위 — Data Center(Instinct GPU + EPYC CPU) + Client/Gaming(Ryzen) + Embedded(Xilinx) 4개 세그먼트 구조, NVDA 대안 포지셔닝의 유일 후보

---

## 투자 thesis

- **AI GPU Second Source 지위 + OpenAI 6GW 계약 확보 — 효율적 규모 + 장기 계약** → FY25 Data Center 매출 $16.6B(+32% YoY), MI350 양산·MI450 2H'26 출시. OpenAI 6GW 멀티제너레이션 파트너십(2025-10-06, 잠재 하드웨어 매출 $90B) 확보, 첫 1GW 2H'26 배치 → 하이퍼스케일러·프론티어 랩의 NVDA 단독 의존 회피 수요가 AMD에 구조적으로 유입
- **x86 서버 CPU 점유율 급성장 — 원가·성능 우위** → 2017년 2% → 2025년 36.5% (revenue share Q1'25 41%) 서버 CPU 점유. EPYC이 Intel Xeon 대비 성능·전력효율 우위. FY25 Client+Gaming $14.6B(+51%), 5세대 EPYC(Turin) + 6세대 Venice(256 코어 2nm)로 추가 점유율 확장 여력
- **Heterogeneous full-stack 플랫폼 — 전환비용 + 무형 자산** → CPU(EPYC/Ryzen) + GPU(Instinct) + DPU + FPGA(Xilinx) + Adaptive Computing 일체형. Helios rack(72 MI455X, 2.9 exaFLOPS FP4) = 랙 단위 판매 가능한 유일한 NVDA 대안. FY25 Non-GAAP Op Income $7.8B(+69%), EPS $4.17(+38%)

**매수 근거 작성일**: 2026-04-19
**현재가**: $277.11 (2026-04-18 종가, 52주 고점 $281.05 대비 -1.4%, 저점 $83.75 대비 +231% / 1년 수익률 +218%)
**목표가**: $178 (Base DCF 가중평균 내재가치 — 아래 8-3 참조)
**투자 기간**: 3년 (FY28까지)

> 현재가 대비 가중평균 내재가치 **-35.8%**. 1년 +218% 랠리로 OpenAI 6GW 파트너십·MI450 기대를 이미 선반영. 매수 판정 기준(20%+ 할인)과 **반대 방향(35%+ 프리미엄)**. 본 세션 결과 **"비중축소"** (상세 9번). 단, MI450 2H'26 양산 실제 실적·OpenAI 첫 1GW 배치 확인 시 Bull 진입 경로 재평가 필요.

---

## 사업 구조 및 경제적 해자

### 2-1. 세그먼트 구조 요약

FY2025 (2025-12-27 종료) 연간 매출 $34.6B (+32% YoY) 기준:

| 세그먼트 | 수익원 | 규모 지표 (FY25) | 해자 유형 | 해자 강도 |
|---------|------|---------|---------|---------|
| **Data Center** | Instinct GPU (MI300X/350/400/450) + EPYC 서버 CPU + Pensando DPU | $16.6B (48%), YoY +32% | 효율적 규모, 원가/성능 우위, 장기 계약(OpenAI 6GW), 무형 자산(EPYC 서버 인증) | **Narrow** |
| **Client** | Ryzen 데스크톱/노트북 CPU (Zen 5/6) | $10.6B (31%), YoY +51% | 원가/성능 우위, 브랜드 | Narrow |
| **Gaming** | Radeon GPU + 콘솔 세미커스텀(PS5/XBOX) | ~$2.8B (8%), Q4 +50% YoY | 장기 계약(Sony/MS), 브랜드 | Narrow |
| **Embedded** | Xilinx FPGA, Versal Adaptive SoC | ~$3.5B (10%), FY24 -33% 저점에서 회복 중 (Q4'25 +3% YoY) | 전환비용(FPGA 툴체인), 무형 자산(Xilinx IP) | **Narrow** (일부 Wide 지점) |

> 출처: AMD Q4 FY2025 earnings release(2026-02-03), 10-K(2026-02-04 접수). 세그먼트 합계는 round 후 표기. Data Center가 48% 비중으로 최대 세그먼트이자 성장 드라이버.

### 2-2. 세그먼트별 상세

#### Data Center — 효율적 규모 + 원가/성능 우위 + 장기 계약 (핵심 Narrow Moat)

**사업 구조**: (i) AI 학습·추론용 Instinct GPU 시리즈(MI300X·MI325X·MI350·MI355X, 2H'26 MI450/MI455X) (ii) 서버 CPU EPYC(5세대 Turin, 6세대 Venice 2nm 256코어 예정) (iii) Pensando DPU + Arista/Broadcom 대안 네트워크. Hyperscaler(MSFT/AWS/META/GOOG/ORCL), 주권 AI, 네오클라우드, 프론티어 랩(OpenAI, Anthropic 루머)이 고객.

| 해자 유형 | 내용 |
|---------|------|
| **효율적 규모 (GPU)** | TSMC 3nm/2nm CoWoS 공정 접근권, HBM4 공급망 선점. MI400 = 432GB HBM4(NVDA B200 288GB 대비 +50%), 메모리 대역 19.6TB/s (B200 8TB/s의 2.45x). 머천트 AI 가속기에서 NVDA에 이어 유일한 credible 2위 공급자 |
| **원가/성능 우위 (EPYC)** | Zen 5c 코어 밀도가 Intel Xeon Granite Rapids 대비 성능/와트 20~40% 우위. Q1'25 x86 서버 매출 점유 41% 달성(Mercury Research). 하이퍼스케일러는 TCO 최적화로 AMD 선호 강화 |
| **장기 계약 + 고객 락인** | OpenAI 6GW 멀티제너레이션(2025-10-06, 첫 1GW 2H'26, 잠재 매출 $90B) + 8/10 Top AI 기업이 Instinct 프로덕션 사용. Sony/MS 콘솔 장기 세미커스텀(Gaming 세그먼트 이전) 사례 참고 — 일단 설계 채택 시 세대 교체 시까지 공급 |
| **무형 자산 (Xilinx·Pensando 통합)** | ROCm 6.0+(FP8, 멀티-GPU, PyTorch 공식) + Helios rack 레퍼런스(72 MI455X, 31TB HBM4, 2.9 exaFLOPS FP4). OCP(Open Compute Project) 표준 채택으로 Meta 등 오픈 표준 선호 고객 확보 |

**주요 고객·수주·마일스톤 (2026-04 기준)**:

| 계약/수주 | 규모 | 시점 |
|---------|------|------|
| OpenAI 6GW Multi-year Partnership | 잠재 $90B 하드웨어, 멀티제너레이션 Instinct | 첫 1GW 2H'26 |
| OpenAI Warrant | 최대 160M 주 @ $0.01 (~10% 희석) | 성과·주가 마일스톤 달성 시 |
| Oracle Cloud MI300X/MI355X 계약 | 30,000+ MI300X, MI355X 확장 중 | 진행 중 |
| MSFT Azure, Meta, AWS, Google Cloud MI300X 배치 | 8/10 Top AI 기업 Instinct 프로덕션 사용 | 진행 중 |
| MI350 양산 | H1'26 ramp | Q1'26 $100M MI308 China 매출 제외 |
| MI450 + Helios rack | 2H'26 양산 (Q3 초기, Q4 볼륨) | Q4'26~FY27 |
| MI500 (CDNA 6, 2nm, HBM4E) | 2027 | 양산 계획 |
| 6세대 Venice EPYC (Zen 6, 2nm, 256코어) | 2026~2027 | 양산 계획 |

> **판단 포인트 (의심)**: OpenAI 6GW 계약은 LOI/MOU 성격이 강하며 구속력 있는 최종 계약 전환 시점·조건 미공개. OpenAI 워런트($0.01 × 160M주 = OpenAI에 $27.7B 이익 @현재가) 구조는 매출 인식 시점에 맞춘 파생상품 회계 이슈 잠재. $90B 잠재 매출은 AMD-OpenAI 양사의 표기이나 실현 조건(가격·물량·기간) 불확실.

#### Client — 원가/성능 우위 + 브랜드

**사업 구조**: Ryzen 데스크톱·노트북 CPU. Zen 5(Granite Ridge/Strix Point) 2024 출시 후 FY25 +51% 성장, AI PC 트렌드 수혜. Intel Core Ultra 대비 성능·효율 우위가 지속되며 데스크톱 DIY 시장 ~80% 점유(Mindfactory 등 유럽 기준).

| 해자 유형 | 내용 |
|---------|------|
| **원가/성능 우위** | Zen 5/6 코어 아키텍처가 Intel 대비 IPC·전력효율 리드. AI PC(NPU 통합 Ryzen AI 300) 트렌드로 OEM 채택 확대 |
| **브랜드** | DIY/게이머 커뮤니티에서 "AMD = 가성비+성능" 인식 확립 (2016년 Ryzen 재출시 후 10년). Mindfactory 기준 EU DIY 시장 점유 80%+ |

**핵심 리스크**: 노트북 OEM 채택 확대는 Intel Turbo Lake 등 반격 지속 시 경쟁 심화. 서버 CPU와 달리 Client는 B2C 성격이라 사이클 변동 큼.

#### Gaming — 장기 계약 + 브랜드 (Narrow)

**사업 구조**: (i) Radeon 디스크리트 GPU (RX 9000 시리즈, RDNA 4) (ii) 콘솔 세미커스텀(PS5, PS5 Pro, Xbox Series, 차세대 PS6/Xbox 개발 중). Q4 FY25 Gaming $843M(+50% YoY) — RX 9070 출시 + 콘솔 수요 회복.

| 해자 유형 | 내용 |
|---------|------|
| **장기 계약 (콘솔)** | Sony·MS와 다세대 세미커스텀 계약. 차세대 PS6/Xbox도 AMD 채택 유력 (TSMC 미세공정 접근권 + Xilinx/Radeon IP 통합 우위) |
| **브랜드 (디스크리트 GPU)** | NVDA GeForce에 이어 2위, DIY 게이머 일부 확보. 레이트레이싱/FSR 격차가 관건 |

**핵심 리스크**: 디스크리트 GPU는 NVDA DLSS/레이트레이싱 격차로 시장점유 15~20% 수준 정체. 콘솔 사이클이 5~7년 주기로 안정적이나 성장 동력 아님.

#### Embedded (Xilinx) — 전환비용 + 무형 자산 (Narrow, 일부 Wide 지점)

**사업 구조**: Xilinx(2022년 인수, $49B) + Pensando(2022년 인수, $1.9B) 통합 세그먼트. FPGA(Field-Programmable Gate Arrays), Adaptive SoC(Versal), 네트워크(SmartNIC/DPU). 고객: 항공우주·방산, 테스트·측정, 통신 인프라, 산업 자동화, 자동차 ADAS.

| 해자 유형 | 내용 |
|---------|------|
| **전환비용 (FPGA 툴체인)** | Vivado·Vitis 개발 환경이 수십 년 축적된 고객 IP·디자인 자산 보유. FPGA 대안(Intel Altera, 라티스)으로 전환 시 설계 재검증 필요 — 방산·항공은 재인증 1~3년 소요 |
| **무형 자산 (Xilinx IP)** | Versal AI Core/Premium 등 AI 엣지 추론 특화 제품군, 고대역 SerDes IP, RF IP. Intel이 2024년 Altera 사업 분사 중이라 FPGA 머천트 시장에서 AMD 지위 강화 |

**현재 상태**: FY24 -33% 급감(고객 재고조정) 후 FY25 완만 회복 — Q1-Q2'25 각 $823-824M(-3~4% YoY), Q4'25 $950M(+3% YoY). FY26 mgmt 가이던스는 "progressive recovery throughout 2026".

**핵심 리스크**: Xilinx 인수 후 시너지 실현이 기대 대비 느림. 사이클 기업 특성상 매출 예측 어렵고 FY24~25 기간 구조적 성장 증거 제한적. 그러나 방산·항공 등 Wide-moat 영역 의존도는 유지.

---

## 해자 팩트체크

### Data Center 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| FY25 Data Center 매출 $16.6B (+32% YoY) | AMD Q4'25 earnings release 2026-02-03 | ✅ |
| AI 가속기 머천트 시장 점유 5~8% (vs NVDA 80~86%) | MLQ.ai, Silicon Analysts 2026 추정 | ✅ |
| 서버 CPU 점유 36.5% (revenue 41% Q1'25) | Mercury Research 2025 Q1 보고서 | ✅ |
| EPYC 하이퍼스케일러 TCO 우위 20~40% | Microsoft Azure, Google Cloud 공개 벤치마크 | ⚠️ (부분 — 워크로드별 편차) |
| MI350 인퍼런스 성능 vs B200 +30%, TPD +40% | AMD 공식 발표 (Llama 3.1 405B 기준) | ⚠️ (회사 주장) |
| OpenAI 6GW 멀티제너레이션 계약 | AMD/OpenAI 공식 2025-10-06 발표 | ✅ |
| OpenAI Warrant 160M 주 @ $0.01 (~10%) | AMD 공식 보도자료 + SEC 8-K | ✅ |
| 잠재 매출 $90B (OpenAI 딜) | AMD/OpenAI 공동 성명 | ⚠️ (잠재값, 계약 구조 불투명) |
| 8/10 Top AI 기업 Instinct 프로덕션 사용 | Lisa Su Q4'25 earnings call 코멘트 | ⚠️ (회사 자체 공시) |
| Helios rack 72 GPU, 2.9 exaFLOPS FP4 | AMD CES 2026 발표 + OCP 공개 | ✅ |
| MI400/450 HBM4 432GB, 대역 19.6TB/s | AMD 공식 스펙 발표 | ✅ |

**해자 리스크**:
- **ROCm vs CUDA 소프트웨어 격차**: CUDA 92% AI 프레임워크 점유 vs ROCm <5%. 개발자 진입장벽·디버깅 툴 성숙도 여전히 열위. ROCm 6.0+(PyTorch 공식 지원)로 개선 중이나 "parity by end 2026"은 Lisa Su 목표이지 확정 사항 아님 — **현실화 2026~2027 진행 중**
- **NVDA Rubin(2H'26) 성능 리드 재확대**: NVDA 연간 사이클(Blackwell→Rubin→Feynman)이 AMD 18~24개월 사이클 대비 6~12개월 앞섬. MI450이 Rubin 대비 메모리 용량(432 vs 288GB) 우위이나 연산성능·NVLink 등 인터커넥트 격차 잔존 — **현실화 2H'26**
- **하이퍼스케일러 커스텀 ASIC**: Google TPU v7, AWS Trainium3, MSFT Maia 200, Meta MTIA가 인퍼런스 15~25% 점유. AMD는 NVDA와 함께 머천트 시장이 좁아질 위험 — **현실화 2026~2028 진행 중**
- **OpenAI 단일 고객 리스크**: 6GW 딜이 AMD Data Center 성장의 핵심. OpenAI 재무 악화·자체 칩 개발 성공·계약 조건 재협상 시 Data Center 성장 경로 훼손 — **현실화 상시**

### Client/Gaming 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| Ryzen EU DIY 시장 점유 80%+ (Mindfactory) | Mindfactory 2025 공식 판매 데이터 | ✅ |
| Zen 5 vs Intel Core Ultra IPC/와트 우위 | Phoronix, AnandTech 독립 벤치마크 | ✅ |
| Sony/MS 콘솔 장기 세미커스텀 | 각 사 공식 공개 | ✅ |
| RX 9070 레이트레이싱 vs NVDA 4070 Ti Super | 독립 벤치마크 (Tom's Hardware 등) | ⚠️ (부분 — 워크로드별 편차, DLSS 격차) |
| Gaming 세그먼트 매출 회복(+50% YoY Q4) | AMD Q4'25 earnings | ✅ |

**해자 리스크**:
- **Intel Turbo Lake/Panther Lake 반격**: 18A 공정 양산 시 AMD Client 점유율 증가 둔화 — 현실화 2026~2027
- **디스크리트 GPU NVDA 추격 어려움**: DLSS 4.0 + RTX 격차 지속 — 상시

### Embedded (Xilinx) 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| FPGA 머천트 시장 ~50%+ (Xilinx 역사적 점유) | 2022 인수 시 시장 데이터, Intel Altera 분사로 경쟁 약화 | ✅ |
| 방산·항공 FPGA 재인증 1~3년 | 업계 관행 (MIL-STD, DO-254) | ✅ |
| FY24 Embedded -33% 급감 | AMD FY24 10-K | ✅ |
| Q4'25 Embedded $950M (+3% YoY) 회복 | AMD Q4'25 earnings | ✅ |

**해자 리스크**:
- **사이클 기업 변동성**: 통신·산업·자동차 고객 재고조정이 Embedded 매출 주기적으로 감소. 구조적 성장 증거 제한 — 현실화 상시
- **Intel Altera 분사로 FPGA 머천트 시장 경쟁 약화** (해자 강화 요인)

#### 해자 리스크 종합

| 세그먼트 | 핵심 모트 리스크 | 현실화 시점 |
|---------|--------------|-----------|
| Data Center | ROCm 소프트웨어 격차가 CUDA 대비 parity 미달 | 2026~2027 진행 중 |
| Data Center | NVDA Rubin(2H'26) 성능 리드 재확대 | 2H'26~FY27 |
| Data Center | 하이퍼스케일러 커스텀 ASIC 점유 확대 | 2026~2028 진행 중 |
| Data Center | OpenAI 단일 고객 집중도 | 상시 |
| Client | Intel 18A 공정 양산 성공 시 반격 | 2026~2027 |
| Gaming | 디스크리트 GPU NVDA 격차 지속 | 상시 |
| Embedded | 사이클 변동성 + Xilinx 시너지 실현 지연 | 상시 |

> **판단 포인트 (의심)**: AMD의 해자는 단일 Wide 해자 없음(CUDA-NVDA, 브랜드-Intel 모두 부분 추격 가능한 수준). "NVDA 유일 대안"은 머천트 시장 2위 지위에서 비롯된 **구조적 수요**이지 AMD 고유의 해자라고 보긴 어렵다. OpenAI 6GW가 큰 딜이나 단일 고객 의존 리스크로 내성 약함.

---

## 해자 강도 평가 — "이 정도 리스크면 충분히 높은 해자인가?"

### 평가 기준
Morningstar Wide Moat 기준: "향후 20년 이상 초과이익을 유지할 수 있는 구조적 우위"
→ 리스크의 현실화 시점이 투자 기간(3년, FY28까지)보다 먼 경우 해자 유효.

### 식별된 해자 리스크 vs 현실화 시점

| 리스크 | 내용 | 현실화 시점 | 해자 훼손 정도 |
|--------|------|-----------|--------------|
| ROCm 소프트웨어 parity 실패 | CUDA 락인 잔존 → 학습·프론티어 모델 NVDA 편중 | 2026~2027 진행 중 | **높음** — Data Center 성장 시나리오 직접 훼손 |
| NVDA Rubin 성능 리드 | MI450 경쟁 우위 일부 상실 | 2H'26 | **중간** — AMD는 가격·가용성·OpenAI 계약으로 대응 |
| 하이퍼스케일러 ASIC 확대 | 머천트 시장 축소 (NVDA/AMD 모두 피해) | 2026~2028 | **중간** — 주권 AI·엔터프라이즈 시장으로 대체 가능 |
| OpenAI 단일 고객 집중도 | 6GW 딜 AMD DC 성장의 핵심 변수 | 상시 | **높음** — OpenAI 변동성이 AMD 밸류에이션 직접 연결 |
| Intel 18A 반격 | Client 세그먼트 성장 둔화 | 2026~2027 | **중간** — Client는 Data Center 대비 비중 낮음 |
| Embedded 사이클 | 매출 변동성 지속 | 상시 | 낮음 — 10% 비중 |

### 판정
**AMD = Narrow Moat ⚠️**

핵심 근거 3가지:
① **시간 지평 관점**: ROCm parity 미달 + OpenAI 단일 고객 집중도는 투자 기간(3년) 내 결정적 훼손 가능성 존재. NVDA의 Wide Moat(CUDA 20년 축적)와 달리 AMD의 해자는 **후발주자 포지션**에서 나옴 — NVDA가 약화되거나 CUDA 락인이 깨지는 시점까지만 유효한 "상대적 해자"
② **전략적 헤지 관점**: 4개 세그먼트 다각화(Data Center 48% + Client 31% + Gaming 8% + Embedded 10%)가 단일 세그먼트 충격 흡수. 그러나 성장 드라이버가 Data Center에 집중되어 있어 실질 헤지 효과는 제한적
③ **계약/구조적 보호 관점**: OpenAI 6GW + 서버 CPU EPYC 하이퍼스케일러 채택 확대 + Sony/MS 콘솔 다세대 계약이 FY27~FY28 매출 가시성 일부 확보. 그러나 NVDA의 OpenAI 10GW + Stargate 규모 대비 절대적으로 작음

**단, 주의 구간**: Narrow 판정이라도 아래 선행 지표가 균열 신호
- **OpenAI 첫 1GW 2H'26 배치 일정**: 6개월+ 지연 시 OpenAI 딜 전체에 대한 회의감 확산
- **MI450 양산 수율 + Helios rack 수주**: Q4'26 실제 분기 매출 공시 시 확인
- **ROCm vs CUDA parity 측정**: MLPerf 주요 벤치마크에서 AMD 비율 30%+ 돌파 여부
- **OpenAI 재무 상태**: OpenAI ARR·자본 확충·파산 위험(MI450 계약 이행 능력 직접 연결)

---

## 경쟁 구도 및 경쟁 우위

### 5-1. 경쟁사 식별 및 포지셔닝

| 경쟁사 | 시가총액 (2026-04) | 핵심 사업 영역 | 시장점유율 | 포지셔닝 |
|--------|-----|-------------|----------|---------|
| **AMD** | ~$457B | Instinct GPU + EPYC CPU + Ryzen + Xilinx | AI 가속기 5~8%, 서버 CPU 36.5%, DIY Ryzen 80%+ | NVDA 대안 + Intel 추격자 |
| NVIDIA (NVDA) | ~$4.6T | Data Center GPU + Networking | AI 가속기 80~86%, AI 프레임워크 92% | 표준 플랫폼, CUDA 락인 |
| Intel (INTC) | ~$100B | Xeon, Core Ultra, Gaudi 3, 18A 공정 | 서버 CPU 62% revenue(감소 중), Client 70%대 | 구조조정 중, Altera 분사 |
| Broadcom (AVGO) | ~$1.5T | 하이퍼스케일러 커스텀 ASIC | 커스텀 ASIC ~60% | AI ASIC 파트너 |
| Google / AWS / MSFT / Meta | ~$10T (합산) | TPU v7, Trainium3, Maia 200, MTIA | 각 사 내부 인퍼런스 확대 | 수직 통합, 비매출 |
| ARM (ARM) | ~$180B | Arm Neoverse 서버 코어(Nvidia Grace, AWS Graviton) | 서버 ~15% (ARM 기반) | 아키텍처 경쟁 |

### 5-2. 핵심 성장동력 경쟁 비교

| 성장동력 | AMD | NVDA | Intel | 판정 |
|---------|-----|------|-------|------|
| **AI GPU 성능(학습)** | MI355X, MI450(2H'26) | B200/GB200 + Rubin | Gaudi 3 (미미) | 🥈 AMD (격차 10~20%) |
| **AI GPU 성능(인퍼런스)** | MI355X Llama 3.1 405B +30% vs B200 (AMD 주장) | B200/H200 TensorRT-LLM | 미미 | 🥇 AMD (특정 워크로드) |
| **메모리/대역 스펙** | 432GB HBM4, 19.6TB/s (MI450) | 288GB HBM3e(B200), Rubin TBD | N/A | 🥇 AMD |
| **소프트웨어 생태계** | ROCm 6.0+ (<5% 점유) | CUDA 92% + cuDNN/NCCL/TensorRT | oneAPI (미미) | 🥉 AMD (3위) |
| **Networking(스케일업)** | Broadcom Tomahawk 6 의존 (UALink 지연) | NVLink/NVSwitch + InfiniBand/Spectrum-X ($31B+) | 미미 | 🥉 AMD |
| **서버 CPU 성능(per watt)** | EPYC Turin (Zen 5c) | Grace (Arm) | Xeon Granite Rapids | 🥇 AMD (vs Intel), 🥈 (vs Grace) |
| **제품 사이클 속도** | MI350(2025)→MI400(2H'26)→MI500(2027) | Hopper(22)→Blackwell(24)→Rubin(26) | 18A 양산 지연 | 🥈 AMD (NVDA 1년 리드) |
| **영업이익률(Non-GAAP)** | 22.5% (FY25) | 60%+ (FY26) | 10%대 | 🥈 AMD |
| **FCF 규모** | $2.1B (FY25) | $96.7B (FY26) | 적자/손실 | 🥈 AMD |

### 5-3. 경쟁 우위 원천 분석

**1. NVDA Second Source — 구조적 수요**
- 우위 내용: NVDA 단독 의존 회피 수요가 AMD에 지속적으로 유입. OpenAI 6GW가 대표 사례
- 정량 근거: 8/10 Top AI 기업 Instinct 병행 사용 (Lisa Su Q4'25 발표), Meta OCP 표준 Helios 채택
- 경쟁사 격차: Intel Gaudi는 거의 퇴출 수준, 머천트 2위 지위는 AMD가 사실상 독점
- 복제 난이도: **중간~높음** — GPU HW 역량 + HBM 공급망 접근 + 하이퍼스케일러 검증 트랙 필요. Intel이 복구하려면 2~3년+
- 격차 지속 기간 추정: **3~5년** (NVDA가 Wide Moat 유지하는 한 머천트 2위 자리는 안정)

**2. x86 서버 CPU 원가/성능 우위**
- 우위 내용: EPYC이 Intel Xeon 대비 5세대 연속(Milan→Genoa→Bergamo→Turin→Venice) 리드 유지
- 정량 근거: 서버 CPU revenue share 41% (2025 Q1, Mercury Research). 2017년 2% → 2025년 36.5%, 8년간 18배 성장
- 경쟁사 격차: Intel이 18A 양산 지연 + Altera 분사 → 구조조정 모드. AMD는 TSMC 최선단 공정(3nm/2nm) 접근권 유지
- 복제 난이도: **매우 높음** — 10년+ 아키텍처 축적, 하이퍼스케일러 검증 트랙 기록
- 격차 지속 기간 추정: **5~7년** (Intel 턴어라운드 여부에 의존)

**3. Heterogeneous Compute Integration (CPU + GPU + DPU + FPGA)**
- 우위 내용: 단일 기업이 CPU·GPU·DPU·FPGA·Adaptive SoC를 모두 보유한 유일한 반도체사
- 정량 근거: Helios rack이 EPYC Venice CPU + MI455X GPU + Pensando DPU + (향후) Xilinx NIC 통합
- 경쟁사 격차: NVDA는 Grace(Arm) + GPU 제한, Intel은 GPU 퇴출, Broadcom은 ASIC·네트워크만
- 복제 난이도: **높음** — 기업 M&A(Xilinx $49B, Pensando $1.9B) 재현 어려움
- 격차 지속 기간: **5~10년**

**4. ROCm 소프트웨어 생태계 (불리한 원천 — 격차 관리가 핵심)**
- 우위 내용: 오픈소스 CUDA 대안, PyTorch 공식 지원, "wartime mode" 10x 가속
- 정량 근거: MLPerf 인퍼런스 벤치마크 제출 증가, Lisa Su "parity by end 2026" 목표
- 경쟁사 격차: CUDA 92% vs ROCm <5% — 여전히 큰 갭
- 복제 난이도: **낮음(우리가 복제해야 함)** — CUDA 10년+ 축적 따라잡기 어려움
- 격차 지속 기간 추정: **2~3년** 내 "practical parity" 달성 or 실패가 투자 thesis 결정

### 5-4. "왜 이 기업인가" — 투자 차별화 근거

1. **머천트 AI 가속기 2위 독점 지위**: NVDA 외 유일한 credible 대안. 하이퍼스케일러·프론티어 랩의 공급사 다각화 수요 = 구조적 tailwind — NVDA 점유 80~86% → 75%로 5pp 이동만 해도 AMD TAM $10B+ 추가
2. **EPYC 서버 CPU 점유율 복리 성장**: 2017년 2% → 2025년 36.5% (CAGR ~40%). 40% → 50% 달성 시 추가 $20B+ 매출 기여 잠재
3. **Heterogeneous full-stack 역량 (Xilinx 포함)**: CPU+GPU+DPU+FPGA 전방위 보유한 유일한 반도체사 — 엔터프라이즈·주권 AI 고객에게 원스톱 솔루션 제공 가능

**밸류에이션 비교 (2026-04 기준):**

| 지표 | AMD | NVDA | AVGO | Intel | 섹터 평균(반도체) | 프리미엄/디스카운트 |
|------|------|-----|------|------|--------------|----|
| Forward PE (FY26) | ~35x | 23.8x | ~35x | 적자/N/A | 25x | **프리미엄** |
| EV/EBITDA (TTM) | ~50x | ~30x | ~28x | N/A | 22x | **큰 프리미엄** |
| PEG (FY26~FY28 성장률) | ~1.0 (35% 성장) | ~0.4 | ~1.3 | N/A | ~1.0 | 섹터 평균 |
| FCF Yield (FY25) | ~0.5% ($2.1B/$457B) | 2.1% | 1.5% | 적자 | 3% | **큰 디스카운트** |
| EV/Sales (FY26E ~$42B) | ~10x | ~15x | ~20x | ~2x | ~5x | 프리미엄 |

**결론**: AMD는 NVDA 대비 Forward PE 프리미엄(+47%) — 이는 "NVDA Second Source 구조적 수요" + "AI 가속기 시장 점유율 확대 기대"가 반영된 프리미엄. **단, PEG 1.0은 성장 지속 조건부**이며, MI450 램프 실제 실적이 예상 대비 미달할 시 급격한 멀티플 압축 위험. NVDA의 PEG 0.4 대비 밸류에이션 매력도 낮음.

---

## 리스크 요인

### 1. ROCm 소프트웨어 생태계 격차 — CUDA Moat 유지 ⚠️

**리스크 설명**: CUDA 92% vs ROCm <5% 점유 격차. AI 학습·프론티어 모델은 여전히 NVDA 편중. Lisa Su "parity by end 2026" 목표 실패 시 AMD AI GPU 채택이 인퍼런스 특정 워크로드로 제한.

**규모/비중 정량화**: AMD Data Center 매출의 ~40%(추정)가 Instinct GPU. CUDA parity 실패 시 AMD AI GPU 성장 CAGR 60% → 30% 감소 가능 (Data Center 세그먼트 -20~30%pt 영향).

**상세 데이터**:

| 지표 | 현재 (2026) | 목표 (2026 말) | 판정 |
|------|-----------|-----------|------|
| AI 프레임워크 점유 | ROCm <5% | ROCm ~15~20% | 진행 중 |
| PyTorch 공식 지원 | Linux ✅, Windows preview | Windows 공식 | 진행 중 |
| MLPerf 벤치마크 제출 비율 | AMD <10% | 20~30% | 목표 |
| 독립 성능 벤치마크 (vs CUDA) | -18~27% | parity | 진행 중 |

**시나리오별 영향**:
- Base: ROCm 격차 일부 해소, 인퍼런스 워크로드 중심 채택 확대 — Data Center CAGR +45%
- Bear: ROCm parity 실패, 학습 워크로드 NVDA 편중 유지 — Data Center CAGR +25%
- Extreme Bear: ROCm 개발 지연 + 고객 이탈 — Data Center FY27 매출 정체

**완화 요인**: (a) 오픈소스 + Meta/MSFT 등 대형 고객의 다공급원 전략, (b) AMD "wartime mode" 10x 투자 가속, (c) PyTorch 2.x 공식 지원으로 진입장벽 저하

**팩트체크**: ✓ — ROCm 점유/벤치마크는 독립 소스(Phoronix, MLPerf) 확인 가능

### 2. OpenAI 단일 고객 집중도 리스크 ⚠️

**리스크 설명**: OpenAI 6GW 딜이 AMD FY27~FY28 Data Center 성장의 핵심 변수. OpenAI 자체 칩 개발 성공, 계약 조건 재협상, 재무 악화, 경영진 변동 시 AMD 밸류에이션 직접 타격.

**규모/비중 정량화**: OpenAI 딜 잠재 매출 $90B는 AMD FY25 총매출 $34.6B의 2.6배. FY27~FY30 기간 연 ~$15~25B 기여 가정 시 Data Center 매출의 40~50% 기여 가능.

**상세 데이터**:

| 항목 | 규모 | 시점 |
|------|------|------|
| 첫 1GW 배치 | ~$6~8B 매출 | 2H'26 시작 |
| 6GW 완료 | ~$90B 잠재 | 2027~2030 |
| OpenAI Warrant | 160M 주 (@$0.01) | 성과 마일스톤 |
| 희석 효과 | ~10% (mid-case) | 조건부 |

**시나리오별 영향**:
- Base: 첫 1GW 2H'26 정시 배치, 6GW 3~4년 분산 — Data Center 가이드 +60% CAGR 실현
- Bear: OpenAI 배치 지연 1~2 분기, 6GW 완료 늦어짐 — Data Center CAGR +35%
- Extreme Bear: OpenAI 재무 악화·계약 취소 — AMD AI 성장 경로 훼손, 멀티플 급락

**완화 요인**: (a) 8/10 Top AI 기업 Instinct 사용으로 고객 다각화, (b) 주권 AI·네오클라우드 시장 성장, (c) OpenAI 자금 조달 지속(Stargate $400B+)

**팩트체크**: ⚠️ — $90B 잠재 매출은 회사 주장, 실제 확정 계약 규모는 SEC 10-K 에서 Performance Obligations로 공시 확인 필요

### 3. NVDA Rubin(2H'26) 성능 리드 재확대 ⚠️

**리스크 설명**: NVDA Vera Rubin이 MI450보다 연산성능·NVLink·소프트웨어 모든 면에서 우위 확립 시 AMD의 머천트 2위 지위는 유지되나 점유율 확장은 제한.

**규모/비중**: AI 가속기 시장 점유 5~8% → 12~15% 확장 시나리오가 AMD Base의 핵심 가정. Rubin이 격차 재확대 시 점유율 확장 실패 → Bear 경로.

**시나리오별 영향**:
- Base: MI450 vs Rubin 성능 차 ±10%, AMD는 가격·가용성·OpenAI 계약으로 대응 → 12~15% 점유
- Bear: Rubin 성능 2x+ 리드 → AMD 점유 10% 미만 유지 → Data Center CAGR +25%
- Extreme Bear: Rubin + NVDA 공격적 가격 정책 → AMD 매출 정체

**완화 요인**: (a) Helios rack은 OCP 표준 채택으로 Meta·주권 AI 경쟁력 유지, (b) EPYC+Instinct 번들 판매, (c) 공급 부족 상황에서는 성능 격차 일부 허용 가능

**팩트체크**: ⚠️ — Rubin 실제 스펙/성능은 2H'26 양산 후 확인

### 4. 하이퍼스케일러 커스텀 ASIC 확대 ⚠️

**리스크 설명**: Google TPU v7, AWS Trainium3, MSFT Maia 200, Meta MTIA가 인퍼런스 15~25% 점유. AMD는 NVDA와 함께 머천트 시장 자체가 좁아질 리스크.

**규모/비중**: AMD 잠재 TAM이 AI 가속기 머천트 시장 $300~500B(2028E)의 2위(~15~20% 점유 목표). ASIC 점유 확대 시 머천트 TAM 자체 축소.

**시나리오별 영향**:
- Base: ASIC 15~20% 점유, 머천트 시장은 하이퍼스케일러 캐펙스 증가로 성장 유지 (절대 매출 증가)
- Bear: ASIC 30%+ 점유 → 머천트 시장 정체 → AMD 점유율 확장 실패

**완화 요인**: (a) AMD는 주권 AI·엔터프라이즈·네오클라우드 비-하이퍼스케일러 시장 확대, (b) Custom ASIC은 내부 워크로드 한정, 외부 확산은 Broadcom에만 유리

**팩트체크**: ✓ — 각 ASIC 공식 공개

### 5. Intel 18A 공정 턴어라운드 리스크 ⚠️

**리스크 설명**: Intel이 2025~2026 18A 공정 양산 성공 시 서버·Client CPU 반격 → AMD 점유율 확장 둔화.

**규모/비중**: EPYC 서버 CPU 점유 36.5% → 45~50% 확장이 AMD Bull 가정. Intel 18A 성공 시 40% 부근에서 정체 가능.

**시나리오별 영향**:
- Base: Intel 18A 양산 지연 지속 → AMD 서버 CPU 점유 40~43% 확장
- Bear: Intel 18A 성공 → AMD 점유 36~38% 정체

**완화 요인**: (a) Intel이 Altera 분사 중이라 자원 분산, (b) TSMC 최선단 공정 접근권은 AMD가 유지, (c) Client CPU에도 같은 리스크이나 AI PC 트렌드로 AMD 수혜

**팩트체크**: ⚠️ — Intel 18A 실제 수율은 2026년 하반기 확인

### 6. OpenAI Warrant 희석 리스크 ⚠️

**리스크 설명**: OpenAI가 최대 160M AMD 주를 $0.01에 매수 가능한 Warrant(성과·주가 마일스톤 달성 시). 현재 시총 기준 ~10% 희석 효과. OpenAI에 최대 $44B($277 × 160M) 이익 이전 구조.

**규모/비중**: 현재 1.65B 주 → 최대 1.81B 주 (+10%) 희석. 주당 지표 모두 -10% 영향.

**시나리오별 영향**:
- Base: 마일스톤 일부 달성, 50~100M 주 행사 → 주당 EPS -5~7%
- Bull: 전 마일스톤 달성 → -10% 희석

**완화 요인**: (a) Warrant 조건이 주가 마일스톤에 연동되어 있으면 주주와 이해관계 일치, (b) OpenAI가 AMD 생태계 참여 인센티브로 작용

**팩트체크**: ❓ — Warrant 마일스톤 조건 세부사항 SEC 10-K·8-K 추가 확인 필요

### 7. 밸류에이션 리스크 (현재 Forward PE 35x) ⚠️

**리스크 설명**: AMD 1년 +218% 상승 후 Forward PE ~35x = NVDA(24x) 대비 47% 프리미엄. 성장 감속·마일스톤 미달 시 멀티플 급락 위험.

**규모/비중**: PE 35x → 22x 복귀 시 주가 -37%. 역사적 AMD PE 범위 20~50x (사이클 따라).

**시나리오별 영향**: Extreme Bear에 PE 12x 반영 (Cisco 2002 수준), Bear 20x, Base 28x, Bull 35x

**완화 요인**: PEG 1.0은 섹터 평균 수준이며 극단 고평가는 아님. 그러나 NVDA 대비 절대 프리미엄.

**팩트체크**: ❓ — 과거 사이클 벤치마크(예: AMD 2000년대 Opteron 사이클) 적용 가능성 논쟁

### 8. AI Capex Peak 조기 도래 ⚠️

**리스크 설명**: 2026~2027 하이퍼스케일러 캐펙스 $700B+ 피크 후 감속. AMD는 NVDA보다 성장 의존도 높아 캐펙스 감속 시 더 큰 타격.

**규모/비중**: AMD Data Center CAGR 60% 가정이 하이퍼스케일러 캐펙스 +15~20% 성장 전제. 캐펙스 감속 시 Data Center CAGR 30%로 감소.

**시나리오별 영향**: Bear 시나리오의 핵심 변수. Extreme Bear에서 캐펙스 -20% 가정.

**완화 요인**: (a) OpenAI 6GW 다년 확정 수요, (b) 인퍼런스 TAM 지속 성장, (c) 주권 AI 확산

**팩트체크**: ✓ — 각 하이퍼스케일러 2026 캐펙스 공식 가이던스

#### 리스크 독립성 확인

- 리스크 1(ROCm) + 리스크 3(Rubin)은 **상관성 높음** — 둘 다 AI GPU 경쟁력 요인
- 리스크 2(OpenAI) + 리스크 8(Capex Peak)은 **일부 상관** — 거시 캐펙스 감속 시 OpenAI 배치도 지연
- 리스크 4(ASIC)는 **반대 방향 조정** — ASIC 확대가 AMD+NVDA 둘 다 피해이나 NVDA가 더 크게 피해 (AMD 상대적 수혜)
- 리스크 5(Intel)는 **독립** — 서버/Client CPU 한정
- 리스크 6(Warrant) + 리스크 7(밸류에이션)은 **파생 리스크** — 다른 리스크 현실화 시 자동 발동
- **독립적 사업**: Embedded(Xilinx)는 AI 사이클과 독립 — 방산·항공 등 안정 수요

#### 리스크 수치 팩트체크 종합

| # | 항목 | 판정 | 비고 |
|---|------|------|------|
| 1 | CUDA 92% vs ROCm <5% | ✓ | 독립 소스 |
| 2 | OpenAI 6GW, $90B 잠재 | ⚠️ | LOI 성격, 구속력 미확인 |
| 3 | OpenAI Warrant 160M 주 @ $0.01 | ✓ | SEC 8-K |
| 4 | AMD AI 가속기 5~8% 점유 | ✓ | MLQ.ai/Silicon Analysts |
| 5 | 서버 CPU 점유 36.5% | ✓ | Mercury Research |
| 6 | FY25 FCF $2.1B | ✓ | AMD 10-K |
| 7 | MI350 vs B200 인퍼런스 +30% | ⚠️ | AMD 자체 주장 |
| 8 | 8/10 Top AI 기업 Instinct 사용 | ⚠️ | 회사 자체 공시 |
| 9 | Helios 2.9 exaFLOPS FP4 | ✓ | AMD 공식 + OCP |
| 10 | MI400 432GB HBM4 | ✓ | AMD 공식 |
| 11 | Forward PE 35x | ❓ | FY26 EPS 컨센서스 추정치 기반 |
| 12 | Intel 18A 공정 양산 지연 | ⚠️ | Intel 공식 로드맵 대비 슬립 |

---

## 모니터링 지표

### 해자 건전성 모니터링

| 출처 | 모니터링 항목 | 기준값 | 현재 상태 |
|------|------------|-------|----------|
| DC 해자 | Data Center 분기 매출 YoY | +35%+ 유지 | ✅ Q4'25 +39% |
| DC 해자 | Instinct GPU 분기 매출 | 공시 데이터 (Lisa Su 코멘트 의존) | ⚠️ 회사 공시 의존 |
| DC 해자 | 서버 CPU revenue share (Mercury) | 40%+ 유지 | ✅ Q1'25 41% |
| DC 해자 | ROCm MLPerf 제출 비율 | 20%+ | ⚠️ <10% 추정 |
| DC 해자 | MI350/MI450 양산 일정 | MI450 2H'26 정시 | 진행 중 |
| DC 해자 | OpenAI 첫 1GW 배치 | 2H'26 달성 | 진행 중 |
| Client 해자 | Ryzen DIY 점유 (Mindfactory) | 75%+ 유지 | ✅ ~80% |
| Embedded 해자 | 분기 매출 YoY | 플러스 전환 지속 | ✅ Q4'25 +3% |

### 리스크 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| 리스크 1 ROCm | MLPerf NVDA vs AMD 점유 | AMD <10% 지속 | ~<10% ⚠️ |
| 리스크 2 OpenAI | OpenAI ARR + 자금 조달 상황 | ARR 감속 or 추가 자금 조달 실패 | 모니터링 필요 |
| 리스크 2 OpenAI | 첫 1GW 배치 일정 | 2H'26 미달 시 | 진행 중 |
| 리스크 3 Rubin | Rubin 성능 벤치마크 | Blackwell 대비 2x+ | 공개 전 |
| 리스크 4 ASIC | 하이퍼스케일러 자체 ASIC 캐펙스 비중 | 30%+ 돌파 | 15~20% ⚠️ |
| 리스크 5 Intel | Intel 18A 수율/양산 시점 | 2026 양산 성공 | 지연 지속 ✅ |
| 리스크 6 Warrant | AMD 희석주식수 추이 | +5%+ 증가 시 | 모니터링 필요 |
| 리스크 7 Valuation | Forward PE | 40x+ 돌파 or 20x 급락 | ~35x ⚠️ |
| 리스크 8 Capex | Top-4 하이퍼스케일러 분기 캐펙스 YoY | +15% 밑으로 | 현재 +60% ✅ |
| 매크로 | 10Y Treasury | 5%+ 돌파 | 4.31% ✅ |
| 매크로 | PHLX Semi (SOXX) YoY | -20%+ 이탈 | 모니터링 |

### 경쟁 우위 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| NVDA Second Source | 머천트 AI 가속기 2위 매출 규모 | AMD DC 성장 <30% YoY | ✅ Q4 +39% |
| EPYC | 서버 CPU revenue share (Mercury) | 40% 밑으로 하락 | ✅ 41% Q1'25 |
| Heterogeneous | Helios rack 수주/배치 건수 | Q4'26 이후 공개 | 아직 |
| ROCm | "Parity by end 2026" 마일스톤 | 2026 말 MLPerf 판정 | 진행 중 |

### 즉시 재검토 트리거

- OpenAI 첫 1GW 2H'26 배치 지연 (3+ 개월) or 계약 조건 축소 발표
- MI450 양산 수율 문제 or 2H'26 출시 지연
- ROCm "parity by end 2026" 목표 달성 실패 (MLPerf 기준)
- AMD Data Center 분기 매출 YoY +25% 밑으로 하락
- Intel 18A 양산 성공 + EPYC 점유율 감소 시작
- Forward PE 40x 돌파 or 20x 이하 급락
- OpenAI 재무 악화 or Warrant 조건 재협상 뉴스

---

## DCF 시나리오 & 가치평가

### 8-0. DCF 방법론 선택

- **적용 방식**: **A. FCF DCF** (Exit Multiple 방식 Terminal + Forward PE 교차검증)
- **선택 근거**: AMD는 (i) 단일 산업(반도체) 내 4개 세그먼트이나 모두 유사한 멀티플 체계(반도체 PE 20~35x) (ii) FCF 생성 능력 확보(FY25 $2.1B, Op Margin 22.5% 비GAAP) (iii) 자본 규제 미적용 (iv) Balance Sheet NAV 중심 아님 → DCF 가이드 Step 1 판별에서 Option A에 부합. NVDA와 동일한 접근.
- **대안 대비 우위**:
  - **SOTP (Option B)**: AMD 세그먼트는 이익 "성격"이 크게 다르지 않음(모두 제품 판매 기반 반도체). 이질적 자산(운용 fee/인슈어런스 등)이 없어 SOTP는 오히려 복잡도만 증가. Xilinx 별도 멀티플 적용 가능성은 있으나 통합 후 3년 경과로 분리 관리 의미 적음
  - **Forward Multiple (Option E)**: AMD는 안정 FCF 생성 기업으로 "초기 성장·적자"에 해당하지 않음. 단, 2H'26 MI450 inflection 앞두고 Forward PE 교차검증은 병행
  - **NAV (Option D)**: 자산 기반이 아닌 이익 기반 비즈니스
  - **Excess Returns (Option C)**: 자본 규제 없음
- **주요 가정 요약**:
  - WACC: **10.5%** (Rf 4.31% + 베타 1.6 × ERP 5.5% + 사이즈 프리미엄 0% — NVDA 대비 베타 상향)
  - 예측 기간: 3년 (FY26~FY28), 투자 기간 일치
  - Terminal: FY28 EPS × 시나리오별 Applied PE (Exit Multiple 방식)
  - 희석 주식수: FY25 ~1.65B → FY28 1.68~1.81B (OpenAI Warrant 일부 행사 반영)
  - 실효세율: 13% (FY25 실측 반영, Q1'26 가이던스 13% 연속)

### 8-1. DCF 구조 설계 원칙

AMD의 이익 구조는 Data Center(AI GPU + 서버 CPU) 성장이 핵심. FY25 Op Margin 22.5%가 FY28 25~30%(Bull)로 확장 여부가 밸류에이션 결정. 시나리오별 예측 변수:

| 변수 | 시나리오 민감도 | 근거 |
|------|-----------|------|
| FY26~FY28 매출 CAGR | 매우 높음 | Data Center 성장 중심 |
| Data Center 매출 CAGR | 매우 높음 | MI450 수용·OpenAI 배치 |
| Op Margin | 높음 | GPU mix 확대 시 GM 상승 vs NVDA 가격 경쟁 |
| Applied PE (Terminal) | 매우 높음 | AI 사이클 지속성에 대한 시장 확신 |
| 희석 주식수 | 중간 | OpenAI Warrant 행사 여부 |

**밸류에이션 공식**:
```
FY28 목표가 = (FY28 NI / FY28 주식수) × Applied PE
현재가 내재가치 = FY28 목표가 / (1.105)^3
```

**멀티플 기준 — 역사적 실측**:
- AMD 5년 평균 Forward PE: 약 30~35x (AI 랠리 포함)
- AMD 10년 평균: 약 25x (사이클 포함, 2019~2021 피크 50x+)
- 반도체 섹터 평균: 22~25x
- 사이클 하단(2022 베어): 18~20x
- 사이클 상단(2020~2021, 2025~2026): 40~50x
- 시나리오 배정: Extreme Bear 12x / Bear 20x / Base 28x / Bull 35x

### 8-2. 시나리오별 DCF 계산

#### Extreme Bear — 확률 15%

**전제 조건:**
- AI Capex 피크 2026~2027 조기 도달 후 30%+ 감소 (Cisco 2002 유사)
- MI450 양산 수율 문제·OpenAI 계약 조건 재협상 (실질 매출 기여 50% 감소)
- AMD AI 가속기 점유 5% 수준 고정, 머천트 시장 자체 축소
- Op Margin 22.5% → 12% (재고 write-down + 가격 경쟁)
- Intel 18A 양산 성공 시 EPYC 점유 35% 정체

**시나리오 진입 신호:**
- 하이퍼스케일러 캐펙스 가이던스 -10%+ 하향 (3사 이상 동시)
- OpenAI 첫 1GW 배치 6개월+ 지연 or 계약 축소 발표
- MI450 양산 수율 문제 발표

**DCF 계산:**
```
매출 CAGR (FY25→FY28): 0%
FY28 매출: $35B (FY25 수준 정체)
  - Data Center $16~18B (MI450 램프 실패)
  - Client+Gaming $15B
  - Embedded $3B
FY28 Op Margin: 12%
FY28 Op Income: $4.2B
FY28 NI (13% 세율): $3.65B
FY28 EPS: $3.65B / 1.70B = $2.15
Applied PE: 12x
────────────────
FY28 목표가: $25.8 (≈ $26)
현재가 내재가치 (3Y 10.5% 할인): $19
```

#### Bear — 확률 30%

**전제 조건:**
- ROCm parity 실패, AI 학습 시장 NVDA 편중 지속
- NVDA Rubin 성능 2x+ 리드, AMD MI450이 인퍼런스 특정 워크로드에만 제한
- AMD AI 가속기 점유 8~10%로 제한 (머천트 확장 실패)
- Data Center CAGR +25% (60% 가이던스 실패)
- OpenAI 6GW 1~2년 지연
- Op Margin 22.5% → 20% (가격 경쟁)
- Intel 18A 양산 부분 성공

**시나리오 진입 신호:**
- ROCm MLPerf 점유 <10% 2026 말 지속
- OpenAI 첫 1GW 2H'26 미달
- Data Center 분기 YoY +25% 밑으로
- NVDA Rubin vs MI450 벤치마크에서 NVDA 2x+ 리드

**DCF 계산:**
```
매출 CAGR (FY25→FY28): +15%
FY28 매출: $52.6B
  - Data Center $32B (+25% CAGR)
  - Client+Gaming $17B
  - Embedded $3.6B
FY28 Op Margin: 20%
FY28 Op Income: $10.5B
FY28 NI (13% 세율): $9.13B
FY28 EPS: $9.13B / 1.68B = $5.43
Applied PE: 20x
────────────────
FY28 목표가: $108.6 (≈ $109)
현재가 내재가치 (3Y 10.5% 할인): $80
```

#### Base — 확률 35%

**전제 조건:**
- MI450 2H'26 정시 양산, OpenAI 첫 1GW 배치 달성
- ROCm "practical parity" (인퍼런스 주요 워크로드)
- AMD AI 가속기 점유 10~15% 확장
- Data Center CAGR +45% (mgmt 가이던스 60% 대비 보수)
- Op Margin 22.5% → 26% (GPU mix + 스케일 효과)
- Intel 18A 양산 지연, EPYC 점유 40~43% 확장
- Helios rack 초기 수용 (Meta + 주권 AI 고객)

**시나리오 진입 신호:**
- Q1~Q2'26 Data Center YoY +40% 유지
- MI450 Q3'26 초기 수주 + Q4'26 볼륨 램프
- OpenAI 첫 1GW 2H'26 정시 배치

**DCF 계산:**
```
매출 CAGR (FY25→FY28): +29%
FY28 매출: $74B
  - Data Center $51B (+45% CAGR, MI450 풀 램프 + EPYC 확장)
  - Client+Gaming $19B (+10% CAGR)
  - Embedded $4B (회복)
FY28 Op Margin: 26%
FY28 Op Income: $19.2B
FY28 NI (13% 세율): $16.7B
FY28 EPS: $16.7B / 1.68B = $9.94
Applied PE: 28x
────────────────
FY28 목표가: $278.3 (≈ $278)
현재가 내재가치 (3Y 10.5% 할인): $205
```

> **판단 포인트**: Base FY28 EPS $9.94는 AMD "$20 EPS 전략 목표" (5년) 궤적 중간. FY28 수준으로 $20 달성은 어려움 — 실현 시 Bull 시나리오.

#### Bull — 확률 20%

**전제 조건:**
- MI450 성능 B200 대비 우위 + Helios rack 주류 표준 (Meta OCP 선도)
- ROCm CUDA parity 2026 말 달성, AI 학습·프론티어 모델 AMD 점유 확대
- AMD AI 가속기 점유 20%+ 달성 (하이퍼스케일러 4사 모두 대량 배치)
- Data Center CAGR +60% (mgmt 가이던스 실현)
- OpenAI 6GW 가속 배치, 추가 Anthropic/Meta 대형 계약
- Op Margin 22.5% → 30% (규모 효과 + GPU mix 상승)
- Intel 18A 지연 지속, EPYC 점유 50%+ 확장
- AMD 5년 $20 EPS 전략 목표 FY28 조기 달성

**시나리오 진입 신호:**
- Rubin 성능 벤치마크 대비 MI450 경쟁력 입증 (공개 benchmark)
- ROCm MLPerf 점유 25%+
- AMD Data Center 분기 매출 $15B+ 돌파 (Q4'26)
- 제2, 제3 대형 GW급 계약 (Anthropic, xAI, Meta)

**DCF 계산:**
```
매출 CAGR (FY25→FY28): +43%
FY28 매출: $101B
  - Data Center $68B (+60% CAGR, mgmt 가이던스)
  - Client+Gaming $22B (Intel 부진)
  - Embedded $4B
FY28 Op Margin: 30%
FY28 Op Income: $30.3B
FY28 NI (13% 세율): $26.4B
FY28 EPS: $26.4B / 1.81B = $14.59
  (Warrant 100% 행사 가정, 희석주식수 1.81B)
Applied PE: 35x
────────────────
FY28 목표가: $510.7 (≈ $511)
현재가 내재가치 (3Y 10.5% 할인): $377
```

**실현 가능성 분석 (Bull):**

| 전제 조건 | 실현 가능성 | 근거 | 선행 사례 / 반례 |
|---------|-----------|------|----------------|
| MI450 vs Rubin 경쟁력 확보 | **중간** | HBM4 432GB 메모리 우위 | 선행: MI300X Llama 인퍼런스 벤치마크. 반례: NVDA 연간 사이클로 6~12개월 리드 유지 |
| ROCm "parity by end 2026" 달성 | **낮음~중간** | Lisa Su 공식 목표, "wartime mode" 10x 투자 | 반례: CUDA 20년 축적 따라잡기 어려움, 2024~2025 이미 같은 약속 |
| AMD AI 가속기 점유 20%+ | **낮음** | OpenAI 6GW + 대형 계약 가정 | 선행: 서버 CPU 2→36% (8년) — AI GPU에서 같은 궤적 가능. 반례: CUDA 락인 제약 |
| Data Center CAGR +60% 실현 | **중간** | mgmt 가이던스 공식, 2H'26~FY27 MI450 램프 | 반례: 역사적 반도체 성장률 30~40% 평균 |
| Op Margin 30% 달성 | **낮음~중간** | GPU mix 확대 시 GM 상승 | 선행: NVDA 60%+ 마진. 반례: AMD는 Client/Gaming/Embedded 구성상 구조적 상한 |
| EPYC 점유 50%+ | **중간** | Intel 턴어라운드 실패 시 | 선행: 2017→2025 2%→36.5%. 반례: Intel 18A 성공 |
| OpenAI Warrant 전 행사 | **중간** | 주가 마일스톤 연동 — Bull 시 자동 달성 | — |

**실현 경로 (인과 체인)**:
MI450 성능 입증 → 고객 확대 → Data Center $15B+ 분기 돌파 → Op Margin 확장 → Bull 멀티플 유지 → OpenAI Warrant 마일스톤 달성 (Warrant 행사로 -10% 희석이나 주가 상승이 상쇄)

**전제 간 독립성**:
- MI450 경쟁력과 ROCm parity는 **연관됨** (HW + SW 동시 개선 필요)
- AMD AI 가속기 점유 확대는 **위 두 전제의 결과**
- EPYC 점유 확대는 Intel 18A 지연의 **독립 확률** (AI와 무관)
- Op Margin 30%는 GPU mix의 **종속 변수**

**종합 실현 확률 판단**: 개별 전제 실현 확률 30~50%. HW·SW·점유 확대 체인은 연관성 높아 실제 가중 확률 20% 유지. 과대 아님.

**붕괴/전환 조건**:
- MI450 양산 6개월+ 지연
- ROCm parity 2027년까지 미달
- OpenAI 딜 조건 축소 or 재협상
- Intel 18A 양산 성공 + EPYC 점유 정체
- NVDA 가격 공격 전환

---

### 8-3. 가중평균 내재가치

```
시나리오       확률    FY28 목표가   현재 내재가치   기여
─────────────────────────────────────────────────────
Extreme Bear   15%    $26          $19            $2.85
Bear           30%    $109         $80            $24.00
Base           35%    $278         $205           $71.75
Bull           20%    $511         $377           $75.40
─────────────────────────────────────────────────────
가중평균 내재가치:                                 $174.00
가중평균 범위:           Extreme Bear $19 ~ Bull $377
현재가 $277.11 대비:     -37.2% (큰 하방)
```

**확률 배분 근거**:
- **Extreme Bear 15%**: AI 버블 터짐·OpenAI 딜 취소·MI450 실패의 3중 조건. 개별 확률 낮으나 동시 발현 가능성 상존. 10~20% 범위 중앙 상단 (AMD는 NVDA 대비 성장 의존도 높아 더 취약)
- **Bear 30%**: ROCm parity 실패 + NVDA Rubin 리드 재확대 + OpenAI 배치 지연의 combination이 가장 현실적. 20~30% 범위 상단 (보수 우선)
- **Base 35%**: Data Center +45% CAGR + MI450 정시 양산 + EPYC 점유 유지. 35~45% 범위 하단 (성장 가속 경로 실패 가능성 반영)
- **Bull 20%**: mgmt 가이던스(+60% DC CAGR, $20 EPS) 실현. 15~25% 범위 중앙 (OpenAI 딜이 현실화되면 상향 가능)

> Bear + Extreme Bear 합 = 45% (가이드 35%+ 기준 크게 초과, 보수적 가중 — AMD가 현재가 +218% 상승 상태라 하방 확대 반영)

### 8-4. 실적 데이터 — 현재 어디에 위치하는가

| 지표 | FY25 실측 | YoY | DCF Case 위치 |
|------|------|-----|-------------|
| 매출 | $34.6B | +32% | Base 시작점 |
| Data Center 매출 | $16.6B | +32% | Base 하단 (Bull의 +60% CAGR 도달 전) |
| Data Center Q4 | $5.4B | +39% | Base-Bull 경계 |
| Client+Gaming | $14.6B | +51% | Bull 경로 (Client가 특히 강함) |
| Embedded | ~$3.5B | flat | Bear-Base 경계 (회복 중) |
| Non-GAAP GM | 52% (FY), 54.6% (Q4) | +3pp (Q4) | Base 범위 |
| Non-GAAP Op Margin | 22.5% | +5pp | Base 하단 (Bull 30% 목표 대비) |
| Non-GAAP NI | $6.8B | +38% | Base |
| Non-GAAP EPS | $4.17 | +38% | Base |
| FCF | $2.1B | — | Base (3% FCF/매출 — 성장 투자 많음) |
| Q1'26 가이던스 | $9.8B ± $300M (+32% YoY) | | Base 연장 |

**트렌드 판단 (코드 블록)**:
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

**가이던스 반영 시 방향**:
- **Q1'26 $9.8B 달성 + Q2~Q4 MI350 램프**: FY26 $42~45B 시나리오 지지 → Base 확고 + Bull 가능성 상승
- **Q1'26 미달 (<$9.5B)**: Bear 진입 경계 (-5% 시퀀셜 가이드 실패)
- **MI450 Q4'26 볼륨 램프 확인**: Bull 결정 시점

**핵심 관찰**:
- **가장 중요한 변수**: Data Center 분기 매출 (특히 Instinct GPU 부문)
- **향후 확인 시점**:
  - Q1'26 실적 (2026-05-06 예정)
  - MI350 양산 스케일, MI450 초기 수주 (Q2~Q3'26)
  - OpenAI 첫 1GW 배치 (2H'26)
  - Q4'26 실적 (MI450 볼륨 램프 확인, 2027-02 예정)

### 8-5. 가치평가 결과

| 지표 | 수치 | 평가 |
|------|------|------|
| 현재 주가 | $277.11 (52주 고점 $281.05 대비 -1.4%) | 고점 근접 |
| Forward PE (FY26 EPS ~$7.85) | ~35x | 역사적 평균(30~35x) 상단, NVDA(24x) 대비 +47% 프리미엄 |
| PEG (FY26 기준 35%+ 성장) | ~1.0 | 섹터 평균 (NVDA 0.4 대비 비매력) |
| 가중평균 내재가치 | $174 ($19~$377 범위) | 현재가 대비 **-37.2%** |
| 손익비 (Base vs Bear) | 업사이드 $125 / 다운사이드 $125 | 1.00 (중립, 그러나 Base 확률 35%) |
| 손익비 (Base vs Extreme Bear) | $72 / $186 | 0.39 (불리) |
| 애널리스트 평균 목표가 | $273~290 | 현재가 -1~+5% (참고용, 12개월 전망) |

**결론**: 가중평균 내재가치 $174는 현재가 대비 **-37%** 큰 하방. 1년 +218% 급등으로 OpenAI 6GW·MI450 기대를 이미 선반영. Base 시나리오 실현 시 -26%, Bull 시나리오 완벽 실현 시에만 +36%. 하방 대비 상방 비대칭이 불리하고 Bear+Extreme Bear 합계 45% 실현 시 -60%+ 손실 가능. 매도 판정 기준은 아니나 **"비중축소"** 강력 판정. 매수 기준(20%+ 할인) 완전 미달이며 오히려 **37%+ 프리미엄** 상태.

---

## 종합 판정

```
[ AMD ] 평가 요약
────────────────────────────────
비즈니스 퀄리티  : ⚠️ Narrow Moat, NVDA Second Source 구조적 수요이나 독자적 해자 약함
시장 환경        : ✅ AI Capex $700B+ 호황, OpenAI 6GW 대형 계약 확보
가치평가         : ❌ Forward PE 35x = NVDA +47% 프리미엄, WA 내재가치 $174 vs 현재 $277
리스크           : ⚠️ ROCm parity 실패·OpenAI 단일 의존·밸류에이션 고점 (3중 복합)
────────────────────────────────
종합 의견        : 비중축소
────────────────────────────────
핵심 모니터링:
  1. OpenAI 첫 1GW 배치 일정 (2H'26) — 지연 시 Bear 즉시 진입
  2. ROCm "parity by end 2026" 달성 여부 (MLPerf 기준)
  3. MI450 양산 + Data Center 분기 매출 가속 (Q4'26 $15B+ 돌파)
```

**취약한 숫자**:
- **Base FY28 EPS $9.94**: mgmt "$20 EPS 전략 목표"(5년 가정)와 괴리 — 3년 DCF 기간에 $20 달성은 Bull 시나리오에서도 어려움. mgmt 목표가 5년 기준이면 Bull 시나리오도 보수 측면 해석 가능
- **Bull Applied PE 35x**: 현재 Forward PE 35x 유지 가정 — AI 사이클 지속 전제
- **Extreme Bear Applied PE 12x**: 과거 AMD 사이클 하단(2022) 18x 수준 — 12x는 구조적 훼손 시나리오 (Cisco 2002 수준 가정)
- **OpenAI 6GW $90B 잠재 매출**: LOI 성격, 구속력 있는 최종 계약 규모 불투명
- **OpenAI Warrant 희석**: 최대 -10% 주당 지표 영향, Warrant 조건 세부사항 10-K 추가 확인 필요
- **현재 FCF Yield 0.5%**: 시총 $457B 대비 FCF $2.1B는 빈약. 성장 기업으로서 허용되나 감속 시 지지력 약함

---

## 분기별 점검 기록

| 날짜 | 실적 요약 | Case 위치 변화 | 가설 업데이트 |
|------|----------|-------------|-------------|
| 2026-04-19 | FY25 종료 ($34.6B, +32%). Q4'25 $10.3B (+34%). 1년 +218% 주가 상승, Forward PE 35x | Base 진입 상태 (실적 기준) / 주가는 Bull 프리미엄 선반영 | 최초 Base 분석, "비중축소" 판정 — 가격·실적 괴리 |

**작성 트리거**:
- Q1'26 실적 발표 (2026-05-06)
- 즉시 재검토 트리거(7번) 충족 시
- MI450 양산/OpenAI 배치 마일스톤 달성·지연 시
