# NVDA — NVIDIA Corporation
> 글로벌 AI 컴퓨팅 인프라 표준 플랫폼 — CUDA 생태계 + Data Center GPU·Networking 일체형(FY26 매출 89.7% 집중), AI 학습·추론 가속기 시장 80~95% 점유

---

## 투자 thesis

- **CUDA 생태계 기반 Wide Moat — 전환비용 + 네트워크 효과** → 무형 자산(개발자 지식 베이스·라이브러리) + 전환비용 + 네트워크 효과: CUDA 등록 개발자 4M+, 활용 조직 40,000+, AI 개발 프레임워크 점유율 92%. 하드웨어 복제는 가능하나 ~20년 축적된 소프트웨어·라이브러리·연구 논문 생태계는 단기 복제 불가
- **AI Capex Super-cycle 최대 수혜 — 효율적 규모** → 효율적 규모 + 원가/성능 우위: 2026년 Top-4 하이퍼스케일러 캐펙스 ~$700B(YoY +60%), Huang 언급 $1T Blackwell+Rubin 오더 백로그(2027년까지). NVDA Data Center FY26 $193.7B(+71%), Q4 FY26 분기별 $62.3B
- **압도적 재무 체력 — Float + 자본 배분 우위** → FY26 FCF $96.7B (FCF/매출 45%), 순이익률 55.6%, GAAP Op Margin 60.4%. 대규모 자사주매입 진행 중, 5년 평균 희석주식수 감소(분할 조정 후) 진행

**매수 근거 작성일**: 2026-04-19
**현재가**: $198.35 (2026-04-17 종가, 52주 고점 $212.19 대비 -6.5%, 저점 $95.04 대비 +108.7% / 1년 수익률 +90%대)
**목표가**: $195 (Base DCF 가중평균 내재가치 — 아래 8-3 참조)
**투자 기간**: 3년 (FY29까지)

> 현재가 대비 가중평균 내재가치 **−1.7%**. 보수적 판정 기준(20%+ 할인) 미달 → 본 세션 결과 **"보유"** (상세 9번). 단, Bull vs Base의 격차가 크므로 Rubin 램프·추론 수요가 Bull 경로 진입 신호 보일 시 재평가 필요.

---

## 사업 구조 및 경제적 해자

### 2-1. 세그먼트 구조 요약

FY2026 (1/25/2026 종료) 연간 매출 $215.9B 기준:

| 세그먼트 | 수익원 | 규모 지표 (FY26) | 해자 유형 | 해자 강도 |
|---------|------|---------|---------|---------|
| **Data Center** | AI GPU(H100/H200/B200/GB200) + Networking(Mellanox/NVLink) + Systems | $193.7B (89.7%), YoY +71% / 내 Networking >$31B | 무형 자산(CUDA), 전환비용, 네트워크 효과, 효율적 규모 | **Wide** |
| **Gaming** | GeForce 소비자 GPU + Switch/Shield | $16.04B (7.4%), YoY +41% | 브랜드, 원가/성능 우위 | Narrow |
| **Professional Visualization** | RTX/Quadro 워크스테이션 GPU, Omniverse | $3.19B (1.5%), YoY +70% | 전환비용(전문 SW 종속), 무형 자산 | Narrow |
| **Automotive** | Drive Orin/Thor 자율주행 SoC | $2.35B (1.1%), YoY +39% | 파트너 장기 계약, 전환비용(개발 사이클) | Narrow |

> 출처: NVIDIA 10-K FY2026, Q4 FY26 재무제표 발표(2026-02-25). Networking 매출은 세그먼트 재분류 후 Data Center 내 하위 카테고리로 공시 — FY21 Mellanox 인수 이후 10배+ 성장.

### 2-2. 세그먼트별 상세

#### Data Center — CUDA 생태계 + 효율적 규모 (핵심 Wide Moat)

**사업 구조**: 하이퍼스케일러(MSFT/GOOGL/META/AMZN/ORCL), 네오클라우드(CoreWeave/Nebius), 대기업 AI 인프라 구축사, 정부·주권 AI 프로젝트(Stargate 등)에 GPU·Networking·Systems·Software 일체형 플랫폼을 판매. FY26 매출 $193.7B(전체 90%), GPU 외에 InfiniBand/Ethernet 스위치·NVLink·Spectrum-X 등 네트워킹이 $31B+.

| 해자 유형 | 내용 |
|---------|------|
| **무형 자산 (CUDA 생태계)** | CUDA 등록 개발자 4M+, 조직 40,000+, AI 프레임워크 점유율 92%. cuDNN/NCCL/TensorRT 라이브러리 누적 20년, GitHub/Stack Overflow/arXiv 논문·코드가 CUDA native. 대체 플랫폼은 단순 컴파일러 대체가 아닌 전체 연구·엔지니어링 지식 베이스 재구축 필요 |
| **전환비용** | 학습·추론 파이프라인 CUDA 최적화 커널 재작성, 모델 재검증, 엔지니어 재학습 비용. OpenAI·Anthropic·Meta 등 프론티어 랩은 수백만 GPU-hour 단위 학습 중이라 스위칭 비용이 단일 모델 사이클 내에 회수 불가 |
| **네트워크 효과** | NVLink/NVSwitch/InfiniBand 기반 스케일업·스케일아웃 표준. Mellanox 인수로 확보한 RDMA 고대역 네트워킹은 AMD MI 시리즈가 Broadcom Tomahawk 6에 의존해야 할 정도로 진입장벽 |
| **효율적 규모** | TSMC 3nm/2nm CoWoS 패키징·HBM 공급망 상류에서 수년 단위 capacity 선점. 연간 신제품 사이클(Hopper→Blackwell→Vera Rubin) 연속 출시가 경쟁사 개발 주기(18~24개월)를 늦춰 지속적 성능 리드 |

**주요 고객·수주 (2026-04 기준)**:

| 계약/수주 | 규모 | 시점 |
|---------|------|------|
| OpenAI / NVIDIA 전략 파트너십 | 최소 10GW Vera Rubin 배치, NVIDIA 최대 $100B OpenAI 투자 | 첫 1GW 2H'26 배치 |
| Stargate (OpenAI/Oracle/SoftBank) | ~7GW 계획, $400B+ 투자 3년 | 5개 신규 사이트 추가 |
| Microsoft Azure + OpenAI 우선 공급권 재계약 | — | 2026 Q1 |
| Huang GTC 2026 발언: Blackwell+Rubin 오더 | 최소 $1T (2027년까지) | — |
| China H200 판매 재개 | Trump 정부 12월 승인(매출 25% 미국 귀속 조건) — Q1 FY27 가이던스는 $0 China DC 컴퓨트 | 진행 중 |

> **판단 포인트**: OpenAI 10GW 파트너십은 NVDA가 직접 $100B 투자하는 구조로, '고객 = 투자처'의 순환 거래 이슈가 제기되고 있음. 실질적 거래 의존도 판단 시 회계 공시 주의(매출 인식 시점 + 투자 회수 구조).

