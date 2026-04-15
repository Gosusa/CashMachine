# PTC — 스트레스 테스트

> 매크로·구조적 취약점에 대한 시나리오 테스트. **Revaluation에 반영하지 않는다** — Report 말미 참고용.
> 초기 생성: 2026-04-16 (Claude). 사용자가 자유롭게 시나리오를 추가·확장.

---

## 1. 제조업 침체 심화 — ISM PMI 45 이하 6개월 지속

**가정**: 2026~2027 미국·유럽·중국 제조업 동시 침체. ISM Manufacturing PMI 45 이하 6개월+ 지속. 자동차·항공·산업장비 CAPEX 축소.

**재무/밸류에이션 충격**:
- 신규 시트 판매 (Creo + 신규 Windchill 고객) ~40% 성장 기여분 둔화 → cc ARR 성장 9% → 4~5%
- FY26 FCF 가이던스 $1.0B → $0.85~0.9B 하향
- 주가 멀티플 EV/FCF 17x → 13~14x 압축 → -20~25% 주가 조정

**버티는 근거**:
- ARR 모델 95%+ 갱신율 — 침체기에도 기존 고객 매출 하방 견고
- 엔지니어링 툴은 경기 둔화기에도 설계 작업 계속됨 (제조 라인 CAPEX와 달리 지연·중단 어려움)
- Windchill·Creo의 BOM/파일 락인은 해지 사유 되지 않음

**취약 근거**: 신규 시트 판매 의존 구간 (Creo 확장, Onshape 신규)은 직접 타격. Codebeamer (자동차 특화)는 자동차 OEM 침체 시 구조적 노출

**관찰 지표**: ISM Manufacturing PMI (<48 경고, <45 위기), 자동차 OEM CAPEX 가이던스, PTC cc ARR (ex-K&T) QoQ 2분기 연속 감속

**실현가능성**: 35% — 글로벌 제조업 PMI 2026년 50 경계선 등락 중. 6개월 지속 침체는 base case 인접
**Bear DCF 반영 시**: 주가 충격 -22.5% × 35% = **Bear에 -7.9%pt 기여**

---

## 2. 금리 상승 지속 — WACC +150bp + Refinancing 충격

**가정**: 10Y Treasury 4.34% → 5.5%+ 지속. PTC Net Debt $990M~$1.19B refinancing 구간 도래 시 스프레드 확대.

**재무/밸류에이션 충격**:
- WACC +80~100bp → DCF value -12~15%
- 이자비용 연 $30~50M 추가 → FCF -3~5%
- Buyback 규모 조정 압력 (현재 FY26 $1.1~1.3B 계획 → $0.7~0.9B로 축소 가능성)

**버티는 근거**:
- Net Debt / FCF ~1.0x — 제조 소프트웨어 업계 평균 대비 건전
- ARR 기반 현금흐름 예측가능성 높아 신용 스프레드 확대 제한적
- 2026-03 K&T 매각대금 $375M 현금 확보 → 부채 부담 일부 상쇄

**취약 근거**: SaaS 섹터 전반 DCF 민감도 높음. 금리 상승 + 성장 둔화 복합 시 멀티플 이중 압축

**관찰 지표**: 10Y Treasury 5.0%+, PTC 채권 스프레드, Net Debt/FCF 2.0x 접근, buyback 페이스 QoQ

**실현가능성**: 30% — SPGI #4와 동일 매크로. SaaS 섹터 DCF 민감도 높아 PTC에서는 영향 가중
**Bear DCF 반영 시**: DCF -13.5% × 30% = **Bear에 -4.05%pt 기여**

---

## 3. Siemens Xcelerator 대형 고객 이탈

**가정**: Siemens Digital Industries의 통합 플랫폼 전략이 성공하여 PTC Windchill 상위 대형 고객 (Fortune 500 제조사) 2~3건 순차 이탈. Forrester PLM Leader 포지션 상실.

**재무/밸류에이션 충격**:
- 대형 고객 1건당 ARR $30~80M 규모, 3건 이탈 시 Windchill ARR -3~9%
- cc ARR 성장 9% → 3~5%로 감속
- 해자 내러티브 훼손 → EV/FCF 멀티플 17x → 12x 재평가 → 주가 -30%

**버티는 근거**:
- BOM·설계이력 20년+ 축적은 교체비용이 매우 높아 단기 다수 이탈 구조적으로 어려움
- Onshape (cloud-native CAD) + Codebeamer (규제 특화)는 Siemens 경쟁 포지션 상이
- 대형 ERP/PLM 교체는 3~5년 소요 → 공시 시점과 매출 영향 시차

**취약 근거**: Forrester 평가는 이미 Siemens와 공동 선두 — 미세 열위 굳어지면 신규 win 비율 악화. CEO Barua 체제 (2024~) 실행 기록이 상대적으로 짧음

**관찰 지표**: Siemens의 PTC 고객 win 공시 (2건+ 경고), Forrester/Gartner PLM Wave 평가 순위 변동, PTC 분기 실적에서 Windchill 언급 톤 변화

**실현가능성**: 15% — 대형 PLM 교체 3~5년 소요, 단기 다수 이탈 구조적 어려움. 단 narrative 훼손 시 멀티플 영향이 실제 이탈보다 큼
**Bear DCF 반영 시**: 주가 충격 -30% × 15% = **Bear에 -4.5%pt 기여**

