# ORCL — Oracle Corporation
> 40년 엔터프라이즈 데이터베이스 지배자 → 하이퍼스케일러 전환 중. Cloud Infrastructure(OCI/AI) + SaaS(Fusion/NetSuite) + Legacy License/Support + Health(Cerner). 시가총액 $503B, EV $540B.

---

## 투자 thesis

- **OCI가 하이퍼스케일러 4社 경쟁 구도에 진입하고 있으며 RPO 급증이 수요 가시성을 증명** → 효율적 규모 + 전환비용. Q3 FY26 RPO $553B (+325% YoY, +$29B QoQ), OCI IaaS $4.9B (+84% USD / +81% CC), AI infrastructure 매출 +243%, multicloud database +531%. 글로벌 IaaS 점유율 ~3% 이나 가장 빠른 성장률
- **Oracle Database의 대체불가성이 멀티클라우드 전략으로 재점화** → 무형자산(기술·데이터) + 전환비용. Fortune 100의 98%가 Oracle DB 사용. AWS/Azure/GCP 3社 모두와 Database@{Cloud} 네이티브 통합 계약 체결 — 경쟁사 클라우드 안에서도 Oracle DB가 기본값. Exadata·Autonomous DB 엔진이 차별화
- **Fusion ERP + NetSuite 이중 SaaS 포트폴리오가 안정적 현금창출 + AI 업셀 기반** → 전환비용 + 무형자산. NetSuite $1.1B/분기 (+14%), Fusion ERP $1.0B/분기 수준. Cloud & software가 총매출의 88% 차지

**매수 근거 작성일**: 2026-04-19
**매수가**: 현재가 $175 기준 (52주 고점 $346 대비 -49%, 저점 $121 대비 +45%)
**목표가**: $215 (Base 3년 후 시나리오 PV, 자세한 내용은 8장)
**투자 기간**: 3~5년 (FY26 → FY29, RPO 변환 사이클 종료 시점)

---

## 사업 구조 및 경제적 해자

### 2-1. 세그먼트 구조 요약

| 세그먼트 | 수익원 | 규모 지표 (Q3 FY26) | 해자 유형 | 해자 강도 |
|---------|------|------------------|---------|---------|
| Cloud Infrastructure (OCI/IaaS + AI) | 시간당 컴퓨트·스토리지·GPU | $4.9B (+84% USD) | 효율적 규모, 전환비용(계약), 네트워크(multicloud) | Narrow → Wide 전환 중 |
| Cloud Applications (Fusion ERP + NetSuite + HCM) | SaaS 구독 | $4.0B (+13%) | 무형자산(브랜드), 전환비용 | Wide |
| License & On-premise Database/Middleware | 신규 license, Java, Middleware | ~$1.0B 수준 | 무형자산(DB 엔진), 전환비용(스키마 lock-in) | Wide |
| Software License Support | 기존 라이선스 유지보수 | ~$5.1B 수준 | 전환비용 (기존 DB·ERP 유지보수) | Wide |
| Hardware + Services | Exadata/ZDLRA, 컨설팅 | 총 ~$2.2B 수준 (감소) | Narrow (Exadata만) | Narrow |
| Oracle Health (구 Cerner) | EHR SaaS + 컨설팅 | ~$1.5B/분기 수준 (회복 중) | 전환비용(EHR 마이그레이션 부담) | Narrow |

- **해자 강도 종합**: Morningstar 공식 분류는 Wide Moat. 본 분석도 Wide 판정(상세는 4번) — 다만 OCI 세그먼트만 단독 평가 시 Narrow. 기업 전체 Wide는 Database 전환비용이 원천
- **Cloud + Software가 총매출의 88%** 차지. Hardware/Services는 legacy로 점차 축소
- **규모 비교**: FY25 총매출 $57.4B. MSFT $282B·GOOGL $350B·AMZN(AWS만) $110B 대비 1/3~1/5 규모이나 성장률은 더 빠름

### 2-2. Cloud Infrastructure (OCI) — 효율적 규모 + 전환비용

**사업 구조**: 퍼블릭 IaaS(컴퓨트, 스토리지, 네트워킹) + AI 인프라(GPU 클러스터) + Database Cloud Service + Cloud@Customer(온프레 배치). 하이퍼스케일러 4社(AWS/Azure/GCP/OCI) 중 4위이나 가장 빠른 성장률.

**해자 테이블:**

| 해자 유형 | 내용 |
|---------|------|
| 효율적 규모 | FY26 CapEx $50B 가이드 (FY25 $21.2B의 2.4배, FY21까지 연평균 $1.7B였음). 글로벌 데이터센터 리전 수 OCI 50+. 하이퍼스케일러 외 진입 불가능한 절대 자본 규모 |
| 전환비용 (계약) | RPO $553B — 분기 매출의 32배, 연환산 매출의 8~9배. OpenAI $300B(5년), xAI·Meta·NVIDIA·AMD 등 다년 계약 다수. 계약 해지 시 prepayment 몰수 조항 |
| 성능·가격 차별화 | RDMA 기반 베어메탈 네트워킹이 GPU 훈련에 유리 (회사 주장). 하이퍼스케일러 중 가장 낮은 데이터 egress 비용 (marketing claim, 검증 필요) |
| 네트워크 효과 (multicloud) | AWS/Azure/GCP 3社 모두와 Database@{Cloud} 네이티브 통합. 고객은 3社 중 어디를 쓰든 Oracle DB 사용 가능 → OCI 없이도 Oracle Database 선택 유지 → DB 해자가 IaaS 해자로 확장 |

**자산·계약 현황:**

| 자산/계약 | 규모 | 비고 |
|---------|------|------|
| FY26 CapEx 가이드 | $50B | Q1 FY26 $35B → Q3 FY26 $50B로 상향. 발표 시 주가 -12% |
| Abilene Stargate Campus | 1.2 GW 가동 중 | OpenAI 전용 |
| Stargate 계획 capacity | ~7 GW, $400B+ 투자 | Michigan·Wisconsin·Wyoming·Pennsylvania·Texas 다수 사이트 |
| OpenAI 계약 | $300B, 2027~ 5년 | 4.5 GW 신규 증설 포함 |
| 기타 주요 AI 고객 | xAI, Meta, NVIDIA, AMD, 700+ AI 고객 | OpenAI 비중 과도하나 구체 공시 부재 |

### 2-3. Cloud Applications (Fusion + NetSuite) — 전환비용 + 브랜드

**사업 구조**: Oracle Fusion ERP/HCM/SCM(대기업용 SaaS) + NetSuite(중소·중견기업용 SaaS) + Cerner/Oracle Health. 각각 ~$4B 연환산 수준으로 독립적 기둥. Workday(HCM)·Salesforce(CRM)·SAP S/4HANA Cloud와 직접 경쟁.

**해자 테이블:**

| 해자 유형 | 내용 |
|---------|------|
| 무형자산 (브랜드) | Oracle ERP — Fortune 500의 상당수가 E-Business Suite/JD Edwards/PeopleSoft 사용 경험. NetSuite는 "ERP for cloud-native SMB" 포지션 |
| 전환비용 (구현비용) | ERP 교체는 3~5년·수십M~수백M$ 프로젝트. 한번 구축 후 10년+ 유지 관행 |
| 가격 결정력 | AI 번들 (Agentic Fusion Apps) 출시로 ARPU 상승 여력. 매년 유지보수 인상 |
| 네트워크 (SaaS 고객베이스) | Fusion ERP + NetSuite 합산 ERP SaaS 매출 ~$2B/분기 — SAP·Workday에 이어 글로벌 Top 3 |

**Cloud Apps 성장 세부:**

| 지표 | 수치 | 출처 |
|------|------|------|
| Cloud Apps 매출 (Q3 FY26) | $4.0B (+13%) | Q3 FY26 공시 |
| NetSuite Cloud ERP | $1.1B (+14% USD, +11% CC) | Q3 FY26 공시 |
| Fusion ERP (추정) | ~$1.0B | 회사 코멘트 기반 |
| Oracle Health (구 Cerner) | ~$1.5B (회복 단계) | FY25 재표명. CEO "FY26에 return to growth" |

