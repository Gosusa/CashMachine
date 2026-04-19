# AVGO — 스트레스 테스트

> **목적**: Base DCF 시나리오(Extreme Bear~Bull)로 포착이 어려운 **외생 충격·꼬리 위험**을 별도 트랙에서 점검.
>
> **주의**: Revaluation 가중평균에 반영하지 않는다. "만약 이 충격이 현실화된다면 Bear가 얼마나 더 깊어지는가"를 점검하는 참고 시뮬레이션이다.

참조: [AVGO_base.md](AVGO_base.md) — 현재가 $402, 가중평균 내재가치 $337, Extreme Bear $78 / Bear $190 / Base $381 / Bull $628 (모두 현재 PV 기준).

---

## 1. TSMC 대만 공급망 쇼크 (지정학 꼬리위험)

**가정**:
- 대만해협 긴장 고조 — 중국의 군사/경제 봉쇄 또는 반도체 수출 차단으로 TSMC 3nm/2nm + **CoWoS 패키징 capacity 6~12개월 차질**
- AVGO XPU (Google TPU v7/v8, Meta MTIA v2, ByteDance 차세대) 양산 **50%+ 감축**
- Samsung Foundry/Intel 18A 대체는 수율·패키징 병목으로 실질 불가
- 일시적 공급 제약 → 매출 공급 바운드, 고객은 대체선 모색 착수

**재무/밸류에이션 충격**:
- FY27 AI 반도체 매출 $100B 가이드 → $55~65B (-35~45%)
- Semi Op Margin 52% 유지되나 절대 매출 하락이 직격
- Software 매출은 영향 없음 (방어력)
- Blended Forward PE 30x → 20x 멀티플 압축 (지정학 디스카운트)
- **주가 충격: -40%** ($402 → $241)

**버티는 근거**:
- AVGO는 팹리스 구조 — TSMC 리스크는 공급 제약이지 AVGO 대차대조표 직접 타격 아님
- Software $27B 현금창출 세그먼트 영향 無 (공급망 무관)
- AI Capex는 지연될 뿐 소멸 아님 → 공급 회복 시 delayed demand 회복
- Google TPU는 Google 내부 fab 파트너십 전환 검토 가능 (다만 2~3년 지연)

**취약 근거**:
- CoWoS 패키징은 TSMC 단일 의존 — 업계 공통 병목, 단기 대체 불가
- NVDA/AMD/AVGO 모두 동일 노출 — AVGO만의 문제가 아니나 커스텀 ASIC은 Google에 고정되어 있어 NVDA처럼 기다리는 고객 베이스가 분산되지 않음
- VMware 소프트웨어는 영향 없지만 전체 시총의 Semi 비중(~65%)이 커서 방어 제한
- 미국 CHIPS Act 자체 역량 구축까지 5년+ 소요, Intel 18A·Samsung 2nm 수율은 2026년 시점 검증 부족

**관찰 지표**:
- 대만-중국 군사 긴장 지수 (CFR, CSIS 모니터링)
- TSMC 월간 CoWoS 공급 capacity 업데이트, CoWoS-L 대 CoWoS-S 비율
- 미국 정부 대만 정책 발언 강도 (특히 반도체 Secure Supply Chain 관련 법안)
- 주요 hyperscaler의 Samsung/Intel 파운드리 공식 채택 발표

**실현가능성**: **8%** — 단기(3년 내) 실제 봉쇄는 낮은 확률이나 꼬리위험으로 배제 불가. Hock Tan이 FY25 실적 콜에서 언급한 supply chain 분산 시도는 현실화에 2~3년 소요
**Bear DCF 반영 시 기여**: -40% × 8% = **-3.2%pt** Bear 추가 할인

---

## 2. AI Capex 버블 버스트 (구조적 수요 쇼크)

**가정**:
- 2000년대 텔레콤 장비 버블의 반복 — 하이퍼스케일러 5社(Google/Meta/MSFT/Amazon/ByteDance) **동시 Capex 재조정**
- AI ROI 부재 판정 → FY27 CY26~CY27 Capex YoY **-25~35%**
- XPU 주문 취소/지연 → AVGO AI 매출 FY27 $100B → $65B (-35%)
- Nvidia GPU는 H100/H200 가격 50% 폭락, AVGO 커스텀 ASIC도 동반 압박
- 성장 스토리 붕괴 → Forward PE 45x → 18x 멀티플 압축

