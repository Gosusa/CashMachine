# LLY — 스트레스 테스트

> **Base 파일 연결**: `LLY_base.md` 의 Bear $620 / Extreme Bear $320 (1-year forward target) 값을 기준으로 시뮬레이션한다.
> **주의**: 본 파일의 시나리오는 DCF 가중평균에 **반영하지 않는다**. 외생 충격·꼬리 위험 점검용 참고 자료다.

**작성일**: 2026-04-19
**선택 기준**: LLY에 관련성 높은 4개 시나리오 (금리, pharma tariff, GLP-1 class safety recall, 경쟁 파괴). US-China decoupling·CAPEX 병목 등 일반 시나리오는 base의 리스크 요인에서 이미 부분 커버되어 제외.

---

## 1. 금리 상승 (WACC +200bp)

### 가정
- 연준 재긴축 or 재정 리스크로 **10Y UST 4.3% → 6.3% (+200bp)**. 2025~26 디스인플레이션 정체(cpi 3.5%+ 고착) + term premium 확대 시나리오
- LLY WACC 8.0% → 10.0%
- Exit EV/EBITDA 멀티플 정상 18x → 스트레스 13x (듀레이션 민감도, 빅파마 고성장주는 장기 CF 비중 높음)
- Forward PE 25x → 18x 동반 디레이팅

### 재무/밸류에이션 충격 추정
- DCF Base 1-year forward target $980 → 대략 $680 (할인율 +200bp + 멀티플 -28%)
- 영향 크기: **-$300/share, -30%**
- 내재 EV 변화: $820B → $620B (약 -25%), TV PV 비중 87% → 80%로 단축되며 TV 자체가 -35% 수축

### 버티는 근거
- LLY는 **IG 등급 (A+/A1)**, 고정금리 장기채 비중 높아 직접 이자비용 충격 제한적. FY25 순부채 $35B, 가중평균 듀레이션 6~7년
- Mounjaro/Zepbound 현금흐름은 소득 비탄력 (비만·T2D 치료는 경기와 무관한 건강 지출). OOP 환자조차 처방 지속률 높음
- 금리 상승 환경에서 **defensive pharma + 고성장**의 희소성은 상대적 매력 요인이 될 수 있음 (2022~23 상대 강세 이력)

### 취약 근거
- LLY 현재 멀티플(Forward PE 27x)은 고성장 프리미엄 반영. 할인율 상승 시 **가장 먼저 압축되는 레버**
- CapEx 사이클($10B+/년) 진행 중 → 신규 발행 금리 상승 시 재투자 수익률 저하
- **growth stock duration**: LLY의 5년 TV 비중 > 80%, 듀레이션 주식 특성. S&P500 대비 금리 베타 약 1.2 (추정)

### 관찰 지표
- 10Y UST yield 5.0% 상향 돌파 or 30Y 6.0% 돌파
- TIPS 10Y breakeven 3%+ (인플레 고착 신호)
- LLY IG credit spread 확대 (Investment Grade Corp 200bp+)
- P/E multiple contraction: LLY Forward PE 22x 이하 지속(멀티플 압축 개시 신호)

### 실현가능성: **15%**
- 근거: 연준 2025~26 dot plot은 중립금리 3.5~4.0% 구간, 시장 forward curve는 4~5% 수준 예상. 단, 재정 리스크(국채 수급 악화)로 term premium 확대 시 realised yield 5~6% 가능. Base case는 아니나 완전 무시 불가

### Bear DCF 반영 시 기여
- **주가 충격 ≈ -30%** × **실현가능성 15%** = **-4.5%p** Bear 추가 기여
- 산식: Bear $620 × (1 − 0.045) = $592 (금리 단독 반영 시)

---

## 2. 미국 Pharmaceutical Tariff 25% + 보복관세

### 가정
- Trump 2026년 EU·스위스·아일랜드 원료/완제 의약품 수입 **25% tariff** 발효 (현재 검토 중인 Section 232 조치 본격 실행)
- LLY 해외 생산분(Ireland Kinsale, Italy Sesto 등) US 역수입 시 관세 발생
- **보복관세**: EU·중국이 US 완제품(LLY 포함) 15~20% 보복관세 부과 → LLY EU·China 매출 $12B+(18%) 직격
- 선택적으로 완화: LLY의 $50B+ US CAPEX 전략이 장기적으로는 관세 회피 경로 제공