### 2-4. License & License Support — 전환비용(스키마 lock-in)의 현금 자산

**사업 구조**: 기존 Oracle Database/Middleware/Java 라이선스의 유지보수 수수료 + 신규 라이선스 판매. 현금흐름은 매우 안정적이나 성장 정체. Q3 FY26 Software revenue $6.1B (+3% USD, -1% CC).

**해자 테이블:**

| 해자 유형 | 내용 |
|---------|------|
| 전환비용 (DB 스키마) | Oracle Database 스키마·PL/SQL·Stored Procedure·트리거에 의존하는 미션크리티컬 시스템이 Fortune 500에 수만 개. Postgres·MySQL로의 마이그레이션은 코드 재작성 수준 |
| 무형자산 (DB 엔진) | Real Application Clusters (RAC), Exadata, Partitioning, Advanced Security 등 독자 기술 40년 축적. 특히 금융·통신·정부 미션크리티컬 워크로드에서 사실상 대체 불가 |
| 가격 결정력 (유지보수) | 매년 3~5% 자동 인상. 미지불 시 패치·보안 업데이트 차단 — 사실상 독점 공급자 |
| 계약 lock-in | ULA (Unlimited License Agreement) 3~5년 계약 연장 시 추가 license 구매 강제 구조 |

**규모 지표:**

| 지표 | 수치 |
|------|------|
| Software License Support 매출 (Q3 FY26 추정) | ~$5.1B (총 Software $6.1B 중 대부분) |
| 신규 License 매출 | ~$1.0B (감소 추세, SaaS·OCI로 대체) |
| 갱신율 (회사 추정) | ~95%+ (업계 최고 수준) |

### 2-5. Hardware + Services — Narrow / 축소 중

**사업 구조**: Exadata 어플라이언스·ZDLRA 백업·ZFS 스토리지 판매 + 구현·컨설팅 서비스. 일부 수직통합 제품은 DB 성능 우위 원천이나 전체 수익 비중은 제한적.

**해자 테이블:**

| 해자 유형 | 내용 |
|---------|------|
| 수직통합 (Exadata) | Oracle DB 전용 어플라이언스 — SAP HANA Cloud Appliance 유사 모델. DB 고객 대상 upsell 채널 |
| Cloud@Customer | OCI를 온프레·sovereign cloud로 배치하는 하이브리드 옵션. 규제 산업(금융·정부·EU 데이터 주권)에서 차별화 |

이 세그먼트는 매출 축소 중이며, Cloud@Customer 채널로 transition. 기업 종합 해자 평가에서 비중 낮음.

---

## 해자 팩트체크

### Cloud Infrastructure (OCI) 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| RPO 잔존 매출 가시성 | $553B Q3 FY26 (+325% YoY). 연매출 $57B 대비 9~10배, 분기 매출 32배 | ✅ (단, OpenAI 의존도가 많은 비중 차지하는 것으로 추정 — Motley Fool/WSJ 등 외부 분석) |
| Q3 FY26 RPO QoQ 증가분 $29B | Q2 $524B → Q3 $553B. Q3 단일 분기 증가 | ✅ (공시) |
| OCI IaaS 매출 +84% YoY | $4.9B (FY26 Q3), vs AWS +24%, Azure +39%, GCP +50% — OCI가 가장 빠름 | ✅ (Synergy Research, Omdia 독립 확인) |
| AI Infrastructure +243% | 회사 공시. 내역 breakdown 제한적 | ⚠️ (회사 발표, 독립 검증 어려움) |
| CapEx 규모 경쟁력 | FY26 $50B, 5년 누적 $200B+ 전망. MSFT/AWS/GOOGL/META 각 $80~140B 대비 절대 규모 2~3배 작으나 집중 투자 | ✅ |
| 글로벌 리전 커버리지 | OCI 50+ 리전 | ⚠️ (회사 수치. 리전당 용량 차 미공개) |
| 멀티클라우드 파트너십 | Oracle Database@AWS, @Azure, @Google 모두 gen-avail. multicloud 매출 +531% YoY | ✅ (AWS/Microsoft/Google 공식 공시) |
| 전력·부지 공급 확보 | Abilene 1.2 GW 가동. 추가 5~6 GW 건설 중. Stargate 전체 ~7 GW 계획 | ✅ (공식 발표) |
| AI 인프라 gross margin | Q3 FY26 AI capacity GM 32% (회사 가이드 30%+ 상회) | ⚠️ (회사 수치. 타 하이퍼스케일러와 직접 비교 공시 없음) |

**해자 리스크 (OCI):**
- **OpenAI 고객 집중도** — $300B 계약이 RPO의 상당 비중 추정. OpenAI 재무 건전성(2028년 예상 적자 $74B, WSJ 보도) → 지불 능력이 해자의 단일 최대 변수 (현실화: 2027~2029 계약 이행 단계)
- **하이퍼스케일러 자본 경쟁** — AWS·Azure·GCP·META가 $80~140B CapEx 지속. Oracle의 3% 점유율은 성장 여력 크지만 가격 전쟁·margin 압박 시 ROIC 훼손 (현실화: 진행 중)
- **전력·인허가 병목** — 2026 2H~2027 Stargate 다수 사이트 동시 건설. 전력·부지 인허가 지연 시 RPO 변환 지연 (현실화: 2026 2H~2027)
- **CapEx ROIC 미회수** — FY25 -$0.39B FCF, 트레일링 FCF -$24.7B. $50B/년 CapEx가 AI 수요 둔화 시 stranded asset (현실화: 2027~2028 시험대)

### Cloud Applications 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| NetSuite 성장 지속성 | Q3 FY26 $1.1B (+14% USD). 5년 연평균 +20% | ✅ |
| Fusion ERP 채택 | Fortune 500의 상당수가 EBS/PeopleSoft/JDE에서 Fusion 마이그레이션 중 | ⚠️ (회사 코멘트 중심) |
| ERP 전환비용 실측 | Gartner·Forrester: ERP 교체 프로젝트 평균 3~5년, $30~300M | ✅ (독립 조사) |
| 경쟁사 대비 성장률 | SAP S/4HANA Cloud 2025년 성장 ~30% (SAP 공시), Workday ERP ~17% — 세그먼트별 비교 | ⚠️ (SAP가 Oracle Fusion+NetSuite ERP 합보다 성장 빠름) |
| AI Agentic Apps 업셀 여력 | Fusion에 AI 기능 적극 내장. ARPU 상승 초기 단계 | ⚠️ (영향 정량화 어려움) |

**해자 리스크 (Cloud Apps):**
- **Oracle Health (Cerner) 지속 부진** — 2022 인수 $28.3B 후 "drag on growth" 지속. Epic이 대형 병원 EHR 시장 지배(~50% 점유율). FY26 return to growth 가이드 이행 여부 (현실화: FY26 잔여 분기)
- **SAP·Workday 경쟁 강화** — SAP S/4HANA가 클라우드 전환 가속. Workday가 Fortune 500 HCM에서 Oracle HCM 지속 흡수. Fusion 성장률이 업계 평균 이하면 해자 약화 (현실화: 지속 중)
- **AI 번들 차별화 실패** — Copilot·Agentforce·Joule 경쟁 속 Oracle AI Agent(Fusion 내 Agentic apps) 차별화 증명 필요 (현실화: FY27~FY28)

### License & Support 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| Oracle DB 시장점유율 | Gartner 2024 OPDBMS Magic Quadrant 기준 독점적 Leader. Enterprise DBMS ~30~40% 추정 | ✅ |
| 갱신율 | 회사 비공개이나 업계 추정 95%+ | ⚠️ (회사 공시 없음) |
| 가격 인상 이력 | 연 3~5% 자동 인상, ULA 갱신 시 추가 | ✅ (고객 사례 공개) |
| 미션크리티컬 대체 가능성 | 금융·통신 코어 시스템은 Postgres·Aurora로 이전 사례 있으나 부분적·리스크 큼 | ⚠️ (AWS/Azure는 이전 가속 시도) |

