# CashMachine — 주식 리서치

미국 주식 장기 가치투자 분석 워크스페이스.

> 앱(대시보드, DCF 엔진, 데이터 레이어) 관련 작업은 상위 폴더의 `app/` 하위에서 별도 진행한다. 이 폴더(`stocks/`)는 순수 리서치/분석 산출물만 다룬다.

## 프로젝트 목적

1. 투자 기준 정의 및 체크리스트 관리
2. **DCF 3시나리오 기반 가치 범위 산출** (Bear / Base / Bull — 가중평균 없음. 매수 판정은 이 파일 범위 밖 — 현재가 의존 판단은 상위 단계에서 수행)
3. **스트레스 테스트는 Section 6에 통합** (매크로·구조적 취약점 → 취약성 등급 "강함/중간/취약" 표기)
4. **Verdict 생성** — base 측정을 philosophy 렌즈로 정제한 "15%+ 복리 가능성" 판정 파일 (서버 업로드 산출물, 지지/반대 증거 대등)

> 개인 분석(Thesis, Revaluation, Portfolio)은 [02_tickers/CLAUDE.md](02_tickers/CLAUDE.md) 참조.

## 투자 기준 파일

종목 분석 요청 시 아래 파일을 기준으로 판단:

- [01_criteria/01_philosophy.md](01_criteria/01_philosophy.md) — 투자 철학·가치관·렌즈 (왜 측정하는가, 모든 단계에서 상시 상기)
- [01_criteria/02_base_guide.md](01_criteria/02_base_guide.md) — `{TICKER}_base.md` 작성 가이드 (무엇을 어떻게 측정하는가)
- [01_criteria/03_dcf_guide.md](01_criteria/03_dcf_guide.md) — DCF 분석 방법론 (기업 유형별: FCF DCF / SOTP / Excess Returns / NAV / Forward Multiple)
- [01_criteria/04_verdict_guide.md](01_criteria/04_verdict_guide.md) — `{TICKER}_verdict.md` 작성 가이드 (판정·근거·결론)

**모든 분석은 보수적 가정을 우선으로 한다.**

## 분석 워크플로우 — Base + Verdict — "분석가이드대로 {TICKER} 종목 분석해줘"

한 세션에서 **base.md(측정 원재료) + verdict.md(판정 결론)**를 모두 생성한다.
base는 가이드만으로 도출 가능한 컨센서스 수준의 측정, verdict는 그 측정을 philosophy 렌즈로 정제한 15%+ 복리 판정.

**실행 모드: Opus + ultrathink.** 퀄리티 우선, 속도 무관. 세션 모델이 Opus가 아니면 사용자에게 `/model opus` 전환을 제안한 뒤 진행한다.

**종목당 1세션 원칙**: 분석은 종목당 별도 세션에서 수행한다. 한 세션에서 여러 종목을 분석하면 컨텍스트 압축으로 판단 근거가 유실되고, 종목 간 내러티브 오염(cross-contamination)이 발생한다.

1. [01_criteria/02_base_guide.md](01_criteria/02_base_guide.md), [01_criteria/03_dcf_guide.md](01_criteria/03_dcf_guide.md), [01_criteria/04_verdict_guide.md](01_criteria/04_verdict_guide.md) 를 읽는다
2. **DCF 방법론 선택**: `03_dcf_guide.md` Step 1 판별 테이블로 기업 유형에 맞는 방식 결정 (A~E 중 하나)
3. **섹션별 작성 규칙**을 따라 `02_tickers/{TICKER}/{TICKER}_base.md` 파일을 생성한다. 7번 섹션 첫머리에 **7-1 DCF 방법론 선택 블록** 필수 기재
4. **판단 근거와 의심 포인트를 파일에 모두 기록한다** — 나중에 다시 읽을 때 파일에 없는 맥락은 증발하므로 머릿속에만 두지 않는다. "어떤 숫자가 취약한가", "왜 이 DCF 방식인가", "취약성 등급 근거" 까지 명시
5. **Section 6에 스트레스 시나리오 3~5개 통합 작성** (별도 stress.md 파일 없음. 각 시나리오에 "강함/중간/취약" 취약성 등급)
6. base 작성 완료 전 가이드 하단의 **체크리스트**를 확인한다
7. `04_verdict_guide.md`를 따라 `02_tickers/{TICKER}/{TICKER}_verdict.md` 파일을 생성한다. **지지/반대 증거 대등 + YES/조건부/NO 판정 명시 + §0 회사 소개 포함 + 150~270줄 분량** 필수
8. verdict 작성 완료 전 가이드 하단의 **체크리스트**를 확인한다
9. **`02_tickers/{TICKER}/{TICKER}_trajectory.md` 를 생성한다** — 첫 분석 시점의 1번째 분기 블록만 포함한 최소 상태 (가이드의 trajectory 포맷 따름)
10. **빈 `02_tickers/{TICKER}/personal/{TICKER}_thesis.md` 파일을 함께 생성한다** (사용자가 이후 직접 작성할 자리)
11. **빈 `02_tickers/{TICKER}/personal/{TICKER}_qna.md` 파일을 생성한다** — 사용자 개인 메모장 (Q&A 양식만, 다른 파일에서 참조하지 않음)

