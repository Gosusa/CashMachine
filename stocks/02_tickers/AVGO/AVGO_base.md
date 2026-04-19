# AVGO — Broadcom Inc.
> 커스텀 AI ASIC(XPU) + 네트워킹 반도체 + VMware 중심 인프라 소프트웨어 복합기업. 하이퍼스케일러 커스텀 실리콘 시장 60~80% 점유.

---

## 투자 thesis

- **하이퍼스케일러 커스텀 XPU 시장 실질적 표준 — 전환비용 + 효율적 규모** → 무형 자산(SerDes·패키징 IP) + 전환비용(3~5년 설계 사이클) + 효율적 규모: Google(TPU)·Meta(MTIA)·ByteDance·Apple·OpenAI 5개 확정 고객. Q1 FY26 AI 매출 $8.4B (+106% YoY). Hock Tan 가이드: FY27 AI 매출 $100B+ 목표, AI 백로그 $73B (18개월 인도)
- **VMware 인수 후 소프트웨어 현금 기계화 — 전환비용 + 원가 우위** → 전환비용(가상화 워크로드 이식성 낮음) + 원가 우위(구독 전환으로 마진 재부팅): FY25 소프트웨어 매출 $27B, Q4 FY25 GM 93% / Op Margin 78%. Top 10,000 VMware 고객 중 87% VCF 구독 전환 완료
- **복합기업 프리미엄 FCF 창출 — Float 우위 + 자본 배분 우위** → FY25 FCF $26.9B (FCF/매출 42%), Q1 FY26 FCF $8.0B (41%). Adj EBITDA 마진 68%, 비GAAP 순이익률 52.8%. $10B 자사주매입 프로그램 + 분기 배당 지속

**매수 근거 작성일**: 2026-04-19
**현재가**: $402.47 (2026-04-17 종가, 52주 고점 $414.61 대비 -2.9%, 저점 $161.61 대비 +149% / 1년 수익률 +126.7%)
**목표가**: $332 (Base DCF 가중평균 내재가치 — 아래 8-3 참조)
**투자 기간**: 3년 (FY29까지, AVGO 회계연도 10월 말~11월 초 종료)

> 현재가 대비 가중평균 내재가치 **−17.5%**. 보수적 판정 기준(20%+ 할인 매수) 미달이며, 시장이 Bull 경로를 이미 반영 중. 본 세션 결과 **"보유"** (상세 9번). 단, Semi AI 매출 감속 혹은 VMware 이탈 가시화 시 Bear 진입 가능.

---

## 사업 구조 및 경제적 해자

### 2-1. 세그먼트 구조 요약

FY2025 (11/2/2025 종료) 연간 매출 $63.887B 기준, AVGO는 2개 reportable segment로 공시.

| 세그먼트 | 수익원 | 규모 지표 (FY25) | 해자 유형 | 해자 강도 |
|---------|------|---------|---------|---------|
| **Semiconductor Solutions** | 커스텀 AI ASIC(XPU) + AI 네트워킹(Tomahawk/Jericho ToR·스파인 스위치) + 브로드밴드/와이어리스/스토리지/인더스트리얼 | $36.7B (57%), AI $20B(+65%) / Non-AI $16.7B(성숙·부진) | 무형 자산(IP), 전환비용, 효율적 규모, 원가 우위 | **Wide** |
| **Infrastructure Software** | VMware Cloud Foundation(VCF) + 메인프레임(CA) + 보안(Symantec) + 브로드컴 소프트웨어 | $27.2B (43%), +19% YoY(VCF 구독 전환) | 전환비용, 브랜드, 규모 경제 | **Wide** |

> 출처: Broadcom 10-K FY2025, Q4 FY25 프레스 릴리즈(2025-12), Q1 FY26 프레스 릴리즈(2026-03-04). FY25 Semi 내 AI = $20B(65% YoY), Non-AI = $16.7B(소폭). 연간 AI YoY 성장률 가속 중.

### 2-2. 세그먼트별 상세

#### Semiconductor Solutions — 커스텀 XPU + 효율적 규모 (핵심 Wide Moat)

**사업 구조**: 하이퍼스케일러를 위한 커스텀 AI ASIC(XPU, 공동설계) + AI 네트워킹(Ethernet 기반 Tomahawk·Jericho 스위치, PCIe 스위치, Optical DSP) + 레거시 반도체(브로드밴드 PON/DOCSIS, Wi-Fi FBAR, 엔터프라이즈 스토리지 HBA/RAID, 인더스트리얼). AI 매출 Q1 FY26 $8.4B(+106%) → Q2 FY26 가이던스 $10.7B(+140%).

**확정 커스텀 XPU 고객 (2026-04 기준)**:

| 고객 | 프로그램 | 규모 |
|------|------|------|
| **Google** | TPU v5e/v5p/v6/v7 Ironwood | 다년 전략 파트너십, 단일 최대 고객(추정 40%+ AI 매출) |
| **Meta** | MTIA v1/v2 | 수백만 칩 규모 다년 계약 |
| **ByteDance** | TikTok 추천·광고 시스템용 XPU | 다년 전략 계약 |
| **Apple** | Baltra(AI 서버·Private Cloud Compute) | 2026~ 양산 진입 |
| **OpenAI** (5번째 고객) | 커스텀 AI 가속기 | $10B+ 첫 발주, 2026~ 선적 |

> Hock Tan Q1 FY26: "We currently have 3 hyperscaler customers in production and 2 more in development ramping up." 추가 **Anthropic** 관련 수요도 마련 중 이라는 언급(Q4 FY25 어닝스콜).

| 해자 유형 | 내용 |
|---------|------|
| **무형 자산 (SerDes·패키징·IP)** | 하이엔드 SerDes 224G/448G 선도(유일), 3.5D F2F 패키징 독자 기술, HBM 인터페이스·PAM4 노하우. PatSnap 특허 분석 250+ 건에서 MRVL 대비 우위 |
| **전환비용 (고객 공동설계 사이클 3~5년)** | 하이퍼스케일러 커스텀 XPU는 공동설계·검증·소프트웨어 통합에 3~5년 소요. 한번 Broadcom로 결정되면 다음 세대까지 고착 — Google은 TPU v4부터 AVGO와 연속 계약 |
| **효율적 규모 (TSMC CoWoS·HBM 선점)** | AVGO는 TSMC 2nm/3nm CoWoS-L 패키징 capacity 선점 리스트 상위. HBM3e/HBM4 공급망에서 NVDA 다음 우선순위 |
| **원가 우위 (팹리스 구조)** | 팹리스 + OSAT 의존 + 높은 볼륨 ASIC으로 Semi non-GAAP op margin ~55% (NVDA 60%, AMD 25% 대비 중간대) |
| **네트워킹 통합** | Tomahawk 6 Ethernet 스위치(100T bandwidth, NVDA NVLink 경쟁자), Jericho ToR, Optical DSP — AMD MI400이 Broadcom 네트워킹에 의존할 정도 |

**AI 매출 궤적**:

| 시점 | AI 매출 | YoY |
|---------|------|-------------|
| FY25 | $20B | +65% |
| Q1 FY26 | $8.4B | +106% |
| Q2 FY26E(가이드) | $10.7B | +140% |
| FY26E(소프트합산) | $45~50B | +125~150% |
| FY27 Hock Tan 가이드 | $100B+ | +100%+ |

> **판단 포인트**: $100B FY27 목표는 Hock Tan Q1 FY26 어닝스콜에서 공식 재확인("line of sight"). $73B 백로그 중 상당수가 FY27 반영. 그러나 "line of sight"는 확정 수주 아닌 **영업 파이프라인 수준**이므로 확정 계약 전환 여부 분기별 확인 필요.

#### Infrastructure Software — VMware 중심 전환비용 (두 번째 Wide Moat)

**사업 구조**: VMware Cloud Foundation(VCF — 구독 기반 vSphere+vSAN+NSX 번들) + 메인프레임 관리(CA Technologies) + 보안(Symantec Enterprise). VMware 인수($84.2B, 2023 완료) 후 Broadcom 자체 모델로 "Top 10,000 고객 중심 · 구독 전환" 전략. 중소기업·채널 파트너 의존 라이선스는 단계적 폐지.

