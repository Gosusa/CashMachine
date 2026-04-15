# PTC — PTC Inc.
> 산업용 소프트웨어 (CAD·PLM·ALM·SLM). Creo(3D CAD), Windchill(PLM) 양대 플래그십 + Codebeamer(ALM)·ServiceMax(FSM)·Onshape(Cloud CAD). 매출 구조는 거의 100% 구독 기반 (ARR 모델).

---

## 투자 thesis

- **엔지니어링 워크플로우에 락인된 CAD/PLM 번들** → 전환비용 해자 + 무형자산(표준 파일포맷·교육 인프라). FY25 ARR $2.34B(ex-K&T), cc ARR 성장 9% YoY
- **구독 전환 완료 + 규율적 capital return** → 안정 FCF 엔진. FY26 FCF 가이던스 ~$1.0B (OCF margin ≈ 37%), FY26 자사주매입 $1.1~1.3B 계획 (Kepware/ThingWorx 매각대금 $375M 포함 ASR)
- **Windchill+ 클라우드 전환 + AI/디지털트윈 레버리지** → 기존 고객 업셀로 ARPU 확장. Forrester PLM 평가에서 Siemens Teamcenter와 최상위 공동 포지션 (Narrow→Wide 전환 잠재)

**매수 근거 작성일**: 2026-04-14
**매수가**: $142.44 (당일 종가; 52주 $133~$220 범위의 하단 근접)
**목표가**: $180 (Base DCF 기준, 아래 7-3 참조)
**투자 기간**: 5년

> 주의: 본 Base는 시장 컨센서스 수준의 리서치다. 개인 thesis 엣지는 2단계(`PTC_thesis.md`)에서 별도 반영.

---

## 사업 구조 및 경제적 해자

### 2-1. 세그먼트 구조 요약

PTC는 단일 "Core PLM/CAD 구독 소프트웨어" 사업이지만, 제품군별 해자 성격이 상이하므로 제품군 기준으로 분해한다. 2026년 3월 Kepware+ThingWorx(IoT/산업연결성) 사업을 TPG에 매각하여 포트폴리오가 **CAD/PLM/ALM/FSM 4축**으로 정제되었다.

| 제품군 | 수익원 | 규모 지표 (FY25 ARR 추정) | 해자 유형 | 해자 강도 |
|-------|------|------------------------|---------|---------|
| **Creo (3D CAD)** | 시트 구독 | ~$700M ARR, CAD 시장 점유율 ~11% | 전환비용(파일 포맷·매크로·교육), 무형자산(설계 엔지니어 세대 락인) | Wide |
| **Windchill (PLM)** | 엔터프라이즈 구독 | ~$900M ARR, PLM 시장 점유율 ~9% (Forrester 상위 2) | 전환비용(BOM·설계이력·공정문서 통합), 네트워크 효과(부서 전반), 규제/감사 기록 | Wide |
| **Codebeamer (ALM)** | 엔터프라이즈 구독 | ~$200M ARR, 자동차·의료기기 규제 시장 | 규제 진입장벽(ISO 26262, FDA), 전환비용 | Narrow |
| **ServiceMax (FSM)** | SaaS 구독 | ~$250M ARR | 전환비용(서비스 이력·IoT 통합), 업종 전문성 | Narrow |
| **Onshape + 기타** | 시트 구독 | ~$300M ARR | 클라우드 네이티브 CAD, SME 타깃; 아직 해자 초기 | Narrow→미정 |

