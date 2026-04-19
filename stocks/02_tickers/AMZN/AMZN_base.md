# AMZN — Amazon.com, Inc.
> 세계 최대 E-commerce + 1위 클라우드 인프라(AWS ~32% MS) + Top-3 디지털 광고 플랫폼 (3 이질 세그먼트 복합기업: AWS 20% 매출 / 57% OI, 리테일+광고 80% 매출 / 43% OI)

---

## 투자 thesis

- **AWS: 구조적 네트워크 효과 + 전환비용 해자의 AI 재가속** → 네트워크 효과 + 전환비용: FY25 매출 $128.7B(+20% YoY), Q4 $35.6B(+24% YoY, 13개 분기 중 최고 가속), 운영이익률 35.4%, backlog $244B(+40% YoY), 시장점유율 32% 유지 (vs Azure 23%, GCP 11%)
- **광고: 리테일 트래픽 기반 폐쇄형 광고 생태계의 고마진 성장엔진** → 네트워크 효과 + 효율적 규모: FY25 광고 매출 $68B+(+22% YoY), Q2 $15.7B(전체 매출의 9.36% 사상 최고), 리테일미디어 $60.6B(Prime Video·Twitch 제외)
- **Prime 기반 폐쇄형 소비자 네트워크 + 전환비용** → 네트워크 효과 + 무형자산: 글로벌 Prime 260M(US 185M, 미국 가구 77%), 연 평균 소비 $1,400/인, 미국 E-commerce 점유율 37.6%

**매수 근거 작성일**: 2026-04-19
**현재가**: $250.56 (2026-04-17 종가, 52주 고점 $258.60 대비 -3.1%, 저점 $165.29 대비 +51.6%, YTD +8.5%)
**목표가**: $218 (Base DCF 가중평균 내재가치 — 아래 8-3 참조)
**투자 기간**: 5년

> 현재가 대비 가중평균 내재가치 **-13%** (현재가가 내재가치 대비 15% 프리미엄 반영). 보수적 판정 기준(20%+ 할인) 미달 → 본 세션 결과는 **"보유"**, Bear 진입 시(~$190) 분할 매수 검토. 상세는 9번 종합 판정.

> 참고: Street consensus mean target ~$291 (Strong Buy, 72 analysts, 범위 $227~$360). 본 Base가 consensus 대비 24% 보수적인 이유는 (a) $200B CapEx의 단기 FCF 파괴와 monetization 지연, (b) AWS 2027~2030 capacity-constraint 해소 이후 경쟁 재점화 가정, (c) 10Y Treasury 4.26% 기반 WACC 8.5% 적용. 상세는 섹션 8.

---

## 사업 구조 및 경제적 해자

### 2-1. 세그먼트 구조 요약

FY2025 (12/31/2025 종료) 연간 매출 $716.9B 기준 (Amazon 10-K, 8-K):

| 세그먼트 | 수익원 | 규모 지표 (FY25) | 해자 유형 | 해자 강도 |
|---------|------|---------|---------|---------|
| **AWS** | 클라우드 인프라(IaaS/PaaS), AI 인프라(Trainium/Bedrock), 엔터프라이즈 구독 | $128.7B (18%) / OI $45.6B (57% of total) / 35.4% margin | 전환비용, 네트워크 효과, 효율적 규모, 무형자산(인증/아키텍처) | Wide |
| **North America (리테일+광고)** | 1P/3P 커머스, Prime 구독, 풀필먼트 수수료, 광고 | ~$440B (61%) / 마진 개선 중 | 네트워크 효과, 규모(물류/데이터), 전환비용(Prime) | Wide |
| **International (리테일+광고)** | 해외 커머스, 해외 광고, 해외 Prime | ~$148B (21%) / 마진 저조 | 네트워크 효과(일부 지역), 규모 | Narrow |
| (별도 공시) **Advertising** | 스폰서드 프로덕트·브랜드·디스플레이·Prime Video 광고·Twitch | ~$68B 별도 공시, NA/Intl에 분산 | 효율적 규모(리테일 트래픽), 네트워크 효과(퍼스트파티 데이터) | Wide |

> 출처: Amazon 2025 Annual Report / 10-K (FY25 revenue $716.9B, AWS $128.7B, OI $80B), Amazon Q4 2025 8-K, eMarketer 2025 retail media forecast. Advertising은 별도 세그먼트가 아닌 NA/International 내 공시 라인.

**매출 성장 구조 (FY25)**:
- AWS: +20% (가장 빠른 성장)
- 광고: +22% (Q2 기준)
- NA 리테일: +11% (평균 10~12%)
- International: +9% (FX 조정)
- 전체: +12%

### 2-2. 세그먼트별 상세

#### AWS — 전환비용 + 네트워크 효과 + 효율적 규모

**사업 구조**: 글로벌 클라우드 인프라 1위. IaaS(EC2, S3) / PaaS(Lambda, RDS) / AI 인프라(Bedrock, SageMaker, Trainium/Inferentia 커스텀 칩)로 구성. Q4 2025 매출 $35.6B(+24% YoY, 13개 분기 중 최고 가속), annualized run rate $142B, backlog $244B(+40% YoY). AWS 영업이익률 35.4%로 Amazon 전체 OI의 57% 기여.

| 해자 유형 | 내용 |
|---------|------|
| **전환비용 (핵심)** | 엔터프라이즈의 VPC 아키텍처·IAM 권한·데이터베이스 마이그레이션·애플리케이션 재작성 비용. 마이그레이션 완료 기업의 30~50% 소프트웨어/인프라 재작성 필요. 다년 계약(backlog $244B) 자체가 전환비용 계량화 |
| **네트워크 효과** | AWS Marketplace(제3자 SW), Partner Network, ISV 생태계 — 200+ 서비스가 서로를 강화. 개발자 인증(Certified Solutions Architect 등) 생태계 수백만 규모 |
| **효율적 규모** | 글로벌 33개 region, 105개 AZ, 500+ PoP — 신규 경쟁자가 물리 인프라(데이터센터, 전력, 해저케이블)를 복제 불가 |
| **원가 우위 (새롭게 부상)** | Graviton(ARM CPU), Trainium(AI 학습), Inferentia(추론) 커스텀 실리콘 — 동급 x86/Nvidia 대비 30~40% TCO 절감. 커스텀 칩 매출 $20B+ (triple-digit 성장) |

**AWS 경쟁 구도 (2026 Q1 기준)**:

| 제공자 | 매출점유율 | YoY 성장 | 핵심 강점 |
|--------|---------|--------|---------|
| **AWS** | 32% | +24% | 스케일, 생태계, 커스텀 실리콘 |
| Azure | 23% | +31% | MS 엔터프라이즈 번들, OpenAI 파트너십 |
| GCP | 11% | +26% | AI/ML (Gemini/TPU), 데이터 분석 |
| 기타 | 34% | — | Alibaba/Oracle/IBM 등 |

**AI 인프라 현황 (2026 Q1)**:
- AWS AI 매출 run rate: **$15B** annualized
- 커스텀 칩(Graviton+Trainium+Inferentia) 매출: **$20B+**
- Trainium2 **fully sold out**, Trainium3 2026 초 고객사 인도 개시 (대부분 예약)
- 주요 고객: Anthropic($4B 투자 + 수년 독점 ASIC 파트너), OpenAI(일부 워크로드 공유), Apple(일부 워크로드)

#### North America (리테일 + 광고) — 네트워크 효과 + 규모 우위

**사업 구조**: 1P(자체판매) + 3P(Marketplace 수수료) + Prime 구독 + 광고. 미국 E-commerce 시장 점유율 37.6% (vs WMT 6.4%, AAPL 3.6%, eBay 3%). Prime 회원 미국 180.1M, 미국 가구 77% 침투율. Q4 2025 NA 운영이익률이 사상 최고 수준 (물류 지역화·Same-day 네트워크 성숙으로 단위경제 개선 중).

| 해자 유형 | 내용 |
|---------|------|
| **네트워크 효과 (3P 마켓플레이스)** | 판매자 → 소비자 풀 확대 → 더 많은 판매자 — 200M+ SKU, 3P가 전체 판매 유닛의 60%+ |
| **규모 우위 (물류)** | 600+ fulfillment center, 500+ delivery station, Prime Air/Rivian EV 배송 30,000대 — 같은 단위비용으로 복제 불가. 2024~25 물류 지역화(8 region → 80+ mini-region)로 last-mile 비용 20%+ 절감 |
| **전환비용 (Prime)** | 연 $139 구독 + $1,400 평균 지출 매몰 — 다른 리테일러로 이탈 시 Prime Video/Music/Reading 손실 |
| **데이터 자산** | 퍼스트파티 구매 데이터 (search-to-purchase 완전 추적) — 광고 타겟팅 + AI 추천 엔진 |