> `{TICKER}_base.md`·`{TICKER}_verdict.md` 는 항상 **최신 상태**를 유지한다 (분기 실적마다 덮어쓰기).
> 판정 이동의 이력은 `{TICKER}_trajectory.md` 에 블록 누적, 과거 verdict 원본은 `snapshots/` 에 보존한다.

## 분기 업데이트 워크플로우 — "`{TICKER} 분기 업데이트해줘`"

분기 실적 발표 후 verdict·base를 최신화하고 trajectory에 판정 이동을 기록하는 전용 세션.

**진입 트리거 키워드**: "`{TICKER} 분기 업데이트`", "`{TICKER} 분기 갱신`", "`{TICKER} 실적 반영`" 등 분기 업데이트 요청으로 해석되는 모든 자연어.

**진입 시 필수 선행 열람 (드리프트 방지 핵심)**:

1. [01_criteria/04_verdict_guide.md](01_criteria/04_verdict_guide.md) **"분기 업데이트 워크플로우" 섹션 전체**를 먼저 읽는다 — 여기에 **분기 업데이트 체크리스트 단일 출처**가 있다. trajectory.md·다른 어디에도 복제본 없음.
2. 기존 `{TICKER}_verdict.md` · `{TICKER}_base.md` · `{TICKER}_trajectory.md` 를 모두 읽는다
3. 가이드의 체크리스트 항목을 순서대로 수행한다 (스냅샷 보존 → base 갱신 → verdict 재작성 → trajectory 상단 블록 추가)

**이 프로토콜이 중요한 이유**: 체크리스트가 가이드에만 존재하므로, 가이드를 먼저 읽지 않으면 뭘 점검해야 하는지 모른 채 작업이 시작된다. **진입 시 가이드 선행 열람을 반드시 수행해야 한다** — 수동 세션이든 `claude -p` 자동화든 동일.

> 신규 분석(위 섹션) vs 분기 업데이트(본 섹션)는 **다른 워크플로우**다. 신규 분석은 종목 폴더가 없는 상태에서 시작, 분기 업데이트는 기존 파일을 기반으로 갱신.

## 스트레스 테스트 — Section 6에 통합

스트레스 시나리오는 별도 파일이 아니라 **`{TICKER}_base.md` Section 6 (리스크 / Inversion)** 내부에 작성한다.

- **판정 방식**: 각 시나리오에 강함 / 중간 / 취약 **등급 표기** (게이팅·투자 부적격 판정 아님)
- **DCF 계산에 미반영**: 주가 충격은 참고 표기만, 실제 밸류에이션 계산엔 섞지 않는다
- **작성 범위**: 해당 기업 관련성 높은 3~5개 시나리오만 (일반론 나열 지양)
- **상세 규칙**: [01_criteria/02_base_guide.md](01_criteria/02_base_guide.md) Section 6-3 / 6-4 참조

## 폴더 구조 (`stocks/`)

