---
ticker: ORCL
name: Oracle Corporation
sector: Technology
analysis_date: 2026-04-19
thesis_summary: OCI 하이퍼스케일러 진입 + RPO 급증으로 수요 가시성 확보
target_price: 187
extreme_bear_price: 72
bear_price: 124
base_price: 215
bull_price: 332
---
# ORCL — Oracle Corporation
> 40년 엔터프라이즈 데이터베이스 지배자 → 하이퍼스케일러 전환 중. Cloud Infrastructure(OCI/AI) + SaaS(Fusion/NetSuite) + Legacy License/Support + Oracle Health. 시가총액 $503B.

---

## 투자 thesis

- **OCI가 하이퍼스케일러 4社 경쟁 구도에 진입 중, RPO 급증이 수요 가시성을 증명** → 효율적 규모 + 전환비용. Q3 FY26 RPO $553B (+325% YoY, +$29B QoQ), OCI IaaS $4.9B (+84% USD / +81% CC), AI 인프라 매출 +243%, multicloud DB +531%. 글로벌 IaaS 점유율 ~3%이나 가장 빠른 성장률
- **Oracle Database의 대체불가성이 멀티클라우드 전략으로 재점화** → 무형자산(기술·데이터) + 전환비용. Fortune 100의 98%가 Oracle DB 사용. AWS/Azure/GCP 3社 모두와 Database@{Cloud} 네이티브 통합 — 경쟁사 클라우드 안에서도 Oracle DB가 기본값
- **Fusion ERP + NetSuite 이중 SaaS 포트폴리오의 안정적 현금창출 + AI 업셀** → 전환비용 + 무형자산. NetSuite $1.1B/분기 (+14%), Fusion ERP ~$1.0B/분기. Cloud+software가 총매출의 88%

**분석 작성일**: 2026-04-19
**목표가**: $187 (가중평균 내재가치, Base $215)
**투자 기간**: 3~5년 (FY26 → FY29)

---

## 사업 구조 및 해자

### 세그먼트 요약 테이블

| 세그먼트 | 수익원 | 규모 지표 (Q3 FY26) | 해자 유형 | 해자 강도 |
|---------|------|------------------|---------|---------|
| Cloud Infrastructure (OCI/IaaS + AI) | 컴퓨트·스토리지·GPU | $4.9B (+84%) | 효율적 규모, 전환비용(계약), 네트워크 | Narrow → Wide 전환 중 |
| Cloud Applications (Fusion + NetSuite + HCM) | SaaS 구독 | $4.0B (+13%) | 무형자산, 전환비용 | Wide |
| License & On-premise | 신규 license, Java | ~$1.0B | 무형자산(DB 엔진), 전환비용 | Wide |
| License Support | 기존 라이선스 유지보수 | ~$5.1B | 전환비용 | Wide |
| Hardware + Services | Exadata, 컨설팅 | ~$2.2B (감소) | Narrow (Exadata만) | Narrow |
| Oracle Health (구 Cerner) | EHR SaaS | ~$1.5B (회복 중) | 전환비용 | Narrow |

### Cloud Infrastructure (OCI)

**사업 구조**: 퍼블릭 IaaS + AI 인프라(GPU 클러스터) + Database Cloud Service + Cloud@Customer. 하이퍼스케일러 4社 중 4위 but 가장 빠른 성장률.

| 해자 유형 | 검증 |
|---------|------|
| 효율적 규모 (CapEx) | ✅ |
| 전환비용 (RPO·계약) | ✅ |
| 성능·가격 차별화 (RDMA, egress) | ⚠️ |
| 네트워크 (multicloud DB) | ✅ |

**상세**:
- **효율적 규모**: FY26 CapEx $50B 가이드 (FY25 $21B의 2.4배, FY21 $1.7B 대비 29배). 하이퍼스케일러 외 진입 불가. 단 AWS ($140B+), Azure ($120B+), GCP ($80B+) 대비 규모 1/2~1/3이나 매출 대비 비중(~80%)은 가장 공격적.
- **전환비용 (RPO)**: Q3 FY26 RPO $553B, 연매출 $57B의 9~10배 — 하이퍼스케일러 중 가장 가시적 backlog. OpenAI $300B (5년), xAI·Meta·NVIDIA·AMD·700+ AI 고객. 다년 계약 해지 시 prepayment 몰수 조항.
- **성능·가격 차별화**: ⚠️ RDMA 기반 베어메탈 네트워킹·낮은 egress 비용 claim 있으나 대부분 회사 자체 주장. Q3 FY26 AI capacity gross margin 32%는 회사 공시 수치이나 타 하이퍼스케일러와 직접 비교 공시 없음.
- **네트워크 (multicloud)**: AWS/Azure/GCP 모두와 Database@{Cloud} 공식 파트너십. multicloud DB 매출 Q3 FY26 +531% YoY가 전략 성공의 초기 증거. 이는 경쟁사 클라우드 채택이 ORCL 해자를 훼손하지 않는 특이 구조.

**주요 자산·계약**: Abilene Stargate Campus 1.2 GW 가동 중, Stargate 전체 ~7 GW / $400B 투자 계획, OpenAI $300B (2027~, 4.5 GW).

**해자 리스크**: OpenAI 고객 집중도 (RPO 중 50%+ 추정, 현실화 시점 2027~2029) / 하이퍼스케일러 자본 경쟁 (진행 중) / 전력·부지 병목 (2026 2H~2027) / CapEx ROIC 미회수 (2027~2028 시험대). 이 4개 리스크가 OCI 세그먼트 해자를 훼손 가능. OCI 단독 평가 시 Narrow, 그러나 기업 전체는 DB·Apps에 의해 Wide 유지.

### Cloud Applications (Fusion + NetSuite)

**사업 구조**: Fusion ERP/HCM/SCM (대기업용) + NetSuite (중소·중견기업) + Oracle Health. 각각 ~$4B 연환산으로 독립 기둥.

| 해자 유형 | 검증 |
|---------|------|
| 무형자산 (브랜드) | ✅ |
| 전환비용 (구현비용) | ✅ |
| 가격 결정력 (AI 업셀) | ⚠️ |
| 네트워크 (SaaS 고객베이스) | ✅ |

**상세**:
- **무형자산**: Fortune 500 상당수가 E-Business Suite/JD Edwards/PeopleSoft 사용 경험, Fusion으로 자연스러운 마이그레이션 경로. NetSuite는 "ERP for cloud-native SMB" 포지션.
- **전환비용**: Gartner·Forrester 실측 — ERP 교체 프로젝트 평균 3~5년, $30~300M. 한번 구축 후 10년+ 운영.
- **가격 결정력**: ⚠️ AI Agentic Apps 업셀 초기 단계. 경쟁사(Salesforce Agentforce, MSFT Copilot)와 차별화 증명 필요.
- **성장 경쟁력**: Q3 FY26 NetSuite +14% 턱걸이. SAP S/4HANA Cloud 2025년 ~30%·Workday ERP ~17% 대비 상대적으로 느림.