#### Gaming — 브랜드 + 원가/성능 우위

**사업 구조**: GeForce RTX 50 시리즈(Blackwell 기반), Switch 2 Tegra, 클라우드 게이밍(GeForce Now). 스탠드얼론 PC GPU 시장 80%+ 점유. AI PC 수요로 FY26 +41% 성장하며 재가속.

| 해자 유형 | 내용 |
|---------|------|
| **브랜드** | GeForce = 하이엔드 게이밍 GPU 기본값. AMD Radeon 대비 레이트레이싱·DLSS 우위 |
| **원가/성능 우위** | AI 업스케일링(DLSS 4.0) 독점 기능이 구매자 고정. AI PC/Copilot+ PC 트렌드로 GPU 포함 번들 확산 |

#### Professional Visualization — 전환비용 (CAD/DCC 소프트웨어 종속)

**사업 구조**: CAD(Autodesk/Siemens), DCC(Adobe/Autodesk Maya), Sim(Ansys/Cadence EDA)용 RTX 워크스테이션 GPU. Omniverse 물리 시뮬레이션 플랫폼. 제조·미디어·AEC 엔터프라이즈가 주 고객.

| 해자 유형 | 내용 |
|---------|------|
| **전환비용** | Autodesk/Adobe/Ansys가 CUDA 렌더러 기본값으로 설계. AMD/Intel로 스위칭 시 워크플로우 재검증 필요 |
| **무형 자산(인증)** | ISV 인증(Autodesk, Siemens, Dassault 등) 획득은 장기간·고비용 |

#### Automotive — 장기 계약 + 전환비용

**사업 구조**: Drive Orin(현재 양산), Drive Thor(2025~2026 램프). 주 고객: Mercedes, Jaguar Land Rover, Volvo, XPeng, BYD 등. 자율주행 L2+/L3용 중앙 컴퓨팅.

| 해자 유형 | 내용 |
|---------|------|
| **장기 계약 + 개발 사이클 락인** | 차량 개발 사이클 3~5년. 한번 Orin/Thor로 플랫폼 결정되면 모델 수명 내내 NVDA 공급. 경쟁(Qualcomm Ride, Mobileye EyeQ)과 동등 수준이나 AI 통합 워크플로우 우위 |

---

## 해자 팩트체크

### Data Center 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| AI 학습·추론 GPU 시장점유율 80~95% | Introl/Bloomberg 리서치: 머천트 AI 가속기 시장 NVDA 80~95%, AMD 5~15%, 커스텀 ASIC 5~10% | ✅ |
| CUDA 개발자 4M+ | NVIDIA 투자자 자료 공식 발표 | ⚠️ (회사 공시) |
| AI 프레임워크 점유율 92% | Alphastreet/Rayhan 리서치: PyTorch/JAX/TensorFlow 주요 프로덕션 코드 92% CUDA | ✅ |
| Data Center $62.3B (Q4 FY26) | NVIDIA 공식 실적 발표 2026-02-25 | ✅ |
| Networking FY26 $31B+, FY21 대비 10x+ | NVIDIA 공식 (Mellanox 인수 FY21 $3B 기준) | ✅ |
| 하이퍼스케일러 2026 캐펙스 $700B | CNBC/Futurum 집계: MSFT $145B(FY26), GOOGL $185B, META $135B, AMZN $200B | ✅ |
| OpenAI 10GW LOI + NVDA $100B 투자 | NVIDIA 공식 보도자료 2025-09 | ✅ |
| $1T Blackwell+Rubin 백로그 | Huang GTC 2026 발언(공식 기조연설) | ⚠️ (회사 발언, 독립 검증 제한) |

**해자 리스크**:
- **하이퍼스케일러 커스텀 ASIC 내재화**: Google TPU v7 Ironwood(사내 Search/Gemini), Amazon Trainium3(Anthropic 50만+ 칩 학습), Microsoft Maia 200(FP4 기준 Google TPU 3배 주장). 내부 반복적 인퍼런스 워크로드 중심으로 15~25% 점유 가능성 — 현실화 2026~2028 진행 중
- **AMD MI400 시리즈 2H'26 출시**: HBM4 432GB(NVDA B200 대비 +50%), 메모리 대역 19.6TB/s. AMD 데이터센터 매출이 MI400 수용에 따라 60~70% 성장 전망 — 현실화 2026~2027
- **컴파일러 레이어 균열**: OpenAI Triton + MLIR이 CUDA 의존도 약화. Google TorchTPU 프로젝트는 PyTorch를 TPU 네이티브로. 완전한 하드웨어 독립성까지 2~3년 — 현실화 2027~2029

### Gaming / ProViz / Auto 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| PC GPU 독립 그래픽카드 시장 80%+ | JPR/Steam 하드웨어 조사 | ✅ |
| ISV 인증(Autodesk/Ansys/Adobe) CUDA 기본값 | 각 ISV 공개 문서 | ✅ |
| Automotive 주요 OEM 다수 계약(Mercedes, Volvo 등) | NVIDIA 고객 공시 | ✅ |

**해자 리스크**:
- **Gaming = Data Center 규모 대비 7% — 독립 해자 영향력 제한적**
- **ProViz/Auto는 AI 트렌드 완료 후 후행 — 해자 자체는 Narrow**

#### 해자 리스크 종합

