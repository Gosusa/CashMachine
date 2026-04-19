# INTC — 스트레스 테스트

> **목적**: Base DCF 시나리오(Extreme Bear~Bull)로 포착 어려운 **외생 충격·꼬리 위험**을 별도 트랙에서 점검.
>
> **주의**: Revaluation 가중평균에 반영하지 않는다. "만약 이 충격이 현실화된다면 Bear가 얼마나 더 깊어지는가"를 점검하는 참고 시뮬레이션.

참조: [INTC_base.md](INTC_base.md) Base(FY28 $39 / PV $30) / Bear(FY28 $24.3 / PV $18.5) / Extreme Bear(FY28 $7 기술 / $10~12 정책 floor) 목표가 기준. 현재가 $68.50.

---

## 1. 18A 수율 실패 + 14A 밀림 (기술 노드 더블 미스)

**가정**:
- 18A (2nm GAA + PowerVia) 수율이 2026-내내 40% 이하 정체 → Panther Lake PC·Clearwater Forest 서버 CPU 양산 6~9개월 지연
- 14A 개발 roadmap이 18A 학습 미완료로 12~18개월 slip → TSMC N2 대비 2세대 격차 확정
- Microsoft Maia 2 18A 수주 취소 혹은 TSMC로 이관 → Foundry 외부 매출 ramp thesis 붕괴
- Ohio New Albany 팹 mothball 공식화, $10~20B 영업권·유무형 상각

**재무/밸류에이션 충격**:
- Products 매출: 자체 CPU roadmap 지연으로 CCG/DCAI 모두 TSMC 외주 의존(Lunar Lake 패턴) → Products GM 추가 압박
- FY28 CCG 매출 $32B → $27B (-15%, AMD/ARM 동시 점유 잠식 가속)
- Foundry FY28 외부 매출 $3B(Base) → $0.5B, Op Loss -$6B → -$12B (유지비 + 상각)
- Foundry EV/Sales 3x → 0.8x (thesis 훼손, GFS 이하 수준)
- 주식수는 US Gov 5% Warrant 추가 발동 가능성 → +250M 주 희석
- **주가 충격: -55%** (Bear FY28 $24.3 → $11, PV $18.5 → $8) — Extreme Bear 기술적 $7 근접

**버티는 근거**:
- Products 세그먼트는 TSMC 외주 경로 확보 시 CPU 로드맵 유지 가능 (Lunar Lake 선례)
- 정책 자본(US Gov 10% + NVDA 5% + SoftBank 2%) 지분가치가 기술 실패로도 즉시 소멸 안됨
- Altera 49% / Mobileye 88% 지분 자산가치는 Foundry 실패와 독립 — 매각 카탈리스트 남음
- CHIPS Act 교부금 $7.9B 중 집행된 부분은 반환 의무 제한적

**취약 근거**:
- Intel의 IDM 2.0 thesis 전체가 "18A → 14A 연속 리더십 복귀" 전제 — 더블 미스 시 Foundry 사업 해체·분사 압박
- Products 자체 팹 의존이 오히려 유연성 저해 — AMD(팹리스)는 TSMC 최신 노드로 자유롭게 이동, Intel은 자체 팹 고정비 부담
- 18A 실패 시 Bernstein·Morgan Stanley 강세 커버리지 즉시 하향 → 멀티플 재압축
- US Gov 10% 지분은 "기술 리더십 복귀" 조건부 투자 — 기술 실패 시 정부 지분 추가 출자 유인 소멸