**해자 리스크 (License):**
- **DB 탈Oracle 가속화** — AWS Aurora, Azure Postgres, Snowflake, Databricks가 미션크리티컬 워크로드 침식. 점진적·장기적이나 구조적 (현실화: 5~10년 지속)
- **Java 라이선스 이슈** — Oracle Java SE 라이선스 변경 (2023 per-employee pricing)으로 고객 반감. OpenJDK·Amazon Corretto 전환 가속 (현실화: 진행 중)

### 해자 리스크 종합

| 세그먼트 | 핵심 모트 리스크 | 현실화 시점 |
|---------|--------------|-----------|
| OCI | OpenAI 고객 집중 / 재무 건전성 | 2027~2029 |
| OCI | 전력·부지 병목 | 2026 2H~2027 |
| OCI | CapEx ROIC 미회수 (stranded AI) | 2027~2028 |
| OCI | 하이퍼스케일러 가격 경쟁 | 진행 중 |
| Cloud Apps | Cerner 부진 지속 | FY26 잔여 분기 |
| Cloud Apps | SAP/Workday 침식 | 진행 중 |
| License | DB 탈Oracle (AWS/Azure/Snowflake) | 5~10년 |

---

## 해자 강도 평가 — "이 정도 리스크면 충분히 높은 해자인가?"

### 평가 기준
Morningstar Wide Moat 기준: "향후 20년 이상 초과이익을 유지할 수 있는 구조적 우위"
→ 투자 기간 3~5년 내 결정적 훼손 리스크 없음 + 복수 독립 해자 → Wide

### 식별된 해자 리스크 vs 현실화 시점

| 리스크 | 내용 | 현실화 시점 | 해자 훼손 정도 |
|--------|------|-----------|--------------|
| OpenAI 재무 건전성 | Stargate 계약 이행 불능 시 RPO 중 수백억$ 취소 | 2027~2029 | 중~높음 (OCI만) |
| CapEx ROIC 미회수 | $50B/년 투자가 회수 안 되면 자본 낭비 | 2027~2028 | 높음 (FCF·밸류) |
| 하이퍼스케일러 경쟁 | 가격·성능 경쟁 | 진행 중 | 중간 |
| 전력·부지 병목 | RPO 변환 지연 | 2026 2H~2027 | 중간 (일시적) |
| Cerner 실패 | Oracle Health 사업 축소 | FY26~FY28 | 낮음 (규모 작음) |
| DB 탈Oracle | AWS/Azure로 이관 | 5~10년 | 낮음 (점진적) |
| SAP/Workday 경쟁 | SaaS 시장 점유율 | 지속 | 낮음 |

### 판정
**ORCL = Wide Moat ✅ (단, OCI 세그먼트만 Narrow, DB/Apps에 의해 기업 전체 Wide)**

핵심 근거 3가지:
① **Oracle Database의 스키마 lock-in이 40년 누적 해자** — Postgres·Aurora·Snowflake로의 마이그레이션은 여전히 코드 재작성·수개월 다운타임 수준. 5~10년 장기 탈Oracle 흐름이 존재하나, 금융·통신·정부 미션크리티컬 워크로드는 구조적 이전 어려움. 연 3~5% 가격 인상과 95%+ 갱신율은 이 해자의 직접 증거
② **Multicloud Database 전략으로 DB 해자를 AWS/Azure/GCP 내부로 확장** — Database@{Cloud}로 고객은 하이퍼스케일러 선택과 무관하게 Oracle DB 계속 사용. multicloud DB 매출 Q3 FY26 +531% YoY가 전략 성공의 초기 증거. 이는 경쟁사 클라우드 채택이 ORCL 해자를 훼손하지 않는 구조 (지난 5년 상상 못했던 해자 확장)
③ **Fusion + NetSuite 이중 SaaS 플랫폼의 독립 해자** — ERP 교체가 $30~300M·3~5년 프로젝트라는 Gartner 실측. 대기업(Fusion)·중견기업(NetSuite) 양대 시장 커버. 성장률은 SAP 대비 느리나 이익 안정성·마진 구조상 Wide

**단, 주의 구간:**
- OCI 세그먼트 독자 평가 시 Narrow — $300B+ OpenAI 계약 이행 리스크가 결정적 변수. 2027~2029 확인 필요
- FY26 CapEx $50B가 ROIC 회수되지 않으면 밸류에이션 전체 재평가 (선행 지표: 분기별 OCI consumption 성장률 vs capacity 추가분, gross margin 30%+ 유지)

---

## 경쟁 구도 및 경쟁 우위

### 5-1. 경쟁사 식별 및 포지셔닝

| 경쟁사 | 시가총액 | 핵심 사업 영역 | 시장점유율 (IaaS) | 포지셔닝 |
|--------|---------|-------------|----------|---------|
| **ORCL** | $503B | OCI + DB + ERP | ~3% | Database-led hyperscaler (후발) |
| AMZN (AWS) | $2.3T | IaaS 전방위 | 30% | 시장 지배자 |
| MSFT (Azure) | $3.1T | IaaS + PaaS + Apps | 22% | 엔터프라이즈 융합 |
| GOOGL (GCP) | $2.5T | IaaS + AI/ML | 13% | AI·분석 강세 |
| CoreWeave | $50B+ | AI GPU 전문 IaaS | ~2% | Pure-play AI infra 신흥 |
| SAP | $380B | ERP (S/4HANA) | ERP ~17% | Oracle Apps 직접 경쟁 |
| Workday | $65B | HCM + Financials | HCM 23% | HCM 선도 |
| Salesforce | $290B | CRM + Agentforce | CRM 21% | CRM + AI Agent 선도 |
| Snowflake | $60B | Data Warehouse | DW ~10% | Oracle DB·Autonomous 견제 |

### 5-2. 핵심 성장동력 경쟁 비교

| 성장동력 | ORCL | AMZN (AWS) | MSFT (Azure) | GOOGL (GCP) | 판정 |
|---------|------|-----------|-------------|-------------|------|
| IaaS 분기 매출 | $4.9B (+84%) | ~$30B (+24%) | ~$25B (+39%) | ~$14B (+50%) | 🥉 규모 / 🥇 성장률 |
| RPO / Backlog | $553B (+325%) | ~$195B | $625B (+110%) | ~$94B | 🥇 (절대·성장률) |
| FY26E CapEx | $50B | $140B+ | $120B+ | ~$80B | 🥉 규모 / 🥇 매출 대비 비중 |
| 매출 대비 CapEx 비중 | ~80% (FY26E) | 19% | 35% | 18% | 가장 공격적 |
| AI 인프라 매출 성장 | +243% YoY | +85~95% (추정) | Azure AI +160%+ | Gemini-related 높음 | 🥇 (명목 성장률) |

**판정 해석:**
- ORCL은 절대 규모에서 IaaS 최하위(3% 점유)이나 **성장률 1위** + **RPO 증가율 1위** + **매출 대비 CapEx 비중 최고**
- AWS/Azure/GCP는 이미 대규모 기반 위에서 성장 → 둔화 자연스러움. ORCL은 초기 투자 단계
- **추월 가능성**: AWS/Azure를 IaaS 점유율로 추월하는 건 10년+. 다만 AI 인프라 내에서 top 3 진입은 2~3년 내 가능
- **경쟁 우위 원천**: Database 고객 기반 → OCI 시작점에서의 non-zero-sum 경쟁 (고객은 Oracle DB를 Azure/AWS/OCI 중 선택 가능하나 Oracle DB 사용 자체는 유지)

### 5-3. 경쟁 우위 원천 분석

