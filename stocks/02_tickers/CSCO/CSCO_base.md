# CSCO — Cisco Systems, Inc.
> 글로벌 엔터프라이즈 네트워킹 지배자. Networking(스위치·라우터·WiFi) + Security(Splunk 포함) + Collaboration + Observability + Services. 시가총액 ~$341B, EV ~$354B. FY26 매출 $61.2~$61.7B 가이드.

---

## 투자 thesis

- **Silicon One 기반 AI 하이퍼스케일러 수주가 3개 분기 연속 가속 중** → 효율적 규모 + 무형자산(실리콘 IP). Q1 FY26 $1.3B → Q2 FY26 $2.1B AI infra 오더 (QoQ +62%), FY26 누적 가이드 $5B+ (FY25 전체와 동등). AI infra 매출 인식 FY26 $3B+ 가이드. P200 칩은 Microsoft Azure·Alibaba에 초기 공급, G300은 2026 2월 발표로 FY27~FY28 모멘텀 지속 예상
- **Splunk + 네트워킹 통합이 Observability/Security 플랫폼으로 전환** → 전환비용 + 무형자산(데이터 플랫폼). Splunk ARR·product RPO 두 자릿수 성장, H1 FY26에 500개 신규 고객(연간 1,000 목표). 클라우드 구독 전환으로 일시적 Security -4% YoY 드래그이나 FY27부터 통합 데이터 백본 재가속 예상
- **FY26 매출 +8% 가이드 + FCF $13.6B + 50%+ 자본환원 정책이 가치 방어선** → 무형자산(엔터프라이즈 브랜드) + 전환비용. 구독 매출 $7.8B(51%), 총 ARR $31B(+3%), 제품 ARR +6%. 분기 배당 $0.42 (+2% 인상) + $10.8B 자사주 잔여 한도. 성장이 둔화해도 배당+buyback으로 EPS +6~8% 확보

**매수 근거 작성일**: 2026-04-19
**현재가**: $86.25 (2026-04-17 종가, 52주 범위 $53.83~$88.19, ATH $86.31 2026-02-09)
**목표가**: $100 (Base 3년 후 시나리오 가중평균, 자세한 내용은 8장)
**투자 기간**: 3년 (FY26~FY29, AI infra 사이클 1회전 + Splunk 통합 완료 시점)

---

## 사업 구조 및 경제적 해자

### 2-1. 세그먼트 구조 요약

| 세그먼트 | 수익원 | 규모 지표 (Q2 FY26) | 해자 유형 | 해자 강도 |
|---------|------|------------------|---------|---------|
| Networking | 스위치·라우터·WiFi·Silicon One·AI infra | $8.3B (+21% YoY) | 무형자산(Silicon One IP), 전환비용(IOS/NX-OS), 효율적 규모 | Wide |
| Security (Splunk 포함) | SecureX, SASE, Firewall, Splunk SIEM/SOAR | $2.0B (-4% YoY) | 전환비용(Splunk 데이터 lock-in), 무형자산 | Narrow |
| Collaboration | Webex 클라우드·온프레, 콜센터 | $1.1B (+6% YoY) | 전환비용(엔터프라이즈 플랫폼), 규제 deployment | Narrow |
| Observability | Splunk Observability, AppDynamics, ThousandEyes | $0.3B (flat YoY) | 무형자산(데이터 플랫폼), 네트워크 효과 | Narrow → 통합 후 Wide 전환 기대 |
| Services | 유지보수·교육·컨설팅 | 제품 내 subset (Total Services $3.6B FY25 연환산) | 전환비용(다년 계약) | Wide |

- **해자 강도 종합**: Morningstar 공식 분류 Wide Moat. 본 분석도 Wide 판정(상세 4번) — Networking+Services가 기업 전체 Wide를 지지하고, Security·Collab·Observability는 개별적으로 Narrow
- **구독 매출 비중 51%** ($7.8B/$15.3B in Q2 FY26) — 하드웨어 중심 기업에서 SaaS·구독형으로 구조 전환 지속
- **총 ARR $31B (+3% YoY), 제품 ARR +6%** — 수익 가시성의 구조적 지표. 2025~2026년 중 제품 ARR 성장이 서비스 ARR 감소를 상쇄
- **규모 비교**: ANET $10.65B(FY26E 20%+) / HPE Aruba ~$9B / Juniper $5B / Cisco $61.5B — 글로벌 엔터프라이즈 네트워킹 1위이나 데이터센터 스위칭 내에서는 ANET에 점유율 역전 당함

### 2-2. Networking — Silicon One + 엔터프라이즈 lock-in

**사업 구조**: Catalyst/Nexus 스위치(엔터프라이즈·DC), ASR/8000 라우터(서비스 프로바이더), Meraki 클라우드 관리 WiFi/SD-WAN, Silicon One ASIC(수직통합 AI 네트워킹). AI infra는 P200/G200/G300 실리콘 기반 하이퍼스케일러 판매. 기업·정부·서비스프로바이더 세 대형 채널.

**해자 테이블:**

| 해자 유형 | 내용 |
|---------|------|
| 무형자산 (Silicon One IP) | 자체 ASIC 설계 — G200(FY25 $600M+ AI 매출), P200(51.2T 라우팅, Azure·Alibaba 초기 도입), G300(2026 2월 발표). Broadcom Tomahawk 의존도를 낮추면서 하이퍼스케일러에 경쟁사 대비 통합 솔루션 제공 |
| 전환비용 (IOS/NX-OS) | Catalyst·Nexus 운영체제에 의존하는 엔터프라이즈 네트워크 엔지니어 풀(CCIE/CCNA 누적 수백만 명). 경쟁사 전환 시 재훈련·재인증 비용 |
| 효율적 규모 | 전세계 85%+ Fortune 500이 Cisco 장비 운용 (회사 주장, IDC·Gartner Magic Quadrant Leader 지속). 글로벌 유통·파트너 네트워크 복제 불가 |
| 계약 lock-in | 다년 EA(Enterprise Agreement) + 서비스 유지보수 계약. 갱신율 95%+ 추정 |

**AI infra 수주 트렌드:**

| 분기 | AI infra 오더 | 누적 (FY26) | 주요 이벤트 |
|------|-------------|-----------|-----------|
| Q4 FY25 | ~$800M 추정 | — | G200 ramp 시작 |
| Q1 FY26 | $1.3B | $1.3B | AI 수주 가속 시작 |
| Q2 FY26 | $2.1B | $3.4B | Q1 대비 +62%, $5B+ 가이드 |
| FY26 가이드 | >$5B 수주, >$3B 매출 | — | G300·P200 신제품 미포함 (upside) |

### 2-3. Security (Splunk 포함) — 전환비용 진행형

**사업 구조**: Cisco Security(SASE·Secure Firewall·Umbrella·Duo) + Splunk(SIEM·SOAR·observability). Splunk는 $28B에 2024년 3월 인수 완료, 당시 ARR $4B. Splunk의 on-prem → 클라우드 구독 전환이 Q2 FY26 Security -4% YoY의 주요 원인.

**해자 테이블:**

| 해자 유형 | 내용 |
|---------|------|
| 전환비용 (Splunk 데이터) | SIEM/SOAR 구축은 수개월~2년 프로젝트. Splunk SPL(검색 언어)·대시보드·룰셋 lock-in. Palo Alto Cortex XSIAM / CrowdStrike Next-Gen SIEM에 이전하려면 운영 노하우 재구축 필요 |
| 통합 플랫폼 시너지 | Splunk 데이터 + Cisco 네트워킹 텔레메트리 통합 — "networking-to-data" 플랫폼 비전. 경쟁사(PANW Cortex, CRWD, MSFT Sentinel)도 유사 방향이나 Cisco는 네트워크 텔레메트리 자체 소유 |
| 신규 로고 유입 | Splunk H1 FY26에 500개 신규 고객, 연 1,000 목표 — 성장 엔진 작동 |

**Splunk 전환 상세:**

