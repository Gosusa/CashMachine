---
ticker: AVGO
name: Broadcom Inc.
sector: Semiconductor
analysis_date: 2026-04-19
thesis_summary: 커스텀 XPU 시장 독점 + VMware 구독 전환으로 FCF 복리 성장
target_price: 337
extreme_bear_price: 104
bear_price: 254
base_price: 507
bull_price: 836
---
# AVGO — Broadcom Inc.

> 커스텀 AI ASIC(XPU) + 네트워킹 반도체 + VMware 중심 인프라 소프트웨어 복합기업. 하이퍼스케일러 커스텀 실리콘 시장 60~80% 점유.

---

## 투자 thesis

- **하이퍼스케일러 커스텀 XPU 시장 실질적 표준 — 전환비용 + 효율적 규모**
  - 무형 자산(SerDes·패키징 IP) + 전환비용(3~5년 공동설계 사이클) + 효율적 규모
  - Google(TPU)·Meta(MTIA)·ByteDance·Apple·OpenAI 5개 확정 고객
  - Q1 FY26 AI 매출 $8.4B(+106% YoY), Hock Tan 가이드: FY27 AI 매출 $100B+ 목표, AI 백로그 $73B (18개월 인도)
- **VMware 인수 후 소프트웨어 현금 기계화 — 전환비용 + 원가 우위**
  - 전환비용(가상화 워크로드 이식성 낮음) + 원가 우위(구독 전환으로 마진 재부팅)
  - FY25 소프트웨어 매출 $27B, Q4 FY25 GM 93% / Op Margin 78%
  - Top 10,000 VMware 고객 중 87% VCF 구독 전환 완료
- **복합기업 프리미엄 FCF 창출 — Float 우위 + 자본 배분 우위**
  - FY25 FCF $26.9B (FCF/매출 42%), Q1 FY26 FCF $8.0B (41%)
  - Adj EBITDA 마진 68%, 비GAAP 순이익률 52.8%
  - $10B 자사주매입 프로그램 + 분기 배당 지속

**분석 작성일**: 2026-04-19
**목표가 (Base DCF 가중평균 내재가치)**: $337
**투자 기간**: 3년 (FY29까지, AVGO 회계연도 10월 말~11월 초 종료)

---

## 사업 구조 및 해자

### 2-1. 세그먼트 요약

FY2025 (11/2/2025 종료) 연간 매출 $63.887B 기준, AVGO는 2개 reportable segment로 공시.

| 세그먼트 | 수익원 | 규모 지표 (FY25) | 해자 유형 | 해자 강도 |
|---------|------|---------|---------|---------|
| **Semiconductor Solutions** | 커스텀 AI ASIC(XPU) + AI 네트워킹 + 브로드밴드/와이어리스/스토리지 | $36.7B (57%), AI $20B(+65%) / Non-AI $16.7B | 무형 자산 / 전환비용 / 효율적 규모 / 원가 우위 | Wide |
| **Infrastructure Software** | VMware Cloud Foundation(VCF) + CA 메인프레임 + Symantec 보안 | $27.2B (43%), +19% YoY (VCF 구독 전환) | 전환비용 / 브랜드 / 규모 경제 | Wide |

출처: Broadcom 10-K FY2025, Q4 FY25 프레스 릴리즈(2025-12), Q1 FY26 프레스 릴리즈(2026-03-04).

---

### 2-2. Semiconductor Solutions — 커스텀 XPU + 효율적 규모

**사업 구조**: 하이퍼스케일러를 위한 커스텀 AI ASIC(XPU, 공동설계) + AI 네트워킹(Ethernet 기반 Tomahawk·Jericho 스위치, PCIe 스위치, Optical DSP) + 레거시 반도체(브로드밴드 PON/DOCSIS, Wi-Fi FBAR, 엔터프라이즈 스토리지 HBA/RAID, 인더스트리얼). AI 매출 Q1 FY26 $8.4B(+106%) → Q2 FY26 가이던스 $10.7B(+140%).

**확정 커스텀 XPU 고객 (2026-04 기준)**:

| 고객 | 프로그램 | 규모 |
|------|------|------|
| Google | TPU v5e/v5p/v6/v7 Ironwood | 다년 전략 파트너십, 단일 최대 고객(추정 AI 매출 40%+) |
| Meta | MTIA v1/v2 | 수백만 칩 규모 다년 계약 |
| ByteDance | TikTok 추천·광고 시스템용 XPU | 다년 전략 계약 |
| Apple | Baltra(AI 서버·Private Cloud Compute) | 2026~ 양산 진입 |
| OpenAI (5번째 고객) | 커스텀 AI 가속기 | $10B+ 첫 발주, 2026~ 선적 |

> Hock Tan Q1 FY26: "We currently have 3 hyperscaler customers in production and 2 more in development ramping up." 추가 **Anthropic** 관련 수요도 진행 중 언급(Q4 FY25 어닝스콜).

**해자 유형 및 검증**:

| 해자 유형 (키워드) | 검증 |
|---------|------|
| 무형 자산 (SerDes/패키징 IP) | ✅ |
| 전환비용 (3~5년 공동설계) | ✅ |
| 효율적 규모 (CoWoS 선점) | ✅ |
| 원가 우위 (팹리스) | ✅ |
| 네트워킹 통합 | ✅ |

**해자 상세**:
- **무형 자산 (SerDes·패키징·IP)**: 하이엔드 SerDes 224G/448G 선도(업계 유일), 3.5D F2F 패키징 독자 기술, HBM 인터페이스·PAM4 노하우. PatSnap 특허 분석 250+ 건에서 MRVL 대비 우위.
- **전환비용 (고객 공동설계 사이클 3~5년)**: 하이퍼스케일러 커스텀 XPU는 공동설계·검증·소프트웨어 통합에 3~5년 소요. 한번 Broadcom으로 결정되면 다음 세대까지 고착 — Google은 TPU v4부터 AVGO와 연속 계약.
- **효율적 규모 (TSMC CoWoS·HBM 선점)**: AVGO는 TSMC 2nm/3nm CoWoS-L 패키징 capacity 선점 리스트 상위. HBM3e/HBM4 공급망에서 NVDA 다음 우선순위.
- **원가 우위 (팹리스 구조)**: 팹리스 + OSAT 의존 + 높은 볼륨 ASIC으로 Semi non-GAAP op margin ~55% (NVDA 60%, AMD 25% 대비 중간대).
- **네트워킹 통합**: Tomahawk 6 Ethernet 스위치(100T bandwidth, NVDA NVLink 경쟁자), Jericho ToR, Optical DSP — AMD MI400이 Broadcom 네트워킹에 의존할 정도.

**AI 매출 궤적**:

| 시점 | AI 매출 | YoY |
|------|---------|-----|
| FY25 | $20B | +65% |
| Q1 FY26 | $8.4B | +106% |
| Q2 FY26E (가이드) | $10.7B | +140% |
| FY26E (소프트합산) | $45~50B | +125~150% |
| FY27 Hock Tan 가이드 | $100B+ | +100%+ |

> $100B FY27 목표는 Hock Tan Q1 FY26 어닝스콜에서 공식 재확인("line of sight"). $73B 백로그 중 상당수가 FY27 반영. 그러나 "line of sight"는 확정 수주 아닌 영업 파이프라인 수준이므로 분기별 전환 확인 필수.

