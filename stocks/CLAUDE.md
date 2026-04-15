# CashMachine — 주식 리서치

미국 주식 장기 가치투자 분석 워크스페이스.

> 앱(대시보드, DCF 엔진, 데이터 레이어) 관련 작업은 상위 폴더의 `app/` 하위에서 별도 진행한다. 이 폴더(`stocks/`)는 순수 리서치/분석 산출물만 다룬다.

## 프로젝트 목적

1. 투자 기준 정의 및 체크리스트 관리
2. DCF 시나리오 기반 적정주가 산출 (Extreme Bear / Bear / Base / Bull / Thesis)
3. 사용자 Thesis 팩트체크 및 Revaluation

## 투자 기준 파일

종목 분석 요청 시 아래 파일을 기준으로 판단:

- [01_criteria/01_analysis_guide.md](01_criteria/01_analysis_guide.md) — 종목 분석 결과물 작성 가이드
- [01_criteria/02_dcf_guide.md](01_criteria/02_dcf_guide.md) — DCF 분석 방법론 (기업 유형별: FCF DCF / SOTP / Excess Returns / NAV / Forward Multiple)

**모든 분석은 보수적 가정을 우선으로 한다.**

## 종목 평가 워크플로우

종목 분석은 **Base → Thesis → Revaluation** 3단계로 진행한다.
Base는 시장 컨센서스 관점의 리서치, Revaluation은 사용자의 장기 투자 엣지를 반영한 재평가다.

### 1단계: Base 분석 — "분석가이드대로 {TICKER} 종목 분석해줘"

시장이 평가하는 수준의 순수 Base. 가이드만으로 도출 가능한 컨센서스.

**실행 모드: Opus + ultrathink.** 퀄리티 우선, 속도 무관. 세션 모델이 Opus가 아니면 사용자에게 `/model opus` 전환을 제안한 뒤 진행한다.

1. [01_criteria/01_analysis_guide.md](01_criteria/01_analysis_guide.md)와 [01_criteria/02_dcf_guide.md](01_criteria/02_dcf_guide.md)를 읽는다
2. **DCF 방법론 선택**: `02_dcf_guide.md` Step 1 판별 테이블로 기업 유형에 맞는 방식 결정 (A~E 중 하나)
3. **섹션별 작성 규칙**을 따라 `02_stocks/{TICKER}/{TICKER}_base.md` 파일을 생성한다. 7번 섹션 첫머리에 **7-0 DCF 방법론 선택 블록** 필수 기재
4. **판단 근거와 의심 포인트를 파일에 모두 기록한다** — 3단계(Revaluation)는 새 세션에서 수행되므로, 머릿속에만 있고 파일에 없는 맥락은 증발한다. "왜 이 확률인가", "어떤 숫자가 취약한가", "왜 이 DCF 방식인가" 까지 명시
5. 작성 완료 전 가이드 하단의 **체크리스트**를 확인한다
6. **빈 `02_stocks/{TICKER}/{TICKER}_thesis.md` 파일을 함께 생성한다** (사용자가 이후 직접 작성할 자리)
7. **`02_stocks/{TICKER}/{TICKER}_stress.md` 파일을 생성한다** — 스트레스 테스트 (아래 "스트레스 테스트" 섹션 참조)
8. **빈 `02_stocks/{TICKER}/{TICKER}_qna.md` 파일을 생성한다** — 사용자 개인 메모장 (Q&A 양식만, 다른 파일에서 참조하지 않음)

> `{TICKER}_base.md` 는 **시장 컨센서스 Base**로 보존한다. Revaluation 시에도 덮어쓰지 않는다.

### 2단계: 사용자 Thesis 작성 (사용자가 작성)

사용자가 1단계에서 생성된 빈 `02_stocks/{TICKER}/{TICKER}_thesis.md` 파일에 장기 투자 관점의 엣지 근거/시나리오를 직접 작성한다.
Claude는 이 단계에서 파일 내용을 채우지 않는다. 사용자가 작성하는 파일에는 보통 다음이 포함된다:

- 장기적으로 이 종목을 좋게 보는 근거 (guide 기반 Base가 놓친 부분)
- 예상 시나리오 (구체적 이벤트, 시장 변화, 사업 전환 등)
- 기대 영향 (매출/이익/CF 증가 규모, 멀티플 리레이팅 등)

### 3단계: Revaluation — "{TICKER} 재평가해줘"

사용자 thesis를 팩트체크하고 Base에 반영해 재평가한다.

**실행 모드: Opus + ultrathink, 새 세션에서 시작.** 1단계 Base 작성 시 형성된 내러티브에 대한 anchoring을 제거하고 thesis 팩트체크를 중립적·적대적(adversarial)으로 수행하기 위함. Base/Thesis는 파일로 보존돼 있으므로 새 세션에서도 동일한 근거에 접근 가능하다. 세션 모델이 Opus가 아니면 `/model opus` 전환을 제안한 뒤 진행한다.