| 지표 | 수치 | 비고 |
|------|------|------|
| Splunk ARR (인수 시) | $4B | 2024년 3월 |
| Splunk ARR/RPO (Q2 FY26) | 두 자릿수 성장 | 회사 공시 ("double-digit"), 구체적 수치 비공개 |
| Security 세그먼트 매출 (Q2 FY26) | $2.0B (-4% YoY) | Splunk 온프레미스 → 클라우드 전환으로 인식 지연 |
| 신규 로고 (H1 FY26) | 500개 | 연간 1,000 목표 |
| 통합 기대 효과 | Non-GAAP EPS FY26 accretive (년차 2) | 인수 당시 가이드 |

### 2-4. Collaboration + Observability + Services

**Collaboration** ($1.1B, +6%): Webex + 콜센터. MSFT Teams·Zoom·Google Meet과 경쟁. 규제 산업·정부·통신사 내 deployment 가 강점. 해자는 Narrow, 성장률은 플러스 복귀.

**Observability** ($0.3B, flat): AppDynamics + ThousandEyes + Splunk Observability. Datadog($60B 시총)·Dynatrace에 TAM 대비 하위. 통합 후 재도약 모멘텀 기대되나 현 시점 해자는 약함.

**Services** (제품 매출 내 내재): 설치·유지보수·Cisco Learning Services. 하드웨어 교체 주기의 부가 수익. 유지보수는 갱신율 90%+ (업계 관행). 해자는 Wide (계약 lock-in) — 다만 독립 세그먼트 매출 공시는 제한적.

### 2-5. 하이퍼스케일러 AI 네트워킹 — 신규 모멘텀 원천

**사업 구조**: Silicon One G200/P200/G300 기반 시스템을 하이퍼스케일러(MSFT, Meta, Alibaba 확인, Google·AWS 가능성)에 공급. Nvidia(InfiniBand)와 Broadcom(Tomahawk)이 지배하던 AI back-end 네트워킹에 이더넷 표준으로 침투.

**해자 테이블:**

| 해자 유형 | 내용 |
|---------|------|
| 수직통합 실리콘 | Silicon One은 single ASIC architecture — 스위치·라우터·AI 모두 동일 칩 기반. R&D 분산 없이 플랫폼 레버리지 |
| UEC (Ultra Ethernet Consortium) 주도 | Cisco가 창립 멤버로 Ethernet 기반 AI 네트워킹 표준 주도. InfiniBand 의존도 낮추려는 하이퍼스케일러들과 이해 일치 |
| 전력 효율 | P200 기반 8223 시스템이 기존 시스템 대비 -65% 전력. AI 데이터센터 병목인 전력 제약 하에 차별화 |

하지만 — ANET은 **High-speed 데이터센터 스위칭 시장점유율을 27.5%(2024, 포트기준 29.2%)로 Cisco 29.9%에 근접 추월 중**. 400G/800G 세그먼트에서 ANET이 40%+. Cisco의 AI 수주 가속은 이 추세 반전의 초기 증거이나 시장 공감대는 아직 ANET 우위.

---

## 해자 팩트체크

### Networking 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| Silicon One AI 매출 기여 | FY25 $600M+ (AI-related sales), Q2 FY26 $2.1B 신규 오더 | ✅ (회사 공시 + 외부 tracker 확인) |
| 하이퍼스케일러 AI 오더 가속 | Q1 $1.3B → Q2 $2.1B (+62% QoQ), FY26 $5B+ 가이드 | ✅ (Q2 FY26 공시) |
| 엔터프라이즈 네트워킹 점유율 | IDC/Gartner 2024~2025 Magic Quadrant Leader 지속. Enterprise 스위칭 Cisco 45~50% 추정 | ✅ (독립 조사) |
| Fortune 500 채택 | 회사 주장 85%+ | ⚠️ (회사 주장, 시장 점유율 기반 방증은 있음) |
| DC 스위칭 점유율 vs ANET | Cisco 29.9% → ANET 27.5% (2024, 역전 임박) | ❌ (Cisco 열위 가속 중) |
| 다년 EA 갱신율 | 업계 추정 95%+ | ⚠️ (공식 공시 없음) |
| 엔터프라이즈 오더 성장 | Q1 +4%, Q2 (수치 공시 제한적) | ⚠️ (AI 쏠림으로 non-AI 엔터프라이즈는 완만) |
| 서비스프로바이더/클라우드 오더 | Q1 +45% | ✅ (Q1 공시) |
| P200 채택 hyperscaler | Microsoft Azure, Alibaba 확인 | ✅ (회사 공식 발표) |

**해자 리스크 (Networking):**
- **ANET의 고속 DC 스위칭 추월** — Cisco의 "엔터프라이즈 전체" 1위는 유지되나, AI 워크로드가 집중되는 400G/800G에서 ANET 40%+. 미래 데이터센터 증설은 AI 중심이므로 장기적으로는 이 세그먼트에서 점유율 이탈 가속 가능 (현실화: 진행 중, 가속화 2026~2028)
- **Broadcom Tomahawk 상용화** — ANET·Juniper·Dell 모두 Broadcom 칩 채택으로 자체 실리콘 R&D 부담 없이 상용화 속도 ANET이 Cisco 대비 빠를 수 있음 (현실화: 진행 중)
- **하이퍼스케일러 고객 집중** — $2.1B Q2 오더 중 MSFT·Meta·Alibaba 비중 공개 안 됨. 상위 3~4개 고객 의존도가 높으면 capex 사이클 반전 시 급감 리스크 (현실화: 2027~2028)
- **엔터프라이즈 IT 사이클** — 2025~2026 refresh 사이클 peak 가능성. Non-AI 엔터프라이즈 수요 둔화 시 Networking 성장률 둔화 (현실화: FY27~FY28)

### Security (Splunk) 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| Splunk ARR 두 자릿수 성장 | 회사 공시 Q2 FY26 — 구체 수치 비공개 | ⚠️ (세부 수치 미공개) |
| Splunk 신규 로고 | H1 FY26 500개, 연 1,000 목표 | ✅ (분기 업데이트 제공) |
| Cisco Security 세그먼트 | -4% YoY (Q2 FY26) — 클라우드 전환 드래그 | ❌ (매출 기준 역성장) |
| SIEM 시장 점유율 | Splunk 1위 (Gartner MQ Leader, 20~25% 추정) | ✅ (독립 조사) |
| 경쟁사 신규 진입 | MSFT Sentinel, PANW XSIAM, CRWD Next-Gen SIEM 모두 SIEM 진출 | ⚠️ (Splunk 점유율 잠식 진행) |
| 통합 시너지 구체 사례 | 네트워킹+Splunk 연동 공식 제품 일부 출시 (XDR) | ⚠️ (증명 초기 단계) |

**해자 리스크 (Security):**
- **Splunk 클라우드 전환 드래그 지속** — FY26 H2에도 지속 예상(회사 가이드). FY27에도 온프레미스 연장 계약 만료분 일괄 전환되면 추가 드래그 (현실화: FY26~FY27)
- **SIEM 경쟁 격화** — Microsoft Sentinel은 E5 라이선스 번들로 가격 우위, Palo Alto Cortex XSIAM은 XDR 통합형으로 TAM 확장 (현실화: 진행 중)
- **통합 시너지 미증명** — 인수 22개월 후 Splunk + Cisco 교차 판매의 정량 근거 제한적. CEO 주장 대비 실제 유효성 증명 필요 (현실화: FY27 중 검증)

### Collaboration + Observability 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| Webex 고객 베이스 | 포춘 500 다수, 통신사·정부 주요 사용자 | ⚠️ (구체 수치 부재) |
| Teams 대비 성장률 | Teams ~300M MAU vs Webex 정확 공시 없음 | ❌ (Teams 지배적) |
| Datadog·Dynatrace 대비 Observability | Datadog FY26E $3.5B 매출 vs Cisco Observability $1.2B 연환산 | ⚠️ (시장 열위) |
| ThousandEyes 차별화 | 네트워크 인텔리전스 전문, 독립 platform 유지 | ✅ (단독 강점) |