**재무/밸류에이션 충격**:
- FY27 AI 매출 $65B, FY29 $80B 정체 (Base $160B 대비 -50%)
- Semi Op Margin 52% → 45% (매출 감소로 고정비 레버리지 악화)
- Software는 안정적이나 전체 EV의 AI 프리미엄 소멸
- **주가 충격: -50%** ($402 → $201) — AVGO는 NVDA 대비 고객 집중도 높아 충격 더 큼
- 시장은 Bear ($190) 근처로 빠르게 재평가

**버티는 근거**:
- Software $27B·Op Margin 76% 안정 — 경기 저항 세그먼트
- 넷 부채 $65B는 FCF로 관리 가능 (FY25 FCF ~$27B, 금리 상승 상황 아니면 버틸 수 있음)
- Custom ASIC은 GPU 대비 TCO 우위 → 불황기 "비용 절감" 수요로 전환 가능성 (GPU에서 ASIC으로 이전 가속)
- Hock Tan의 배당 커밋먼트 유지 → 가치주 전환 시 하방 방어

**취약 근거**:
- AVGO는 NVDA보다 고객 다각화 약함 — Google 한 고객에서 AI 매출 40% 의존
- Bull 경로(Forward PE 45x)를 시장이 이미 반영 중 — 반대로 돌아갈 때 낙폭 크기
- 자체 GPU 없음 → AI 추론 전환 가속 시 Nvidia GPU 대체 수혜는 제한
- "$100B FY27" 가이드가 시장 기대의 앵커 — 미달 시 경영진 신뢰도 훼손

**관찰 지표**:
- 하이퍼스케일러 분기 Capex 가이드 변화 (특히 Google/Meta Q1 FY26 어닝)
- AI 인퍼런스 비용당 수익화 지표 (GPT API 단가, Google AI 수익 기여 등)
- XPU 재고 일수 (현재 ~45일, 위험 수준 >60일)
- TSMC CoWoS 가동률이 90%+에서 70% 이하로 하락 시 초기 시그널

**실현가능성**: **15%** — 2000년대 Telecom Capex bust 역사적 선례가 존재. AVGO는 NVDA 대비 구조적 수요 피크 충격이 더 급격 (단일 고객 Google 의존 ~40%)
**Bear DCF 반영 시 기여**: -50% × 15% = **-7.5%pt** Bear 추가 할인

---

## 3. MRVL + Alchip 2nd Source 시장 분할 성공 (경쟁 구도 변화)

**가정**:
- Marvell + Alchip 조합이 **AWS Trainium5/Graviton5·Microsoft Maia2** 공동 설계 획득 (FY27~FY28)
- 기존 AVGO 독점의 AWS·MSFT XPU 외주 시장이 2개 Vendor 체제로 분할
- AVGO 커스텀 시장 점유 80% → **55% 하락** (FY29)
- 가격 경쟁 본격화 → AVGO XPU Blended ASP -15%, Semi Op Margin 52% → 46%
- **Google/Meta/Apple/OpenAI 4사는 AVGO 잔류** (기존 IP 관성) — 충격은 Top 2~3 신규 파이프라인에 집중

**재무/밸류에이션 충격**:
- FY29 AI 매출 $160B → $115B (-28%)
- Semi EBIT 감소 + Software는 영향 없음 (방어)
- Forward PE 30x → 22x 멀티플 압축
- **주가 충격: -28%** ($402 → $289)

**버티는 근거**:
- Google TPU는 AVGO 고유 IP (SerDes·Interconnect)에 깊이 통합 — 스위칭 코스트 절대적
- Meta MTIA·Apple Private Cloud Compute는 AVGO와 수년간 Co-design 관계, 단기 대체 불가
- ByteDance·OpenAI는 신규 진입 고객 — AVGO의 기존 5개 거점은 유지
- MRVL/Alchip이 TSMC CoWoS-L 물량 확보에 시간 소요 — AVGO의 선점 물량 우위 지속