**1. Oracle Database의 스키마·애플리케이션 lock-in**
- 우위 내용: Fortune 100의 98%가 Oracle DB 운영 (회사 주장, Enterprise DBMS 시장점유율 기반 검증 가능). 한번 구축된 Oracle 스키마·PL/SQL·Exadata 의존 시스템은 5~10년+ 운영
- 정량 근거: License Support 매출 ~$20B 연환산, 갱신율 95%+ (업계 추정), 연 3~5% 가격 인상
- 경쟁사 격차: AWS Aurora·Azure SQL·Postgres는 새 워크로드에 채택률 높으나 기존 Oracle 시스템 이전은 여전히 대규모 프로젝트
- 복제 난이도: **높음** — 40년 누적 enterprise feature set (RAC, Partitioning, Advanced Security, Data Guard) 복제에 10년+
- 격차 지속 기간: 5~10년 — AI 자동 마이그레이션 도구가 등장해도 미션크리티컬 워크로드는 보수적

**2. Multicloud Database Strategy (독특한 해자 확장)**
- 우위 내용: Oracle Database@AWS, @Azure, @Google Cloud — 경쟁 클라우드 내부에서 Oracle DB 제공. DB 해자를 IaaS 해자로 전이
- 정량 근거: Multicloud database service Q3 FY26 매출 +531% YoY. AWS, Microsoft, Google 각 사 공식 파트너십 공시
- 경쟁사 격차: SAP HANA Cloud는 유사 시도하나 ERP 한정. Snowflake는 multicloud이나 DB 아닌 DW
- 복제 난이도: **매우 높음** — AWS/Azure/GCP가 경쟁사 Oracle을 자사 데이터센터에 들인 전례 없음. 고객 수요로 가능
- 격차 지속 기간: 5~10년+ — 하이퍼스케일러가 Oracle DB 대체재 개발에 시간 필요

**3. 수직통합 Exadata + Cloud@Customer**
- 우위 내용: Exadata 어플라이언스 + OCI를 온프레·sovereign 환경에 그대로 배치하는 Cloud@Customer
- 정량 근거: 규제 산업 대상 deal sizes 공개되지는 않으나 금융·정부·통신 필수 선택지
- 경쟁사 격차: AWS Outposts, Azure Stack 유사 시도하나 DB·미들웨어 완성도 ORCL 우위
- 복제 난이도: **높음** — 수직통합 제품군 40년 축적
- 격차 지속 기간: 5~7년

**4. 경영진 (Larry Ellison + 신임 Co-CEO)**
- 우위 내용: Larry Ellison(창업자, CTO, 80세) 여전히 기술·전략 의사결정 주도. Clay Magouyrk(39, 전 AWS 엔지니어, Cloud 출신) + Mike Sicilia(54, Industries) 신임 Co-CEO
- 정량 근거: Safra Catz 11년 재임 중 시가총액 $200B → $500B+. Ellison 개인 자산 주로 ORCL 주식 → 주주 이해관계 정렬
- 경쟁사 격차: MSFT Nadella, AMZN Jassy, GOOGL Pichai 모두 장수 경영진. ORCL도 유사한 연속성
- 복제 난이도: **중간** — 인력풀 축적은 시간 필요하나 개인 영향
- 격차 지속 기간: Ellison 생존 기간 (key man 리스크)

### 5-4. "왜 이 기업인가" — 투자 차별화 근거

1. **OCI의 후발주자 레버리지**: 점유율 3%에서 시작하므로 AWS 30% 대비 성장 헤드룸이 크다 — Q3 FY26 OCI +84% vs AWS +24%가 물리적 증거. 절대 규모는 작으나 **% 성장의 기하급수** 효과
2. **RPO $553B의 가시성**: 현재 연매출 9~10배 규모. 다년 계약으로 수익 변환 확률이 정량 파악 가능 → 하이퍼스케일러 중 가장 가시적 backlog
3. **Database 해자 + Multicloud 전략의 독특함**: AWS/Azure/GCP 모두와 파트너 — 이들의 승리가 ORCL 패배가 아닌 구조. Negative-sum 경쟁에 빠진 AWS vs Azure와 달리 positive-sum 포지션

**밸류에이션 비교:**

| 지표 | ORCL | 하이퍼스케일러 평균 (MSFT/AMZN/GOOGL) | 프리미엄/디스카운트 | 정당성 |
|------|------|-----------|------------------|--------|
| Forward PE (FY26E EPS $7.63) | ~23x | MSFT ~28x, AMZN ~38x, GOOGL ~21x (평균 ~29x) | -21% 디스카운트 | 성장률 더 빠르나 CapEx·FCF 부담 반영, 합리적 |
| EV/Revenue (FY26E) | ~8.5x | MSFT ~12x, AMZN ~3.2x, GOOGL ~7.5x | 혼재 | FCF 음수 반영 할인 |
| Net Debt / EBITDA | ~4.0x (net debt ~$100B / EBITDA ~$25B) | MSFT 0.1x, AMZN 0.4x, GOOGL -1.0x | 과도한 레버리지 | 디스카운트 정당 |
| RPO/Market Cap | 110% ($553B / $503B) | MSFT ~20%, AMZN ~10% | 극단적 프리미엄 | OpenAI 의존 반영 시 할인 |
| Forward FCF Yield | 음수 (FY25 -$0.4B, FY26E ~-$20B) | MSFT ~3%, AMZN ~3%, GOOGL ~4% | 가장 열위 | 2028+ 정상화 기대 반영 |

**결론**: Forward PE만 보면 ORCL이 MSFT/AMZN 대비 20% 디스카운트로 저평가로 보이나, **순부채 부담 + 수년간 음수 FCF + OpenAI 집중 리스크**를 종합 반영하면 현재 밸류에이션은 "디스카운트가 정당한 가격대"로 판단. 22~25x forward PE는 성장률 대비 합리적이나, 극단 시나리오(OpenAI 이탈·debt downgrade) 리스크가 하방 크게 존재.

---

## 리스크 요인

### 1. OpenAI 고객 집중도 리스크 ⚠️ (최대 단일 리스크)

**리스크 설명**: Oracle RPO $553B 중 OpenAI Stargate $300B 계약이 최대 비중으로 추정 (회사 비공개). OpenAI가 2028년 예상 적자 $74B(WSJ 보도)인 상황에서 연 $60B의 OCI 비용을 감당 가능한지가 Oracle 밸류의 핵심 변수.

**규모/비중 정량화:**

| 항목 | 수치 | 비중 |
|------|------|------|
| Total RPO (Q3 FY26) | $553B | 100% |
| OpenAI $300B 계약 (5년) | $300B (추정) | 약 50% 이상 |
| Oracle FY25 total revenue | $57B | OpenAI 연환산 $60B는 Oracle 연매출 초과 |
| OpenAI 2025 revenue estimate | ~$20B | $60B/년 Oracle 의무 이행 어려움 |
| OpenAI 2028E 적자 | $74B (WSJ) | 외부 자본 유치 없이 계약 불가 |

**시나리오별 영향:**
- Extreme Bear: OpenAI 계약 이행 실패 → RPO 중 $150~200B 해지, prepayment 몰수로 부분 손실 흡수. OCI capex 회수 기간 5~7년 → 10년+ 지연
- Bear: 계약 완수되나 scope 축소 (4.5GW → 2~3GW). 매출 연 $40B 수준으로 하향
- Base: 계약대로 이행. 단 OpenAI 외부 자금 조달 성공 전제
- Bull: 이행 + OpenAI 추가 확장 + 기타 고객(xAI·Meta) 동등 규모 계약 추가

**완화 요인:**
- 대부분 장비가 **prepayment 또는 고객 자체 구매** 구조 (Q3 FY26 CFO 발언) → GPU 대량 재고 리스크 제한
- Oracle이 OpenAI 외 700+ AI 고객 보유. 단, OpenAI 외 개별 고객 규모는 훨씬 작은 추정
- NVIDIA·AMD 등은 Oracle 파트너 + 고객 동시로 위험 분산

