# ORCL — 스트레스 테스트

> Base의 DCF 시나리오(Extreme Bear~Bull)로 포착이 어려운 **외생 충격·꼬리 위험** 점검.
> **Revaluation 가중평균에는 반영하지 않는다.** 참고용 시뮬레이션.

작성일: 2026-04-19
Base 파일의 Bear 중간값: **$124**, Extreme Bear 중간값: **$72**

---

## 시나리오 1: OpenAI Stargate 붕괴 — $300B 계약 해지·파산

### 가정
- OpenAI가 2027~2028년 자금 조달 실패 (2028E 적자 $74B, WSJ 보도). 시리즈 라운드 실패 + MSFT·SoftBank 추가 투자 철회
- Oracle Stargate $300B 계약 중 이행분 제외하고 전량 해지 (prepayment 몰수로 부분 회수)
- 다른 하이퍼스케일러 고객(xAI, Meta, 기타)은 존속하나 OpenAI 공백 메우지 못함
- 시장이 "RPO의 신뢰성 위기" 인식 → 멀티플 crisis 수준(10~12x) 수축

### 재무/밸류에이션 충격 추정
- OpenAI 비중 RPO 추정 ~$200B (Base 분석상 50%+ 추정) 해지 → RPO $553B → $350B
- FY28 OCI 매출 $75B (Base) → $45B (-40%)
- FY29 EPS: $13 (Base) → $7 (-46%)
- Exit PE: 22x (Base) → 10x
- FY29 목표가: $286 (Base) → $70 undiscounted
- 3년 할인 (10%): **$53**
- **주가 충격: Base $215 → $53 (-75%)**

### 회사가 버티는 근거
- Prepayment 구조: Oracle Q3 FY26 CFO "장비 대부분 prepayment 또는 고객 자체 구매" 발언 → GPU 대량 재고 리스크 제한
- License & Support 연 $20B 매출은 OpenAI 독립 → 현금흐름 최소 방어선
- Cloud Apps (Fusion + NetSuite) 연 $16B도 무관
- xAI, Meta, NVIDIA 등 복수 AI 고객 분산 투자

### 취약한 근거
- OpenAI 비중이 RPO 중 가장 크다는 외부 분석 일관 (Motley Fool, CNBC, WSJ)
- 데이터센터 capacity는 OpenAI 맞춤 설계 요소 있어 pivoting 시간 소요
- AI 인프라 자본 시장이 coinciding하게 경색되면 매도자 과잉

### 관찰 지표 (선행 시그널)
- OpenAI 분기별 revenue·cash burn 공개 수치 (SoftBank 공시 간접 확인)
- OpenAI 신규 투자 라운드 성공 여부 (2026~2027)
- Stargate 사이트 건설 속도 변화 (deceleration 시 신호)
- Oracle RPO QoQ 증가분 급감 (<$5B) 또는 감소

### 실현가능성: 15%
- OpenAI 현재 상업적 가치 + 전략적 중요성 (MSFT·Nvidia·SoftBank 지원) 고려 시 전격 파산은 낮음
- 단, 2028E $74B 적자 전망은 "capital-free" 시나리오에서 구조적
- 역사적 유사: WeWork, FTX 등 "unlimited funding assumption" 붕괴 사례 존재

### Bear DCF 반영 시 기여
- 주가/DCF 충격: Base $215 → $53 = -75%
- 동일 충격을 Bear $124에 적용: $124 × (1 − 0.75) = $31 (추가 -$93)
- **기여: -$93 × 15% = -$14.0 (Bear DCF에 $14.0 추가 하락 기여)**

---

## 시나리오 2: AI 인프라 ROIC 붕괴 — 하이퍼스케일러 자본경쟁 역풍

### 가정
- FY26 $50B + FY27~28 $45~50B/년 CapEx가 예상 ROIC 창출 실패
- AI inference 단가가 오픈소스 모델 상용화 + 공급과잉으로 -40% 급락
- OCI gross margin 32% → 20% (AI capacity 특히 압박)
- CapEx 회수 주기 5년 → 10년 연장. 감가상각 부담 누적
- 시장이 "AI CapEx Bubble" 프레임 적용 → Oracle 멀티플 12x 수축

### 재무/밸류에이션 충격 추정
- FY29 OCI 매출 $90B (Base 시나리오와 유사) but GM 붕괴로 operating income 절반
- FY29 EPS: $13 → $8
- Exit PE: 22x → 12x
- FY29 목표가: $286 → $96 undiscounted
- 3년 할인 (10%): **$72**
- **주가 충격: Base $215 → $72 (-67%)**