**취약 근거**:
- MRVL은 이미 AWS Trainium4 일부 지분 확보(공식 미공개), 관계 강화 중
- Alchip은 TSMC 자회사급 파트너 — 패키징 병목에서 유리
- AVGO "80% 커스텀 점유" 주장은 정의 모호 — 경쟁사 진입 시 재정의 압력
- 신규 고객 확장(6~7사 시나리오)의 Bull 경로 파손 → Bull 20% 가중치 약화

**관찰 지표**:
- AWS/MSFT Azure 분기 실적에서 차세대 ASIC 파트너 언급 변화
- MRVL 분기 실적의 Custom Silicon 매출 추이 (FY26 $3B → FY27 $7B+ 시 경계)
- Alchip 월매출 데이터 (타이완 주식시장 공시)
- AVGO의 신규 XPU 고객 발표 부재 (6번째 고객 지연 시 시그널)

**실현가능성**: **25%** — MRVL은 이미 AWS 관계 구축, Alchip은 TSMC 친화적 파트너. 2027~2028 구체화 가능성이 실재. AVGO가 "유일한 파트너"라는 전제는 시간 경과 시 약화됨
**Bear DCF 반영 시 기여**: -28% × 25% = **-7.0%pt** Bear 추가 할인

---

## 4. VMware Top 10K 대량 이탈 + 반독점 규제 동시

**가정**:
- EU 집행위·FTC **VMware 구독 전환 관행 공식 조사** (2026년 하반기 개시)
- Top 10K 고객 중 **25%가 KVM/Nutanix/OpenShift로 3년 내 이전** (Base 5%·Bear 15% 대비 가혹)
- 규제 조치로 VCF ELA 가격 인상 제약 → ARPU 성장 정체
- 유럽에서 가격 규제 명령 → 유럽 VMware 매출 -15%
- FY29 Software 매출 $22B로 후퇴 (Base $38B 대비 -42%)

**재무/밸류에이션 충격**:
- Software Op Margin 76% → 68% (매출 감소로 SG&A 레버리지 악화)
- Software EBIT $29B (Base) → $15B (-48%)
- Software Applied PE 20x → 14x 멀티플 압축 (성장성 훼손 + 규제 디스카운트)
- Semi에 영향 없음 — AI Capex 사이클 독립
- **주가 충격: -22%** ($402 → $313) — Software 비중(~35%) 제한적이나 현금기계 역할 상실이 밸류에이션 구조 훼손

**버티는 근거**:
- VMware Top 10K 전환 비용은 실제 12~24개월 소요 — 급격한 이탈은 불가
- Semi 세그먼트는 완전 독립, AI 매출 성장으로 전체 EPS 방어 가능
- VCF Private Cloud 통합은 고객 멀티 하이퍼바이저 전략의 핵심 — 완전 이탈은 아키텍처 재설계 필요
- 규제는 가격 규제 수준에 그칠 가능성 — 분할 명령은 역사적으로 드물다 (Microsoft 반독점 판결 전례)
- Hock Tan의 가격 정책 조기 조정 가능성 — 대안은 Perpetual 라이선스 부활

**취약 근거**:
- Broadcom이 VMware 인수 후 ELA 가격을 10~15배 인상한 사례가 Top 10K에 누적 불만 생성
- Nutanix·OpenShift의 VCF 대체 솔루션이 2026 기점으로 엔터프라이즈급 성숙
- EU는 Microsoft·Apple 사례에서 보듯 반독점 조사에 공격적 — 조사 개시 자체가 규제 리스크 프리미엄
- Software 부문 Op Margin 76%는 업계 최상위 — 경쟁사 진입이나 규제가 normalize 시키면 이 수준 유지 불가

**관찰 지표**:
- EU 집행위 VMware 반독점 조사 공식 발표 여부 (주요 시그널)
- AVGO Infrastructure Software 분기 YoY 성장률 (현재 +10%, 0% 근접 시 Bear 진입)
- Nutanix·Red Hat OpenShift 분기 실적에서 "VMware migration wins" 언급 빈도
- Top 10K 갱신률 (현재 >90%, 80% 하락 시 경계)

**실현가능성**: **18%** — EU 조사 가능성은 실재 (2026년 초 BoA·Lloyds 등 대형 고객의 가격 인상 반발 뉴스 다수). Top 10K 대량 이탈은 시간 소요로 단기 실현 낮으나 3~5년 뷰에서는 점진적 실현 가능성 존재
**Bear DCF 반영 시 기여**: -22% × 18% = **-4.0%pt** Bear 추가 할인