#### International — 네트워크 효과 (지역별 차등)

**사업 구조**: 영국·독일·일본이 코어 흑자 시장. 인도·멕시코·UAE는 투자 단계. 2024년 분기에 사상 첫 흑자 전환, FY25 누적 흑자화. 매출 +9% YoY, 마진 개선 중.

| 해자 유형 | 내용 |
|---------|------|
| **네트워크 효과 (성숙 시장)** | 일본·독일·영국은 1위 E-commerce. 미국 대비 5~10년 뒤진 밀도이나 구조적으로 유사 |
| **규모 우위 (지역별)** | 성숙 시장에서는 물류 네트워크가 진입장벽이지만, 신흥 시장(인도)은 Flipkart/현지 플레이어와 동률 |

#### Advertising — 효율적 규모 + 퍼스트파티 데이터

**사업 구조**: 리테일 트래픽 위에 얹은 광고 플랫폼. 스폰서드 프로덕트(검색광고) + 디스플레이 + Prime Video 광고(2024년 론칭) + Twitch. 2025 추정 매출 $68B (+22% YoY). 리테일 미디어 $60.6B(eMarketer). Q2 2025에 전사 매출 9.36% 점유(역대 최고).

| 해자 유형 | 내용 |
|---------|------|
| **효율적 규모** | 리테일 트래픽(월 3B+ 방문)에 광고 삽입 — 한계비용 ≈ 0. 광고 마진 추정 55~65% |
| **퍼스트파티 데이터** | 완전한 search-to-purchase attribution — Apple ATT, Google Cookie 종료 이후 차별적 우위 |
| **네트워크 효과 (판매자)** | 판매자가 Amazon SKU 노출 확보 위해 광고비 지출 강제 (SEO 수준 하락) |

**광고 서브 비즈니스 (2025e)**:
| 서브 | 매출 | 성장 |
|------|------|------|
| 스폰서드 프로덕트 (검색광고) | ~$42B | 15~18% |
| 디스플레이 (DSP) | ~$15B | 25% |
| Prime Video 광고 | ~$7B | 100%+ (론칭 후 급증) |
| Twitch | ~$4B | 10~15% |

---

## 해자 팩트체크

### AWS 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| 클라우드 MS 1위 32% 유지 | Synergy Research, CRN, SDxCentral 2026 Q1 보도 일치 | ✅ |
| AWS 가속 +24% Q4 2025 | 13개 분기 중 최고 성장률, MSFT Azure +31%에는 못 미치나 규모 2배 | ✅ |
| Backlog $244B (+40% YoY) | Q4 2025 8-K 공식 공시, 전년 동기 $175B 대비 | ✅ |
| 운영이익률 35.4% | FY25 AWS OI $45.6B / 매출 $128.7B — 10-K 확인 | ✅ |
| Trainium2 sold out | Jassy (2025.12) + TechCrunch 보도 + AWS re:Invent 2025 발표 | ⚠️ (회사 공시) |
| 커스텀 칩 매출 $20B+ | Jassy Q4 2025 언급, Motley Fool 보도 | ⚠️ (회사 공시) |
| AI 매출 $15B run rate | 2026 Q1 언급 (분기 자료) | ⚠️ (회사 공시) |
| Anthropic $4B 투자 + ASIC 독점 | Amazon·Anthropic 공동 공시 2023~2024 | ✅ |

**해자 리스크**:
- **Azure 추격 가속**: Azure +31% vs AWS +24% — 장기 MS 점유율 축소 가능. MSFT-OpenAI 독점 약화(Bain 경영진 개편) 이후 관계 동학 재조정 가능. 현실화 시점: 2026~2028 진행 중
- **하이퍼스케일러 CAPEX 군비경쟁**: MSFT $100B+ / GOOGL $75B+ / META $85B+ / AMZN $200B+ — AI capacity 과잉 공급 리스크 2027~2028
- **커스텀 칩 Moat의 지속성**: Nvidia 2027~2028 Blackwell Ultra/Rubin 세대가 Trainium 성능 격차 역전 가능. 고객 이탈 리스크 — 시점 2027+

### Advertising 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| FY25 광고 매출 $68B+ | eMarketer 2025, Amazon Q2 2025 어닝스 공시 ($15.7B Q2) | ✅ |
| 광고 매출 22% YoY 성장 | Q2 2025 기준, marketing dive 보도 | ✅ |
| 광고 비중 9.36% (전체 매출) | Q2 2025 분기 — Amazon 사상 최고 | ✅ |
| 리테일 미디어 점유율 1위 | eMarketer: Amazon이 글로벌 리테일 미디어 50%+ 과점 | ✅ |
| Prime Video 광고 첫 사이클 | 2024년 기본 탑재, 옵트아웃 $3/월 → 추정 $7B 광고 매출 | ⚠️ (회사 공시) |
| 광고 마진 55~65% | Amazon 비공개, 분석가 추정 (Pepperstone, deepresearch 등) | ⚠️ (추정) |

**해자 리스크**:
- **광고 주가 승수에 대한 할인**: META/GOOGL은 순수 광고회사로 18~24x EV/EBITDA, Amazon 광고는 별도 공시 없이 mixed multiple로 평가 — 가치 평가 할인 지속
- **Prime Video 광고 수용성 역풍**: 사용자 이탈 가능성 — 현재까지는 낮은 이탈률이지만 2026 경쟁사(Netflix 광고, Disney+)와 비교해 가격 인상 여력 제한

### North America 리테일 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| US E-commerce MS 37.6% | mobiloud, demandsage 2025 통계 | ✅ |
| Prime 글로벌 260M / US 180M | Amazon IR (Prime Day 2025), Statista | ✅ |
| 미국 가구 Prime 침투율 77% | Consumer Intelligence Research Partners (CIRP) | ✅ |
| Prime 평균 연 지출 $1,400 | CIRP 2024~2025 자료 | ⚠️ (서드파티) |
| 3P 비중 60%+ | Amazon IR 연례 보고 | ✅ |
| Same-day delivery 커버리지 확대 | Q4 2025 Jassy 코멘트 | ⚠️ (회사 공시) |
| 물류 지역화 원가 절감 | FY24~25 NA 마진 6%→Q4 25 ~7% 개선 — SEC filing 확인 | ✅ |

**해자 리스크**:
- **WMT + Shopify 연합의 3P 경쟁**: WMT Marketplace $100B GMV 돌파, Shopify가 판매자 채널로 Amazon 대체. 현실화 5~7년
- **FTC 반독점 트라이얼 2026.10**: 판매자 Marketplace 강제 요구·Buy Box 알고리즘 차별 혐의 — 판결 시점 2027+
- **TikTok Shop/Temu/Shein 파편화**: 저가 상품군 침투 — Amazon Haul 대응 중

### International 리테일 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| FY25 International 흑자 전환 | Q4 24 분기 흑자 → FY25 연간 흑자 유지 (Annual Report) | ✅ |
| 인도 MS 2위 (Flipkart 1위) | Statista India E-commerce share | ⚠️ (경쟁 치열) |
| 일본·독일·영국 1위 | 현지 업계 리서치 일치 | ✅ |
| EU DMA 준수 Buy Box/데이터 변경 | 2026.03 시행, Amazon 자발 공시 | ✅ |

**해자 리스크**:
- **중국 플레이어 파편화 공세**: Temu(PDD), Shein이 유럽·북미 유사 모델로 침투 — 저가 SKU 침식
- **EU DMA 확대 제재**: 2026~2027 추가 조치 가능성 (추가 Buy Box 개방, 3P 데이터 사용 제한)
- **인도 시장 손익분기 지연**: 2023년 Seller 정책 변경 이후 성장 둔화

### 해자 리스크 종합

| 세그먼트 | 핵심 모트 리스크 | 현실화 시점 |
|---------|--------------|-----------|
| AWS | Azure/GCP 점유율 추격 + 커스텀 칩 우위 지속성 | 2026~2028 진행 중 |
| AWS | 하이퍼스케일러 CAPEX 과잉(수요 미스매치) | 2027~2029 |
| Advertising | 광고 마진 가시성 한계 · Prime Video 광고 수용성 | 2026~2027 |
| NA 리테일 | WMT + Shopify + TikTok Shop 3P 침식 | 2028~2032 |
| NA 리테일 | FTC 반독점 트라이얼 (Marketplace/Buy Box) | 2027~2029 |
| International | Temu/Shein 저가 침투, EU DMA 확대 | 2026~2028 진행 |