### 회사가 버티는 근거
- License & Support $20B/년 ROIC 불변 (AI 독립)
- Multicloud DB 전략은 AWS/Azure 내부 수익원이라 Oracle 자본 투자 필요 없음
- CapEx 30~50% 감축 여력 존재 — RPO 이행 외 신규 사이트 연기 가능
- Ellison·Catz의 CapEx 규율 (역사적으로 M&A 외 과잉 투자 적음)

### 취약한 근거
- $50B 가이드 이미 선언 + GPU·변압기·부지 계약 완료 부분 다수
- 하이퍼스케일러 경쟁 시작 시 가격 전쟁 필연 — AI 인프라는 commodity에 가까움
- 이자비용 연 $4~5B+ 고정 부담

### 관찰 지표 (선행 시그널)
- AI inference 가격 (per 1M tokens) 월별 추이 — 40%+ 하락 시 신호
- OCI gross margin 분기별 추이 — 30% → 25% 하회 시 경고
- 3대 하이퍼스케일러 CapEx 가이드 추가 상향 (군비경쟁 격화)
- NVIDIA revenue growth 둔화 (AI CapEx cycle peak 신호)

### 실현가능성: 20%
- AI inference 수요 실질 증가 vs capacity 증가 속도 차이 현재는 수요 우세
- 단, 2027~2029 사이 수요-공급 역전 가능성은 역사적 CapEx cycle에서 일반적
- 역사적 유사: 2000년 닷컴 CapEx 과잉, 2008 원유 CAPEX 과잉, 2016 shale 과잉 → 모두 3~5년 주기

### Bear DCF 반영 시 기여
- 주가/DCF 충격: Base $215 → $72 = -67%
- 동일 충격을 Bear $124에 적용: $124 × (1 − 0.67) = $41 (추가 -$83)
- **기여: -$83 × 20% = -$16.6 (Bear DCF에 $16.6 추가 하락 기여)**

---

## 시나리오 3: 신용등급 Junk 강등 + 차환 위기

### 가정
- 2026년 2H~2027 Moody's BBB- 강등 → 2027 BB(junk) 강등 연쇄
- Oracle 주니어·선순위 채권 spread 400bp+ 확대, 신규 채권 조달 비용 연 7~9%
- 필요한 $100B+ 추가 조달 (KeyBanc 추정)을 mandatory convertible preferred로만 가능 → 연 7~10% 희석 발생
- 시장이 "financial distress" 인식 → risk premium 확대

### 재무/밸류에이션 충격 추정
- 연 이자비용 $5B → $10B+
- FY28 Net Income: Base 대비 -25% (이자 부담 + 희석)
- FY28 희석 주식수 2.95B → 3.20B (+8% 희석)
- FY29 EPS: $13 → $9
- Exit PE: 22x → 13x (credit quality risk)
- FY29 목표가: $286 → $117
- 3년 할인 (10%): **$88**
- **주가 충격: Base $215 → $88 (-59%)**

### 회사가 버티는 근거
- Cash & ST investments $39B + 연 OCF $25~30B → 단기 유동성 충분
- Customer prepayment 구조가 CapEx의 $10~20B 감당
- 투자등급 유지를 위한 CapEx 축소·Stargate 지연 선택 가능
- Ellison 개인 자산 (주로 ORCL 주식) → 희석 동기 낮음

### 취약한 근거
- CDS spread 이미 125bp (2009 수준) → 시장이 이미 우려 표명
- 부채 vs 자본 비율 345% 극단
- FY26~FY27 FCF 음수 확정적 (Base case에서도)
- 2026년 내 OpenAI 계약 축소 등 충격 동시 발생 시 연쇄 강등

### 관찰 지표 (선행 시그널)
- Moody's / S&P 공식 outlook 변경 (Stable → Negative)
- 분기별 CDS spread 추이 (200bp 돌파 시 위기 신호)
- 분기별 interest expense / EBITDA — 25% 초과 시 경고
- Oracle bond yield vs UST spread (300bp 초과 시)

### 실현가능성: 20%
- CDS 125bp는 확률적으로 BB/B 영역에 근접. 시장은 junk급 리스크 pricing 중
- 단, $39B 현금 + OCF 탄탄 + 투자등급 유지 의지 감안 시 실제 강등까진 시간 지연
- 역사적 유사: Intel 2023 A → BBB- 강등 경로 (FCF 음수 + CapEx 부담 유사)

### Bear DCF 반영 시 기여
- 주가/DCF 충격: Base $215 → $88 = -59%
- 동일 충격을 Bear $124에 적용: $124 × (1 − 0.59) = $51 (추가 -$73)
- **기여: -$73 × 20% = -$14.6 (Bear DCF에 $14.6 추가 하락 기여)**

---

## 시나리오 4: AI 수출통제·규제 쇼크