---

## 5. 하이퍼스케일러 In-house 완전 전환 (파트너십 종료)

**가정**:
- Google/Meta 중 1사가 **2027~2028 차세대 ASIC을 자체 Full-Stack 설계**로 전환 (AVGO IP 의존 제거)
- AVGO와의 계약 갱신 실패 — 해당 고객 매출 제로화 (2~3년 단계적 축소)
- 나머지 4개 고객(Apple·OpenAI·ByteDance + 잔존 1사)은 유지
- 하이퍼스케일러 업계 내 "In-house 전환 가능" 인식 확산 → 멀티플 압축

**재무/밸류에이션 충격**:
- Google 이탈 시나리오 (AI 매출 ~40% 기여 가정):
  - FY29 AI 매출 $160B → $100B (-37%)
  - Semi Op Margin 52% → 48% (고정비 레버리지 악화)
- Forward PE 30x → 20x 멀티플 압축
- **주가 충격: -38%** ($402 → $249)
- Software는 영향 없음 — 방어

**버티는 근거**:
- Google TPU는 AVGO의 SerDes(고속 인터커넥트) IP에 깊이 의존 — Full-Stack 자체 설계는 3~5년+ 투자 필요
- AVGO의 Semi-Custom 모델 (고객이 아키텍처 정의, AVGO가 물리 설계·제조)은 고객사 내부 인재·투자로 쉽게 대체 불가
- Apple Silicon 팀은 M1 이후 10년+ 투자 결과 — Google 신규 팀이 동등 수준 도달에는 시간
- 이탈이 가시화되어도 기존 Gen TPU는 지속 가동 (수년 매출 지속)
- AVGO 배당 커밋먼트 유지 → 가치주 재평가 가능성

**취약 근거**:
- Google은 이미 자체 Axion(Arm CPU) 설계 역량 확보 — TPU의 Full-Stack 전환은 "가능"
- "고객 집중"이 AVGO 해자의 동전 뒷면 — Google 1사가 AI 매출 40% 기여는 구조적 취약점
- Hock Tan의 "신규 4~5사 파이프라인" 약속이 지연되면 Bull 경로 파손
- 고객 이탈 뉴스 자체가 NVDA 대체 Thesis를 해체 → Forward PE 30x 유지 어려움

**관찰 지표**:
- Google Cloud 분기 실적에서 TPU v7/v8 파트너 언급 변화
- Meta Connect·OCP Summit에서 MTIA 자체 설계 비중 증가 발표
- AVGO XPU 고객 리스트의 파트너십 연장 발표 (특히 Apple·OpenAI)
- Hock Tan 분기 콜에서의 "새로운 고객 win" 언급 빈도 (현재 "4~5사 파이프라인" 지속 언급)

**실현가능성**: **12%** — 기술적·시간적 장벽이 높으나 Google·Meta는 절대 자원 보유. 단일 고객(Google) 이탈은 2027~2028 리스크로 실재. "완전" 전환 대신 "부분" 전환이 더 현실적
**Bear DCF 반영 시 기여**: -38% × 12% = **-4.6%pt** Bear 추가 할인

---

## Bear DCF 시뮬레이션 합산 표

| # | 시나리오 | 주가 충격 | 실현가능성 | 기여 (%pt) |
|:--:|:--------|:----------|:-----------|:-----------|
| 1 | TSMC 대만 공급망 쇼크 | -40% | 8% | -3.2 |
| 2 | AI Capex 버블 버스트 | -50% | 15% | -7.5 |
| 3 | MRVL+Alchip 2nd Source 시장 분할 | -28% | 25% | -7.0 |
| 4 | VMware Top 10K 이탈 + 반독점 규제 | -22% | 18% | -4.0 |
| 5 | 하이퍼스케일러 In-house 완전 전환 | -38% | 12% | -4.6 |
| | **단순 합산 (동조성 무시)** | | | **-26.3%** |

### 단순 합산 방식 (동조성 무시)