---

## 해자 강도 평가 — "이 정도 리스크면 충분히 높은 해자인가?"

### 평가 기준
Morningstar Wide Moat 기준: "향후 20년 이상 초과이익을 유지할 수 있는 구조적 우위"
→ 리스크의 현실화 시점이 투자 기간(5년)보다 먼 경우 해자 유효로 판정

### 식별된 해자 리스크 vs 현실화 시점

| 리스크 | 내용 | 현실화 시점 | 해자 훼손 정도 |
|--------|------|-----------|--------------|
| Azure 추격 | MS 엔터프라이즈 번들 + OpenAI 파트너십 | 2026~2028 진행 | 중간 (AWS 성장률 둔화 가능하나 점유율 붕괴 없음) |
| 하이퍼스케일러 CAPEX 과잉 | $500B+ 연 공급 증설 | 2027~2029 | 중간 (margin 일시 압축) |
| 커스텀 칩 격차 역전 | Nvidia Blackwell Ultra/Rubin | 2027+ | 중간~높음 (Trainium 의존 고객 이탈 가능) |
| WMT + Shopify 연합 | 3P 판매자 다채널화 | 2028~2032 | 낮음 (밀도 격차 5년 이상) |
| FTC 반독점 트라이얼 | 2026.10 시작 | 2027~2029 판결 | 낮음~중간 (Consent Decree 시 운영 제약) |
| EU DMA 확대 | Buy Box / 데이터 공유 | 2026~2028 진행 | 낮음 (수익성 충격 제한적) |
| Temu/Shein 저가 침투 | 크로스보더 직배송 | 2026~2028 | 낮음 (Amazon Haul 대응) |

### 판정
**AMZN = Wide Moat ✅**

핵심 근거 3가지:
① **시간 지평 관점**: 단일 해자 의존이 아니라 **4개 독립 해자 레이어**(AWS 전환비용 / Prime 네트워크 / 광고 데이터 / 물류 규모)가 병렬 작동. 한 레이어가 5년 내 훼손되어도 나머지 3개가 방어 — 20년 초과이익 유지 구조
② **전략적 헤지 관점**: AWS Moat가 OpenAI-MSFT 위협에 노출되더라도 커스텀 실리콘(Trainium/Graviton)이 원가우위로 전환되어 hedge. 광고가 리테일 마진 둔화 hedge
③ **계약/구조적 보호 관점**: AWS Backlog $244B(+40% YoY)는 다년 계약으로 5~7년 매출 visibility 확보. Prime 구독 260M도 유사 안정성

**단, 주의 구간**:
- **AWS YoY 성장률이 14% 이하로 재둔화**하면 구조적 점유율 축소 신호 — Azure/GCP 점유율 지속 상승과 병행 시 해자 Narrow 재판정 가능
- **커스텀 칩 차세대(Trainium3→Nvidia Blackwell Ultra/Rubin) 성능 격차**: 2027 벤치마크 결과가 해자 지속 여부 결정
- **광고 매출 성장률이 15% 이하**로 둔화 시 Prime Video 광고 carry-over 효과 소진 신호

---

## 경쟁 구도 및 경쟁 우위

### 5-1. 경쟁사 식별 및 포지셔닝

Amazon은 3개 이질적 경쟁 영역에서 동시 경쟁하므로 **영역별** 경쟁사를 식별한다.

**클라우드 (AWS)**:

| 경쟁사 | 시가총액 | 핵심 사업 영역 | 시장점유율 | 포지셔닝 |
|--------|---------|-------------|----------|---------|
| **AMZN (AWS)** | $2.69T (전체) | 범용 클라우드 + AI 인프라 | 32% | 스케일·생태계 1위 |
| MSFT (Azure) | ~$3.2T (전체) | 엔터프라이즈 번들 + OpenAI | 23% | 가속 성장 2위 |
| GOOGL (GCP) | ~$2.6T (전체) | AI/ML 네이티브 | 11% | 기술·데이터 3위 |
| ORCL (OCI) | ~$900B | DB·엔터프라이즈 | 5% | DB 전환 특화 |
| 기타 (IBM/Alibaba) | — | 지역/특화 | 6% | |

**E-commerce**:

| 경쟁사 | 시가총액 | 핵심 사업 영역 | 시장점유율 (US) | 포지셔닝 |
|--------|---------|-------------|----------|---------|
| **AMZN** | $2.69T | 전체 커머스 + Prime | 37.6% | 1위 통합 플랫폼 |
| WMT | ~$800B | 식료+리테일+Marketplace | 6.4% | 옴니채널 2위 |
| AAPL | ~$3.0T | Apple Store | 3.6% | 디지털 굿즈 |
| Shopify | ~$180B | 판매자 인프라 (3P 플랫폼) | 비교 불가 (GMV $260B) | D2C 인프라 |
| TGT | ~$70B | 리테일 | 2% | 옴니채널 |
| 중국 파편화 (Temu/Shein) | PDD $200B+ | 저가 크로스보더 | 2~3% (성장 중) | 가격 파괴자 |

**디지털 광고**:

| 경쟁사 | 광고 매출 2025e | 성장 | 포지셔닝 |
|--------|---------|------|---------|
| GOOGL | $280B+ (검색+YouTube+Network) | +11% | 검색 독점 |
| META | $180B+ (Facebook/Instagram/WhatsApp) | +19% | 소셜 1위 |
| **AMZN** | $68B+ | +22% | 리테일 미디어 1위 (고속 성장) |
| TikTok | ~$33B | +30%+ | 숏폼 신규 |
| Reddit/Pinterest | $1~4B | 가변 | 니치 |

### 5-2. 핵심 성장동력 경쟁 비교

**성장동력 1: AWS vs Azure vs GCP**

| 지표 | AWS | Azure | GCP | 판정 |
|---------|---------|---------|---------|------|
| 2025 매출 | $128.7B | ~$75B | ~$45B | 🥇 AWS |
| YoY 성장 | +20% (FY25) / +24% (Q4) | +31% (FY26 Q2) | +26% (Q4 25) | 🥉 AWS |
| 운영이익률 | 35.4% | ~45% (부분 공시) | ~18% | 🥈 AWS |
| AI 인프라 run rate | $15B | $25B+ (MS Foundry/Copilot) | $8~10B | 🥈 AWS |
| 시장점유율 | 32% | 23% | 11% | 🥇 AWS |
| Backlog | $244B | 비공식 $300B+ | ~$80B | 🥇/🥈 |
| 커스텀 실리콘 성숙도 | Trainium2/3 sold out | Maia (초기) | TPU v5p/v6 (성숙) | 🥇/🥉 |

**판정 근거**: AWS는 규모/생태계/수익성에서 1위이나 **성장률**에서 Azure에 뒤짐. AWS +24% 재가속은 capacity 확장의 결과이며, 절대 규모가 Azure 대비 1.7배 큼을 감안하면 여전히 분출력 강함.
- **AMZN 차별화**: 커스텀 실리콘(Trainium)이 Nvidia TCO 대비 30~40% 절감 → AI 시대 원가 우위. Azure/GCP는 Nvidia 의존도 높음
- **추월 불가 근거**: Azure/GCP가 30%+ 성장 지속하더라도 향후 5년간 AWS 규모 추월 수학적 불가 (대수 격차)

**성장동력 2: 광고 (vs META/GOOGL/TikTok)**

| 지표 | AMZN 광고 | META | GOOGL | TikTok |
|---------|---------|---------|---------|--------|
| 2025 광고 매출 | ~$68B | ~$180B | ~$280B | ~$33B |
| YoY 성장 | +22% | +19% | +11% | +30% |
| 광고 마진 추정 | 55~65% | 45% | 40% | 가변 |
| Data attribution 완결성 | 🥇 (pur-chase) | 🥈 (ATT 이후 제한) | 🥇 (search) | 🥉 |
| 광고주 수 | 250만+ | 1,000만+ | 800만+ | 500만+ |

**판정 근거**: Amazon 광고는 규모 3위이나 **광고주 당 매출**에서 최상위, search-to-purchase 완전 추적으로 ROAS(광고비 대비 매출) 우위. META/GOOGL은 광고비 돌려받기 어려운(remarketing만) 반면 Amazon은 전환 직접 측정.
- **추월 가능성**: Amazon 광고가 META를 5~7년 내 따라잡을 가능성 제한적(소셜 mindshare 차이) 하지만 **리테일 미디어** 부분집합에서는 50%+ 과점 유지
- **AMZN 차별화**: Prime Video 광고 2024년 론칭 → CTV 광고 시장($25B) 차세대 진입점

**성장동력 3: E-commerce (vs WMT/Shopify)**