### 가정
- 미국 정부 BIS 규제 추가 확대: 대중국 GPU·AI 모델 가중치·데이터센터 서비스 수출 통제 강화
- Oracle Stargate 일부 고객(예: 제3국 sovereign AI 프로젝트)의 규제 위반 노출
- EU Digital Services Act + AI Act + GDPR 집행 강화 → 일부 AI inference 서비스 한시 중단
- 독점금지 소송: Oracle Database 끼워팔기, 가격 남용 FTC/EU 조사 재점화 (2015, 2020 전례)
- 중국·인도 sovereign cloud 사업(Cloud@Customer) 부분 몰수 또는 철수

### 재무/밸류에이션 충격 추정
- 해외 OCI 매출 -20~30% (특히 APAC, EMEA)
- 규제 벌금·소송 비용 $5~15B (EU GDPR 최대 fine 연매출의 4% = ~$2.3B)
- FY29 매출 Base 대비 -10~15%
- FY29 EPS: $13 → $10
- Exit PE: 22x → 16x (regulatory risk premium)
- FY29 목표가: $286 → $160
- 3년 할인 (10%): **$120**
- **주가 충격: Base $215 → $120 (-44%)**

### 회사가 버티는 근거
- Oracle은 US 정부·국방·인텔리전스 강력한 관계 (Ellison 정치적 영향력)
- US 내부 Stargate·Abilene 등 주요 자산 규제 영향 제한
- License & Support 매출은 규제 영향 거의 없음
- Sovereign Cloud 전략이 오히려 일부 규제 우호적 (EU 데이터 주권 대응)

### 취약한 근거
- AI 수출통제는 양당 공통 기조 → 점진적 확대 추세
- GDPR·AI Act 벌금은 매출 비례로 규모 큼
- 반독점 이슈는 Oracle의 Java 라이선스·DB pricing에 항시 내재

### 관찰 지표 (선행 시그널)
- BIS 신규 export control rule (분기별 모니터)
- EU AI Act 집행 첫 사례
- Oracle 중국·인도 매출 분기 disclosure (10-Q footnote)
- FTC/DOJ 반독점 조사 재점화 징후

### 실현가능성: 15%
- 규제 강화 방향성은 확정적이나 실제 심각한 충격 수준까지 도달 확률 제한
- 미국 내 AI 인프라는 정치적 보호 자산으로 인식 증가 중
- 역사적 유사: 2013 Oracle EU fine $36M, 2018 US-China semi 제재 효과는 제한적이었음

### Bear DCF 반영 시 기여
- 주가/DCF 충격: Base $215 → $120 = -44%
- 동일 충격을 Bear $124에 적용: $124 × (1 − 0.44) = $69 (추가 -$55)
- **기여: -$55 × 15% = -$8.3 (Bear DCF에 $8.3 추가 하락 기여)**

---

## 시나리오 5: Larry Ellison Key Man 이벤트

### 가정
- 2026~2028 Ellison(80세) 건강 이슈로 CTO·Board Chair 사임 또는 급작스런 이탈
- 전략 일관성 리스크: OpenAI 딜·Stargate·TikTok 관심 등 주요 의사결정이 Ellison 개인 베팅 → 후임자(Co-CEO Magouyrk/Sicilia)는 운영 우수하나 vision-setter 역할 미검증
- Ellison 보유 주식 대량 이전 (신탁·자선) 시 단기 수급 충격

### 재무/밸류에이션 충격 추정
- 단기 (분기): 주가 -15~25% 감정적 반응
- 중기 (1~2년): 성장 감속 (대형 신규 deal 부재) → 매출 CAGR -3~5%pt
- FY29 매출 Base 대비 -5~8%
- FY29 EPS: $13 → $11
- Exit PE: 22x → 18x (전략 불확실성 premium)
- FY29 목표가: $286 → $198
- 3년 할인 (10%): **$149**
- **주가 충격: Base $215 → $149 (-31%)**

### 회사가 버티는 근거
- Co-CEO 체제 이미 1년 안착 (2025 9월부터). Magouyrk(Cloud)·Sicilia(Industries) 각자 영역 확고
- Oracle CFO·COO·기타 경영진 장수 (평균 재임 10년+)
- 주요 기술 자산(DB, OCI, Fusion)은 구조적으로 확립된 상태 — 개인 vision 의존도 감소
- 주주 구성: Ellison 40%+ 보유 → 급격한 전략 변화 방어

### 취약한 근거
- OpenAI·Stargate 같은 mega deal은 Ellison 개인 관계 기반 다수
- Wall Street의 ORCL 평가는 "Ellison의 공격적 AI 베팅" 프리미엄 포함
- TikTok US 인수 같은 non-core 시도는 Ellison 없이 어려움
- 80세 연령은 건강 이벤트 확률 자체가 무시 불가