1. `02_stocks/{TICKER}/{TICKER}_base.md` 와 `02_stocks/{TICKER}/{TICKER}_thesis.md` 를 읽는다
2. **Thesis 팩트체크**:
   - 각 근거의 타당성 판단 (✅ 독립 소스 확인 / ⚠️ 회사 자체 공시만 / ❌ 반박 근거 존재)
   - 각 시나리오의 **실현 확률 (%)** 판단과 근거
3. **Base + Thesis 재평가**: `02_stocks/{TICKER}/{TICKER}_revaluation.md` 파일을 생성한다
   - Base의 DCF 시나리오 (Extreme Bear / Bear / Base / Bull) 에 **Thesis Case 시나리오 추가**
   - Thesis Case 확률 = thesis의 실현 확률 × 팩트체크 감쇠
   - 기존 4개 시나리오 확률 재조정 (합계 100% 유지)
   - 실현 시 증가분 현금흐름 × 실현 확률로 기댓값 반영
   - 새 가중평균 목표가 산출
4. **마지막 섹션: Base vs Revaluation 비교**
   - 근거 차이: thesis가 추가로 반영한 엣지 요약
   - DCF value 차이: Base 가중평균 vs Revaluation 가중평균 목표가 비교표
   - 엣지의 기댓값 기여 ($ 단위)
5. **AI 요약 파일 생성**: `02_stocks/{TICKER}/{TICKER}_ai.md` 작성 (아래 "AI 요약 파일" 섹션 참조). base/thesis/revaluation/stress 4개를 모두 읽은 같은 세션에서 작성하므로 추가 분석 비용이 없다.
6. **보고서 병합 스크립트 실행**: `python scripts/build_report.py {TICKER}` 로 base/thesis/revaluation/stress 4개 파일을 하나로 병합한 `02_stocks/{TICKER}/{TICKER}_report.txt` 생성 (메신저 복붙용 plain text, 한글/영문 혼합 표 폭 정렬 포함). 마크다운 원본 유지 필요 시 `--markdown` 플래그 사용

> Stress는 Revaluation에 **반영하지 않는다**. Report 말미에 참고용으로만 첨부된다.

## 스트레스 테스트 (`{TICKER}_stress.md`)

Base/Thesis와 별도로 **매크로·구조적 취약점**에 대한 시나리오 테스트를 기록하는 파일. Base 단계에서 Claude가 생성하며, 사용자가 이후 시나리오를 자유롭게 추가·확장할 수 있다.

**목적**: DCF 시나리오(Extreme Bear~Thesis)로는 포착이 어려운 **외생 충격·꼬리 위험**을 별도 트랙에서 점검.

**Revaluation에는 반영하지 않는다** — 목표가 가중평균 계산에 섞지 않고, Report 말미에 참고용 섹션으로만 표기.

**포함 항목 (기본 템플릿)**:
- 금리 상승 (WACC +200bp 등)
- 경기 침체 / 수요 쇼크
- 규제·정책 리스크 (반독점, 수출 통제, 세제 등)
- 고객·매출 집중도 (Top 고객 이탈, 섹터 의존)
- 공급망·CAPEX 충격 (전력/부품/인력 병목 역전)
- FX·지정학 리스크
- 경쟁 구도 변화 (신규 진입자, 기술 파괴)

**시나리오별 구조**: `가정 → 재무/밸류에이션 충격 추정 → 회사가 버티는 근거 or 취약한 근거 → 관찰 지표(사용자가 모니터링할 선행 시그널) → 실현가능성(%) → Bear DCF 반영 시 기여`.

**실현가능성 % + Bear DCF 시뮬레이션**:
- 각 시나리오 말미에 **실현가능성 (%)** 과 근거 한 줄을 명시
- **Bear DCF 반영 시**: `주가/DCF 충격 × 실현가능성 = Bear에 추가될 기여(%pt)` 형태로 산식 표기
- 파일 말미에 **Bear DCF 시뮬레이션 합산 표** (시나리오별 충격·확률·기여 + 합계) 추가
- 합산 표 아래 **Bear → Stress 반영 시 비교 블록** 추가: Revaluation 파일의 실제 Bear/Extreme Bear 중간값을 가져와 `Bear $X → 단순합산 적용 시 $Y / 동조성 보정 시 $Z (vs Extreme Bear $W)` 형식으로 표기. Stress 누적 시 Bear가 Extreme Bear에 어디까지 근접/관통하는지 한눈에 비교
- **주의**: 실제 Revaluation 가중평균에는 반영하지 않는다. 어디까지나 "만약 모두 반영했다면 Bear가 얼마나 더 깊어지는가"를 점검하는 참고 시뮬레이션이다