| 세그먼트 | 핵심 모트 리스크 | 현실화 시점 |
|---------|--------------|-----------|
| Data Center | 하이퍼스케일러 커스텀 ASIC 점유율 15~25% | 2026~2028 진행 중 |
| Data Center | AMD MI400 수용 가속(2H'26 출시) | 2026~2027 |
| Data Center | 컴파일러 레이어 붕괴(Triton/MLIR/TorchTPU) | 2027~2029 |
| Data Center | Power/Grid 제약 — NVDA 매출 상한 간접 제한 | 2027~2030 진행 중 |
| 전체 | China 지정학 (export control 변동, 25% 미국 귀속 조건) | 상시 |
| Gaming/ProViz/Auto | Data Center 의존적 보완 — 독립 해자 제한 | 상시 |

> **판단 포인트 (의심)**: 백로그 $1T는 Huang 발언 기반이며 독립 검증 불가. SEC 공시상 Performance Obligations(이연 매출)는 그보다 작음. 백로그의 실제 수주 계약 구조(확정/옵션/취소 가능) 확인 필요.

---

## 해자 강도 평가 — "이 정도 리스크면 충분히 높은 해자인가?"

### 평가 기준
Morningstar Wide Moat 기준: "향후 20년 이상 초과이익을 유지할 수 있는 구조적 우위"
→ 리스크의 현실화 시점이 투자 기간(3년, FY29까지)보다 먼 경우 해자 유효.

### 식별된 해자 리스크 vs 현실화 시점

| 리스크 | 내용 | 현실화 시점 | 해자 훼손 정도 |
|--------|------|-----------|--------------|
| 하이퍼스케일러 ASIC 내재화 | 인퍼런스 15~25% 점유 | 2026~2028 진행 | **중간** — 점유율 일부 손실이나 학습/프론티어 모델은 여전히 NVDA |
| AMD MI400 | 데이터센터 대안 공급 | 2H'26~ | 낮음 — AMD 점유 5→12~15% 확장이나 TAM 성장이 더 큼 |
| 컴파일러 균열(Triton/MLIR) | CUDA 락인 약화 | 2027~2029 | 낮음~중간 — 연구·개발 레이어는 깨지되 프로덕션은 여전히 NVDA 우위 |
| Power/Grid 제약 | Gartner: 2027년 40% DC 제약 | 2027~2030 | **중간** — 매출 성장률 상한 제약. NVDA는 800V HVDC 인프라 주도 |
| China Geopolitics | 수출 통제 변동성 | 상시 | 낮음 — H20/H200 재개 허가, 25% 미국 귀속 조건 흡수 가능 |

### 판정
**NVDA = Wide Moat ✅**

핵심 근거 3가지:
① **시간 지평 관점**: CUDA 생태계는 20년 축적 결과물로 대체에 5~10년 + 수십억 달러 투자 필요. 투자 기간 3년 내 결정적 훼손 가능성 낮음
② **전략적 헤지 관점**: Networking(Mellanox $31B+), 소프트웨어(Omniverse/NIM), Systems(DGX/HGX) 등 복수 해자가 독립적으로 작동. Data Center 집중도는 높으나 내부 이익 원천이 분산
③ **계약/구조적 보호 관점**: OpenAI 10GW LOI, Stargate, 주요 하이퍼스케일러의 다년 계약이 FY27~FY28 매출 가시성 확보. 연간 신제품 사이클(Blackwell→Rubin→Feynman)이 경쟁사 따라잡기 창을 지속적으로 닫음

**단, 주의 구간**: Wide 판정이라도 아래 선행 지표가 균열 신호
- **하이퍼스케일러 ASIC 비중**: AWS/GOOG/MSFT의 NVDA 대 자체 ASIC 인퍼런스 mix가 30%+ 돌파 시 Data Center 성장률 하방 압력
- **Data Center GM 하락**: 분기 GM이 72% 밑으로 떨어지면 가격 경쟁 신호(AMD MI400 견제 등). 현재 Q4 FY26 75.0%
- **Rubin 출하 지연**: Vera Rubin이 2H'26 1GW 배치 목표 미달 시 커스텀 ASIC 대체 가속

---

## 경쟁 구도 및 경쟁 우위

### 5-1. 경쟁사 식별 및 포지셔닝

| 경쟁사 | 시가총액 (2026-04) | 핵심 사업 영역 | 시장점유율 | 포지셔닝 |
|--------|-----|-------------|----------|---------|
| **NVDA** | ~$4.6T | AI GPU + Networking + Software | 80~95% (머천트 가속기) | 표준 플랫폼, CUDA 락인 |
| AMD | ~$400B | MI300/350/400, EPYC CPU | 5~15% (MI 시리즈) | 2위 머천트 대안, 가격 경쟁 |
| Broadcom (AVGO) | ~$1.5T | 하이퍼스케일러 커스텀 ASIC(ASIC + 네트워크) | 커스텀 ASIC ~60% 점유 | 하이퍼스케일러 인퍼런스 파트너 |
| Google (GOOGL) | ~$3T | TPU v7 Ironwood 사내 | Search/Gemini 인퍼런스 100% 사내 | 수직 통합, 비상장 판매 |
| AWS (AMZN) | ~$2.5T | Trainium3, Inferentia2 | Anthropic 50만+ 칩 | 수직 통합, Bedrock 내부 사용 |
| Microsoft (MSFT) | ~$3.5T | Maia 200 (FP4 3x TPU 주장) | Copilot 인퍼런스 확대 중 | 수직 통합 초기 단계 |
| Intel (INTC) | ~$100B | Gaudi 3, GPU Max | <2% (미미) | 전략 방향 재정비 중 |

### 5-2. 핵심 성장동력 경쟁 비교

| 성장동력 | NVDA | AMD | Broadcom(ASIC 통합) | Google/AWS/MSFT(사내) | 판정 |
|---------|------|-----|------|------|------|
| **AI GPU 성능(학습)** | B200/GB200/GB300 + Rubin 연간 사이클 | MI355X 등, 성능 격차 10~20% | N/A | TPU v7 Ironwood (Google 내부) | 🥇 NVDA |
| **AI GPU 성능(인퍼런스)** | H200/B200, TensorRT-LLM | MI400 432GB HBM4 | 맞춤화 ASIC 저전력 우위 | Trainium3 (AWS 내부) | 🥇 NVDA (단, 격차 축소) |
| **소프트웨어 생태계** | CUDA + cuDNN + NCCL + TensorRT (92% 점유) | ROCm (<5%) | — | XLA (TPU) | 🥇 NVDA |
| **Networking(스케일업/아웃)** | NVLink/NVSwitch + InfiniBand/Spectrum-X ($31B+) | Broadcom Ethernet 의존 | 본인 | 자체 (ICI 등) | 🥇 NVDA |
| **제품 사이클 속도** | 연간 신규(Hopper→Blackwell→Rubin) | 18~24개월 | 하이퍼스케일러 요청 주기 | 18~24개월 | 🥇 NVDA |
| **TAM 접근성(비-하이퍼스케일러)** | 주권 AI, 네오클라우드, 엔터프라이즈 | 동일 접근, 제한적 | 하이퍼스케일러 전용 | 사내 전용 | 🥇 NVDA |
| **영업이익률** | 60.4% (FY26) | 20%대 (추정) | 35% (AVGO 연결) | 공개 안됨 | 🥇 NVDA |

### 5-3. 경쟁 우위 원천 분석

**1. CUDA 소프트웨어 생태계**
- 우위 내용: ~20년 축적된 개발자 지식 베이스, 라이브러리, 논문 코드, 엔지니어 풀. 92% AI 프레임워크 점유
- 정량 근거: 4M+ 등록 개발자, 40,000+ 조직, GitHub/arXiv/Stack Overflow 네이티브 CUDA
- 경쟁사 격차: AMD ROCm 점유율 <5%, Google XLA는 TPU 전용, Triton/MLIR은 연구 레이어만
- 복제 난이도: **매우 높음** — 단순 컴파일러 대체가 아닌 전체 지식 생태계 재구축 필요
- 격차 지속 기간 추정: **5~10년** (Triton/MLIR + 오픈소스 모델 API 레이어가 깨뜨리는 시점까지)

**2. 연간 신제품 사이클 (실행 속도)**
- 우위 내용: Hopper(22)→Blackwell(24)→Rubin(26)→Feynman(28) 1년 사이클. 경쟁사는 18~24개월
- 정량 근거: AMD MI350(Q3'25)→MI400(2H'26)→MI500(2027). Google TPU v6e→v7(Ironwood) 1년
- 경쟁사 격차: 최소 1세대(약 6~12개월 성능 리드)
- 복제 난이도: **높음** — TSMC CoWoS/HBM4/HBM3e 상류 capacity 선점 + 엔지니어링 팀 규모
- 격차 지속 기간: **3~5년**

**3. Networking 통합 (Mellanox 레거시)**
- 우위 내용: NVLink/NVSwitch 스케일업 + InfiniBand/Spectrum-X 스케일아웃 일체형
- 정량 근거: FY26 Networking $31B+, FY21 인수 이후 10배+ 성장
- 경쟁사 격차: AMD MI400도 Broadcom Tomahawk 6 의존(UALink 스위치 지연)
- 복제 난이도: **중간~높음** — Broadcom/Marvell이 Ethernet 기반 UALink으로 대응 중
- 격차 지속 기간: **3~5년**

**4. Full-Stack Platform (Systems + Software + Networking)**
- 우위 내용: DGX/HGX 레퍼런스 시스템, NIM 마이크로서비스, Omniverse. 고객은 NVDA 스택 통째로 구매 가능
- 정량 근거: OpenAI 10GW 파트너십, Stargate 구조 모두 NVDA 스택 기반
- 경쟁사 격차: AMD/Intel은 시스템/소프트웨어 플랫폼 성숙도 낮음
- 복제 난이도: **매우 높음**
- 격차 지속 기간: **5~7년**

### 5-4. "왜 이 기업인가" — 투자 차별화 근거

1. **CUDA = AI 컴퓨팅의 실질적 OS 표준**: 경쟁사(AMD/INTC)가 복제 불가. 하이퍼스케일러 ASIC도 자사 내부 워크로드 한정 — 상용 AI 앱·스타트업·기업·주권 AI는 NVDA 의존
2. **독보적 Top-line 성장률 + 마진**: FY26 매출 +65%, GAAP Op 60%, NI 55% — 반도체 업종 역사상 유례 없는 조합. AMD(매출 +20%대), Broadcom(+25%대) 대비 2~3배 성장
3. **Full-Stack 플랫폼 통합**: GPU + Networking + Software + Systems를 하나로 파는 유일한 기업. 하이퍼스케일러조차 Spectrum-X/InfiniBand 구매

**밸류에이션 비교 (2026-04 기준):**

| 지표 | NVDA | AMD | AVGO | 섹터 평균(반도체) | 프리미엄/디스카운트 |
|------|------|-----|------|--------------|----|
| Forward PE | 23.8x | 30x+ | 35x+ | 25x | 소폭 디스카운트 |
| EV/EBITDA (TTM) | ~30x | ~30x | ~28x | 22x | 프리미엄 |
| PEG (FY27 기준) | ~0.4 (성장률 70%) | ~1.2 | ~1.3 | ~1.0 | **큰 저평가** |
| FCF Yield (FY26) | ~2.1% | 1% | 1.5% | 3% | 디스카운트 |

**결론**: Forward PE 23.8x는 AMD/AVGO 대비 디스카운트. 시장은 NVDA 성장 지속 가능성(ASIC 위협)에 일부 회의적. PEG 0.4는 구조적 저평가 신호이나 마진 지속·성장 지속의 이중 조건이 유지되어야 정당화.

---

## 리스크 요인

### 1. 하이퍼스케일러 커스텀 ASIC 내재화 ⚠️

**리스크 설명**: Google TPU v7 Ironwood, AWS Trainium3, Microsoft Maia 200, Meta MTIA가 인퍼런스·반복 워크로드에서 NVDA GPU 대체. 하이퍼스케일러는 NVDA 매출의 40~50%+ (정확한 비중은 비공개)

**규모/비중 정량화**: NVDA 매출 Top-5 고객 집중도는 10-K 리스크 섹션에 "3개 고객 각 10%+" 공시. 추정 상위 4개 하이퍼스케일러 합산 ~40~45% 매출 기여.

**상세 데이터**:

| ASIC | 주요 용도 | 2026 규모 추정 | 격차 |
|------|---------|-----------|------|
| Google TPU v7 Ironwood | Search/Gemini 내부 | Google 사내 100% | TPU v6e 대비 4.7x 성능 |
| AWS Trainium3 | Anthropic 학습 | 50만+ 칩 배치 | 2.52 PFLOPs FP8, 144GB HBM3e |
| MSFT Maia 200 | Copilot 인퍼런스 | TSMC 3nm, 140B 트랜지스터 | FP4 성능 TPU 3x 주장 |
| Meta MTIA | 추천 시스템 | 내부 확대 중 | — |

**시나리오별 영향**: 
- Base: 15~25% 인퍼런스 점유 ASIC 이동 → 전체 성장률 1/4 감쇠. NVDA 학습·외부 고객 매출은 유지
- Bear: 30%+ ASIC 이동 + 하이퍼스케일러 NVDA 캐펙스 비중 축소 → FY28~FY29 매출 둔화

**완화 요인**: (a) TAM 자체가 급성장 — 점유율 일부 감소해도 절대 매출은 증가 가능, (b) 주권 AI/엔터프라이즈/네오클라우드 등 비-하이퍼스케일러 시장 확대, (c) Rubin 출시 시 성능 리드 재확대

**팩트체크**: ✓ 팩트체크 완료 — ASIC 15~25% 점유 전망 Introl/Futurum 교차 확인

### 2. AI Capex Super-cycle 조기 피크 ⚠️

**리스크 설명**: 2026 $700B 캐펙스가 과잉 투자로 판명될 경우 2027~2028 캐펙스 감속/감축. AI 유스케이스 상업화(Copilot 구독, Enterprise AI ROI) 증명 속도가 캐펙스 대비 지연 시 투자 사이클 반전.

**규모/비중**: 2026 하이퍼스케일러 캐펙스 ~$700B. 이 중 75%(~$525B)가 AI 인프라. NVDA는 이 중 ~$200B(FY27 매출 추정)를 수취할 전망 = 하이퍼스케일러 캐펙스의 ~40% 직접 노출.

**시나리오별 영향**:
- Base: FY28~FY29 하이퍼스케일러 캐펙스 YoY +10~15% 감속 — NVDA 매출 성장 15~20%로 수렴
- Bear: FY28 캐펙스 -10%, NVDA 매출 FY28 $380B → FY29 $400B (감속)
- Extreme Bear: "AI 겨울" 수요 급감 → FY28~FY29 캐펙스 -30% → NVDA 매출 -20%

**완화 요인**: (a) OpenAI 10GW 등 다년 확정 수주 가시성, (b) 인퍼런스 수요는 상품화 이후에도 증가(단위당 비용 감소 상쇄), (c) Rubin 연간 사이클로 교체 수요 지속

**팩트체크**: ⚠️ — Gartner 2027년 40% DC 파워 제약 예상이 역설적으로 캐펙스 상한 보장. 다만 역으로 ROI 증명 지연 시 캐펙스 우선순위 하향 가능.

### 3. Power/Grid 제약 — 매출 상한 간접 압박 ⚠️

**리스크 설명**: 미국 interconnection queue 다년 지연, 지역 capacity 부족. Gartner 2027년 40% AI DC 전력 제약 예상. NVDA GPU 공급이 가능해도 배치될 사이트 부족.

**규모/비중**: 550 계획된 DC 프로젝트 125GW pipeline. OpenAI 10GW Vera Rubin 배치는 전력 확보가 critical path.

**시나리오별 영향**: 매출 상한 간접 제한 — 연간 20~30% 배치 지연 가능성. 이는 Bull 시나리오를 Base로 전환시키는 제약.

**완화 요인**: NVDA 800V HVDC 인프라 주도(2027 전개), Small Modular Reactor(SMR) 협업 파트너십. 단, 파워 솔루션은 단기 효과 제한적.

**팩트체크**: ✓ — Gartner/Goldman Sachs 교차 확인.

### 4. China 지정학 리스크 ⚠️

**리스크 설명**: Trump 정부 정책 가변성, China 자체 Huawei Ascend 추격. H200 판매 재개(25% 미국 귀속)는 매출 인식·마진 희석 요인.

**규모/비중**: Huang 추정 China TAM ~$50B/년. Q1 FY27 가이던스는 $0 China DC 컴퓨트 전제. 상방 upside 전환 시 +$40~50B 매출 잠재.

**시나리오별 영향**:
- Base: China $20~30B 회복 (25% 미국 공제 후 NVDA 순매출 $15~23B)
- Bull: China $50B 완전 회복 (순 $37~40B)
- Bear: China 추가 제재 복귀 → $0

**완화 요인**: 다각화된 고객 베이스 (OpenAI, Stargate, 유럽 주권 AI 등 중국 의존도 낮음).

**팩트체크**: ⚠️ — 정책 변동성 높음. 2025-12 Trump 정책은 이후 번복 가능.

### 5. AMD MI400 + 컴파일러 균열 — CUDA 해자 약화 ⚠️

**리스크 설명**: MI400 메모리 스펙이 B200 상회(432GB vs 288GB HBM). Triton/MLIR/TorchTPU로 개발자 레이어에서 CUDA 의존도 점진 약화.

**규모/비중**: AMD Data Center 매출이 MI400 성공 시 60~70% 증가. 2027 Q4 AMD AI 가속기 12~15% 점유 전망.

**시나리오별 영향**:
- Base: NVDA AI 가속기 점유 80~85%로 유지 (90%+ → 소폭 하락)
- Bear: NVDA 75~78%로 하락, 가격 경쟁으로 GM 72% → 70%
- Extreme Bear: NVDA 65~70%, GM 65% 이하

**완화 요인**: (a) Rubin 2H'26 출시로 메모리/성능 재리드, (b) CUDA 락인은 기존 설치 기반 유지에 강함, (c) TAM 성장 절대 매출 증가

**팩트체크**: ✓ — AMD 로드맵·메모리 스펙 공식 공개. 그러나 성능·가격 실제 비교는 MI400 양산 후 확정.

### 6. 밸류에이션 리스크 (고점 사이클 멀티플) ⚠️

**리스크 설명**: NVDA 시총 $4.6T = 단일 기업으로 전 세계 GDP 4~5%에 해당. 성장 감속 시 멀티플 압축 위험 (Forward PE 24x → 15x 복귀 시 -35%).

**규모/비중**: 과거 반도체 사이클 피크 대비 PE 추정 — NVDA 2000년대 인텔 피크 PE 40x+ → 15x 수렴 사례.

**시나리오별 영향**: Extreme Bear에 PE 12x 반영. Bear에 18x, Base에 25x, Bull에 30x.

**완화 요인**: PEG 0.4의 구조적 저평가 버퍼. FCF 생성 강력($97B).

**팩트체크**: ❓ — 과거 사이클 기업(CSCO 2000) 벤치마크 적용 가능성 논쟁.

### 7. OpenAI 순환 거래 구조 리스크 ❓

**리스크 설명**: NVDA $100B OpenAI 투자 + OpenAI 10GW GPU 구매는 '고객 = 투자처' 순환 구조. 회계상 매출 인식 시점·투자 평가 손익 변동성 우려.

**규모/비중**: $100B 투자 약정, 10GW 배치 시 NVDA 매출 $300~500B+ 기여 가능성.

**시나리오별 영향**: SEC 조사·회계 재분류 발생 시 일회성 매출 재분류, Non-GAAP vs GAAP 괴리 확대.

**완화 요인**: MSFT/Oracle/SoftBank 공동 Stargate 구조가 단일 의존도 분산.

**팩트체크**: ❓ — 실제 계약 구조 SEC 10-K 공시 검토 필요(이후 분기 공시).

#### 리스크 독립성 확인

- 리스크 1(ASIC) + 리스크 5(AMD/컴파일러)는 **상관성 높음** (CUDA 해자 약화의 두 축)
- 리스크 2(Capex Peak) + 리스크 3(Power)는 **반대 방향** — 전력 제약이 오히려 캐펙스 상한 보장
- 리스크 4(China)는 **독립적** — 미중 관계 이벤트 리스크
- 리스크 6(밸류에이션)은 **다른 모든 리스크의 파생** — 리스크 1,2,5 현실화 시 자동 발동

#### 리스크 수치 팩트체크 종합

| # | 항목 | 판정 | 비고 |
|---|------|------|------|
| 1 | 하이퍼스케일러 ASIC 15~25% 점유 | ✓ | Introl/Futurum |
| 2 | FY26 하이퍼스케일러 캐펙스 $700B | ✓ | CNBC/Futurum |
| 3 | Top-3 고객 각 10%+ 매출 | ✓ | 10-K 공시 |
| 4 | AI PF 점유 92% | ✓ | Alphastreet |
| 5 | $1T Blackwell+Rubin 백로그 | ⚠️ | Huang GTC 발언, 회사 자체 공시 |
| 6 | CUDA 개발자 4M+ | ⚠️ | NVDA 자체 공시 |
| 7 | China TAM $50B | ⚠️ | Huang 추정 |
| 8 | OpenAI $100B + 10GW | ✓ | 공식 보도자료 |
| 9 | AMD MI400 432GB HBM4 | ✓ | AMD 공식 |
| 10 | Gartner 2027 40% DC 파워 제약 | ✓ | Gartner 공개 |

---

## 모니터링 지표

### 해자 건전성 모니터링

| 출처 | 모니터링 항목 | 기준값 | 현재 상태 |
|------|------------|-------|----------|
| DC 해자 | Data Center 분기 GM | 72%+ 유지 | ✅ Q4 FY26 75.0% |
| DC 해자 | Data Center YoY 성장률 | 50%+ (Blackwell/Rubin 사이클) | ✅ Q4 FY26 +75% |
| DC 해자 | Networking 분기 매출 | $8B+ | ✅ FY26 $31B+ (분기 ~$8B) |
| DC 해자 | CUDA 등록 개발자 증가율 | YoY +15%+ | ⚠️ 회사 공시 의존 |
| DC 해자 | AI 프레임워크 점유율 | 85%+ 유지 | ✅ 92% (독립 리서치) |

### 리스크 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| 리스크 1 ASIC | 하이퍼스케일러 NVDA vs 자체 ASIC 캐펙스 비중 | ASIC ≥ 30% 돌파 | 현재 15~20% 추정 ⚠️ |
| 리스크 2 Capex | Top-4 하이퍼스케일러 분기 캐펙스 YoY | YoY +20% 밑으로 | 현재 +60% ✅ |
| 리스크 3 Power | OpenAI 10GW 1GW 배치 일정 | 2H'26 달성 여부 | 모니터링 시작 |
| 리스크 4 China | China DC 컴퓨트 매출 | Q1 FY27 이후 회복 지연 2분기+ | $0 가이던스 중 |
| 리스크 5 AMD | AMD DC 매출 YoY 성장률 | +60% 이상 가속 | 모니터링 필요 |
| 리스크 5 Compiler | Triton/MLIR 프로덕션 채택률 | MLPerf NVDA 비율 <70% | 현재 ~90% ✅ |
| 매크로 | 10Y Treasury | 5%+ 돌파 | 4.26% ✅ |
| 매크로 | PHLX Semi (SOXX) YoY | -20%+ | 모니터링 |

### 경쟁 우위 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| CUDA 생태계 | PyTorch default backend NVDA 비율 | <80% | 92% ✅ |
| 제품 사이클 | Rubin 양산 시점 대비 경쟁 | AMD MI500이 Rubin 양산보다 먼저 출시 시 | Rubin 2H'26 vs MI500 2027 ✅ |
| Full-Stack | NVDA Systems(DGX/HGX) 출하 비중 | 30%+ 매출 기여 유지 | 공시 제한, 모니터링 필요 |

### 즉시 재검토 트리거

- OpenAI 10GW 1GW 2H'26 배치 지연 (4+ 개월)
- Data Center 분기 GM 72% 밑으로 이탈
- AMD 분기 Data Center 매출 +80% 가속 (MI400 수용 초과)
- Trump 정부 China H200 재금지 정책 번복
- NVDA Top-3 고객 중 하나라도 자체 ASIC 인퍼런스 50%+ 전환 발표
- Forward PE 30x 돌파 or 15x 이하 급락

---

## DCF 시나리오 & 가치평가

### 8-0. DCF 방법론 선택

- **적용 방식**: **A. FCF DCF** (Exit Multiple 방식 Terminal + Forward PE 교차검증)
- **선택 근거**: NVDA는 (i) 단일 주력 사업(Data Center 90%) (ii) 안정적 대규모 FCF 생성(FY26 $96.7B, FCF/매출 45%) (iii) 자본 규제 미적용 (iv) Balance Sheet NAV 중심 아님 → DCF 가이드 Step 1 판별에서 Option A에 부합
- **대안 대비 우위**:
  - **SOTP (Option B)**: NVDA는 Data Center 집중도가 90%로, 세그먼트 이익이 이질적이지 않음. SOTP 적용 시 Gaming/ProViz/Auto 기여(10%)가 미미해 복잡도만 증가
  - **Forward Multiple (Option E)**: NVDA는 현재 FCF가 충분히 안정적이며 "초기 성장·적자"에 해당하지 않음. Option E는 보조용으로 교차검증에만 활용
  - **NAV (Option D)**: 자산 기반이 아닌 이익 기반 비즈니스
  - **Excess Returns (Option C)**: 자본 규제 없음
- **주요 가정 요약**:
  - WACC: **10.0%** (Rf 4.26% + 베타 1.3 × ERP 5.5% + 사이즈 프리미엄 0%)
  - 예측 기간: 3년 (FY27~FY29), 투자 기간 일치
  - Terminal: FY29 EPS × 시나리오별 Applied PE (Exit Multiple 방식)
  - 희석 주식수: FY26 24.3B → FY29 23.5B (자사주매입 반영)
  - 실효세율: 14% (FY26 실측 반영, TCJA·GILTI 구조 가정)

### 8-1. DCF 구조 설계 원칙

NVDA의 이익 구조는 AI 학습·추론 GPU 수요 사이클에 집중되어 있어 (i) 매출 성장률 (ii) GM 수준 (iii) Op Margin이 핵심 변수. FCF/NI 변환율은 FY26 80% (고성장기 working capital 증가로 FCF < NI). 시나리오별 예측 변수:

| 변수 | 시나리오 민감도 | 근거 |
|------|-----------|------|
| FY27~FY29 매출 CAGR | 매우 높음 | 하이퍼스케일러 캐펙스·ASIC 점유 |
| Op Margin | 높음 | ASIC 경쟁 가격 압력, R&D 레버리지 |
| Applied PE (Terminal) | 매우 높음 | AI 사이클 지속성에 대한 시장 확신 |
| 세율 | 낮음 | 구조 변화 제한적 |
| 희석 주식수 | 낮음 | 자사주매입 속도 |

**밸류에이션 공식**: 
```
FY29 목표가 = (FY29 NI / 23.5B 주) × Applied PE
현재가 내재가치 = FY29 목표가 / (1.10)^3
```

**멀티플 기준 — 역사적 실측**:
- NVDA 5년 평균 Forward PE: 약 35x (AI Boom 시기 포함)
- NVDA 10년 평균: 약 28x
- 반도체 섹터 평균: 22~25x
- 사이클 하단(2022 베어): 20x
- 사이클 상단(2024~2025): 50x+
- 시나리오 배정: Extreme Bear 12x / Bear 18x / Base 25x / Bull 30x

### 8-2. 시나리오별 DCF 계산

#### Extreme Bear — 확률 15%

**전제 조건:**
- AI Capex 피크 2026~2027 조기 도달 후 30%+ 감소 (2000년대 Telecom/Optical 버블 유사)
- 하이퍼스케일러 NVDA 캐펙스 비중 -40% 급감 (ASIC 전환 가속)
- NVDA 매출 FY28~FY29 peak-to-trough -25%
- GM 75% → 55% 급락 (재고 write-down + 가격 경쟁)

**시나리오 진입 신호:**
- 2026 2H~2027 하이퍼스케일러 캐펙스 가이던스 -10%+ 하향 (3사 이상 동시)
- AMD DC 매출 YoY +100% 가속 + NVDA DC 매출 YoY <20%
- OpenAI 10GW 배치 6개월+ 지연 + Stargate 프로젝트 취소

**DCF 계산:**
```
매출 CAGR (FY26→FY29): -3%
FY29 매출: $200B
FY29 Op Margin: 40%
FY29 NI (14% 세율, NI/Op ~86%): $70B
FY29 EPS: $70B / 23.5B = $2.98
Applied PE: 12x
────────────────
FY29 목표가: $35.7 (≈ $36)
현재가 내재가치 (3Y 10% 할인): $27
```

#### Bear — 확률 25%

**전제 조건:**
- ASIC이 하이퍼스케일러 인퍼런스 30%+ 점유 (2028까지)
- AMD MI400·MI500이 성공적으로 수용 → NVDA DC 점유 75%로 하락
- 하이퍼스케일러 캐펙스 FY28 YoY 0%, FY29 +10%
- NVDA GM 75% → 68% (가격 압력)
- China DC 매출 $0 유지

**시나리오 진입 신호:**
- 하이퍼스케일러 자체 ASIC 캐펙스 비중 25%+ 돌파
- AMD DC 매출 YoY +80%+ 2분기 연속
- NVDA 분기 GM 73% 밑으로

**DCF 계산:**
```
매출 CAGR (FY26→FY29): +22%
FY27 매출: $320B (컨센서스 미달)
FY28 매출: $380B
FY29 매출: $400B
FY29 GM: 68%, Op Margin: 50%
FY29 NI: $172B
FY29 EPS: $7.32
Applied PE: 18x
────────────────
FY29 목표가: $131.7 (≈ $132)
현재가 내재가치 (3Y 10% 할인): $99
```

#### Base — 확률 40%

**전제 조건:**
- AI Capex 순조로운 확장 — 2027 $900B, 2028 $1.1T, 2029 1.3T
- NVDA DC 점유 80~85% 유지, ASIC 소폭 점유 (15~20% 영역)
- Rubin 2H'26 1GW 배치 성공 후 연간 사이클 지속
- GM 75% → 72% (소폭 압축), Op Margin 60% → 55%
- China DC 매출 $20B 회복 (FY28~FY29)

**시나리오 진입 신호:**
- 2026~2027 하이퍼스케일러 캐펙스 가이던스 +20~30% 유지
- NVDA DC 분기 성장률 +40~60% 유지
- AMD DC 매출 YoY +50~70% (점유 일부 확대)

**DCF 계산:**
```
매출 CAGR (FY26→FY29): +38%
FY27 매출: $370B (컨센서스 $367B 부합)
FY28 매출: $475B
FY29 매출: $570B
FY29 GM: 72%, Op Margin: 55%
FY29 Op Income: $314B
FY29 NI (14% 세율): $270B
FY29 EPS: $11.49
Applied PE: 25x
────────────────
FY29 목표가: $287.3 (≈ $287)
현재가 내재가치 (3Y 10% 할인): $216
```

> **판단 포인트**: Base EPS $11.49는 컨센서스 $12.85(FY29) 대비 약 10% 보수적. 이유 — (i) 컨센서스는 ASIC 영향 최소 가정 (ii) FY28 Rubin 램프 리스크 미반영.

#### Bull — 확률 20%

**전제 조건:**
- Vera Rubin이 Blackwell 대비 성능 2x, 전력 효율 1.5x 달성
- OpenAI 10GW + Stargate 전체 배치 일정 준수 (2027년까지 15GW+)
- China DC 매출 $40B 완전 회복 (25% 미국 공제 후 순 $30B 기여)
- Agentic AI 인퍼런스 폭증 (단위당 추론 10~100x 증가)
- ASIC 점유 15% 이하 제한 (AMD·커스텀 모두)
- GM 75%+ 유지, Op Margin 60%+ 유지

**시나리오 진입 신호:**
- Rubin GB300 양산 정시 + 성능 벤치마크 2x 확인
- 하이퍼스케일러 캐펙스 2027 $1T 돌파
- NVDA 분기 매출 $100B+ 돌파 (Q3 FY27 전후)

**DCF 계산:**
```
매출 CAGR (FY26→FY29): +54%
FY27 매출: $410B
FY28 매출: $570B
FY29 매출: $720B
FY29 GM: 75%, Op Margin: 60%
FY29 Op Income: $432B
FY29 NI (14% 세율): $372B
FY29 EPS: $15.83
Applied PE: 30x
────────────────
FY29 목표가: $475
현재가 내재가치 (3Y 10% 할인): $357
```

**실현 가능성 분석 (Bull):**

| 전제 조건 | 실현 가능성 | 근거 | 선행 사례 / 반례 |
|---------|-----------|------|----------------|
| Rubin 성능 2x, 전력 1.5x | **중간** | 연간 사이클 달성 경험, 3nm→2nm 미세화 일정 | 선행: Hopper→Blackwell도 유사 진화. 반례: H200 마이너 업그레이드 수준 |
| OpenAI 10GW + Stargate 15GW 정시 | **낮음~중간** | 파워 제약, interconnection queue 지연 | 반례: Gartner 2027년 40% DC 파워 제약 전망 |
| China DC $40B 완전 회복 | **낮음** | 정치 변동성 (Trump 정책 번복 가능) | 반례: H20 원래 허가 → 금지 → 재허가 지그재그 |
| Agentic AI 인퍼런스 10x+ | **중간** | ChatGPT/Copilot 성장 궤적 연장 | 선행: 2024~2025 Inference token 10x 성장. 반례: ROI 증명 속도 |
| ASIC 점유 15% 제한 | **낮음~중간** | 하이퍼스케일러 자체 개발 가속 중 | 반례: Google TPU v7/AWS Trainium3/MSFT Maia 200 모두 성능 급진 |
| GM 75%+ Op Margin 60%+ 유지 | **중간** | 현재 궤적 유지 가정 | 반례: 가격 경쟁 시 GM 하락 불가피 |

**실현 경로 (인과 체인)**:
Rubin 정시 양산 → 성능 리드 확보 → ASIC 점유 제한 + 하이퍼스케일러 Rubin 대량 구매 → FY28 매출 $570B → GM/Op Margin 유지 → 시장 Multiple 유지 → Bull 시나리오 성립

**전제 간 독립성**: 
- Rubin 성공과 Stargate 배치는 **연관됨** (Rubin 성능이 Stargate 경제성 결정)
- China 회복은 **독립** — 다른 전제와 무관하게 정책 변동 가능
- GM/Op Margin 유지는 **ASIC 점유 제한의 종속 변수**

**종합 실현 확률 판단**: 개별 전제들은 각각 30~50% 실현 가능성. 독립적이면 기대값 20% 정도이나 Rubin-Stargate-Margin 체인이 연결되어 있어 실제 가중 확률 **20%** 유지. 과대 아님.

**붕괴/전환 조건**: 
- Rubin 양산 6개월+ 지연
- OpenAI 첫 1GW 배치 2H'26 미달
- 하이퍼스케일러 1사 이상 자체 ASIC 50%+ 전환 선언

---

### 8-3. 가중평균 내재가치

```
시나리오       확률    FY29 목표가   현재 내재가치   기여
─────────────────────────────────────────────────────
Extreme Bear   15%    $36          $27            $4.05
Bear           25%    $132         $99            $24.75
Base           40%    $287         $216           $86.40
Bull           20%    $475         $357           $71.40
─────────────────────────────────────────────────────
가중평균 내재가치:                                 $186.60
가중평균 범위:           Extreme Bear $27 ~ Bull $357
현재가 $198.35 대비:     -5.9% (하방에 가까운 중간)
```

**확률 배분 근거**:
- **Extreme Bear 15%**: AI 버블 터짐·초기 피크 가능성은 실재하나, (i) OpenAI 10GW 등 다년 확정 수주 (ii) 엔터프라이즈 AI 상품화 진전 (iii) 주권 AI 수요 기반이 완화. 보수적으로 15% (10~20% 범위 중앙)
- **Bear 25%**: ASIC 점유 확대 + 캐펙스 감속이 가장 현실적 리스크 시나리오. MI400 양산 시점(2H'26)이 트리거 — 25% 배정
- **Base 40%**: 컨센서스 궤적 연장. $370B FY27 부합 + 소폭 마진 압축. 35~45% 범위 중앙
- **Bull 20%**: Rubin 성공·ASIC 제한·China 회복의 **3중 조건**이 모두 충족되어야 성립. 각 조건 50% 실현 가정 시 독립 확률 12.5%이나, Rubin 성공이 다른 조건 견인하는 연쇄 효과로 20%로 상향

> Bear + Extreme Bear 합 = 40% (가이드 35%+ 기준 만족, 보수적 가중)

### 8-4. 실적 데이터 — 현재 어디에 위치하는가

| 지표 | FY26 실측 | YoY | DCF Case 위치 |
|------|------|-----|-------------|
| 매출 | $215.9B | +65% | Base와 Bull 사이 (진행 중) |
| Data Center 매출 | $193.7B | +71% | Bull 경로 |
| GAAP GM | 71.1% (FY), 75.0% (Q4) | -4pp (FY), +1pp (Q4) | Base (FY전체) / Bull (Q4 스냅샷) |
| Op Margin | 60.4% | +2pp | Base/Bull 경계 |
| Net Income | $120.1B | +60% | Base 경로 |
| EPS (GAAP) | ~$4.94 | +65% | Base 트랙 |
| FCF | $96.7B | — | Base |
| Q1 FY27 가이던스 | $78B (±2%) | +55% | Base 상단 |

**트렌드 판단 (코드 블록)**:
```
매출 궤적: FY24 $60.9B → FY25 $130.5B → FY26 $215.9B → FY27E $370B
GM 궤적 (GAAP): FY25 75% → FY26 71%(H20 write-down) → Q4 FY26 75% 회복
DC 매출 분기: Q1 $39B → Q2 $41B → Q3 $51B → Q4 $62.3B (가속)
──────────────────────────────────
현재 위치: Base ~ Bull 경계 (Q4 FY26 스냅샷은 Bull 쪽으로 경사)
트렌드 방향: 가속 → Bull 쪽
단, FY27 하반기 캐펙스 발언·Rubin 출하 확인 필요
```

**가이던스 반영 시 방향**:
- **Q1 FY27 $78B 가이던스 달성**: FY27 매출 $370B+ 시나리오 지지 → Base 확고 + Bull 가능성 상승
- **Q1 FY27 미달 (<$75B)**: Bear 진입 경계

**핵심 관찰**: 
- **가장 중요한 변수**: Data Center 분기 매출 가속·감속 (특히 Networking 비중)
- **향후 확인 시점**: 
  - Q1 FY27 실적 (2026-05-20 예정)
  - Rubin GB300 양산 시점 (2H'26)
  - OpenAI 첫 1GW 배치 (2H'26)

### 8-5. 가치평가 결과

| 지표 | 수치 | 평가 |
|------|------|------|
| 현재 주가 | $198.35 (52주 고점 대비 -6.5%) | 고점 근접 |
| Forward PE (FY27 EPS ~$8.34) | 23.8x | 역사적 평균(28x) 대비 저평가, 섹터 평균(25x) 수준 |
| PEG (FY27 기준 70% 성장) | ~0.4 | 구조적 저평가 신호 (단, 성장 지속 조건부) |
| 가중평균 내재가치 | $186.60 ($27~$357 범위) | 현재가 대비 **-5.9%** |
| 손익비 (Base vs Bear) | 업사이드 $87 / 다운사이드 $99 | 0.88 (불리) |
| 손익비 (Base vs Extreme Bear) | $17.6 / $171.4 | 0.10 (매우 불리) |
| 애널리스트 평균 목표가 | $264~273 | +33~38% 상방 (참고용, 12개월 전망) |

**결론**: 가중평균 내재가치 $186.60은 현재가 대비 소폭 하방(-5.9%). Base 시나리오 달성 시 +9% 수익(3년 @ 10% 할인 후), Bull 시나리오 실현 시 +80% 상방. 다만 Bear·Extreme Bear 합산 다운사이드가 상방 대비 크므로 **"보유"** 판정. 매수 판정 기준(20%+ 할인) 미달. 단, Q1 FY27 실적·Rubin 배치 일정이 Base→Bull 경로 진입을 확인시키면 재평가 여지.

---

## 종합 판정

```
[ NVDA ] 평가 요약
────────────────────────────────
비즈니스 퀄리티  : ✅ CUDA 생태계 기반 Wide Moat, GAAP Op Margin 60%+ / NI 마진 55%+ 압도적
시장 환경        : ✅ 2026 하이퍼스케일러 캐펙스 $700B, $1T 2027 AI 인프라 지출 전망
가치평가         : ⚠️ 가중평균 내재가치 $187 vs 현재 $198 — 업사이드 부족, 손익비 불리
리스크           : ⚠️ ASIC 내재화·Power 제약·China 정치가 중기(2~3년) 트리거
────────────────────────────────
종합 의견        : 보유
────────────────────────────────
핵심 모니터링:
  1. Data Center 분기 매출 성장률 & GM (Q1 FY27 발표 2026-05-20)
  2. Rubin GB300 양산 및 OpenAI 첫 1GW 배치 일정 (2H'26)
  3. 하이퍼스케일러 자체 ASIC 캐펙스 비중 (Maia/TPU/Trainium) — 30%+ 돌파 시 Bear 진입
```

**취약한 숫자**:
- **Base FY29 EPS $11.49**: 컨센서스 $12.85 대비 -10%. 마진 압축 가정 논쟁 가능
- **Bull Applied PE 30x**: 현재 Forward PE 23.8x 감안 시 공격적 (재상승 가정)
- **Extreme Bear Applied PE 12x**: 과거 NVDA 사이클 하단(2022)에서도 20x였음 — 12x는 Cisco 2002년 수준으로 매우 공격적 보수 가정
- **하이퍼스케일러 NVDA 매출 비중**: 10-K 공시 "3사 10%+"만으로는 실제 비중 추정 제한

---

## 분기별 점검 기록

| 날짜 | 실적 요약 | Case 위치 변화 | 가설 업데이트 |
|------|----------|-------------|-------------|
| 2026-04-19 | FY26 종료 ($215.9B, +65%). Q4 FY26 $68.1B (+73%) | Base 트랙 + Q4만 Bull 경사 | 최초 Base 분석, thesis 유지 |

**작성 트리거**: 
- Q1 FY27 실적 발표 (2026-05-20)
- 즉시 재검토 트리거(7번) 충족 시
- Rubin 양산/OpenAI 배치 마일스톤 달성·지연 시