**해자 리스크**: Oracle Health(Cerner) 지속 부진 — Epic이 대형 병원 EHR ~50% 점유, 2022 인수 $28.3B 이후 매출 정체. FY26 "return to growth" 가이드 미검증 (FY26 잔여 분기 확인) / SAP·Workday의 침식 지속 (영향 제한적) / AI 번들 차별화 실패 가능 (FY27~FY28).

### License & License Support

**사업 구조**: Oracle Database/Middleware/Java 라이선스 유지보수 + 신규 라이선스. 매우 안정적 현금흐름, 성장 정체. Q3 FY26 Software $6.1B (+3% USD, -1% CC).

| 해자 유형 | 검증 |
|---------|------|
| 전환비용 (DB 스키마) | ✅ |
| 무형자산 (DB 엔진) | ✅ |
| 가격 결정력 (유지보수) | ✅ |
| 계약 lock-in (ULA) | ✅ |

**상세**:
- **전환비용**: Oracle Database 스키마·PL/SQL·Stored Procedure·트리거에 의존하는 미션크리티컬 시스템 Fortune 500에 수만 개. Postgres·Aurora 마이그레이션은 코드 재작성 수준·수개월 다운타임.
- **무형자산 (엔진)**: Real Application Clusters (RAC), Exadata, Partitioning, Advanced Security 등 40년 축적 독자 기술. 금융·통신·정부 미션크리티컬에서 사실상 대체 불가.
- **가격 결정력**: 유지보수 매년 3~5% 자동 인상. 미지불 시 패치·보안 업데이트 차단 — 사실상 독점 공급.
- **갱신율**: ⚠️ 95%+ 업계 추정. 회사 공식 공시 없음.

**해자 리스크**: AWS Aurora·Azure Postgres·Snowflake·Databricks가 신규 워크로드 흡수 (5~10년 장기·점진) / Java 2023 per-employee pricing 변경으로 고객 반감, OpenJDK·Amazon Corretto 전환 가속 (진행 중).

### Hardware + Services

Exadata 수직통합 + Cloud@Customer (하이브리드·sovereign). 매출 축소 중이며 Cloud@Customer 채널로 transition. 기업 종합 해자 평가에서 비중 낮음. Narrow.

### 해자 강도 판정

**ORCL = Wide Moat ✅** (단, OCI 단독은 Narrow, DB/Apps에 의해 기업 전체 Wide)

**핵심 근거**:
① **Oracle Database의 스키마 lock-in이 40년 누적 해자**: 5~10년 장기 탈Oracle 흐름은 존재하나 미션크리티컬은 여전히 구조적. 연 3~5% 인상과 95%+ 갱신율은 직접 증거.
② **Multicloud Database 전략**: Database@{Cloud}로 DB 해자를 AWS/Azure/GCP 내부로 확장. 경쟁사 클라우드 채택이 ORCL 해자를 훼손하지 않는 독특 구조. 복제 난이도 매우 높음 (5~10년+).
③ **Fusion + NetSuite 이중 SaaS 플랫폼**: 독립 해자 2개. ERP 교체의 $30~300M·3~5년 실측 전환비용이 뒷받침.

**주의 구간**:
- OCI 단독 평가 시 Narrow — $300B+ OpenAI 계약 이행 리스크가 결정적 변수
- FY26 CapEx $50B가 ROIC 회수되지 않으면 밸류에이션 전체 재평가
- 선행 지표: 분기별 OCI consumption 성장률 vs capacity 추가분, gross margin 30%+ 유지

---

## 경쟁 구도 및 경쟁 우위

### 경쟁사 식별 및 포지셔닝

| 경쟁사 | 시가총액 | 핵심 영역 | IaaS 점유율 | 포지셔닝 |
|--------|---------|-------|-----|-------|
| ORCL | $503B | OCI + DB + ERP | ~3% | Database-led hyperscaler |
| AMZN (AWS) | $2.3T | IaaS 전방위 | 30% | 시장 지배자 |
| MSFT (Azure) | $3.1T | IaaS + PaaS + Apps | 22% | 엔터프라이즈 융합 |
| GOOGL (GCP) | $2.5T | IaaS + AI/ML | 13% | AI·분석 강세 |
| CoreWeave | $50B+ | AI GPU 전문 IaaS | ~2% | Pure-play AI infra |
| SAP | $380B | ERP (S/4HANA) | ERP ~17% | Oracle Apps 직접 경쟁 |
| Workday | $65B | HCM + Financials | HCM 23% | HCM 선도 |
| Salesforce | $290B | CRM + Agentforce | CRM 21% | CRM + AI Agent |
| Snowflake | $60B | Data Warehouse | DW ~10% | Oracle DB 견제 |

### 핵심 성장동력 경쟁 비교

| 성장동력 | ORCL | AWS | Azure | GCP | 판정 |
|---------|------|-----|-------|-----|-----|
| IaaS 분기 매출 | $4.9B (+84%) | ~$30B (+24%) | ~$25B (+39%) | ~$14B (+50%) | 🥉 규모 / 🥇 성장률 |
| RPO / Backlog | $553B (+325%) | ~$195B | $625B (+110%) | ~$94B | 🥇 절대·성장 |
| FY26E CapEx | $50B | $140B+ | $120B+ | ~$80B | 🥉 규모 / 🥇 매출 비중 |
| CapEx/매출 | ~80% | 19% | 35% | 18% | 가장 공격적 |
| AI 인프라 매출 성장 | +243% | +85~95% (추정) | +160%+ | 높음 | 🥇 성장률 |

**판정 해석**:
- ORCL은 절대 규모 IaaS 최하위(3%)이나 성장률 1위 + RPO 증가율 1위 + 매출 대비 CapEx 비중 최고
- AWS/Azure/GCP는 이미 대규모 기반 위에서 성장 → 자연 둔화. ORCL은 초기 투자 단계
- IaaS 점유율로 AWS/Azure 추월은 10년+ 과제. AI 인프라 내에서 top 3 진입은 2~3년 내 가능
- 경쟁 우위 원천: Database 고객 기반 → OCI 시작점의 non-zero-sum 경쟁 (고객은 Azure/AWS/OCI 중 선택 가능하나 Oracle DB 사용은 유지)

### 경쟁 우위 원천