---

## 4. SaaS 전환 지연 + 신규 진입자 침식

**가정**: Windchill+ SaaS 마이그레이션이 당초 계획 대비 2~3년 지연. 동시에 cloud-native 신규 경쟁사 (Onshape 경쟁 PLM 에이전트 등)가 SME 시장 침식.

**재무/밸류에이션 충격**:
- 신규 중견·SME 고객 유치 둔화 → Onshape + 기타 성장률 20%+ → 10% 이하로 감속
- Windchill ARPU 확장 내러티브 (AI·디지털트윈 업셀) 1~2년 이연 → 장기 성장률 7~8% → 5~6%
- Terminal value -10~15%

**버티는 근거**:
- 대형 엔터프라이즈 PLM 고객은 SaaS 전환 자체가 2~5년 작업 → 기존 고객 이탈로 이어지지 않음
- PTC는 Onshape를 통해 cloud-native 경험 축적, 완전 후발은 아님

**취약 근거**: SaaS-native 경쟁사의 가격 공세 시 Onshape는 방어적 제품으로 전락 가능. 엔터프라이즈 핵심 밖 영역은 무방비

**관찰 지표**: Windchill+ 신규 계약 공시 (분기 콜에서 코멘트 부재 시 경고), Onshape ARR 성장률 (미공시 → IR 문의 필요), SaaS-native PLM 신규 진입자 funding·고객 win 추적

**실현가능성**: 25% — 엔터프라이즈 SaaS 전환은 통상 2~3년 지연 발생. SME 침식은 신규 cloud-native PLM 등장 가시성 따라 변동
**Bear DCF 반영 시**: TV 충격 -12.5% × 25% = **Bear에 -3.1%pt 기여**

---

## 5. 자동차·항공 규제 공급망 쇼크 → Codebeamer 역풍

**가정**: 자동차 OEM 대규모 리콜·소프트웨어 결함 사태 (2025~2026 Tesla FSD, GM 크루즈 류 확대) → ISO 26262 재인증 요구 강화로 단기 고객 혼란. 또는 의료기기 FDA 소프트웨어 규제 개편.

**재무/밸류에이션 충격**:
- Codebeamer ARR $200M 성장 정체 → 전사 성장률 0.3~0.5%p 약화
- 단기 신규 인증 프로젝트 대기 → FY26 매출 인식 이연

**버티는 근거**:
- 규제 강화는 Codebeamer 해자 강화 요인 (진입장벽 상승). 단기 혼란 후 중장기 긍정
- Codebeamer는 전사 ARR의 ~8.5% — 전사 영향 제한적
- 자동차 SDV (Software Defined Vehicle) 트렌드는 ALM 시장 확대 방향

**취약 근거**: 대형 OEM의 소프트웨어 안전 사고가 Codebeamer 사용 고객에서 발생하면 평판 직접 타격

**관찰 지표**: 대형 자동차 OEM 소프트웨어 결함·리콜 공시, ISO 26262 개정 일정, Codebeamer 고객 공개 win/loss

**실현가능성**: 20% — 자동차 SDV 트렌드에서 OEM 소프트웨어 사고는 base rate 상승 중. 단 Codebeamer 자체 평판 직접 타격은 낮은 확률
**Bear DCF 반영 시**: 주가 충격 -5% (전사 영향 제한) × 20% = **Bear에 -1.0%pt 기여**

---

## Bear DCF 시뮬레이션 합산 (참고용, Reval 미반영)

| #   | 시나리오                  | 충격(주가/DCF) | 실현가능성 | Bear 기여 |
|-----|------------------------|------------|--------|---------|
| 1   | 제조업 침체 PMI<45         | -22.5%     | 35%    | -7.90%pt |
| 2   | 금리 상승 + Refi          | -13.5%     | 30%    | -4.05%pt |
| 3   | Siemens 대형 고객 이탈     | -30%       | 15%    | -4.50%pt |
| 4   | SaaS 전환 지연 + SME 침식  | -12.5%     | 25%    | -3.10%pt |
| 5   | 자동차·항공 규제 쇼크         | -5%        | 20%    | -1.00%pt |
| **합계** |                    |            |        | **-20.6%pt** |

**해석**: 단순 합산 -20%pt지만 시나리오 1·3·4는 제조업/엔터프라이즈 SW 동조성 있음 → 실제 결합 -14~16%pt 수준이 현실적.

### Bear → Stress 반영 시 비교

Revaluation 기준값: **Bear $107 / Extreme Bear $67** (Reval `PTC_revaluation.md` L119~120)

| 케이스 | Bear 가격 |
|------|---------|
| 원본 Bear (Reval) | **$107** |
| Stress 단순합산 (-20.6%) 반영 | **$85** (Extreme Bear $67 대비 +27% 위) |
| Stress 동조성 보정 (-15%) 반영 | **$91** |
| Extreme Bear (Reval) | $67 |

**시사점**: Stress 누적해도 Bear가 Extreme Bear에는 안전 마진 보유. ARR 모델 95%+ 갱신율 + BOM 락인이 stress 누적 충격의 floor 역할.

**Reval 가중평균에는 반영하지 않음.**
