# CashMachine — 주식 리서치

미국 주식 장기 가치투자 분석 워크스페이스.

> 앱(대시보드, DCF 엔진, 데이터 레이어) 관련 작업은 상위 폴더의 `app/` 하위에서 별도 진행한다. 이 폴더(`stocks/`)는 순수 리서치/분석 산출물만 다룬다.

## 프로젝트 목적

1. 투자 기준 정의 및 체크리스트 관리
2. DCF 시나리오 기반 적정주가 산출 (Extreme Bear / Bear / Base / Bull)
3. 스트레스 테스트 (매크로·구조적 취약점 별도 트랙)

> 개인 분석(Thesis, Revaluation, Portfolio)은 [02_tickers/CLAUDE.md](02_tickers/CLAUDE.md) 참조.

## 투자 기준 파일

종목 분석 요청 시 아래 파일을 기준으로 판단:

- [01_criteria/01_analysis_guide.md](01_criteria/01_analysis_guide.md) — 종목 분석 결과물 작성 가이드
- [01_criteria/02_dcf_guide.md](01_criteria/02_dcf_guide.md) — DCF 분석 방법론 (기업 유형별: FCF DCF / SOTP / Excess Returns / NAV / Forward Multiple)

**모든 분석은 보수적 가정을 우선으로 한다.**

## Base 분석 워크플로우 — "분석가이드대로 {TICKER} 종목 분석해줘"

시장이 평가하는 수준의 순수 Base. 가이드만으로 도출 가능한 컨센서스.

**실행 모드: Opus + ultrathink.** 퀄리티 우선, 속도 무관. 세션 모델이 Opus가 아니면 사용자에게 `/model opus` 전환을 제안한 뒤 진행한다.

**종목당 1세션 원칙**: Base 분석은 종목당 별도 세션에서 수행한다. 한 세션에서 여러 종목을 분석하면 컨텍스트 압축으로 판단 근거가 유실되고, 종목 간 내러티브 오염(cross-contamination)이 발생한다.

1. [01_criteria/01_analysis_guide.md](01_criteria/01_analysis_guide.md)와 [01_criteria/02_dcf_guide.md](01_criteria/02_dcf_guide.md)를 읽는다
2. **DCF 방법론 선택**: `02_dcf_guide.md` Step 1 판별 테이블로 기업 유형에 맞는 방식 결정 (A~E 중 하나)
3. **섹션별 작성 규칙**을 따라 `02_tickers/{TICKER}/{TICKER}_base.md` 파일을 생성한다. 8번 섹션 첫머리에 **8-0 DCF 방법론 선택 블록** 필수 기재
4. **판단 근거와 의심 포인트를 파일에 모두 기록한다** — Revaluation은 별도 세션에서 수행되므로, 머릿속에만 있고 파일에 없는 맥락은 증발한다. "왜 이 확률인가", "어떤 숫자가 취약한가", "왜 이 DCF 방식인가" 까지 명시
5. 작성 완료 전 가이드 하단의 **체크리스트**를 확인한다
6. **`02_tickers/{TICKER}/{TICKER}_stress.md` 파일을 생성한다** — 스트레스 테스트 (아래 참조)
7. **앱용 분석 파일 생성**: [01_criteria/03_app_analysis_guide.md](01_criteria/03_app_analysis_guide.md) 규칙에 따라 `app/data/{TICKER}/{TICKER}_analysis.md` 를 생성한다. base.md 내용이 컨텍스트에 있는 상태에서 바로 변환한다.
8. **빈 `02_tickers/{TICKER}/personal/{TICKER}_thesis.md` 파일을 함께 생성한다** (사용자가 이후 직접 작성할 자리)
9. **빈 `02_tickers/{TICKER}/personal/{TICKER}_qna.md` 파일을 생성한다** — 사용자 개인 메모장 (Q&A 양식만, 다른 파일에서 참조하지 않음)

> `{TICKER}_base.md` 는 **시장 컨센서스 Base**로 보존한다. Revaluation 시에도 덮어쓰지 않는다.

## 스트레스 테스트 (`{TICKER}_stress.md`)

Base와 별도로 **매크로·구조적 취약점**에 대한 시나리오 테스트를 기록하는 파일. Base 단계에서 Claude가 생성하며, 사용자가 이후 시나리오를 자유롭게 추가·확장할 수 있다.

**목적**: DCF 시나리오(Extreme Bear~Bull)로는 포착이 어려운 **외생 충격·꼬리 위험**을 별도 트랙에서 점검.

**Revaluation에는 반영하지 않는다** — 목표가 가중평균 계산에 섞지 않고, 참고용으로만 사용.

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
- 합산 표 아래 **Bear → Stress 반영 시 비교 블록** 추가: Base 파일의 실제 Bear/Extreme Bear 중간값을 가져와 `Bear $X → 단순합산 적용 시 $Y / 동조성 보정 시 $Z (vs Extreme Bear $W)` 형식으로 표기
- **주의**: 실제 가중평균에는 반영하지 않는다. "만약 모두 반영했다면 Bear가 얼마나 더 깊어지는가"를 점검하는 참고 시뮬레이션이다