| 지표 | AMZN | WMT | Shopify |
|---------|---------|---------|---------|
| 2025 GMV/리테일 매출 | ~$700B (Prime 포함) | ~$120B E-comm | ~$260B GMV (3P) |
| YoY 성장 | +11% | +20% (e-comm) | +25% |
| 마진 | NA OI 7%+ | 낮은 한자리 | 15%+ |
| 3P 비중 | 60%+ | 30%+ | 100% |
| Fulfillment 네트워크 | 600+ FC | ~5,000 매장 (픽업) | 3P (FC 외주) |

**판정 근거**: Amazon은 물류 깊이 + 3P 생태계에서 1위. WMT가 Grocery delivery로 차별화, Shopify는 판매자 인프라 특화. 5~7년 내 Amazon이 전체 E-commerce MS 33%+ 유지 가능.

### 5-3. 경쟁 우위 원천 분석

**1. 커스텀 실리콘 수직 통합 (AWS)**
- 우위 내용: Graviton(ARM CPU, Xeon 대비 TCO -30%), Trainium2/3(학습, Nvidia H100 대비 TCO -40%), Inferentia(추론)
- 정량 근거: 커스텀 칩 매출 $20B+ (triple-digit 성장), Trainium2 sold out, Trainium3 대부분 예약 (Jassy 2025.12)
- 경쟁사 격차: Azure Maia는 초기, GCP TPU는 내부용 우선 — 외부 판매 스케일 AWS 선도
- 복제 난이도: **높음** — 5~7년 설계 투자 + Annapurna Labs(2015 인수) 축적 IP + TSMC 우선 물량 확보
- 격차 지속 기간 추정: **4~6년** — Nvidia 차세대(Blackwell Ultra/Rubin) 발표 후 재평가

**2. 리테일 트래픽 × 퍼스트파티 데이터 (광고)**
- 우위 내용: 월 3B+ 방문 × 완전 구매 추적 → 광고 ROAS 2~3배 우위
- 정량 근거: 광고 매출 $68B / 20~25% 성장 지속, 리테일 미디어 50%+ 과점
- 경쟁사 격차: META/GOOGL은 on-site 전환 추적 제한, WMT Connect는 규모 1/4
- 복제 난이도: **매우 높음** — WMT도 리테일 미디어 육성 중이나 트래픽 격차 5배+
- 격차 지속 기간 추정: **10년+**

**3. 물류 자산 × 라스트마일 밀도 (리테일)**
- 우위 내용: 600+ FC + 500+ delivery station + Rivian EV 30,000대 → 같은 단위원가로 Same-day 커버 확대
- 정량 근거: Q4 2025 NA 마진 개선, 2025년 유럽·미국 배송 속도 기록 경신 (Jassy Q4 2025 콜)
- 경쟁사 격차: WMT(매장 거점 5,000) / UPS/FedEx(외부 배송사) 와 구조 이질
- 복제 난이도: **매우 높음** — $100B+ CapEx + 10년+ 시간
- 격차 지속 기간 추정: **10년+**

**4. Prime 생태계 록인**
- 우위 내용: 260M 구독 × $1,400 연 지출 + Prime Video/Music/Reading — 이탈 비용 심리 + 재무적
- 정량 근거: 77% 미국 가구 침투, 이탈률 <5% (CIRP)
- 경쟁사 격차: WMT+ 비교 구독 소수 (추정 20~30M), Costco 123M members(다른 가치 제안)
- 복제 난이도: **높음** — 컨텐츠 카탈로그 + 배송 속도 동시 구축
- 격차 지속 기간 추정: **7~10년**

### 5-4. "왜 이 기업인가" — 투자 차별화 근거

1. **멀티 해자 복합(4 layers) = 리스크 분산 vs single-moat peers**: 클라우드 단일 노출(ORCL/Snowflake) 대비 AWS + 광고 + 리테일 + Prime 분산 — 한 레이어 훼손에도 현금흐름 방어
2. **AI 인프라 수직 통합의 TCO 우위**: Trainium/Graviton 자체 설계로 Nvidia 의존도 낮춤 — 경쟁사 대비 40% 원가 우위 가능성. 2027+ Nvidia vs AMZN 격차가 margin에 반영
3. **광고가 hidden margin driver**: Amazon 광고 $68B × 60% 마진 = ~$40B OI가 리테일 "저마진"에 숨겨져 있음 — SOTP 기준 가치 재발견 여지 (GOOGL/META 광고 peers 대비 10~15% 멀티플 디스카운트)

**밸류에이션 비교 (FY25 기준 블렌디드)**:

| 지표 | AMZN | MSFT | GOOGL | WMT | 프리미엄/디스카운트 | 정당성 |
|------|------|------|------|------|---------------------|--------|
| Forward PE | ~35x | ~33x | ~22x | ~32x | 광고+리테일 peer 대비 +10~60% | AWS 성장 일부 반영 |
| EV/EBITDA | ~16x | ~23x | ~15x | ~17x | MSFT 대비 할인 | AWS가 Azure 대비 성장 열세 반영 |
| PEG (FY27 컨센서스 EPS growth 18%) | ~2.0 | ~2.5 | ~1.5 | ~3.0 | 중립 | 적정 |
| FCF Yield (FY26E) | **~0%** (CapEx $200B 흡수) | 1.5% | 3.5% | 2% | 디스카운트 | 일시적 (2027~28 정상화) |

**결론**: 단기 FCF Yield는 peer 최악이나 PE/PEG는 MSFT 대비 정당한 수준. **진입 시점은 CapEx 사이클 peak인 2026을 넘기고 2027~2028년 monetization 가시화 전**이 optimal. 현재 $250 수준은 analysts가 이미 monetization을 선반영한 구간이며, 본 Base DCF는 보수적 관점에서 2년 FCF 정상화 지연을 반영해 $218로 평가.

---

## 리스크 요인

### 1. $200B CapEx 흡수와 NTM FCF 파괴 ⚠️

**설명**: 2026년 CapEx $200B 가이던스는 FY25 실제 $85B 대비 +135%, FY24 $48B 대비 +320% 증가. UBS 기준 4Q25~4Q27 누적 CapEx 추정치 $344B(AWS 기여 $260B). LTM levered FCF $41.55B → NTM 추정 **-$18.56B**로 FCF negative 전환. 주주환원(자사주/배당) 0원. 감가상각 비용은 3~5년에 걸쳐 OI에 반영되어 **2027~2029년 margin 침식 구조적** (Q4 2025 콜에서 depreciation 가이던스 언급).

| 지표 | FY24 | FY25 | FY26E |
|------|------|------|-------|
| CapEx | $48B | ~$85B | **$200B** |
| FCF | $32B | $41B | **-$18B** |
| AWS CapEx 비중 | 60% | 75% | 80%+ |
| Equipment D&A (증가) | $24B | $34B | **$55B+** |

**시나리오별 영향**: Bear/Extreme Bear에서 FCF 적자 지속 시 자사주매입 정지, 주가 할인 반영. Base에서는 2027+ monetization으로 상쇄.

**완화 요인**: AWS backlog $244B(+40%)가 수요 선반영 → CapEx가 과잉 아니라 수요 대응. Trainium 공급 부족이 증거.

**팩트체크**: ✓ (Amazon 공식 가이던스 + UBS 추정)

### 2. AWS 성장률 경쟁사 대비 열위 지속 ⚠️

**설명**: Azure +31%, GCP +26% vs AWS +24% — 3개 분기 연속 AWS가 두 경쟁사에 뒤짐. OpenAI-Azure 파트너십, Anthropic-AWS 파트너십이 각각 동력이지만 AWS의 엔터프라이즈 MS 독점(MSFT 번들)과의 시너지 부재. MSFT Copilot이 전사 AI 사용률로 직접 이어지면서 Azure 수요 구조적 상승.

| 지표 | FY25 | FY26E |
|------|------|-------|
| AWS YoY | 20% | 17~22% (가속 후 감속 가능) |
| Azure YoY | 28% | 29~31% |
| GCP YoY | 24% | 24~28% |

**시나리오별 영향**: Bear에서 AWS 성장률 14% 이하 → 점유율 28%로 하락 → 해자 Narrow 재판정.

**완화 요인**: AWS 규모 $142B run rate vs Azure ~$100B → 절대 증가액은 AWS 우위. Multi-cloud 확산으로 AWS 이탈 제한.

**팩트체크**: ✓

### 3. FTC 반독점 트라이얼 (2026.10 시작) ⚠️