Claude는 초기 생성 시 해당 기업에 **관련성 높은 3~5개 시나리오**만 작성한다(일반론 나열 지양). 사용자가 이후 필요한 시나리오를 추가한다.

## AI 요약 파일 (`{TICKER}_ai.md`)

base/thesis/revaluation/stress 의 핵심만 압축한 **AI 전용 참조 파일**. 사람이 읽는 원본 4개 파일은 보존하되, **뉴스 이벤트가 이 종목에 어떤 영향을 주는지 빠르게 매핑**할 때 Claude가 짧은 컨텍스트로 판단하도록 하는 용도.

**원칙**:
- 사람용 내러티브·근거 설명·문장형 분석은 **모두 제외**. 숫자·키워드·구조만 남긴다.
- base/thesis/revaluation/stress의 **모든 핵심 정보**가 담겨야 한다 (요약본만 보고도 뉴스 영향 판단 가능해야 함). 빠뜨리지 말 것.
- 원본 파일이 갱신될 때만 재작성. 뉴스 크롤링·이벤트 분석 작업은 이 파일을 **수정하지 않는다** (읽기 전용 참조).

**필수 포함 항목** (섹션 순서 고정):

1. **Thesis 한 줄** — Revaluation에서 도출된 핵심 투자 논리 1~2 문장
2. **DCF 핵심 가정** — 방법론(A~E) / 매출 성장률 / 마진 / WACC / Terminal multiple — 표 형태, 숫자만
3. **시나리오 표** — Extreme Bear / Bear / Base / Bull / Thesis 각각 **확률(%) · 목표가($) · 핵심 트리거 키워드**
4. **민감도 상위 드라이버 3~5개** — 어떤 변수가 ±1% 움직이면 목표가가 가장 크게 흔들리는가 (변수명 + 방향)
5. **모니터링 지표** — stress.md의 관찰 시그널 + revaluation의 thesis 팩트체크 항목 (뉴스에서 추적할 키워드 리스트)
6. **취약 가정 / Watch-out** — Base에서 "의심 포인트"로 표기된 항목, thesis 팩트체크에서 ⚠️/❌ 받은 근거
7. **현재가 vs 가중평균 목표가** — 한 줄, 업사이드/다운사이드 %

**뉴스 영향 분석 시 사용법** (Claude 참고):
- 뉴스 한 건 → 5번(모니터링 지표) 키워드와 매칭 → 어떤 가정/시나리오를 흔드는지 식별
- 매칭된 항목이 2번(DCF 가정) 또는 6번(취약 가정)에 직결되면 → 시나리오 확률 재조정 필요성 플래그
- 원본 파일 수정 여부는 **사용자에게 확인** 후 진행 (자동 수정 금지)

## 포트폴리오 분석 — "포트폴리오 분석해줘"

1. [00_PortfolioStrategy.md](00_PortfolioStrategy.md) 에서 사용자의 보유 종목/수량을 읽는다
2. 각 종목의 `02_stocks/{TICKER}/{TICKER}_revaluation.md` (없으면 `{TICKER}_base.md`) 를 참조한다
3. 포트폴리오 차원 분석 수행 (구체적 방법론은 추후 정의)

## 폴더 구조 (`stocks/`)

```
stocks/
├── CLAUDE.md                 # 본 파일
├── 00_PortfolioStrategy.md   # 사용자 보유 포트폴리오 + 분석 트리거
├── 01_criteria/              # 투자 기준 정의
│   └── 01_analysis_guide.md
└── 02_stocks/                # 종목별 분석 결과물
    └── {TICKER}/
        ├── {TICKER}_base.md          — Base 리서치 (가이드 기반)
        ├── {TICKER}_thesis.md        — 사용자 엣지 시나리오
        ├── {TICKER}_revaluation.md   — 팩트체크 + 재평가 + 비교
        ├── {TICKER}_stress.md        — 매크로·구조적 취약점 스트레스 테스트 (Revaluation 미반영)
        ├── {TICKER}_ai.md            — AI 전용 압축 요약 (뉴스 영향 매핑용, 읽기 전용)
        ├── {TICKER}_qna.md           — 사용자 개인 Q&A 메모 (참조 없음)
        └── {TICKER}_report.txt       — 메신저 복붙용 병합 보고서
```

## Git 브랜치 전략

- `main` — 안정 버전
- `Develop/Feature/*` — 기능 개발

## 주의사항

- 모든 분석은 **보수적 가정**을 우선으로 한다
- 투자자 배경: C/C++ 경험, Python 초급
