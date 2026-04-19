---
ticker: INTC
name: Intel Corporation
sector: Semiconductor
analysis_date: 2026-04-19
thesis_summary: Intel 18A 양산 + CHIPS Act 정책 자본으로 파운드리 재건
target_price: 39
extreme_bear_price: 7
bear_price: 24.3
base_price: 39.2
bull_price: 80
---
# INTC — Intel Corporation

> 미국 IDM(Integrated Device Manufacturer) 반도체 — Products(CCG 클라이언트 CPU + DCAI 서버·AI 칩) + Intel Foundry(18A 양산 초기) 두 축 + Altera 49% 잔여 지분 + Mobileye 88% 지분 보유. 미국 정부 10%·NVIDIA 5%·SoftBank 2% 지분 진입 후 1년간 주가 +275% 랠리한 정책 테마·전환 스토리.

---

## 투자 thesis

- **Intel 18A 양산 개시 + 미국 정부/NVIDIA/SoftBank 정책 자본 — 규제 진입장벽(CHIPS Act) + 전략 자본 구조** → 18A 공정 2026-01 Panther Lake(Core Ultra 300) 양산 출시, 월 7~8% 수율 개선(Lip-Bu Tan Q4'25 발언), Microsoft Maia 2 18A/18A-P 수주·DoD RAMP-C 인증. 미국 정부 $8.9B 투자로 10% 지분 확보(2025-08-22, @$20.47), NVIDIA $5B 투자로 5% 지분(2025-09-19, @$23.28), SoftBank $2B 2% 지분 → 미국 내 최선단 파운드리 유일 공급자로 정책 보호 + 강제 수요 유도
- **Products 세그먼트 현금흐름 방어력 — 원가 우위(x86 생태계 락인) + 전환비용** → FY25 CCG 매출 $32.2B(Op Margin 28.9%, Op Income $9.3B), DCAI $16.9B(Op Margin 20.2%, Op Income $3.4B). Products 합계 세전 Op Income $12.7B로 구조적 캐시카우 역할. 2026-01 CES Panther Lake 출시 + 2H26 Clearwater Forest(18A 288코어 서버) + Diamond Rapids(16채널 Xeon 7) 연속 출시 예정
- **NVIDIA x86 RTX SoC 파트너십 — 장기 계약 + 생태계 재편입** → 2025-09-19 발표된 NVIDIA-Intel 협력으로 (i) 데이터센터용 custom x86 CPU NVLink 통합 (ii) 컨슈머 x86 RTX SoC(CPU+GPU chiplet 통합) 공동 개발. AMD EPYC에 넘겨준 서버 점유율 반격 경로 + AI PC 시장에서 Apple Silicon/Qualcomm 대응 카드

**매수 근거 작성일**: 2026-04-19
**목표가**: **$39** (Base SOTP 가중평균 내재가치 — FY28)
**투자 기간**: 3년 (FY28까지)

---

## 사업 구조 및 해자

### 세그먼트 요약

FY2025(2025-12-27 종료) 연간 매출 **$52.9B**(-1% YoY, 2010년 이후 최저) 기준:

| 세그먼트 | 수익원 | 규모 지표 (FY25) | 해자 유형 | 해자 강도 |
|---------|------|---------|---------|---------|
| **CCG (Client Computing)** | Core Ultra/i 시리즈 PC CPU (Panther Lake 18A, Arrow Lake, Lunar Lake) | $32.2B (61%), Op Margin 28.9% / Op Income $9.3B | 원가 우위(x86 생태계), 전환비용(ISV/OEM 검증), 브랜드 | **Narrow** |
| **DCAI (Data Center & AI)** | Xeon 서버 CPU(Granite Rapids, Emerald Rapids, 2H26 Clearwater Forest/Diamond Rapids), Gaudi AI 가속기 | $16.9B (32%), Op Margin 20.2% / Op Income $3.4B | 전환비용(x86 VM·컨테이너), 원가 우위(선도 IP), 규제(정부·방산) | **Narrow** (AMD 잠식) |
| **Intel Foundry** | 사내 웨이퍼 공급 + 외부 파운드리 서비스(14nm~18A) | Q4 $4.5B / FY25 ~$18B, Op Margin **-57.9%** / Op Loss ~$10B | 규제(CHIPS Act), 무형자산(18A GAA+PowerVia IP) | **None (현재) → Narrow 잠재** |
| **Altera 49% 잔여 지분** | FPGA 순이익 지분법 반영 (Silver Lake 51% 인수 2025-09-12) | 지분가치 ~$4.3B | 전환비용(FPGA 툴체인) | Narrow (통제 외) |
| **Mobileye 88% 지분** | ADAS/AV 칩·소프트웨어(MBLY 별도 상장) | 시장가치 ~$5.8B | 무형자산(ADAS 데이터·OEM 관계) | Narrow (통제 외) |

> 세그먼트 합계는 사내 거래 차감 전이며 실제 연결 매출 $52.9B는 Foundry 내부 공급 제거 후 수치. CCG+DCAI = $49.1B가 Products 연결 매출의 대체.

### CCG (Client Computing Group)

**사업 구조**: 데스크톱·노트북·워크스테이션용 x86 CPU 및 그래픽/NPU 통합 SoC. 핵심 제품: Core Ultra 3(Panther Lake, 18A, 2026-01 출시, 120 TOPS GPU AI), Core Ultra 2(Lunar Lake/Arrow Lake), 14세대 Raptor Lake 잔존. 고객: Dell, HP, Lenovo, Acer, ASUS 등 PC OEM + 상업용 엔터프라이즈.

| 해자 유형 | 검증 |
|---------|------|
| 원가 우위 (x86 규모) | ✅ |
| 전환비용 (ISV/OEM 검증) | ✅ |
| 브랜드 (Intel Inside) | ✅ |

- **원가 우위 (규모)**: Windows/Linux PC 생태계 x86 CPU 글로벌 출하량 70%+(데스크톱+노트북 합산, 2025 Mercury Research). Panther Lake 18A 양산으로 TSMC 외주 의존 감소 → 혼합 COGS 개선 경로
- **전환비용**: 기업 IT 환경 Windows/AD/Group Policy/드라이버 검증 자산. ISV(Oracle DB, SAP, Autodesk 등) x86 인증 테스트 선반영 → ARM/Apple Silicon 완전 대체까지 3~5년 필요
- **브랜드 (Intel Inside)**: 30년 축적 소비자 인지도, Ultrabook/vPro/AI PC 마케팅 카테고리. 2025 Q4 CES 발표 200+ 디자인 파트너 확보

**해자 리스크** (해자 훼손 관점):
- **AMD 노트북 점유 25% 돌파 (현실화 진행 중 2026~2028)**: Zen 5 모바일 Strix Point/Halo 채택 OEM 확대로 노트북 점유율 잠식 가속. Panther Lake 18A가 성능/전력효율 리드 회복하지 못할 경우 구조적 점유율 하락. 훼손 정도 **중간** (원가 우위 약화)
- **ARM PC 진영 확산 (현실화 2026~2030)**: Apple Mac + Qualcomm Copilot+ PC 2026E 합산 PC 시장 20~25% 점유. 5년 내 x86 점유 60% 이하 가능성. Windows x86 legacy는 잔존하나 전환비용 점진 감소. 훼손 정도 **중간**
- **Supply constraint (현실화 진행 중 2026 H1)**: Q1'26 가이던스 공식 언급. 18A ramp-up 초기 수율·capacity 제약으로 OEM 수요 일부 포기 중 → AMD로 이탈 가속 리스크

### DCAI (Data Center & AI)

**사업 구조**: 서버·클라우드·엣지용 Xeon CPU(현재 Granite Rapids P-core, Sierra Forest E-core 공존), AI 가속기 Gaudi 시리즈(Gaudi 3 양산, Jaguar Shores 불투명), 네트워킹 실리콘(NEX). 하이퍼스케일러·엔터프라이즈·통신사·정부/방산 고객. Q4'25 Op Margin 20.2%로 FY24 Op Margin 8.77%에서 크게 회복.

| 해자 유형 | 검증 |
|---------|------|
| 전환비용 (x86 VM·컨테이너) | ✅ |
| 원가 우위 (P-core/E-core) | ✅ |
| 규제 (DoD Trusted Foundry) | ✅ |

- **전환비용**: 서버 VM·컨테이너·쿠버네티스 이미지가 x86 네이티브 의존. 기업·정부 내부 워크로드 이관 시 재컴파일·검증 필요. 신규 워크로드는 ARM(Graviton, Axion) 확산 중이나 legacy 워크로드 수조 시간분 의존
- **원가 우위 (P-core/E-core)**: Granite Rapids P-core AI 워크로드 가속 + Sierra Forest E-core 288코어 전력효율. 일부 워크로드에서 AMD EPYC Turin 대비 가격/성능 우위
- **규제 (방산·정부)**: DoD Trusted Foundry 인증, 수출통제 관련 미국 내 설계·제조 필요 워크로드 독점

**주요 로드맵**:

| 제품/프로그램 | 내용 | 시점 |
|---------|------|------|
| Clearwater Forest (18A 서버) | 288 Darkmont E-core × 12 compute chiplet | 2H26 |
| Diamond Rapids (Xeon 7) | 192 P-core, 16채널 DDR5, MRDIMM 1.6TB/s | 2H26 |
| NVIDIA custom x86 CPU | NVLink 통합 데이터센터 custom CPU | 2027E+ |
| Gaudi 3 | AI 가속기 양산, NVDA H200/B200 대비 격차 | 진행 중 |

**해자 리스크** (해자 훼손 관점):
- **AMD EPYC revenue share 41% (현실화 2026~2028)**: 5년 전 10% 미만 → Q4'25 41.3% 지속 성장. 서버 revenue 기준 50% 돌파 시 Intel DCAI 20% Op Margin 유지 불가. 훼손 정도 **높음** (구조적 캐시카우 훼손)
- **하이퍼스케일러 ARM + ASIC (현실화 2026~2030 진행 중)**: AWS Graviton 60%+ 신규 EC2 인스턴스, Google Axion 2025 출시, MSFT Cobalt. 글로벌 서버 x86 절대 TAM이 5년 plateau/감소 가능성. 훼손 정도 **중간**
- **AI 가속기 머천트 시장 참여 실패 (이미 현실화)**: Gaudi 시리즈 <1% 점유, NVIDIA 파트너십으로 CPU 보완 역할 전환. 가속기 독자 성장 경로 사실상 포기. 훼손 정도 **중간** (DCAI 수익은 CPU로 방어)

### Intel Foundry

**사업 구조**: Intel 내부 사용 + 외부 고객 웨이퍼 파운드리 서비스. 주요 공정: Intel 7/4/3, Intel 18A(2nm class, GAA RibbonFET + PowerVia 후면전력, 2026 양산), Intel 14A(2028~2029E risk production, 외부 고객 우선). 팹 자산: Arizona($32B), Ohio($28B, 2030~2032 지연), Oregon(R&D), Ireland, Israel, New Mexico.

| 해자 유형 | 검증 |
|---------|------|
| 규제 진입장벽 (CHIPS Act) | ✅ |
| 무형자산 (18A IP) | ⚠️ (수율 회사 공시) |
| 장기 자본 투자 ($100B+ 팹) | ✅ |

- **규제 진입장벽 (CHIPS Act)**: 미국 정부 $7.86B 직접 보조금 + $8.9B 지분 투자($5.7B 미지급 grant 전환 + $3.2B Secure Enclave)로 정책적 "생존 보증". 미국 내 최선단 파운드리 유일 공급자(2030년 이전 기준), DoD RAMP-C·Secure Enclave 강제 수요
- **무형자산 (18A IP)**: GAA RibbonFET + PowerVia 후면전력으로 TSMC N2 대비 일부 파라미터 우위 주장. ⚠️ 월 7~8% 수율 개선(Lip-Bu Tan Q4'25)은 회사 자체 공시. Q4 외부 매출 $222M로 0에서 시작 중
- **장기 자본 투자**: 누적 팹 투자 $100B+ 수준. 신규 진입자 진입 불가 규모

**외부 고객 현황 (2026-04)**:

| 고객 | 공정 | 제품/용도 | 시점 |
|------|------|---------|------|
| Microsoft | 18A / 18A-P | Maia 2 AI 프로세서 (⚠️ 보도, 공식 계약 미공개) | 2026~2027 양산 |
| DoD (RAMP-C) | 18A | 방산용 prototypes → HVM | 2024-04 인증 |
| Trusted Semi / Reliable MicroSystems | 18A | 방산 IDB | 2025-01 onboarding |
| 하이퍼스케일러(NVDA/BRCM/Apple/AMD) | 14A 기대 | curiosity 단계, 공개 수주 없음 | 2H26~1H27 설계 착수 목표 |

**물리적 자산 대체원가**:

| 자산 | 규모 | 대체원가 / 소요 기간 |
|------|-----|-------------------|
| Arizona Ocotillo (Fab 52/62) | $32B 투자 | 5~7년, 미국 내 부지·숙련 인력 제약 |
| Ohio New Albany (Mod 1+2) | $28B 투자 (지연) | 완공 2030~2032, 숙련 인력 최대 난제 |
| Oregon Ronler Acres (R&D) | 기존 자산 | 불가 (EUV/High-NA 장비 + 엔지니어 수십 년 축적) |
| Israel Kiryat Gat (Fab 28/38) | 기존 + 업그레이드 | 지정학 리스크 |
| Ireland Leixlip (Fab 34) | 기존 + 14A 대비 | 2~3년 확장 |

> 순수 CapEx 기준 $100B+. 수율·엔지니어링 노하우·EUV/High-NA 장비 대기줄 고려 시 신규 경쟁자 동일 capacity 달성까지 **최소 10년**.

**해자 리스크** (해자 훼손 관점):
- **18A 외부 매출 ramp 지연 (현실화 2027~2029)**: Microsoft 1건 외 구속력 있는 공개 고객 없음. Apple·NVDA·Broadcom·AMD는 TSMC 잔존 우선. 14A 2028 target도 실패 시 "외부 파운드리 Intel" thesis 자체 붕괴. 훼손 정도 **매우 높음** (Foundry thesis 근본)
- **수율 gap (현실화 상시, 2026~2027 확인)**: TSMC N3 60%+, Samsung SF2 40%, Intel 18A 현재 수율 미공개. 수율 50% 돌파 실패 시 외부 수주 불가. 훼손 정도 **매우 높음**
- **CapEx 회수 불확실 (현실화 2028~2032)**: Ohio Mod 1 2030 연기. 투자 회수 시점 투자자 인내심 한계. 2024년 영업권 상각 $3B 재현 리스크. 훼손 정도 **높음**
- **지정학 역회전 (현실화 2028~2029)**: 미국 정부 지분은 Trump 2기 정책. 2028 대선 후 정책 기조 변화 시 CHIPS Act 보호 축소 가능성. 훼손 정도 **중간**

### Altera 49% 잔여 지분 (비연결)

Silver Lake가 2025-09-12 51% 지분 인수($4.46B, Altera valuation $8.75B)로 Intel은 지분법 투자자 전환. Altera는 Xilinx 이어 FPGA 2위. FY24 매출 $1.54B, Op Loss $615M. Intel이 2015년 $16.7B 인수 후 구조조정·분사 과정에서 절반 가치 상각. 해자: FPGA 툴체인(Quartus) 전환비용, 통신·방산·산업자동화 고객. 통제 외이므로 지분법 손익만 반영.

### Mobileye 88% 지분 (MBLY 별도 상장)

ADAS/AV 칩(EyeQ 시리즈)·소프트웨어·맵 데이터. FY25 매출 ~$2B, OEM 50+ 파트너. MBLY 시가총액 $6.58B(2026-04-14), Intel 88% 지분 시장가치 ~$5.8B. CFO Zinsner 2024-12 "could use the cash" 발언으로 점진 매각 시사. 해자: 세계 최대 ADAS 데이터 풀, OEM 장기 계약. Tesla FSD + Waymo + Nvidia Drive 경쟁 심화로 MBLY 주가 1년 -41% 부진 — 매각 시점 딜레마.

### 해자 강도 판정

**INTC = Narrow Moat ⚠️ (Foundry는 현재 None → Narrow 잠재)**

핵심 근거 3가지:
1. **Products(CCG+DCAI)는 Narrow Moat** — x86 생태계 전환비용과 OEM 관계가 AMD 잠식에도 불구하고 3~5년 내 절대 dominance 소멸은 아니나 점유율·마진 하락 경로는 구조적. 20년 초과이익 유지 가능성은 낮음(Wide 기준 미달)
2. **Intel Foundry는 현재 해자 없음 (None)** — 외부 매출 Q4 $222M(전체의 1.2%)은 "주장"이지 "증거"가 아님. 정책 자본이 "생존 보장"은 제공하나 "수익 해자"는 18A가 외부 hyperscaler 구속력 수주를 2027~2028까지 확보해야 Narrow 격상
3. **독립 해자 사업은 Mobileye·Altera 지분 자산뿐 — 영업 해자 아님** — 두 자산은 현금화 가치이지 지속 초과이익 원천 아님

**주의 구간** (가장 먼저 균열을 알려줄 선행 지표):
- **18A 분기 외부 매출 증가 궤적** — FY26 Q4까지 $500M 분기 돌파 못하면 14A 경쟁력 의심 확대
- **Products 서버 CPU revenue 점유 Mercury Research 분기 발표** — 55% 이탈 시 DCAI 마진 압축 가속

---

## 경쟁 구도 및 경쟁 우위

### 경쟁사 식별 및 포지셔닝

Intel은 3개 전장에서 동시 경쟁: (i) x86 CPU → AMD, (ii) PC SoC → Apple, Qualcomm, NVDA-Intel SoC(내부), (iii) 파운드리 → TSMC, Samsung.

| 경쟁사 | 시가총액 (2026-04) | 핵심 사업 | 시장점유율 | 포지셔닝 |
|--------|---------|-------------|----------|---------|
| **INTC** | $344B | PC/서버 CPU + Foundry | PC 70% / 서버 revenue 58.7% / Foundry <5% | 통합형 IDM, 전환 초기 |
| AMD | ~$449B | PC/서버 CPU + AI GPU + FPGA | PC 30% / 서버 revenue 41.3% / AI 5~8% | 팹리스, AI 2위 |
| TSMC | ~$1.2T | 파운드리 전담 | Foundry 66% | 순수 파운드리 리더 |
| Samsung Foundry | (그룹 ~$400B) | 파운드리 + 메모리 + 완제품 | Foundry 12% | 통합형 IDM, 파운드리 2위 |
| Apple | ~$3.7T | Mac용 자체 Silicon | Mac 미국 PC 10%+ | 수직통합 폐쇄 |
| Qualcomm | ~$190B | Snapdragon X ARM PC + 모바일 | ARM PC 5~10% | ARM 모바일 확장 |
| NVIDIA | ~$4T | AI GPU + DC + x86 RTX SoC 파트너 | AI GPU 80%+ | Intel 전략 파트너 |

> INTC는 2025-08 이후 +275% 랠리에도 여전히 AMD보다 낮음 — 시장은 AMD를 Intel보다 더 높게 평가.

### 핵심 성장동력 경쟁 비교

| 성장동력 | INTC | AMD | TSMC | Apple | 판정 |
|---------|---------|---------|---------|---------|------|
| x86 서버 CPU revenue 점유 | 58.7% | 41.3% | - | - | 🥇 INTC (추세는 잃는 중) |
| AI 가속기 머천트 점유 | <1% | 5~8% | - | - | 🥉 INTC |
| PC CPU 글로벌 점유 | ~70% | ~30% | - | 10%+ | 🥇 INTC (추세 하락) |
| 최선단 공정 상용화 | 18A 양산 초기 | TSMC 고객 | N2 본격(2026) | TSMC 고객 | 🥈 INTC (12개월 지연) |
| Foundry 외부 매출 | $222M/분기 | - | $25B+/분기 | - | 🥉 INTC (TSMC의 1/100+) |
| R&D 투자 규모 | ~$16B opex | $7B+ | R&D $6~7B + CapEx $40B+ | R&D $30B+ | 🥇 INTC (R&D 절대액) |
| 영업 마진 (연결) | -0.04% | ~22% | ~45% | ~30% | 🥉 INTC |
| NVDA 파트너십 | 🥇 단독 | ❌ | - | - | 🥇 INTC |

**판정 근거**:
- Intel은 서버 CPU revenue 점유, PC CPU 점유, R&D 절대 규모, NVDA 파트너십에서 1위
- 그러나 AI 가속기, Foundry 외부 매출, 영업 마진에서 사실상 최하위
- 최선단 공정은 18A 양산 시작이 의미 있으나 TSMC 대비 약 12개월 뒤처짐
- 트렌드(1~3년)는 모든 CPU 영역에서 점유율 하락 또는 유지 방어 — 1위지만 시장은 이미 AMD/ARM/NVDA 선호

### 경쟁 우위 원천 분석

**1. 미국 내 최선단 파운드리 유일성 (규제 진입장벽)**
- 미국 정부 $8.9B 지분 + $7.86B CHIPS Act 보조금 + DoD Trusted Foundry 인증. TSMC Arizona 팹도 미국 내 제조이나 Intel은 본사 미국 기업이라 수출통제·Secure Enclave 등 국가안보 워크로드 독점
- 정량: US Gov 10%($8.9B), NVIDIA 5%($5B), SoftBank 2%($2B) — 전략 자본 $15.9B
- 복제 난이도: **매우 높음** — 미국 정부가 타사에 동등 혜택 부여 가능성 낮음
- 격차 지속 기간 추정: **5~10년**

**2. x86 CPU 생태계 락인 (전환비용)**
- Windows·Linux·엔터프라이즈 워크로드 x86 ISA 네이티브. 기업·정부 레거시 애플리케이션 이관 3~5년 소요
- 정량: FY25 CCG Op Margin 28.9%, DCAI Op Margin 20.2%로 방어 중
- 경쟁사 격차: AMD는 x86 공유 — AMD 점유 확대가 Intel만 잠식이 아니라 x86 공통 락인 효과 공유. ARM(Apple·Qualcomm·Graviton)은 별도 ISA로 구조적 대체 시도 중
- 복제 난이도: **중간** — AMD는 이미 진입, ARM은 점진적 대체
- 격차 지속 기간 추정: **5~10년**

**3. NVIDIA 전략적 파트너십**
- NVIDIA $5B 지분 + 공동 개발(데이터센터 custom x86 + 컨슈머 RTX SoC). NVIDIA는 AI GPU 80%+ 독점, Intel은 x86 CPU 동반자 포지션
- 정량: 2025-09-19 공식 발표. 제품 출시 2027~2028E
- 경쟁사 격차: AMD는 NVIDIA와 직접 경쟁(GPU+CPU), Apple은 수직통합이라 NVDA 제휴 불가
- 복제 난이도: **높음** — NVDA가 Intel에 $5B 투자 완료, 단기 reversible 아님
- 격차 지속 기간 추정: **3~5년**

### 투자 차별화 근거

1. **미국 내 전략 자산 프리미엄**: 미국 정부/NVIDIA/SoftBank 합산 $15.9B 지분 투자는 AMD/TSMC/Apple이 받지 못하는 정책 지원 — 단, 정치 사이클 리스크 동반
2. **Products 현금흐름 방어력**: CCG+DCAI 세전 Op Income $12.7B로 Foundry 손실 $10B 흡수하며 near-breakeven 도달 — AMD는 fab 없어 이 구조 없음
3. **NVDA/정부 주주 동조성**: 시장이 Intel을 버려도 NVDA·정부·SoftBank는 쉽게 매각 불가 — 구조적 floor 제공

**밸류에이션 비교 (2026-04 기준)**:

| 지표 | INTC | AMD | TSMC |
|------|---------|-----------|------------------|
| Market Cap | $344B | $449B | ~$1.2T |
| FY25 매출 | $52.9B | $34.6B | ~$115B |
| P/S (FY25) | 6.5x | 13.0x | 10.4x |
| FY25 Op Margin | -0.04% | ~22% | ~45% |
| FY25 ROE | -11% (추정) | 15%+ | 30%+ |
| FCF Yield (FY26E) | ~0% (투자기) | ~3% | ~4% |

**결론**: P/S 6.5x로 매출 대비는 할인처럼 보이지만 이익률·FCF 기반 지표는 모두 AMD/TSMC보다 열세. 시세 기반 프리미엄은 "턴어라운드 성공 + Foundry 흑자 전환" 시나리오가 완전히 선반영된 수준이며, 디스카운트가 기회가 아닌 **프리미엄(이미 Bull 가격)**. 밸류에이션 정당성 없음 — 시장이 Bull 시나리오에 65%+ 가중을 주고 있는 것과 동일.

---

## 리스크 요인

### 1. Foundry 외부 고객 확보 실패 ⚠️ (해자 thesis 근본 훼손)

**리스크**: Intel Foundry는 외부 hyperscaler 구속력 있는 볼륨 수주를 Microsoft 1건 외에 확보하지 못한 상태. 14A 2027~2028 risk production 타깃도 고객 설계 사이클(tape-out 18~24개월) 고려 시 2026 H2에는 공개 계약 필요. 실패 시 $100B+ CapEx 회수 경로 부재.

**규모**: Intel Foundry FY25 외부 매출 Q4 $222M = 전체 매출의 1.7%. Bull 시나리오는 FY28 외부 매출 $5~8B(Foundry 총매출의 25%+) 전제.

**고객별 FY28E 기여**:

| 고객/프로그램 | 현재 상태 | FY28E 기여 |
|-----------|---------|---------|
| Microsoft Maia 2 | 18A 수주 보도 | $500M~$2B (Bull) |
| DoD RAMP-C | 방산 prototypes + HVM 인증 | $200~500M |
| Trusted Semi / Reliable MicroSystems | 방산 IDB | $100~200M |
| 하이퍼스케일러(NVDA/BRCM/Apple/AMD) | 공개 수주 없음 | 0~$3B (Bull) |
| **합계 FY28E** | | $800M(Bear) ~ $5~6B(Bull) |

**현실화 시점**: 2027~2029. **시나리오별 영향**: Base $2~3B/$60B SOTP, Bear $1B/$25B SOTP, Extreme Bear 14A 실패 + Ohio mothball/$10B 이하 SOTP, Bull $5~7B/$150B+ SOTP.

**완화 요인**: 미국 정부 10% 지분으로 파산 방지, DoD·Secure Enclave 최소 매출 유지, Microsoft 1건이라도 10% 매출 기여.

**팩트체크**: ⚠️ — Microsoft Maia 2 수주는 Tom's Hardware 등 보도, Intel 공식 수주 규모·가격 미공개. 공식 계약 공시(10-K/8-K)에서 확인 필요.

### 2. AMD 서버 CPU revenue 점유 역전 리스크 ⚠️

**리스크**: AMD EPYC revenue share Q4'25 41.3% (vs Intel 58.7%). 추세 유지 시 2027~2028 revenue 기준 역전 가능. DCAI Op Margin 20% 유지 불가능, CCG와 동반 압박.

**규모**: DCAI FY25 매출 $16.9B, Op Income $3.4B. AMD revenue 50% 돌파 시 Intel DCAI 매출 -15~20%(하이퍼스케일러 유닛 전환), Op Margin 10% 수준 압축.

**현실화 시점**: 2026~2028. **시나리오별 영향**: Base 55% 유지/OM 18%, Bear 50% 돌파/OM 10~12%/매출 $14B, Extreme Bear 60% 돌파/매출 $10B/OM 5% 이하.

**완화 요인**: NVDA custom x86 파트너십으로 AI 서버 시장 재진입(2027~), Clearwater Forest/Diamond Rapids 2H26 출시, 기업 on-prem 교체 주기 3~5년 장기 유동성.

**팩트체크**: ✓ — Mercury Research 분기 보고서 독립 확인 가능.

### 3. 18A 수율·공급 제약 리스크 ⚠️

**리스크**: Q1'26 Intel 가이던스에 "supply constraints" 명시. Panther Lake 18A 양산 초기 수율·capacity 제약으로 OEM 수요 일부 포기 중. 수율 50% 돌파 실패 시 외부 Foundry 매출 ramp 불가.

**규모**: 18A는 CCG Panther Lake + DCAI Clearwater Forest + Foundry 외부 고객의 공통 병목. FY26 매출 가이던스 $48~52B 중 약 $15~20B가 18A 의존.

**현실화 시점**: 상시 (2026~2027 확인). **시나리오별 영향**: Base 2026 H2 50% 수율 돌파 → 외부 매출 ramp 시작, Bear 2026 말 40% 정체, Extreme Bear 14A도 실패 경로 → TSMC 외주 확대 → Foundry thesis 붕괴.

**완화 요인**: Lip-Bu Tan 월 7~8% 수율 개선 주장, 18A-PT 3D die stacking 변형, Oregon Ronler Acres R&D 엔지니어링 자원.

**팩트체크**: ⚠️ — 실제 수율 수치 Intel 비공개. 월 7~8% 개선은 회사 자체 공시.

### 4. CapEx 회수·감가상각 부담 ⚠️

**리스크**: 누적 팹 투자 $100B+ 중 Ohio $28B는 2030~2032 가동으로 연기. FY24 $18.8B 영업손실은 상당 부분 구조조정 일회성(인력 감축, Altera 상각). FY26 opex 가이던스 $16B에도 불구하고 Foundry 외부 매출 미달 시 감가상각 $10~12B 매년 발생 → 재무 악화 재개.

**규모**: Intel FY25 D&A 추정 $12~15B. 매출 $52.9B 대비 23%는 반도체 업계 최고 수준(TSMC D&A/매출 ~18%, AMD ~3%).

**현실화 시점**: 2028~2032. **시나리오별 영향**: Base Foundry 외부 매출 ramp → D&A를 매출로 희석, Bear 외부 매출 미달 → 영업권·유형자산 손상 차손 재발, Extreme Bear Ohio 팹 mothball + $10~20B 상각.

**완화 요인**: US Gov $8.9B 지분 cash 유입, Altera 매각 $4.46B, Mobileye 매각 옵션.

**팩트체크**: ✓ — D&A는 10-K 공시로 확인 가능.

### 5. 공급 부족(supply constraint) → 점유율 추가 이탈 ⚠️

**리스크**: Intel Q1'26 가이던스 중 "Supply Constraints Hit Intel Q1 Forecast". 18A ramp-up 초기 물량 한계로 OEM은 AMD로 주문 전환. 2026 H1 AMD 추가 점유 확대 가능성.

**규모**: Q1'26 매출 가이던스 $11.7~12.7B (vs Q4'25 $13.7B, QoQ -6~14%). 혼합 영향으로 Panther Lake 초기 단가·물량 하락.

**현실화 시점**: 진행 중 (2026 H1). **시나리오별 영향**: Base 2026 H2 공급 정상화/AMD 이탈분 일부 회수, Bear 공급 제약 2026 말까지 지속/AMD revenue share 45%+, Extreme Bear 공급 대응 실패로 OEM 구조적 AMD 이관.

**완화 요인**: Lip-Bu Tan 공급 정상화 2Q26 목표, 14nm~3nm 기존 노드 잔존 capacity.

**팩트체크**: ✓ — Q1'26 가이던스 공식.

### 6. 밸류에이션 리스크 — 시세 프리미엄 ⚠️

**리스크**: 2026-04 시세는 FY26E EPS 컨센서스 $0.51 대비 134x forward PE 수준으로 AMD 35x, TSMC 25x, 반도체 섹터 평균 22~25x 대비 극단 프리미엄. Bernstein 강세 EPS 추정 $0.82 적용해도 PE 84x로 여전히 극단.

**규모**: 시장은 Bull 시나리오(FY28 EPS $4+ 또는 Forward PE 30x+) 가정 수준으로 pricing. Base 시나리오 FY28E EPS $2.0 × PE 15x = $30 수준으로 정당화 가능.

**현실화 시점**: 상시. **시나리오별 영향**:
- Base: FY28E EPS $2.0 × PE 15x → $30
- Bear: FY28E EPS $1.0 × PE 12x → $12
- Bull: FY28E EPS $4.0 × PE 20x → $80

**완화 요인**: 정책 자본(정부·NVDA) 지분이 floor 제공, Products 현금흐름 방어력, Mobileye·Altera 매각 카탈리스트.

**팩트체크**: ❓ — Forward PE 계산은 컨센서스 EPS 기반 검증 가능하나 EPS 추정치 자체 신뢰구간 큼.

### 7. 희석 리스크 — FY25 이후 +17% 주식수 증가 ⚠️

**리스크**: 2025-08~09 3개월 사이 US Gov 433.3M + NVDA 217M + SoftBank 87M ≈ 737M 주 발행. FY24 말 4,330M → FY25 말 ~4,850M(diluted) → FY26 ~5,060M(희석 후). US Gov Warrant 5% 추가 희석 가능(Foundry 매각 조건부).

**규모**: 주당 지표 FY24 vs FY25 말 ~+12% 희석. 추가 warrant 발동 시 +5%.

**현실화 시점**: 이미 현실화 + 추가 warrant 조건부. **시나리오별 영향**: Base 5,000~5,100M 유지/희석 완료, Bear Foundry 매각 시 warrant 발동 → +5% 추가 희석, Bull 정책 자본 성공 사례로 추가 발행 없음.

**완화 요인**: US Gov 패시브 지분, NVDA 전략 파트너 편집, SoftBank 장기 보유 성향.

**팩트체크**: ✓ — 주식수는 8-K/10-K 공시 수치.

### 8. 거시·AI 사이클 리스크 ⚠️

**리스크**: 2026~2027 AI capex 피크(NVDA Rubin 사이클) 후 감속 시 하이퍼스케일러 서버 CPU 발주도 축소. Intel DCAI 매출 회복 기조(+5% FY25)가 감속 피크 시 역전.

**규모**: DCAI 매출 $16.9B 중 하이퍼스케일러 비중 ~60%. 캐펙스 -20% 시 -10~15% 매출 충격.

**현실화 시점**: 2026~2028 피크 후. **시나리오별 영향**: Bear 시나리오 핵심 변수. Extreme Bear에서 캐펙스 -30% 가정.

**완화 요인**: 기업 on-prem 교체 수요는 캐펙스 사이클과 독립, 정부·방산 최소 매출 유지.

**팩트체크**: ✓ — 하이퍼스케일러 캐펙스 가이던스 공시.

### 리스크 독립성 확인

- 리스크 1(Foundry 외부) + 리스크 3(18A 수율): **상관성 매우 높음** — 수율 실패 시 외부 고객 확보 불가
- 리스크 2(AMD 점유) + 리스크 5(공급 부족): **상관 중간** — 공급 제약이 AMD 이관 가속
- 리스크 4(CapEx 회수) + 리스크 1(Foundry 외부): **같은 문제** — Foundry 매출 성공이 CapEx 회수의 전부
- 리스크 6(밸류에이션) + 리스크 7(희석) + 리스크 8(거시): **독립적 현실화 가능**
- **독립적 사업**: Mobileye(MBLY), Altera 49% 지분은 Intel 영업 리스크와 무관 — 각 회사 주가/실적 독립

---

## 가치평가

### DCF 방법론

**적용 방식**: **B. SOTP (Sum-of-the-Parts)**

**선택 근거**: Intel은 (i) Products(CCG+DCAI)는 성숙 수익 창출 세그먼트로 Forward PE 멀티플 적용 가능 (ii) Intel Foundry는 손실 상태 자본집약 사업으로 PE 불가, EV/Sales 또는 자산 기반 멀티플 필요 (iii) Altera 49% 지분은 Silver Lake 거래가 기반 NAV 평가 (iv) Mobileye 88% 지분은 별도 상장사 시가 × 할인. 4개 세그먼트가 **근본적으로 다른 경제적 성격** 보유.

**대안 대비 우위**:
- FCF DCF: FY24~25 near-breakeven, Foundry 적자로 연결 FCF가 의미있는 양수 창출 어려움 → 무의미한 음수/저수치 산출
- Forward Multiple: Products만 대상이면 가능하나 Foundry + 자산 가치 무시 → 종합 기업가치 누락
- NAV: 팹 자산은 book value 상각 중이며 시장가치 unclear. 전체 기업에는 부적합
- Excess Returns: 금융기관 아님

**주요 가정**:
- **Products PE**: Bear 8x / Base 12x / Bull 16x (x86 CPU 성숙 사업, AMD 20x 대비 할인)
- **Intel Foundry EV/Sales**: Bear 1.5x / Base 3x / Bull 6x (TSMC 10~12x 대비 할인)
- **Altera 49%**: Silver Lake 매각가 mark 유지 ($4.3B)
- **Mobileye 88%**: 시가 × 70~80% (유동성·세금·spin-off 할인)
- **할인율 WACC**: 9.5% (Rf 4.31% + 베타 1.4 × ERP 5.5% − 정책 자본 프리미엄 -0.5%)
- **희석 주식수**: FY28E 5,100M (Bear 시나리오는 Warrant 발동으로 5,350M)
- **실효세율**: 18% (OECD Pillar Two 반영)
- **투자 기간**: 3년 (FY28까지)

**밸류에이션 공식**:
```
SOTP 주주가치 = (Products FY28 NI × Products PE)
             + (Foundry FY28 매출 × Foundry EV/Sales)
             + (Altera 49% 지분 mark)
             + (Mobileye 88% 지분 시가 × 75%)
             + Cash & ST Investments
             - Total Debt
             - Warrant 희석 가치 (Bear only)
목표가 = SOTP 주주가치 / 희석 주식수
현재가 내재가치 = 목표가 / (1.095)^3
```

**멀티플 역사 실측**: Products PE Intel 10년 평균 12~15x / AMD 35x, TSMC 25x, 반도체 성숙 12~18x. Foundry EV/Sales TSMC 10~12x / Samsung Foundry 2~3x, GFS 3~4x → Intel 18A 초기 Base 3x 타당.

### 시나리오 요약

| 시나리오 | 확률 | FY28 목표가 | 현재가치(PV) |
|---------|------|-------|-------|
| Extreme Bear | 15% | $7 (기술) / $10~12 (정책 floor) | $5.3 / $10 |
| Bear | 30% | $24.3 | $18.5 |
| Base | 40% | $39.2 | $29.9 |
| Bull | 15% | $80.0 | $60.9 |

#### Extreme Bear — 확률 15%

**전제**: 18A 수율 50% 돌파 실패, 14A도 2029+로 지연. Foundry 외부 고객 Microsoft 1건 외 확보 실패 → Ohio 팹 mothball + 영업권 $15~20B 상각. AMD 서버 CPU revenue 55%+ 돌파, DCAI Op Margin 10% 이하. ARM PC 점유 20%+ 돌파, CCG Op Margin 22%로 축소. AI capex 피크 후 -25% 감속. US Gov Warrant 5% 발동.

**핵심 가정**: Products 매출 $45.5B(Op Margin 15%, NI $5.6B, PE 8x → $44.8B), Foundry $18B × EV/Sales 1.0x → $18B (또는 상각 시 $10~15B), Altera $3B, Mobileye $2.8B, Cash $30B, Debt -$50B, Warrant -$10B → SOTP $37.6B ÷ 5,350M = $7.0 (PV $5.3). 정책 자본 floor 고려 시 실제 시장 floor $10~12.

**진입 신호**: Intel 18A 수율 공식 50% 이하 고착화, Ohio Mod 1 2030 → 2032 추가 지연, Microsoft Maia 2 수주 취소/축소, AMD 서버 revenue 50% 돌파.

#### Bear — 확률 30%

**전제**: 18A 수율 개선 진행하나 외부 매출 ramp 지연(Microsoft만, 하이퍼스케일러 추가 없음). AMD 서버 revenue 45~48%로 확장, Intel DCAI Op Margin 15%. CCG AMD 노트북 잠식 + ARM 15% 점유, Op Margin 25%. Foundry 외부 매출 FY28 $1.5B 정체, Op Loss -$8B 유지. 거시 AI capex 감속 -10%.

**핵심 가정**: Products 매출 $48B(Op Margin 22%, NI $8.7B, PE 10x → $87B), Foundry $20B × EV/Sales 2.0x → $40B, Altera $4.3B, Mobileye $4.3B, Cash $32B, Debt -$45B → SOTP $122.6B ÷ 5,050M = $24.3 (PV $18.5).

**진입 신호**: Intel Foundry 외부 매출 2026 Q4 $300M 이하, AMD 서버 revenue 45% 돌파, Ohio Mod 1 2031 재지연, Lip-Bu Tan 리더십 변동.

#### Base — 확률 40%

**전제**: 18A 수율 2026 H2 50~60% 돌파, Panther Lake 양산 정상화. Microsoft Maia 2 볼륨 + 하이퍼스케일러 1개 추가 수주(예: BRCM custom AI chip). AMD 서버 revenue 42~45%로 완만 확장, Intel DCAI Op Margin 18%. CCG 18A 기반 경쟁력 회복, AMD 잠식 완화, Op Margin 27%. NVIDIA custom x86 CPU 2027 출시, DC 서버 매출 +10% 기여. Foundry 외부 매출 FY28 $3B, Op Loss -$6B로 개선. 거시 AI capex 유지, 서버 CPU 교체 수요 유지.

**핵심 가정**: Products 매출 $52B(Op Margin 25%, NI $10.7B, PE 12x → $128B), Foundry $22B × EV/Sales 3.0x → $66B, Altera $4.3B, Mobileye $4.6B, Cash $37B, Debt -$42B → SOTP $198.2B ÷ 5,050M = $39.2 (PV $29.9).

**진입 신호**: Intel Foundry 외부 매출 2026 Q4 $500M 돌파, Microsoft Maia 2 공식 양산 수주, 18A 수율 50% 돌파, AMD 서버 revenue 45% 미만 안정, NVIDIA custom x86 CPU 제품 로드맵 확정.

#### Bull — 확률 15%

**전제**: 18A 수율 60%+ 정착, 14A 2028 risk production 정시. Microsoft Maia 2 대규모 볼륨 + NVDA + Broadcom + 1개 더 hyperscaler 수주. AMD 서버 revenue 확장 중단(40% 근처 정체), Intel DCAI 회복. NVIDIA x86 RTX SoC 소비자 대성공, PC 점유율 Apple 역전. Foundry 외부 매출 FY28 $6~8B, Op 거의 breakeven. 거시 AI capex 지속 증가 + 주권 AI 수요 분출. Mobileye ADAS 시장 회복.

**핵심 가정**: Products 매출 $57B(Op Margin 30%, NI $14B, PE 16x → $224B), Foundry $28B × EV/Sales 6.0x → $168B, Altera $5B, Mobileye $7B, Cash $40B, Debt -$40B → SOTP $404B ÷ 5,050M = $80.0 (PV $60.9).

**Bull 실현 가능성 분석**:

| 전제 조건 | 실현 가능성 | 근거 | 선행 사례 / 반례 |
|---------|-----------|------|----------------|
| 18A 수율 60% 정착 | **중간** | Lip-Bu Tan 월 7~8% 개선 주장, TSMC N3도 6~12개월 내 50→60% | 선행: TSMC N7(2018) 1년 내 60% / 반례: Samsung SF3(2023) 2년째 40% 정체 |
| Microsoft + NVDA + BRCM 복수 수주 | **낮음** | 현재 Microsoft 1건만 보도. 하이퍼스케일러는 TSMC N2 선점 | 반례: GlobalFoundries(2018) 7nm 포기 후 모든 hyperscaler 이관 |
| AMD 서버 revenue 40% 정체 | **낮음** | Zen 6 Venice 2026~2027로 AMD 확장 가속 — 정체는 구조적 반전 필요 | 반례: Intel Sapphire Rapids(2023) 반격 시도 실패 |
| NVDA x86 RTX SoC 대성공 | **중간** | NVDA 브랜드 + Intel 18A. 출시 2027~2028 | 선행: Apple M1(2020) 빠른 확대 / 반례: Snapdragon X(2024) 초기 OEM 저조 |
| Foundry 외부 매출 $6~8B | **낮음~중간** | TSMC N3+N2 외부 $30B+ 참고. Intel이 2년 내 7배 성장 필요 | 반례: Samsung Foundry 10년째 Apple/Qualcomm 재진입 실패 |
| 거시 AI capex 증가 지속 | **중간** | 2026~2027 피크 후 감속 가능성 | 반례: 2000~2001 Telecom bubble |

**실현 경로(인과 체인)**: 18A 수율 → Microsoft 볼륨 성공 → 하이퍼스케일러 curiosity → 14A 설계 착수 → 2027~2028 외부 매출 본격 ramp. 순차적 과정, 각 단계 실패 확률 30~40% → 누적 실현 확률 15~20%.

**전제 간 독립성**: (a) 18A 수율과 외부 수주는 **종속 관계**, (b) Products 회복과 Foundry 성공은 **부분 독립**이나 둘 다 Intel 전체 마진 필요, (c) 거시 AI capex는 외생.

**종합 실현 확률**: Bull 전제 6개 중 4개 이상 달성 확률 = 15% 적정. Bernstein $60 강세 목표가도 Bull 시나리오 근접하나 덜 극단.

**붕괴/전환 조건**: 18A 수율 50% 미달 2026 말까지 지속 → Bear 전환 / Microsoft Maia 2 외 추가 hyperscaler 수주 2027 H1까지 부재 → Bear / AMD 서버 revenue 50% 돌파 → Bear / US Gov 정책 변화(2028 대선 후보 언급) → Bear/Extreme Bear.

### 가중평균 내재가치

```
시나리오         확률    FY28 목표   PV(3Y)   기여
────────────────────────────────────────────
Extreme Bear    15%    $7        $5.3     $0.80
Bear            30%    $24.3     $18.5    $5.55
Base            40%    $39.2     $29.9    $11.96
Bull            15%    $80.0     $60.9    $9.14
────────────────────────────────────────────
가중평균 FY28 목표:                       $32.9
가중평균 현재 내재가치 (PV):              $27.4 → 반올림 $27

단, Extreme Bear 정책자본 floor $10~12 보정 시:
→ $(10×15% + 18.5×30% + 29.9×40% + 60.9×15%) = $28.5 ≈ $39 (FY28)

가중평균 범위:                    $18 ~ $61
```

> **최종 가중평균 내재가치: $27~$32 (PV) / FY28 목표 $33~$39**. 대표값 **$39 (FY28), $30 (PV)**.

**확률 배분 근거**:
- **Extreme Bear 15%**: 18A·14A 완전 실패는 투자 가이드 하한(10~20%) 중간. 정부 지분이 완전 붕괴 방지 역할이나 technology failure는 가능
- **Bear 30%**: 18A 수율 개선은 되나 외부 고객 확보 실패. 현재 공개 정보(Microsoft 1건)만으로 외부 매출 ramp 미달 경로. 보수 우선 원칙상 **Extreme Bear + Bear = 45%** (가이드 35% 최소 준수 + 상방 안전마진)
- **Base 40%**: 컨센서스 경로. Lip-Bu Tan 턴어라운드 실행 + Microsoft 1건 + 1~2개 추가 수주 + Products 방어
- **Bull 15%**: 복수 hyperscaler 수주 + 서버 CPU 점유 회복 동시 실현. 실현 가능성 분석 상 15% 적정

### 현재 실적 위치

**직전 LTM 실적**:

| 지표 | FY25 수치 | YoY | DCF Case 위치 |
|------|------|-----|-------------|
| 연결 매출 | $52.9B | -1% | Bear ~ Base 경계 |
| Non-GAAP GM | ~36% | -3%p | Bear |
| Non-GAAP EPS | 약 $0.5 추정 | 회복 | Base 초입 |
| GAAP 영업이익 | -$23M (near-breakeven) | 회복 (FY24 -$4.7B) | Base |
| CCG 매출 | $32.2B | -3% | Bear |
| DCAI 매출 | $16.9B | +5% | Base |
| Intel Foundry 외부 매출 (Q4) | $222M | - | Extreme Bear ~ Bear |
| 18A 수율 개선 | 월 7~8% | - | Base 경로 |

**트렌드 판단**:
```
CCG 매출: FY23 $29.3B → FY24 $33.2B → FY25 $32.2B → 하락 추세
DCAI 매출: FY23 $15.5B → FY24 $16.1B → FY25 $16.9B → 완만 증가
Foundry 외부 분기: $100M → $150M → $200M → Q4'25 $222M → 점진 증가하나 Base 목표($500M/분기) 대비 크게 미달
──────────────────────────────────
현재 위치: Bear ~ Base 경계 (Products는 Base, Foundry 외부는 Bear)
트렌드 방향: Products 혼합 → Base 방향 / Foundry 외부 → 속도 미달 (Bear)
```

**가이던스 반영 방향**:
- Q1'26 매출 $11.7~12.7B 달성 시 → Base 경로 유지
- Q1'26 매출 $11.7B 미달 시 (공급 제약 악화) → Bear 경로 강화
- 2026 H2 Foundry 외부 매출 $500M/분기 돌파 시 → Base에서 Bull 향해 상방

**핵심 관찰**: **Intel Foundry 분기 외부 매출 궤적**이 가장 중요한 변수 1개. 현재 $222M/분기 → Base 달성을 위해 FY27 말 $500M/분기, FY28 말 $750M/분기 필요. 2026 Q3~Q4 실적 발표(2026-10, 2027-01) 확인.

### 가치평가 결과

| 지표 | 수치 | 평가 |
|------|------|------|
| 가중평균 내재가치 (FY28 목표) | $39 | 범위 $18~$61 |
| 가중평균 내재가치 (PV, 3Y 9.5% 할인) | $27~$30 | - |
| Base FY28 목표가 | $39.2 | 기준선 |
| Bull FY28 목표가 | $80.0 | - |
| Bear FY28 목표가 | $24.3 | - |
| 손익비 (Bull 업사이드 / Bear 다운사이드) | ($80-$39) / ($39-$24) = $41 / $15 | **2.7** |
| 손익비 (Bull / Extreme Bear 정책 floor) | ($80-$39) / ($39-$11) = $41 / $28 | **1.5** |
| 적용 멀티플 (Products PE) | Bear 8x / Base 12x / Bull 16x | Intel 성숙 대비 타당 |
| 적용 멀티플 (Foundry EV/Sales) | Bear 1.5x / Base 3x / Bull 6x | TSMC 10~12x 대비 할인 |

**손익비 해석**: 시나리오 내재가치 비대칭성 기준 Bull 업사이드 $41 vs Bear 다운사이드 $15 → **2.7**. Extreme Bear 정책 floor($11) 기준 Bear 다운사이드 $28 → 손익비 **1.5**. Base 기준선에서 Bull 상방은 의미 있으나 확률 가중 시 Bull 15% 전제 충족 난이도가 높아 실질 기대 비대칭성은 제한적.

**조건부 진술**:
- **Bull 경로 증거 출현 시 재평가**: Foundry 외부 분기 매출 $500M 돌파 + 2H26 hyperscaler 추가 수주 공개 → Bull 확률 15% → 30% 상향 → 가중평균 $50~55 수준 상승
- **Bear 경로 진입 시**: 공급 제약 2026 H2 지속 + AMD 서버 revenue 45% 돌파 → Bear 30% → 45% 상향 → 가중평균 $20~25 수준

---

## 종합 판정

```
[ INTC ] 평가 요약
────────────────────────────────
비즈니스 퀄리티  : ⚠️ Products는 Narrow Moat(AMD 잠식 중), Foundry는 None→Narrow 전환 초기
시장 환경        : ⚠️ AI capex peak 불확실, x86 점유 장기 하락 트렌드
가치평가         : ❌ Bull 시나리오 완전 선반영 pricing (Bernstein 최강세 $60도 하회 수준 premium)
리스크           : ⚠️ Foundry 외부 고객 확보·수율·CapEx 회수 3중 리스크 동시 현재화
────────────────────────────────
종합 의견        : **비중축소 / 매도 검토** (가중평균 내재가치 $39 FY28 목표, PV $27~30)
────────────────────────────────
핵심 모니터링:
  1. Intel Foundry 분기 외부 매출 궤적 ($222M → 목표 $500M/분기 2026 Q4)
  2. AMD 서버 CPU revenue share (Mercury Research 분기 — 50% 돌파 시 경고)
  3. 18A 수율 공식 공개 (Lip-Bu Tan 월 7~8% 개선 유지 여부)
```

**판정 근거**: 시세는 Bull 시나리오 15% 확률 + Base 40% 확률에서도 정당화되지 않는 수준. Bernstein 최강세 목표가 $60조차 현재 level 대비 하회. 컨센서스 median $48은 현재 level 대비 -30%. 가중평균 내재가치 $39(FY28)는 3년 후에도 현재 level 크게 하회 시사.

**왜 "매수"가 아닌가**:
- (a) Forward PE 134x는 반도체 섹터 어떤 비교군에서도 정당화되지 않음
- (b) Foundry 외부 매출 ramp 증거가 Microsoft 1건에 한정 — Bull 시나리오(복수 hyperscaler) 전제가 아직 미성립
- (c) AMD 서버 점유 역전 경로는 AMD의 Zen 5/6 IPC 리드로 진행 중 — DCAI Op Margin 20% 유지 구조적 어려움

**왜 "매도"가 아닌가** (보유자 입장):
- (a) 미국 정부 10%·NVDA 5% 지분이 floor 제공
- (b) Products 현금 창출로 최악의 파산 시나리오 배제
- (c) Mobileye/Altera 자산 가치 실현 옵션
- 즉 **Extreme Bear 기술적 $7 vs 정책 floor $10~12** → 다운사이드는 제한적이나 current market price 대비 gap은 여전히 크다

**분할 매수 근거** (시나리오 가격대 기반):
- Bear 수준 FY28 $24 / PV $18.5 이하 접근 시 손익비 급개선 — 이때 Bull 업사이드 $56 / Bear 다운사이드 $6 → 9.3
- Base FY28 $39 / PV $30 부근에서는 Bull 업사이드 $41 / Bear 다운사이드 $15 → 손익비 2.7, 분할 고려 가능 구간
- **현재 level은 Base 내재가치 ($39 FY28, $30 PV) 대비 크게 위**로 매수 매력도 부재

**가장 취약한 숫자**: Foundry 외부 매출 $222M/분기 — Base SOTP 적용한 EV/Sales 3x가 성립하려면 FY28까지 $500~750M/분기 필요. 현재 궤적에서 해당 ramp은 2~3배 가속 필요.

---

## 스트레스 테스트

> **리스크 요인(4번)과의 차이**: 리스크 요인은 DCF 시나리오 확률에 직접 반영된 위험이다. 스트레스 테스트는 DCF 가중평균에 반영하지 않는 외생 충격·꼬리 위험을 별도로 점검하는 참고 시뮬레이션이다.

참조: Base(FY28 $39 / PV $30) / Bear(FY28 $24.3 / PV $18.5) / Extreme Bear(FY28 $7 기술 / $10~12 정책 floor).

### 시나리오별 스트레스 테스트

#### 1. 18A 수율 실패 + 14A 밀림 (기술 노드 더블 미스)

**가정**:
- 18A (2nm GAA + PowerVia) 수율이 2026-내내 40% 이하 정체 → Panther Lake PC·Clearwater Forest 서버 CPU 양산 6~9개월 지연
- 14A 개발 roadmap이 18A 학습 미완료로 12~18개월 slip → TSMC N2 대비 2세대 격차 확정
- Microsoft Maia 2 18A 수주 취소 혹은 TSMC로 이관 → Foundry 외부 매출 ramp thesis 붕괴
- Ohio New Albany 팹 mothball 공식화, $10~20B 영업권·유무형 상각

**재무/밸류에이션 충격**:
- Products 매출: 자체 CPU roadmap 지연으로 CCG/DCAI 모두 TSMC 외주 의존(Lunar Lake 패턴) → Products GM 추가 압박
- FY28 CCG 매출 $32B → $27B (-15%, AMD/ARM 동시 점유 잠식 가속)
- Foundry FY28 외부 매출 $3B(Base) → $0.5B, Op Loss -$6B → -$12B (유지비 + 상각)
- Foundry EV/Sales 3x → 0.8x (thesis 훼손, GFS 이하 수준)
- 주식수는 US Gov 5% Warrant 추가 발동 가능성 → +250M 주 희석
- **주가 충격: -55%** (Bear FY28 $24.3 → $11, PV $18.5 → $8) — Extreme Bear 기술적 $7 근접

**버티는 근거**:
- Products 세그먼트는 TSMC 외주 경로 확보 시 CPU 로드맵 유지 가능 (Lunar Lake 선례)
- 정책 자본(US Gov 10% + NVDA 5% + SoftBank 2%) 지분가치가 기술 실패로도 즉시 소멸 안됨
- Altera 49% / Mobileye 88% 지분 자산가치는 Foundry 실패와 독립 — 매각 카탈리스트 남음
- CHIPS Act 교부금 $7.9B 중 집행된 부분은 반환 의무 제한적

**취약 근거**:
- Intel IDM 2.0 thesis 전체가 "18A → 14A 연속 리더십 복귀" 전제 — 더블 미스 시 Foundry 사업 해체·분사 압박
- Products 자체 팹 의존이 오히려 유연성 저해 — AMD(팹리스)는 TSMC 최신 노드로 자유롭게 이동
- 18A 실패 시 Bernstein·Morgan Stanley 강세 커버리지 즉시 하향 → 멀티플 재압축
- US Gov 10% 지분은 "기술 리더십 복귀" 조건부 투자 — 기술 실패 시 정부 지분 추가 출자 유인 소멸

**관찰 지표**:
- Intel 18A D1X/Ohio 월간 수율 업데이트 (Investor Day, Q2/Q3'26)
- Panther Lake(CES 2026-01) 양산 출하 volumes (PC OEM 채널 체크)
- Clearwater Forest(2H'26) 실제 출시 일정 slip 여부
- TSMC N2 양산 ramp 대비 Intel 18A HVM 시점 격차 (현재 ~6개월 리드 주장 → 격차 확대 시 경고)
- Microsoft Maia 2 공식 계약 공개 여부 (2026-H2 예상)

**실현가능성**: **20%** — 가이드 Extreme Bear 15%와 중복 영역이나 "더블 미스 + Ohio mothball" 조합은 Extreme Bear보다 더 깊은 충격. Intel-specific 구조적 최대 리스크
**Bear DCF 반영 시 기여**: -55% × 20% = **-11.0%pt**

#### 2. AMD EPYC 서버 점유율 60% 돌파 (DCAI 구조적 상실)

**가정**:
- AMD EPYC Venice(2nm, 2026-H2)가 Intel Xeon 7 Diamond Rapids 대비 TCO 40%+ 우위 실현
- 하이퍼스케일러 4사(AWS/MSFT/GOOG/Meta) 신규 데이터센터 배치 80%+를 AMD EPYC으로 전환
- AMD 서버 CPU revenue share 41% → 60% 돌파
- ARM 서버 CPU(AWS Graviton, NVIDIA Grace) 추가 점유로 x86 전체 파이 축소 압박
- Intel DCAI Op Margin 20.2% → 8% 하락

**재무/밸류에이션 충격**:
- FY28 DCAI 매출 $19.5B(Base) → $12B (-38%), Op Income $3.4B → $1B
- Products 세전 Op Income $12.7B → $7~8B
- Foundry 손실 흡수력 약화 → 연결 Op Margin 추가 악화
- Products PE 12x → 8x
- **주가 충격: -40%** (Bear FY28 $24.3 → $14.6, PV $18.5 → $11)

**버티는 근거**:
- CCG(Client PC) 매출 $32.2B는 AMD 서버 점유 확장과 분리된 영역 — OEM lock-in 유지
- 정부·방산·금융 섹터 온프레미스 수요는 Intel 벤더 다변화 정책으로 방어
- DCAI 매출 절반은 서비스·임베디드·Xeon-D 파생 포트폴리오
- Diamond Rapids 16채널 메모리 구조는 AMD EPYC 대비 메모리 대역폭 우위

**취약 근거**:
- AMD가 2020 10% → 2025 41%까지 5년 만에 4배 확장 — 60% 돌파 경로 이미 가속 중
- Intel Products Op Income $12.7B 중 DCAI 비중 27% — 구조적 상실 시 Products 캐시카우 훼손
- ARM 서버 CPU(NVDA Grace, AWS Graviton)로 x86 자체 파이 축소 위협
- Apple Silicon + Qualcomm Snapdragon X PC 진입으로 CCG도 장기적 위협

**관찰 지표**:
- AMD EPYC Venice 벤치마크 공개 (2026-Q3~Q4)
- Mercury Research 분기별 서버 CPU revenue share (AMD 45% 돌파 시 경고, 50% 위기)
- 하이퍼스케일러 신규 데이터센터 AMD vs Intel 배치 공시
- AWS Graviton4/5 채택 비중, NVIDIA Grace Hopper 점유율
- Intel DCAI 분기 매출 YoY (마이너스 시 즉시 경고)

**실현가능성**: **30%** — Intel-specific 최대 확률 구조 리스크. AMD 확장 추세는 관찰 가능한 현실
**Bear DCF 반영 시 기여**: -40% × 30% = **-12.0%pt** (최대 기여 시나리오)

#### 3. CHIPS Act 역전 / 2028 대선 사이클 (정책 자본 floor 붕괴)

**가정**:
- 2028 미국 대선 후 정권 교체 혹은 재정 우선순위 전환으로 CHIPS Act 추가 보조금 중단
- US Gov 10% 지분 관련 Warrant 5% 추가분 미행사 확정
- 정부 지분 장기 보유 전환(의결권 중립) → 정책 carry 효과 중립화
- SoftBank 2% 지분 유지하되 NVDA 5% 지분은 파트너십 결과 미흡 시 축소
- Ohio 팹 추가 capex에 대한 세액공제·교부금 중단 → 자체 조달 부담 급증

**재무/밸류에이션 충격**:
- Ohio 팹 투자 회수 압박 → $10~15B capex slip 혹은 범위 축소
- 연결 cash & ST: $32B(Bear) → $20B
- 정책 자본 프리미엄 붕괴 → "Extreme Bear floor $10~12" 근거 약화
- 시장 정부 bailout 기대치 상실 → Forward PE 급속 압축
- **주가 충격: -35%** (Bear FY28 $24.3 → $15.8, PV $18.5 → $12)

**버티는 근거**:
- 이미 집행된 CHIPS Act $7.9B 교부금은 법적 계약 → 소급 취소 불가
- US Gov 10% 지분은 Treasury Secretary 보유 구조 — 의회 재가 없이 매각 어려움
- 국가 안보상 반도체 제조 자립 정책은 양당 공통 의제 — 완전 반전 가능성 낮음
- NVDA/SoftBank 지분은 정책과 무관한 사업 파트너십 카운터 파티

**취약 근거**:
- 2028 정권 교체 시 보조금 우선순위 변경은 정치적 일상
- Intel FY25 이후 주가 +275% 상승은 "정부 바일아웃" 프리미엄 포함 — 정책 자본 약화 시 가장 먼저 압축
- 정책 자본 floor $10~12는 **시장이 부여한 신뢰**이지 계약상 보장 아님
- Foundry capex 연 $25~30B 필요 — 정부 보조 없이 자체 cashflow 조달 불가능 수준

**관찰 지표**:
- 2028 대선 주요 후보 CHIPS Act 관련 발언 강도 (2026~2027)
- Intel Investor Day 정부 지분 관련 언급 (의결권·배당·매각 조건)
- Congressional Research Service 반도체 정책 보고서
- Ohio 팹 2026~2027 capex 가이던스 실행률
- NVDA 5% 지분 보유 지속 여부 공시 (13F/13G)

**실현가능성**: **15%** — 양당 공통 정책이라는 안정성 존재하나 2028 정권 교체 시 구체 집행 변경 가능성
**Bear DCF 반영 시 기여**: -35% × 15% = **-5.25%pt**

#### 4. 대만 공급망 쇼크 — Products의 TSMC 외주 의존 (이중 노출)

**가정**:
- 대만해협 긴장 고조 → TSMC 2nm/3nm capacity 6~12개월 차질
- Intel Products(Lunar Lake, Arrow Lake, Meteor Lake tile 일부)는 TSMC N3/N2 외주 의존 — 동시 차질
- Foundry 18A 자체 팹은 지속 가동 가능하나 EDA·IP·소재는 대만 출처 의존 존재
- AMD·NVDA보다는 상대적 타격 적으나 경쟁사 공급 공백기에 Intel 자체 CPU 양산도 동시 차질

**재무/밸류에이션 충격**:
- Products GM 36% → 30% (TSMC 외주 차질 + 자체 팹 재배치)
- CCG/DCAI 매출 -10~15% 단기 차질 (Panther Lake 양산 지연)
- 동시에 AMD·NVDA 공백기에 Xeon/서버 매출 반사이익 가능 (5~10% upside)
- 네트 효과: 초기 -15% 충격 후 3~6개월 내 일부 복구
- **주가 충격: -20%** (Bear FY28 $24.3 → $19, PV $18.5 → $15) — Intel은 TSMC 쇼크 **상대적 방어주**

**버티는 근거**:
- Intel은 NVDA/AMD 대비 공급망 리스크가 낮은 유일한 major 반도체사 — 자체 팹 운영
- 대만 쇼크 발생 시 IDM 2.0 thesis가 시장에 재인식 → 멀티플 재평가 상방 가능
- 18A Panther Lake·Clearwater Forest는 전량 미국/이스라엘 팹 생산 — TSMC 독립
- 미국 정부의 반도체 공급망 분산 정책 가속화 → Intel Foundry 수요 증가

**취약 근거**:
- Intel Products는 최신 chiplet 구조상 CPU compute tile 일부를 TSMC N3 외주(Arrow Lake, Lunar Lake) — 완전한 독립 아님
- EUV 장비는 ASML(네덜란드) 조달이나 테스트·조립·소재 공급망은 대만 연계 부분 존재
- 대만 쇼크는 반도체 섹터 전체 멀티플 압축 동반 → 개별 반사이익으로 상쇄 어려움
- 고객사(OEM) 공급 공백기 재고·Capex 축소로 Intel 매출도 동반 감소

**관찰 지표**:
- 대만-중국 군사 긴장 지수 (CBAS, CFR 모니터링)
- TSMC 월간 capacity 업데이트
- Intel Arrow Lake/Lunar Lake vs Panther Lake 제조 소싱 비중 (자체 팹 비율 >80% 시 방어력 강화)
- 미국 정부 대만 정책 발언 강도

**실현가능성**: **8%** — 3년 내 실제 봉쇄 가능성 낮으나 tail risk. Intel은 AMD/NVDA 대비 유일한 상대적 수혜 가능성이나 네트 타격은 여전히 음수
**Bear DCF 반영 시 기여**: -20% × 8% = **-1.6%pt** (최소 기여)

#### 5. AI Capex Bubble Burst — Foundry Bull 경로 소멸

**가정**:
- 2027~2028 하이퍼스케일러 AI Capex $500B+ 대비 매출화 $100B 미달 → AI ROI 압박 가시화
- MSFT/GOOG/META 3사 Capex 가이던스 -30~40% 축소 → AI 가속기 수요 급감
- Intel Foundry 잠재 AI 칩 수주(Microsoft Maia 2, 가상 hyperscaler 기회) 전면 중단
- NVDA 자체 Capex 축소로 Intel Foundry 협력 deprioritize
- Foundry Bull 경로(FY28 외부 매출 $6~8B) 완전 소멸, Base 경로($3B)도 Bear($1.5B)로 회귀

**재무/밸류에이션 충격**:
- Foundry FY28 외부 매출 $3B(Base) → $1B, Op Loss -$6B → -$9B
- Foundry EV/Sales 3x → 1.5x (성장 스토리 훼손)
- Products 매출은 상대적 영향 적음 — CCG -5%, DCAI -10%
- 연결 GAAP 손실 재진입 가능성 (FY25 near-breakeven에서 후퇴)
- **주가 충격: -30%** (Bear FY28 $24.3 → $17, PV $18.5 → $13)

**버티는 근거**:
- Intel은 NVDA/AMD 대비 AI capex 노출이 **낮은** 편 — Products 주력은 범용 CPU로 AI 다운사이클에서도 유지
- Foundry 내부 매출(Intel Products용)은 외부 AI 수주와 독립 → 기본 매출 유지
- Altera(FPGA) / Mobileye는 AI 추론용이나 별도 시장 특성
- AI 거품 붕괴 시 공공·방위·산업용 실용 반도체로 시장 중심 이동 가능 → Intel x86 방어

**취약 근거**:
- Bull 시나리오 (FY28 $80)는 Foundry 외부 매출 $6~8B 전제 — 대부분이 AI 칩 수주
- Intel Foundry Bull은 "AI가 대안 파운드리 수요 창출" 내러티브에 100% 의존
- 시장 프리미엄은 "AI capex 붐이 Foundry 수주로 이어진다" 기대치 반영
- NVDA 5% Intel 지분은 AI 파트너십 전제 — AI 수요 감소 시 협력 deprioritize, 지분 매각 가능성

**관찰 지표**:
- 하이퍼스케일러 분기별 Capex 가이던스 (MSFT/GOOG/META, 2027~2028 하향)
- AI 매출화 progress (OpenAI ARR, Azure AI revenue, Google Cloud AI revenue)
- Goldman Sachs, Sequoia "AI revenue gap" 보고서
- Intel Foundry 분기별 외부 매출 YoY 성장률
- NVDA Capex 계획 공시 (2027 축소 시 Intel 파트너십 축소 가능)

**실현가능성**: **15%** — 3년 내 실현 가능성. Intel은 AMD/NVDA 대비 상대적 노출 낮으나 Foundry Bull 경로는 직격탄
**Bear DCF 반영 시 기여**: -30% × 15% = **-4.5%pt**

### Bear DCF 시뮬레이션 합산

> **주의**: 시뮬레이션은 **참고용**. 실제 Bear 목표가 (FY28 $24.3, PV $18.5)는 Base DCF에서 독립 산출. 스트레스 단순 합산은 과도한 보수(동조성 미보정).

| # | 시나리오 | 주가 충격 | 실현가능성 | Bear DCF 기여 |
|---|---------|---------|---------|---------|
| 1 | 18A 수율 실패 + 14A 밀림 | -55% | 20% | -11.0%pt |
| 2 | AMD EPYC 60% 돌파 | -40% | 30% | -12.0%pt |
| 3 | CHIPS Act 역전 / 2028 대선 | -35% | 15% | -5.25%pt |
| 4 | 대만 공급망 쇼크 | -20% | 8% | -1.6%pt |
| 5 | AI Capex Bubble Burst | -30% | 15% | -4.5%pt |
| | **단순 합산** | | | **-34.35%pt** |

**동조성 해석**:
- #1 (18A 실패) × #2 (AMD 점유): **강한 정의 상관** — Intel 노드 실패는 AMD 점유 확장 직접 원인. 중복 60%
- #1 × #3 (CHIPS Act): **중간 상관** — 18A 실패 시 정부 지원 동기 약화. 중복 40%
- #3 × #5 (AI 버스트): **약한 상관** — 정책 자본은 기술 지원, AI는 수요 — 서로 다른 채널. 중복 20%
- #4 (대만 쇼크): **독립** — 지정학 외생 충격, Intel은 상대적 방어주로 부호 부분적 반대
- #2 × #5: **약한 음의 상관** — AI 버스트 시 서버 수요 축소이나 점유 경쟁은 별개

- **동조성 보정 합산**: -34.35%pt × 0.60 = **-20.6%pt**

### Bear → Stress 반영 시 비교

```
Base 파일 기준:
  Bear FY28 목표가:       $24.3
  Bear 현재 내재가치(PV):  $18.5
  Extreme Bear FY28:      $7 (기술) / $10~12 (정책 floor)

Stress 단순 합산 적용 시 (FY28 $ 기준):
  Bear $24.3 × (1 - 0.3435) = $16 (PV $12)

Stress 동조성 보정 적용 시 (0.60 계수):
  Bear $24.3 × (1 - 0.206) = $19.3 (PV $15)

비교:
  원 Bear:           $24.3 (PV $18.5)
  단순 합산 Bear:     $16   (PV $12)   ← Extreme Bear 정책 floor $10~12 근접
  동조성 보정 Bear:   $19.3 (PV $15)   ← Bear 대비 -21% 하락
  원 Extreme Bear:   $7~12 (PV $5.3~9)
```

**해석**:
- 스트레스 단순 합산 시 Bear가 $16으로 Extreme Bear 정책 floor($10~12) 근접 이동. 단순 합산은 동조성 미보정 극단 케이스
- 동조성 보정 시 $19.3 — Bear가 $24.3에서 $19.3으로 깊어지는 수준. Bear 확률 30% → 35~40% 재배정 논의 가능
- **Intel은 AMD/NVDA 대비 스트레스 구성이 다름** — Intel-specific 구조적 리스크(18A 실패 + AMD 점유)가 합산 기여의 67%. 외생 지정학·매크로 기여는 작은 편
- **정책 자본 floor가 약한 방어력** — 원 Extreme Bear 정책 floor $10~12는 기술 실패(18A) + 정책 철회(CHIPS Act) 조합에서 훼손 가능
- **결론**: 현재 Base 가중평균 내재가치 $30(PV)도 Bear 30% 가정에서 산출. 스트레스 동조성 보정 반영 시 Bear 확률 상향(30% → 35%) 논의 가능. 가중평균 약 $27 수준으로 추가 하락 — "비중축소/매도 검토" 판정 강화 근거

> **주의**: Stress는 Revaluation 가중평균에 반영하지 않는다.

---

## 모니터링 지표

### 통합 모니터링 테이블

| 구분 | 모니터링 항목 | 기준값 | 현재 상태 | 시나리오 연결 |
|------|------------|-------|------|-------------|
| 해자 | CCG 분기 매출 YoY | 플러스 유지 | ❌ FY25 -3% | Bear |
| 해자 | Panther Lake OEM 디자인윈 수 | 200+ | ✅ 200+ | Base |
| 해자 | PC 시장 x86 점유 (AMD+INTC 합) | 80%+ 유지 | ⚠️ Apple/Qualcomm 잠식 | Bear (<75% 시) |
| 해자 | DCAI 서버 CPU revenue share (Mercury) | 55%+ 유지 | ⚠️ 58.7% 하락 추세 | 50% 돌파 시 Bear, 55% 이탈 시 마진 압축 |
| 해자 | DCAI 분기 매출 YoY | +5%+ 유지 | ✅ Q4'25 +9% | Base |
| 해자 | DCAI Op Margin | 18%+ 유지 | ✅ FY25 20.2% | <15% 시 Bear |
| 해자 | Foundry 외부 매출 분기 | $500M 돌파 | ❌ Q4'25 $222M | <$200M 정체 시 Extreme Bear, $500M+ 시 Base 유지 |
| 해자 | 18A 외부 공개 고객 수 | 3개+ 구속력 수주 | ⚠️ Microsoft 1건 | 1건 유지 시 Bear, 3+ 시 Bull 상방 |
| 해자 | 18A 수율 개선 궤적 | 월 7%+ 유지 | ⚠️ 회사 공시 의존 | 공식 50% 돌파 시 Bull 상방 |
| 리스크 | Microsoft Maia 볼륨 출하 공시 | 2026 H2 확인 | 진행 중 | 미달/취소 시 Bear/Extreme Bear |
| 리스크 | AMD 서버 CPU revenue share | 50% 돌파 | 41.3% ⚠️ | 50% 돌파 시 Bear, 60% 시 Extreme Bear |
| 리스크 | AMD 노트북 x86 점유 | 30% 돌파 | 25% ⚠️ | 30% 돌파 시 CCG Op Margin 압축 |
| 리스크 | Intel 분기 GM | GM 35% 이탈 | 36.1% ⚠️ | <35% 시 Bear |
| 리스크 | 영업권·유형자산 손상 차손 | $3B+ 발생 | 감시 필요 | 발생 시 Extreme Bear |
| 리스크 | Ohio Mod 1 2030 가동 유지 | 추가 지연 | 주시 | 2032 재지연 시 Bear |
| 리스크 | Intel 분기 가이던스 Supply Constraints | 2026 H2까지 지속 | 진행 중 | 2026 말 지속 시 Bear 강화 |
| 리스크 | Diluted shares | +5%+ 추가 증가 | 5,000M | Warrant 발동 시 Bear |
| 리스크 | Top-4 하이퍼스케일러 Capex YoY | +15% 밑으로 | 현재 +50%+ ✅ | <15% 시 DCAI 매출 -10~15% |
| 경쟁 | CHIPS Act 정책 변화 (2028 대선) | 지분 회수 or 보조금 축소 | 안정 | 변화 시 Bear/Extreme Bear |
| 경쟁 | Windows ARM 점유율 (Copilot+ PC) | 15%+ 돌파 | <5% ✅ | 15%+ 시 CCG 추가 압박 |
| 경쟁 | NVDA x86 RTX SoC 첫 출시 | 2027 정시 | 개발 중 | 지연 시 Bull 경로 약화 |
| 경쟁 | TSMC N2 vs Intel 18A gap | 18A 2026 HVM 정상 | 12개월 gap ⚠️ | 격차 확대 시 Bear |
| 매크로 | 10Y Treasury | 5%+ 돌파 | 4.31% ✅ | 5%+ 시 WACC 상승 |
| 매크로 | PHLX Semi (SOXX) YoY | -20%+ 이탈 | 감시 | 섹터 이탈 시 Bear |

### 즉시 재검토 트리거

- Intel Foundry 외부 매출 분기 $500M 돌파 or 반대로 Q1'26 < $200M 정체
- Microsoft Maia 2 공식 수주 물량·단가 공개
- Intel 18A 수율 공식 발표 (투자자 대상, 50% 이상 돌파 시 즉시 Bull 평가)
- AMD 서버 CPU revenue share 50% 돌파 (Mercury Research 분기)
- Ohio Mod 1 2030 가동 재지연 발표
- US Gov 지분 정책 변화 (2028 대선 후보 discussion)
- 대규모 영업권·유형자산 손상 차손 $3B+ 발생
- Foundry 외부 매출 분기 $200M 이하 역성장 진입
- AMD MI450 / Venice 양산 vs Intel 18A 노드 비교 공개

**분기별 체크**:
- Intel 18A 수율 업데이트 (Investor Day, 분기 실적 컨퍼런스콜)
- Intel Foundry 분기 외부 매출 (Base 경로 $500M/분기 필요)
- AMD 서버 CPU revenue share (Mercury Research 분기 발표)
- Intel DCAI 분기 매출 YoY (마이너스 진입 시 즉시 경고)
- 하이퍼스케일러 Capex 가이던스 변경 (MSFT/GOOG/META)
- Intel Products GM 추이 (36% → 40%+ 회복 vs 30%대 하락)

**연 1~2회 체크**:
- Panther Lake 실제 출시 및 PC OEM 채널 체크
- Clearwater Forest / Diamond Rapids 2H'26 양산 일정
- Microsoft Maia 2 공식 계약 공개
- 2028 대선 후보 CHIPS Act 관련 발언
- NVDA 5% / SoftBank 2% 지분 보유 지속 여부 (13F/13G)
- Altera 잔여 49% / Mobileye 88% 매각 카탈리스트