**해자 리스크 (Collaboration/Observability):**
- **Teams·Zoom·Datadog·Dynatrace 대비 열위** — 세 영역 모두 Narrow 유지 어려움. Observability는 통합 후 반등 가능성 있으나 투자 thesis에 결정적 기여 제한적
- **이 세그먼트는 전사 해자 판정의 주변부**. 핵심 해자는 Networking+Services에 의존

### 해자 리스크 종합

| 세그먼트 | 핵심 모트 리스크 | 현실화 시점 |
|---------|--------------|-----------|
| Networking | ANET의 고속 DC 스위칭 추월 (400G/800G) | 진행 중, 가속 2026~2028 |
| Networking | Broadcom Tomahawk 상용화로 경쟁사 속도 | 진행 중 |
| Networking | 하이퍼스케일러 AI capex 사이클 반전 | 2027~2028 |
| Networking | 엔터프라이즈 IT refresh 사이클 peak | FY27~FY28 |
| Security | Splunk 클라우드 전환 드래그 | FY26~FY27 |
| Security | SIEM 경쟁 (MSFT Sentinel, PANW XSIAM) | 진행 중 |
| Collab/Obs | Teams·Datadog·Dynatrace 지배력 | 지속 |

---

## 해자 강도 평가 — "이 정도 리스크면 충분히 높은 해자인가?"

### 평가 기준
Morningstar Wide Moat 기준: "향후 20년 이상 초과이익을 유지할 수 있는 구조적 우위"
→ 투자 기간 3~5년 내 결정적 훼손 리스크 없음 + 복수 독립 해자 → Wide 판정

### 식별된 해자 리스크 vs 현실화 시점

| 리스크 | 내용 | 현실화 시점 | 해자 훼손 정도 |
|--------|------|-----------|--------------|
| ANET 고속 DC 스위칭 추월 | 400G/800G 세그먼트 | 진행 중, 가속 2026~2028 | 중간 (AI segment만 훼손) |
| 하이퍼스케일러 capex 반전 | AI 투자 사이클 하락 | 2027~2028 | 중간 (성장동력 손상) |
| 엔터프라이즈 refresh peak | 본업 사이클 | FY27~FY28 | 중간 |
| Splunk 클라우드 드래그 | Security 매출 역성장 | FY26~FY27 | 낮음 (일시적) |
| Broadcom 경쟁 가속 | 경쟁사 속도 | 진행 중 | 낮음 (Cisco Silicon One 대응) |
| SIEM 경쟁 | Splunk 점유율 | 진행 중 | 낮음 (규모상 제한적) |

### 판정
**CSCO = Wide Moat ✅ (단, AI 데이터센터 스위칭 세그먼트만 따로 떼면 Narrow)**

핵심 근거 3가지:
① **엔터프라이즈 네트워킹의 구조적 lock-in은 30년 누적 해자** — IOS/NX-OS 운영체제, CCIE/CCNA 엔지니어 풀, EA 계약·서비스 유지보수 네트워크가 경쟁사 진입을 3~5년 이상 지연시킨다. ANET이 DC 스위칭에서 이긴 건 "greenfield 하이퍼스케일러"이지 "기존 Fortune 500 레거시 네트워크"가 아니다. 엔터프라이즈 refresh 사이클은 Cisco 중심으로 계속 회전
② **Silicon One의 수직통합 실리콘이 AI 네트워킹에서 해자를 재구축하는 중** — $600M FY25 → $5B+ FY26 AI 오더 가이드는 구조적 반등의 초기 증거. P200/G300으로 Nvidia InfiniBand·Broadcom Tomahawk 의존을 낮추려는 하이퍼스케일러와 이해 일치. Microsoft·Alibaba 채택이 공식화됨
③ **$7.8B 구독 매출 + $31B ARR + 유지보수 갱신율 95%+가 현금흐름 방어선** — 성장 둔화 시나리오에서도 FCF $13.6B 수준 유지 가능. 50%+ 자본 환원 정책이 주주 수익률 하단을 지지

**단, 주의 구간:**
- ANET의 엔터프라이즈 campus/branch 시장 진입 가속 — 현재 ANET은 campus 진출 초기 단계. 2026~2028에 campus 점유율 2자릿수 진입하면 Cisco 본진 위협 (선행 지표: ANET 분기 Campus revenue, 엔터프라이즈 수주에서 ANET 언급 빈도)
- Splunk 통합 시너지 정량 증명 (FY27 중) — Non-GAAP EPS accretive 약속 이행 여부 및 cross-sell 데이터 공시 개시 여부

---

## 경쟁 구도 및 경쟁 우위

### 5-1. 경쟁사 식별 및 포지셔닝

| 경쟁사 | 시가총액 | 핵심 사업 영역 | 시장점유율 (DC 스위칭) | 포지셔닝 |
|--------|---------|-------------|----------|---------|
| **CSCO** | $341B | Enterprise 네트워킹 + Security + Splunk | 29.9% (전체), ~25% (고속) | 엔터프라이즈 지배자 + AI 진입 |
| ANET | $160B | 고속 DC 스위칭 + EOS 소프트웨어 | 27.5% (전체), 40%+ (400G/800G 클라우드) | AI 네트워킹 선도 |
| AVGO (Broadcom) | $1.3T | 머천트 실리콘(Tomahawk, Jericho) + VMware | 스위칭 ASIC ~70%+ | ASIC 공급자, Cisco·ANET 모두 경쟁/파트너 |
| HPE (Aruba+Juniper) | $29B | 엔터프라이즈 네트워킹 + AI 인프라 | ~10% | Cisco의 엔터프라이즈 정면 경쟁자 (Juniper 인수 후) |
| JNPR (Juniper, HPE 편입) | — | 서비스 프로바이더 라우팅 + AI-Native | ~5% | HPE 합병으로 스케일 확대 |
| PANW (Palo Alto) | $140B | Cortex XSIAM, SASE, Firewall | Security 전용 | Splunk의 SIEM 직접 경쟁 |
| FTNT (Fortinet) | $70B | Firewall + SASE + SOC | Security 전용 | 하드웨어 네트워크 보안 |
| CRWD (CrowdStrike) | $110B | EDR + Next-Gen SIEM | Security 전용 | SIEM 진입 중 |
| DDOG (Datadog) | $45B | APM + Infra Monitoring | Observability | Observability 지배자 |
| MSFT (Azure + Teams + Sentinel) | $3.3T | 통합 클라우드 + 협업 + SIEM | 협업·SIEM 지배 | 복수 세그먼트에서 교차 경쟁 |

### 5-2. 핵심 성장동력 경쟁 비교

| 성장동력 | CSCO | ANET | AVGO | HPE (Aruba+JNPR) | 판정 |
|---------|------|------|------|------------------|------|
| FY26E 매출 | $61.5B | ~$10.65B | ~$62B (VMware 포함) | ~$43B | 🥇 규모 (Cisco) |
| 매출 성장률 (YoY, 최신 Q) | +10% | +29% | +22% | +15% | 🥉 (Cisco 가장 느림) |
| AI infra 매출 (FY26E) | $3B+ | $2.75B | ~$20B+ (AI 실리콘) | ~$1B | 🥈 (명목 2위) |
| AI infra 성장률 | 3~4배 YoY (낮은 기저) | +60%+ | +60%+ | — | 🥇 (성장 모멘텀) |
| DC 스위칭 점유율 | 29.9% (전체), 20% 하락 | 27.5% (상승) | 머천트 칩 70%+ | 낮음 | 🥈 (ANET 추격 중) |
| 고속 400G/800G 점유율 (클라우드) | 낮음 | 40%+ | — | 낮음 | 🥉 (ANET 지배) |
| Gross Margin (non-GAAP) | ~66% | ~65% | ~77% (실리콘·SW) | ~34% | 🥇🥈 (Cisco/ANET) |
| FCF (FY26E) | $13.6B | ~$4.5B | ~$20B+ | ~$1B | 🥇 절대 규모 |
| Forward PE | ~20.8x | ~45x | ~34x | ~10x | 🥉 저렴 — Cisco |
| 구독 매출 비중 | 51% | 낮음 (하드웨어 중심) | VMware로 상승 | 낮음 | 🥇 |