### 관찰 지표 (선행 시그널)
- Ellison 공개 등장 빈도·에너지 레벨
- 13D/13F 신탁·자선재단 이전 공시
- Magouyrk·Sicilia의 투자자 커뮤니케이션 품질
- 주요 deal 협상에서 Ellison 직접 참여 비중

### 실현가능성: 15%
- 80세 연령 감안 3~5년 내 건강 이슈 가능성 non-trivial
- 단, Ellison은 건강 관리 적극 (Stanford·Emory 의료 후원, 하와이 Lanai 섬 거주)
- 역사적 유사: Apple Steve Jobs(2011, 56세)·Berkshire Buffett(2025 은퇴 발표, 94세)

### Bear DCF 반영 시 기여
- 주가/DCF 충격: Base $215 → $149 = -31%
- 동일 충격을 Bear $124에 적용: $124 × (1 − 0.31) = $86 (추가 -$38)
- **기여: -$38 × 15% = -$5.7 (Bear DCF에 $5.7 추가 하락 기여)**

---

## Bear DCF 시뮬레이션 합산

| # | 시나리오 | 충격 (Base→Stress %) | 실현가능성 | Bear 기여 (-$) |
|---|---------|-------------------|-------|-------------|
| 1 | OpenAI Stargate 붕괴 | -75% | 15% | -$14.0 |
| 2 | AI 인프라 ROIC 붕괴 | -67% | 20% | -$16.6 |
| 3 | Junk 강등 + 차환 위기 | -59% | 20% | -$14.6 |
| 4 | 규제·수출통제 쇼크 | -44% | 15% | -$8.3 |
| 5 | Ellison Key Man 이벤트 | -31% | 15% | -$5.7 |
| **합계 (단순합산)** | | | | **-$59.2** |

**동조성 해석**:
- **상관 높음 (co-incident)**: 시나리오 1(OpenAI) + 2(ROIC) + 3(Junk 강등)은 서로 강력하게 상관. OpenAI 이탈 → AI ROIC 부정 신호 → 신용등급 강등으로 연쇄 발생 가능
- **독립 (idiosyncratic)**: 시나리오 4(규제)와 5(Ellison)는 위 3개와 대체로 독립
- **동조성 보정**: 시나리오 1~3은 상관 0.6~0.7 (상관 1이면 완전 co-incident), 시나리오 4·5는 0.2 수준으로 가정
- 단순합산 대비 동조성 보정 시 **-$42 ~ -$48** 수준이 현실적
- 동시에 모두 발생하지는 않으나 2~3개 조합은 현실적 꼬리 위험

---

## Bear → Stress 반영 시 비교

```
Base 파일 Bear 중간값:           $124
Base 파일 Extreme Bear 중간값:   $72
──────────────────────────────────────
Bear 단순합산 적용:              $124 − $59 = $65
Bear 동조성 보정 적용:           $124 − $45 = $79
──────────────────────────────────────
시사점: 스트레스 테스트 전체 충격은 Bear를 Extreme Bear 수준($72)까지
      끌어내리는 규모. 동조성 보정해도 $79 ~ $65 범위로 Extreme Bear
      근처에 도달
```

**해석**:
- Bear 시나리오의 이미 상당 부분 OpenAI·CapEx·부채 리스크를 반영 중
- Stress는 **Bear 시나리오들이 동시에 현실화되는 꼬리 확률**을 정량화
- 실제 투자 판단에는 Revaluation 가중평균이 기준. Stress는 "하방 극단에서 무엇이 일어날 수 있는가"를 점검
- **현재가 $175가 Bear $124를 14% 상회 중** → Stress 시나리오 반영 시 Bear 단순합산 $65까지 -63% 추가 하락 가능성. 이는 2026 YTD 하락(-49%)과 유사한 규모로 한 번 더 발생 가능하다는 의미

---

## 추가 참고 — 이 파일에 반영하지 않았으나 주의할 시나리오

사용자가 이후 추가·확장 가능한 후보 시나리오:
- **중국-대만 해협 충돌** — TSMC GPU 공급 중단 시 NVIDIA·Oracle 모두 동시 타격
- **전력망 대규모 장애** — 텍사스 ERCOT, PJM 등 AI 데이터센터 집중 지역 위기
- **Cerner 대규모 소송** — EHR 환자 데이터 유출·HIPAA 위반으로 수십억 달러 규모 징벌적 손해배상
- **Gen AI 기술 패러다임 전환** — 차세대 아키텍처(Mamba·State Space Models 등)로 GPU 우위 약화
- **Oracle 전사적 사이버 공격** — OCI·DB 핵심 시스템 침해로 고객 이탈 및 집단 소송