**1. Oracle Database의 스키마·애플리케이션 lock-in**
- 우위: Fortune 100의 98%가 Oracle DB. 한번 구축된 시스템은 5~10년+ 운영
- 정량 근거: License Support 연 $20B, 갱신율 95%+, 연 3~5% 인상
- 경쟁사 격차: AWS Aurora·Azure SQL·Postgres는 새 워크로드에서 유리, 기존 이전은 여전히 대규모 프로젝트
- 복제 난이도: **높음** (40년 누적 enterprise feature set)
- 격차 지속: 5~10년

**2. Multicloud Database Strategy (독특한 해자 확장)**
- 우위: Oracle Database@AWS, @Azure, @Google Cloud — 경쟁 클라우드 내부에서 Oracle DB 제공
- 정량 근거: multicloud DB Q3 FY26 +531% YoY. AWS/MSFT/Google 각 사 공식 파트너십
- 경쟁사 격차: SAP HANA Cloud는 ERP 한정, Snowflake는 multicloud이나 DW 한정
- 복제 난이도: **매우 높음** (하이퍼스케일러가 경쟁사 Oracle을 들인 전례 없음)
- 격차 지속: 5~10년+

**3. 수직통합 Exadata + Cloud@Customer**
- 우위: 어플라이언스 + 온프레·sovereign 환경에 OCI 그대로 배치
- 정량 근거: 금융·정부·통신 규제 산업 deal 공개 제한이나 필수 선택지
- 경쟁사 격차: AWS Outposts, Azure Stack 유사 시도이나 DB·미들웨어 완성도 ORCL 우위
- 복제 난이도: **높음** (수직통합 40년)
- 격차 지속: 5~7년

**4. 경영진 (Larry Ellison + 신임 Co-CEO)**
- 우위: Ellison(CTO, 80세) 기술·전략 주도. Clay Magouyrk(39, 전 AWS) + Mike Sicilia(54) Co-CEO
- 정량 근거: Safra Catz 11년 재임 중 시총 $200B → $500B+
- 복제 난이도: **중간** (인력풀 시간 필요)
- 격차 지속: Ellison 생존 기간 (key man 리스크)

### 투자 차별화 근거

1. **OCI의 후발주자 레버리지**: 3% → 10%+ 헤드룸. Q3 FY26 +84% vs AWS +24%가 물리적 증거
2. **RPO $553B 가시성**: 연매출 9~10배. 다년 계약으로 수익 변환 확률 정량 파악 가능
3. **Database 해자 + Multicloud의 독특함**: AWS/Azure/GCP 모두와 파트너 — 이들의 승리가 ORCL 패배가 아닌 구조

### 밸류에이션 비교

| 지표 | ORCL | 하이퍼스케일러 평균 (MSFT/AMZN/GOOGL) | 프리미엄/디스카운트 |
|------|------|-----------|------------------|
| Forward PE (FY26E) | ~23x | ~29x | -21% 디스카운트 |
| EV/Revenue | ~8.5x | MSFT 12x, AMZN 3.2x, GOOGL 7.5x | 혼재 |
| Net Debt / EBITDA | ~4.0x | MSFT 0.1x, AMZN 0.4x, GOOGL -1.0x | 과도한 레버리지 |
| RPO/Market Cap | 110% ($553B/$503B) | MSFT ~20%, AMZN ~10% | 극단적 프리미엄 |
| Forward FCF Yield | 음수 (FY26E ~-$20B) | MSFT 3%, AMZN 3%, GOOGL 4% | 가장 열위 |

**결론**: Forward PE만 보면 20% 디스카운트로 저평가로 보이나, **순부채 부담 + 수년간 음수 FCF + OpenAI 집중 리스크**를 종합 반영하면 현재 밸류에이션은 "디스카운트가 정당한 가격대". 22~25x forward PE는 성장률 대비 합리적이나, 극단 시나리오(OpenAI 이탈·debt downgrade) 하방 크게 존재.

---

## 리스크 요인

### 1. OpenAI 고객 집중도 (최대 단일 리스크) ⚠️

- **규모**: RPO $553B 중 OpenAI Stargate $300B 계약이 최대 비중 추정 (회사 비공개, 외부 추정 50%+)
- **현실화 시점**: 2027~2029 계약 이행 단계
- **시나리오 영향**: Extreme Bear (계약 30~40% 축소), Bear (scope 4.5GW → 2~3GW), Base (계약대로), Bull (+추가 hyperscale 고객)
- **완화 요인**: 장비 대부분 prepayment/고객 자체 구매 구조, 700+ AI 고객 분산, NVIDIA·AMD 등 파트너 동시 고객
- **팩트체크**: ❓ 비중 구체 수치 회사 비공개. OpenAI 2028E 적자 $74B (WSJ)는 외부 보도

**OpenAI 재무 건전성 현황**:
- 2025 매출 ~$20B (추정), Oracle 연 $60B 의무 이행 어려움
- 2028E 적자 $74B 전망 (WSJ, OpenAI 내부 문서 근거)
- MSFT·SoftBank·Nvidia 추가 투자 라운드 성공 여부가 핵심 변수

### 2. CapEx ROIC 미회수 ⚠️

- **규모**: FY26 CapEx $50B (FY25 $21B의 2.4배, FY21 $1.7B의 29배). 5년 누적 $200B+ 전망
- **현실화 시점**: 2027~2028 시험대
- **시나리오 영향**: Bear (FY28 FCF breakeven 지연), Base (FY28 FCF +$5B, FY29 $15~25B 전환), Bull (FY28 $20B+)
- **완화 요인**: customer prepayment가 CapEx $10~20B 감당

| FY | CapEx | OCF | FCF |
|-----|------|------|------|
| FY21 | $2.1B | $15.2B | $13.1B |
| FY23 | $8.7B | $17.6B | $8.9B |
| FY24 | $6.9B | $18.7B | $11.8B |
| FY25 | $21.2B | $20.8B | **-$0.39B** |
| FY26E | ~$50B | ~$25B | **~-$25B** |
| FY27E | ~$45~50B | ~$30B | ~-$15~20B |

- **팩트체크**: FY25 공시 ✓. 미래 궤적 추정 ⚠️

### 3. 부채 급증 + 신용 리스크 ⚠️

- **규모**: Long-term Debt $100B (+24% YoY), Total Debt $162B, Net Debt ~$123B. Debt/Equity 345%
- **현실화 시점**: 2026~2027 차환·추가 조달
- **시나리오 영향**: Extreme Bear (BBB- → BB 강등, 차환 비용 +200~300bp, 희석), Bear (outlook negative 유지), Base (FY28 deleveraging), Bull (S&P A- 복귀)
- **완화 요인**: Cash $39B + Q3 FY26 $30B 조달 완료
- **팩트체크**: 부채 공시 ✓. CDS 125bp 시장 데이터 ✓. KeyBanc +$100B 추정 ⚠️