**판정 해석:**
- **Cisco는 절대 규모 1위이나 성장률은 주요 경쟁사 대비 가장 느림** — 성숙 사이클 반영
- **AI 성장률은 ANET과 비슷한 배수(저기저)**이나 시장 공감대는 ANET에 우위
- **DC 고속 스위칭에서 ANET에 구조적 열위** — 2026~2028 반전 가능성이 투자 thesis의 핵심 변수
- **FCF 규모·구독 비중·FwdPE 할인은 Cisco 유리** — 매수 관점에서는 밸류에이션 마진 존재
- **추월 가능성**: Cisco가 전체 네트워킹 1위 유지는 5~10년+ 가능(엔터프라이즈 lock-in). AI DC 스위칭에서 ANET 역전은 매우 어려움 (2~3년 내 불가능)

### 5-3. 경쟁 우위 원천 분석

**1. 엔터프라이즈 네트워킹 설치 기반(Installed Base) + 엔지니어 풀**
- 우위 내용: Fortune 500의 85%+가 Cisco 운용 (회사 주장). CCIE/CCNA 자격 보유 엔지니어 수백만 명 — 교체 시 재훈련·인증 비용
- 정량 근거: Enterprise 스위칭 점유율 45~50% (IDC/Gartner), 서비스프로바이더 라우팅 60%+ 점유, 글로벌 유통 파트너 70,000개사+
- 경쟁사 격차: ANET은 하이퍼스케일러 중심이므로 엔터프라이즈 campus는 5% 미만. HPE+Aruba+Juniper 합산 ~10%. Cisco 4~5배
- 복제 난이도: **매우 높음** — 30년 누적 관계, 인증 엔지니어 풀, 글로벌 지원 네트워크. 10년 단위 복제 불가
- 격차 지속 기간: 7~10년+

**2. Silicon One 수직통합 실리콘**
- 우위 내용: 단일 ASIC 아키텍처로 스위치·라우터·AI back-end 모두 커버. 외부 머천트 칩 의존도 감소
- 정량 근거: FY25 AI-related $600M+, FY26E $3B+ AI infra 매출. P200이 Microsoft Azure·Alibaba 공급, G300 2026 2월 발표
- 경쟁사 격차: ANET은 Broadcom Tomahawk 100% 의존 — R&D 부담 없으나 차별화 제한. AVGO는 실리콘 공급자 역할, 최종 시스템 시장 미진출
- 복제 난이도: **높음** — ASIC 설계는 10억$+ R&D, 5년 사이클
- 격차 지속 기간: 5~7년

**3. Splunk 데이터 플랫폼**
- 우위 내용: SIEM 시장 1위 $4B ARR 기반 인수. 네트워크 텔레메트리 + 보안 로그 통합 데이터 백본 구축 시 경쟁 불가
- 정량 근거: Splunk ARR 두 자릿수 성장 유지, H1 FY26 500개 신규 로고
- 경쟁사 격차: MSFT Sentinel(E5 번들 가격), PANW Cortex XSIAM(XDR 통합)이 진출 중이나 Splunk의 데이터·커뮤니티·앱생태계는 독보적
- 복제 난이도: **중간~높음** — MSFT는 가격, PANW는 번들로 공격 중. 기존 Splunk 설치 기반은 해자이나 신규 고객 경쟁은 치열
- 격차 지속 기간: 3~5년 (통합 성공 시 연장)

**4. FCF 창출력 + 자본 환원 규율**
- 우위 내용: FY26 FCF $13.6B, 50%+ 자본환원 commitment, 14년 연속 배당 인상 기록
- 정량 근거: FY26 예상 자사주 매입 $5~7B + 배당 $6.6B = 총 $12~14B 환원
- 경쟁사 격차: ANET은 재투자 중심(배당 없음), HPE는 FCF 제한적. CSCO의 환원 규모는 compound 효과로 EPS 성장 기여 +2~3%p/년
- 복제 난이도: **중간** — 규율은 모방 가능하나 규모는 FCF 기반
- 격차 지속 기간: 구조적으로 유지 (성장 둔화 시에도)

### 5-4. "왜 이 기업인가" — 투자 차별화 근거

1. **Wide Moat 엔터프라이즈 1위 + AI 재참여의 이중 레버리지**: ANET(AI only, FY26E $10.65B)와 HPE(엔터프라이즈만, $43B 포트폴리오)의 장점을 Cisco는 통합 보유. 성숙 기업 밸류에이션(FwdPE ~21x)에서 AI 재도전이 성공하면 멀티플 리레이팅 여지
2. **FCF $13.6B + 자본환원 50%+가 하방 방어**: 성장 둔화 시에도 배당+buyback으로 EPS +6~8% 확보. 경쟁사 ANET(성장 의존)·HPE(레버리지) 대비 수익률 변동성 낮음
3. **Silicon One이 Tomahawk-ANET 구도에 대안 제공**: 하이퍼스케일러들이 ANET 독점을 꺼리는 구조 — 복수 공급자 유지 필요. Cisco가 의미 있는 2nd source로 자리잡으면 AI infra에서 구조적 점유율 확보

**밸류에이션 비교:**

| 지표 | CSCO | 네트워킹 peer 평균 (ANET/AVGO/HPE) | 프리미엄/디스카운트 | 정당성 |
|------|------|-----------|------------------|--------|
| Forward PE (FY26E $4.15 EPS) | ~20.8x | ANET 45x, AVGO 34x, HPE 10x (평균 ~30x) | -31% 디스카운트 | 성장률 열위 반영, 합리적 |
| EV/Revenue (FY26E) | ~5.8x | ANET ~15x, AVGO ~20x, HPE ~0.7x | 혼재 | 성숙 기업 할인 |
| EV/EBITDA (FY26E) | ~14x | ANET ~35x, AVGO ~24x, HPE ~6x | 디스카운트 | 타당 |
| FCF Yield (FY26E) | ~4.0% | ANET ~2.8%, AVGO ~2.8%, HPE ~10% | 중간 | 성숙 기업 포지션 |
| Dividend Yield | ~1.95% | ANET 0%, AVGO ~1.2%, HPE ~1.9% | 프리미엄 | 자본 환원 규율 |
| PEG | ~2.5x | ANET ~1.8x, AVGO ~1.5x | 프리미엄 (성장 대비 비쌈) | AI 모멘텀 기대 선반영 |

**결론**: Forward PE 20.8x는 CSCO 5년 평균(~19.9x) 대비 소폭 프리미엄이나 트레일링 PE 피크 26x 대비 여유. PEG 2.5x는 성장률 대비 비싸 보이나, 자본환원을 감안한 TSR(Total Shareholder Return) 기준에서는 합리적. 하이퍼스케일러 AI 성장이 FY27~FY28 지속되면 5년 평균 forward PE 복귀 + EPS 가속으로 $100 이상 가능. ANET 대비 50% 할인은 성장률 격차 정당화되나, 격차 축소 시 재평가 여지.

---

## 리스크 요인

### 1. Arista Networks(ANET)의 AI 데이터센터 스위칭 점유율 가속 ⚠️ (최대 구조 리스크)

**리스크 설명**: ANET이 고속(400G/800G) 데이터센터 스위칭에서 40%+ 점유율로 Cisco를 앞서 있으며, 전체 DC 스위칭에서도 27.5%로 Cisco 29.9%에 1~2년 내 역전 가능. AI 워크로드는 DC 내 고속 스위칭에 집중되므로 Cisco의 AI infra 오더 가속에도 불구하고 중장기 점유율 이탈 리스크.