### 재무/밸류에이션 충격 추정
- COGS 증가: FY25 COGS $11.05B × 수입 비중 30% 가정 × 관세 25% = **연 $830M 비용 증가**
- EU·China 매출 보복관세로 volume -10% = **연 $1.2B 매출 감소 + EBITDA -$500M**
- 합산 EBITDA 영향: **-$1.3B/년 (FY27~28)**
- Base 1-year forward target $980 → 대략 $870 (-$110, -11%)

### 버티는 근거
- LLY는 2021~2026 **$50B+ US 신규 CAPEX** (Lebanon IN, Concord NC, Research Triangle NC, Pleasant Prairie WI, Houston TX) 집행 중 → 2028~29년 US 공급 비중 80%+ 목표. 경쟁사 대비 관세 노출 낮음
- Orforglipron은 **small molecule + US 제조 예정** → 관세 영향 최소
- CMS/HHS는 국내 생산 기업에 **우선 조달·IRA 협상 완화 인센티브** 제공 의사 표명 (2025-11 Trump MFN 합의 조건)

### 취약 근거
- CAPEX 완공 전 **2~3년 전환 구간 (2026~28)** 취약. 현재 Ireland Kinsale이 Tirzepatide API 핵심 공급처
- 주사제 충전·패키징(finish-fill) 일부 EU 의존 — 전환에 FDA 승인·품질 검증 포함 최소 18~24개월 소요
- EU 보복관세는 NVO·GSK·Roche 등 EU 경쟁사에게 **역 우위** 제공 → 특히 체중 감량 시장에서 NVO 점유 확대 가능

### 관찰 지표
- USTR Section 232 pharmaceutical investigation 최종 조치 발표
- Trump EO 서명 일정 (현재 검토 단계 → 발효까지 통상 6~9개월)
- LLY Ireland → US 공급 전환 진척 (2026~27 분기 공시)
- EU Commission 보복관세 pro-rata 대상 명단 (US pharma 포함 여부)

### 실현가능성: **20%**
- 근거: Trump 1기 (2018~19) Section 232 투자 후 실제 관세 적용은 자동차·철강 수준 25%까지 기록 있음. 2026 pharmaceutical 대상 EO는 **검토 중 → 발효** 가능성 중간 수준. 전면 25% + 보복은 상한 시나리오로 15~25% 범위 내 20% 채택

### Bear DCF 반영 시 기여
- **주가 충격 ≈ -11%** × **실현가능성 20%** = **-2.2%p** Bear 추가 기여
- 산식: Bear $620 × (1 − 0.022) = $606 (tariff 단독 반영 시)

---

## 3. GLP-1 Class Safety Recall / 블랙박스 경고 확대

### 가정
- FDA 또는 EMA가 GLP-1 class-wide 안전성 문제 확인 → **블랙박스 경고 강화 or 부분 시장 철수**
- 후보 신호: **갑상샘 C-cell 종양(MTC) long-term 데이터**, **gastroparesis 장기 합병증**, **췌장염 누적 사례**, 또는 오프레이블 사용 관련 영양 실조·근육 손실 피해
- 처방 감소: 3~6개월 내 신규 환자 등록 -40%, 기존 환자 이탈 -15%
- LLY·NVO 모두 타격 — LLY 프랜차이즈에 큰 영향 (매출 62% Incretin 의존)

### 재무/밸류에이션 충격 추정
- Tirzepatide (Mounjaro + Zepbound) FY26~27 매출 가정 $55~65B → -25~30% 감소 = **$15~18B 매출 충격**
- EBITDA 영향: $15B × Incretin EBITDA 마진 55% = **-$8~9B/년**
- Orforglipron 런치 동시 차질 → 2026~27 매출 $2B → $500M
- 1-year forward target: Base $980 → 약 $490 (-50%)
- **멀티플 동반 붕괴**: Forward PE 25x → 13x (class-wide 리스크 시 투자자 이탈)

### 버티는 근거
- LLY의 Tirzepatide는 SURPASS / SURMOUNT 프로그램에서 **10,000+ 환자 장기 추적 데이터** 보유 → FDA 대응 역량 높음
- T2D 적응증은 **기존 승인 후 18+년 class 안전성** (exenatide 2005, liraglutide 2010, semaglutide 2017). class recall은 학계 예상 매우 낮음
- 비만 적응증은 **cosmetic** 아닌 **co-morbidity 감소** 증거 축적 (SELECT trial CV 20% risk reduction, Mounjaro CKD 등) → risk/benefit 정당화 강함
- Retatrutide·Orforglipron은 분자 구조 상이 → class recall 시 대체 개발 경로 유지
- Oncology (Verzenio, Jaypirca), Immunology (Taltz), Neuroscience (Kisunla) 세그먼트 $15B+ 매출 유지