Claude는 초기 생성 시 해당 기업에 **관련성 높은 3~5개 시나리오**만 작성한다(일반론 나열 지양). 사용자가 이후 필요한 시나리오를 추가한다.

## 폴더 구조 (`stocks/`)

```
stocks/
├── CLAUDE.md                 # 본 파일 — Base + Stress 워크플로우
├── 00_PortfolioStrategy.md   # 사용자 보유 포트폴리오
├── 01_criteria/              # 투자 기준 정의
│   ├── 01_analysis_guide.md
│   ├── 02_dcf_guide.md
│   └── 03_app_analysis_guide.md  # base → 앱용 변환 규칙
└── 02_tickers/                # 종목별 분석 결과물
    ├── CLAUDE.md             # 개인 분석 워크플로우 (Thesis / Revaluation / Portfolio)
    └── {TICKER}/
        ├── {TICKER}_base.md          — Base 리서치 (가이드 기반)
        ├── {TICKER}_stress.md        — 스트레스 테스트 (가중평균 미반영)
        └── personal/                 — 개인 리서치 (앱 비공개)
            ├── {TICKER}_thesis.md        — 사용자 엣지 시나리오
            ├── {TICKER}_revaluation.md   — 팩트체크 + 재평가 + 비교
            └── {TICKER}_qna.md           — 사용자 개인 Q&A 메모 (참조 없음)
```

---

## 루프 워크플로우 — 자동 배치 분석 (신규 분석 전용)

> `claude -p` (headless 모드)로 종목당 **독립 세션**을 자동 생성하여 분석한다.
> 매 호출이 새 세션이므로 종목당 1세션 원칙이 자동으로 지켜진다.
> **update 모드는 별도 가이드 작성 후 추가 예정.**

### 실행 스크립트

`scripts/run_analysis.sh` — UNIVERSE.md에서 Base가 빈 종목을 순회하며 `claude -p` 로 분석 실행.

### 사용법

```bash
# 미분석 종목 전체 순회
bash scripts/run_analysis.sh

# 5개만 처리
bash scripts/run_analysis.sh -n 5
```

### 동작 흐름

```
run_analysis.sh
  │
  ├─ UNIVERSE.md 파싱 → Base가 빈 종목 리스트 추출
  │
  ├─ for ticker in 대상:
  │     │
  │     ├─ claude -p "분석가이드대로 {TICKER} 종목 분석해줘"
  │     │   └─ 새 세션 = 깨끗한 컨텍스트
  │     │   └─ CLAUDE.md 자동 로드 → 기존 워크플로우 그대로 실행
  │     │   └─ base.md, stress.md, 앱용 파일, 빈 thesis/qna 생성
  │     │
  │     ├─ 필수 파일 검증 (base.md, stress.md, app analysis.md 존재 확인)
  │     ├─ 검증 통과 시 UNIVERSE.md 업데이트 (Base: ✅, Stress: ✅, 날짜)
  │     ├─ 실패 또는 파일 누락 시 불완전 파일/폴더 자동 삭제 (신규 폴더만)
  │     ├─ 진행률 출력
  │     └─ sleep 5 (rate limit 방지)
  │
  └─ 최종 보고 (성공/실패 수, 목록, 로그 경로)
```

### 실패·중단 처리

- `claude -p`가 exit 0으로 끝나도 **필수 파일 3개**(base.md, stress.md, app analysis.md) 존재를 확인한 뒤에만 UNIVERSE.md를 업데이트한다
- 분석 실패, 파일 누락, 또는 rate limit 시 **해당 종목의 불완전 파일을 자동 정리**한다
- 정리 대상: 분석 전에 존재하지 않았던 폴더 (`02_tickers/{TICKER}/`, `app/data/{TICKER}/`)
- UNIVERSE.md는 성공 시에만 업데이트하므로, 재실행 시 실패 종목을 자동 재시도한다
- `Ctrl+C`로 중단 시 현재 진행 중인 종목의 불완전 파일을 자동 정리하고 루프를 종료한다. 이미 완료된 종목의 기록은 보존된다

### 로그

- `scripts/logs/analysis_YYYYMMDD_HHMMSS.log` 에 전체 실행 로그 저장

### 주의사항

- Revaluation은 루프 대상이 아니다 — 사용자 thesis 작성 후 별도 세션에서 수행
- 재실행 시 이미 완료된 종목(Base ✅)은 자동으로 건너뛴다

---

## Git 브랜치 전략

- `main` — 안정 버전
- `Develop/Feature/*` — 기능 개발

## 주의사항

- 모든 분석은 **보수적 가정**을 우선으로 한다
- 투자자 배경: C/C++ 경험, Python 초급