**설명**: 17개 주 법무장관 + FTC 공동 소송. Marketplace 강제 요구 + Buy Box 알고리즘 차별 + 1P/3P 통합 영업 관행 쟁점. 확률 시나리오:
- Consent Decree (합의) 50%: Buy Box 알고리즘 수정, FBA 강요 금지 — 수익성 -2~5% 충격
- Divestiture 강제 25%: Logistics arm 분리 — 구조 변경, 매출 -10~15% 충격
- 기각/완전 승소 25%: 영향 없음

**시나리오별 영향**: Bear/Extreme Bear에서 FTC 불리 판결 시 멀티플 재조정 (-10~15%).

**완화 요인**: Chamber of Progress 등 "legal holes" 지적, 유사 소송(copycat) 실패. Amazon 법무팀 역량.

**팩트체크**: ✓ (Bloomberg Law, Reuters 보도 일치)

### 4. Nvidia 차세대(Blackwell Ultra/Rubin) vs Trainium 격차 역전 ⚠️

**설명**: Trainium2 sold out, Trainium3 2026 초 인도는 현재 우위. 단 Nvidia Blackwell Ultra(2026 후반) / Rubin(2027) 발표 후 성능·전력 효율에서 AWS 대비 역전 가능. 대형 AI 연구기관(OpenAI, Anthropic 일부)이 경쟁 칩 재선호 시 Trainium 수요 둔화.

**시나리오별 영향**: Bear에서 2027~2028년 AWS AI 매출 성장률 둔화 가시화.

**완화 요인**: Annapurna Labs 4~5년 앞선 커스텀 칩 경험, TSMC 우선 물량, AWS 1st-party 워크로드(Alexa/리테일 AI)는 Trainium 100% 사용.

**팩트체크**: ⚠️ (Nvidia 로드맵 공시·Trainium 격차 독립 벤치마크 제한적)

### 5. 미국 소비 둔화 + 관세 전가 ⚠️

**설명**: 미국 E-commerce 매출은 GDP 민감. 2026년 관세 재인상(보편관세 20% + 중국산 60%) 시 1P 상품 원가 전가 or 마진 수축. 3P 판매자의 30~40%가 중국 소싱.

| 시나리오 | NA 매출 충격 | OI 마진 충격 |
|---------|------------|-------------|
| 관세 유지 | 0 | 0 |
| 관세 +10%p | -2% | -50bp |
| 관세 +20%p (최악) | -5% | -150bp |

**완화 요인**: 인도·베트남 소싱 다각화, 1P 브랜드(AmazonBasics 등) 가격 결정력, Prime 회원 소득분위(H) 상대적 안정.

**팩트체크**: ⚠️ (관세 정책 정치적 불확실성)

### 6. EU DMA 확대 규제 ⚠️

**설명**: 2026.03부터 Buy Box 알고리즘·3P 데이터 사용 제한·자기호의 금지 적용. 2027~2028 추가 조치 가능. EU 매출 ~$80B(International의 50%+)가 영향권.

**시나리오별 영향**: Bear에서 EU 광고/Marketplace 수익성 -10~15% 충격.

**완화 요인**: Amazon EU 자발 대응, 다른 플랫폼(GOOGL/META)도 동시 규제로 경쟁 차별화 없음.

**팩트체크**: ✓ (EU Commission 공식, 2026.03 시행)

### 7. Prime Video 광고 수용성 및 구독 가격 반발 ⚠️

**설명**: Prime 연 $139(미국), 2026년 추가 인상 검토 보도. 구독자 이탈 발생 시 광고 수익·리테일 GMV 동시 충격.

**시나리오별 영향**: Bear에서 구독자 순증 정체 → 광고 $7B 매출 둔화.

**완화 요인**: Prime 역사 가격 인상 시 이탈률 < 5%, 번들 가치(Music/Video/빠른배송) 압도적.

**팩트체크**: ⚠️ (가격 인상은 보도 수준)

### 8. 공급망·전력·데이터센터 병목 ⚠️

**설명**: $200B CapEx 집행의 실제 capacity 전환 병목 — 전력 공급(버지니아 100MW+ 차지 경쟁), 부품(전력변환기, 냉각장치), 건설 인력. AWS 신규 리전 타임라인 지연 시 수요 대비 capacity 미스 → backlog 축적되나 monetization 지연.

**시나리오별 영향**: Bear에서 2027 AWS 매출 가이던스 언더퍼폼 시 멀티플 압축.

**완화 요인**: SMR(소형 모듈 원자로) 계약(Talen Energy, Dominion) 선제 확보, Anthropic 전용 Rainier 데이터센터.

**팩트체크**: ⚠️

### 리스크 독립성 확인

- **상관관계 높음**: AWS 성장률 둔화 + CapEx 낭비 + Nvidia 격차 — 하나 실현 시 나머지 동시 악화 (AI 사이클 공통 노출)
- **독립적 리스크**: FTC 반독점 / 관세 / EU DMA는 AWS와 무관, 리테일·광고에 집중 — 리테일 섹터 단독 충격
- **결론**: AWS 리스크군이 하나의 팩터로 묶이며 스트레스 테스트에서 별도 점검 필요

### 리스크 수치 팩트체크 종합

| # | 항목 | 판정 | 비고 |
|---|------|------|------|
| 1 | FY26 CapEx $200B | ✓ | Q4 2025 공식 가이던스 |
| 2 | LTM FCF $41.55B → NTM -$18.56B | ✓ | UBS 분석 |
| 3 | AWS Q4 +24% / Azure Q4 +31% | ✓ | 양사 공식 공시 |
| 4 | AWS 점유율 32% | ✓ | Synergy Research |
| 5 | 광고 매출 $68B / 마진 55~65% | ⚠️ | 마진은 추정 |
| 6 | Prime 260M / 이탈률 <5% | ⚠️ | CIRP 서드파티 |
| 7 | FTC 트라이얼 2026.10 | ✓ | 법원 공식 |
| 8 | Trainium 매출 $20B+ | ⚠️ | 회사 공시 |

---

## 모니터링 지표

### 해자 건전성 모니터링

| 출처 | 모니터링 항목 | 기준값 | 현재 상태 |
|------|------------|-------|----------|
| AWS 해자 | AWS YoY 매출 성장률 | 18%+ 유지 | ✅ (+24% Q4 25) |
| AWS 해자 | AWS backlog YoY | 30%+ 유지 | ✅ (+40%) |
| AWS 해자 | 운영이익률 | 33%+ 유지 | ✅ (35.4%) |
| AWS 해자 | Trainium run rate | 매 분기 증가 | ✅ ($20B+ 커스텀 칩 총) |
| 광고 해자 | 광고 매출 YoY | 18%+ 유지 | ✅ (+22%) |
| 광고 해자 | 광고 비중 (전체 매출) | 9%+ 유지 | ✅ (9.36% Q2 25) |
| NA 해자 | NA 운영이익률 | 6%+ | ✅ (~7% Q4 25) |
| NA 해자 | Prime 이탈률 | <7% 유지 | ✅ (<5% 추정) |
| Intl 해자 | International OI 양수 유지 | >0 | ✅ (FY25 흑자 지속) |

### 리스크 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| 리스크 1 (CapEx) | FY26 분기 FCF | YoY 악화 가속 시 | ⚠️ (NTM -$18B 전망) |
| 리스크 1 (CapEx) | AWS backlog 소화 속도 | 신규 계약/backlog 비율 하락 | 현재 정상 |
| 리스크 2 (AWS 성장 열위) | AWS vs Azure 성장률 격차 | 차이 10%p+ 확대 | ⚠️ (현재 7%p) |
| 리스크 3 (FTC) | FTC 트라이얼 일정 | 2026.10 시작 | 대기 |
| 리스크 4 (Nvidia 격차) | Trainium vs Blackwell Ultra 벤치 | 성능 역전 시 | 추적 |
| 리스크 5 (관세) | 미 관세 정책 공식 발표 | +10%p 이상 | 추적 |
| 리스크 6 (EU DMA) | EU 추가 조치 | 신규 조사 | 현재 안정 |
| 매크로 | 10Y Treasury | 5.0% 돌파 시 | 현재 4.26% |
| 매크로 | US E-commerce YoY | 4% 이하 감속 | 현재 건전 |

### 경쟁 우위 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| 경쟁 AWS | 클라우드 MS | 30% 이하 하락 | ✅ (32%) |
| 경쟁 AWS | Azure/GCP 합산 성장 | AWS의 2배 | 현재 1.2배 |
| 경쟁 광고 | Amazon 광고 성장률 vs META | 5%p 이상 하회 | 현재 +3%p 우위 |
| 경쟁 E-comm | WMT e-comm 성장률 | AMZN의 2배 | 현재 WMT +20% vs AMZN +11% ⚠️ |
| 경쟁 E-comm | Shopify GMV 성장 | AMZN GMV 성장의 2배 | 현재 2.3배 ⚠️ |