**규모/비중 정량화**:
- DC 스위칭 시장 규모: $30B+ (2026E)
- Cisco DC 스위칭 매출 추정: $5~7B (Networking $8.3B 분기의 절반 수준)
- ANET 추월 시 Cisco 매출 2~4% 영향 (1~1.5 percentage points of total)

**세부 데이터**:

| 연도 | Cisco DC 스위칭 점유율 | ANET DC 스위칭 점유율 |
|-----|------------------|------------------|
| 2012 | 78.1% | 3.5% |
| 2020 | ~50% | ~15% |
| 2024 | 29.9% | 27.5% |
| 2026E | ~25% (추정) | 30%+ (추정) |

**시나리오별 영향**: Bear/Extreme Bear에서 현실화 — AI infra 오더가 Q2 FY26 $2.1B peak 이후 감속하면 Cisco "AI 재참여" 내러티브 약화. Base에서는 Cisco가 2nd source로 의미 있는 점유율 유지(10~15%).

**완화 요인**:
- Silicon One P200/G300 채택(MSFT·Alibaba 확인) — 의미 있는 초기 반전
- 하이퍼스케일러는 복수 공급자 유지 전략 — 100% ANET은 어렵다
- Broadcom Tomahawk 의존 ANET 대비 Cisco 수직통합은 차별화 가능

**팩트체크**: ✓ (Crehan Research·650 Group 등 독립 조사에서 ANET 추월 trend 확인)

### 2. Splunk 클라우드 전환 드래그 ⚠️

**리스크 설명**: Splunk 고객이 온프레미스 → 클라우드 구독으로 이관되면서 일시 매출 인식 감소. Q2 FY26 Security -4% YoY는 이 영향이 주요 원인. 회사는 H2 FY26까지 지속 예상이라고 가이드.

**규모/비중 정량화**:
- Security 세그먼트 매출 $2.0B × 4 = ~$8B 연환산
- Splunk 매출 비중 추정: Security의 50~60% (~$4~5B)
- 클라우드 전환 드래그: 4~6% 매출 영향 (Q2 FY26 Security -4%)

**시나리오별 영향**: Base에서는 FY27 1H까지 드래그 지속 후 반등. Bear에서는 FY27 전체 드래그. Bull에서는 신규 로고 1,000개 달성 + 클라우드 전환 조기 종료로 FY26 H2부터 반등.

**완화 요인**:
- Splunk ARR·product RPO 두 자릿수 성장 유지 (구조적 수요 훼손 아님)
- 신규 로고 500(H1)→1,000(연)로 growth 엔진 가동
- 클라우드 전환 완료 후 매출 인식 일괄 가속 가능

**팩트체크**: ✓ (회사 공시)

### 3. 하이퍼스케일러 capex 사이클 반전 리스크 ⚠️

**리스크 설명**: MSFT·Meta·Alibaba·Google 등 AI capex가 FY27~FY28에 peak 후 감속할 경우, Cisco AI infra 오더(FY26 $5B+)가 급감. Cisco의 Networking 성장률이 +15~21%에서 한 자리 수로 복귀.

**규모/비중 정량화**:
- FY26E AI 오더 $5B+, AI 매출 $3B+ (Networking $33B 연환산의 ~9%)
- FY27~FY28 AI 오더 peak 가정 $8~10B, 이후 -50% 시 $4~5B 감소
- Networking 성장률 FY27E +12%(AI 감속 전) → FY28E +4%(감속 시)

**시나리오별 영향**: Bear/Extreme Bear에서 현실화. Base에서는 하이퍼스케일러 capex peak 2027 → 점진적 조정 가정. Bull에서는 sovereign AI / 엔터프라이즈 AI로 수요 확산.

**완화 요인**:
- Non-AI 엔터프라이즈 refresh 사이클이 2026~2027 continuation
- Sovereign AI / tier-2 cloud / enterprise AI 로 TAM 확장
- 하이퍼스케일러 오더는 다년 backlog이므로 즉각 붕괴 아님

**팩트체크**: ✓ (역사적 capex 사이클 실측)

### 4. 관세·지정학 리스크 ⚠️

**리스크 설명**: FY26 가이드가 "current trade policy 관세 영향 반영". 하드웨어 제조 지리적 분산(멕시코·말레이시아·베트남 등)이 Cisco의 노출. 미중 관계 악화 시 중국 원재료·조립 의존도 영향.

**규모/비중 정량화**:
- Cisco 매출 중 hardware ~49% (product $8.3B of $15.3B ~= 54% 중 networking 하드웨어)
- 관세 영향이 gross margin 50~100bp 압박 가능
- 중국 향 매출 5~8% 추정

**시나리오별 영향**: Bear에서 gross margin 훼손으로 EPS 1~3% 영향. Extreme Bear에서는 공급망 붕괴 가정 시 5%+.

**완화 요인**:
- Non-GAAP 가이드에 이미 관세 반영됨 (투명성)
- 가격 인상으로 일부 전가 가능
- Silicon One 설계는 자체, TSMC 제조 — 중국 의존도 낮음

**팩트체크**: ✓ (회사 가이드 공시)

### 5. SIEM·Security 경쟁 격화 ⚠️

**리스크 설명**: Microsoft Sentinel은 E5 번들 가격 우위, Palo Alto Cortex XSIAM은 XDR 통합으로 Splunk 점유율 잠식. CrowdStrike Next-Gen SIEM도 진출. Cisco Security 매출 $8B 연환산 중 Splunk 비중의 성장 둔화 리스크.

**규모/비중 정량화**:
- Security 매출 $8B (총 매출의 13%)
- Splunk ARR $4B+ → 성장률 10%대 가정 시 FY28E $6~7B
- 경쟁사 잠식 시 Splunk 성장률 5% 이하 감속 가능

**시나리오별 영향**: Bear에서 Security 성장 +3~5% 수준, Base에서는 +8~12% 복귀.

**완화 요인**:
- Cisco 네트워킹 + Splunk 통합 XDR — 자체 텔레메트리 우위
- Splunk의 앱 생태계·커뮤니티는 대체 어려움
- 신규 로고 꾸준한 유입

**팩트체크**: ⚠️ (경쟁 격화는 분명하나 Splunk 구체 재무는 미공개)

### 6. 엔터프라이즈 IT refresh 사이클 peak 리스크

**리스크 설명**: COVID 이후 엔터프라이즈 WiFi 6E/7·10/40GbE·zero-trust 도입으로 refresh 사이클이 2024~2026에 집중. FY27~FY28에 사이클 peak 이후 감속 가능.

**규모/비중 정량화**:
- Networking 엔터프라이즈 부문 추정 $4~5B/분기 (Networking $8.3B의 절반)
- 사이클 peak 이후 -10~15% 가정 시 Networking 성장률 -5%p 영향

**시나리오별 영향**: Bear에서 Networking 성장률 FY27 +5%, FY28 +2~3% 수준.

**완화 요인**:
- AI 인프라로 일부 상쇄
- 구독 매출 비중 상승이 사이클 완충
- Security·Observability가 성장 버퍼

**팩트체크**: ✓ (역사적 refresh 사이클 실측)

### 7. 밸류에이션 멀티플 압축 리스크

**리스크 설명**: CSCO 현재 Forward PE ~20.8x가 5년 평균(~19.9x) 상회. AI 내러티브가 실망하면 15~17x(2023~2024 평균)로 복귀 가능. EPS 불변 시 -15~25% 주가 조정.

**규모/비중 정량화**:
- 현재 주가 $86.25 ÷ Forward PE 20.8x = EPS $4.15 반영
- 15x 복귀 시 $62, 17x 복귀 시 $71

**시나리오별 영향**: Extreme Bear에서 현실화. Bear에서는 부분 압축(18x → $75).

**완화 요인**:
- 배당·buyback이 가격 하방 지지
- FCF $13.6B는 하방 시 리스크 풀 흡수
- 역사적 저점 PE는 14~15x로 구조적 floor

**팩트체크**: ✓ (5년 PE 레인지 15.5~26.3)

### 리스크 독립성 확인