| 해자 유형 | 내용 |
|---------|------|
| **전환비용 (가상화 스택 이식성 낮음)** | vSphere/vSAN/NSX에 구축된 수백만 VM은 타 플랫폼(Nutanix, Hyper-V, KVM, Red Hat OpenShift)으로 이식 시 workflow 재검증·애플리케이션 수정 필요. 대규모 엔터프라이즈는 최소 2~3년 이전 프로젝트 |
| **브랜드 + 인증 생태계** | Cisco/Dell/HPE 하드웨어 OEM 인증, SAP·Oracle·Microsoft 워크로드 공식 지원, VCP 엔지니어 수십만 명 |
| **규모 경제 (구독 전환으로 마진 재부팅)** | Top 10,000 고객 중 87% VCF 구독 전환. 비GAAP 소프트웨어 GM 93%, Op Margin 78%(Q4 FY25). 전환 완료 후 free cash flow 기계화 |

**전환 현황 (Q1 FY26 기준)**:

| 지표 | 현황 |
|------|------|
| VCF Top 10,000 구독 전환률 | 87% 완료 |
| 소프트웨어 Q4 FY25 매출 | $6.9B, +19% YoY |
| 소프트웨어 Op Margin (Q4 FY25) | 78% (FY24 72%에서 확대) |
| Nutanix 마이그레이션 고객 (누적) | ~30,000 (주로 SMB) |

> **판단 포인트**: Nutanix 누적 마이그레이션 30K는 대부분 SMB. AVGO는 의도적으로 SMB 채널 축소 중 — 매출 비중 제한적. 그러나 Microsoft Hyper-V(69%가 대안 탐색), Red Hat(48%) 등 대기업 대안이 확대되면 Top 10K 구독 재계약 리스크 증가.

---

## 해자 팩트체크

### Semiconductor Solutions 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| 커스텀 AI ASIC 시장점유율 60~80% | Alphastreet·NextPlatform·Semi Engineering 교차: AVGO ~80% (Google+Meta+ByteDance 독점), Marvell #2(~10%), Alchip/GUC(~10%) | ✅ |
| 확정 하이퍼스케일러 고객 5개 (Google/Meta/ByteDance/Apple/OpenAI) | Broadcom 공식 발언 + CNBC/HPCwire 확인 | ✅ (회사+언론 교차) |
| SerDes 448G/224G 업계 선도 | PatSnap 특허 분석·Broadcom 공식 제품 로드맵 | ✅ |
| Q1 FY26 AI 매출 $8.4B (+106%) | Broadcom 공식 프레스 릴리즈 2026-03-04 | ✅ |
| FY27 AI $100B+ "line of sight" | Hock Tan 공식 어닝스콜 발언 | ⚠️ (회사 발언, 확정 수주 아님) |
| $73B AI 백로그 (18개월 인도) | Hock Tan Q4 FY25 어닝스콜 | ⚠️ (백로그 분류: 확정 vs 옵션 미공시) |
| 5개 하이퍼스케일러 XPU 이익구조 | 고객별 매출 기여 비공개 | ❓ |