**시장 경고 신호**:
- CDS spread 125bp (2009 금융위기 수준)
- Moody's Baa2 / S&P BBB 공식 유지하나 bond secondary에서 junk 거래
- 분기 이자비용 >$1B (연 $4B+)

### 4. 전력·부지·인허가 병목 ⚠️

- **규모**: Stargate 7 GW 계획 중 현재 가동 1.2 GW (Abilene), 나머지 ~5.8 GW 건설 중
- **현실화 시점**: 2026 2H~2027
- **시나리오 영향**: Bear (6~18개월 지연으로 FY27~28 매출 가이드 하향), Base (일부 지연이나 궤도 유지), Bull (예상보다 빠른 가동)
- **완화 요인**: Abilene 1.2 GW 실제 가동 (precedent), 공급업체(Flexential, Crusoe, Vantage 등) 다변화
- **팩트체크**: ✓

### 5. 하이퍼스케일러 가격 경쟁 ⚠️

- **규모**: AWS/Azure/GCP 합산 CapEx $340B+ (FY26E) vs ORCL $50B
- **현실화 시점**: 진행 중
- **시나리오 영향**: Bear (OCI GM 32% → 25% 압박), Base (ORCL 소규모로 상대 영향 제한), Bull (수요>공급 지속)
- **팩트체크**: ✓

### 6. Oracle Health (Cerner) 지속 부진 ⚠️

- **규모**: 2022 인수 $28.3B, 분기 매출 ~$1.5B (추정)
- **현실화 시점**: FY26 잔여 분기
- **시나리오 영향**: Bear (감액 리스크)
- **완화**: 규모 제한적, 기업 전체 영향 제한
- **팩트체크**: CEO 가이드 ⚠️ (FY26 return to growth 미검증)

### 7. Larry Ellison Key Man ⚠️

- **리스크**: 80세, 여전히 CTO+Board Chair. OpenAI·TikTok 관심 등 주요 deal 직접 주도
- **현실화**: 이벤트형
- **완화**: Co-CEO 체제 안착 (2025-09부터 1년+), Ellison 건강 관리, Magouyrk·Sicilia 승계 안정화
- **팩트체크**: ❓ 미래 이벤트

### 8. DB 탈Oracle 장기 구조 ⚠️

- **리스크**: AWS Aurora·Azure SQL·Snowflake·Databricks가 신규 워크로드 흡수
- **현실화**: 5~10년 점진적
- **완화**: Multicloud Database@{Cloud} 전략으로 위험을 기회로 전환
- **팩트체크**: 구조적 트렌드 ✓

### 리스크 독립성

- **독립적**: Cerner 부진(규모 작음), Ellison key man(이벤트형), DB 탈Oracle(장기 구조)
- **상관**: OpenAI + CapEx + 부채 (세 리스크 매우 상관. 하나가 현실화되면 연쇄)
- **독립 자산**: License & Support 연 $20B, NetSuite ~$4B, Fusion ~$4B는 OCI 독립. OCI 실패해도 이들 현금흐름 유지 → 붕괴 시 최소 방어선

---

## 가치평가

### DCF 방법론

- **적용 방식**: **E. Forward Multiple** (3년 후 FY29 정상화 EPS × PE, 10% 할인)
- **선택 근거**: Oracle은 FY25~FY28 사이 $200B+ 누적 CapEx 집중 투자 사이클에 있어 수년간 FCF가 -$10B~-$25B 수준 음수 지속. Standard FCF DCF는 Terminal Value 95%+ 차지해 기술적 불가. OpenAI $300B 계약이 RPO에 거대 비중 → 미래 정상화 EPS가 실제 밸류 결정
- **대안 대비 우위**:
  - FCF DCF: FY25~FY28 FCF 음수로 사용 불가
  - SOTP: 세그먼트별 operating income 상세 공시 없어 수치 기반 취약 (partial SOTP는 cross-check 용도만)
  - Excess Returns/NAV: 은행·REIT 아님
- **주요 가정**:
  - FY29E EPS 시나리오별 $8~$17
  - 적용 PE: 12x ~ 26x (ORCL 10년 실측 forward PE 범위 12~35x, AI 정점 2025 Q3 40x+는 일시적)
  - 할인율 10%, 희석 주식수 2.92B → FY29 2.95B
  - 10Y Treasury 4.15%

### 시나리오 요약

| 시나리오 | 확률 | 목표가 (PV) |
|---------|------|-------|
| Extreme Bear | 20% | $72 |
| Bear | 25% | $124 |
| Base | 35% | $215 |
| Bull | 20% | $332 |

**Extreme Bear (20%)**: OpenAI가 2027~2028 재무 위기로 Stargate 계약 30~40% 축소 또는 prepayment 부족. Oracle 신용등급 BBB- → BB(junk) 강등, 차환 비용 급증. AI GPU 가격 경쟁으로 OCI GM 30% → 22%. FY29E EPS $8 × PE 10~14x → 3년 할인 $72. 진입 신호: OpenAI 공식 Stargate 감축 발표 / Moody's·S&P BBB- 강등 / OCI GM 25% 미만.

**Bear (25%)**: OpenAI 계약 유지되나 scope 축소 (4.5GW → 3GW). OCI 성장 감속 (+84% → +40% FY29). CapEx FY28까지 높게 유지. OCI GM 28%. 이자비용 증가로 EPS 성장 제약. FY29E EPS $11 × PE 13~17x → $124. 진입 신호: Stargate 1~2개 사이트 지연 / OCI 성장률 60% 미만 / 신용 outlook negative.

**Base (35%)**: Stargate buildout 가이드대로 (Abilene precedent). OCI $100B+ 매출 FY29 달성. RPO $553B 중 70%+ 변환. OCI GM 32% 유지. FY28부터 FCF 정상화, deleveraging 시작. FY29E EPS $13 × PE 20~25x → $215. 진입 신호: Q4 FY26 OCI 80%+ 유지 / RPO QoQ +$20B 누적 / Cerner YoY 흑자 전환.

**Bull (20%)**: Stargate 전체 7GW 2028~2029 완공. OpenAI 외 xAI/Meta 등 $100B+ 신규 계약. OCI 매출 FY29 $130B+ (5년 +45% CAGR). CapEx 정점 FY27로 더 빨리 도달, FY28 FCF +$30B 전환. multicloud DB 연 $20B+. S&P A- 복귀. FY29E EPS $17 × PE 24~28x → $332.

**Bull 시나리오 실현 가능성 분석**:

| 전제 조건 | 실현 가능성 | 근거 | 선행 사례 / 반례 |
|---------|---------|----|----|
| Stargate 7GW 2028~2029 완공 | 중간 | Abilene 1.2GW 가동 precedent. 나머지 5~6사이트 동시 건설 도전 | Hyperscale DC 평균 24~36개월, 병렬 진행 시 병목 위험 |
| 추가 hyperscale 고객 $100B+ | 중간 | xAI·Meta·기타 이미 초기 계약 | OpenAI 초기 부분 → 전체 확장 |
| OCI FY29 $130B+ | 중~낮 | FY26 $25B × (1.55)^3 = $93B, $130B 달성은 +70% CAGR | 2015~2019 AWS 유사 성장 precedent |
| OCI GM 32%+ 유지 | 중간 | FY26 Q3 확인. 가격 경쟁 심화 시 압박 | 하이퍼스케일러 GM 55~60% 수렴 역사 |
| 멀티클라우드 DB $20B+ | 중 | Q3 FY26 +531% YoY. 절대 규모 아직 작음 | 대체재 없음, 독특한 구조 |
| FY28 FCF +$30B | 낮~중 | CapEx 정점 전제. $50B+ 지속 시 불가 | Oracle FCF 피크 $17B (FY23) |
| S&P A- 복귀 | 낮 | 부채 축소 + 수익성 증명 필요 (3~5년) | ORCL BBB → A- 전례 2008 이전 |

- **실현 경로**: (i) Abilene 가동 증명 → (ii) 2026 2H 다른 사이트 가동 → (iii) OpenAI 외 3~5개 신규 hyperscale 계약 → (iv) OCI FY27 +80% 유지 → (v) FY28 FCF 전환 → (vi) FY29 멀티플 리레이팅
- **전제 간 독립성**: 순차적·상관 높음. Stargate 지연 시 OCI 성장·FCF 전환·신용 개선 모두 연쇄 악화. Bull은 high-beta 시나리오
- **종합 실현 확률**: 20% 적정. 상관 높은 7개 전제 모두 성공은 기하적으로 낮음. 단, OCI growth 단일 지표만 Bull 영역에 들어가도 multiple re-rating 가능하므로 10%보다는 20%가 합리
- **붕괴/전환 조건**: OpenAI 재무 위기 / OCI GM 급락 / Stargate 지연 중 하나만 발생해도 Base 또는 Bear 하향

### 가중평균 내재가치

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
```

**확률 배분 근거**:
- **Extreme Bear 20%**: CDS 125bp(2009 수준) + OpenAI 2028E 적자 $74B 전망 + 52W -49% 하락이 이미 crisis-pricing 일부 반영 → 일반 10%보다 높은 20%
- **Bear 25%**: 일반 20~30% 중앙. OCI 감속 + 부채 + 경쟁
- **Base 35%**: RPO $553B 객관적 증거, Abilene 실제 가동, Q3 정량 뒷받침. 단 OpenAI 리스크로 35% 제한
- **Bull 20%**: 가이드 15~25% 중앙. Stargate 순조 + 추가 고객 확보 필요
- EB+B = 45% (가이드 ≥35% 크게 충족)

### 현재 실적 위치

| 지표 | Q3 FY26 수치 | YoY | DCF Case 위치 |
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

**트렌드 판단**:
```
OCI 성장률: FY24 +50% → FY25 +70% → Q1 FY26 +52% → Q2 +77% → Q3 +84%
───────────────────────────────────────────────────────────────
현재 위치: Base ~ Bull 경계 (RPO는 Bull, Cloud Apps는 Bear~Base)
트렌드 방향: 가속 (OCI 더 가속) → Base 우상향 또는 Bull 방향
```

**가이던스 반영 시 방향**:
- Q4 FY26 가이드 총매출 +25~28% → Base 달성
- FY27 Outlook Cloud +40%+ → Base 유지 or Bull 진입
- CapEx $50B는 수요>공급 제약 반영 → Bull 진입의 핵심 bottleneck

**핵심 관찰**: 가장 중요한 변수는 **OpenAI 계약 이행 확인** (2027~2029). 다음은 **OCI gross margin 30%+ 유지**. 확인 시점: Q4 FY26 결산 (2026년 6월) — RPO QoQ, CapEx 진도, OCI 성장률 동시 확인.

### 가치평가 결과

| 지표 | 수치 | 평가 |
|------|------|------|
| 가중평균 내재가치 | $187 ($72~$332) | Base $215 가정 기반 |
| Base 목표가 | $215 | PE 22x × EPS $13 |
| 손익비 (Base vs Bear) | $91 업 / $91 다운 | 1.0 (중립) |
| 손익비 (Base vs Extreme Bear) | $91 업 / $143 다운 | 0.64 (다운 우세) |
| 적용 PE (Base 시나리오) | 22x forward | 역사 평균 17~20x + 성장 premium |
| 애널리스트 평균 목표가 | $261 (+49%) | 컨센서스는 Bull 가정 근처 |

**손익비 분석**:
- Bull 업사이드 = $332 − $215 = $117
- Bear 다운사이드 = $215 − $124 = $91
- 손익비 = $117 / $91 = **1.29** (약간 업사이드 우세)
- Extreme Bear 고려 시: Bear 기준 하방이 Bull 상방보다 작음 (1.29x 유리) 그러나 Extreme Bear $72까지 고려하면 $215 − $72 = $143 하방, 손익비 0.82로 반전

**결론**: Base 시나리오 달성 시 Bull 업사이드가 Bear 다운사이드보다 크지만, Extreme Bear 꼬리 위험(-67% vs Base)이 존재. 장기 Thesis(DB 해자 + multicloud + OCI 성장)는 유효. 진입 매력도 높아지는 조건: ① Bear 수준 $124 이하 (손익비 대폭 개선), ② OpenAI 2027년 계약 1차 마일스톤 이행 증명, ③ 신용 outlook 안정화.

---

## 종합 판정

```
[ ORCL ] 평가 요약
────────────────────────────────
비즈니스 퀄리티  : ✅ Wide Moat (DB lock-in + multicloud 확장 + Apps 이중 SaaS)
시장 환경        : ⚠️ AI 인프라 수요 강력 but OpenAI 집중·경쟁·부채
가치평가         : ⚠️ 가중평균 $187 / Base $215 / 손익비 Bull vs Bear 1.29 but Extreme Bear 0.82
리스크           : ⚠️ OpenAI 집중 + $50B CapEx + 부채 + CDS 125bp
────────────────────────────────
종합 의견        : 보유 (현재 수준) / 분할 매수 (Bear 수준 $120~140 진입 시)
────────────────────────────────
핵심 모니터링:
  1. OpenAI 재무 건전성 + Stargate 계약 scope (최대 단일 변수)
  2. OCI gross margin 30%+ 유지 (경쟁·공급 신호)
  3. 분기 RPO QoQ 증가분 $15B+ (수요 모멘텀)
  4. CapEx vs OCF 추이 (FY28 FCF 정상화 타임라인)
  5. 신용등급 outlook (BBB 유지)