### 즉시 재검토 트리거

- **AWS YoY 성장률 14% 이하로 2분기 연속** → 해자 Narrow 재판정
- **FTC 판결이 Divestiture 강제** → 사업 구조 근본 변경, 전 Thesis 재작성
- **FY26 실제 CapEx가 $240B 초과** → 자본 배분 규율 훼손 경고
- **Trainium 세대 독립 벤치마크에서 Nvidia 대비 성능 20%+ 열위 확인** → AI 해자 재평가
- **Prime 가구 침투율 75% 이하 하락** → 리테일 네트워크 효과 약화

---

## DCF 시나리오 & 가치평가

### 8-0. DCF 방법론 선택

- **적용 방식**: **B. SOTP (Sum-of-the-Parts)**
- **선택 근거**: Amazon은 이익 성격이 근본적으로 다른 3개 이질 세그먼트(AWS: 고성장 고마진 클라우드 / Advertising: 고마진 광고 플랫폼 / Core Retail: 저마진 E-commerce)를 동시 보유. Single FCF DCF로는 각 세그먼트의 성장·마진·멀티플 차이를 반영할 수 없어 심각한 가치 왜곡 발생. 특히 광고 비즈니스가 리테일 세그먼트 내 embedded되어 있어 core 리테일의 "낮은 마진"이 광고 고수익을 가리는 구조 — SOTP만이 이를 해체 가능
- **대안 대비 우위**:
  - A. FCF DCF 부적합: $200B CapEx로 NTM FCF negative → 단일 FCF 모델은 terminal value 의존도 90%+ 초과하여 가정에 과민
  - C. Excess Returns 부적합: 자본 규제 없음, Book Value가 가치의 핵심 동인 아님
  - D. NAV 부적합: Amazon 가치 대부분이 Brand/Network/Moat 무형이며 보유 자산 기반 아님
  - E. Forward Multiple 부적합: 단일 멀티플로는 3개 이질 세그먼트 통합 불가
- **주요 가정 요약**:
  - WACC: **8.5%** (Risk-free 4.26% + 시장 프리미엄 5.5% × 베타 1.05 + 기업특화 0bp; 메가캡 유동성 프리미엄 없음)
  - 예측 기간: 5년 (Y5 = FY2030)
  - 세율: 23% (통합 실효세율, 최근 3년 평균)
  - 희석 주식수: 10.86B (FY25 말 기준, 연간 자사주 매입 최소치 가정)
  - Net Cash: $21.2B (Cash $86.8B - LT Debt $65.6B)
  - Terminal Multiple 기반 (Gordon 미적용 — 클라우드·광고 멀티플 시장 실측 범위 사용)

### 8-1. DCF 구조 설계 원칙

**이익 변수 (세그먼트별)**:
- AWS: AWS 세그먼트 OI (세전) → ×(1-0.23) 세후 전환
- Advertising: 광고 매출 × 가정 마진 (55~65%) → 세후
- Core Retail (NA+Intl ex-ads): 총 OI에서 AWS OI와 Ad OI 공제한 나머지 → 세후

**밸류에이션 공식**:
```
기업가치 (EV) = AWS 가치 PV + Ad 가치 PV + Core Retail 가치 PV
주주가치 = EV + Net Cash ($21B)
목표가 = 주주가치 / 10.86B diluted shares
```

**기본 가정 테이블 (FY25 baseline)**:

| 세그먼트 | FY25 매출 | FY25 OI | OI 마진 | 세후 OI |
|--------|----------|--------|-------|-------|
| AWS | $128.7B | $45.6B | 35.4% | $35.1B |
| Advertising (embedded) | $68B | ~$40.8B | ~60% | ~$31.4B |
| Core Retail (NA+Intl ex-ads) | $520.2B | -$6.4B (계산상) / 조정 후 ~$5B | ~1% | ~$3.9B |
| **합계** | **$716.9B** | **$80B** | 11.2% | $61.6B |

> 주: Core Retail OI가 계산상 음수가 되는 이유는 광고 OI가 NA/International 세그먼트에 embedded되어 총 OI $80B를 AWS $45.6B + Ad $40.8B + Core Retail의 합으로 분해하면 Core Retail이 음수. 이는 Core Retail이 사실상 손익분기 수준이며 광고가 이익을 떠받치는 구조임을 시사. 분석에서는 Core Retail을 "조정 후 $5~8B 긍정 OI"로 보수적 모델링(2025년 일회성 비용 $1.1B 이탈리아 세금, $730M 인건 $610M 자산손상 등 제외 시 정상화 이익 존재).

**멀티플 기준** (역사적 실측 범위):

| 세그먼트 | 정상 | 스트레스 | 위기 | 근거 |
|---------|------|-------|------|------|
| AWS (after-tax OI 기준) | 22~25x | 18~20x | 14~17x | MSFT/GOOGL 클라우드 implied 멀티플 20~27x 범위, 성장+마진 프리미엄 반영 |
| Advertising (after-tax OI 기준) | 20~24x | 16~18x | 12~14x | META 25x / GOOGL 22x / TikTok 비상장 — AMZN 광고 성장률+마진 중간 배치 |
| Core Retail (after-tax OI 기준) | 14~17x | 10~13x | 7~9x | WMT 28x (매장+grocery premium), TGT 18x — AMZN 리테일은 중간 마진 경쟁 반영 |

> 공식 설계: **멀티플은 역사적 실측 peer 범위 상단 + 성장/마진 프리미엄**으로 설정. Amazon Gap 프리미엄은 내부 광고 embedded 가치 감안하여 retail 부문에 일부 얹음.

### 8-2. 시나리오별 DCF 계산

#### Extreme Bear — 확률 15%

**전제 조건**:
- AWS 성장 15%→12%로 3년 내 둔화, 운영이익률 35%→30%로 압축 (CAPEX 과잉 + 경쟁 심화)
- 광고 성장 18%→10%로 둔화, 마진 60%→50% (경기 침체 + 광고주 이탈)
- Core Retail 성장 5%로 감속 (경기침체 + 관세 쇼크), 마진 1% 이하
- $200B CapEx의 60%가 over-investment로 판명 → 2027~2028 대규모 asset impairment
- WACC 10% (금리 상승 + 리스크 프리미엄)
- FTC 판결에서 Logistics Divestiture 강제

**시나리오 진입 신호**:
- AWS YoY 2분기 연속 14% 이하
- 광고 YoY 12% 이하
- 10Y Treasury 5%+ 돌파 + 경기침체

**DCF 계산**:
```
AWS:
  Y5 매출: $128.7B × 1.12^5 = $227B
  Y5 OI margin: 30% → OI $68.1B
  세후 OI: $52.4B
  적용 멀티플: 15x
  Y5 value: $786B
  PV (WACC 10%): $488B

Advertising:
  Y5 매출: $68B × 1.10^5 = $109.5B
  Y5 OI margin: 50% → OI $54.8B
  세후: $42.2B
  적용 멀티플: 13x
  Y5 value: $548B
  PV: $340B

Core Retail:
  Y5 매출: $520B × 1.02^5 = $574B
  Y5 OI margin: 1% → OI $5.7B
  세후: $4.4B
  적용 멀티플: 8x
  Y5 value: $35B
  PV: $22B

────────────────
EV PV 합계: $850B
+ Net Cash: $21B
주주가치: $871B
÷ 10.86B shares

목표가: $72 ~ $105 (중간값 $85)
현재가 $250.56 대비: -58% ~ -66%
```

**붕괴 조건**: FY27~28 AWS 매출 YoY 10% 이하 지속, FTC Divestiture 확정.

#### Bear — 확률 25%

**전제 조건**:
- AWS 성장 20%→14%로 점진 둔화, 마진 35%→33%
- 광고 성장 22%→13%로 둔화, 마진 60% 유지
- Core Retail 성장 7%, 마진 2% 완만 회복
- $200B CapEx 일부 overcommit (20% 수준 향후 조정)
- FTC Consent Decree (Buy Box 수정, 수익성 -3%)
- WACC 9% (인플레 지속)

**시나리오 진입 신호**:
- AWS YoY 17% 이하
- 광고 YoY 15% 이하
- FY26 실제 CapEx $220B+ 확인