> ARR 세그먼트별 숫자는 회사가 공식 분해공시를 제공하지 않아 **업계 추정치**. 총 ARR $2.34B(ex-K&T, Q1'26 말) 대비 합이 대략 맞도록 할당. 정확한 분리는 사측 IR 문의 필요.

### 2-2. 세그먼트별 상세

#### Creo — 전환비용 + 무형자산

**사업 구조**: 3D 파라메트릭 CAD 툴, 제조업 엔지니어 개인 시트 라이선스 중심. 항공우주·자동차·산업장비에서 표준. 경쟁: SolidWorks(Dassault), NX/Solid Edge(Siemens), Fusion 360(Autodesk).

| 해자 유형 | 내용 |
|---------|------|
| 전환비용 | 기존 설계 데이터베이스(.prt, .asm) 마이그레이션 비용 수백만$ 규모, 수개월 다운타임 |
| 무형자산 | 대학·전문학원 교육과정에 10년 이상 침투, 신규 엔지니어 공급 파이프라인 |
| 교체비용 | 툴 전환 시 생산성 회복에 6~12개월, 수율·품질 리스크 상존 |

#### Windchill — 전환비용 + 네트워크 효과

**사업 구조**: Product Lifecycle Management 플랫폼. BOM 관리, 설계-제조-서비스 연계, 감사/규제 문서화. 엔터프라이즈 멀티테넌트 배포 중심.

| 해자 유형 | 내용 |
|---------|------|
| 전환비용 | 수년치 BOM·설계이력·엔지니어링 변경(ECO) 이력이 시스템 내부에 축적 → 이전 불가능에 가까움 |
| 네트워크 효과 | 설계·구매·QA·서비스 부서 전체가 동일 플랫폼 사용, 부서 간 전환 비용 곱셈 |
| 규제/감사 | FDA·FAA·ISO 등 감사 시 이력 추적성 요구 → 교체 시 감사 프로세스 전체 재수립 |
| 시장 지위 | Forrester PLM 평가 Siemens Teamcenter와 공동 선두 |

#### Codebeamer — 규제 진입장벽

**사업 구조**: Application Lifecycle Management, 2022년 인수. 자동차 ISO 26262·의료기기 FDA 소프트웨어 준수를 위한 요구사항·테스트·추적성 관리.

| 해자 유형 | 내용 |
|---------|------|
| 규제 진입장벽 | 자동차 SW 안전 표준 준수 기록 요구 → 교체 시 재인증 수년 |
| 업종 특화 | 자동차·의료 외 확장성 제한적 (양날의 검) |

#### ServiceMax — 전환비용

**사업 구조**: Field Service Management, 2023년 인수. 산업장비 현장 서비스 워크플로우, IoT 연동. GE Digital에서 분리.

| 해자 유형 | 내용 |
|---------|------|
| 전환비용 | 수년치 장비 서비스 이력·부품 이력 축적 |
| 업종 전문성 | 제조업 서비스 특화 (Salesforce FSL 대비 차별화) |

---

## 해자 팩트체크

### Creo 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| 전환비용 수준 | CAD 마이그레이션 프로젝트 업계 사례: 100 엔지니어 환경 기준 $1~3M + 6~12개월 (엔지니어링 리서치 업계 관행) | ⚠️ (독립 수치화 어려움, 정성적 확인) |
| 시트 갱신율 | PTC IR 공시 ARR churn 공식 수치 없음, cc ARR 성장 9% 유지 → 암시적 net retention ~108%+ | ⚠️ (회사 공시 기반) |
| CAD 시장 점유율 | PTC ~11% (매출 기반), Dassault ~20%, Siemens ~15%, Autodesk ~15% (업계 리포트) | ✅ |
| 교육 인프라 | 대학 CAD 과정에서 Creo 비중은 SolidWorks 대비 열세 (SolidWorks가 교육 표준 우세) | ❌ (해자 약화 요소) |

**Creo 해자 리스크:**
- Onshape·Fusion 360 등 **클라우드 네이티브 CAD**가 신규 엔지니어·SME 시장에서 Creo 신규 채택을 잠식. 현실화 시점: 3~7년 (점진적)
- SolidWorks가 교육시장 우위 → 신규 엔지니어 공급 파이프라인이 PTC가 아닌 Dassault 방향. 현실화: 이미 진행 중

### Windchill 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| PLM 시장 점유율 | Windchill ~9%, Dassault ENOVIA ~12%, Siemens Teamcenter ~14% (업계 리포트) | ✅ |
| Forrester 평가 | Siemens Teamcenter와 공동 선두, "포지션이 너무 근접하여 구별이 어렵다" | ✅ (독립 평가) |
| 엔터프라이즈 갱신율 | 명시적 공시 없음. PTC 전체 ARR 성장 9%(cc, ex-K&T) 및 경영진 coments에서 "churn 낮다" 반복 | ⚠️ |
| 규제 감사 트랙레코드 | 항공/방산/의료 업체 다수 Windchill 도입 (사례 기반), FDA/FAA 공식 인증은 없음 | ⚠️ |

**Windchill 해자 리스크:**
- Siemens Teamcenter가 AI/디지털트윈 투자 강화 (Xcelerator 통합). 대형 고객 신규/리뉴얼 경합 격화. 현실화: 2~5년
- 클라우드 전환기 (Windchill+) 지연 시 Siemens/Dassault SaaS 대안에 신규 고객 유출. 현실화: 진행 중

### Codebeamer 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| 자동차 SW 표준 준수 인증 | ISO 26262 지원 공식 명시 (PTC 마케팅 자료) | ⚠️ (내부 공시) |
| 경쟁 위치 | Siemens Polarion·IBM DOORS·Jama와 경합, 단일 지배적 해자 불명확 | ⚠️ |

**Codebeamer 해자 리스크:**
- 자동차 OEM이 SDV(Software-Defined Vehicle) 자체 툴체인 구축 움직임 (Tesla·Rivian 모델). 현실화: 3~7년
- Siemens Polarion과의 경합 심화

### ServiceMax 해자 검증

| 검증 항목 | 수치 / 근거 | 판정 |
|---------|-----------|------|
| Salesforce FSL 대비 점유 | ServiceMax ~$250M ARR 추정, Salesforce FSL은 더 넓은 수평 시장 차지 | ⚠️ |
| 통합도 | Windchill·IoT와 연계 가능하나, Kepware/ThingWorx 매각으로 IoT 허브 상실 | ❌ (해자 약화 요소) |

**ServiceMax 해자 리스크:**
- Kepware/ThingWorx 매각으로 **IoT 데이터 통합 스토리 훼손** → ServiceMax의 원 인수 논리(IoT-FSM 연계) 약화. 현실화: 즉시 (2026-03-16 매각 완료)
- Salesforce FSL의 AI/엔터프라이즈 통합 우위

### 해자 리스크 종합

| 세그먼트 | 핵심 모트 리스크 | 현실화 시점 |
|---------|--------------|-----------|
| Creo | 교육시장 SolidWorks 우세, 클라우드 CAD 신규 잠식 | 진행 중 → 5~7년 |
| Windchill | Siemens Teamcenter AI 레버리지, SaaS 전환 속도전 | 2~5년 |
| Codebeamer | 자동차 OEM 자체 툴체인, Siemens Polarion | 3~7년 |
| ServiceMax | IoT 스토리 훼손(K&T 매각), Salesforce FSL | 즉시 진행 중 |

---

## 해자 강도 평가 — "이 정도 리스크면 충분히 높은 해자인가?"

### 평가 기준

Morningstar Wide Moat 기준: "향후 20년 이상 초과이익을 유지할 수 있는 구조적 우위".
→ 투자 기간 5년 내 Creo/Windchill 핵심 이익의 결정적 훼손 여부가 관건.

### 식별된 해자 리스크 vs 현실화 시점

| 리스크 | 내용 | 현실화 시점 | 해자 훼손 정도 |
|--------|------|-----------|--------------|
| Creo 클라우드 CAD 잠식 | Onshape·Fusion 360의 SME/신규 엔지니어 확보 | 5~7년 | 중간 (PTC 자체도 Onshape 보유로 부분 헤지) |
| Creo 교육시장 열세 | SolidWorks 우위로 신규 엔지니어 공급 제한 | 진행 중 | 약 (기존 대기업 설치 기반은 견고) |
| Windchill Siemens 경합 | Teamcenter AI·Xcelerator 레버리지 | 2~5년 | 중간~강 (대형 고객 리뉴얼 경쟁 심화) |
| K&T 매각으로 IoT 스토리 약화 | FSM·PLM·IoT 통합 스토리 부분 상실 | 즉시 | 약 (핵심 CAD/PLM에 직접 영향 X) |
| 자동차 OEM 자체 SW 툴체인 | Codebeamer·ServiceMax 성장성 제한 | 3~7년 | 약 (비중 ~20%) |

### 판정

**PTC = Narrow Moat ⚠️**

핵심 근거:
① **시간 지평 관점**: Creo·Windchill의 엔터프라이즈 설치 기반은 5년 내 결정적 훼손 가능성 낮음 (BOM·설계이력 락인). 그러나 20년 초과이익을 단정하기엔 SaaS CAD·클라우드 PLM 경쟁이 구조적으로 심화되는 중 → Wide 아닌 Narrow
② **전략적 헤지 관점**: Creo(설계) + Windchill(관리) 번들은 독립 도구 단독 도입 대비 교체비용이 곱셈적으로 증가 → 복합 해자 존재하나, 단일 지배적 글로벌 리더는 아님 (Dassault·Siemens와 3파전)
③ **계약/구조적 보호 관점**: 전량 구독 전환 완료, net retention 100%+ 유지. 단, 이는 현재 고객 유지이지 신규 시장 지배력의 증거는 아님

**단, 주의 구간:**
- Windchill cc ARR 성장이 +5% 아래로 감속 → Siemens에 대한 대형 고객 패배 신호
- Creo 신규 시트 증가율 둔화 + Onshape 성장률이 이를 상쇄하지 못할 경우 → CAD 세그먼트 성장 정체 경고

---

## 리스크 요인

### 1. 대형 엔터프라이즈 경쟁 심화 ⚠️

**설명**: Siemens Xcelerator·Dassault 3DEXPERIENCE가 통합 플랫폼 전략으로 대형 제조 고객 신규/리뉴얼 경합 강화. PTC Windchill은 Forrester 평가 공동 선두이나 Siemens가 미세 우위.

**규모/비중**: Windchill 추정 ARR ~$900M = 전체의 ~38%. 대형 고객 1~2개 이탈 시 YoY 성장률 2~3%p 충격.

**시나리오별 영향**: Bear/Extreme Bear에서 cc ARR 성장 5% 이하 감속.

**완화 요인**: BOM/이력 락인, 5년 계약 구조.

**팩트체크**: Siemens Digital Industries FY25 성장률과 PTC Windchill 성장률 직접 비교 불가 (Siemens 개별 세그먼트 공시 제한). ❓

### 2. 클라우드 전환 속도 경쟁 ⚠️

**설명**: Windchill+ SaaS 전환이 지연되거나 고객 마이그레이션 비용 부담이 크면 신규 고객이 SaaS-native 경쟁사로 유출.

**규모/비중**: 현재 Windchill ARR의 SaaS 비중 공시 없음 (<20% 추정).

**시나리오별 영향**: Base/Bull은 Windchill+ 전환 가속 가정, Bear는 정체 가정.

**완화 요인**: Onshape(cloud-native CAD) 보유로 플랫폼 경험 축적.

**팩트체크**: SaaS 비중 공식 공시 없음. ❓

### 3. Kepware/ThingWorx 매각 후 성장 스토리 재정립 ⚠️

**설명**: 2026-03-16 TPG에 $523M 현금 + earn-out 최대 $125M 매각. IoT 기반 Digital Thread 내러티브 약화. 주가 $133~220 레인지 하단에서 거래되는 이유 중 하나.

**규모/비중**: 매각 ARR ~$160M (추정, Q1'26 총 ARR $2.5B vs ex-K&T $2.341B 차이). 약 6.4%.

**시나리오별 영향**: 매각대금 $375M ASR → 주식수 2.5~3% 감소 (+EPS 효과). Base 가정 반영.

**완화 요인**: 매각대금 전액 자사주매입 → FY26 buyback $1.1~1.3B.

**팩트체크**: 매각가 $523M + earn-out 최대 $125M = 총 $648M, 공시 일치. ✓

### 4. 매크로·제조업 사이클 둔화 ⚠️

**설명**: 제조업 CapEx·신규 프로젝트 축소 시 신규 시트 판매·Windchill 확장 둔화. 10Y Treasury 4.34%(2026-04-10) 고금리 환경.

**규모/비중**: 신규 성장의 ~40% (추정)이 기존 고객 확장, 60% 신규 시트.

**시나리오별 영향**: Bear/Extreme Bear에서 ARR 성장 둔화.

**팩트체크**: 제조업 PMI·CapEx 지표와 PTC 성장의 historical correlation 추적 필요. ❓

### 5. 밸류에이션 멀티플 압축 ⚠️

**설명**: 현재 EV/FCF ~17x, 주가 52주 저점 근접. SaaS 멀티플 전반 압축 지속 시 더 하락 여지.

**규모/비중**: -20% 추가 하락 가능성 (Extreme Bear 구간).

**시나리오별 영향**: Extreme Bear에서 exit 멀티플 12x 가정.

**완화 요인**: $1B 연간 buyback + 저점 매입 효과.

**팩트체크**: PTC 5년 EV/FCF 범위 15~30x (공개 데이터), 현재 범위 하단. ✓

### 6. 이자 부담 및 자본구조 ⚠️

**설명**: Q1'26 총부채 $1.2~1.37B, 현금 $184~210M, Net Debt ~$990M~$1.19B. 금리 환경에서 refinancing 비용 증가 가능.

**규모/비중**: Net Debt / FY26 FCF = ~1.0x. 관리 가능 수준.

**팩트체크**: 공시 기반 확인. ✓

### 7. 경영진 교체 리스크 ⚠️

**설명**: CEO Neil Barua가 2024년 선임(Jim Heppelmann 후임). 전임 CEO 대비 전략 실행 기록 축적 중. Kepware/ThingWorx 매각은 포트폴리오 단순화 신호이나 M&A 전략 변곡점.

**팩트체크**: 매각 결정 + buyback 확대 = 자본배분 규율적. 긍정적 해석 우세. ✓

### 리스크 독립성 확인

- 리스크 1·2·4는 상호 상관 (매크로 + 경쟁 심화 동시 발생 가능)
- 리스크 3·5는 상대적 독립 (매각은 이미 실행, 멀티플은 시장 전반)
- Creo와 Windchill은 번들 판매되나 독립적 사이클 가능 (설계 툴 vs 엔터프라이즈)
- 시장이 CAD/PLM Core와 FSM/ALM 성장 옵셔널리티를 구분 평가하지 않는 경향 → 저평가 엣지 소지

### 리스크 수치 팩트체크 종합

| # | 항목 | 판정 | 비고 |
|---|------|------|------|
| 1 | Windchill cc ARR 성장 vs Siemens | ❓ | Siemens 세그먼트 분해 제한 |
| 2 | Windchill SaaS 비중 | ❓ | PTC 미공시 |
| 3 | K&T 매각가 $523M + $125M earn-out | ✓ | 공시 |
| 4 | 제조업 매크로 correlation | ❓ | 직접 추적 필요 |
| 5 | 5년 EV/FCF 범위 15~30x | ✓ | 시장 데이터 |
| 6 | Net Debt $990M~$1.19B | ✓ | Q1'26 공시 |
| 7 | Barua CEO 취임 + 자본배분 | ✓ | 공시 |

---

## 모니터링 지표

### 해자 건전성 모니터링

| 출처 | 모니터링 항목 | 기준값 | 현재 상태 |
|------|------------|-------|----------|
| Creo 해자 | cc ARR 성장률 (전체 PTC, ex-K&T) | ≥ 7% | ✓ (Q1'26 9%) |
| Windchill 해자 | cc ARR 성장률 | ≥ 7% | ✓ (암묵적) |
| Windchill 해자 | Forrester PLM Wave 포지션 | Leader 유지 | ✓ (Siemens와 공동) |
| Creo 해자 | Onshape ARR 성장률 | > 20% YoY | ❓ (세그먼트 미공시) |
| Windchill+ | SaaS 비중 추이 | 상승 | ❓ (미공시) |

### 리스크 모니터링

| 출처 | 모니터링 항목 | 경고 기준 | 현재 상태 |
|------|------------|---------|----------|
| 리스크 1 | cc ARR (ex-K&T) QoQ | 2개 분기 연속 감속 | 현재 9% (가이드 7.5~9.5%), 정상 |
| 리스크 2 | Windchill+ 신규 계약 공시 | 분기 코멘트 부재 시 경고 | 최근 콜에서 코멘트 유지 |
| 리스크 3 | ASR 완료 (FY26 Q3) | $375M ASR 집행 | 진행 중 |
| 리스크 4 | ISM Manufacturing PMI | < 48 (수축 심화) | 추적 필요 |
| 리스크 5 | Forward EV/FCF | < 13x → 추가 매수, > 25x → 비중축소 | 현재 ~17x |
| 리스크 6 | Net Debt / FCF | > 2.0x | 현재 ~1.0x, 안정 |
| 매크로 | 10Y Treasury | > 5.0% (WACC +100bp 충격) | 현재 4.34% |

### 즉시 재검토 트리거

- cc ARR 성장(ex-K&T)이 2분기 연속 6% 이하 → Windchill 경쟁 패배 신호
- 연간 FCF 가이던스 $900M 이하로 하향 → 마진 구조 훼손
- Siemens/Dassault가 대형 PTC 고객 공개 wins 공시 2건+
- Forrester·Gartner PLM 평가에서 Leader 포지션 이탈
- Net Debt / FCF > 2.0x로 상승 (레버리지 사이클 재개)

---

## DCF 시나리오 & 가치평가

### 7-0. DCF 방법론 선택

- **적용 방식**: **A. Standard FCF DCF** (주), **E. Forward Multiple (EV/FCF)** 교차검증 병행
- **선택 근거**:
  - PTC는 K&T 매각 후 **단일 사업(CAD/PLM/ALM/FSM 구독 소프트웨어)** 구조. 이익 성격이 모두 구독 ARR → FCF 변환으로 동질적
  - FY26 FCF 가이던스 ~$1.0B로 안정 현금흐름 확보, FCF margin ≈ 37%
  - 자본집약도 낮음 (소프트웨어, CapEx intensity < 3% of revenue)
  - 성장률 안정 (cc ARR 7~10% 레인지), Terminal 가정 수립 가능
- **대안 대비 우위**:
  - **B. SOTP 부적합**: 세그먼트별 멀티플 차이가 크지 않음 (모두 엔터프라이즈 구독). K&T 매각 후 이질적 세그먼트 소멸
  - **E. Forward Multiple만 사용 부적합**: 안정 FCF 있어 DCF로 직접 평가 가능. 단, TV 의존 높으므로 Multiple 교차검증 필수
  - **D. NAV 부적합**: 자산 기반 아닌 이익 기반 사업
- **주요 가정 요약**:
  - WACC 9.0% (10Y Treasury 4.34% + ERP 5% + β ~1.0 + 소폭 기업 프리미엄)
  - Terminal g 2.5% (장기 GDP 상한)
  - 세율 22% (실효세율)
  - Exit Multiple (교차검증): EV/FCF 18~22x (역사 범위 15~30x 중 중간값)
  - 희석 주식수: FY26말 기준 ~115M (ASR 반영)
  - Net Debt: ~$900M (FY26말 추정, 매각대금 수령 + ASR 집행 반영)

### 7-1. DCF 구조 설계

**이익 변수**: FCF (OCF - CapEx). PTC는 Non-GAAP EPS가 Stock-based Compensation 미포함이라 FCF 중심 평가가 합리적.

**밸류에이션 공식**:
```
EV = Σ[FCF_t / (1+WACC)^t] + TV / (1+WACC)^5
주주가치 = EV - Net Debt
목표가 = 주주가치 / 희석주식수
TV = FCF_6 / (WACC - g)   (Gordon)
또는 TV = FCF_5 × Exit EV/FCF Multiple  (Exit Multiple)
```

**기본 가정 테이블**:

| 항목 | 값 | 출처/근거 |
|------|-----|----------|
| 기준 FCF (FY26E) | $1.0B | 회사 가이던스 |
| 희석 주식수 | 115M | Q1'26 118.9M + FY26 ASR 감소 반영 |
| Net Debt | $900M | Q1'26 $990M - 매각대금 일부 |
| WACC | 9.0% | 계산 근거: Rf 4.34% + β 1.0 × ERP 5% = 9.34%, 라운딩 9% |
| Terminal g | 2.5% | 미국 장기 GDP 상한 |
| 세율 | 22% | 최근 3년 실효세율 |

**멀티플 기준 (교차검증용)**:
- 정상: EV/FCF 20~24x (역사 중앙대)
- 스트레스: 15~18x (2022~2023 하락기 저점)
- 위기: 12x 이하 (2020년 COVID 초기)

### 7-2. 시나리오별 DCF 계산

#### Extreme Bear — 확률 15%

**전제 조건:**
- 제조업 깊은 침체 (ISM < 45), CapEx freeze
- Siemens/Dassault가 대형 고객 다수 확보 → cc ARR 성장 2~3%
- SaaS 멀티플 대폭 압축 (EV/FCF 12x)

**시나리오 진입 신호:**
- cc ARR 성장 2분기 연속 < 5%
- ISM Manufacturing < 45
- 10Y Treasury > 5.0% 지속

**DCF 계산:**
```
ARR CAGR: 3% (5y)
FCF Y5: $1.0B × 1.03^5 = $1.16B
Exit Multiple: 12x (위기 수준)
EV Y5: $1.16B × 12 = $13.9B
Discount to today (WACC 10%, +100bp 스트레스):
  PV EV = $13.9B / 1.10^5 = $8.63B
- Net Debt: -$0.9B
주주가치: $7.73B
÷ 115M shares
────────────────
목표가: $67
현재가 $142.44 대비: -53%
```

#### Bear — 확률 25%

**전제 조건:**
- 제조업 둔화 + Windchill 성장 감속 (5% 수준)
- 일부 대형 고객 Siemens로 이탈
- EV/FCF 16x로 멀티플 압축

**시나리오 진입 신호:**
- cc ARR 성장 5~6%
- Windchill+ 전환 지연 공시
- PMI 48 이하 6개월 지속

**DCF 계산:**
```
FCF CAGR: 5% (5y)
FCF Y5: $1.0B × 1.05^5 = $1.28B
Exit Multiple: 16x
EV Y5: $1.28B × 16 = $20.4B
PV (WACC 9%): $20.4B / 1.09^5 = $13.27B
- Net Debt: -$0.9B
주주가치: $12.37B
÷ 115M shares
────────────────
목표가: $107
현재가 $142.44 대비: -25%
```

#### Base — 확률 40%

**전제 조건:**
- cc ARR 성장 8~9% (가이던스 중간값 유지)
- FCF margin 유지, FY30 FCF $1.5B
- Exit EV/FCF 20x (역사 중앙 하단)
- 자사주매입 지속 → Y5말 주식수 108M로 감소 가정

**시나리오 진입 신호:**
- cc ARR 성장 가이던스 레인지 유지
- FY26 FCF $1B 달성
- 금리 안정 (10Y 4.0~4.5%)

**DCF 계산:**
```
FCF CAGR: 9%
FCF Y5: $1.0B × 1.09^5 = $1.54B
Exit Multiple: 20x
EV Y5: $1.54B × 20 = $30.8B
PV (WACC 9%): $30.8B / 1.09^5 = $20.0B
- Net Debt: -$0.9B
주주가치: $19.1B
÷ 108M shares (ASR + 지속 buyback 반영)
────────────────
목표가: $177
현재가 $142.44 대비: +24%
```

**교차검증 (단순 Forward Multiple)**:
- Y1 FCF $1.0B × 22x / 115M = $191 → discount 1년 = $175. 일치.

#### Bull — 확률 20%

**전제 조건:**
- cc ARR 성장 가속 11~12% (Windchill+ SaaS 전환 성공 + AI 업셀)
- FCF margin 확장 (38~40%) → FY30 FCF $1.8B
- Exit EV/FCF 25x (정상 상단)
- 적극적 buyback 지속 → Y5말 주식수 105M

**시나리오 진입 신호:**
- cc ARR 성장 2분기 연속 > 10%
- Windchill+ SaaS 비중 공시 + 가속
- 대형 OEM wins 공시
- AI 기능 업셀 사례 축적

**DCF 계산:**
```
FCF CAGR: 12%
FCF Y5: $1.0B × 1.12^5 = $1.76B
Exit Multiple: 25x
EV Y5: $1.76B × 25 = $44.0B
PV (WACC 9%): $44.0B / 1.09^5 = $28.6B
- Net Debt: -$0.7B (지속 FCF로 부채 상환)
주주가치: $27.9B
÷ 105M shares
────────────────
목표가: $266
현재가 $142.44 대비: +87%
```

**붕괴 조건:**
- cc ARR 성장 다시 8% 이하로 복귀
- AI 기능 채택률 저조
- 자사주매입 축소 (경영진 자본배분 방향 전환)

### 7-3. 가중평균 내재가치

```
시나리오       확률    중간값    기여
──────────────────────────────────
Extreme Bear   15%    $ 67    $10.05
Bear           25%    $107    $26.75
Base           40%    $177    $70.80
Bull           20%    $266    $53.20
──────────────────────────────────
가중평균 내재가치:            $160.80
가중평균 범위:       $107 ~ $266
현재가 $142.44 대비:          +13%
```

**확률 배분 근거:**
- Extreme Bear 15%: 제조업 사이클 깊은 침체는 과거 패턴상 10% 미만이나, 현재 금리 레짐·지정학 리스크 반영해 상향
- Bear 25%: 현 주가가 이미 둔화 가격에 가깝고, Siemens 경쟁 심화는 현실적 기본 시나리오. 보수적 가중
- Base 40%: 가이던스 중간값이 가장 가능성 높은 경로
- Bull 20%: Windchill+ SaaS 전환·AI 업셀 성공 시 강한 업사이드. 다만 미공시 KPI 의존도 높음
- Extreme Bear + Bear = 40% ≥ 35% (보수 원칙 준수)

### 7-4. 실적 데이터 — 현재 어디에 위치하는가

**Q1 FY26 실적 테이블 (보고 2026-02-04):**

| 지표 | 수치 | YoY | DCF Case 위치 |
|------|------|-----|-------------|
| cc ARR (ex-K&T) | $2.341B | +9% | **Base** 상단 (가이던스 7.5~9.5% 상단 근접) |
| cc ARR (incl K&T) | $2.5B | +8.4% | Base |
| FCF | $267M | +13% | Base~Bull |
| Revenue (Q1) | +21% YoY | — | Base~Bull |
| Non-GAAP EPS | +104% YoY | — | Base~Bull |

**트렌드 판단:**
```
cc ARR 성장 궤적: FY24 ~11% → FY25 ~10% → Q1'26 9% → FY26 가이드 7.5~9.5%
──────────────────────────────────────────
현재 위치: Base (8~9%) 경계
트렌드 방향: 완만한 감속 → Base 유지, Bear 접근 아님
```

**가이던스 반영 방향:**
- FY26 가이던스 달성 (FCF $1B, cc ARR 7.5~9.5%) → Base 유지
- FY26 가이던스 상회 → Bull 방향
- FY26 가이던스 하향 (cc ARR < 7%) → Bear 방향

**핵심 관찰:**
- **가장 중요한 변수**: Windchill(PLM) cc ARR 성장률. 전체 ARR의 ~38%이며 Siemens 직접 경합. 회사는 세그먼트별 성장 공시 안 함 → IR 콜 코멘트 정성 추적 필수
- **향후 확인 시점**: 2026-04-29 예정 Q2 FY26 실적 발표

### 7-5. 가치평가 결과

| 지표 | 수치 | 평가 |
|------|------|------|
| 현재 주가 | $142.44 (52주 고점 $219.69 대비 -35%) | 저점 근접 |
| 52주 저점 | $133.38 | 근접 (6% 위) |
| Forward PE | $142 / $7.92 (가이던스 중간값) = 18x | 역사 평균 25~30x 대비 **저평가** |
| PEG | 18 / 9 (ARR 성장) = 2.0 | 경계 (≤1 저평가 기준 미달, >2 고평가 기준 직전) |
| Forward EV/FCF | ($16.38B + $0.9B) / $1.0B = 17.3x | 역사 범위 15~30x 중 **하단** |
| 가중평균 내재가치 | $160.80 ($107 ~ $266) | 현재가 대비 **+13% 업사이드** |
| 손익비 (Base vs Bear) | +24% / -25% | 1.0 (비대칭 부족) |
| 손익비 (Base vs Extreme Bear) | +24% / -53% | 0.45 (하방 더 큼) |
| 애널리스트 평균 목표가 | $184.91 | 본 Base DCF $177과 유사 |

**결론**:
가중평균 내재가치 $161 vs 현재 $142 → **+13% 업사이드, 매수보다는 분할 매수 구간**. Base 시나리오만 보면 +24%이나, Extreme Bear 하방이 -53%로 손익비가 대칭적이지 않음. 52주 저점 $133 하회 시 Extreme Bear 리스크 실체화 경고. Windchill 경쟁 감속 확인되면 Bear 이동.

---

## 거장 관점

| 투자자 | 판단 | 근거 |
|--------|------|------|
| **버핏** | ⚠️ 조건부 | 엔터프라이즈 락인 + 반복수익 구조는 선호 유형. 그러나 Narrow Moat 판정 + SaaS 경쟁 불확실성 + 자본배분(buyback) 규율은 긍정. 가격이 Base 대비 20%+ 할인이면 매수, 현 13% 할인은 부족 |
| **멍거** | ❌ 부정 | Moat이 독점적이지 않음 (Dassault·Siemens와 3파전). "1등 아닌 투자는 수익률이 평범해진다" 관점에서 보류 |
| **피셔** | ⚠️ 조건부 | Fantastic company 관점에서 R&D 규율·CEO 교체 성공 여부 관찰 필요. Neil Barua의 전략 실행 트랙 1~2년 축적 후 판단 |
| **린치** | ✅ 긍정 | Stalwart 분류. 반복수익 ARR + FCF 예측성. PEG 2.0은 경계이나 52주 저점 근접은 타이밍상 우호 |
| **막스** | ✅ 긍정 | 시장이 K&T 매각·경쟁 우려로 과도하게 처벌한 구간. Second-level thinking 관점에서 현재 -35% drawdown은 mean reversion 확률 보상 가능 |

**거장 동의도**: 2명 긍정 / 1명 부정 / 2명 조건부

---

## 종합 판정

```
[ PTC ] 평가 요약
────────────────────────────────
비즈니스 퀄리티  : ⚠️  Narrow Moat, CAD/PLM 3파전 속 상위권. 락인은 강하나 단독 1등 아님
시장 환경        : ⚠️  매크로 제조업 둔화 우려 + 고금리. 다만 K&T 매각으로 포트폴리오 단순화 완료
가치평가         : ⚠️  가중평균 대비 +13% 업사이드. 52주 저점 근접이나 손익비 대칭성 부족
리스크           : ⚠️  Siemens 경쟁·SaaS 전환 속도·Windchill 성장 감속 가능성
거장 동의도      : 2명 긍정 / 1명 부정 / 2명 조건부
────────────────────────────────
종합 의견        : 분할 매수 (13% 할인 구간, 추가 15% 하락 시 공격적 매수)
────────────────────────────────
핵심 모니터링:
  1. cc ARR 성장률(ex-K&T) — 7% 이하 감속 시 Bear 진입
  2. Windchill+ SaaS 전환 공시·고객 wins
  3. Forward EV/FCF 13x 도달 여부 (공격 매수 트리거) / 25x 이상 (비중축소)
```

---

## 분기별 점검 기록

| 날짜 | 실적 요약 | Case 위치 변화 | 가설 업데이트 |
|------|----------|-------------|-------------|
| 2026-04-14 | Base 작성 — Q1'26 cc ARR 9%, FCF $267M(+13%), K&T 매각 완료 | 신규: Base | 초기 thesis 설정: Narrow Moat, 분할 매수 구간 |

**다음 점검 트리거**: 2026-04-29 Q2 FY26 실적 발표