### 취약 근거
- **Orphan-style 부작용 사례 언론 확산** 시 FDA 대응과 무관하게 환자 이탈 가속 (2023 gastroparesis 뉴스 사이클 경험)
- 집단 소송 리스크: GLP-1 관련 product liability 소송 2024~2025 누적 7,000+건. class 인증 시 $10B+ 합의금 가능 (과거 Vioxx, Actos 전례)
- Medicare/정부 cover 축소 압박 → 비만 적응증 Part D 배제 가능
- **실현 시 멀티플 디레이팅이 복합 타격**의 주범 — Forward PE -50% (27x → 13x) 가능

### 관찰 지표
- FDA MedWatch Adverse Event Reporting System 분기 업데이트 (MTC, pancreatitis, gastroparesis 빈도)
- CDC/NIH GLP-1 후향적 연구 (2026~27 예상 결과)
- EMA PRAC 안전성 검토 서한
- Class action 등록 건수 (drugwatch.com 집계)
- LLY/NVO 분기 처방 트렌드 (IQVIA TRx)

### 실현가능성: **5%**
- 근거: GLP-1 class는 20년 cumulative 장기 데이터 보유, 주요 기전(GLP-1 receptor agonism)의 safety signal 누적은 약함. 갑상샘 C-cell은 rodent-specific (Trulicity 블랙박스 유지, but primate 재현 부재). 그러나 오프레이블 확산으로 취약 인구 노출 증가 → 꼬리 위험 5% 유지

### Bear DCF 반영 시 기여
- **주가 충격 ≈ -50%** × **실현가능성 5%** = **-2.5%p** Bear 추가 기여
- 산식: Bear $620 × (1 − 0.025) = $604 (safety 단독 반영 시)

---

## 4. 경쟁 구도 파괴 — Amgen Maridebart + Viking VK2735 동시 성공

### 가정
- **Amgen MariTide (maridebart cafraglutide)** Phase 3 결과 positive + 월 1회 투여로 convenience 우위 (2026~27 readout)
- **Viking VK2735** dual GLP-1/GIP Phase 3 체중 -20%+ 재현 + oral + 월 1회 개발 성공 (2027~28)
- NVO CagriSema(2026) + Amycretin Phase 3 동반 성공
- 2028~30 비만 시장이 **3~5개 경쟁 클래스**로 파편화 (현재 LLY+NVO 2개 사) → LLY 점유 60% → 35%로 압축
- Orforglipron·Retatrutide는 기술 우위 확보하지만 **가격 경쟁 압박** 심화 → realized price -15% 추가

### 재무/밸류에이션 충격 추정
- Tirzepatide peak 추정: $65B (Base) → $42B (점유 -35%)
- Orforglipron peak: $22B → $13B
- Retatrutide peak: $18B → $10B
- 합산 **FY30 Incretin 매출 $105B → $65B, -$40B 매출 감소**
- EBITDA 영향: -$20B/년 (마진 50% 가정)
- 1-year forward target: Base $980 → 약 $620 (-37%)
- 멀티플 영향: Forward PE 25x → 19x (성장 둔화 + 경쟁)

### 버티는 근거
- LLY는 **head-to-head 데이터 선점 우위** (SURMOUNT-5 vs semaglutide) → 신규 경쟁자는 직접 비교 시험 없이 점유 확보 어려움
- 제조 CAPEX $50B+ 로 **공급 안정성 프리미엄** (2023~24 NVO 공급 부족 중 점유 탈취 사례)
- **LOE thicket 2039~2041** 는 유지 → 제네릭 진입 여전히 차단
- Retatrutide는 **triple agonism**로 mono/dual 대비 효능 상단 (Phase 2 체중 -28% vs dual -20%) → 프리미엄 segmentation 유지
- 비만 TAM 자체 확장($100B → $200B 2035) → 점유 압축 부분 상쇄

### 취약 근거
- Amgen은 **Prolia/Evenity/Repatha**로 self-administered injectable 유통망 보유, market access 학습곡선 짧음
- Viking은 **small biotech**지만 최근 $600M+ 공모 자금 확보, 2027 상업화 현실성 높아짐
- 중국 기반 **Innovent (mazdutide)** 2026 승인 가정 시 EM/중국 TAM 추가 잠식
- **GLP-1 = commodity화** 우려 (2030+): differentiating indication(CKD, MASH, CVD)만으로 지속 프리미엄 유지 어려움
- LLY의 multi-indication strategy (CVD, AD, OSA 등)가 경쟁사도 동일 경로로 진입 → 구조적 차별화 감소