**팩트체크**: OpenAI 계약 비중 구체 수치는 회사 비공개 — 외부 분석(Motley Fool, CNBC Deirdre Bosa 등)의 추정치. ❓ 공식 공시 없으나 큰 비중은 컨센서스

### 2. CapEx ROIC 미회수 리스크 ⚠️

**리스크 설명**: FY26 CapEx $50B (가이드), 5년 누적 $200B+ 전망. Free Cash Flow 트레일링 -$24.7B로 3분기 연속 음수. 이 투자가 회수되지 못하면 자본 낭비 + 주주 희석 (bond/convertible 발행) + 밸류 재평가.

**CapEx vs FCF 추이:**

| FY | CapEx | OCF | FCF | 비고 |
|-----|------|------|------|------|
| FY21 | $2.1B | $15.2B | $13.1B | 정상 |
| FY23 | $8.7B | $17.6B | $8.9B | AI 전환 시작 |
| FY24 | $6.9B | $18.7B | $11.8B | 조정 |
| FY25 | $21.2B | $20.8B | **-$0.39B** | FCF 첫 음수 |
| FY26E | ~$50B | ~$25B (추정) | **~-$25B** | 음수 3년 연속 |
| FY27E | ~$45~50B | ~$30B (추정) | ~-$15~20B | 음수 지속 |

**시나리오별 영향:**
- Extreme Bear: FY28까지 FCF 음수 지속, 신용등급 강등, 부채 차환 비용 급증
- Bear: FY28 FCF breakeven, FY29+ 회복 but 이자 부담 지속
- Base: FY28 FCF +$5B, FY29 $15~25B 전환
- Bull: FY28 $20B+, FY29 $40B+ (Guggenheim "FCF waterfall" 논리)

**팩트체크**: FCF 수치는 공시 ✓. 미래 궤적은 추정 ⚠️

### 3. 부채 급증 + 신용 리스크 ⚠️

**리스크 설명**: 장기부채 $100B(+24% YoY), 총부채 $162B. CDS 스프레드 125bp(2009 금융위기 수준). KeyBanc 추정 4년간 추가 $100B 부채 필요. Moody's Baa2/S&P BBB 투자등급이나 secondary 시장에서 junk bond 거래.

**부채 현황 (Feb 28, 2026 기준):**

| 항목 | 수치 |
|------|------|
| Long-term Debt | $100.0B (+24% YoY) |
| Total Debt | $162.2B |
| Cash & ST Investments | $39.1B |
| Net Debt | ~$123B (total debt 기준) |
| Shareholder Equity | $39.1B |
| Debt-to-Equity | 345% |
| 분기 이자비용 | >$1B/분기 (연 $4B+) |
| Q3 FY26 신규 조달 | $30B (bonds + mandatory convertible) |

**시나리오별 영향:**
- Extreme Bear: BBB → BBB- → BB(junk) 강등. 차환 비용 +200~300bp, 전환 우선주 희석, 시가총액 -50%+
- Bear: BBB 유지하나 outlook negative. 추가 $100B 조달은 가능하나 비용 증가
- Base: CapEx 정점 이후 deleveraging. FY28~FY29 투자등급 안정
- Bull: AI 매출 가속으로 deleveraging. S&P A- 복귀 가능

**완화 요인**: Q3 FY26 $30B 조달로 유동성 확보. customer prepayment 비중 높아 GPU 자체는 고객 자금 기반

**팩트체크**: 부채 수치 공시 ✓. CDS 스프레드는 시장 데이터 ✓. KeyBanc 추정은 외부 ⚠️

### 4. 전력·부지·인허가 병목 ⚠️

**리스크 설명**: Stargate 계획 7GW 중 현재 가동 1.2GW(Abilene). 나머지 5.8GW는 Michigan/Wisconsin/Wyoming/Pennsylvania 등지 건설 중. 전력 공급·토지 인허가·변압기·냉각 시스템 공급망이 bottleneck.

**규모/비중:**

| 항목 | 수치 |
|------|------|
| Stargate 계획 capacity | ~7 GW |
| 현재 가동 | 1.2 GW (Abilene) |
| 건설/계획 중 | ~5.8 GW |
| GPU 공급 가능 범위 | NVIDIA GB200/GB300 수백만 개 |
| 전력 grid 제약 | US 평균 신규 대형 데이터센터 인허가 3~5년 |

**시나리오별 영향:**
- Bear/Extreme Bear: 전력·부지 지연으로 RPO 변환 6~18개월 지연. FY27~FY28 매출 가이드 하향
- Base: 일부 지연 있으나 전체 buildout 궤도 유지
- Bull: 예상보다 빠른 가동 (Abilene처럼)

**완화**: Abilene은 상업화 빠르게 달성 (1.2GW 이미 가동). 공급업체(Flexential·Crusoe·Vantage 등)와 다변화 계약

**팩트체크**: ✓ (Stargate 공식 발표 및 OpenAI/Oracle 공동 공시)

### 5. 하이퍼스케일러 가격 경쟁 ⚠️

**리스크 설명**: AWS·Azure·GCP 합산 CapEx $340B+ (FY26E). 이들이 같은 GPU 공급망·같은 고객 확보 경쟁 → AI inference 가격 하락 압력, OCI margin 압박.

**경쟁 구도:**

| 경쟁사 | FY26E CapEx | 분기 IaaS 매출 | IaaS 성장률 |
|--------|------------|--------------|-----------|
| AMZN/AWS | ~$140B | $30B+ | +24% |
| MSFT/Azure | ~$120B | $25B+ | +39% |
| GOOGL/GCP | ~$80B | $14B+ | +50% |
| ORCL/OCI | ~$50B | $4.9B | +84% |

**시나리오별 영향:**
- Bear: AI GPU pricing wars → OCI GM 32% → 25%로 800bp 압박
- Base: AWS·Azure가 먼저 price cut. ORCL은 소규모라 상대 영향 제한
- Bull: 수요>공급 지속 → margin 유지 가능

**팩트체크**: ✓

### 6. Oracle Health (Cerner) 지속 부진 ⚠️

**리스크 설명**: 2022 인수 $28.3B 이후 매출 감소 또는 정체. Epic이 대형 병원 EHR 시장 ~50% 점유. FY26에 "return to growth" 가이드 있으나 역사적으로 Oracle의 분기 가이드 미달 빈번.

**규모:**

| 항목 | 수치 |
|------|------|
| Cerner 인수 금액 (2022) | $28.3B |
| Oracle Health 분기 매출 (추정) | $1.5B |
| Epic EHR 시장 점유 (대형 병원) | ~50% |
| Cerner 점유 (대형 병원) | ~20% (감소 추세) |

**시나리오별 영향**: Bear에서는 Cerner 감액 리스크. 규모 작아 기업 전체 영향 제한적

**팩트체크**: CEO 가이드 ⚠️

### 7. Larry Ellison Key Man 리스크 ⚠️

**리스크 설명**: Ellison 80세, 여전히 CTO+Board Chair로 전략·주요 deal(OpenAI, TikTok US 인수 관심 등) 직접 주도. Co-CEO 체제로 승계 시작했으나 Ellison의 독특한 AI 인프라 베팅 철학이 후임자 대체 불가능.

**시나리오**: 건강 이슈 또는 일선 이탈 시 — 주가 단기 충격, 전략 일관성 리스크

**완화**: Larry Ellison이 Ashton 지역 거주 (건강 관리), Stanford·Emory 의료기관 후원. Magouyrk·Sicilia 승계 안정화 중

**팩트체크**: ❓ 미래 이벤트

### 8. DB 탈Oracle 장기 구조 리스크 ⚠️

**리스크 설명**: AWS Aurora, Azure SQL, Google Cloud SQL, Snowflake, Databricks가 신규 워크로드 대부분 흡수. Oracle DB 성장은 기존 고객의 클라우드 확장에 의존. 10년 이상 관점에서 점진적 감소 흐름.