Base 시나리오 목표가 $402 → 각 시나리오 독립 가정 시 `$402 × (1 - 26.3%) = $296`. 현재 Bear PV $190 대비 더 깊게 내려가지는 않음 (Bear가 이미 이 수준의 하방을 반영).

### 동조성 보정 방식 (상관 리스크 인식)

주요 동조성 쌍:
- **#2 (AI Capex 버스트) + #3 (2nd Source 경쟁)**: AI 수요 부진 시 고객이 가격 민감해지며 2nd source 채택 가속 → 두 시나리오 동시 발생 확률 증폭
- **#2 (Capex 버스트) + #5 (In-house 전환)**: 수요 감소기에 하이퍼스케일러는 CAPEX 효율화 압박 → In-house 개발 우선순위 상승
- **#1 (TSMC 쇼크)은 독립** — 지정학 외생 변수, 다른 시나리오와 상관 낮음
- **#4 (VMware)는 독립** — Software 세그먼트, Semi와 상관 낮음

동조성 가정: 50% 상관(#2-#3, #2-#5 쌍) → 실효 기여 감소분 -4.0%pt 추정. 최종 기여 **-22.3%**.

동조성 보정 적용 시: `$402 × (1 - 22.3%) = $312` (현재가 대비 -22%).

---

## Bear → Stress 반영 시 비교 블록

Base 파일 참조: **Bear $190 (현재 PV) / Extreme Bear $78 (현재 PV) / Bear FY29 목표가 $254**.

Bear에 Stress 기여를 모두 합산했을 때의 가상 시뮬레이션:

| 방식 | 계산 | 결과 |
|:-----|:-----|:-----|
| Base Bear (현재 PV) | - | **$190** |
| 단순 합산 적용 | $190 × (1 - 26.3%) | **$140** |
| 동조성 보정 적용 | $190 × (1 - 22.3%) | **$148** |
| vs. Base Extreme Bear | - | **$78** |

**해석**:
- Stress 시나리오를 모두 Bear에 반영해도 **$140~$148** 수준 — Base의 Extreme Bear $78 대비 훨씬 높음
- 이는 Extreme Bear ($78)가 이미 **다중 충격 동시 실현**을 전제한 시나리오이기 때문 (예: AI Capex 수요 급감 + XPU 2~3사 이탈 + VMware 대량 이탈 + 금리 상승 동시)
- Stress 각 시나리오는 "독립적 외생 충격"으로 설정 → Extreme Bear의 "복합 내생 붕괴"와 성격이 다름
- **결론**: 현재 Base 가중평균(Bear 25% + Extreme Bear 15%)의 Bear 꼬리 두께는 **합리적 수준**으로 판단. 외생 충격을 추가 반영하면 Bear 비중을 25% → 32% 수준으로 소폭 상향 고려 가능하나, Extreme Bear와의 이중 계상 우려로 Base 유지

---

## Revaluation 시 주의

- 본 Stress 시나리오는 **Revaluation 가중평균에 반영하지 않는다** (참고용).
- 사용자 Thesis가 위 Stress 시나리오 중 하나를 낮게/높게 평가하는 내용이면, Revaluation에서 Thesis 팩트체크 섹션에 본 파일 내용을 참조하여 ✅/⚠️/❌ 판정에 활용.
- 특히 #3 (MRVL 2nd Source, 25% 확률)은 Bear 진입 확률을 실질적으로 좌우하는 구조적 시나리오 — Thesis의 "AVGO 커스텀 독점 지속" 가정과 정면 충돌하므로 팩트체크 중요도 높음.

---

## 사용자 추가 시나리오 자리

> 사용자가 이후 자유롭게 추가·확장할 수 있는 영역. 신규 시나리오 작성 시 동일 구조(`가정 → 재무/밸류에이션 충격 → 버티는 근거 → 취약 근거 → 관찰 지표 → 실현가능성(%) → Bear DCF 반영 시 기여`) 준수.

(추가 시나리오 예시 후보)
- 금리 재상승 (WACC 10% → 12%) 시 밸류에이션 재평가
- 엔비디아의 커스텀 ASIC 시장 직접 진입
- 중국 반도체 수출 규제 강화 시 BYD/ByteDance 고객 매출 차단
- DeepSeek급 효율화 모델 확산 시 AI 반도체 수요 절대량 감소