### 관찰 지표
- MariTide Phase 3 MARITIME 프로그램 readout (2026~27)
- Viking VK2735 Phase 3 개시 (2026 후반 예상)
- NVO Amycretin / CagriSema Phase 3 데이터
- LLY US GLP-1 TRx 점유율 (IQVIA 분기 업데이트) — 55% 하회 시 경고
- 비만 TAM 2027~28 growth rate (neuro-endocrine 저성장 진입 여부)

### 실현가능성: **15%**
- 근거: Amgen Maridebart Phase 3 성공 확률 **40%** (Phase 2 체중 -14~20%, moderate 효능) × Viking VK2735 Phase 3 성공 + 상업화 성공 확률 **30%** (small biotech 리스크) × **동시 양사 성공** 조합 확률 = 0.4 × 0.3 = 12%. 기타 경쟁자(Innovent, Amycretin) 포함 시 **경쟁 구도 중대 변화 확률** 15% 채택

### Bear DCF 반영 시 기여
- **주가 충격 ≈ -37%** × **실현가능성 15%** = **-5.6%p** Bear 추가 기여
- 산식: Bear $620 × (1 − 0.056) = $585 (경쟁 단독 반영 시)

---

## 5. 미·중 Pharma Decoupling + 중국 TAM 차단

### 가정
- 미·중 지정학 격화 → **중국 NMPA가 LLY 혁신 치료제 승인 전면 지연** (Mounjaro·Zepbound 2027+ 중국 승인 철회 or 2030 이후로 이동)
- 동시 미국이 **중국산 API·원료 수입 제재** → LLY 중국 공급 의존 화학 원료(일부 small molecule precursor) 차단
- LLY 중국 매출 FY25 약 $2~3B 규모 → 2028~30 peak 가정 $8~10B → 차단 시 2028+ 증가분 제거

### 재무/밸류에이션 충격 추정
- 중국 매출 2030E $10B → $3B (-$7B/년)
- EBITDA 영향: -$4B/년
- API 공급 차질 시 추가 COGS $300~500M/년
- 1-year forward target: Base $980 → 약 $900 (-8%)

### 버티는 근거
- LLY 글로벌 매출 중 중국 **비중 4~5% 수준** (NVO 8% 대비 낮음) → 상대적 노출 작음
- Orforglipron은 **US/EU에서 전체 TAM 커버 가능** (경구 비만 시장 70% 서구 집중)
- API precursor는 **India·US·EU 대체 소싱** 경로 다각화 가능 (전환 기간 12~18개월)

### 취약 근거
- 중국 비만 유병률 증가 → 2030+ TAM 성장 잠재력 높음. 차단 시 장기 성장 내러티브 훼손
- 파이프라인 중국 임상 지연 → Global Phase 3 데이터 수집 지연 (현재 다수 trial 중국 사이트 포함)
- 중국 로컬 경쟁사(Innovent mazdutide, 3SBio 등)가 공백 대체 → LLY 재진입 난이도 상승

### 관찰 지표
- NMPA 승인 일정 (Mounjaro 2027 시도 진행 상황)
- USTR/BIS export control 추가 (pharma API 지정)
- 중국 국가보험약품목록(NRDL) 협상 결과
- LLY 중국 분기 매출 YoY (10-Q 공시)

### 실현가능성: **10%**
- 근거: 중국 시장은 Trump 2기 지정학 tension 대상이나 pharmaceutical은 인도주의 성격상 전면 차단 가능성 낮음. 부분 제재(특정 혁신 치료제 승인 지연)는 실현 가능, 전면 decoupling은 꼬리 시나리오. **부분 시나리오 30% × 전면 시나리오 기여도 30% = 10%**

### Bear DCF 반영 시 기여
- **주가 충격 ≈ -8%** × **실현가능성 10%** = **-0.8%p** Bear 추가 기여
- 산식: Bear $620 × (1 − 0.008) = $615 (decoupling 단독 반영 시)

---

## Bear DCF 시뮬레이션 합산

### 시나리오별 충격 × 확률 = Bear 기여