**완화**: Multicloud Database@{Cloud}로 이 위험을 기회로 전환 시도 중

**팩트체크**: 구조적 트렌드 ✓

### 리스크 독립성 확인

- **독립적 리스크**: Cerner 부진(매출 소규모), Larry key man(이벤트형), DB 탈Oracle(장기 구조)
- **상관된 리스크**: OpenAI + CapEx + 부채 — 이 세 리스크는 매우 상관 높음. OpenAI 이탈 시 CapEx stranded + 차환 부담 급증
- **거꾸로 독립 자산**: License & Support 연 $20B, NetSuite ~$4B, Fusion ~$4B는 OCI 독립. OCI 실패해도 이들 현금흐름은 유지

### 리스크 수치 팩트체크 종합

| # | 항목 | 판정 | 비고 |
|---|------|------|------|
| 1 | OpenAI RPO 비중 | ❓ | 회사 비공개, 외부 추정 |
| 2 | FY26 CapEx $50B | ✓ | Q3 FY26 공시 |
| 3 | FY25 FCF -$0.39B | ✓ | 공시 |
| 4 | 트레일링 FCF -$24.7B | ⚠️ | 일부 외부 집계 |
| 5 | Long-term Debt $100B | ✓ | 10-Q |
| 6 | CDS 스프레드 125bp | ✓ | 시장 데이터 |
| 7 | Moody's Baa2 / S&P BBB | ✓ | 공시 |
| 8 | Stargate 7GW / $400B | ✓ | 공식 발표 |
| 9 | OpenAI 2028E 적자 $74B | ⚠️ | WSJ 보도 (OpenAI 내부 문서) |
| 10 | Oracle Database F100 98% | ⚠️ | 회사 주장 |

---

## 모니터링 지표

### 해자 건전성 모니터링

| 출처 | 모니터링 항목 | 기준값 | 현재 상태 |
|------|------------|-------|----------|
| OCI 해자 | OCI IaaS YoY 성장률 | 70%+ 유지 | ✅ +84% (Q3 FY26) |
| OCI 해자 | RPO QoQ 증가분 | $15B+ 유지 | ✅ +$29B (Q3) |
| OCI 해자 | AI capacity gross margin | 30%+ 유지 | ✅ 32% (Q3) |
| OCI 해자 | Multicloud DB 매출 성장 | 200%+ 유지 | ✅ +531% (Q3) |
| Cloud Apps 해자 | NetSuite YoY 성장률 | 15%+ 유지 | ⚠️ +14% (Q3, 턱걸이) |
| Cloud Apps 해자 | Fusion ERP YoY 성장률 | 15%+ 유지 | ⚠️ 추정 +10~15% |
| Cloud Apps 해자 | Oracle Health (Cerner) | Positive YoY로 전환 | ❌ 부진 지속 |
| License 해자 | License Support 갱신율 | 95%+ 유지 | ⚠️ 비공개, 추정 |
| 경영진 | Larry Ellison 상태 | 일선 유지 | ✅ |

### 리스크 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| 리스크 1 | OpenAI 재무 건전성 (매출·자금 조달) | OpenAI 분기 매출 감소 or 자금 조달 실패 | ⚠️ $74B 2028 적자 전망 |
| 리스크 1 | OpenAI 계약 scope 변경 | Stargate capacity 감축 발표 | ✅ 현재 확장 중 |
| 리스크 2 | 분기 FCF | -$5B 초과 악화 | ⚠️ -$10B/분기 |
| 리스크 3 | 신용등급 | BBB → BBB- 강등 | ⚠️ CDS 125bp, outlook negative 우려 |
| 리스크 3 | 분기 이자비용 | $1.2B 초과 | ⚠️ $1B+ 중 |
| 리스크 4 | Stargate 사이트 on-schedule | 분기별 capacity 추가 | ✅ Abilene 가동 |
| 리스크 5 | OCI gross margin | 30% 미만 | ✅ 32% |
| 리스크 6 | Cerner / Oracle Health 성장 | YoY -5% 미만 지속 | ⚠️ FY26 turnaround 미검증 |
| 매크로 | 10Y Treasury | 5.0% 초과 시 밸류 압박 | ✅ ~4.15% |
| 매크로 | 엔터프라이즈 IT 예산 | Gartner 전망 -5% | ✅ 2026 +8% 전망 |

### 경쟁 우위 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| 경쟁 (OCI) | AWS/Azure/GCP 대비 성장률 격차 | OCI 성장률이 평균 아래로 | ✅ OCI 가장 빠름 |
| 경쟁 (OCI) | Top 3 AI 고객 ORCL 이탈 | OpenAI, xAI, Meta 중 1개 이탈 | ✅ 유지 |
| 경쟁 (Apps) | NetSuite vs Workday HCM 성장률 | NetSuite가 Workday 하회 | ⚠️ 턱걸이 |
| 경쟁 (Apps) | Fusion vs SAP S/4HANA Cloud 성장률 | Fusion이 SAP 하회 | ⚠️ SAP가 빠름 |
| 경쟁 (DB) | Aurora·Snowflake 성장률 | Aurora/Snowflake가 Oracle DB 점유율 대체 | ⚠️ 진행 중 (장기) |

### 즉시 재검토 트리거

- **OpenAI가 Oracle 계약 축소 또는 연체 공식 발표** (또는 OpenAI 유동성 위기 발생)
- **Moody's 또는 S&P 신용등급 **Investment Grade(BBB-/Baa3) 이하 강등**
- **분기 RPO 감소** (Q4 FY26 또는 이후 QoQ 음수)
- **OCI gross margin 25% 미만** 하락 (가격 경쟁 본격화 신호)
- **Stargate 주요 사이트 건설 중단/취소** 발표
- **Larry Ellison 건강 이슈 또는 CTO/Board Chair 사임** 공식 발표

---

## DCF 시나리오 & 가치평가

### 8-0. DCF 방법론 선택

- **적용 방식**: **E. Forward Multiple** (3년 후 FY29 정상화 EPS × 적용 멀티플, 10% 할인)
- **선택 근거**: Oracle은 FY25~FY28 사이 $200B+ 누적 CapEx 집중 투자 사이클에 있어 현재와 수년간 FCF가 -$10B~-$25B 수준으로 음수 지속. Standard FCF DCF는 음수 FCF를 할인하고 Terminal Value가 비중 95%+ 차지해 기술적으로 작동 불가. OpenAI 계약 $300B가 RPO에 거대한 비중 → 미래 정상화 EPS가 실제 밸류 결정
- **대안 대비 우위**:
  - (A) FCF DCF: 위와 같이 FY25~FY28 FCF 음수로 사용 불가
  - (B) SOTP: OCI + Cloud Apps + License 세그먼트별 operating income을 Oracle이 상세 공시하지 않음. 세그먼트별 이익 분리 어려워 수치 기반이 취약. 다만 Cross-check용 partial SOTP는 참고
  - (C) Excess Returns / (D) NAV: 은행·REIT가 아님
- **주요 가정 요약**:
  - FY29E (목표 연도) EPS 시나리오별 $8 ~ $17 범위
  - 적용 PE 멀티플: Extreme Bear 12x ~ Bull 26x (역사적 실측: ORCL 10년 forward PE 범위 12~35x)
  - 할인율: 10% (WACC 11~12.5% 중 중앙값 근사, 3년 할인)
  - 희석 주식수: 2.92B → FY29 2.95B (스톡옵션 순희석)
  - 10Y Treasury: 4.15% (작성일)

### 8-1. DCF 구조 설계 원칙

**이익 변수**: FY29E GAAP 또는 Non-GAAP EPS (분석가 컨센서스 기반 조정)

**밸류에이션 공식**:
```
목표가 (today) = FY29E EPS × 적용 PE / (1 + 10%)^3
```

**기본 가정 테이블:**