**관찰 지표**:
- Intel 18A D1X/Ohio 월간 수율 업데이트 (Investor Day, Q2/Q3'26)
- Panther Lake(CES 2026-01 발표) 양산 출하 volumes (PC OEM 채널 체크)
- Clearwater Forest(2H'26) 실제 출시 일정 slip 여부
- TSMC N2 양산 ramp 대비 Intel 18A HVM 시점 격차 (현재 ~6개월 리드 주장 → 격차 확대 시 경고)
- Microsoft Maia 2 공식 계약 공개 여부 (2026-H2 예상)

**실현가능성**: **20%** — 가이드의 Extreme Bear 15% 확률과 중복되는 영역이나 "더블 미스 + Ohio mothball" 조합은 Extreme Bear보다 더 깊은 충격. Intel-specific 구조적 최대 리스크
**Bear DCF 반영 시 기여**: -55% × 20% = **-11.0%pt** Bear 추가 할인

---

## 2. AMD EPYC 서버 점유율 60% 돌파 (DCAI 구조적 상실)

**가정**:
- AMD EPYC Venice(2nm, 2026-H2)가 Intel Xeon 7 Diamond Rapids 대비 TCO 40%+ 우위 실현
- 하이퍼스케일러 4사(AWS/MSFT/GOOG/Meta) 신규 데이터센터 배치의 80%+를 AMD EPYC으로 전환
- AMD 서버 CPU revenue share 41% → 60% 돌파 (Intel DCAI 매출 점유 침식)
- ARM 서버 CPU(AWS Graviton, NVIDIA Grace) 추가 점유로 x86 전체 파이 축소 압박
- Intel DCAI Op Margin 20.2% → 8% 하락 (규모 축소 + 가격 할인)

**재무/밸류에이션 충격**:
- FY28 DCAI 매출 $19.5B(Base) → $12B (-38%), Op Income $3.4B → $1B
- Products 세전 Op Income $12.7B → $7~8B (DCAI 기여 사라짐, CCG만 남음)
- Foundry 손실 흡수력 약화 → 연결 Op Margin 추가 악화
- Products PE 12x → 8x (성장 스토리 훼손, 성숙·쇠퇴 섹터 멀티플)
- **주가 충격: -40%** (Bear FY28 $24.3 → $14.6, PV $18.5 → $11)

**버티는 근거**:
- CCG(Client PC) 매출 $32.2B는 AMD 서버 점유 확장과 분리된 영역 — OEM lock-in 유지
- 정부·방산·금융 섹터 온프레미스 수요는 Intel 벤더 다변화 정책으로 방어
- DCAI 매출 절반은 서비스·임베디드·Xeon-D 파생 포트폴리오 — 완전한 AMD 전환 어려움
- Diamond Rapids 16채널 메모리 구조는 AMD EPYC 대비 메모리 대역폭 우위 존재

**취약 근거**:
- AMD가 2020 10% → 2025 41%까지 5년 만에 점유 4배 확장 — 60% 돌파 경로 이미 가속 중
- Intel Products Op Income $12.7B 중 DCAI 비중 27% — 구조적 상실 시 Products 캐시카우 훼손 → Foundry 손실 흡수 불가
- ARM 서버 CPU는 NVDA Grace(AI 인퍼런스), AWS Graviton(범용)으로 x86 자체 파이 축소 위협 — Intel/AMD 둘 다 타격이나 Intel이 리더 포지션 상실 시 더 큼
- Apple Silicon + Qualcomm Snapdragon X PC 진입으로 CCG도 장기적 위협

**관찰 지표**:
- AMD EPYC Venice 벤치마크 공개 (2026-Q3~Q4)
- Mercury Research 분기별 서버 CPU revenue share (AMD 45% 돌파 시 경고, 50% 돌파 시 위기)
- 하이퍼스케일러 신규 데이터센터 AMD vs Intel 배치 공시 (MSFT/GOOG Capex disclosures)
- AWS Graviton4/5 채택 비중, NVIDIA Grace Hopper 점유율
- Intel DCAI 분기 매출 YoY 성장률 (마이너스 진입 시 즉시 경고)

**실현가능성**: **30%** — Intel-specific 최대 확률 구조 리스크. AMD 서버 확장 추세는 관찰 가능한 현실이며 60% 돌파는 3년 내 가능성 상당
**Bear DCF 반영 시 기여**: -40% × 30% = **-12.0%pt** Bear 추가 할인 (최대 기여 시나리오)

---

## 3. CHIPS Act 역전 / 2028 대선 사이클 (정책 자본 floor 붕괴)

**가정**:
- 2028 미국 대선 후 정권 교체 혹은 재정 우선순위 전환으로 CHIPS Act 추가 보조금 중단
- US Gov 10% 지분($20.47 매입가, FY25 말 취득) 관련 Warrant 5% 추가분 미행사 확정
- 정부 지분 장기 보유 전환(의결권 중립) → 정책 carry 효과 중립화
- SoftBank 2% 지분 보유 유지하되 NVDA 5% 지분은 파트너십 결과 미흡 시 축소
- Ohio 팹 추가 capex에 대한 세액공제·교부금 중단 → 자체 조달 부담 급증

**재무/밸류에이션 충격**:
- Ohio 팹 투자 회수 압박 → $10~15B capex slip 혹은 범위 축소
- 연결 cash & ST 포지션: $32B(Bear) → $20B (capex 자체 조달)
- 정책 자본 프리미엄 붕괴 → "Extreme Bear floor $10~12" 근거 약화
- 시장의 정부 bailout 기대치 상실 → Forward PE 134x 급속 압축 (30x → 12x 직행)
- **주가 충격: -35%** (Bear FY28 $24.3 → $15.8, PV $18.5 → $12). Extreme Bear 정책 floor 붕괴가 핵심 손상

**버티는 근거**:
- 이미 집행된 CHIPS Act $7.9B 교부금은 법적 계약 → 소급 취소 불가
- US Gov 10% 지분은 Treasury Secretary 보유 구조 — 의회 재가 없이 매각 어려움
- 국가 안보상 반도체 제조 자립 정책은 양당 공통 의제 — 완전 반전 가능성 낮음
- NVDA/SoftBank 지분은 정책과 무관한 사업 파트너십 카운터 파티

**취약 근거**:
- 2028 정권 교체 시 보조금 우선순위 변경은 정치적 일상 — CHIPS Act 자체의 영속성 의문
- Intel의 FY25 이후 주가 +275% 상승은 "정부 바일아웃" 프리미엄 포함 — 정책 자본 약화 시 가장 먼저 압축
- 정책 자본 floor $10~12는 **시장이 부여한 신뢰**이지 계약상 보장 아님 — 2028 정치 사이클에서 흔들릴 수 있음
- Intel 18A 성공 시에도 Foundry capex는 연 $25~30B 필요 — 정부 보조 없이 자체 cashflow 조달은 불가능 수준

**관찰 지표**:
- 2028 대선 주요 후보 CHIPS Act 관련 발언 강도 (2026~2027)
- Intel Investor Day 정부 지분 관련 언급 (의결권·배당·매각 조건)
- Congressional Research Service 반도체 정책 보고서
- Ohio 팹 2026~2027 capex 가이던스 실행률 (지연 시 자체 조달 부담 확인)
- NVDA 5% 지분 보유 지속 여부 공시 (2026-Q3~Q4 13F/13G)

**실현가능성**: **15%** — 양당 공통 정책이라는 안정성은 존재하나 2028 정권 교체 시 구체 집행 변경 가능성. 완전한 반전보다는 부분적 약화가 현실적
**Bear DCF 반영 시 기여**: -35% × 15% = **-5.25%pt** Bear 추가 할인

---

## 4. 대만 공급망 쇼크 — Products의 TSMC 외주 의존 (이중 노출)

**가정**:
- 대만해협 긴장 고조 → TSMC 2nm/3nm capacity 6~12개월 차질
- Intel Products(Lunar Lake, Arrow Lake, Meteor Lake tile 일부)는 TSMC N3/N2 외주 의존 — 동시 차질
- Foundry 18A 자체 팹은 지속 가동 가능하나 EDA·IP·소재는 대만 출처 의존 존재
- AMD·NVDA보다는 상대적 타격 적으나(자체 팹 보유) 경쟁사들의 공급 공백기에 Intel 자체 CPU 양산도 동시 차질

**재무/밸류에이션 충격**:
- Products GM 36% → 30% (TSMC 외주 차질로 자체 팹 재배치 + 외부 노드 부족)
- CCG/DCAI 매출 -10~15% 단기 차질 (Panther Lake 양산 지연)
- 동시에 AMD·NVDA 공백기에 Xeon/서버 매출 반사이익 가능 (5~10% upside)
- 네트 효과: 초기 -15% 충격 후 3~6개월 내 일부 복구
- **주가 충격: -20%** (Bear FY28 $24.3 → $19, PV $18.5 → $15). Intel은 TSMC 쇼크에 **상대적 방어주** 성격

**버티는 근거**:
- Intel은 NVDA/AMD 대비 공급망 리스크가 낮은 유일한 major 반도체사 — 자체 팹 운영
- 대만 쇼크 발생 시 IDM 2.0 thesis가 시장에 재인식 → 멀티플 재평가 상방 가능
- 18A Panther Lake·Clearwater Forest는 전량 미국/이스라엘 팹 생산 — TSMC 독립적
- 미국 정부의 반도체 공급망 분산 정책 가속화 → Intel Foundry 수요 증가

**취약 근거**:
- Intel Products는 최신 chiplet 구조상 CPU compute tile 일부를 TSMC N3 외주(Arrow Lake, Lunar Lake) — 완전한 독립 아님
- EUV 장비는 ASML(네덜란드)에서 조달이나 테스트·조립·소재 공급망은 대만 연계 부분 존재
- 대만 쇼크는 반도체 섹터 전체 멀티플 압축 동반 → Intel 개별 반사이익으로 상쇄 어려움
- 고객사(OEM)들의 공급 공백기 재고 축소 및 Capex 축소로 Intel 매출도 동반 감소

**관찰 지표**:
- 대만-중국 군사 긴장 지수 (CBAS, CFR 모니터링)
- TSMC 월간 capacity 업데이트
- Intel Arrow Lake/Lunar Lake vs Panther Lake 제조 소싱 비중 (자체 팹 비율 >80% 전환 시 방어력 강화)
- 미국 정부 대만 정책 발언 강도

**실현가능성**: **8%** — 3년 내 실제 봉쇄 가능성 낮으나 tail risk. Intel은 **AMD/NVDA 대비 유일한 상대적 수혜 가능성**이 있으나 네트 타격은 여전히 음수
**Bear DCF 반영 시 기여**: -20% × 8% = **-1.6%pt** Bear 추가 할인 (최소 기여 시나리오)

---

## 5. AI Capex Bubble Burst — Foundry Bull 경로 소멸

**가정**:
- 2027~2028 하이퍼스케일러 AI Capex $500B+ 대비 매출화 $100B 미달 → AI ROI 압박 가시화
- MSFT/GOOG/META 3사 Capex 가이던스 -30~40% 축소 → AI 가속기 수요 급감
- Intel Foundry의 잠재 AI 칩 수주(Microsoft Maia 2, 가상 hyperscaler 기회) 전면 중단
- NVDA 자체 Capex 축소로 Intel Foundry 협력 deprioritize
- Foundry Bull 경로(FY28 외부 매출 $6~8B) 완전 소멸, Base 경로($3B)도 Bear 수준($1.5B)로 회귀

**재무/밸류에이션 충격**:
- Foundry FY28 외부 매출 $3B(Base) → $1B, Op Loss -$6B → -$9B (매출 부족 + 고정비)
- Foundry EV/Sales 3x → 1.5x (성장 스토리 훼손)
- Products 매출은 상대적 영향 적음 (AI 외 기본 컴퓨팅 수요 유지) — CCG -5%, DCAI -10%
- 연결 GAAP 손실 재진입 가능성 (FY25 -$23M near-breakeven에서 후퇴)
- **주가 충격: -30%** (Bear FY28 $24.3 → $17, PV $18.5 → $13)

**버티는 근거**:
- Intel은 NVDA/AMD 대비 AI capex 노출이 **낮은** 편 — Products 주력은 범용 CPU로 AI 다운사이클에서도 유지
- Foundry 내부 매출(Intel Products용)은 외부 AI 수주와 독립 → 기본 매출 유지
- Altera(FPGA) / Mobileye는 AI 추론용이나 별도 시장 특성
- AI 거품 붕괴 시 오히려 공공·방위·산업용 실용 반도체로 시장 중심 이동 가능 → Intel x86 방어

**취약 근거**:
- Bull 시나리오 (FY28 $80)는 Foundry 외부 매출 $6~8B 전제 — 대부분이 AI 칩 수주 가정
- Intel Foundry Bull은 "AI가 대안 파운드리 수요 창출" 내러티브에 100% 의존 — 사이클 종료 시 Bull 경로 완전 소멸
- Forward PE 134x는 "AI capex 붐이 Foundry 수주로 이어진다" 기대치 반영 — Burst 시 가장 먼저 압축
- NVDA 5% Intel 지분은 AI 파트너십 전제 — AI 수요 감소 시 협력 deprioritize, 지분 매각 가능성

**관찰 지표**:
- 하이퍼스케일러 분기별 Capex 가이던스 (MSFT/GOOG/META, 2027~2028 하향 조정)
- AI 매출화 progress (OpenAI ARR, Azure AI revenue, Google Cloud AI revenue)
- Goldman Sachs, Sequoia의 "AI revenue gap" 보고서 업데이트
- Intel Foundry 분기별 외부 매출 YoY 성장률 (정체 혹은 역성장 시 경고)
- NVDA Capex 계획 공시 (2027 축소 시 Intel 파트너십도 축소 가능)

**실현가능성**: **15%** — 3년 내 실현 가능성. AI ROI 리스크는 섹터 공통. Intel은 AMD/NVDA 대비 상대적 노출 낮으나 Foundry Bull 경로는 직격탄
**Bear DCF 반영 시 기여**: -30% × 15% = **-4.5%pt** Bear 추가 할인

---

## Bear DCF 시뮬레이션 합산

> **주의**: 아래 시뮬레이션은 **참고용**. 실제 Bear 목표가 (FY28 $24.3, PV $18.5)는 Base DCF 계산에서 독립적으로 산출된 값. 스트레스 시나리오를 단순 합산하여 Bear를 추가 감액하는 것은 과도한 보수일 수 있음(동조성 고려 필요).

| # | 시나리오 | 주가 충격 | 실현가능성 | Bear DCF 기여(%pt) |
|---|---------|---------|---------|---------|
| 1 | 18A 수율 실패 + 14A 밀림 | -55% | 20% | **-11.0%pt** |
| 2 | AMD EPYC 60% 돌파 | -40% | 30% | **-12.0%pt** |
| 3 | CHIPS Act 역전 / 2028 대선 | -35% | 15% | **-5.25%pt** |
| 4 | 대만 공급망 쇼크 | -20% | 8% | **-1.6%pt** |
| 5 | AI Capex Bubble Burst | -30% | 15% | **-4.5%pt** |
| | **단순 합산** | | | **-34.35%pt** |

**동조성 해석**:
- #1 (18A 실패) × #2 (AMD 점유): **강한 정의 상관** — Intel 노드 실패는 AMD 점유 확장의 직접 원인. 중복 가능성 60%
- #1 × #3 (CHIPS Act): **중간 상관** — 18A 실패 시 정부 지원 동기 약화. 중복 가능성 40%
- #3 × #5 (AI 버스트): **약한 상관** — 정책 자본은 기술 지원, AI는 수요 — 서로 다른 채널. 중복 가능성 20%
- #4 (대만 쇼크): **독립** — 지정학 외생 충격, Intel은 상대적 방어주 성격이므로 부호 부분적으로 반대
- #2 (AMD 점유) × #5 (AI 버스트): **약한 음의 상관** — AI 버스트 시 서버 수요 전반 축소이나 점유율 경쟁은 별개 차원

- **동조성 보정 합산**: -34.35%pt × 0.60 보정 계수 = **-20.6%pt**

### Bear → Stress 반영 시 비교

참조: [INTC_base.md](INTC_base.md) 8-3 가중평균 내재가치 산출.

```
Base 파일 기준:
  Bear FY28 목표가:       $24.3
  Bear 현재 내재가치(PV):  $18.5
  Extreme Bear FY28:      $7 (기술) / $10~12 (정책 floor)
  현재가:                 $68.50

Stress 단순 합산 적용 시 (FY28 $ 기준):
  Bear $24.3 × (1 - 0.3435) = $16 (PV $12)

Stress 동조성 보정 적용 시 (0.60 계수):
  Bear $24.3 × (1 - 0.206) = $19.3 (PV $15)

비교:
  원 Bear:           $24.3 (PV $18.5)
  단순 합산 Bear:     $16   (PV $12)   ← Extreme Bear 정책 floor $10~12에 근접
  동조성 보정 Bear:   $19.3 (PV $15)   ← Bear 대비 -21% 하락
  원 Extreme Bear:   $7~12 (PV $5.3~9)
```

**해석**:
- 스트레스 단순 합산 시 Bear가 $16으로 Extreme Bear 정책 floor($10~12) 근접 이동. 단순 합산은 동조성 미보정 극단 케이스
- 동조성 보정 시 $19.3 — Bear가 $24.3에서 $19.3으로 깊어지는 수준. Bear 확률 30% → 35~40% 재배정 논의 가능
- **Intel은 AMD/NVDA 대비 스트레스 구성이 다름** — Intel-specific 구조적 리스크(18A 실패 + AMD 점유)가 합산 기여의 67%를 차지. 외생 지정학(대만 쇼크)·매크로(AI 버스트) 기여는 작은 편
- **정책 자본 floor가 약한 방어력** — 원 Extreme Bear 정책 floor $10~12는 기술 실패(18A) + 정책 철회(CHIPS Act) 조합에서 훼손 가능. 동시 실현 시 Extreme Bear가 기술적 $7까지 하락 가능
- **결론**: 현재 Base 가중평균 내재가치 $30(PV)도 Bear 30% 가정에서 산출. 스트레스 동조성 보정 반영 시 Bear 확률 상향(30% → 35%) 논의 가능. 이 경우 가중평균은 약 $27 수준으로 추가 하락. 현재가 $68.50 대비 **-60% 할증** 상태 → **"비중축소/매도 검토" 판정 강화** 근거

---

## 모니터링 요약 — 사용자 자유 추가 영역

> 아래는 시나리오별 관찰 지표의 **압축 요약**. 사용자가 이후 필요한 시나리오를 추가하거나 기존 지표를 세분화해 기록한다.

**분기별 체크**:
- Intel 18A 수율 업데이트 (Investor Day, 분기 실적 컨퍼런스콜)
- Intel Foundry 분기 외부 매출 (현재 $222M → Base 경로 $500M/분기 필요)
- AMD 서버 CPU revenue share (Mercury Research 분기 발표)
- Intel DCAI 분기 매출 YoY (마이너스 진입 시 즉시 경고)
- 하이퍼스케일러 Capex 가이던스 변경 (MSFT/GOOG/META)
- Intel Products GM 추이 (36% → 40%+ 회복 vs 30%대 하락)

**연 1~2회 체크**:
- Panther Lake(CES 2026-01) 실제 출시 및 PC OEM 채널 체크
- Clearwater Forest / Diamond Rapids 2H'26 양산 일정
- Microsoft Maia 2 공식 계약 공개 여부
- 2028 대선 후보 CHIPS Act 관련 발언
- NVDA 5% 지분 / SoftBank 2% 지분 보유 지속 여부 (13F/13G)
- Altera 잔여 49% / Mobileye 88% 매각 카탈리스트

**즉시 트리거 (긴급 재평가)**:
- Intel 18A 수율 발표 - 50% 이상 → Bull 상방 평가 / 30% 이하 유지 → Extreme Bear 경고
- Microsoft Maia 2 수주 공식 취소 혹은 TSMC 이관
- AMD 서버 CPU 점유 50% 돌파
- Ohio 팹 mothball / capex 취소 공시
- 2028 정권 교체 후 CHIPS Act 관련 executive order 변경
- Intel DCAI 분기 매출 YoY 마이너스 진입
- Foundry 외부 매출 분기 $200M 이하 역성장 진입