```

**왜 매수가 아닌가**:
- Forward PE 23x는 MSFT 등 대비 20% 디스카운트로 보이나 **부채 345% + FCF 수년간 음수 + OpenAI 집중**을 반영하면 정당한 디스카운트
- CDS 125bp는 시장이 이미 crisis risk를 pricing 중. 장기 thesis 유효성보다 단기 하방 위험 우세
- Bull 시나리오의 핵심 전제(Stargate 7GW 완공 + 추가 hyperscale 계약 + OCI GM 유지) 중 하나라도 실패 시 Base 아래로 하향 연쇄
- 분할 진입이 합리적 — 현재가 기준 손익비가 Bear 꼬리 위험(-59%~-75% Stress) 고려 시 불리

**왜 매도가 아닌가**:
- **Oracle Database 40년 해자는 구조적으로 훼손되지 않음**. License & Support 연 $20B는 OCI 리스크 독립, 최소 현금흐름 방어선
- **Multicloud Database 전략은 경쟁사 클라우드 채택이 ORCL 해자를 훼손하지 않는 독특 구조**. AWS/Azure/GCP 경쟁이 모두 "Oracle 파트너"로 귀결
- **RPO $553B는 부정할 수 없는 수요 증거**. 50%+ OpenAI 비중이어도 $270B+는 기타 고객 — 이는 하이퍼스케일러 #2 Azure 수준
- **Fusion + NetSuite 이중 SaaS는 OCI 실패 시나리오에서도 Wide Moat 유지**
- 재무 위기(Extreme Bear)가 현실화되지 않는 한 구조적 매도 근거 없음

**분할 매수 근거 (DCF 시나리오 가격대 기반)**:
- Bear 수준 $120~140 진입: 손익비가 Base vs Bear 기준 $75~95 업 / $0~20 다운으로 급격히 개선
- Extreme Bear 수준 $72~85 진입: 손익비 $143+ 업 / 매우 제한적 다운. 단 이 구간은 실제 Crisis 발생 시만 가능
- OpenAI 1차 마일스톤 이행 증명 후 (2027): 현재가 대비 프리미엄 감수하고도 매수 정당

**가장 취약한 숫자**: **OpenAI의 Oracle 계약 비중** (회사 비공개). 시장 추정 50%+이나 정확한 수치 모름. 이 숫자가 60%+라면 Bear/Extreme Bear 확률 상향 조정 필요. 이 숫자가 30% 미만이라면 Base 확률 상향 조정 가능.

---

## 스트레스 테스트

> **리스크 요인과의 차이**: 리스크 요인은 DCF 시나리오 확률에 직접 반영된 위험. 스트레스는 DCF 가중평균에 반영하지 않는 외생 충격·꼬리 위험 점검용. 참고 시뮬레이션.

### 시나리오별 스트레스 테스트

#### 1. OpenAI Stargate 붕괴 — $300B 계약 해지·파산

**가정**: OpenAI 2027~2028 자금 조달 실패 (2028E $74B 적자). 시리즈 라운드 실패 + MSFT·SoftBank 추가 투자 철회. Stargate 계약 이행분 제외 전량 해지 (prepayment 몰수로 부분 회수). 다른 AI 고객(xAI, Meta) 존속하나 공백 메우지 못함. 시장이 "RPO 신뢰성 위기" 인식 → crisis 멀티플(10~12x).

**재무/밸류에이션 충격**:
- OpenAI 비중 추정 $200B 해지 → RPO $553B → $350B
- FY28 OCI 매출 $75B (Base) → $45B (-40%)
- FY29 EPS: $13 → $7 (-46%)
- Exit PE: 22x → 10x
- FY29 목표가 $286 → $70 undiscounted, 3년 할인 $53
- **주가 충격: Base $215 → $53 (-75%)**

**버티는 근거**: Prepayment 구조 (장비 대부분 고객 자금), License & Support 연 $20B 독립, Cloud Apps 연 $16B 무관, xAI·Meta·NVIDIA 등 분산

**취약 근거**: OpenAI 비중이 RPO 중 최대라는 외부 분석 일관, 데이터센터 OpenAI 맞춤 설계 존재, AI 자본시장 coinciding 경색 위험

**관찰 지표**: OpenAI 분기별 revenue·cash burn (SoftBank 간접), OpenAI 신규 투자 라운드 성공 여부 (2026~2027), Stargate 사이트 속도, RPO QoQ 증가분 <$5B 또는 감소

**실현가능성: 15%** — OpenAI 현재 상업가치 + MSFT·Nvidia·SoftBank 지원으로 전격 파산은 낮음. 단 2028E $74B 적자는 구조적. 역사적 유사: WeWork, FTX 등 unlimited funding 붕괴 사례

**Bear DCF 반영 기여**: Bear $124 × (1 − 0.75) = $31, 추가 -$93 × 15% = **-$14.0**

---

#### 2. AI 인프라 ROIC 붕괴 — 하이퍼스케일러 자본경쟁 역풍

**가정**: FY26 $50B + FY27~28 $45~50B/년 CapEx 예상 ROIC 실패. AI inference 단가 오픈소스 상용화로 -40% 급락. OCI GM 32% → 20%. CapEx 회수 주기 5년 → 10년 연장. 시장 "AI CapEx Bubble" 프레임 → 멀티플 12x 수축.

**재무/밸류에이션 충격**:
- FY29 OCI 매출 $90B (Base 유사) but GM 붕괴로 OI 절반
- FY29 EPS: $13 → $8
- Exit PE: 22x → 12x
- FY29 목표가 $286 → $96, 3년 할인 $72
- **주가 충격: Base $215 → $72 (-67%)**

**버티는 근거**: License & Support $20B/년 ROIC 불변 (AI 독립), Multicloud DB는 ORCL 자본 투자 불필요, CapEx 30~50% 감축 여력, Ellison·Catz 역사적 CapEx 규율

**취약 근거**: $50B 가이드 선언 + GPU/변압기 계약 완료 다수, AI 인프라는 commodity 성격, 이자비용 $4~5B+ 고정

**관찰 지표**: AI inference price per 1M tokens 월별, OCI GM 분기별 (30% → 25% 하회 시 경고), 하이퍼스케일러 CapEx 가이드 추가 상향, NVIDIA revenue 둔화

**실현가능성: 20%** — AI inference 수요 vs capacity 현재는 수요 우세. 단 2027~2029 역전 가능. 역사적 유사: 2000 닷컴, 2008 원유, 2016 shale CapEx 과잉 (3~5년 주기)

**Bear DCF 반영 기여**: Bear $124 × (1 − 0.67) = $41, 추가 -$83 × 20% = **-$16.6**

---

#### 3. 신용등급 Junk 강등 + 차환 위기

**가정**: 2026 2H~2027 Moody's BBB- 강등 → 2027 BB 강등 연쇄. Spread +400bp, 신규 채권 7~9%. KeyBanc 추정 $100B+ 추가 조달을 mandatory convertible만 가능 → 7~10% 희석. 시장 "financial distress" 인식.

**재무/밸류에이션 충격**:
- 연 이자비용 $5B → $10B+
- FY28 Net Income Base 대비 -25%
- FY28 희석 주식수 2.95B → 3.20B (+8% 희석)
- FY29 EPS: $13 → $9
- Exit PE: 22x → 13x
- FY29 목표가 $286 → $117, 3년 할인 $88
- **주가 충격: Base $215 → $88 (-59%)**

**버티는 근거**: Cash $39B + OCF $25~30B로 단기 유동성 충분, customer prepayment $10~20B 감당, CapEx 축소·Stargate 지연 선택 가능, Ellison 개인 주식 집중 → 희석 동기 낮음

**취약 근거**: CDS 125bp 이미 2009 수준, 부채/자본 345% 극단, FY26~FY27 FCF 음수 확정, OpenAI 축소 등 동시 충격 시 연쇄 강등

**관찰 지표**: Moody's/S&P outlook 변경 (Stable → Negative), CDS 분기별 (200bp 돌파 시 위기), interest / EBITDA (25% 초과 시 경고), Oracle bond yield vs UST spread (300bp 초과)

**실현가능성: 20%** — CDS 125bp는 BB/B 영역에 근접. 시장은 junk 리스크 pricing 중. 단 $39B 현금 + 투자등급 유지 의지로 실제 강등은 시간 지연. 역사적 유사: Intel 2023 A → BBB- 강등 (FCF 음수 + CapEx 부담 유사)

**Bear DCF 반영 기여**: Bear $124 × (1 − 0.59) = $51, 추가 -$73 × 20% = **-$14.6**

---

#### 4. AI 수출통제·규제 쇼크

**가정**: BIS 추가 규제 확대 (대중국 GPU·AI 모델·데이터센터 서비스 수출 통제 강화). Oracle Stargate 일부 고객 규제 위반 노출. EU DSA + AI Act + GDPR 집행 강화. 반독점 소송 재점화 (2015, 2020 전례). 중국·인도 sovereign cloud 부분 몰수 또는 철수.

**재무/밸류에이션 충격**:
- 해외 OCI 매출 -20~30% (APAC, EMEA)
- 규제 벌금·소송 비용 $5~15B (EU GDPR 최대 연매출 4% = ~$2.3B)
- FY29 매출 Base 대비 -10~15%
- FY29 EPS: $13 → $10
- Exit PE: 22x → 16x
- FY29 목표가 $286 → $160, 3년 할인 $120
- **주가 충격: Base $215 → $120 (-44%)**

**버티는 근거**: Oracle US 정부·국방·인텔리전스 강력 관계 (Ellison 정치 영향력), US 내부 Stargate·Abilene 규제 영향 제한, License & Support 매출 규제 거의 무관, Sovereign Cloud 전략은 오히려 EU 데이터 주권 대응에 우호적

**취약 근거**: AI 수출통제는 양당 공통 기조 → 점진 확대 추세, GDPR·AI Act 벌금 매출 비례 규모 큼, 반독점은 Oracle Java·DB pricing에 항시 내재

**관찰 지표**: BIS 신규 export control rule 분기별, EU AI Act 집행 첫 사례, Oracle 중국·인도 매출 10-Q footnote, FTC/DOJ 반독점 조사 재점화

**실현가능성: 15%** — 규제 강화 방향성은 확정이나 심각한 충격 도달 확률 제한. 미국 내 AI 인프라는 정치적 보호 자산 인식 증가. 역사적 유사: 2013 Oracle EU fine $36M, 2018 US-China semi 제재 효과 제한

**Bear DCF 반영 기여**: Bear $124 × (1 − 0.44) = $69, 추가 -$55 × 15% = **-$8.3**

---

#### 5. Larry Ellison Key Man 이벤트

**가정**: 2026~2028 Ellison(80세) 건강 이슈로 CTO·Board Chair 사임 또는 이탈. 전략 일관성 리스크: OpenAI·Stargate·TikTok 등 주요 의사결정이 Ellison 개인 베팅. Co-CEO는 운영 우수하나 vision-setter 역할 미검증. Ellison 주식 대량 이전 (신탁·자선) 시 단기 수급 충격.

**재무/밸류에이션 충격**:
- 단기 (분기): 주가 -15~25% 감정적 반응
- 중기 (1~2년): 성장 감속 (대형 신규 deal 부재) → 매출 CAGR -3~5%pt
- FY29 매출 Base 대비 -5~8%
- FY29 EPS: $13 → $11
- Exit PE: 22x → 18x
- FY29 목표가 $286 → $198, 3년 할인 $149
- **주가 충격: Base $215 → $149 (-31%)**

**버티는 근거**: Co-CEO 체제 1년+ 안착 (Magouyrk Cloud·Sicilia Industries 각자 영역), Oracle 경영진 장수 (평균 재임 10년+), DB·OCI·Fusion 기술 자산 구조적 확립 → 개인 vision 의존도 감소, Ellison 40%+ 보유 주주 구성이 급격한 전략 변화 방어

**취약 근거**: OpenAI·Stargate mega deal은 Ellison 개인 관계 기반, Wall Street 평가에 "Ellison의 공격적 AI 베팅" 프리미엄 포함, TikTok 같은 non-core 시도는 Ellison 없이 어려움, 80세는 건강 이벤트 확률 무시 불가

**관찰 지표**: Ellison 공개 등장 빈도·에너지, 13D/13F 신탁·자선 이전 공시, Magouyrk·Sicilia IR 커뮤니케이션 품질, 주요 deal에서 Ellison 직접 참여 비중

**실현가능성: 15%** — 80세 감안 3~5년 내 건강 이슈 non-trivial. 단 Ellison 건강 관리 적극 (Stanford·Emory 의료 후원, 하와이 Lanai 거주). 역사적 유사: Apple Steve Jobs (2011, 56세), Berkshire Buffett (2025 은퇴, 94세)

**Bear DCF 반영 기여**: Bear $124 × (1 − 0.31) = $86, 추가 -$38 × 15% = **-$5.7**

---

### Bear DCF 시뮬레이션 합산

| # | 시나리오 | 충격 (Base→Stress) | 실현가능성 | Bear 기여 |
|---|---------|-------|---|----|
| 1 | OpenAI Stargate 붕괴 | -75% | 15% | -$14.0 |
| 2 | AI 인프라 ROIC 붕괴 | -67% | 20% | -$16.6 |
| 3 | Junk 강등 + 차환 위기 | -59% | 20% | -$14.6 |
| 4 | 규제·수출통제 쇼크 | -44% | 15% | -$8.3 |
| 5 | Ellison Key Man | -31% | 15% | -$5.7 |
| **합계 (단순합산)** | | | | **-$59.2** |

**동조성 해석**:
- **상관 높음**: #1(OpenAI) + #2(ROIC) + #3(Junk 강등)은 강력 상관. OpenAI 이탈 → AI ROIC 부정 신호 → 신용 강등 연쇄 가능
- **독립**: #4(규제)와 #5(Ellison)는 위 3개와 대체로 독립
- **동조성 보정**: #1~#3 상관 0.6~0.7 가정, #4·#5는 0.2 수준
- 단순합산 대비 동조성 보정 시 **-$42 ~ -$48** 수준이 현실적
- 동시 모두 발생하지는 않으나 2~3개 조합은 현실적 꼬리 위험

### Bear → Stress 반영 시 비교

```
Base 파일 Bear 중간값:           $124
Base 파일 Extreme Bear 중간값:   $72
──────────────────────────────────────
Bear 단순합산 적용:              $124 − $59 = $65
Bear 동조성 보정 적용:           $124 − $45 = $79
──────────────────────────────────────
시사점: 스트레스 충격은 Bear를 Extreme Bear 수준($72)까지 끌어내리는 규모.
      동조성 보정해도 $79 ~ $65 범위로 Extreme Bear 근처.