**DCF 계산**:
```
AWS:
  Y5 매출: $128.7B × 1.17^5 = $282B
  Y5 OI margin: 33% → OI $93.1B
  세후: $71.7B
  적용 멀티플: 19x
  Y5 value: $1,362B
  PV (WACC 9%): $885B

Advertising:
  Y5 매출: $68B × 1.15^5 = $137B
  Y5 OI margin: 60% → OI $82B
  세후: $63.2B
  적용 멀티플: 17x
  Y5 value: $1,074B
  PV: $698B

Core Retail:
  Y5 매출: $520B × 1.07^5 = $729B
  Y5 OI margin: 2% → OI $14.6B
  세후: $11.2B
  적용 멀티플: 12x
  Y5 value: $135B
  PV: $88B

────────────────
EV PV 합계: $1,671B
+ Net Cash: $21B
주주가치: $1,692B
÷ 10.86B shares

목표가: $145 ~ $170 (중간값 $156)
현재가 $250.56 대비: -32% ~ -42%
```

**붕괴 조건**: AWS 성장 20%+ 재가속, CapEx monetization 빠른 가시화.

#### Base — 확률 40%

**전제 조건**:
- AWS 성장 18% CAGR (가속 후 감속 정상화), 마진 35.4% → 37% 소폭 확장
- 광고 성장 15% CAGR, 마진 60% 유지
- Core Retail 성장 9%, 마진 1%→3.5% 확장 (물류 지역화·automation 레버리지)
- $200B CapEx가 AWS capacity 확장과 AI monetization에 정상 기여
- FTC 판결: Consent Decree with 수용 가능 조건 (수익성 -2%)
- WACC 8.5%

**시나리오 진입 신호**:
- AWS YoY 18~22% 유지
- 광고 YoY 18~22% 유지
- NA OI 마진 7%+ 유지

**DCF 계산**:
```
AWS:
  Y5 매출: $128.7B × 1.18^5 = $294B
  Y5 OI margin: 37% → OI $108.8B
  세후: $83.8B
  적용 멀티플: 22x
  Y5 value: $1,844B
  PV (WACC 8.5%): $1,227B

Advertising:
  Y5 매출: $68B × 1.15^5 = $137B
  Y5 OI margin: 60% → OI $82B
  세후: $63.2B
  적용 멀티플: 21x
  Y5 value: $1,327B
  PV: $883B

Core Retail:
  Y5 매출: $520B × 1.09^5 = $800B
  Y5 OI margin: 3.5% → OI $28B
  세후: $21.6B
  적용 멀티플: 14x
  Y5 value: $302B
  PV: $201B

────────────────
EV PV 합계: $2,311B
+ Net Cash: $21B
주주가치: $2,332B
÷ 10.86B shares

목표가: $205 ~ $225 (중간값 $215)
현재가 $250.56 대비: -12% ~ -18%
```

**붕괴 조건**: 주요 가정(AWS 18% CAGR 또는 광고 15%) 어느 하나 4분기 이상 미달 시 Bear 전환.

#### Bull — 확률 20%

**전제 조건**:
- **(a)** AWS 성장 22% CAGR 유지 (Trainium + AI capacity가 Azure 대비 가격 경쟁력 유지), 마진 38%
- **(b)** 광고 성장 18% CAGR, 마진 65% 확장 (Prime Video CTV 광고 성숙)
- **(c)** Core Retail 성장 10% + 마진 5% 도약 (Robotics/AI 자동화로 물류 비용 구조 개선)
- **(d)** $200B CapEx의 AI capacity가 backlog를 초과 수요에 빠르게 monetize — FY28 FCF normalization $80B+
- **(e)** FTC 기각 또는 완전 승소
- **(f)** WACC 7.5% (금리 하락)

**시나리오 진입 신호**:
- AWS YoY 25%+ 재가속 (Azure 30%+ 대비 격차 축소)
- 광고 YoY 25%+ 유지
- NA OI 마진 9%+ 달성
- 10Y Treasury 3.5% 이하 하락

**DCF 계산**:
```
AWS:
  Y5 매출: $128.7B × 1.22^5 = $348B
  Y5 OI margin: 38% → OI $132B
  세후: $102B
  적용 멀티플: 25x
  Y5 value: $2,549B
  PV (WACC 7.5%): $1,776B

Advertising:
  Y5 매출: $68B × 1.18^5 = $156B
  Y5 OI margin: 65% → OI $101.4B
  세후: $78.1B
  적용 멀티플: 24x
  Y5 value: $1,874B
  PV: $1,306B

Core Retail:
  Y5 매출: $520B × 1.10^5 = $838B
  Y5 OI margin: 5% → OI $41.9B
  세후: $32.3B
  적용 멀티플: 17x
  Y5 value: $548B
  PV: $382B

────────────────
EV PV 합계: $3,464B
+ Net Cash: $21B
주주가치: $3,485B
÷ 10.86B shares

목표가: $310 ~ $345 (중간값 $320)
현재가 $250.56 대비: +24% ~ +38%
```

**실현 가능성 분석**:

| 전제 조건 | 실현 가능성 | 근거 | 선행 사례 / 반례 |
|---------|-----------|------|----------------|
| (a) AWS 22% CAGR 5년 | **중간** | 현재 run rate $142B에서 $350B까지 도달은 상당한 도약. capacity 확장 속도(전력·토지) 병목 | 선행: MSFT Azure 2020~2025 5년 CAGR 35%. 반례: AWS 자체 2019~2023 CAGR 28% → 2024 13% 급감 |
| (b) 광고 18% + 65% 마진 | **높음** | 이미 22% 성장 + 추정 60% 마진 중. Prime Video 광고가 구조적 carry-over | 선행: META 광고 마진 역사적 45% → 2024 65% 도달. 반례: GOOGL 광고 성장 10~11% 정체 |
| (c) Core Retail 5% 마진 | **낮음~중간** | 현재 1%→5% 도약은 역사적 최고치. Robotics/AI 레버리지 불확실 | 선행: WMT e-commerce 마진 2016 -20% → 2025 +2%. 반례: 최근 4년 NA 마진 6~7% 정체 |
| (d) FCF normalization FY28 $80B+ | **중간** | CapEx 피크 지난 후 D&A 흡수 속도 불확실. D&A $55B+ 증가분이 margin 침식 지속 | 선행: 2018~2022 AWS CapEx 사이클 이후 FY24 FCF $32B 회복. 반례: 2020~2021 리테일 CapEx 사이클 후 2년간 FCF 저조 |
| (e) FTC 기각/승소 | **낮음~중간** | 소송 자체 legal hole 존재하나 판결 결과는 시니어 판사 결정에 의존 | 선행: AT&T Time Warner 합병 승인(2018). 반례: MSFT 1999 반독점 판결, 후속 영향 2년 지속 |
| (f) WACC 7.5% (금리 3.5%) | **중간** | Fed 완화 사이클 가능하나 정책 불확실 | 선행: 2020~2021 Fed 피봇. 반례: 2022~2024 고금리 장기화 |

**실현 경로** (인과 체인):
1. FY26 AWS capacity(전력·H100/Trainium 인도) 확장 계획대로 완수 → FY27 재가속 확인 →
2. 광고가 Prime Video CTV 2년차에 규모 확장 → 마진 지속 확장 →
3. FY27~28 CapEx monetization → FCF normalize + 자사주 재개 →
4. FTC 2027 판결에서 consent decree (혹은 기각) → 멀티플 재상승 →
5. 금리 하락 사이클과 맞물려 2028~2029 Bull 목표가 달성

**전제 간 독립성**:
- (a) AWS 22%와 (d) FCF normalization은 **상호 의존** — AWS capacity가 예상대로 monetize되어야 FCF 회복. 동시 실패 시 Bull 완전 붕괴
- (b) 광고와 (c) Core Retail 마진은 **부분 독립** — 경기 침체에서는 동시 악화, 정상 환경에서는 독립
- (e) FTC와 (f) WACC는 **독립**
- **종합**: Bull 전제 6개 중 3~4개 이상 동시 실현 필요. 단일 실현 확률이 50~70%인 전제들이 AND 조건으로 묶여 Bull 종합 실현 확률은 15~25% 수준이 적정

**종합 실현 확률 판단**: Bull 확률 **20% 유지**. 실현 경로가 존재하고 (a)(b)는 이미 진행 중이지만 (c)(d) 동시 달성이 역사적으로 반례가 많음.

**붕괴/전환 조건**:
- AWS YoY 16% 이하로 재둔화 → Bull 전환
- FY26 실제 CapEx $230B 초과 (가이던스 상회) → 자본 규율 의심 → Bull 실종
- FTC Divestiture 판결 → Bull 완전 붕괴

### 8-3. 가중평균 내재가치