| 항목 | 값 | 근거 |
|------|------|------|
| 기준 EPS | FY29E GAAP EPS | 시나리오별 $8~$17 |
| 희석 주식수 | 2.92B (Q3 FY26) → 2.95B (FY29E) | mandatory convertible 전환·스톡옵션 순희석 |
| 할인 기간 | 3년 (FY26 → FY29) | 투자 기간 |
| 할인율 | 10% | WACC 11~12.5% 중 중간, 보수적 |
| 투자 기간 | 3~5년 | CapEx 사이클 종료 시점까지 |

**멀티플 기준** (ORCL 역사적 실측 1년 forward PE):
- Sub-crisis low (2014, 2016, 2022): 10~12x
- 평상시 (2019~2023): 15~20x
- AI 기대 (2024~2025): 25~35x
- AI 정점 (2025 Q3): 40x+ (일시적)

### 8-2. 시나리오별 DCF 계산

#### Extreme Bear — 확률 20%

**전제 조건:**
- OpenAI가 2027~2028 재무 위기로 Stargate 계약 30~40% 축소 또는 prepayment 부족
- Oracle 신용등급 BBB- → BB(junk) 강등, 차환 비용 급증
- AI GPU 가격 경쟁으로 OCI gross margin 30% → 22%
- License Support는 유지되나 OCI 성장률 +30%로 감속

**시나리오 진입 신호:**
- OpenAI 공식 Stargate 감축 발표
- Moody's/S&P BBB- 강등
- OCI gross margin 분기 25% 미만 돌파

**DCF 계산:**
```
FY29E EPS: $8 (FY26 $7.63 → stagnation/decline)
적용 PE: 10~14x (crisis low)
────────────────
FY29 목표가: $80 ~ $112 (중간 $96)
3년 할인 (10%): $72
현재가 $175 대비: -59%
```

#### Bear — 확률 25%

**전제 조건:**
- OpenAI 계약 유지되나 scope 축소 (4.5GW → 3GW)
- OCI 성장 감속 (+84% → +40% by FY29)
- CapEx FY28까지 높게 유지, FY29부터 정점
- OCI gross margin 28%
- 이자비용 증가로 EPS 성장 제약

**시나리오 진입 신호:**
- Stargate 1~2개 사이트 공식 지연
- OCI 성장률 60% 미만으로 하락
- 신용등급 outlook negative

**DCF 계산:**
```
FY29E EPS: $11 (FY26 $7.63 → FY29 +13% CAGR)
적용 PE: 13~17x (growth 둔화 + 레버리지 할인)
────────────────
FY29 목표가: $143 ~ $187 (중간 $165)
3년 할인 (10%): $124
현재가 $175 대비: -29%
```

#### Base — 확률 35%

**전제 조건:**
- Stargate buildout 가이드대로 이행 (Abilene precedent)
- OCI $100B+ 매출 달성 (FY26 ~$25B × 5년 연평균 +35% = FY30 ~$110B, 2.5년 이르게 도달)
- RPO $553B 중 70%+ 실제 매출 변환
- OCI gross margin 32% 유지
- FY28부터 FCF 정상화, deleveraging 시작

**시나리오 진입 신호:**
- Q4 FY26 OCI 성장률 80%+ 유지
- 추가 RPO QoQ +$20B 이상 누적
- Cerner/Oracle Health YoY 흑자 전환

**DCF 계산:**
```
FY29E EPS: $13 (FY26 $7.63 → FY29 +19% CAGR)
적용 PE: 20~25x (정상화 + 성장 premium)
────────────────
FY29 목표가: $260 ~ $325 (중간 $286)
3년 할인 (10%): $215
현재가 $175 대비: +23%
```

#### Bull — 확률 20%

**전제 조건:**
- Stargate 전체 7GW 건설 순조, 2028~2029 완공
- OpenAI 외 xAI, Meta, 기타 하이퍼스케일러가 OCI 추가 계약 ($100B+ 신규)
- OCI 매출 FY29 $130B+ 달성 (5년 +45% CAGR)
- CapEx 정점 FY27로 더 빨리 도달, FY28 FCF +$30B 전환
- multicloud DB가 AWS/Azure 내부에서 연 $20B+ 매출로 성장
- S&P A- 복귀

**시나리오 진입 신호:**
- 3대 신규 AI 고객 ($50B+ 각) 추가 발표
- OCI 분기 성장률 90%+ 재가속
- Multicloud DB 매출 연 $10B 돌파

**실현 가능성 분석:**

| 전제 조건 | 실현 가능성 | 근거 | 선행 사례 / 반례 |
|---------|-----------|------|----------------|
| Stargate 7GW 2028~2029 완공 | 중간 | Abilene 1.2GW 계획대로 가동 (precedent). 나머지 5~6사이트 동시 건설 도전 | Hyperscale 데이터센터 평균 24~36개월 소요. 병렬 진행 시 병목 위험 |
| 추가 하이퍼스케일 고객 $100B+ | 중간 | xAI·Meta·기타 이미 초기 계약. scope 확대 가능성 | OpenAI 초기에도 부분 → 전체 확장 |
| OCI FY29 $130B+ 달성 | 중~낮 | FY26 $25B × (1.45)^3 = $76B, × (1.55)^3 = $93B. $130B 달성은 +70% CAGR 필요 | 2015~2019 AWS가 유사 성장, precedent 있음 |
| OCI GM 32%+ 유지 | 중간 | FY26 Q3 확인. 가격 경쟁 심화 시 압박 | 하이퍼스케일러 평균 GM 55~60%로 수렴 역사 |
| 멀티클라우드 DB $20B+ | 중 | Q3 FY26 +531% YoY. 절대 규모는 아직 작음 | 파트너십은 독특, 대체재 없음 |
| FY28 FCF +$30B | 낮~중 | CapEx 정점 전제. $50B+ 지속 시 불가 | 역사적으로 Oracle FCF 피크 $17B (FY23) |
| S&P A- 복귀 | 낮 | 부채 축소 + 수익성 증명 필요. 통상 3~5년 | Oracle BBB → A- 전례 2008 이전 |

- **실현 경로**: (i) Abilene 가동 증명 → (ii) 다른 사이트 2026 2H 가동 → (iii) OpenAI 전용 외 3~5개 신규 hyperscale 계약 → (iv) OCI FY27 +80% 유지 → (v) FY28 FCF 전환 → (vi) FY29 멀티플 리레이팅
- **전제 간 독립성**: 전제들이 순차적·상관 높음. Stargate 지연 시 OCI 성장·FCF 전환·신용 개선 모두 연쇄 악화. Bull은 high-beta 시나리오
- **종합 실현 확률 판단**: 20%가 적정. 상관 높은 7개 전제가 모두 성공할 확률은 기하적으로 낮음. 단, OCI growth 단일 지표만 Bull 영역에 들어가도 multiple re-rating 가능하므로 10%보다는 20%가 합리

**붕괴/전환 조건**: OpenAI 재무 위기 / OCI GM 급락 / Stargate 지연 발표 중 하나만 발생해도 Base 또는 Bear 하향

**DCF 계산:**
```
FY29E EPS: $17 (FY26 $7.63 → FY29 +31% CAGR, +AI 프리미엄)
적용 PE: 24~28x (정상화 + 가속 premium)
────────────────
FY29 목표가: $408 ~ $476 (중간 $442)
3년 할인 (10%): $332
현재가 $175 대비: +90%
```

### 8-3. 가중평균 내재가치

```
시나리오       확률    중간값(PV)   기여
────────────────────────────────────────
Extreme Bear   20%     $72         $14.4
Bear           25%     $124        $31.0
Base           35%     $215        $75.3
Bull           20%     $332        $66.4
────────────────────────────────────────
가중평균 내재가치:                  $187
가중평균 범위:              $72 ~ $332
현재가 $175 대비:           -59% ~ +90%
가중평균 대비:              +7%
```