```

**해석**: Bear 시나리오는 이미 상당 부분 OpenAI·CapEx·부채 리스크 반영 중. Stress는 Bear 시나리오들이 **동시에** 현실화되는 꼬리 확률을 정량화. **Revaluation 가중평균에는 반영하지 않는다**는 점 명시. 실제 투자 판단에는 Revaluation 가중평균 기준. Stress는 "하방 극단에서 무엇이 일어날 수 있는가" 점검용.

---

## 모니터링 지표

| 구분 | 모니터링 항목 | 기준값 | 현재 | 시나리오 연결 |
|------|------------|-------|------|-------------|
| 해자 (OCI) | OCI IaaS YoY 성장률 | 70%+ 유지 | ✅ +84% | <60% Bear, <40% Extreme Bear |
| 해자 (OCI) | RPO QoQ 증가분 | $15B+ 유지 | ✅ +$29B | <$5B 또는 감소 시 Extreme Bear |
| 해자 (OCI) | AI capacity gross margin | 30%+ 유지 | ✅ 32% | <25% Extreme Bear |
| 해자 (OCI) | Multicloud DB 매출 성장 | 200%+ 유지 | ✅ +531% | <100% Bear |
| 해자 (Apps) | NetSuite YoY 성장률 | 15%+ 유지 | ⚠️ +14% | <10% Bear |
| 해자 (Apps) | Fusion ERP YoY 성장률 | 15%+ 유지 | ⚠️ 추정 +10~15% | <10% Bear |
| 해자 (Apps) | Oracle Health (Cerner) | Positive YoY 전환 | ❌ 부진 지속 | 감액 발생 시 Bear |
| 해자 (License) | License Support 갱신율 | 95%+ 유지 | ⚠️ 비공개 | 해지율 급증 시 Bear |
| 경영진 | Larry Ellison 상태 | 일선 유지 | ✅ | 이탈 시 Stress #5 |
| 리스크 1 | OpenAI 재무·자금 조달 | OpenAI Q별 매출 감소 or 자금 실패 | ⚠️ $74B 2028 적자 전망 | 실패 시 Extreme Bear + Stress #1 |
| 리스크 1 | OpenAI 계약 scope | Stargate capacity 감축 발표 | ✅ 현재 확장 중 | 축소 시 Extreme Bear |
| 리스크 2 | 분기 FCF | -$5B 초과 악화 | ⚠️ -$10B/분기 | 악화 시 Bear |
| 리스크 3 | 신용등급 | BBB → BBB- 강등 | ⚠️ CDS 125bp | 강등 시 Extreme Bear + Stress #3 |
| 리스크 3 | 분기 이자비용 | $1.2B 초과 | ⚠️ $1B+ | 초과 시 Bear |
| 리스크 4 | Stargate 사이트 on-schedule | 분기별 capacity 추가 | ✅ Abilene 가동 | 지연 시 Bear |
| 리스크 5 | OCI gross margin | 30% 미만 | ✅ 32% | <25% Extreme Bear + Stress #2 |
| 매크로 | 10Y Treasury | 5.0% 초과 | ✅ ~4.15% | >5% 시 밸류 압박 |
| 매크로 | 엔터프라이즈 IT 예산 | Gartner -5% | ✅ 2026 +8% | <0% 시 Bear |
| 경쟁 (OCI) | AWS/Azure/GCP 대비 성장률 | OCI 최상위 유지 | ✅ OCI 가장 빠름 | 하회 시 Bear |
| 경쟁 (OCI) | Top 3 AI 고객 이탈 | OpenAI·xAI·Meta 1개 이탈 | ✅ 유지 | 이탈 시 Extreme Bear |
| 경쟁 (Apps) | NetSuite vs Workday HCM | NetSuite 선도 | ⚠️ 턱걸이 | Workday 초과 시 Bear |
| 경쟁 (Apps) | Fusion vs SAP S/4HANA | Fusion 경쟁력 | ⚠️ SAP가 빠름 | SAP 격차 확대 시 Bear |
| 경쟁 (DB) | Aurora·Snowflake 성장 | Oracle DB 점유율 방어 | ⚠️ 진행 중 (장기) | 급격 가속 시 Bear |

### 즉시 재검토 트리거

- **OpenAI 계약 축소 또는 연체 공식 발표** (또는 OpenAI 유동성 위기 발생)
- **Moody's 또는 S&P 신용등급 Investment Grade (BBB-/Baa3) 이하 강등**
- **분기 RPO 감소** (Q4 FY26 또는 이후 QoQ 음수)
- **OCI gross margin 25% 미만** 하락 (가격 경쟁 본격화 신호)
- **Stargate 주요 사이트 건설 중단/취소** 발표
- **Larry Ellison 건강 이슈 또는 CTO/Board Chair 사임** 공식 발표