| # | 시나리오 | 주가 충격 | 실현가능성 | Bear 기여 (%pt) |
|---|---------|---------|----------|--------------|
| 1 | 금리 +200bp (WACC 10%) | -30% | 15% | -4.5% |
| 2 | Pharma Tariff 25% + 보복 | -11% | 20% | -2.2% |
| 3 | GLP-1 Class Safety Recall | -50% | 5% | -2.5% |
| 4 | Amgen + Viking 경쟁 파괴 | -37% | 15% | -5.6% |
| 5 | 미·중 Pharma Decoupling | -8% | 10% | -0.8% |
| **합계 (단순 합산)** | | | | **-15.6%** |

### 동조성 해석 (상관관계 고려 합산)

- **시나리오 1 ↔ 2**: **독립** — 금리는 매크로, 관세는 정치 정책. 동시 발생 가능
- **시나리오 1 ↔ 3**: **독립** — 금리와 class safety는 무관
- **시나리오 1 ↔ 4**: **약한 음의 상관** — 금리 상승은 경쟁사(특히 small biotech Viking)에게 더 타격. LLY 상대 우위
- **시나리오 2 ↔ 4**: **중상관** — tariff로 EU 경쟁사 타격, but US 경쟁사(Amgen)는 오히려 수혜
- **시나리오 3 ↔ 4**: **음의 상관** — class recall 시 모든 경쟁자 동시 타격, LLY 경쟁 시나리오는 활성화 안 됨
- **시나리오 2 ↔ 5**: **중상관** — 관세와 지정학은 동일 정치 사이클에서 동조 가능

**동조성 보정**:
- 시나리오 2+5 동조 (중상관) → 개별 합 -3.0% → 동조 시 -2.5%로 보정
- 시나리오 3+4 음의 상관 → 하나만 실현, 큰 쪽(4: -5.6%) 유지, 3(-2.5%) 감쇠 → -4.0%
- 시나리오 1은 독립 유지

**보정 후 Bear 기여 합계**: -4.5% (금리) + -2.5% (tariff+decoupling 동조) + -4.0% (safety/경쟁 중 선택) = **약 -11%**

---

## Bear → Stress 반영 시 비교

| 구분 | 값 | 대비 |
|------|------|------|
| **Base 파일 Bear 1-year target** | $620 | 기준선 |
| **Base 파일 Extreme Bear 1-year target** | $320 | -48% vs Bear |
| **단순 합산 적용 시 Bear → $523** | $620 × (1 − 0.156) | -15.6% |
| **동조성 보정 적용 시 Bear → $552** | $620 × (1 − 0.11) | -11% |

### 시사점

1. **동조성 보정 $552는 Extreme Bear $320보다 $232 높다** — Base 파일의 Extreme Bear는 본 Stress 시나리오 절반 이상을 이미 반영한 구조 (MFN 확산 + Retatrutide 실패 + Orforglipron 실패 + 경기 침체가 **동시 발생**). 즉, Extreme Bear는 Stress 시뮬레이션 전부 반영한 수준보다 보수적

2. **가장 큰 기여**: 경쟁 구도 파괴 (Scenario 4, -5.6%) > 금리 상승 (Scenario 1, -4.5%) > Class recall (Scenario 3, -2.5%) > Tariff (Scenario 2, -2.2%) > Decoupling (Scenario 5, -0.8%)
   - **Scenario 3(Class recall)** 은 확률이 5%로 낮지만 실현 시 충격이 -50%로 가장 큼. 꼬리 위험 관리 대상
   - **Scenario 4(경쟁 파괴)** 는 확률 15% × 충격 -37%로 Bear 기여 최대 — **실질적 최대 위험**

3. **참고**: 본 Stress 시뮬레이션은 Revaluation 가중평균에 **반영하지 않는다**. Extreme Bear 15% 확률 설정은 본 Stress 합계보다 우선한다. 본 시뮬레이션은 **"모두 발생했을 때 Bear가 얼마나 더 깊어질 수 있는가"** 점검용이다.

4. **Extreme Bear $320이 보수적으로 설정되어 있는 이유**: 멀티플 압축(Exit EV/EBITDA 10x + Forward PE 12x)까지 반영한 결과. 단일 macro/class 충격보다 **복합 충격(pipeline 실패 + 가격 인하 + 경쟁 + 경기)** 을 반영한 설계.

5. **모니터링 우선순위 (꼬리 위험 관점)**:
   - **1순위**: GLP-1 class 안전성 signal (FDA MedWatch, EMA PRAC, MDL 소송)
   - **2순위**: Amgen MariTide Phase 3 readout (2026~27)
   - **3순위**: 10Y UST 5%+ 지속 여부
   - **4순위**: Pharmaceutical Section 232 EO 서명