- **리스크 1(ANET)·3(Capex 사이클)**: 강하게 상관 — 하이퍼스케일러 AI 슬로우다운 시 동시 발생
- **리스크 2(Splunk)·5(SIEM 경쟁)**: 상관 — Splunk 제품력과 직결
- **리스크 4(관세)·7(멀티플 압축)**: 독립 — 관세는 fundamental 충격, 멀티플은 sentiment
- **리스크 6(Refresh peak)**: 독립 — 엔터프라이즈 사이클은 하이퍼스케일러와 별도 동학

→ **독립 작동 사업**: **Services + 구독 매출 $7.8B (51%)**는 경기·AI 사이클과 독립. 유지보수 갱신은 90%+ — 이 부분이 $30B+ 기반 현금흐름으로 리스크 완충. 시장은 Cisco를 AI 스토리로 보면서 이 구독 기반을 underweight — 매수 기회 요소

### 리스크 수치 팩트체크 종합

| # | 항목 | 판정 | 비고 |
|---|------|------|------|
| 1 | ANET DC 스위칭 27.5% vs CSCO 29.9% (2024) | ✓ | Crehan Research, 650 Group |
| 2 | Splunk 클라우드 드래그 Q2 -4% | ✓ | 회사 공시 |
| 3 | AI 오더 $2.1B Q2, FY26 $5B+ | ✓ | 회사 공시 |
| 4 | FY26 가이드 관세 포함 | ✓ | 회사 공시 |
| 5 | SIEM 경쟁사 진입 | ✓ | 업계 뉴스 |
| 6 | Refresh 사이클 peak 시점 | ⚠️ | 예측 — 실측 지표 필요 |
| 7 | 5년 PE 레인지 15.5~26.3 | ✓ | Macrotrends |

---

## 모니터링 지표

### 해자 건전성 모니터링

| 출처 | 모니터링 항목 | 기준값 | 현재 상태 |
|------|------------|-------|----------|
| Networking 해자 | AI infra 분기 오더 ($B) | $2B+ 유지 (Q2 FY26 기준) | ✓ $2.1B (Q2 FY26) |
| Networking 해자 | Silicon One 채택 hyperscaler 수 | 3개+ 유지 | ✓ MSFT·Alibaba·(Meta 추정) |
| Networking 해자 | 서비스 프로바이더/클라우드 오더 성장률 | +20% 유지 | ✓ +45% (Q1 FY26) |
| Networking 해자 | 총 ARR 성장률 | +3% 이상 | ✓ +3% (Q2 FY26) |
| Networking 해자 | 제품 ARR 성장률 | +5% 이상 | ✓ +6% (Q2 FY26) |
| Security 해자 | Splunk 신규 로고 (연간) | 1,000+ | ✓ 500 (H1 진행) |
| Security 해자 | Splunk ARR 성장률 | 10%+ | ✓ 두 자릿수 (회사 공시) |
| 구독 전환 | 구독 매출 비중 | 50%+ 유지 | ✓ 51% (Q2 FY26) |

### 리스크 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| 리스크 1 | ANET 분기 매출 성장률 | +30% 이상 지속 시 DC 점유율 가속 이탈 | ⚠️ +28.9% (Q4 2025) |
| 리스크 1 | Cisco DC 스위칭 점유율 (독립 조사) | 25% 미만 하락 시 경고 | ⚠️ 29.9% (2024, 하락 중) |
| 리스크 2 | Security 세그먼트 매출 YoY | +5% 이상 복귀 필요 | ❌ -4% (Q2 FY26) |
| 리스크 3 | 하이퍼스케일러 capex 가이드 (MSFT·Meta·GOOGL) | 합산 YoY -10% 시 경고 | ✓ +25%+ (2026 가이드 기준) |
| 리스크 4 | Gross Margin (non-GAAP) | 64% 미만 하락 시 관세 압박 | ✓ ~66% (Q2 FY26) |
| 리스크 5 | Splunk ARR 성장률 | 10% 미만 시 SIEM 잠식 경고 | ✓ 두 자릿수 |
| 리스크 6 | Networking 세그먼트 성장률 | +5% 미만 시 refresh peak 경고 | ✓ +21% (Q2 FY26) |
| 리스크 7 | Forward PE | 17x 미만 하락 시 리레이팅 진행 | ✓ 20.8x |
| 매크로 | 10Y Treasury | 5%+ 돌파 시 멀티플 압박 | ✓ 4.26~4.31% |
| 매크로 | 엔터프라이즈 IT 지출 서베이 (Gartner) | YoY -2% 이하 시 경고 | ✓ +4% 추정 2026 |

### 경쟁 우위 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| Silicon One | G300 상용 채택 사례 공개 (FY27) | 상용 hyperscaler 2개 미만 시 경고 | ⏳ FY27 중 확인 |
| AI infra 오더 | FY26 $5B 가이드 달성 여부 | FY26 하반기 오더 $1.5B 미만 시 경고 | ⏳ Q3 FY26 실적 (2026 5월) |
| Splunk 통합 | Cisco+Splunk cross-sell 공시 | FY27 전까지 구체 사례 공개 없으면 경고 | ⏳ FY27 중 검증 |
| DC 스위칭 점유율 | Crehan/650 Group 분기 조사 | Cisco 점유율 25% 미만 시 경고 | ⏳ 분기 모니터 |
| ANET campus 진입 | ANET campus revenue 공시 | $500M/분기 이상 시 엔터프라이즈 본진 경고 | ⏳ 분기 모니터 |

### 즉시 재검토 트리거

- AI infra 분기 오더가 연속 2분기 $1B 미만으로 감소
- Cisco DC 스위칭 점유율(독립 조사)이 25% 미만으로 하락
- Security 세그먼트 매출이 FY27 H1까지 성장률 +5% 미복귀
- 하이퍼스케일러 capex 가이드 합산이 -10% 이상 하향 조정
- 분기 non-GAAP Gross Margin이 64% 미만으로 하락
- Splunk의 $4B ARR이 FY27 중 역성장 전환

---

## DCF 시나리오 & 가치평가

### 8-0. DCF 방법론 선택

- **적용 방식**: **A. Standard FCF DCF (Exit Multiple 병행)**
- **선택 근거**: Cisco는 FY25 총매출 $57B+, 안정적 FCF $13~14B/년 창출, 단일 IT 인프라 도메인(Networking 중심 + Security/Collab/Observability가 인접 확장) 기반 성숙 기업. 예측 가능한 CapEx 구조(매출 대비 ~2.5%) + 55%+ Non-GAAP operating margin으로 FCF DCF 기본 요건 충족. 투자 thesis 핵심도 "FY29E EPS × 적용 멀티플" 로 표현 가능
- **대안 대비 우위**: SOTP(B)는 세그먼트별 이질성(이익 성격)이 KKR·BX 수준이 아님 — Networking/Security/Collab 모두 엔터프라이즈 IT subscription·product, 멀티플 차이 크지 않음. NAV(D)는 보유 자산 기반 가치 평가 대상 아님. Excess Returns(C)는 자본 규제 없음. Forward Multiple(E) 단독은 안정 FCF 기업에 부적합
- **주요 가정 요약**: WACC 8.5%(10Y Treasury 4.3% + ERP 5% × 베타 0.85 = 8.55%), Terminal g 2.5%, 유효세율 19%, 3년 예측 후 Exit PE 13~22x 범위(역사 5년 15.5~26.3). Non-GAAP EPS 기준으로 Exit Multiple 방식을 주 방법으로 사용하되 FCF Yield로 교차 검증

### 8-1. DCF 구조 설계 원칙

**이익 변수**: Non-GAAP EPS (FCF/주와 ±3% 이내 정합)

**밸류에이션 공식**: `목표가 = FY29E Non-GAAP EPS × 적용 Exit PE`

**기본 가정 테이블:**