**해자 리스크 (Semi)**:
- NVDA·AMD 머천트 GPU 반격 — NVDA Rubin(2H'26) + NVLink/Spectrum-X 스택으로 "커스텀 불필요" 내러티브. 현실화 2027~2028, 해자 훼손 중간.
- Marvell + Alchip/GUC 공동 추격 — AWS Trainium3 MRVL+Alchip 공동 설계. 현실화 2027~2029, 훼손 낮음~중간 (AVGO 규모·IP 격차 유지).
- 하이퍼스케일러 자체 설계(In-house) 복귀 — Apple M-series 확장 가능성, Meta·Google RISC-V 투자. 현실화 2028~2030, 훼손 중간.
- TSMC CoWoS 패키징 capacity 병목 — 현실화 상시, 훼손 낮음 (업계 공통 제약).

---

### 2-3. Infrastructure Software — VMware 중심 전환비용

**사업 구조**: VMware Cloud Foundation(VCF — 구독 기반 vSphere+vSAN+NSX 번들) + 메인프레임 관리(CA Technologies) + 보안(Symantec Enterprise). VMware 인수($84.2B, 2023 완료) 후 Broadcom 자체 모델로 "Top 10,000 고객 중심 · 구독 전환" 전략. 중소기업·채널 파트너 의존 라이선스는 단계적 폐지.

**해자 유형 및 검증**:

| 해자 유형 (키워드) | 검증 |
|---------|------|
| 전환비용 (가상화 스택 이식성 낮음) | ✅ |
| 브랜드 + 인증 생태계 | ✅ |
| 규모 경제 (구독 전환으로 마진 재부팅) | ⚠️ |
| Top 10K 87% 전환률 | ⚠️ (회사 공시) |

**해자 상세**:
- **전환비용**: vSphere/vSAN/NSX에 구축된 수백만 VM은 타 플랫폼(Nutanix, Hyper-V, KVM, Red Hat OpenShift)으로 이식 시 workflow 재검증·애플리케이션 수정 필요. 대규모 엔터프라이즈는 최소 2~3년 이전 프로젝트.
- **브랜드 + 인증**: Cisco/Dell/HPE 하드웨어 OEM 인증, SAP·Oracle·Microsoft 워크로드 공식 지원, VCP 엔지니어 수십만 명.
- **규모 경제**: Top 10,000 고객 중 87% VCF 구독 전환. 비GAAP 소프트웨어 GM 93%, Op Margin 78%(Q4 FY25). 단 이 Op Margin은 일회성 구독 전환 효과 포함 가능성(해지 고객의 남은 라이선스 기간 매출 인식). 지속 가능 수준 70% 추정.

**전환 현황 (Q1 FY26)**:

| 지표 | 현황 |
|------|------|
| VCF Top 10K 구독 전환률 | 87% 완료 |
| 소프트웨어 Q4 FY25 매출 | $6.9B, +19% YoY |
| 소프트웨어 Op Margin Q4 FY25 | 78% (FY24 72%에서 확대) |
| Nutanix 누적 마이그레이션 고객 | ~30,000 (주로 SMB) |

> Nutanix 누적 30K는 대부분 SMB(Broadcom 의도적 축소 대상). 그러나 Microsoft Hyper-V(69% 대기업 대안 탐색), Red Hat(48%) 등 대기업 대안 확대 시 Top 10K 구독 재계약 리스크 증가.

**해자 리스크 (Software)**:
- VMware Top 10K 재계약 이탈 — 2026~2028 ELA 재계약 cycle, 가격 인상 저항 축적. 현실화 2026~2028, 훼손 중간.
- 퍼블릭 클라우드 이동 — VM 워크로드 AWS/Azure/GCP 네이티브 전환. 현실화 진행 중.
- VMware 반독점 규제 — EU·미국 가격 조사 가능성. 현실화 2026~2027, 훼손 낮음~중간.

---

### 2-4. 해자 강도 판정

**최종 판정: Wide Moat ✅**

**핵심 근거**:
1. **시간 지평 관점**: 커스텀 XPU는 3~5년 설계 사이클로 FY27~FY28 매출은 이미 확정 설계 단계(FY23~FY24 발주 완료). 투자 기간 3년 내 결정적 훼손 어려움. VMware도 Top 10K ELA 재계약 주기 3~5년.
2. **전략적 헤지 관점**: Semi(AI + Non-AI) + Software 2-leg 구조. AI 감속 시 소프트웨어 현금흐름이 대차대조표 방어. NVDA(DC 90% 집중) 대비 구조적 안정성 우위.
3. **계약/구조적 보호 관점**: $73B AI 백로그 + VMware 다년 ELA → FY27~FY28 매출 가시성. 5개 확정 XPU 고객 다각화(단일 고객 의존도 하락).

**주의 구간** (Wide 판정이라도 균열 알려줄 선행 지표):
- AI 매출 분기 YoY 성장률 +80% 미만 하락 시 $100B FY27 달성 우려
- VMware 소프트웨어 분기 매출 YoY +10% 미만 (현재 +19%) 감속 시 ELA 재계약 이탈 신호
- Semi Non-AI 매출 연속 3분기 마이너스 성장 시 non-AI 캐시카우 약화

---

## 경쟁 구도 및 경쟁 우위

### 3-1. 경쟁사 식별 및 포지셔닝

| 경쟁사 | 시가총액 (2026-04) | 핵심 사업 영역 |
|--------|-----|-------------|
| AVGO | ~$1.91T | 커스텀 AI ASIC + 네트워킹 + VMware |
| NVDA | ~$4.6T | AI GPU + Networking + CUDA |
| Marvell (MRVL) | ~$80B | 커스텀 ASIC (AWS Trainium) + 광학 DSP |
| Alchip / GUC | 비상장·~$20B | 커스텀 ASIC 디자인 서비스 (ODM) |
| AMD | ~$400B | MI300/400 머천트 GPU + EPYC CPU |
| Cisco (CSCO) | ~$250B | 이더넷 스위치 + Silicon One 커스텀 |
| Microsoft (MSFT) | ~$3.5T | Hyper-V + Azure (VMware 대안) |
| Nutanix (NTNX) | ~$30B | HCI + AOS (VMware SMB 대안) |
| Red Hat (IBM) | ~$250B (IBM 전체) | OpenShift + RHEL |

AVGO의 차별화 포지셔닝은 "하이퍼스케일러 커스텀 파트너 + Full Stack(Chip + Network + Software)"이다. NVDA가 표준 플랫폼(GPU) 중심 CUDA 락인으로 승부한다면, AVGO는 하이퍼스케일러의 TCO 최적화·설계 주권 추구 고객에게 공동설계 파트너로 진입한다. 이 두 접근은 상보적이기도 경쟁적이기도 한데, 추론 워크로드 확대 시 커스텀 ASIC 전환 가속이 AVGO에 유리하게 작용하는 구조.

### 3-2. 핵심 성장동력 경쟁 비교

| 성장동력 | AVGO | NVDA | MRVL | Alchip/GUC | 판정 |
|---------|------|------|------|------------|------|
| 커스텀 AI ASIC 확정 고객 | 5사 + Anthropic | N/A | AWS 일부 | AWS·ByteDance 일부 | 🥇 AVGO |
| 커스텀 ASIC 매출 (FY26E) | $45~50B | N/A | $2.6B | <$1B | 🥇 AVGO |
| 고성능 SerDes IP (224G/448G) | 업계 선도 | NVLink 내부 | 유사 (지연) | IP 라이선스 | 🥇 AVGO (근소) |
| AI 네트워킹 스위치 | Tomahawk 6 (100T), Jericho | NVLink/Spectrum-X, InfiniBand | 광학 DSP만 | N/A | 🥈 AVGO (NVDA 폐쇄·AVGO 오픈) |
| 소프트웨어 현금 기계 | VMware $27B, Op Margin 78% | 제한적 (NIM) | N/A | N/A | 🥇 AVGO (unique) |
| 비GAAP 순이익률 | 52.8% (Q1 FY26) | 55.6% (FY26) | ~28% | ~25% | 🥈 AVGO |
| TAM 접근성 | 하이퍼스케일러 5社 전용 | 모든 시장 | HS + 엔터프라이즈 | HS 일부 | 🥈 AVGO (NVDA 대비 좁음) |

AVGO는 규모·시총에서 NVDA 대비 1/2 수준이나 커스텀 ASIC 카테고리에서는 압도적 1위다. 다만 TAM 접근성에서는 NVDA가 "모든 AI 수요"를 처리하는 반면 AVGO는 5~6사 하이퍼스케일러로 좁은 — 이것이 AVGO의 구조적 취약점이자 집중도 프리미엄의 동전 뒷면.

### 3-3. 경쟁 우위 원천 분석

**1. 하이퍼스케일러 커스텀 ASIC 파트너십 선점**
- 우위: Google TPU v4~v7(2019~2026) 연속 수주, Meta MTIA v1~v2, ByteDance 다년 계약, OpenAI $10B 첫 발주 확보
- 정량 근거: 커스텀 AI ASIC 시장 점유 60~80%, 5개 확정 고객
- 경쟁사 격차: MRVL 대비 **규모 10~20배**, Alchip/GUC 대비 설계·IP 독립성
- 복제 난이도: **매우 높음** — 3~5년 공동설계 프로젝트는 선정되면 다음 세대까지 연속
- 격차 지속 기간: **5~7년** (FY28~FY29 설계 이미 진행)

**2. 고성능 SerDes·패키징 IP**
- 우위: 224G/448G SerDes 업계 선도, 3.5D F2F 패키징 독자 기술, HBM 인터페이스 노하우
- 정량 근거: PatSnap 특허 250+ 건, TSMC CoWoS-L 선점 순위 NVDA 다음 2위권
- 경쟁사 격차: MRVL도 유사 SerDes 개발 중이나 수주 리스트 격차. Alchip/GUC는 IP 라이선스 의존
- 복제 난이도: **높음** — 아날로그 엔지니어링 노하우 + Foundry 협업 경험
- 격차 지속 기간: **3~5년**

**3. Ethernet AI 네트워킹 통합**
- 우위: Tomahawk 6 (100T), Jericho ToR, PCIe 스위치, Optical DSP — NVDA NVLink의 오픈 대안
- 정량 근거: 이더넷 DC 스위치 시장 #1 점유율 (Dell'Oro ~40%), 광학 DSP #1
- 경쟁사 격차: Cisco Silicon One은 엔터프라이즈 중심, AVGO는 하이퍼스케일러·AI 인프라 특화
- 복제 난이도: **높음** — SerDes 기반이 네트워킹과 공유
- 격차 지속 기간: **3~5년**

**4. VMware 엔터프라이즈 락인 (현금 기계)**
- 우위: 글로벌 엔터프라이즈 가상화 de-facto 표준, Top 10K 구독 전환 87% 완료, Op Margin 78%
- 정량 근거: FY25 소프트웨어 매출 $27B, 재계약 사이클 3~5년
- 경쟁사 격차: Nutanix/Hyper-V/OpenShift 성숙했으나 엔터프라이즈 전환비용 높음
- 복제 난이도: **매우 높음** — 35년 누적 설치 기반 + ISV 인증
- 격차 지속 기간: **5~10년** (2026~2028 ELA 재계약 cycle 모니터링 필수)

### 3-4. 투자 차별화 근거

1. **커스텀 AI ASIC 시장 독점 사실상 경쟁자 없음**: MRVL은 규모 1/20, Alchip/GUC는 하청, NVDA는 커스텀 시장 미진입. 2nd tier 추격 5~7년 격차.
2. **Full-Stack 고유성 (Chip + Network + Software)**: AI ASIC + 이더넷 스위치 + VMware 조합은 업계 유일. NVDA는 소프트웨어 약점, Cisco는 AI 반도체 약점, Oracle은 반도체 없음.
3. **소프트웨어 현금 기계**: VMware $27B 매출 + 78% Op Margin은 반도체 사이클 변동성을 완충. 순수 AI 반도체 기업(NVDA/AMD) 대비 구조적 방어력.

**밸류에이션 비교 맥락**: AVGO는 반도체 + 소프트웨어 혼합 프리미엄을 반영해 Semi 섹터 평균(22~25x) 대비 상당 프리미엄에 거래된다. PEG는 FY27 블렌드 성장 기준 중립~저평가 영역. FCF Yield는 섹터 평균 대비 디스카운트인데, 이는 VMware 인수 후 부채 서비스로 상각·이자 비용이 FCF에 하방 압력으로 작용한 결과다. FY29까지 deleveraging 진행 시 FCF Yield 개선 가능.

---

## 리스크 요인

### 리스크 1. 하이퍼스케일러 커스텀 XPU 수요 감속 ⚠️

**설명 + 규모**: NVDA Rubin(2H'26) + AMD MI400이 성능·TCO에서 강력하게 부상하며 하이퍼스케일러가 "커스텀 복잡성"을 포기하고 머천트 GPU로 회귀 가능성. AVGO 커스텀 XPU는 5사 집중 구조이므로 1개 고객만 이탈해도 매출 큰 영향. FY26E AI 매출 $45~50B 중 Google 단일 고객이 ~40%(추정 $18~20B), Meta·ByteDance·Apple·OpenAI 각 10~20%.

**현실화 시점**: 2027~2028

**시나리오별 영향**:

| 시나리오 | XPU 수요 변화 | FY27 AI 매출 |
|---------|--------------|-------------|
| NVDA Rubin 단독 대체 (Google 제외) | -$15~20B | $80B |
| Google TPU 규모 축소 | -$10~15B | $85B |
| In-house 설계 복귀 (Meta/ByteDance) | -$10B | $90B |

- Base: $100B 가이드 달성, Semi Op Margin 55% 유지
- Bear: $80B로 감속, Op Margin 50%로 압박
- Extreme Bear: $50B 이하, 주요 고객 1社 이탈 시 -20% 매출 절단

**완화 요인**: (a) 5社 고객 다각화 (b) Apple/OpenAI 신규 고객 FY26~FY27 램프 (c) 이더넷 네트워킹·Optical DSP 병행 성장

**팩트체크**: ⚠️ — 커스텀 시장 60~80% 점유는 확인됐으나 "$100B line of sight" 백로그 분류(확정 vs 옵션) 미공시.

---

### 리스크 2. VMware Top 10K 재계약 이탈 ⚠️

**설명 + 규모**: 2026~2028 VMware ELA 재계약 cycle 진입. Broadcom 가격 2~10배 인상·채널 축소로 Top 10K 반발 축적. Top 10K 대기업에서 Hyper-V/Red Hat OpenShift 전환 가속 시 소프트웨어 매출 타격. FY25 소프트웨어 $27B 중 VMware ~$24B 추정. ELA 재계약 매년 ~20% 도래 → FY26~FY28 누적 $15B 재계약 risk.

**현실화 시점**: 2026~2028

**상세 데이터**:

| 고객 그룹 | FY25 매출 비중 | 이탈 리스크 |
|------|---------|-----------|
| Top 10K 엔터프라이즈 | 70%+ ($19~20B) | 중간 — 전환비용 높으나 가격 저항 |
| 중견기업 | 20% | 높음 — 채널 폐지로 직접 영향 |
| SMB | <10% | 극심 (이미 Nutanix 이탈) |

**시나리오별 영향**:
- Base: Top 10K 5% 이탈, FY29 소프트웨어 $38B
- Bear: 15% 이탈, FY29 $32B 정체
- Extreme Bear: 30% 이탈, FY29 $28B 감소

**완화 요인**: (a) 대기업 vSphere/vSAN 이식은 2~3년 소요 (b) Cisco/Dell/HPE 하드웨어 인증 유지 (c) VCF 통합 번들로 가격 인상 흡수

**팩트체크**: ⚠️ — 실제 Top 10K 이탈률 공시 없음. Nutanix 30K 이탈은 SMB 중심으로 직접 비교 어려움.

---

### 리스크 3. AI Capex Super-cycle 조기 피크 ⚠️

**설명 + 규모**: 2026 하이퍼스케일러 캐펙스 $700B+ 과잉 투자 판명 시 2027~2028 캐펙스 감속. AVGO는 5社 하이퍼스케일러에 집중 노출 — NVDA보다도 집중도 높음. Enterprise AI ROI 증명 지연 시 customer 우선순위 하락. AVGO는 2026 하이퍼스케일러 캐펙스 중 ~$60B(~8%) 수취 추정.

**현실화 시점**: 진행 중 (관찰 시그널 상시)

**시나리오별 영향**:
- Base: FY28~FY29 하이퍼스케일러 캐펙스 YoY +10~15% 감속, AVGO AI 매출 $100B → $150B
- Bear: FY28 캐펙스 -10%, AVGO AI 매출 FY28 $100B 후 감속
- Extreme Bear: "AI 겨울" 수요 급감 → FY28~FY29 캐펙스 -30%, AVGO AI 매출 -40%

**완화 요인**: (a) $73B 백로그 가시성 (b) 커스텀 ASIC 설계 cycle 3~5년으로 단기 취소 어려움 (c) VMware 현금흐름 유지

**팩트체크**: ⚠️ — 하이퍼스케일러 캐펙스 $700B는 CNBC/Futurum 교차 확인. ROI 증명 지연은 주관적 판단 영역.

---

### 리스크 4. Marvell + Alchip 2nd Source 추격 ✓

**설명 + 규모**: AWS Trainium3 차세대 MRVL+Alchip 공동 설계, Meta·ByteDance에서 2nd source 옵션 모색. AWS-Anthropic 50만+ Trainium2 성공 선례. 하이퍼스케일러가 dual-vendor 전략 채택 시 AVGO 독점 구조 약화. FY26E MRVL AI 매출 $2.6B (AVGO의 1/18~1/20 규모).

**현실화 시점**: 2027~2029

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

---

### 리스크 5. TSMC 공급망·패키징 병목 ✓

**설명 + 규모**: CoWoS-L 패키징 capacity가 AVGO+NVDA+AMD 수요를 감당 못하면 AVGO는 NVDA 우선순위에 밀려 출하 지연 가능. HBM3e/HBM4 공급 경쟁도 동일. AVGO FY27 AI $100B 달성은 CoWoS 공급에 직결.

**현실화 시점**: 상시

**시나리오별 영향**: 매출 인식 시점 지연 — 분기 miss 가능성. 영구 매출 상실 아님.

**완화 요인**: (a) TSMC 2nm CoWoS 2027 증설 계획 (b) 삼성 Foundry 대체 옵션 검토

**팩트체크**: ✓ — TSMC capacity 제약 공식 확인.

---

### 리스크 6. 부채 레버리지 (VMware 인수 레거시) ✓

**설명 + 규모**: VMware 인수($84.2B) 후 FY25 연말 총부채 ~$67B, 순부채 ~$50B. 금리 상승기 이자비용 확대. FY25 이자비용 ~$4.5B. Net Debt/EBITDA ~1.3x (FY25 EBITDA $40B+ 기준).

**현실화 시점**: 상시 (매크로 연동)

**시나리오별 영향**:
- Base: FY29까지 순부채 $25~30B로 축소 (강력한 FCF)
- Bear: 성장 감속 시 FCF 감소, 부채 축소 속도 둔화
- Extreme Bear: 금리 재상승 + EBITDA 감소 시 부채 서비스 부담

**완화 요인**: FY25 FCF $26.9B, Q1 FY26 FCF $8B. 투자 등급 BBB+ 유지.

**팩트체크**: ✓ — Broadcom 10-K 공식 공시.

---

### 리스크 7. VMware 반독점 규제 ❓

**설명 + 규모**: VMware 인수 후 가격 2~10배 인상 이슈로 EU·미국 반독점 조사 가능성. 엔터프라이즈 고객 단체 소송 불확실. 가격 규제·분할 명령 시 소프트웨어 Op Margin 78% → 60%대 하락 가능.

**현실화 시점**: 2026~2027

**시나리오별 영향**:
- Base: 규제 대응·약간의 가격 조정 (부분 완화)
- Bear: 유럽 가격 규제 명령, 소프트웨어 매출 5~10% 감소
- Extreme Bear: VMware 분할 명령 (낮은 확률)

**완화 요인**: 이미 완료된 인수이며 Broadcom은 투명 가격 정책 방어 중.

**팩트체크**: ❓ — 공식 조사 개시 공시 없음. 미디어 루머 수준.

---

### 리스크 8. 밸류에이션 리스크 (고점 Forward PE) ⚠️

**설명 + 규모**: 시총 $1.91T, 역사적 평균(25~30x) 대비 상당 프리미엄. AI 성장 감속·VMware 이탈 가시화 시 멀티플 압축. PEG 0.9는 구조적 저평가 아닌 성장 지속 조건부 중립.

**현실화 시점**: 다른 리스크의 결과로 자동 발동

**시나리오별 영향**: Extreme Bear에 Semi PE 15x, Bear 20x, Base 24x, Bull 28x 반영. Software PE Extreme Bear 12x / Bear 16x / Base 20x / Bull 24x.

**완화 요인**: $26.9B FCF 생성 + $10B 자사주매입 프로그램으로 주가 방어.

**팩트체크**: ⚠️ — 소스별 멀티플 편차 (28~45x 범위). 벤치마크 선택이 판정에 영향.

---

### 리스크 독립성

- 리스크 1(XPU 감속) + 리스크 4(MRVL 추격) + 리스크 3(Capex Peak)는 **상관성 높음** — AI 성장 둔화의 3개 축
- 리스크 2(VMware) + 리스크 7(반독점)은 **상관** — Software segment 동시 위협
- 리스크 1,2(섹터)는 **독립** — AI 감속이 소프트웨어 현금흐름에 직접 영향 제한적
- 리스크 5(TSMC)는 **독립적** — 지정학 이벤트
- 리스크 6(부채)는 **리스크 1,2의 파생** — 매출 감소 시 자동 악화
- 리스크 8(밸류에이션)은 **다른 모든 리스크의 결과**

**독립 사업/자산**: VMware 소프트웨어 $27B 매출은 AI 반도체 사이클과 구조적으로 독립. 시장이 AVGO를 AI 종목으로만 인식할 경우 이 sum-of-parts 분리가 저평가 기회로 전환 가능.

---

## 가치평가

### 5-1. DCF 방법론

**적용 방식: B. SOTP (Sum-of-the-Parts)** — Semiconductor Solutions + Infrastructure Software 2-세그먼트 분리 평가

**선택 근거**: Broadcom은 2개 세그먼트의 성격·성장률·마진·적정 멀티플이 본질적으로 이질적:
- Semiconductor Solutions: 사이클 반도체 + 하이퍼스케일러 AI 특화(성장 100%+, Op Margin 55%)
- Infrastructure Software: 구독 SaaS + VMware 락인(성장 10%, Op Margin 78%)
- 단일 FCF DCF로 통합 시 Semi AI 급성장이 Software 안정성을 왜곡하거나 그 반대. SOTP가 리스크·기회 분리 평가에 필수.

**대안 대비 우위**:
- **FCF DCF (Option A)**: NVDA(DC 90% 집중)에는 적합하나 AVGO는 Semi 57% + Software 43% 구조로 단일 멀티플 부적합
- **Forward Multiple (Option E)**: 보조적 교차검증에만 활용 (Semi와 Software 각각 적용)
- **NAV (Option D)**: 자산 기반 아닌 이익 기반
- **Excess Returns (Option C)**: 자본 규제 없음

**주요 가정**:
- 공통 WACC: 10.0% (Rf 4.26% + 베타 1.25 × ERP 5.5%)
- 예측 기간: 3년 (FY26E → FY29E)
- Terminal: FY29 세그먼트별 op income (비GAAP, 세후) × 세그먼트별 Applied Multiple
- 희석 주식수: FY25 4.85B → FY29 4.65~4.75B
- 실효세율: 14% (FY25 비GAAP 실측 반영)
- 순부채 FY29E: ~$15B(Bull) / $25B(Base) / $30B(Bear) / $40B(Extreme Bear)

**멀티플 배정 (세그먼트 × 시나리오)**:
- Semi: Extreme Bear 15x / Bear 20x / Base 24x / Bull 28x
- Software: Extreme Bear 12x / Bear 16x / Base 20x / Bull 24x

### 5-2. 시나리오 요약

| 시나리오 | 확률 | FY29 목표가 | 현재 PV (3Y @ 10% 할인) |
|---------|------|------------|------------------------|
| Extreme Bear | 15% | $104 | $78 |
| Bear | 25% | $254 | $190 |
| Base | 40% | $507 | $381 |
| Bull | 20% | $836 | $628 |

---

**Extreme Bear — 확률 15%**

- AI Capex 피크 2026~2027 후 30%+ 감소 (2000년대 Telecom/Optical 버블 유사)
- Broadcom 5개 XPU 고객 중 2社 이상 재계약 축소 (Google TPU 감소 + Meta MTIA in-house 대체)
- VMware Top 10K 15%+ 이탈 (ELA 재계약 cycle 대실패)
- Semi GM 65% → 55%, Software Op Margin 78% → 70%
- EU/DOJ VMware 반독점 조사 개시
- FY29 Semi 매출 $63B (AI $50B + Non-AI $13B), Semi Op Margin 40%, Applied PE 15x → Semi EV $325B
- FY29 Software 매출 $28B (Top 10K 이탈), Op Margin 70%, Applied PE 12x → Software EV $203B
- 합산 EV $528B − Net Debt $40B = 주주가치 $488B ÷ 4.70B 희석주식 → FY29 $104 / 현재 PV $78

진입 신호: 2026~2027 하이퍼스케일러 캐펙스 가이던스 -10%+ 하향 (3사 이상 동시) / AI 매출 분기 YoY <50% / VMware YoY 마이너스 3분기 연속

---

**Bear — 확률 25%**

- NVDA Rubin + AMD MI400 수요 복원, AVGO 커스텀 XPU 점유 60% → 50%
- MRVL+Alchip 2nd source 진입 성공 (AWS Trainium4, Meta MTIA v3에서 시장 분할)
- FY27 AI 매출 $80B (vs 가이드 $100B+, 20% 미달)
- VMware Top 10K 5~10% 이탈, ELA 재계약 가격 인상 저항
- Semi Op Margin 55% → 48% (가격 압력)
- Software Op Margin 78% → 74%
- FY29 Semi 매출 $110B (AI $90B + Non-AI $20B), Op Margin 48%, Applied PE 20x → Semi EV $908B
- FY29 Software 매출 $32B (정체), Op Margin 74%, Applied PE 16x → Software EV $326B
- 합산 EV $1,234B − Net Debt $30B = 주주가치 $1,204B ÷ 4.75B 희석주식 → FY29 $254 / 현재 PV $190

진입 신호: AI 매출 분기 YoY <70% / MRVL AI 매출 YoY +150% / Software 매출 분기 YoY <5%

---

**Base — 확률 40%**

- FY27 AI 매출 $100B 달성 ("line of sight" 가이드 부합)
- 5개 XPU 고객 모두 차세대 재계약 + Anthropic 공식 6번째 고객 합류
- AI Capex 순조로운 확장 — 2027 $900B, 2028 $1.1T, 2029 $1.3T
- VMware Top 10K 안정, 구독 전환 후 소프트웨어 완만 성장 (CAGR 5%)
- Semi Op Margin 55% 유지, Software Op Margin 76% (소폭 하락)
- Net Debt $25B로 감소 (강력한 FCF)
- FY29 Semi 매출 $178B (AI $160B + Non-AI $18B), Op Margin 52%, Applied PE 24x → Semi EV $1,910B
- FY29 Software 매출 $38B, Op Margin 76%, Applied PE 20x → Software EV $497B
- 합산 EV $2,407B − Net Debt $25B = 주주가치 $2,382B ÷ 4.70B 희석주식 → FY29 $507 / 현재 PV $381

진입 신호: AI 매출 분기 YoY +80~100% / 5개 고객 XPU 발주 확정 유지 / Software 매출 YoY +3~8%

> Base FY29 AI 매출 $160B는 FY27 $100B + 연 CAGR 27% 가정. Hock Tan의 "$100B 2027" 약속을 정면으로 수용. 컨센서스 대비 보수 — 애널리스트 일부는 FY29 $200B 전망.

---

**Bull — 확률 20%**

- FY27 AI 매출 $120B+ 달성 (가이드 초과)
- OpenAI·Anthropic 각각 다년 $20B+ 확정, XPU 고객 7사 확대
- NVDA Rubin이 일부 학습 유지하나 인퍼런스는 커스텀 ASIC 전환 가속
- Agentic AI 인퍼런스 폭증으로 XPU 수요 구조적 증가
- VMware AI 워크로드 이식으로 소프트웨어 재가속 (VCF Agentic AI SKU)
- Semi Op Margin 55% 유지, Software Op Margin 78% 유지
- Net Debt $15B로 급감
- FY29 Semi 매출 $240B (AI $220B + Non-AI $20B), Op Margin 55%, Applied PE 28x → Semi EV $3,178B
- FY29 Software 매출 $45B (VCF AI SKU 가속, CAGR 13%), Op Margin 78%, Applied PE 24x → Software EV $725B
- 합산 EV $3,903B − Net Debt $15B = 주주가치 $3,888B ÷ 4.65B 희석주식 → FY29 $836 / 현재 PV $628

진입 신호: AI 매출 분기 YoY +120~140% (Q2 FY26 가이드 실현) / XPU 고객 6~7사 발표 (Anthropic 공식화 + 신규 1사) / VMware AI 확장 SKU 매출 의미있는 기여

**Bull 실현 가능성 분석**:

| 전제 조건 | 실현 가능성 | 근거 | 선행 사례 / 반례 |
|---------|-----------|------|----------------|
| FY27 AI $120B+ 초과 달성 | 낮음~중간 | $73B 백로그 + Q2 가이드 $10.7B annualize → FY26 $45B | 선행: Q1 FY26 $8.4B → Q2 $10.7B 가속. 반례: "line of sight" 확정 수주 아님 |
| XPU 고객 6~7사 확대 (OpenAI·Anthropic + 신규 1사) | 중간 | Anthropic 진행 중 언급, OpenAI $10B 발주 확정 | 선행: Apple Baltra 이미 ramping. 반례: 신규 6번째 고객 공식 발표 없음 |
| 인퍼런스 커스텀 ASIC 전환 가속 | 중간 | Google TPU 경제성 + AWS Trainium 확산 | 선행: Anthropic 50만 Trainium2. 반례: Rubin 성능 + 가격 인센티브 |
| VMware AI SKU 재가속 | 낮음 | 아직 공식 공개 제품 없음 | 반례: VMware AI 워크로드 도입 지연 |
| Semi Op Margin 55% 유지 | 중간 | 현재 수준 유지, 고마진 AI 비중 증가 | 반례: 2nd source 진입 시 가격 경쟁 |
| VMware Top 10K 이탈 없음 | 중간 | 대기업 전환비용 높음 | 반례: 2026~2028 ELA 재계약 가격 저항 증거 |

**실현 경로 (인과 체인)**: FY27 $100B AI 달성 → 신규 2사 고객 확정 → Semi Op Margin 유지 → 인퍼런스 커스텀 전환 가속 (Nvidia 일부 대체) → FY29 AI $220B → 주가 멀티플 확장 → Bull 성립

**전제 간 독립성**:
- "$120B AI" + "6~7사 고객"은 **상관됨** (고객 확대가 매출 증가 견인)
- "VMware AI SKU"는 **독립**
- "Op Margin 유지"는 **점유율의 종속 변수**

**종합 실현 확률 판단**: 개별 전제들은 각각 30~50% 실현 가능성. 독립적이면 기대값 10%이나 "FY27 $100B 달성 → 신규 고객 확대 → 인퍼런스 전환 가속" 체인이 연결되어 있어 가중 확률 **20%**. 시장이 이미 Bull 경로 일부 반영 중이라 상방 여지는 제한적.

**붕괴/전환 조건**: Q2 FY26 AI 매출 가이던스 $10.7B 미달 / 5개 XPU 고객 중 1사 이상 재계약 거절·축소 발표 / FY27 AI $100B "line of sight" 철회 or 하향 / VMware 매출 YoY 마이너스 전환

---

### 5-3. 가중평균 내재가치

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
```

**확률 배분 근거**:
- **Extreme Bear 15%**: AI 버블 터짐·다중 XPU 고객 이탈·VMware 대규모 이탈의 동시 실현. (i) $73B 백로그 가시성 (ii) 5개 XPU 고객 다각화 (iii) VMware 전환비용으로 완화. 10~20% 범위 중 중앙 15%.
- **Bear 25%**: 커스텀 XPU 점유 하락 + MRVL 2nd source + $100B AI 가이드 부분 미달이 가장 현실적. 특히 MRVL+Alchip의 AWS Trainium4 공동 설계 진입은 2027~2028 확률 높음.
- **Base 40%**: Hock Tan "$100B FY27" 가이드 부합 + VMware 안정이 현재 궤적 연장. 애널리스트 컨센서스 ($438~466) 부합. 35~45% 범위 중앙.
- **Bull 20%**: $120B+ AI + 6~7사 고객 확대의 3중 조건 필요. 개별 확률 40%·50%·40%로 독립 기대값 8%이나 AI 인퍼런스 전환 가속이 공통 동력이라 20%로 상향.

> Bear + Extreme Bear 합 = 40% (가이드 35%+ 기준 만족, 보수적 가중)

---

### 5-4. 현재 실적 위치

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

**트렌드 판단**:
- 매출 궤적: FY23 $35.8B → FY24 $51.6B → FY25 $63.9B → FY26E $86~92B
- AI 매출 분기: Q1 FY26 $8.4B → Q2 FY26E $10.7B (가속)
- Software 분기: Q4 FY25 $6.9B → Q1 FY26 $6.8B (구독 전환 완료 후 소폭 감소)
- Semi 마진: Q1 FY26 추정 55% 유지
- **현재 위치**: Base(반도체) ~ Bull(AI) 경계 — Software는 Bear 근접
- **트렌드 방향**: AI 가속, Software 정체 → Base 상단 고착

**가이던스 반영 시 방향**:
- **Q2 FY26 $22B + AI $10.7B 달성**: FY26 매출 $90B+, AI $50B 경로 → Base 확고, Bull 가능성 상승
- **Q2 FY26 AI $9B 미만 미달**: Bear 진입 경계 — $100B FY27 "line of sight" 균열 신호
- **Software YoY 마이너스 전환**: VMware Top 10K 이탈 본격화 → Bear 진입 트리거

**핵심 관찰**:
- **가장 중요한 변수**: AI 매출 분기 가속·감속 (특히 Q2 FY26 $10.7B 달성)
- **향후 확인 시점**:
  - Q2 FY26 실적 (2026-06 예정)
  - OpenAI 첫 XPU 선적 시점 (2026~ 중반)
  - Apple Baltra 양산 진입 (2026~ 하반기)
  - VMware Top 10K ELA 재계약 cycle (2026~2028 상시)

---

### 5-5. 가치평가 결과

**구조적 손익비 (Base 목표가 기준)**:

| 지표 | 수치 | 평가 |
|------|------|------|
| Base vs Bull 업사이드 | FY29 $836 − $507 = **+$329 (+65%)** | 상방 기대 큼 |
| Base vs Bear 다운사이드 | FY29 $507 − $254 = **−$253 (−50%)** | 중간 다운사이드 |
| 손익비 (Base vs Bear) | $329 / $253 = **1.30** | 상방 유리 |
| 손익비 (Base vs Extreme Bear) | $329 / ($507−$104) = $329 / $403 = **0.82** | 꼬리 반영 시 불리 |
| 가중평균 내재가치 (현재 PV) | **$337** | FY29 기준 아닌 현재 PV |
| 가중평균 범위 | $78 (EB) ~ $628 (Bull) | 편차 큼 |

**손익비 해석**: Base 대비 Bull vs Bear의 업/다운사이드는 1.30배로 상방이 근소 유리하나, Extreme Bear의 꼬리 다운사이드를 반영하면 손익비 0.82로 하방이 더 크다. 이는 AVGO의 집중도 리스크(Google 40%·5사 의존)와 VMware 재계약 cycle의 이중 꼬리위험을 반영한 결과.

**결론 (조건부 진술)**:
- **Q2 FY26 AI $10.7B 달성 + Software YoY 회복** 시 Bull 확률 상향(20% → 25%+) 재평가 여지 — 가중평균 내재가치 상향
- **Q2 FY26 AI $9B 미만 + Software YoY 마이너스** 시 Bear 진입 트리거 활성화 — Bear 확률 25% → 30%+ 상향, 가중평균 내재가치 하향
- **5개 XPU 고객 재계약 중 1사 이상 이탈** 시 Extreme Bear 확률 15% → 20%+ 상향

---

## 종합 판정

```
[ AVGO ] 평가 요약
────────────────────────────────
비즈니스 퀄리티  : ✅ 커스텀 XPU 60~80% 점유 + VMware 현금 기계, Op Margin 55% / Non-GAAP NI 53% 우수
시장 환경        : ✅ 2026 하이퍼스케일러 캐펙스 $700B, FY27 AI $100B "line of sight"
가치평가         : ⚠️ Extreme Bear 꼬리 반영 시 손익비 0.82 불리, Base 상방은 +65%로 양호
리스크           : ⚠️ XPU 고객 집중(Google 40%), VMware Top 10K 이탈 리스크, MRVL 2nd source 추격
────────────────────────────────
종합 의견        : 보유
────────────────────────────────
핵심 모니터링:
  1. AI 매출 분기 YoY 성장률 & Q2 FY26 $10.7B 달성 (2026-06)
  2. Software 매출 YoY 회복 & VMware Top 10K ELA 재계약 이탈률
  3. MRVL AI 매출 가속 & 5개 XPU 고객 재계약 상태 (AWS Trainium4 2nd source 진입 여부)
```

### 왜 매수가 아닌가
- **구조적 손익비 대칭**: Base 대비 Bull 업사이드 +65%와 Bear 다운사이드 -50%는 유사 비율. Extreme Bear 꼬리 반영 시 손익비 0.82로 오히려 하방이 크다. 구조적 매수 신호 부재.
- **집중도 리스크 할인 미반영**: Google 단일 고객이 AI 매출 40%, XPU 5사 집중 — 이 집중도는 해자의 동전 뒷면이며 "1사 이탈" 시나리오가 Bear·Extreme Bear로의 직통 경로. 현재 시장 가격은 집중도 할인을 충분히 반영하지 않음.
- **Bull 경로 Priced In**: 시장이 이미 Forward PE 프리미엄으로 Bull 경로 일부 반영 중이라 추가 상방 여지 제한적. "$100B FY27"이 달성돼도 시장은 $120B+를 기대하기 시작.

### 왜 매도가 아닌가
- **Wide Moat 유효성**: 커스텀 XPU 3~5년 설계 사이클로 투자 기간(3년) 내 결정적 훼손 어려움. $73B AI 백로그 + VMware 다년 ELA로 FY27~FY28 매출 가시성 확보.
- **Full-Stack 고유성**: AI ASIC + 이더넷 스위치 + VMware 조합은 업계 유일 — NVDA·Cisco·Oracle도 이 조합 복제 불가. 이는 Bear 시나리오에서도 유지되는 구조적 해자.
- **FCF 기계**: FY25 FCF $26.9B + $10B 자사주매입 + 배당 지속 — 하방 시에도 주가 방어 메커니즘 작동.
- **소프트웨어 독립 현금흐름**: VMware $27B는 반도체 사이클과 구조적 독립. AI 급감 시나리오에서도 $15B 이상 Op Income 방어 가능.

### 분할 매수 근거 (DCF 가격대 기반)
- **Bear PV $190 이하**: Semi PE 20x·Software PE 16x 시나리오 진입 수준. Base 대비 -50% 하락. Wide Moat 유효성 감안 시 손익비 개선 (이 수준에서 Bull 업사이드 +$330 / Bear 다운사이드 -$86 = 손익비 3.8로 개선).
- **Extreme Bear PV $78 이하**: 복합 리스크 동시 실현 반영. 극단적 매수 영역 — 시장 공황 수준.
- **Base PV $381 근처**: 가중평균 내재가치($337) 부근. 매수 기준(20%+ 할인) 미달로 신규 진입 권장 수준 아님.

### 가장 취약한 숫자
- **Base FY29 AI 매출 $160B**: Hock Tan "$100B FY27" 가이드에 CAGR 27% 추가. 컨센서스 일부는 $200B 전망 — 하방 바이어스
- **Base Semi Applied PE 24x**: NVDA Forward PE 24x에 근접. AVGO 소프트웨어 프리미엄 감안하면 보수적. 공격적 투자자는 27~28x 주장 가능
- **Software Applied PE 20x (Base)**: VMware 이탈 시나리오 없음 가정. Nutanix 50K 돌파 시 15~17x로 하향 불가피
- **Google TPU 집중 (추정 AI 매출 40%)**: 공시되지 않은 추정치. Google 자체 설계 복귀 리스크가 실제보다 큰 경우 Bear 시나리오 가속

---

## 스트레스 테스트

> **리스크 요인(4번)과의 차이**: 리스크 요인은 DCF 시나리오 확률에 직접 반영된 위험이다. 스트레스 테스트는 DCF 가중평균에 반영하지 않는 외생 충격·꼬리 위험을 별도로 점검하는 참고 시뮬레이션이다.
>
> **주의**: Revaluation 가중평균에 반영하지 않는다.

### 7-1. 시나리오별 스트레스 테스트

#### 7-1-1. TSMC 대만 공급망 쇼크 (지정학 꼬리위험)

**가정**:
- 대만해협 긴장 고조 — 중국의 군사/경제 봉쇄 또는 반도체 수출 차단으로 TSMC 3nm/2nm + CoWoS 패키징 capacity 6~12개월 차질
- AVGO XPU (Google TPU, Meta MTIA, ByteDance 차세대) 양산 50%+ 감축
- Samsung Foundry/Intel 18A 대체는 수율·패키징 병목으로 실질 불가

**재무/밸류에이션 충격**:
- FY27 AI 매출 $100B 가이드 → $55~65B (-35~45%)
- Semi Op Margin 52% 유지되나 절대 매출 하락 직격
- Software 매출 영향 없음 (방어력)
- 주가 충격: **-40%**

**버티는 근거**: AVGO는 팹리스 구조 — TSMC 리스크는 공급 제약이지 AVGO 대차대조표 직접 타격 아님. Software $27B 세그먼트 영향 無. AI Capex는 지연될 뿐 소멸 아님.

**취약 근거**: CoWoS 패키징은 TSMC 단일 의존. 커스텀 ASIC은 Google에 고정되어 있어 NVDA처럼 고객 베이스 분산되지 않음. 미국 CHIPS Act 자체 역량까지 5년+ 소요.

**관찰 지표**: 대만-중국 군사 긴장 지수 (CFR, CSIS) / TSMC 월간 CoWoS 공급 capacity 업데이트 / 주요 hyperscaler의 Samsung·Intel 파운드리 공식 채택 발표

**실현가능성**: **8%** — 단기(3년 내) 실제 봉쇄는 낮으나 꼬리위험 배제 불가
**Bear DCF 기여**: -40% × 8% = **-3.2%pt**

---

#### 7-1-2. AI Capex 버블 버스트 (구조적 수요 쇼크)

**가정**:
- 2000년대 텔레콤 장비 버블의 반복 — 하이퍼스케일러 5社(Google/Meta/MSFT/Amazon/ByteDance) 동시 Capex 재조정
- AI ROI 부재 판정 → FY27 CY26~CY27 Capex YoY -25~35%
- XPU 주문 취소/지연 → AVGO AI 매출 FY27 $100B → $65B (-35%)

**재무/밸류에이션 충격**:
- FY27 AI 매출 $65B, FY29 $80B 정체 (Base $160B 대비 -50%)
- Semi Op Margin 52% → 45% (고정비 레버리지 악화)
- 주가 충격: **-50%** — AVGO는 NVDA 대비 고객 집중도 높아 충격 더 큼

**버티는 근거**: Software $27B·Op Margin 76% 안정. 넷 부채 $65B는 FCF로 관리 가능. Custom ASIC은 GPU 대비 TCO 우위 → 불황기 "비용 절감" 수요로 전환 가능성. Hock Tan 배당 커밋먼트 유지.

**취약 근거**: AVGO는 NVDA보다 고객 다각화 약함 — Google 한 고객에서 AI 매출 40% 의존. Bull 경로 시장 반영 상태에서 반대 방향 낙폭 크기. 자체 GPU 없음 → 추론 전환 가속 시 Nvidia 대체 수혜 제한.

**관찰 지표**: 하이퍼스케일러 분기 Capex 가이드 변화 / AI 인퍼런스 비용당 수익화 지표 / XPU 재고 일수 (현재 ~45일, 위험 >60일) / TSMC CoWoS 가동률 90%+에서 70% 이하 하락

**실현가능성**: **15%** — 2000년대 Telecom Capex bust 역사적 선례 존재. AVGO는 NVDA 대비 구조적 수요 피크 충격 더 급격
**Bear DCF 기여**: -50% × 15% = **-7.5%pt**

---

#### 7-1-3. MRVL + Alchip 2nd Source 시장 분할 성공 (경쟁 구도 변화)

**가정**:
- Marvell + Alchip 조합이 AWS Trainium5/Graviton5·Microsoft Maia2 공동 설계 획득 (FY27~FY28)
- 기존 AVGO 독점의 AWS·MSFT XPU 외주 시장이 2개 Vendor 체제로 분할
- AVGO 커스텀 시장 점유 80% → 55% 하락 (FY29)
- 가격 경쟁 본격화 → XPU Blended ASP -15%, Semi Op Margin 52% → 46%
- Google/Meta/Apple/OpenAI 4사는 AVGO 잔류 (기존 IP 관성)

**재무/밸류에이션 충격**:
- FY29 AI 매출 $160B → $115B (-28%)
- 주가 충격: **-28%**

**버티는 근거**: Google TPU는 AVGO 고유 IP(SerDes·Interconnect)에 깊이 통합 — 스위칭 코스트 절대적. Meta MTIA·Apple Private Cloud Compute는 AVGO와 수년간 Co-design 관계. ByteDance·OpenAI 신규 진입 고객 — AVGO의 기존 5개 거점 유지. MRVL/Alchip이 TSMC CoWoS-L 물량 확보에 시간 소요.

**취약 근거**: MRVL은 이미 AWS Trainium4 일부 지분 확보(공식 미공개). Alchip은 TSMC 자회사급 파트너. AVGO "80% 커스텀 점유" 주장은 정의 모호. 신규 고객 확장(6~7사 시나리오)의 Bull 경로 파손 → Bull 20% 가중치 약화.

**관찰 지표**: AWS/MSFT Azure 분기 실적에서 차세대 ASIC 파트너 언급 변화 / MRVL 분기 실적의 Custom Silicon 매출 추이 / Alchip 월매출 데이터 / AVGO 신규 XPU 고객 발표 부재

**실현가능성**: **25%** — MRVL은 이미 AWS 관계 구축, Alchip은 TSMC 친화적 파트너. 2027~2028 구체화 가능성 실재
**Bear DCF 기여**: -28% × 25% = **-7.0%pt**

---

#### 7-1-4. VMware Top 10K 대량 이탈 + 반독점 규제 동시

**가정**:
- EU 집행위·FTC VMware 구독 전환 관행 공식 조사 (2026년 하반기 개시)
- Top 10K 중 25%가 KVM/Nutanix/OpenShift로 3년 내 이전 (Base 5%·Bear 15% 대비 가혹)
- 규제 조치로 VCF ELA 가격 인상 제약 → ARPU 성장 정체
- 유럽에서 가격 규제 명령 → 유럽 VMware 매출 -15%
- FY29 Software 매출 $22B (Base $38B 대비 -42%)

**재무/밸류에이션 충격**:
- Software Op Margin 76% → 68%
- Software EBIT $29B → $15B (-48%)
- 주가 충격: **-22%** (Semi 독립으로 방어)

**버티는 근거**: VMware Top 10K 전환 비용은 12~24개월 소요. Semi 세그먼트는 완전 독립. VCF Private Cloud 통합은 고객 멀티 하이퍼바이저 전략의 핵심. 규제는 가격 규제 수준에 그칠 가능성 (분할 명령은 역사적으로 드물다). Hock Tan의 가격 정책 조기 조정 가능성.

**취약 근거**: Broadcom이 VMware 인수 후 ELA 가격을 10~15배 인상한 사례가 Top 10K에 누적 불만. Nutanix·OpenShift의 VCF 대체가 2026 기점으로 엔터프라이즈급 성숙. EU는 Microsoft·Apple 사례에서 보듯 반독점에 공격적. Software Op Margin 76%는 업계 최상위 — normalize 시키면 이 수준 유지 불가.

**관찰 지표**: EU 집행위 VMware 반독점 조사 공식 발표 여부 / AVGO Infrastructure Software 분기 YoY 성장률 (현재 +10%, 0% 근접 시 Bear) / Nutanix·Red Hat OpenShift 분기 실적에서 "VMware migration wins" 빈도 / Top 10K 갱신률 (현재 >90%, 80% 하락 시 경계)

**실현가능성**: **18%** — EU 조사 가능성 실재. Top 10K 대량 이탈은 3~5년 뷰에서 점진적 가능
**Bear DCF 기여**: -22% × 18% = **-4.0%pt**

---

#### 7-1-5. 하이퍼스케일러 In-house 완전 전환 (파트너십 종료)

**가정**:
- Google/Meta 중 1사가 2027~2028 차세대 ASIC을 자체 Full-Stack 설계로 전환 (AVGO IP 의존 제거)
- AVGO와의 계약 갱신 실패 — 해당 고객 매출 제로화 (2~3년 단계적 축소)
- 나머지 4개 고객(Apple·OpenAI·ByteDance + 잔존 1사)은 유지
- 하이퍼스케일러 업계 내 "In-house 전환 가능" 인식 확산 → 멀티플 압축

**재무/밸류에이션 충격 (Google 이탈 시나리오)**:
- FY29 AI 매출 $160B → $100B (-37%)
- Semi Op Margin 52% → 48%
- 주가 충격: **-38%**

**버티는 근거**: Google TPU는 AVGO의 SerDes IP에 깊이 의존 — Full-Stack 자체 설계는 3~5년+ 투자 필요. AVGO의 Semi-Custom 모델은 고객사 내부 인재·투자로 쉽게 대체 불가. Apple Silicon 팀은 M1 이후 10년+ 투자 결과 — Google 신규 팀이 동등 수준 도달에 시간. 이탈 가시화되어도 기존 Gen TPU 지속 가동.

**취약 근거**: Google은 이미 자체 Axion(Arm CPU) 설계 역량 확보. "고객 집중"이 AVGO 해자의 동전 뒷면 — Google 1사가 AI 매출 40% 기여는 구조적 취약점. Hock Tan의 "신규 4~5사 파이프라인" 약속이 지연되면 Bull 경로 파손. 고객 이탈 뉴스 자체가 NVDA 대체 Thesis를 해체.

**관찰 지표**: Google Cloud 분기 실적에서 TPU v7/v8 파트너 언급 변화 / Meta Connect·OCP Summit에서 MTIA 자체 설계 비중 증가 발표 / AVGO XPU 고객 리스트의 파트너십 연장 발표 / Hock Tan 분기 콜에서의 "새로운 고객 win" 언급 빈도

**실현가능성**: **12%** — 기술적·시간적 장벽 높으나 Google·Meta는 절대 자원 보유. 단일 고객 이탈은 2027~2028 리스크로 실재
**Bear DCF 기여**: -38% × 12% = **-4.6%pt**

---

### 7-2. Bear DCF 시뮬레이션 합산

| # | 시나리오 | 주가 충격 | 실현가능성 | Bear 기여 |
|:--:|:--------|:----------|:-----------|:----------|
| 1 | TSMC 대만 공급망 쇼크 | -40% | 8% | -3.2%pt |
| 2 | AI Capex 버블 버스트 | -50% | 15% | -7.5%pt |
| 3 | MRVL+Alchip 2nd Source 시장 분할 | -28% | 25% | -7.0%pt |
| 4 | VMware Top 10K 이탈 + 반독점 규제 | -22% | 18% | -4.0%pt |
| 5 | 하이퍼스케일러 In-house 완전 전환 | -38% | 12% | -4.6%pt |
| | **단순 합산 (동조성 무시)** | | | **-26.3%pt** |

**동조성 해석**:
- **#2 (AI Capex 버스트) + #3 (2nd Source 경쟁)**: AI 수요 부진 시 고객이 가격 민감해지며 2nd source 채택 가속 → 두 시나리오 동시 발생 확률 증폭
- **#2 (Capex 버스트) + #5 (In-house 전환)**: 수요 감소기에 하이퍼스케일러는 CAPEX 효율화 압박 → In-house 개발 우선순위 상승
- **#1 (TSMC 쇼크)은 독립** — 지정학 외생 변수, 다른 시나리오와 상관 낮음
- **#4 (VMware)는 독립** — Software 세그먼트, Semi와 상관 낮음

동조성 가정: 50% 상관(#2-#3, #2-#5 쌍) → 실효 기여 감소분 -4.0%pt 추정. 최종 기여 **-22.3%pt**.

---

### 7-3. Bear → Stress 반영 시 비교

Base 파일 참조: Bear $190 (현재 PV) / Extreme Bear $78 (현재 PV) / Bear FY29 목표가 $254.

| 방식 | 계산 | 결과 |
|:-----|:-----|:-----|
| Base Bear (현재 PV) | - | **$190** |
| 단순 합산 적용 | $190 × (1 − 26.3%) | **$140** |
| 동조성 보정 적용 | $190 × (1 − 22.3%) | **$148** |
| vs. Base Extreme Bear | - | **$78** |

**시사점**:
- Stress 시나리오를 모두 Bear에 반영해도 $140~$148 수준 — Extreme Bear $78 대비 훨씬 높음
- Extreme Bear ($78)가 이미 **다중 충격 동시 실현**(AI Capex 수요 급감 + XPU 2~3사 이탈 + VMware 대량 이탈 + 금리 상승 동시)을 전제한 시나리오이기 때문
- Stress 각 시나리오는 "독립적 외생 충격" 설정 → Extreme Bear의 "복합 내생 붕괴"와 성격이 다름
- **결론**: 현재 Base 가중평균(Bear 25% + Extreme Bear 15%)의 Bear 꼬리 두께는 **합리적 수준**. 외생 충격 추가 반영 시 Bear 비중 25% → 32% 소폭 상향 고려 가능하나, Extreme Bear와 이중 계상 우려로 Base 유지

> **주의**: Revaluation 가중평균에 반영하지 않는다. 사용자 Thesis가 위 Stress 시나리오 중 하나를 낮게/높게 평가하는 내용이면 Revaluation에서 Thesis 팩트체크에 활용.

---

## 모니터링 지표

| 구분 | 모니터링 항목 | 기준값 | 현재 | 시나리오 연결 |
|------|------------|-------|------|-------------|
| 해자 (Semi AI) | AI 매출 분기 YoY 성장률 | +80%+ 유지 | +106% (Q1 FY26) ✅ | <60% → Bear / <50% → Extreme Bear |
| 해자 (Semi AI) | 커스텀 XPU 확정 고객 수 | 5사 유지 (Anthropic 추가 진행) | 5사 ✅ | 1사 이탈 → Bear 트리거 |
| 해자 (Semi AI) | AI 백로그 증감 | $73B 이상 유지 | $73B (Q4 FY25) ✅ | 감소 → Bear 진입 |
| 해자 (Semi AI) | Semi Op Margin (비GAAP) | 53%+ | ~55% (Q1 FY26) ✅ | <48% → Bear |
| 해자 (Software) | Software 분기 매출 YoY | +15%+ 유지 | Q1 FY26 +1%, FY25 +19% ⚠️ | <5% → Bear / 마이너스 3Q → Extreme Bear |
| 해자 (Software) | Software Op Margin | 75%+ 유지 | 78% (Q4 FY25) ✅ | <70% → Bear |
| 해자 (Software) | VCF Top 10K 전환률 | 85%+ 유지 | 87% ✅ | <80% → 경계 |
| 리스크 (XPU 감속) | AI 매출 분기 YoY | +60% 미만으로 하락 | +106% ✅ | Bear 진입 |
| 리스크 (XPU 감속) | 5사 고객 중 재계약 이탈 | 1사 이상 | 없음 ✅ | Bear 트리거 |
| 리스크 (VMware) | Software 매출 YoY | +5% 이하 | Q1 +1%, FY25 +19% ⚠️ | Bear 진입 |
| 리스크 (VMware) | Nutanix 누적 마이그레이션 | 50K+ 돌파 | 30K ⚠️ | Top 10K 동반 시 Bear |
| 리스크 (Capex) | Top-5 하이퍼스케일러 분기 캐펙스 YoY | +20% 미만 | +60% ✅ | <0% → Extreme Bear |
| 리스크 (MRVL) | MRVL AI 매출 YoY | +150% 가속 | +75% ✅ | 가속 시 Bear |
| 리스크 (TSMC) | CoWoS capacity 가이던스 | NVDA/AMD 대비 AVGO 할당률 감소 | 모니터링 필요 | 감소 시 Bear |
| 리스크 (부채) | Net Debt/EBITDA | 1.5x+ 돌파 | 1.3x ✅ | 2.0x+ → Extreme Bear |
| 매크로 | 10Y Treasury | 5%+ 돌파 | 4.26% ✅ | WACC 재평가 |
| 매크로 | PHLX Semi (SOXX) YoY | -20%+ | 모니터링 | 섹터 리스크 |
| 경쟁 (ASIC) | 커스텀 ASIC 시장 점유율 | 50% 미만 | 60~80% ✅ | <60% → Bear |
| 경쟁 (Full-Stack) | 이더넷 스위치 AI DC 점유 | #2 하락 | #1 (Dell'Oro ~40%) ✅ | #2 → 경계 |
| 경쟁 (VMware) | 분기별 ELA 재계약률 | 85% 미만 | 공시 제한 | <85% → Bear |
| 경쟁 (SerDes) | 224G/448G 경쟁사 출시 | MRVL/Alchip 동등 출시 | 지연 ✅ | 출시 → 경계 |

**지표 맥락**:
- **AI 매출 분기 YoY**는 FY27 $100B "line of sight" 달성 여부의 실시간 바로미터. Q2 FY26 $10.7B 가이드 달성 여부가 가장 중요.
- **Software 매출 YoY**는 Q1 FY26 +1%로 이미 경계 수준. VMware 구독 전환 완료 후 자연 감속인지, Top 10K 이탈의 조기 시그널인지 Q2 FY26에서 판가름.
- **Nutanix 마이그레이션 30K → 50K 돌파**가 Top 10K 이탈 동반 시 Bear 진입 확정 시그널.

### 즉시 재검토 트리거

- AI 매출 분기 YoY +60% 미만 하락 (FY27 $100B 달성 불가 신호)
- 5개 XPU 고객 중 1社 이상 차세대 재계약 거절 or 머천트 GPU 전환 발표
- Software 매출 YoY 마이너스 전환 (ELA 이탈 본격화)
- Nutanix 누적 마이그레이션 50K 돌파 + Top 10K 고객 이탈 공시
- MRVL AI 매출 YoY +150% 가속 (2nd source 위협 급증)
- EU/DOJ VMware 반독점 조사 공식 개시
- Forward PE 55x 돌파 or 25x 이하 급락