**해자 리스크**:
- **NVDA·AMD 머천트 GPU 반격**: NVDA가 Rubin(2H'26) + NVLink/Spectrum-X 스택으로 "커스텀 불필요" 내러티브 강화. 하이퍼스케일러가 커스텀 칩 대신 NVDA 재확대 시 AVGO Semi 성장 감속 — 현실화 2027~2028
- **Marvell + Alchip/GUC 공동 추격**: AWS Trainium3 차세대 MRVL+Alchip 공동 설계. FY27에 Marvell AI 매출 $2.6B 전망(vs AVGO $100B) — 규모 격차 크나 2~3년 후 진입 압력 — 현실화 2027~2029
- **자체 설계(In-house) 복귀**: Apple M-series 자체 설계 경험이 AI 서버용 자체 ASIC 복귀 가능성(Baltra 이후 중간 단계 스킵). Meta·Google도 in-house RISC-V/Chiplet 투자 확대 — 현실화 2028~2030
- **TSMC 패키징 capacity 병목**: CoWoS-L 선점 실패 시 AVGO도 NVDA와 동일 제약 — 현실화 상시

### Infrastructure Software 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| Top 10K VMware 고객 87% VCF 전환 | Broadcom 공식 CEO 발언(Q1 FY26) | ⚠️ (회사 공시) |
| FY25 소프트웨어 매출 $27B | 10-K 공시 | ✅ |
| 소프트웨어 Op Margin 78% | Q4 FY25 발표 | ✅ |
| Nutanix 누적 이탈 30K | Nutanix 공식 CEO 발언 | ⚠️ (경쟁사 공시, 검증 제한) |
| Microsoft Hyper-V 대안 탐색률 69% | Network World/Gartner 조사 | ⚠️ (탐색 ≠ 실제 이탈) |

**해자 리스크**:
- **VMware Top 10K 재계약 이탈 가속**: 2026~2028 ELA 재계약 cycle 진입 시 가격 인상 저항 + 대안(Nutanix/OpenShift/Hyper-V) 성숙도 상승으로 매출 둔화. 현실화 2026~2028
- **퍼블릭 클라우드 이동**: VM 워크로드 AWS/Azure/GCP 네이티브 이동 가속 — VMware 전환비용 감소. 현실화 진행 중
- **반독점 조사**: VMware 인수 후 가격 2~10배 인상 이슈로 EU·미국 반독점 조사 가능성 — 현실화 2026~2027

#### 해자 리스크 종합

| 세그먼트 | 핵심 모트 리스크 | 현실화 시점 |
|---------|--------------|-----------|
| Semi AI | NVDA Rubin + AMD MI400 반격으로 커스텀 수요 감속 | 2027~2028 |
| Semi AI | Marvell + Alchip/GUC 공동 추격 | 2027~2029 |
| Semi AI | 하이퍼스케일러 자체 설계 복귀 (Apple 자체 AI 서버 등) | 2028~2030 |
| Semi 전체 | TSMC CoWoS capacity 병목 | 상시 |
| Software | VMware Top 10K 재계약 이탈 (Nutanix/Hyper-V) | 2026~2028 |
| Software | 퍼블릭 클라우드 이동 가속 | 진행 중 |
| Software | 반독점 규제 (EU·DOJ VMware 가격 이슈) | 2026~2027 |

> **판단 포인트 (의심)**: (1) AI 매출 $100B FY27 "line of sight"는 Hock Tan 특유의 보수적 가이드 패턴과 다름 — 오히려 공격적 약속이라 미달 시 신뢰 리스크. (2) 소프트웨어 Op Margin 78%는 일회성 구독 전환 효과 포함 가능성(해지 고객의 남은 라이선스 기간 매출 인식). 지속 가능 수준은 70% 수준 추정.

---

## 해자 강도 평가 — "이 정도 리스크면 충분히 높은 해자인가?"

### 평가 기준
Morningstar Wide Moat 기준: "향후 20년 이상 초과이익을 유지할 수 있는 구조적 우위"
→ 리스크의 현실화 시점이 투자 기간(3년, FY29까지)보다 먼 경우 해자 유효.

### 식별된 해자 리스크 vs 현실화 시점

| 리스크 | 내용 | 현실화 시점 | 해자 훼손 정도 |
|--------|------|-----------|--------------|
| NVDA Rubin + AMD MI400 반격 | 커스텀 vs 머천트 GPU 선택 | 2027~2028 | **중간** — 일부 고객이 XPU+GPU 혼용 유지. 커스텀 AI ASIC 시장 자체는 확장 지속 |
| MRVL + Alchip 추격 | 2nd source 옵션으로 가격 압력 | 2027~2029 | 낮음~중간 — AVGO 규모·IP 격차 유지. Meta/ByteDance에서 dual-source 가능성 |
| 하이퍼스케일러 in-house | Apple/Google 자체 ASIC 단독 진행 | 2028~2030 | **중간** — Google TPU는 이미 내부 설계 (Broadcom은 패키징·IP만). 확대되면 점진 이탈 |
| TSMC CoWoS 병목 | 2nm/3nm capacity 제약 | 상시 | 낮음 — NVDA·AMD와 동일 제약 (업계 공통) |
| VMware Top 10K 이탈 | ELA 재계약 가격 저항 | 2026~2028 | **중간** — 대기업 전환비용 높으나 가격 반발 시 매출 둔화 |
| VMware 반독점 규제 | EU·DOJ 조사 | 2026~2027 | 낮음~중간 — 분할·가격 규제 가능성 |

### 판정
**AVGO = Wide Moat ✅**

핵심 근거 3가지:
① **시간 지평 관점**: 커스텀 XPU는 3~5년 설계 사이클로 FY27~FY28 매출은 이미 확정 설계 단계(FY23~FY24 발주 완료). 투자 기간 3년 내 결정적 훼손 어려움. VMware도 Top 10K ELA 재계약 주기가 3~5년
② **전략적 헤지 관점**: Semi(AI + Non-AI) + Software 2-leg 구조. AI 감속 시 소프트웨어 현금흐름이 대차대조표 방어. 이는 NVDA(DC 90% 집중) 대비 구조적 안정성 우위
③ **계약/구조적 보호 관점**: $73B AI 백로그 + VMware 다년 ELA → FY27~FY28 매출 가시성. 5개 확정 XPU 고객 다각화(단일 고객 의존도 하락)

**단, 주의 구간**: Wide 판정이라도 아래 선행 지표가 균열 신호
- **AI 매출 분기 YoY 성장률**: +80% 미만 하락 시 $100B FY27 달성 우려
- **VMware 소프트웨어 분기 매출 YoY**: +10% 미만(현재 +19%)으로 감속 시 ELA 재계약 이탈 신호
- **Semi Non-AI 매출**: 연속 3분기 마이너스 성장 시 Broadcom의 non-AI 캐시카우 약화

---

## 경쟁 구도 및 경쟁 우위

### 5-1. 경쟁사 식별 및 포지셔닝

| 경쟁사 | 시가총액 (2026-04) | 핵심 사업 영역 | 시장점유율 | 포지셔닝 |
|--------|-----|-------------|----------|---------|
| **AVGO** | ~$1.91T | 커스텀 AI ASIC + 네트워킹 + VMware | 커스텀 AI ASIC 60~80%, 이더넷 스위치 #1 | 하이퍼스케일러 커스텀 파트너, Full Stack (Chip + Network + Software) |
| NVDA | ~$4.6T | AI GPU + Networking + CUDA | 머천트 AI 가속기 80~95% | 표준 플랫폼 (GPU), CUDA 락인 |
| Marvell (MRVL) | ~$80B | 커스텀 ASIC (AWS Trainium) + 광학 DSP | 커스텀 ASIC ~10%, 광학 #2 | 2nd tier 커스텀 파트너 |
| Alchip / GUC | 비상장·~$20B | 커스텀 ASIC 디자인 서비스 (ODM) | 커스텀 ASIC ~10% (합산) | 저가·틈새 파트너 |
| AMD | ~$400B | MI300/400 머천트 GPU + EPYC CPU | 머천트 AI 가속기 5~15% | 가격 대안 |
| Cisco (CSCO) | ~$250B | 이더넷 스위치 + Silicon One 커스텀 | 전통 엔터프라이즈 스위치 #1, 데이터센터 #3 | AVGO Tomahawk 대체 대안 (Silicon One) |
| **Software 경쟁자** | | | | |
| Microsoft (MSFT) | ~$3.5T | Hyper-V + Azure | VMware 대안 탐색률 69% (설문) | 퍼블릭 클라우드 대체 + 가상화 |
| Nutanix (NTNX) | ~$30B | HCI + AOS | VMware SMB 대안 #1 | 이탈자 흡수 |
| Red Hat (IBM) | ~$250B (IBM 전체) | OpenShift + RHEL | 오픈소스 대안 | Kubernetes 네이티브 전환 |

### 5-2. 핵심 성장동력 경쟁 비교

| 성장동력 | AVGO | NVDA | MRVL | Alchip/GUC | 판정 |
|---------|------|-----|------|------|------|
| **커스텀 AI ASIC 확정 고객 수** | Google·Meta·ByteDance·Apple·OpenAI (5) + Anthropic 진행 | N/A | AWS (Trainium 일부) | AWS·ByteDance 일부 (하청) | 🥇 AVGO |
| **커스텀 ASIC 매출 (FY26E)** | $45~50B | N/A | $2.6B | <$1B | 🥇 AVGO |
| **고성능 SerDes IP (224G/448G)** | 업계 선도 | NVLink 내부 | 유사 수준 (지연) | IP 라이선스 | 🥇 AVGO (근소) |
| **AI 네트워킹 스위치** | Tomahawk 6 (100T), Jericho | NVLink/Spectrum-X, InfiniBand | 광학 DSP만 | N/A | 🥈 AVGO (NVDA는 폐쇄, AVGO는 오픈) |
| **소프트웨어 현금 기계** | VMware $27B, Op Margin 78% | 제한적 (NIM) | N/A | N/A | 🥇 AVGO (unique) |
| **비GAAP 순이익률** | 52.8% (Q1 FY26) | 55.6% (FY26) | ~28% | ~25% | 🥈 AVGO |
| **TAM 접근성** | 하이퍼스케일러 전용 (5社) | 모든 시장 | 하이퍼스케일러 + 엔터프라이즈 | 하이퍼스케일러 일부 | 🥈 AVGO (NVDA 대비 좁음) |

### 5-3. 경쟁 우위 원천 분석

**1. 하이퍼스케일러 커스텀 ASIC 파트너십 선점**
- 우위 내용: Google TPU v4~v7(2019~2026) 연속 수주, Meta MTIA v1~v2, ByteDance. OpenAI $10B 첫 발주 확보
- 정량 근거: 커스텀 AI ASIC 시장 점유 60~80%, 5개 확정 고객
- 경쟁사 격차: MRVL(AWS 일부) 대비 **규모 10~20배**, Alchip/GUC(하청) 대비 설계·IP 독립성
- 복제 난이도: **매우 높음** — 하이퍼스케일러 3~5년 공동설계 프로젝트는 일단 선정되면 다음 세대까지 연속. Google은 TPU v4부터 연속 AVGO
- 격차 지속 기간 추정: **5~7년** (차세대 FY28~FY29 설계 이미 진행)

**2. 고성능 SerDes·패키징 IP**
- 우위 내용: 224G/448G SerDes 업계 선도, 3.5D F2F 패키징 독자 기술, HBM 인터페이스 노하우
- 정량 근거: PatSnap 특허 250+ 건 분석에서 MRVL 대비 우위, TSMC CoWoS-L 선점 순위 NVDA 다음 2위권
- 경쟁사 격차: MRVL도 유사 SerDes 개발 중이나 수주 리스트 격차. Alchip/GUC는 IP 라이선스 의존
- 복제 난이도: **높음** — SerDes는 아날로그 엔지니어링 노하우 + Foundry 협업 경험
- 격차 지속 기간: **3~5년**

**3. Ethernet AI 네트워킹 통합**
- 우위 내용: Tomahawk 6 (100T), Jericho ToR, PCIe 스위치, Optical DSP — NVDA NVLink의 오픈 대안. AMD MI400도 Broadcom 네트워킹에 의존
- 정량 근거: 이더넷 DC 스위치 시장 #1 점유율 (Dell'Oro ~40%), 광학 DSP #1
- 경쟁사 격차: Cisco Silicon One은 인증 기반 엔터프라이즈 중심, AVGO는 하이퍼스케일러·AI 인프라 특화
- 복제 난이도: **높음** — SerDes 기반이 네트워킹과 공유
- 격차 지속 기간: **3~5년**

**4. VMware 엔터프라이즈 락인 (현금 기계)**
- 우위 내용: 글로벌 엔터프라이즈 가상화 de-facto 표준, Top 10K 고객 구독 전환 87% 완료, Op Margin 78%
- 정량 근거: FY25 소프트웨어 매출 $27B, 재계약 사이클 3~5년
- 경쟁사 격차: Nutanix/Hyper-V/OpenShift 대안 성숙하나 엔터프라이즈 전환비용 높음
- 복제 난이도: **매우 높음** — 35년 누적 기업 설치 기반 + ISV 인증
- 격차 지속 기간: **5~10년** (단, 2026~2028 ELA 재계약 cycle 모니터링 필수)

### 5-4. "왜 이 기업인가" — 투자 차별화 근거

1. **커스텀 AI ASIC 시장 독점 사실상 경쟁자 없음**: MRVL은 규모 1/20, Alchip/GUC는 하청. NVDA는 커스텀 시장 미진입. Google/Meta/Apple/OpenAI 하이퍼스케일러 5社 독점 계약 — 2nd tier 추격 5~7년 격차
2. **Full-Stack 고유성 (Chip + Network + Software)**: AI ASIC + 이더넷 스위치 + VMware 조합은 업계 유일. NVDA는 소프트웨어 약점, Cisco는 AI 반도체 약점, Oracle은 반도체 없음
3. **소프트웨어 현금 기계**: VMware $27B 매출 + 78% Op Margin은 반도체 사이클 변동성을 완충. 순수 AI 반도체 기업(NVDA/AMD) 대비 구조적 방어력

**밸류에이션 비교 (2026-04 기준):**

| 지표 | AVGO | NVDA | MRVL | AMD | 섹터 평균(반도체) | 프리미엄/디스카운트 |
|------|------|------|------|-----|--------------|----|
| Forward PE (비GAAP, FY26E) | ~45x | ~24x | ~35x | ~30x | 25x | **프리미엄** |
| EV/EBITDA (TTM) | ~32x | ~30x | ~25x | ~30x | 22x | 프리미엄 |
| PEG (FY27 기준) | ~0.9 (AI 성장 100%, 블렌드 30%) | ~0.4 | ~1.2 | ~1.2 | ~1.0 | 중립~저평가 |
| FCF Yield (FY25) | ~1.4% | 2.1% | 1% | 1% | 3% | 디스카운트 |

**결론**: AVGO Forward PE ~45x는 NVDA 24x 대비 큰 프리미엄. 정당성 근거는 (1) 소프트웨어 $27B 현금기계 포함 혼합 프리미엄 (2) 커스텀 AI 시장 독점 지속성 프리미엄. PEG 0.9는 성장률 고려 시 중립. 단, FY27 $100B AI 달성이 Base 시나리오 전제 — 달성 실패 시 멀티플 압축 리스크 큼.

---

## 리스크 요인

### 1. 하이퍼스케일러 커스텀 XPU 수요 감속 ⚠️

**리스크 설명**: NVDA Rubin(2H'26) + AMD MI400이 성능·TCO에서 강력하게 부상하며 하이퍼스케일러가 "커스텀 복잡성"을 포기하고 머천트 GPU로 회귀 가능성. Broadcom 커스텀 XPU는 하이퍼스케일러 5社 집중 구조이므로 1개 고객만 이탈해도 매출 큰 영향.

**규모/비중 정량화**: FY26E AI 매출 $45~50B 중 Google 단일 고객이 ~40%(추정 $18~20B). Meta·ByteDance·Apple·OpenAI 각 10~20%.

**상세 데이터**:

| 시나리오 | XPU 수요 변화 | AI 매출 영향 (FY27) |
|------|---------|-----------|
| NVDA Rubin 단독 대체 (Google 제외) | -$15~20B | FY27 AI $80B |
| Google TPU 규모 축소 | -$10~15B | FY27 AI $85B |
| In-house 설계 복귀 (Meta/ByteDance) | -$10B | FY27 AI $90B |

**시나리오별 영향**: 
- Base: XPU 수요 $100B FY27 가이드 달성, AI Semi Op Margin 55% 유지
- Bear: $80B로 감속, Op Margin 50%로 압박
- Extreme Bear: $50B 이하, 주요 고객 1社 이탈 시 -20% 매출 절단

**완화 요인**: (a) 5社 고객 다각화 (b) Apple/OpenAI 신규 고객 FY26~FY27 램프 (c) 이더넷 네트워킹·Optical DSP 병행 성장

**팩트체크**: ⚠️ — 커스텀 시장 60~80% 점유는 확인됐으나 "line of sight $100B" 백로그 분류(확정 vs 옵션) 미공시.

### 2. VMware Top 10K 재계약 이탈 ⚠️

**리스크 설명**: 2026~2028 VMware ELA 재계약 cycle 진입. Broadcom 가격 2~10배 인상·채널 축소로 Top 10K 고객 반발 축적. Nutanix 30K 이탈은 대부분 SMB였으나 Top 10K 대기업에서 Hyper-V(69% 대안 탐색)/Red Hat OpenShift(48%) 전환 가속 시 소프트웨어 매출 타격.

**규모/비중 정량화**: FY25 소프트웨어 $27B 중 VMware ~$24B 추정(메인프레임/Symantec 제외). Top 10K ELA 재계약 cycle 매년 ~20%가 재계약 도래 → FY26~FY28 누적 $15B 재계약 risk.

**상세 데이터**:

| 고객 그룹 | FY25 매출 비중 | 이탈 리스크 |
|------|---------|-----------|
| Top 10K 엔터프라이즈 | 70%+ ($19~20B) | 중간 — 전환비용 높으나 가격 저항 |
| 중견기업 | 20% | 높음 — 채널 폐지로 직접 영향 |
| SMB | <10% | 극심 (이미 Nutanix 이탈) |

**시나리오별 영향**:
- Base: Top 10K 5% 이탈, 소프트웨어 매출 FY29 $32B (vs FY25 $27B)
- Bear: 15% 이탈, FY29 $27B 정체
- Extreme Bear: 30% 이탈, FY29 $22B 감소

**완화 요인**: (a) 대기업 vSphere/vSAN 이식은 2~3년 소요 (b) Cisco/Dell/HPE 하드웨어 인증 유지 (c) VCF 통합 번들로 가격 인상 흡수

**팩트체크**: ⚠️ — 실제 Top 10K 이탈률 공시 없음. Nutanix 30K 이탈은 SMB 중심으로 직접 비교 어려움.

### 3. AI Capex Super-cycle 조기 피크 ⚠️

**리스크 설명**: 2026 하이퍼스케일러 캐펙스 $700B+ 과잉 투자 판명 시 2027~2028 캐펙스 감속. AVGO는 5社 하이퍼스케일러에 집중 노출 — NVDA보다도 집중도 높음. Enterprise AI ROI 증명 지연 시 customer 우선순위 하락.

**규모/비중**: 2026 하이퍼스케일러 캐펙스 ~$700B, AVGO는 이 중 ~$60B(~8%) 수취 추정. Google 단일로 AVGO AI 매출의 40%.

**시나리오별 영향**:
- Base: FY28~FY29 하이퍼스케일러 캐펙스 YoY +10~15% 감속, AVGO AI 매출 성장 $100B → $150B
- Bear: FY28 캐펙스 -10%, AVGO AI 매출 FY28 $100B 후 감속
- Extreme Bear: "AI 겨울" 수요 급감 → FY28~FY29 캐펙스 -30%, AVGO AI 매출 -40%

**완화 요인**: (a) $73B 백로그 가시성 (b) 커스텀 ASIC 설계 cycle 3~5년으로 단기 취소 어려움 (c) VMware 현금흐름 유지

**팩트체크**: ⚠️ — 하이퍼스케일러 캐펙스 $700B는 CNBC/Futurum 교차 확인. ROI 증명 지연은 주관적 판단 영역.

### 4. Marvell + Alchip 2nd Source 추격 ⚠️

**리스크 설명**: AWS Trainium3 차세대 MRVL+Alchip 공동 설계, Meta·ByteDance에서 2nd source 옵션 모색. AWS-Anthropic 50만+ Trainium2 성공 선례. 하이퍼스케일러가 dual-vendor 전략 채택 시 AVGO 독점 구조 약화.

**규모/비중**: FY26E MRVL AI 매출 $2.6B(vs AVGO $45~50B, 1/18~1/20 규모). Alchip/GUC 합산 ~$1B. 합산해도 AVGO의 10% 미만.

**상세 데이터**:

| 2nd source 진입 가능성 | 고객 | 현실화 시점 |
|------|---------|-----------|
| Meta MTIA v3+ (MRVL co-design) | 중간 | FY28~FY29 |
| AWS Trainium4 (MRVL+Alchip) | 높음 | FY27~FY28 |
| ByteDance 차세대 (GUC) | 낮음 | FY29+ |
| Google TPU next-gen | 극낮음 (계약 장기) | FY30+ |

**시나리오별 영향**:
- Base: AVGO 커스텀 시장 점유 80% → 70%, 절대 매출은 TAM 성장으로 증가
- Bear: 점유 60%, FY28~FY29 매출 성장 감속
- Extreme Bear: 50% 이하, 가격 경쟁 본격화

**완화 요인**: (a) SerDes/패키징 IP 선도 격차 3~5년 (b) 기존 고객 재계약 cycle 자동 연장 (c) AVGO TSMC CoWoS capacity 우선권

**팩트체크**: ✓ — MRVL/Alchip 수주 리스트 공식 확인.

### 5. TSMC 공급망·패키징 병목 ⚠️

**리스크 설명**: CoWoS-L 패키징 capacity가 AVGO+NVDA+AMD 수요를 감당 못하면 AVGO는 NVDA 우선 순위에 밀려 출하 지연 가능. HBM3e/HBM4 공급 경쟁도 동일.

**규모/비중**: AVGO FY27 AI $100B 달성은 CoWoS 공급에 직결. 공급 부족 시 매출 지연.

**시나리오별 영향**: 매출 인식 시점 지연 — 분기 miss 가능성. 영구 매출 상실 아님.

**완화 요인**: (a) TSMC 2nm CoWoS 2027 증설 계획 (b) 삼성 Foundry 대체 옵션 검토

**팩트체크**: ✓ — TSMC capacity 제약 공식 확인.

### 6. 부채 레버리지 (VMware 인수 레거시) ⚠️

**리스크 설명**: VMware 인수($84.2B) 후 FY25 연말 총부채 ~$67B, 순부채 ~$50B. 금리 상승기 이자비용 확대. FY25 이자비용 ~$4.5B.

**규모/비중**: Net Debt/EBITDA ~1.3x (FY25 EBITDA $40B+ 기준) — 적정 수준이나 경기 하강 시 제약.

**시나리오별 영향**:
- Base: FY29까지 순부채 $25~30B로 축소 (강력한 FCF)
- Bear: 성장 감속 시 FCF 감소, 부채 축소 속도 둔화
- Extreme Bear: 금리 재상승 + EBITDA 감소 시 부채 서비스 부담

**완화 요인**: FY25 FCF $26.9B, Q1 FY26 FCF $8B — 부채 상환 여력 풍부. 투자 등급 BBB+ 유지.

**팩트체크**: ✓ — Broadcom 10-K 공식 공시.

### 7. VMware 반독점 규제 ❓

**리스크 설명**: VMware 인수 후 가격 2~10배 인상 이슈로 EU·미국 반독점 조사 가능성. 엔터프라이즈 고객 단체 소송 불확실.

**규모/비중**: 만약 가격 규제 or 분할 명령 시 소프트웨어 Op Margin 78% → 60%대 하락 가능.

**시나리오별 영향**:
- Base: 규제 대응·약간의 가격 조정 (부분 완화)
- Bear: 유럽 가격 규제 명령, 소프트웨어 매출 5~10% 감소
- Extreme Bear: VMware 분할 명령 (낮은 확률)

**완화 요인**: 이미 완료된 인수이며 Broadcom은 투명 가격 정책 방어 중.

**팩트체크**: ❓ — 공식 조사 개시 공시 없음. 미디어 루머 수준.

### 8. 밸류에이션 리스크 (고점 Forward PE) ⚠️

**리스크 설명**: 시총 $1.91T, Forward PE ~45x(비GAAP)로 NVDA 24x 대비 과도 프리미엄. AI 성장 감속·VMware 이탈 가시화 시 멀티플 압축.

**규모/비중**: Forward PE 45x → 25x 복귀 시 -44% 주가 조정. PEG 0.9는 구조적 저평가 아님.

**시나리오별 영향**: Extreme Bear에 PE 15x, Bear에 20x, Base에 24x, Bull에 28x 반영.

**완화 요인**: $26.9B FCF 생성 + $10B 자사주매입 프로그램으로 주가 방어.

**팩트체크**: ✓ — 현재 Forward PE 공식 확인 (gurufocus 35x~37x, seekingalpha 45x 등 소스 차이).

#### 리스크 독립성 확인

- 리스크 1(XPU 감속) + 리스크 4(MRVL 추격) + 리스크 3(Capex Peak)는 **상관성 높음** (AI 성장 둔화의 3개 축)
- 리스크 2(VMware) + 리스크 7(반독점)은 **상관** (Software segment 동시 위협)
- 리스크 1,2(섹터)는 **독립** — AI 감속이 소프트웨어 현금흐름에 직접 영향 제한적
- 리스크 5(TSMC)는 **독립적** — 지정학 이벤트
- 리스크 6(부채)는 **리스크 1,2의 파생** — 매출 감소 시 자동 악화
- 리스크 8(밸류에이션)은 **다른 모든 리스크의 결과** — 현실화 시 자동 발동

> **리스크 독립 사업/자산**: VMware 소프트웨어 $27B 매출은 AI 반도체 사이클과 구조적으로 독립. 시장이 AVGO를 AI 종목으로만 인식할 경우 이 sum-of-parts 분리가 저평가 기회로 전환 가능.

#### 리스크 수치 팩트체크 종합

| # | 항목 | 판정 | 비고 |
|---|------|------|------|
| 1 | 커스텀 AI ASIC 점유 60~80% | ✓ | Alphastreet/NextPlatform 교차 |
| 2 | FY26E AI 매출 $45~50B | ✓ | Q1/Q2 FY26 실측 annualize |
| 3 | 5개 확정 XPU 고객 | ✓ | 공식 발표 (Google/Meta/ByteDance/Apple/OpenAI) |
| 4 | $73B 백로그 | ⚠️ | Hock Tan 발언, 분류 공시 없음 |
| 5 | FY27 $100B AI "line of sight" | ⚠️ | Hock Tan 발언, 확정 수주 ≠ |
| 6 | VMware Top 10K 87% VCF 전환 | ⚠️ | 회사 공시 |
| 7 | Nutanix 30K 이탈 | ⚠️ | Nutanix 공시 (SMB 중심) |
| 8 | Microsoft Hyper-V 대안 탐색 69% | ⚠️ | Gartner 조사 (탐색 ≠ 이탈) |
| 9 | 순부채 ~$50B | ✓ | 10-K 공시 |
| 10 | Forward PE ~45x | ⚠️ | 소스별 28~45x 편차 |

---

## 모니터링 지표

### 해자 건전성 모니터링

| 출처 | 모니터링 항목 | 기준값 | 현재 상태 |
|------|------------|-------|----------|
| Semi AI 해자 | AI 매출 분기 YoY 성장률 | +80%+ 유지 | ✅ Q1 FY26 +106%, Q2E +140% |
| Semi AI 해자 | 커스텀 XPU 확정 고객 수 | 5사 유지 | ✅ 5사 (Anthropic 추가 진행) |
| Semi AI 해자 | AI 백로그 증감 | $73B 이상 유지 | ✅ $73B (Q4 FY25 기준) |
| Semi AI 해자 | Semi Op Margin (비GAAP) | 53%+ | ✅ ~55% (Q1 FY26 추정) |
| Software 해자 | Software 분기 매출 YoY | +15%+ 유지 | ✅ Q1 FY26 +1%(전환 완료 둔화), FY25 +47% |
| Software 해자 | Software Op Margin | 75%+ 유지 | ✅ 78% (Q4 FY25) |
| Software 해자 | VCF Top 10K 전환률 | 85%+ 유지 | ✅ 87% |

### 리스크 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| 리스크 1 XPU 감속 | AI 매출 분기 YoY | +60% 미만으로 하락 | 현재 +106% ✅ |
| 리스크 1 XPU 감속 | 5사 고객 중 재계약 이탈 발표 | 1사 이상 | 없음 ✅ |
| 리스크 2 VMware | Software 매출 YoY 성장률 | +5% 이하로 하락 | 현재 +1% Q1 FY26, FY25 +19% ⚠️ |
| 리스크 2 VMware | Nutanix 누적 마이그레이션 | 50K+ 돌파 | 현재 30K ⚠️ |
| 리스크 3 Capex | Top-5 하이퍼스케일러 분기 캐펙스 YoY | +20% 미만 | 현재 +60% ✅ |
| 리스크 4 MRVL | MRVL AI 매출 YoY | +100% 가속 | 현재 +75% ✅ |
| 리스크 5 TSMC | CoWoS capacity 가이던스 | NVDA/AMD 대비 AVGO 할당률 감소 | 모니터링 필요 |
| 리스크 6 부채 | Net Debt/EBITDA | 1.5x+ 돌파 | 1.3x ✅ |
| 매크로 | 10Y Treasury | 5%+ 돌파 | 4.26% ✅ |
| 매크로 | PHLX Semi (SOXX) YoY | -20%+ | 모니터링 |

### 경쟁 우위 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| 커스텀 ASIC 점유 | 시장 점유율 | 50% 미만 | 60~80% ✅ |
| Full-Stack | 이더넷 스위치 AI DC 점유 | #2 하락 | #1 (Dell'Oro ~40%) ✅ |
| VMware ELA | 분기별 ELA 재계약률 | 85% 미만 | 공시 제한, 모니터링 필요 |
| SerDes IP | 224G/448G 경쟁사 출시 | MRVL/Alchip 동등 수준 출시 | 지연 ✅ |

### 즉시 재검토 트리거

- AI 매출 분기 YoY +60% 미만 하락 (FY27 $100B 달성 불가 신호)
- 5개 XPU 고객 중 1社 이상 차세대 재계약 거절 or 머천트 GPU 전환 발표
- Software 매출 YoY 마이너스 전환 (ELA 이탈 본격화)
- Nutanix 누적 마이그레이션 50K 돌파 + Top 10K 고객 이탈 공시
- MRVL AI 매출 YoY +150% 가속 (2nd source 위협 급증)
- EU/DOJ VMware 반독점 조사 공식 개시
- Forward PE 55x 돌파 or 25x 이하 급락

---

## DCF 시나리오 & 가치평가

### 8-0. DCF 방법론 선택

- **적용 방식**: **B. SOTP (Sum-of-the-Parts)** — Semiconductor Solutions + Infrastructure Software 2-세그먼트 분리 평가
- **선택 근거**: Broadcom은 2개 세그먼트의 성격·성장률·마진·적정 멀티플이 본질적으로 이질적:
  - Semiconductor Solutions: 사이클 반도체 + 하이퍼스케일러 AI 특화(성장 100%+, Op Margin 55%)
  - Infrastructure Software: 구독 SaaS + VMware 락인(성장 10%, Op Margin 78%)
  - 단일 FCF DCF로 통합 시 Semi AI 급성장이 Software 안정성을 왜곡하거나 그 반대. SOTP가 리스크·기회 분리 평가에 필수
- **대안 대비 우위**:
  - **FCF DCF (Option A)**: NVDA(DC 90% 집중)에는 적합하나 AVGO는 Semi 57% + Software 43% 구조로 단일 멀티플 부적합. 이익 원천 분리 평가 손실
  - **Forward Multiple (Option E)**: 보조적 교차검증에만 활용 (Semi와 Software 각각 적용)
  - **NAV (Option D)**: 자산 기반 아닌 이익 기반
  - **Excess Returns (Option C)**: 자본 규제 없음
- **주요 가정 요약**:
  - **공통 WACC**: 10.0% (Rf 4.26% + 베타 1.25 × ERP 5.5%). 세그먼트별 동일 적용 (통합 자본구조)
  - 예측 기간: 3년 (FY26E → FY29E), 투자 기간 일치
  - Terminal: FY29 세그먼트별 op income (비GAAP, 세후) × 세그먼트별 Applied Multiple
  - 희석 주식수: FY25 4.85B → FY29 4.70B (자사주매입 $10B + 배당 증액 기본 가정)
  - 실효세율: **14%** (FY25 비GAAP 실측 반영 — FY25 FCF/non-GAAP NI 비율 ~60~70%)
  - 순부채 FY29E: ~$25B (강력한 FCF로 deleveraging 지속)

### 8-1. DCF 구조 설계 원칙

AVGO의 이익 구조를 분리해서 멀티플을 다르게 적용:

**세그먼트 1: Semiconductor Solutions**
- 하위 분류: AI (XPU + Networking) vs Non-AI (Broadband/Wireless/Industrial/Storage)
- 이익 변수: 총 Semi Revenue × Semi Op Margin (비GAAP)
- 적정 멀티플: NVDA 24x + AMD 30x 중간대 — 25~28x (Base)
- 스트레스 시 하향: 15~20x

**세그먼트 2: Infrastructure Software**
- 하위 분류: VMware VCF (핵심) + CA 메인프레임 + Symantec 보안
- 이익 변수: Software Revenue × 78% Op Margin
- 적정 멀티플: 일반 성숙 SaaS 20~25x, VMware 구독 전환 마무리 프리미엄
- 스트레스 시 하향: 12~18x (ELA 이탈 리스크)

**밸류에이션 공식 (SOTP)**: 
```
FY29 기업가치 (EV) = Semi op income (세후) × Semi PE
                    + Software op income (세후) × Software PE
주주가치       = EV - Net Debt FY29E
FY29 목표가    = 주주가치 / 희석주식수 FY29
현재 내재가치   = FY29 목표가 / (1.10)^3
```

**멀티플 기준 — 역사적 실측 & Peer**:
- AVGO 5년 평균 Forward PE(비GAAP): 25~30x (AI Boom 이전)
- NVDA 5년 평균: 28x (피크 50x+)
- Semi 섹터 평균: 22~25x
- Mature SaaS 섹터(Oracle, SAP): 20~25x
- VMware 인수 전 독립 거래 시 PE: 30x+
- 시나리오 배정:
  - **Semi**: Extreme Bear 15x / Bear 20x / Base 25x / Bull 28x
  - **Software**: Extreme Bear 12x / Bear 16x / Base 20x / Bull 24x

### 8-2. 시나리오별 DCF 계산

#### Extreme Bear — 확률 15%

**전제 조건:**
- AI Capex 피크 2026~2027 후 30%+ 감소 (2000년대 Telecom/Optical 버블 유사)
- Broadcom 5개 XPU 고객 중 2社 이상 재계약 축소 (Google TPU 감소 + Meta MTIA in-house 대체)
- VMware Top 10K 15%+ 이탈 (ELA 재계약 cycle 대실패)
- Semi GM 65% → 55%, Software Op Margin 78% → 70%
- EU/DOJ VMware 반독점 조사 개시

**시나리오 진입 신호:**
- 2026~2027 하이퍼스케일러 캐펙스 가이던스 -10%+ 하향 (3사 이상 동시)
- AVGO AI 매출 분기 YoY <50% 감속
- VMware 분기 매출 YoY 마이너스 전환 3분기 연속

**DCF 계산:**
```
[Semi]
FY26E Semi: $60B → FY29E Semi: $63B (AI $50B + Non-AI $13B)
Semi CAGR (FY26→FY29): 2%
FY29 Semi Op Margin: 40% (가격 경쟁)
FY29 Semi Op Income: $25.2B
세후 (14%): $21.7B
Applied PE: 15x
Semi EV: $325B

[Software]
FY26E: $31B → FY29E: $28B (Top 10K 이탈)
FY29 Software Op Margin: 70%
FY29 Software Op Income: $19.6B
세후 (14%): $16.9B
Applied PE: 12x
Software EV: $203B

────────────────
FY29 합산 EV: $528B
- Net Debt FY29: $40B (성장 둔화로 deleveraging 감속)
주주가치: $488B
÷ 희석주식수 (4.70B): $104
────────────────
FY29 목표가: $104
현재가 내재가치 (3Y 10% 할인): $78
```

#### Bear — 확률 25%

**전제 조건:**
- NVDA Rubin + AMD MI400 수요 복원, AVGO 커스텀 XPU 점유 60% → 50%
- MRVL+Alchip 2nd source 진입 성공 (AWS Trainium4, Meta MTIA v3에서 시장 분할)
- FY27 AI 매출 $80B (vs 가이드 $100B+, 20% 미달)
- VMware Top 10K 5~10% 이탈, ELA 재계약 가격 인상 저항
- Semi Op Margin 55% → 48% (가격 압력)
- Software Op Margin 78% → 74%

**시나리오 진입 신호:**
- AI 매출 분기 YoY <70% 감속
- MRVL AI 매출 YoY +150% 가속
- Software 매출 분기 YoY <5%

**DCF 계산:**
```
[Semi]
FY26E: $60B → FY29E: $110B (AI $90B + Non-AI $20B)
Semi CAGR: 22%
FY29 Semi Op Margin: 48%
FY29 Semi Op Income: $52.8B
세후 (14%): $45.4B
Applied PE: 20x
Semi EV: $908B

[Software]
FY26E: $31B → FY29E: $32B (정체)
FY29 Software Op Margin: 74%
FY29 Software Op Income: $23.7B
세후 (14%): $20.4B
Applied PE: 16x
Software EV: $326B

────────────────
FY29 합산 EV: $1,234B
- Net Debt FY29: $30B
주주가치: $1,204B
÷ 희석주식수 (4.75B): $254
────────────────
FY29 목표가: $254
현재가 내재가치 (3Y 10% 할인): $190
```

#### Base — 확률 40%

**전제 조건:**
- FY27 AI 매출 $100B 달성 ("line of sight" 가이드 부합)
- 5개 XPU 고객 모두 차세대 재계약 + Anthropic 공식 6번째 고객 합류
- AI Capex 순조로운 확장 — 2027 $900B, 2028 $1.1T, 2029 $1.3T
- VMware Top 10K 안정, 구독 전환 후 소프트웨어 완만 성장 (CAGR 5%)
- Semi Op Margin 55% 유지, Software Op Margin 76% (소폭 하락)
- Net Debt $25B로 감소 (강력한 FCF)

**시나리오 진입 신호:**
- AI 매출 분기 YoY +80~100% 유지
- 5개 고객 XPU 발주 확정 유지
- Software 매출 YoY +3~8%

**DCF 계산:**
```
[Semi]
FY26E: $60B → FY29E: $178B (AI $160B + Non-AI $18B)
Semi CAGR: 44%
FY29 Semi Op Margin: 52% (소폭 하락, ASIC 투자 증가)
FY29 Semi Op Income: $92.6B
세후 (14%): $79.6B
Applied PE: 24x
Semi EV: $1,910B

[Software]
FY26E: $31B → FY29E: $38B (CAGR 7%)
FY29 Software Op Margin: 76%
FY29 Software Op Income: $28.9B
세후 (14%): $24.8B
Applied PE: 20x
Software EV: $497B

────────────────
FY29 합산 EV: $2,407B
- Net Debt FY29: $25B
주주가치: $2,382B
÷ 희석주식수 (4.70B): $507
────────────────
FY29 목표가: $507
현재가 내재가치 (3Y 10% 할인): $381
```

> **판단 포인트**: Base FY29 AI 매출 $160B는 FY27 $100B + 연 CAGR 27% 가정. Hock Tan의 "$100B 2027" 약속을 정면으로 수용. 컨센서스 대비 보수 — 애널리스트 일부는 FY29 $200B 전망.

#### Bull — 확률 20%

**전제 조건:**
- FY27 AI 매출 $120B+ 달성 (가이드 초과)
- OpenAI·Anthropic 각각 다년 $20B+ 확정, XPU 고객 7사 확대
- NVDA Rubin이 일부 학습 유지하나 인퍼런스는 커스텀 ASIC 전환 가속
- Agentic AI 인퍼런스 폭증으로 XPU 수요 구조적 증가
- VMware AI 워크로드 이식으로 소프트웨어 재가속 (VCF Agentic AI SKU)
- Semi Op Margin 55% 유지, Software Op Margin 78% 유지
- Net Debt $15B로 급감

**시나리오 진입 신호:**
- AI 매출 분기 YoY +120~140% 유지 (Q2 FY26 가이드 실현)
- XPU 고객 6~7사 발표 (Anthropic 공식화 + 신규 1사)
- VMware AI 확장 SKU 매출 의미있는 기여

**DCF 계산:**
```
[Semi]
FY26E: $60B → FY29E: $240B (AI $220B + Non-AI $20B)
Semi CAGR: 59%
FY29 Semi Op Margin: 55%
FY29 Semi Op Income: $132B
세후 (14%): $113.5B
Applied PE: 28x
Semi EV: $3,178B

[Software]
FY26E: $31B → FY29E: $45B (VCF AI SKU 가속, CAGR 13%)
FY29 Software Op Margin: 78%
FY29 Software Op Income: $35.1B
세후 (14%): $30.2B
Applied PE: 24x
Software EV: $725B

────────────────
FY29 합산 EV: $3,903B
- Net Debt FY29: $15B
주주가치: $3,888B
÷ 희석주식수 (4.65B): $836
────────────────
FY29 목표가: $836
현재가 내재가치 (3Y 10% 할인): $628
```

**실현 가능성 분석 (Bull):**

| 전제 조건 | 실현 가능성 | 근거 | 선행 사례 / 반례 |
|---------|-----------|------|----------------|
| FY27 AI $120B+ 초과 달성 | **낮음~중간** | $73B 백로그 + Q2 가이드 $10.7B annualize → FY26 $45B, FY27 $100B line of sight 공식 | 선행: Q1 FY26 $8.4B → Q2 $10.7B 가속. 반례: "line of sight"는 아직 확정 수주 아님 |
| XPU 고객 6~7사 확대 (OpenAI·Anthropic 공식 + 신규 1사) | **중간** | Anthropic은 이미 진행 중 언급, OpenAI $10B 발주 확정 | 선행: Apple Baltra는 이미 ramping. 반례: 신규 6번째 고객 공식 발표 없음 |
| 인퍼런스 커스텀 ASIC 전환 가속 | **중간** | Google TPU 경제성 + AWS Trainium 확산 | 선행: Anthropic 50만 Trainium2. 반례: Rubin 성능 + 가격 인센티브 |
| VMware AI SKU 재가속 | **낮음** | 아직 공식 공개 제품 없음 | 반례: VMware AI 워크로드 도입 지연 (GPU 가상화 성숙도) |
| Semi Op Margin 55% 유지 | **중간** | 현재 수준 유지 가정, 고마진 AI 비중 증가 | 반례: 2nd source 진입 시 가격 경쟁 불가피 |
| VMware Top 10K 이탈 없음 | **중간** | 대기업 전환비용 높음 | 반례: 2026~2028 ELA 재계약 가격 저항 증거 |

**실현 경로 (인과 체인)**:
FY27 $100B AI 달성 (1차) → 신규 2사 고객 확정 (2차) → Semi Op Margin 유지 → 인퍼런스 커스텀 전환 가속 (Nvidia 일부 대체) → FY29 AI $220B → 주가 멀티플 확장 → Bull 성립

**전제 간 독립성**: 
- "$120B AI" + "6~7사 고객"은 **상관됨** (고객 확대가 매출 증가 견인)
- "VMware AI SKU"는 **독립** — 소프트웨어 재가속은 별개 이니셔티브
- "Op Margin 유지"는 **점유율의 종속 변수**

**종합 실현 확률 판단**: 개별 전제들은 각각 30~50% 실현 가능성. 독립적이면 기대값 10% 수준이나 "FY27 $100B 달성 → 신규 고객 확대 → 인퍼런스 전환 가속" 체인이 연결되어 있어 가중 확률 **20%** 유지. 시장이 이미 Bull 경로 일부 반영 중(Forward PE 45x)이라 상방 여지는 제한적.

**붕괴/전환 조건**: 
- Q2 FY26 AI 매출 가이던스 $10.7B 미달
- 5개 XPU 고객 중 1사 이상 재계약 거절/축소 발표
- FY27 AI $100B "line of sight" 철회 or 하향
- VMware 매출 YoY 마이너스 전환

---

### 8-3. 가중평균 내재가치

```
시나리오       확률    FY29 목표가   현재 내재가치   기여
─────────────────────────────────────────────────────
Extreme Bear   15%    $104         $78            $11.70
Bear           25%    $254         $190           $47.50
Base           40%    $507         $381           $152.40
Bull           20%    $836         $628           $125.60
─────────────────────────────────────────────────────
가중평균 내재가치:                                 $337.20
가중평균 범위:           Extreme Bear $78 ~ Bull $628
현재가 $402.47 대비:     -16.2%
```

**확률 배분 근거**:
- **Extreme Bear 15%**: AI 버블 터짐·다중 XPU 고객 이탈·VMware 대규모 이탈의 동시 실현 가능성은 실재하나 낮음. (i) $73B 백로그 가시성 (ii) 5개 XPU 고객 다각화 (iii) VMware 전환비용이 완화. 10~20% 범위 중 중앙 15%
- **Bear 25%**: 커스텀 XPU 점유 하락 + MRVL 2nd source + $100B AI 가이드 부분 미달이 가장 현실적 시나리오. 특히 MRVL+Alchip의 AWS Trainium4 공동 설계 진입은 2027~2028 확률 높음. 25% 배정
- **Base 40%**: Hock Tan "$100B FY27" 가이드 부합 + VMware 안정이 현재 궤적 연장. 컨센서스(애널리스트 목표가 $438~466)와 부합. 35~45% 범위 중앙
- **Bull 20%**: $120B+ AI + 6~7사 고객 확대의 3중 조건 필요. 개별 확률 40%·50%·40%로 독립 기대값 8%이나 AI 인퍼런스 전환 가속이 공통 동력이라 20%로 상향. 시장이 이미 Forward PE 45x로 부분 반영 중

> Bear + Extreme Bear 합 = 40% (가이드 35%+ 기준 만족, 보수적 가중)

### 8-4. 실적 데이터 — 현재 어디에 위치하는가

| 지표 | Q1 FY26 실측 | YoY | DCF Case 위치 |
|------|------|-----|-------------|
| 총 매출 | $19.3B | +29% | Base와 Bull 사이 |
| Semi 매출 | $12.52B | +45% | Base 상단 |
| AI 반도체 매출 | $8.4B | +106% | **Bull 경로** |
| Software 매출 | $6.8B | +1% | Bear 경계 (전환 완료 둔화) |
| Non-GAAP 순이익 | $10.19B | +30% | Base |
| Non-GAAP EPS | $2.05 | +30% | Base |
| Adj EBITDA | $13.1B (68%) | +33% | Base |
| FCF | $8.0B (41%) | +37% | Base |
| Q2 FY26 매출 가이드 | $22.0B | +30% | Base 상단 |
| Q2 FY26 AI 매출 가이드 | $10.7B | +140% | **Bull 경로** |

**트렌드 판단 (코드 블록)**:
```
매출 궤적: FY23 $35.8B → FY24 $51.6B → FY25 $63.9B → FY26E $86~92B
AI 매출 분기: Q1 FY26 $8.4B → Q2 FY26E $10.7B (가속)
Software 분기: Q4 FY25 $6.9B → Q1 FY26 $6.8B (구독 전환 완료 후 소폭 감소)
Semi 마진: Q1 FY26 추정 55% 유지
──────────────────────────────────
현재 위치: Base(반도체) ~ Bull(AI) 경계 — Software는 Bear 근접
트렌드 방향: AI 가속, Software 정체 → Base 상단 고착
단, Q2 FY26 AI $10.7B 달성 여부 + Software YoY 회복 여부 확인 필수
```

**가이던스 반영 시 방향**:
- **Q2 FY26 $22B 가이드 달성 + AI $10.7B 달성**: FY26 매출 $90B+, AI $50B 경로 → Base 확고, Bull 가능성 상승
- **Q2 FY26 AI $9B 미만 미달**: Bear 진입 경계 — $100B FY27 "line of sight" 균열 신호
- **Software YoY 마이너스 전환**: VMware Top 10K 이탈 본격화 → Bear 진입 트리거

**핵심 관찰**: 
- **가장 중요한 변수**: AI 매출 분기 가속·감속 (특히 Q2 FY26 $10.7B 달성, 2026-06 발표 예정)
- **향후 확인 시점**: 
  - Q2 FY26 실적 (2026-06, 정확한 날짜는 어닝스콜 일정 공식화 필요)
  - OpenAI 첫 XPU 선적 시점 (2026~ 중반)
  - Apple Baltra 양산 진입 (2026~ 하반기)
  - VMware Top 10K ELA 재계약 cycle 진행 (2026~2028 상시)

### 8-5. 가치평가 결과

| 지표 | 수치 | 평가 |
|------|------|------|
| 현재 주가 | $402.47 (52주 고점 $414.61 대비 -2.9%) | 고점 근접 |
| Forward PE (FY26E EPS ~$9, 비GAAP) | ~45x | 역사적 평균(25~30x) 대비 **상당 프리미엄** |
| PEG (FY27 기준 50% 블렌드 성장) | ~0.9 | 중립 (성장 지속 조건부) |
| 가중평균 내재가치 | $337 ($78~$628 범위) | 현재가 대비 **-16.2%** |
| 손익비 (Base vs Bear) | 업사이드 $191 / 다운사이드 $191 | 1.00 (대칭) |
| 손익비 (Base vs Extreme Bear) | $126 / $303 | 0.42 (불리) |
| 애널리스트 평균 목표가 | $438~466 | +9~16% 상방 (12개월 전망, 참고용) |

**결론**: 가중평균 내재가치 $337은 현재가 대비 -16.2% 하방. 매수 판정 기준(20%+ 할인) 미달로 **"보유"** 판정. Base 시나리오 실현 시 FY29 +26% 수익(3Y @ 10% 할인 후), Bull 실현 시 +56% 상방. 반면 Extreme Bear 시 -81% 다운사이드. 손익비 Base vs Bear 1.00은 상방/하방 대칭이나 Extreme Bear 반영 시 하방 우위. 단, Q2 FY26 AI $10.7B 달성 시 Bull 확률 상향(20% → 25%+) 재평가 여지. 반대로 미달 시 Bear 시나리오 진입.

---

## 종합 판정

```
[ AVGO ] 평가 요약
────────────────────────────────
비즈니스 퀄리티  : ✅ 커스텀 XPU 60~80% 점유 + VMware 현금 기계, Op Margin 55% / Non-GAAP NI 53% 우수
시장 환경        : ✅ 2026 하이퍼스케일러 캐펙스 $700B, FY27 AI $100B "line of sight"
가치평가         : ⚠️ 가중평균 내재가치 $337 vs 현재 $402 — 16% 하방, Forward PE 45x 프리미엄 부담
리스크           : ⚠️ XPU 고객 집중(Google 40%), VMware Top 10K 이탈 리스크, MRVL 2nd source 추격
────────────────────────────────
종합 의견        : 보유
────────────────────────────────
핵심 모니터링:
  1. AI 매출 분기 YoY 성장률 & Q2 FY26 $10.7B 달성 (2026-06)
  2. Software 매출 YoY 회복 & VMware Top 10K ELA 재계약 이탈률
  3. MRVL AI 매출 가속 & 5개 XPU 고객 재계약 상태 (AWS Trainium4 2nd source 진입 여부)
```

**취약한 숫자**:
- **Base FY29 AI 매출 $160B**: Hock Tan "$100B FY27" 가이드에 CAGR 27% 추가. 컨센서스 일부는 $200B 전망 — 하방 바이어스
- **Base Semi Applied PE 24x**: NVDA Forward PE 24x에 근접. AVGO 소프트웨어 프리미엄 감안하면 보수적. 공격적 투자자는 27~28x 주장 가능
- **Software Applied PE 20x (Base)**: VMware 이탈 시나리오 없음 가정. Nutanix 50K 돌파 시 15~17x로 하향 불가피
- **Forward PE 45x**: 소스별 28~45x 편차. 45x는 FY26 초기 가이드 기반, 28x는 FY27 컨센서스 기반 — 벤치마크 선택이 판정에 영향
- **Google TPU 집중 (추정 AI 매출 40%)**: 공시되지 않은 추정치. Google 자체 설계 복귀 리스크가 실제보다 큰 경우 Bear 시나리오 가속

---

## 분기별 점검 기록

| 날짜 | 실적 요약 | Case 위치 변화 | 가설 업데이트 |
|------|----------|-------------|-------------|
| 2026-04-19 | Q1 FY26 ($19.3B, +29%, AI $8.4B +106%) + Q2 가이드 $22B/AI $10.7B | Base(반도체) ~ Bull(AI) / Software는 Bear 경계 | 최초 Base 분석, thesis 유지 |

**작성 트리거**: 
- Q2 FY26 실적 발표 (2026-06 예정)
- 즉시 재검토 트리거(7번) 충족 시
- XPU 고객 변동 / OpenAI·Apple 선적 마일스톤
- VMware 반독점 조사 공식 개시 시