```
시나리오         확률    중간값    기여
────────────────────────────────────
Extreme Bear     15%    $85       $12.8
Bear             25%    $156      $39.0
Base             40%    $215      $86.0
Bull             20%    $320      $64.0
────────────────────────────────────
가중평균 내재가치:              $201.8
가중평균 범위:          $186 ~ $222
현재가 $250.56 대비:    -26% ~ -11%
```

**확률 배분 근거**:
- **Extreme Bear 15%**: FTC Divestiture(25% × 60% 발생 범위 15%) + Nvidia 격차 역전(30% × 50% 15%) + 경기침체(25%) 등 tail 조합 가능. 단일 사건으로는 발생 낮으나 복합 상황 15%
- **Bear 25%**: AWS 성장 둔화(40% 확률) + CapEx 과잉(30%) + FTC Consent Decree(50%) 중 1~2개 실현 — 가장 가능성 높은 tail
- **Base 40%**: 현재 궤도의 가장 자연스러운 연장. AWS 18% / 광고 15% / 리테일 9%가 업계 컨센서스 median
- **Bull 20%**: 여러 전제 동시 실현 필요 — 가능하나 demanding
- **Extreme Bear + Bear = 40%** (보수적 기준 35% 초과 충족)

> **참고**: 가중평균 $202는 Street consensus $291 대비 30% 보수적. 주된 차이는 (a) WACC 8.5% vs Street 7~7.5%, (b) AWS 멀티플 22x vs Street 25~30x, (c) Core Retail 멀티플 14x vs Street 16~18x.

### 8-4. 실적 데이터 — 현재 어디에 위치하는가

**직전 실적 테이블 (FY25 actual + Q4 2025):**

| 지표 | 수치 | YoY | DCF Case 위치 |
|------|------|-----|-------------|
| 전사 매출 (FY25) | $716.9B | +12% | Base 범위 (9%→Bear, 12%→Base, 15%→Bull) |
| AWS 매출 (FY25) | $128.7B | +20% | Base~Bull 경계 (17%→Bear, 18%→Base, 22%→Bull) |
| AWS 매출 (Q4 2025) | $35.6B | +24% | **Bull 방향 가속** |
| AWS 운영이익률 | 35.4% | 35.6% 유지 | Base 수준 (35%→Base, 33%→Bear, 37%→Bull) |
| 광고 매출 (Q2 2025 annualized) | ~$63B → $68B | +22% | Base 수준 |
| NA OI 마진 (Q4 2025) | ~7% | 개선 | Base~Bull 경계 |
| International OI | 흑자 유지 | 전환 후 유지 | Base 수준 |
| FY26 Q1 guidance 매출 | $173.5~178.5B | +9~12% | Base~Bear 경계 (FTC 일회성 포함) |
| FY26 Q1 guidance OI | $16.5~21.5B | 범위 | Bear~Base (Street $22.2B 컨센 하회) |
| FY26 CapEx 가이던스 | $200B | +135% | **Bear 시나리오 CapEx 과잉 경계** |

**트렌드 판단**:
```
AWS 매출 궤적: 19%(Q1 25) → 17%(Q2) → 20%(Q3) → 24%(Q4) → ?
────────────────────────────────────────────────
현재 위치: Base → Bull 경계 가속
트렌드 방향: 가속 (13개 분기 중 최고)
CapEx 궤적: $48B(24) → $85B(25) → $200B(26E)
→ 가속 매출 vs 가속 CapEx — Bull 요건 일부 충족, 단 monetization 시차 리스크
```

**가이던스 반영 시 방향**:
- Q1 2026 guidance 중간점 $176B (+11% YoY) → Base 연장선
- Q1 OI 중간점 $19B (Street $22.2B 대비 하회) → Bear 쪽 이동
- 2026 CapEx $200B → Bear 시나리오 CapEx 과잉 트리거 근접

**핵심 관찰**: **AWS Q1 2026 성장률이 최결정 변수**. +22% 이상 유지 시 Base~Bull 방향 지속, +18% 이하 재둔화 시 Bear 진입. **확인 시점: 2026-04-30 Q1 2026 실적 발표 (투자 의사결정 최우선 catalyst)**.

### 8-5. 가치평가 결과

| 지표 | 수치 | 평가 |
|------|------|------|
| 현재 주가 | $250.56 (52주 고점 $258.60 대비 -3.1%) | 고점 근처 |
| Forward PE (FY26E ~$6.6) | ~38x | 역사 평균(30~35x) 대비 **고평가** |
| Forward EV/EBITDA (FY26E) | ~16x | MSFT 23x 대비 할인, WMT 17x와 유사 |
| PEG (FY27 컨센서스 EPS +18%) | ~2.1 | >2 **고평가 경계** |
| 가중평균 내재가치 | $202 ($186~$222) | 현재가 대비 **-19% ~ -26% 고평가** |
| 손익비 (Base vs Bear) | ($215-$156)/$156 = 0.38 / 업사이드 ($215-$250)/$250 = -14% | 하방 위험 > 상방 |
| 손익비 (Base vs Extreme Bear) | ($215-$85)/$85 = 1.53 / 다운사이드 ($250-$85)/$250 = 66% | 심각한 하방 비대칭 |
| 애널리스트 평균 목표가 | $291 (range $227~$360) | 참고용 — 본 Base 대비 +44% |

**결론**: 현재가 $250은 Base 내재가치 $202 대비 +24% 프리미엄. 주요 상방(AWS +24% 가속, 광고 22%, AI capacity 선점)은 이미 가격에 반영되어 있으며, 주요 하방($200B CapEx 흡수, FTC 2026.10 트라이얼, Azure 추격)은 주가에 덜 반영. **보수적 판정 기준으로 분할매수 진입가는 Bear 범위 상단(~$190 이하)이 적정**. 단, Base 전제가 40% 확률로 유지되는 한 보유는 합리적.

---

## 종합 판정

```
[ AMZN ] 평가 요약
────────────────────────────────
비즈니스 퀄리티  : ✅ 4-layer Wide Moat (AWS + 광고 + Prime + 물류), 구조적 해자
시장 환경        : ⚠️ AWS 가속 vs $200B CapEx / Azure 추격 / FTC 트라이얼 3중 압박
가치평가         : ⚠️ 내재가치 $202 대비 현재가 $251 = +24% 프리미엄, 분할매수 미충족
리스크           : ⚠️ CapEx 단기 FCF 파괴 + 규제 꼬리 + 경쟁 점유율 압력
────────────────────────────────
종합 의견        : 보유 (신규 진입은 분할매수 조건부 — Bear 진입가 $190 이하)
────────────────────────────────
핵심 모니터링:
  1. AWS YoY 성장률 (2026.04.30 Q1 실적이 최우선 catalyst)
  2. FY26 실제 CapEx 실행 속도 + AWS backlog monetization
  3. FTC 반독점 트라이얼 결과 (2026.10 시작)
```

**판정 근거 상세**:
- **왜 매수가 아닌가**: 가중평균 내재가치 $202 대비 현재가 $250.56은 -19% premium. 보수적 매수 기준(20%+ 할인)을 정반대 방향으로 벗어남. 손익비 Base vs Bear에서 하방 비대칭(다운사이드 -38% vs 업사이드 +6%)이 분명.
- **왜 매도가 아닌가**: Wide Moat 구조 유지, AWS가속 확인되는 상황에서 매도는 timing bet. Thesis 핵심(AWS/광고/Prime 해자)이 Q1 2026 실적에서 무너지지 않는 한 구조적 홀드.
- **분할 매수 경로**:
  - $230 (-8% from current): 첫 진입 (Base 시나리오 중간값 접근)
  - $200 (-20%): 추가 매수 (Base 하단)
  - $170 (-32%): 최대 매수 (Bear 진입)
- **가장 취약한 숫자**: Core Retail 마진 가정(1%→3.5%) — Bull 5% 도달은 역사적 최고치 갱신이 필요하고, Bear 2% 정체는 자동화 실패 시 realistic

---

## 분기별 점검 기록

| 날짜 | 실적 요약 | Case 위치 변화 | 가설 업데이트 |
|------|----------|-------------|-------------|
| 2026-04-19 | 본 분석 시작 시점 (FY25 마감 후 Q1 2026 실적 발표 전) | 초기 Base 설정 $215 중간값 | Thesis 원본 작성 |

**다음 업데이트 트리거**:
- 2026-04-30 Q1 2026 실적 발표 (AWS 성장률 + CapEx 실행 + 가이던스 개정)
- 2026-07-31 Q2 2026 (광고 성장 연속성 확인)
- 2026-10 FTC 트라이얼 시작 (초기 심리 결과)
- Q4 2025 annual 10-K 상세 세그먼트 정보 (Advertising 공시 변화 여부)