| 항목 | 값 | 근거 |
|------|------|------|
| 기준 EPS (FY26E) | $4.15 | 가이드 $4.13~$4.17 중간값 |
| 기준 매출 (FY26E) | $61.5B | 가이드 $61.2~$61.7B 중간값 |
| 희석 주식수 (FY26E) | ~3.95B | Q2 FY26 공시 + 분기 1% 감소 |
| 희석 주식수 (FY29E) | ~3.65B | 연간 2.5% buyback 감소 가정 |
| 투자 기간 | 3년 (FY26 → FY29) | AI infra 사이클 + Splunk 통합 완료 |
| Non-GAAP GM | 66% → 66.5% | 구독 비중 상승, 관세 상쇄 |
| Non-GAAP OM | 34% → 35.5% | 규모 leverage + Splunk 시너지 |

**멀티플 기준 (역사적 실측):**

| 환경 | Forward PE 범위 | 근거 |
|------|-------|------|
| 정상 (Base) | 17~20x | 5년 평균 19.9x, 최근 범위 |
| 낙관 (Bull) | 22~25x | 2025 mid peak 26x 근처 |
| 스트레스 (Bear) | 14~16x | 2022~2023 저점 15.5x |
| 위기 (Extreme Bear) | 12~14x | 2020 pandemic 저점 ~12x |

### 8-2. 시나리오별 DCF 계산

### Extreme Bear — 확률 12%

**전제 조건:**
- AI 버블 디플레이션(MSFT/Meta/Alibaba capex -30%) + ANET DC 스위칭 40%+ 점유
- 엔터프라이즈 refresh 사이클 peak 지나감(FY27 -5%)
- Splunk 클라우드 전환 FY28까지 드래그 지속
- 관세 확대로 gross margin 2%p 압박

**시나리오 진입 신호:**
- AI infra 오더 2분기 연속 $1B 미만
- Forward PE 14x 아래 하락
- 10Y Treasury 5% 돌파 + WACC 상승

**DCF 계산:**
```
매출 CAGR (FY26→FY29): -1% (FY26 $61.5B → FY29 $59.7B)
Non-GAAP OM: 34% → 31% (관세·마진 압박)
EPS CAGR: -2% (buyback으로 일부 보전)
FY29E EPS: $4.15 × (0.98)^3 = $3.90
적용 Exit PE: 13x
────────────────
목표가: $3.90 × 13 = $51
목표가 범위: $47 ~ $55
현재가 $86.25 대비: -41%
```

### Bear — 확률 23%

**전제 조건:**
- AI 오더 FY27에 peak 후 FY28 -20% 감소 ($5B → $4B → $3B)
- 엔터프라이즈 refresh 완만 (+3~5%)
- Splunk 매출 성장 +5% 수준 (SIEM 경쟁)
- ANET DC 스위칭 추월 가속, Cisco 25% 수준

**시나리오 진입 신호:**
- AI 오더 Q3~Q4 FY26에 $1.5B 미만으로 감속
- Security 세그먼트 -5% 이상 지속
- ANET 분기 성장률 +30% 지속

**DCF 계산:**
```
매출 CAGR: +3% (FY26 $61.5B → FY29 $67.2B)
Non-GAAP OM: 34% → 33%
EPS CAGR: +5% (buyback 레버리지)
FY29E EPS: $4.15 × (1.05)^3 = $4.80
적용 Exit PE: 15x
────────────────
목표가: $4.80 × 15 = $72
목표가 범위: $67 ~ $77
현재가 $86.25 대비: -17%
```

### Base — 확률 40%

**전제 조건:**
- AI 오더 FY26 $5B → FY27 $7B → FY28 $8B → FY29 $8B (완만한 정체)
- AI 매출 FY26 $3B → FY29 $7~8B
- 엔터프라이즈 refresh 사이클 지속 (+5~7%)
- Splunk 클라우드 전환 FY26 H2 완료, FY27 Security +8% 복귀
- 관세 영향은 가이드 내 흡수

**시나리오 진입 신호:**
- AI 오더 FY26 연간 $5B+ 달성 + FY27 Q1 $1.5B+ 유지
- Security FY27 1H 성장률 양전환
- 엔터프라이즈 오더 +5~8% 유지

**DCF 계산:**
```
매출 CAGR: +5.7% (FY26 $61.5B → FY29 $72.7B)
Non-GAAP OM: 34% → 35%
EPS CAGR: +9% (매출+마진+buyback 복합)
FY29E EPS: $4.15 × (1.09)^3 = $5.37
적용 Exit PE: 18.5x (5Y 평균 근처)
────────────────
목표가: $5.37 × 18.5 = $99.3
목표가 범위: $92 ~ $107 (17x~20x PE 범위)
중간값: $100
현재가 $86.25 대비: +16%
```

### Bull — 확률 25%

**전제 조건:**
- Silicon One이 Google Cloud·AWS·Meta 모두 채택 → AI 오더 FY27 $10B → FY28 $14B → FY29 $15B
- Sovereign AI + 엔터프라이즈 AI TAM 확장
- Splunk + Cisco 네트워킹 통합 XDR 플랫폼 리더십 — Palo Alto/MSFT 대비 차별화
- AI 내러티브 멀티플 리레이팅 (FwdPE 22~25x)

**시나리오 진입 신호:**
- AI 오더 $2.5B+ 분기 지속 (2분기 연속)
- Silicon One G300 상용 채택 (hyperscaler 3+)
- Splunk 연 1,000+ 로고 달성 + 통합 cross-sell 정량 공시

**실현 가능성 분석:**

| 전제 조건 | 실현 가능성 | 근거 | 선행 사례 / 반례 |
|---------|-----------|------|----------------|
| AI 오더 FY27 $10B+ | 중간 | Q2 FY26 이미 $2.1B 분기, 연환산 runrate $8B+. $10B는 +25% 성장 필요 | ANET이 2년간 연간 매출 2배 실현 (선행); Cisco 2000년 투자 과잉 후 유실 (반례) |
| Google·AWS 채택 | 중간~낮음 | 현재 MSFT·Alibaba 확인. Google은 자체 ASIC(TPU)에 집중, AWS는 Annapurna 자체 칩 — Cisco 침투 어려움 | Microsoft가 복수 공급자(ANET+Cisco) 채택한 선행 사례 |
| Splunk 통합 플랫폼 리더십 | 중간 | 두 자릿수 ARR 성장, 신규 로고 1,000 목표 진행. 다만 통합 정량 근거는 아직 부재 | MSFT Sentinel + Defender 통합이 3년 만에 SIEM 2위 등극 (반례 — Cisco도 가능하나 시간 필요) |
| FwdPE 22~25x 리레이팅 | 중간 | 2024~2025 peak 26x 경험. AI 내러티브 유지 + EPS 가속 조건 | Microsoft가 AI 내러티브로 FwdPE 24→33x 리레이팅 (선행) |

- **실현 경로 (인과 체인)**: ① FY26 하반기 AI 오더 $2B+ 유지 → ② Silicon One G300 Google Cloud 채택 공식화(FY27 상반기) → ③ AI 매출 $5B → $10B 급등 (FY27~FY28) → ④ Splunk 통합 cross-sell 정량 공시 (FY27 하반기) → ⑤ 시장이 Cisco를 "성숙 → AI 성장" 재카테고리 → ⑥ FwdPE 리레이팅
- **전제 간 독립성**: AI 오더 성장과 Splunk 통합은 독립적 — 하나가 실패해도 나머지로 부분 Bull 실현 가능. 하지만 FwdPE 리레이팅은 양쪽 성공이 전제. 전제 4(리레이팅)는 1·2·3에 종속
- **종합 실현 확률 판단**: 개별 전제 중간(50%)×중간(40%)×중간(50%)×중간(40%) = ~4%. 하지만 "부분 Bull"(일부만 실현) 가능성까지 포함하면 25%는 적정. Bull 전제 모두 달성 확률은 낮지만 Cisco 주가에 부분 bull이 반영되는 구도

