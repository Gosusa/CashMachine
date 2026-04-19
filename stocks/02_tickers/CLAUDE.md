# 개인 분석 워크플로우

Base 분석 완료 후 사용자의 장기 투자 엣지를 반영하는 개인 분석 단계.
Base/Stress 워크플로우는 상위 [stocks/CLAUDE.md](../CLAUDE.md) 참조.

## 종목 평가 흐름

```
Base 분석 (stocks/CLAUDE.md)
  │
  ▼
사용자 Thesis 작성 ──→ Revaluation ──→ 포트폴리오 분석
(사용자가 직접)        (새 세션)        (전 종목 종합)
```

---

## 1단계: 사용자 Thesis 작성 (사용자가 작성)

사용자가 Base 분석 시 생성된 빈 `{TICKER}/personal/{TICKER}_thesis.md` 파일에 장기 투자 관점의 엣지 근거/시나리오를 직접 작성한다.
Claude는 이 단계에서 파일 내용을 채우지 않는다. 사용자가 작성하는 파일에는 보통 다음이 포함된다:

- 장기적으로 이 종목을 좋게 보는 근거 (Base가 놓친 부분)
- 예상 시나리오 (구체적 이벤트, 시장 변화, 사업 전환 등)
- 기대 영향 (매출/이익/CF 증가 규모, 멀티플 리레이팅 등)

---

## 2단계: Revaluation — "{TICKER} 재평가해줘"

사용자 thesis를 팩트체크하고 Base에 반영해 재평가한다.

**실행 모드: Opus + ultrathink, 새 세션에서 시작.** Base 작성 시 형성된 내러티브에 대한 anchoring을 제거하고 thesis 팩트체크를 중립적·적대적(adversarial)으로 수행하기 위함. Base/Thesis는 파일로 보존돼 있으므로 새 세션에서도 동일한 근거에 접근 가능하다. 세션 모델이 Opus가 아니면 `/model opus` 전환을 제안한 뒤 진행한다.

**종목당 1세션 원칙**: Revaluation도 종목당 별도 세션에서 수행한다.

1. `{TICKER}/{TICKER}_base.md` 와 `{TICKER}/personal/{TICKER}_thesis.md` 를 읽는다
2. **Thesis 팩트체크**:
   - 각 근거의 타당성 판단 (✅ 독립 소스 확인 / ⚠️ 회사 자체 공시만 / ❌ 반박 근거 존재)
   - 각 시나리오의 **실현 확률 (%)** 판단과 근거
3. **Base + Thesis 재평가**: `{TICKER}/personal/{TICKER}_revaluation.md` 파일을 생성한다
   - Base의 DCF 시나리오 (Extreme Bear / Bear / Base / Bull) 에 **Thesis Case 시나리오 추가**
   - Thesis Case 확률 = thesis의 실현 확률 × 팩트체크 감쇠
   - 기존 4개 시나리오 확률 재조정 (합계 100% 유지)
   - 실현 시 증가분 현금흐름 × 실현 확률로 기댓값 반영
   - 새 가중평균 목표가 산출
4. **마지막 섹션: Base vs Revaluation 비교**
   - 근거 차이: thesis가 추가로 반영한 엣지 요약
   - DCF value 차이: Base 가중평균 vs Revaluation 가중평균 목표가 비교표
   - 엣지의 기댓값 기여 ($ 단위)

> Stress는 Revaluation에 **반영하지 않는다**.