**확률 배분 근거**:
- **Extreme Bear 20%**: CDS 스프레드 125bp(2009 크라이시스 수준), OpenAI 재무 건전성 실질적 우려(WSJ 2028 적자 $74B), -49% 52주 하락이 이미 시장의 crisis-pricing 일부 반영 중 → 일반적 10%보다 높은 20%
- **Bear 25%**: 일반적 20~30% 범위 중앙. OCI 성장 감속 + 부채 부담 + 경쟁 시나리오
- **Base 35%**: RPO $553B의 객관적 증거, Abilene 실제 가동, Q3 실적이 Base 시나리오의 정량 뒷받침. 상향 여지는 있으나 OpenAI 리스크 때문에 35%로 제한
- **Bull 20%**: 가이드 일반 15~25% 중앙. Stargate 순조 + 추가 고객 확보 필요
- EB+B = 45% (가이드 ≥35% 크게 충족, 보수적)

### 8-4. 실적 데이터 — 현재 어디에 위치하는가

**직전 실적 테이블 (Q3 FY26, 2026-02-28 종료 분기):**

| 지표 | 수치 | YoY | DCF Case 위치 |
|------|------|-----|-------------|
| Total revenue | $17.2B | +22% USD / +18% CC | Base ~ Bull |
| Cloud revenue | $8.9B | +44% | Base ~ Bull |
| OCI IaaS | $4.9B | +84% | Bull |
| Cloud Apps | $4.0B | +13% | Bear ~ Base |
| NetSuite | $1.1B | +14% | Base |
| Software (license+support) | $6.1B | +3% (-1% CC) | Base |
| AI infrastructure | n/a | +243% | Bull |
| Multicloud DB | n/a | +531% | Bull |
| RPO | $553B | +325% YoY, +$29B QoQ | Bull |
| Non-GAAP EPS | $1.79 | +21% | Base |
| GAAP EPS | $1.27 | +24% | Base |
| Non-GAAP OI | $7.4B | +19% | Base |
| AI capacity GM | 32% | > 30% 가이드 | Base ~ Bull |

**트렌드 판단:**
```
OCI 성장률 궤적: FY24 +50% → FY25 +70% → Q1 FY26 +52% → Q2 FY26 +77% → Q3 FY26 +84%
─────────────────────────────────────────────────────────────────────
현재 위치: Base ~ Bull 경계 (RPO는 Bull 영역, Cloud Apps는 Bear~Base)
트렌드 방향: 가속 (OCI 더 가속) → Base 우상향 또는 Bull 방향
────────────────────────────────────────
주가 트렌드: 52W 고점 $346에서 -49% 하락 → Bear 시나리오 pricing-in 진행 중
```

**가이던스 반영 시 방향:**
- Q4 FY26 가이드: 총매출 +25~28% (회사 가이드) — Base 달성
- FY27 Outlook: Cloud 매출 +40%+ 유지 기대 — Base 유지 or Bull 진입
- CapEx $50B 가이드는 수요 대비 supply 제약 반영 — Bull 진입의 핵심 bottleneck

**핵심 관찰**: 가장 중요한 변수는 **OpenAI 계약 이행 확인** (2027~2029). 다음으로 중요한 것은 **OCI gross margin 30%+ 유지** (경쟁 강도 신호). 향후 확인 시점: Q4 FY26 결산(2026년 6월) — RPO QoQ 증가, CapEx 진도, OCI 성장률 동시 확인 가능.

### 8-5. 가치평가 결과

| 지표 | 수치 | 평가 |
|------|------|------|
| 현재 주가 | $175 (52주 고점 $346 대비 -49%) | 과열 후 crisis-pricing 시작 |
| Forward PE (FY26E EPS $7.63) | ~23x | 역사적 평균 17~20x 대비 약간 고평가, AI 기대치 25~35x 대비 저평가 |
| PEG (FY26→FY27 +7%) | ~3.3 | >2 고평가 (단기 성장 감속 반영) |
| PEG (FY26→FY29 CAGR ~18~20%) | ~1.2 | ≤1.5 적정 (중기 전망) |
| 가중평균 내재가치 | $187 ($72~$332) | 현재가 대비 +7% |
| Base 목표가 | $215 | 현재가 대비 +23% |
| 손익비 (Base vs Bear) | $40 업사이드 / $51 다운사이드 | 0.78 (다운사이드 우세) |
| 손익비 (Base vs Extreme Bear) | $40 업사이드 / $103 다운사이드 | 0.39 (다운사이드 지배) |
| 애널리스트 평균 목표가 | $261 (+49%) | 컨센서스는 Bull 가정. 본 분석 Base 대비 +22% |

**결론**: 현재가 $175는 가중평균 내재가치 $187에 매우 근접 — **보유·관찰 대기 구간**. Base 목표가 $215 대비 +23% 업사이드는 존재하나 **손익비 0.78로 다운사이드 우세** (Bear $124까지 -29% 하락 여지 > Base +23% 상승 여지). Extreme Bear 고려 시 손익비 0.39로 더 불리. **장기 Thesis(DB 해자 + multicloud + OCI 성장)는 유효**하지만, 매수 타이밍은 OpenAI 계약 이행 증명 확인 + Bear 시나리오 전개로 추가 하락 시 분할 진입이 합리적. 주요 분기점: Q4 FY26 실적(6월) + FY27 초반 RPO 변환 속도.

---

## 종합 판정

```
[ ORCL ] 평가 요약
────────────────────────────────
비즈니스 퀄리티  : ✅ Wide Moat (DB lock-in + multicloud 확장 + Apps 이중 SaaS)
시장 환경        : ⚠️ AI 인프라 수요 강력 but OpenAI 집중·경쟁 심화·부채 부담
가치평가         : ⚠️ 가중평균 $187 vs 현재 $175 (+7%) — Base $215까지는 +23%나 손익비 0.78
리스크           : ⚠️ OpenAI 집중도 + $50B CapEx + 부채 + CDS 125bp
────────────────────────────────
종합 의견        : 보유 (현재가) / 분할 매수 (Bear $120~140 진입 시)
────────────────────────────────
핵심 모니터링:
  1. OpenAI 재무 건전성 + Stargate 계약 scope 변경 (최대 단일 변수)
  2. OCI gross margin 30%+ 유지 (경쟁·공급 측 신호)
  3. 분기 RPO QoQ 증가분 $15B+ 유지 (수요 모멘텀)
  4. CapEx vs OCF 추이 (FY28 FCF 정상화 타임라인)
  5. 신용등급 outlook (BBB 유지 여부)
```

**판정 근거**:
- 매수 기준(가중평균 대비 20%+ 할인): 미달 (+7% 프리미엄)
- 분할 매수 기준(10~20% 할인): 미달 (+7% 프리미엄)
- 보유 기준(±10% 범위): **충족** (현재가 +7%, 범위 내)
- 업사이드 시나리오 실현 전제 다수 미검증. 다운사이드 손익비 우세

**진입 매력도 높아지는 조건**:
- $140 이하 (Bear 목표가 근접) — 손익비 대폭 개선
- OpenAI 2027년 계약 1차 마일스톤 이행 증명 후 — 리스크 재평가 가능
- Moody's/S&P 신용 outlook 안정화 — 재무 리스크 축소

---

## 분기별 점검 기록

| 날짜 | 실적 요약 | Case 위치 변화 | 가설 업데이트 |
|------|----------|-------------|-------------|
| 2026-04-19 | Q3 FY26 기준 Base 분석 작성: Total rev $17.2B (+22%), OCI +84%, RPO $553B (+325%), GAAP EPS $1.27 | 초기 판정: Base~Bull 경계 | Thesis 유효. 단 OpenAI 리스크 모니터링 핵심 |

**작성 트리거:**
- 분기 실적 발표 시 (Q4 FY26: 2026년 6월경)
- 즉시 재검토 트리거 충족 시
- 매크로 환경 급변 시 (신용시장 경색, AI 수요 쇼크 등)