**DCF 계산:**
```
매출 CAGR: +10% (FY26 $61.5B → FY29 $81.9B)
Non-GAAP OM: 34% → 36%
EPS CAGR: +15%
FY29E EPS: $4.15 × (1.15)^3 = $6.31
적용 Exit PE: 22x
────────────────
목표가: $6.31 × 22 = $139
목표가 범위: $126 ~ $158 (20~25x PE 범위)
중간값: $140
현재가 $86.25 대비: +62%
```

**붕괴/전환 조건:** AI 오더 FY27 $7B 미달, G300 hyperscaler 채택 2개 미만, 또는 ANET DC 스위칭 점유율 35%+ 돌파 시 Base로 복귀

### 8-3. 가중평균 내재가치

```
시나리오       확률    중간값    기여
──────────────────────────────────
Extreme Bear   12%    $51     $6.12
Bear           23%    $72     $16.56
Base           40%    $100    $40.00
Bull           25%    $140    $35.00
──────────────────────────────────
가중평균 내재가치:              $97.68
가중평균 범위:          $47 ~ $158
현재가 $86.25 대비:      -45% ~ +83%
```

**확률 배분 근거:**
- Extreme Bear 12%: 하이퍼스케일러 capex 역전 + ANET 지배 동시 발생은 복합 조건. Cisco의 $31B ARR·50%+ 자본환원이 극단 시나리오 확률을 낮춤. 10~15% 범위 중간
- Bear 23%: AI 오더 감속·Splunk 드래그 지속·ANET 추월 중 하나라도 상당 부분 실현 가능성. 20~30% 가이드 중간
- Base 40%: 현재 궤도(Q2 FY26 +10% 매출, AI 오더 가속)가 FY27~FY28에 완만히 연장되는 시나리오. 35~45% 중간
- Bull 25%: AI 내러티브 + Silicon One 확산이 동시 작동하는 구도는 중간 확률. 실현 경로가 여러 단계 인과 의존이라 25% 상단

**Bear 이하 합계 = 35% ✓** (가이드 최소)

### 8-4. 실적 데이터 — 현재 어디에 위치하는가

**직전 4분기 실적 (Q2 FY26 기준):**

| 지표 | 수치 | YoY | DCF Case 위치 |
|------|------|-----|-------------|
| 매출 (Q2 FY26) | $15.3B | +10% | Base (+6% 매출 성장 가정 상회) |
| Networking 매출 | $8.3B | +21% | Bull (+15% 가정 상회) |
| Security 매출 | $2.0B | -4% | Bear (+8% 가정 하회) |
| Non-GAAP EPS | $1.04 | +11% | Base (+9% EPS CAGR 달성) |
| AI infra 오더 | $2.1B | — (Q1 $1.3B → Q2 $2.1B) | Base~Bull (FY26 연 $5B+ 궤도) |
| 구독 매출 비중 | 51% | 상승 | Base |
| 총 ARR | $31B | +3% | Base |
| Non-GAAP GM | ~66% | 유지 | Base |

**트렌드 판단:**
```
매출 궤적: FY24 $53.8B → FY25 $56.6B → FY26E $61.5B → FY27E $64B
─────────────────────────────────────────────────────────────────
현재 위치: Base ~ Bull 경계
트렌드 방향: 매출 성장 가속 (AI 오더 QoQ +62%, Networking +21%)
              → Base 가정(+6% CAGR) 상회 가능성 있으나 ANET 경쟁·Splunk 드래그가 Base로 복귀 유도
```

**가이던스 반영 시 방향:**
- FY26 가이드 ($61.5B, EPS $4.15) 달성 시: Base 경계 → AI 오더 FY27 $7B+ 유지되면 Bull 접근
- 가이드 하단($61.2B, $4.13) 미달 시: Bear 경계로 이동 → Security -4% 장기화가 트리거

**핵심 관찰:**
- **가장 중요한 변수**: AI infra 분기 오더 ($2B+ 유지 여부)
- **향후 확인 시점**: Q3 FY26 실적 (2026년 5월) — AI 오더 궤도 확인, Security 성장률 반전 여부, FY26 가이드 재확인

### 8-5. 가치평가 결과

| 지표 | 수치 | 평가 |
|------|------|------|
| 현재 주가 | $86.25 (ATH $86.31 대비 -0.1%, 52주 고점 $88.19 대비 -2.2%) | 52주 고점 근처, 강한 모멘텀 |
| Forward PE (FY26E) | ~20.8x | 5년 평균 19.9x 대비 +4.5% 프리미엄, 합리적 |
| PEG (Base EPS CAGR 9%) | ~2.3x | 성장 대비 비쌈 (PEG <1 기준), 자본환원 감안 시 적정 |
| FCF Yield | ~4.0% | 하이퍼스케일러 평균 3% 대비 프리미엄 |
| 가중평균 내재가치 | $97.68 ($47~$158) | 현재가 대비 +13% 업사이드 |
| 손익비 (Base $100 vs Bear $72) | 업사이드 $14 / 다운사이드 $14 | 1:1 |
| 손익비 (Base $100 vs Extreme Bear $51) | 업사이드 $14 / 다운사이드 $35 | 0.4:1 (비대칭 불리) |
| 애널리스트 평균 목표가 | $89.85 (median $90, 범위 $75~$100) | 본 분석 Base $100과 유사, 12개월 관점 |

**결론**: Base 시나리오 기준 +13% 업사이드. Forward PE 20.8x는 5Y 평균 대비 프리미엄이나 AI 오더 가속 + 구독 전환 감안 시 정당화 가능. 단 — **손익비가 Extreme Bear 대비 0.4:1로 비대칭 불리** — 현재가에서는 Base 달성 확신 없으면 분할 매수 권장. AI 오더 Q3 FY26 $1.5B 미만 감속 시 Bear 진입. ANET DC 스위칭 점유율 35%+ 돌파 시 Extreme Bear 진입. 애널리스트 컨센 $90은 Base 시나리오의 초기 단계 반영 수준이며 Bull 시나리오는 반영 안 됨.

---

## 종합 판정

```
[ CSCO ] 평가 요약
────────────────────────────────
비즈니스 퀄리티  : ✅ Wide Moat (엔터프라이즈 lock-in + Silicon One + Splunk 통합)
시장 환경        : ⚠️ AI capex peak 우려 / ANET 경쟁 가속 / 관세 영향
가치평가         : ⚠️ Forward PE 20.8x, 가중평균 $97.68 vs 현재가 $86.25 (+13% 업사이드)
리스크           : ⚠️ ANET DC 스위칭 추월, Splunk 드래그, 하이퍼스케일러 집중
────────────────────────────────
종합 의견        : 분할 매수
────────────────────────────────
핵심 모니터링:
  1. AI infra 분기 오더 ($2B+ 유지 여부) — Q3 FY26 (2026년 5월) 확인
  2. Cisco DC 스위칭 점유율 vs ANET (Crehan/650 Group 분기 조사)
  3. Security 세그먼트 매출 성장률 반전 (FY27 H1까지 +5% 복귀 여부)
```

**판정 근거:**
- 가중평균 내재가치 $97.68 vs 현재가 $86.25 → **13% 할인** → 매수 기준(20%+ 할인)에 미달, **분할 매수** 범위
- Wide Moat 확정 + Bull 시나리오 25% 잠재력 → 하방 방어력 양호
- 단 Extreme Bear 대비 손익비 0.4:1로 **현재가 $86은 모멘텀 가격**이며, $72~$76(Bear 상단) 근처에서 추가 매수가 손익비 개선
- 애널리스트 평균 목표가 $89.85는 12개월 관점 — 본 분석 3년 Base $100 대비 보수적

---

## 분기별 점검 기록

| 날짜 | 실적 요약 | Case 위치 변화 | 가설 업데이트 |
|------|----------|-------------|-------------|
| 2026-02-11 | Q2 FY26: 매출 $15.3B(+10%), EPS $1.04(+11%), AI 오더 $2.1B, Networking +21%, Security -4% | 초기 등록: Base~Bull 경계 | 본 분석 최초 작성 기준점 |