```
stocks/
├── CLAUDE.md                 # 본 파일 — Base + Verdict 워크플로우
├── 00_PortfolioStrategy.md   # 사용자 보유 포트폴리오
├── 01_criteria/              # 투자 기준 정의
│   ├── 01_philosophy.md         — 투자 철학·가치관·렌즈 (상시 상기)
│   ├── 02_base_guide.md         — Base 리서치 작성 가이드 (측정 템플릿)
│   ├── 03_dcf_guide.md          — DCF 방법론
│   └── 04_verdict_guide.md      — Verdict 작성 가이드 (판정·근거·결론)
└── 02_tickers/                # 종목별 분석 결과물
    ├── CLAUDE.md             # 개인 분석 워크플로우 (Thesis / Revaluation / Portfolio)
    └── {TICKER}/
        ├── {TICKER}_base.md          — Base 리서치 (원재료, 최신 측정, 내부에 분기별 점검 기록)
        ├── {TICKER}_verdict.md       — 15%+ 판정 (서버 업로드, 항상 최신)
        ├── {TICKER}_trajectory.md    — 분기별 판정 궤적 (최신 블록이 위, 누적)
        ├── snapshots/                — 분기별 verdict 스냅샷 (복원용)
        │   └── {YYYY}Q{N}_verdict.md
        └── personal/                 — 개인 리서치 (앱 비공개)
            ├── {TICKER}_thesis.md        — 사용자 엣지 시나리오
            ├── {TICKER}_revaluation.md   — 팩트체크 + 재평가 + 비교
            └── {TICKER}_qna.md           — 사용자 개인 Q&A 메모 (참조 없음)
```

> **분기 업데이트 방식**: verdict/base는 항상 최신으로 **덮어쓴다**. 판정 이동의 누적은 `trajectory.md`에 블록 추가로 기록하고, 직전 분기 verdict 원본은 `snapshots/{YYYY}Q{N}_verdict.md`로 보존한다. 상세 절차는 [01_criteria/04_verdict_guide.md](01_criteria/04_verdict_guide.md) "분기 업데이트 워크플로우" 참조.

---

## 루프 워크플로우 — 자동 배치 분석 (신규 분석 전용)

> `claude -p` (headless 모드)로 종목당 **독립 세션**을 자동 생성하여 분석한다.
> 매 호출이 새 세션이므로 종목당 1세션 원칙이 자동으로 지켜진다.
> **update(분기 갱신) 모드는 [01_criteria/04_verdict_guide.md](01_criteria/04_verdict_guide.md) "분기 업데이트 워크플로우" 참조** (스냅샷 보존 + trajectory 누적).

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
  │     │   └─ base.md, verdict.md, trajectory.md (초기 블록), 빈 thesis/qna 생성
  │     │
  │     ├─ 필수 파일 검증 (base.md · verdict.md · trajectory.md 존재 확인)
  │     ├─ 검증 통과 시 UNIVERSE.md 업데이트 (Base: Y, 날짜)
  │     ├─ 실패 또는 파일 누락 시 불완전 파일/폴더 자동 삭제 (신규 폴더만)
  │     ├─ 진행률 출력
  │     └─ sleep 5 (rate limit 방지)
  │
  └─ 최종 보고 (성공/실패 수, 목록, 로그 경로)
```

### 실패·중단 처리

- `claude -p`가 exit 0으로 끝나도 **base.md 존재**를 확인한 뒤에만 UNIVERSE.md를 업데이트한다
- 분석 실패, 파일 누락, 또는 rate limit 시 **해당 종목의 불완전 파일을 자동 정리**한다
- 정리 대상: 분석 전에 존재하지 않았던 폴더 (`02_tickers/{TICKER}/`)
- UNIVERSE.md는 성공 시에만 업데이트하므로, 재실행 시 실패 종목을 자동 재시도한다
- `Ctrl+C`로 중단 시 현재 진행 중인 종목의 불완전 파일을 자동 정리하고 루프를 종료한다. 이미 완료된 종목의 기록은 보존된다

### 로그

- `scripts/logs/analysis_YYYYMMDD_HHMMSS.log` 에 전체 실행 로그 저장

### 주의사항

- Revaluation은 루프 대상이 아니다 — 사용자 thesis 작성 후 별도 세션에서 수행
- 재실행 시 이미 완료된 종목(Base: Y)은 자동으로 건너뛴다

---

## Git 브랜치 전략

- `main` — 안정 버전
- `Develop/Feature/*` — 기능 개발

## 주의사항

- 모든 분석은 **보수적 가정**을 우선으로 한다
- 투자자 배경: C/C++ 경험, Python 초급
