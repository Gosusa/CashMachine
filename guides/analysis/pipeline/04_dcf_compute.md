---
kind: analysis-pipeline
name: dcf_compute
version: 0.1.0
implementation: code  # Python (NOT AI)
depends_on:
  - reference/dcf_methods.md
inputs:
  - dcf_factors.json # 모듈 3 출력
outputs:
  - dcf_results.json # 모듈 5가 파싱
---

# 모듈 4. DCF 계산 (Python 코드)

> **이 모듈은 AI가 아니라 Python 코드.**
> dcf_factors.json 받아 결정적으로 dcf_results.json 산출.
> 가이드는 코드 작성을 위한 spec — 알고리즘 단계 + 함수 시그니처 + 출력 schema + 검증 항목.

## 1. 목적 (Why)

DCF는 결정적 산수. AI가 산수 틀리면 안 된다. Factor가 정해지면 같은 입력 = 같은 출력 보장.

**왜 코드인가:**
- **결정적** — AI re-roll 없음. 같은 dcf_factors.json → 항상 같은 dcf_results.json
- **즉시 반응** — UI에서 사용자가 Factor 슬라이더 조작해도 즉시 새 결과 (AI 재호출 X)
- **검증 가능** — 단위 테스트, 수학적 제약 violation 즉시 throw
- **비용 0** — 매번 AI 호출 비용 없음

---

## 2. 입력 (Inputs)

- **`dcf_factors.json`** — 모듈 3 결과 (모든 정량 factor)
  - 스키마: [packages/shared-types/schemas/dcf-factors.ts](../../../packages/shared-types/schemas/dcf-factors.ts)
- [reference/dcf_methods.md](../reference/dcf_methods.md) — 방법별 변수 정의·계산 공식·수학적 제약·출력 bucket
- **외부 데이터 조회 X** — 모든 정량값은 dcf_factors.json에 이미 있음. 코드는 산수만.

---

## 3. 출력 (Outputs)

### `dcf_results.json` (모듈 5가 파싱)

스키마: [packages/shared-types/schemas/dcf-results.ts](../../../packages/shared-types/schemas/dcf-results.ts)

핵심 구조:
```
{
  ticker, analysis_date, guide_version_id,
  based_on_factors_id,            // 모듈 3 결과 FK
  computed_at,

  segments: [
    {
      segment_id,
      method,                      // 'A_FCF'|'B_SOTP'|'C_ExcessReturns'|'D_NAV'|'E_ForwardMultiple'
      bucket,                      // 'operating_ev' | 'equity'
      scenarios: {
        bear: {
          segment_value,           // EV (operating_ev) 또는 Equity (equity)
          components: { ... }      // method별 PV 분해 (감사용)
        },
        base: {...},
        bull: {...}
      }
    }
  ],

  company_results: {
    bear: {
      operating_ev_sum,            // Σ operating_ev bucket segment_value
      equity_sum,                  // Σ equity bucket segment_value
      net_debt,
      minority_interest,
      non_operating_assets,
      shareholder_value,           // [operating_ev_sum − net_debt − minority + non_op] + equity_sum
      diluted_shares_outstanding,
      target_price                 // shareholder_value / diluted_shares
    },
    base: {...},
    bull: {...}
  }
}
```

> **md 파일 출력 X** — 사람이 읽는 narrative는 모듈 5 (리포트) 담당. M4는 산수만 출력.

---

## 4. 핵심 원칙 (Principles)

1. **결정적 산수** — 같은 dcf_factors.json 입력 → 항상 같은 dcf_results.json 출력. 난수·LLM·외부 호출 X
2. **입력 검증 강제** — 수학적 제약 위반 시 즉시 `ValueError` throw (terminal_g < WACC, terminal_g ≤ Rf, terminal_g ≤ GDP 등)
3. **시나리오 합성 금지** — Bear cloud + Bull hardware 같은 회사 결과 X. 코드는 시나리오별로 모든 사업부를 묶어 계산
4. **bucket 분류 엄수** — 사업부 method가 결정한 bucket ('operating_ev' / 'equity') 따름. dcf_methods §3 출력 bucket 참조
5. **새 가정 X** — 모든 정량값은 dcf_factors.json에 있음. 코드가 새 추정 X (forecast_years 임의 변경 등 금지)
6. **회사 종합 = 단순 합산** — 가중평균 X. operating_ev bucket 합 − Net Debt − Minority + Non-op + equity bucket 합

---

## 5. 본체 (Process)

작성 흐름: **입력 검증 → 사업부별 method별 계산 → 시나리오별 회사 종합**.

### 5.1 입력 검증

```python
def validate_factors(factors: DcfFactors) -> None:
    """raise ValueError if any constraint violated."""
```

검증 항목:
1. **Schema** — zod 스키마 자동 검증 (필드 누락·타입 오류)
2. **수학적 제약** — Method A·C 사업부에서:
   - `terminal_method == 'gordon'` 시: `terminal_g < WACC` (또는 C에서 `< CoE`)
   - `terminal_g ≤ Rf` (보수)
   - `terminal_g ≤ 장기 GDP 성장률` (~3%)
3. **시나리오 완전성** — 모든 사업부에 Bear/Base/Bull 3개 시나리오 채워짐
4. **company_factors 필수** — `wacc`, `effective_tax_rate`, `net_debt`, `diluted_shares_outstanding` 필수

> bucket은 M3가 아닌 **M4가 method에서 산출**하는 값 (Method A → operating_ev 등). 입력 검증 대상이 아니라 출력 SegmentResult에 포함.

위반 시 명시적 메시지로 throw (예: `"terminal_g 4.5% >= wacc 4.0% (segment X, scenario bear)"`).

### 5.2 사업부별 Method별 계산

각 사업부 method에 따라 호출. 각 함수는 시나리오 (Bear/Base/Bull) iteration 내장.

```python
def compute_segment(segment: SegmentFactors, company_factors: CompanyFactors) -> SegmentResult:
    if segment.method == 'A_FCF':         return compute_method_a(segment, company_factors)
    elif segment.method == 'B_SOTP':      return compute_method_b(segment, company_factors)
    elif segment.method == 'C_ExcessReturns': return compute_method_c(segment, company_factors)
    elif segment.method == 'D_NAV':       return compute_method_d(segment, company_factors)
    elif segment.method == 'E_ForwardMultiple': return compute_method_e(segment, company_factors)
```

#### Method A — Standard FCF DCF

**Bucket**: `'operating_ev'`
**공식**: [dcf_methods §3 A](../reference/dcf_methods.md#a-standard-fcf-dcf) — `EV = Σ FCF_t / (1+WACC)^t + TV / (1+WACC)^N`

**알고리즘** (시나리오별 iteration):
1. **FCF 시계열 추정** (Y1 ~ YN):
   - `revenue_t = revenue_y0 × (1 + revenue_cagr)^t`
   - `Δrevenue_t = revenue_t − revenue_(t-1)` (단, `revenue_0 = revenue_y0`)
   - `margin_t = linear_interp(ebit_margin_start, ebit_margin_end, t, N)`
   - `ebit_t = revenue_t × margin_t`
   - `fcf_t = ebit_t × (1 − tax_rate) + revenue_t × da_pct − revenue_t × capex_pct − Δrevenue_t × nwc_pct`
2. **PV of FCF**: `pv_fcf = Σ fcf_t / (1 + WACC)^t`
3. **Terminal Value**:
   - `gordon`: `TV = fcf_(N+1) / (WACC − terminal_g)` where `fcf_(N+1) = fcf_N × (1 + terminal_g)`
   - `exit_multiple`: `TV = ebitda_N × exit_multiple` where `ebitda_N = ebit_N + revenue_N × da_pct`
4. **EV** = `pv_fcf + TV / (1 + WACC)^N`

**함수 시그니처**:
```python
def compute_method_a(segment, company_factors) -> SegmentResult:
    """bucket: 'operating_ev'. Returns SegmentResult with bear/base/bull scenarios."""
```

**components**: `{pv_fcf, pv_terminal, terminal_method, fcf_per_year (optional)}`

#### Method B — SOTP

**Bucket**: `'operating_ev'`
**공식**: [dcf_methods §3 B](../reference/dcf_methods.md#b-sotp-재귀) — `EV = Σ Earnings_i × Multiple_i + Σ Asset_j (시장가치)`

**알고리즘**:
- `sub_segments[]` 순회. `kind == 'earnings'`이면 `value × multiple`, `kind == 'asset'`이면 `value` 그대로 합산
- 시나리오별 분기: `value`나 `multiple`이 시나리오별로 다를 수 있음 (M3가 dict 형태로 넣은 경우)

**함수 시그니처**:
```python
def compute_method_b(segment, company_factors) -> SegmentResult:
    """bucket: 'operating_ev'. sub_segments 합산."""
```

**components**: `{sub_segment_breakdowns: [{index, kind, value, multiple?, contribution}]}` (index = sub_segments[] 배열 순서)

#### Method C — Excess Returns

**Bucket**: `'equity'`
**공식**: [dcf_methods §3 C](../reference/dcf_methods.md#c-excess-returns) — `Equity = BV_y0 + Σ (ROE_t − CoE) × BV_t / (1+CoE)^t + Terminal`

**알고리즘** (시나리오별):

인덱스 정의는 [dcf_methods §3 C](../reference/dcf_methods.md#c-excess-returns) 따름:
- `bv_t` = period t **시작 시점** BV
- `bv_1 = bv_y0` (initial)
- `roe_t` = period t의 ROE (`roe_1 = roe_start`, `roe_N = roe_terminal`, 선형 보간)
- terminal: `bv_(N+1)` (= `BV_T`)

1. **BV 시계열**: `bv_(t+1) = bv_t × (1 + (1 − dividend_payout) × roe_t)` for `t = 1..N` → `bv_2, bv_3, ..., bv_(N+1)` 산출
2. **Excess Returns**: `excess_t = (roe_t − coe) × bv_t` for `t = 1..N`
3. **PV of Excess**: `pv_excess = Σ excess_t / (1 + coe)^t`
4. **Terminal Excess**: `terminal_excess = (roe_terminal − coe) × bv_(N+1) / (coe − terminal_g)`, `pv_terminal = terminal_excess / (1 + coe)^N`
5. **Equity** = `bv_y0 + pv_excess + pv_terminal`

**함수 시그니처**:
```python
def compute_method_c(segment, company_factors) -> SegmentResult:
    """bucket: 'equity'. 자본 규제 사업부 (은행·보험)."""
```

**components**: `{bv_y0, pv_excess, pv_terminal, implied_p_b}` (정당화 P/B 교차검증)

#### Method D — NAV

**Bucket**: `'equity'`
**공식**: [dcf_methods §3 D](../reference/dcf_methods.md#d-nav) — `Equity = Σ asset_value × (1 − discount) − total_debt − preferred`

**알고리즘**:
- `total_asset = Σ assets[i].value × (1 − (assets[i].discount or 0))` (discount는 optional, None이면 0)
- `equity = total_asset − total_debt − preferred`

> **Default: scenario-invariant.** NAV는 자산 시장가치 기반이라 본질적으로 시나리오에 무관하게 같은 값. 모든 시나리오(bear/base/bull)에 동일 equity 적용.
>
> Scenario-variant이 필요한 case (Cap Rate 변동 등 드뭄)는 dcf-factors schema에서 `factors_D.assets`를 시나리오별 dict로 정의 시 분기 가능 (현재 schema 미정).

**함수 시그니처**:
```python
def compute_method_d(segment, company_factors) -> SegmentResult:
    """bucket: 'equity'. NAV — REIT·E&P·투자회사."""
```

**components**: `{total_asset_value, total_debt, preferred, asset_breakdown: [{kind, value, discount, contribution}]}`

#### Method E — Forward Multiple

**Bucket**: `metric_name`에 따라 — `'sales'`/`'ebitda'` → `'operating_ev'`, `'eps'` → `'equity'`
**공식**: [dcf_methods §3 E](../reference/dcf_methods.md#e-forward-multiple-보조용) — `사업부 가치 = metric_y_n × multiple / (1 + 할인율)^(N − 1)`

**알고리즘** (시나리오별):
- `future_value = metric_y_n × multiple`
- `present_value = future_value / (1 + discount_rate)^(years_to_normalize − 1)`

**함수 시그니처**:
```python
def compute_method_e(segment, company_factors) -> SegmentResult:
    """bucket: 'operating_ev' or 'equity' depending on metric_name."""
```

**components**: `{future_value, discount_rate, years_to_normalize}`

### 5.3 시나리오별 회사 종합

**공식**: [dcf_methods §4](../reference/dcf_methods.md#4-사업부별-적용--회사-종합):
```
회사 주주가치 = [Σ operating_ev bucket − Net Debt − Minority + Non-op] + [Σ equity bucket]
회사 목표가   = 회사 주주가치 / 희석 주식수
```

**알고리즘** (시나리오별 — 모든 사업부가 같은 시나리오 묶음):
1. `operating_ev_sum = Σ segment.scenarios[s].segment_value` for `bucket == 'operating_ev'`
2. `equity_sum = Σ segment.scenarios[s].segment_value` for `bucket == 'equity'`
3. `shareholder_value = (operating_ev_sum − net_debt − minority + non_op) + equity_sum`
4. `target_price = shareholder_value / diluted_shares_outstanding`

**함수 시그니처**:
```python
def aggregate_company(segment_results: list[SegmentResult], company_factors: CompanyFactors) -> CompanyResults:
    """시나리오별 (Bear/Base/Bull) 회사 종합 + target_price 산출."""
```

> **시나리오 합성 방지**: 코드가 시나리오별로 iteration하므로 자연스레 보장. Bear `operating_ev_sum`은 모든 사업부의 Bear segment_value 합. 다른 시나리오 섞임 X.

### 5.4 메인 진입점

```python
def compute_dcf(factors: DcfFactors) -> DcfResults:
    """
    Pipeline: validate → segment iteration → company aggregation
    """
    validate_factors(factors)
    segment_results = [compute_segment(seg, factors.company_factors) for seg in factors.segments]
    company_results = aggregate_company(segment_results, factors.company_factors)
    return DcfResults(
        ticker=factors.ticker,
        based_on_factors_id=factors.row_id,  # DB row id (FK 추적용)
        computed_at=now(),
        segments=segment_results,
        company_results=company_results,
    )
```

---

## 6. 연결 (Cross-references)

- 이전 모듈: [03_dcf_factors.md](./03_dcf_factors.md) — dcf_factors.json 입력
- 다음 모듈: [05_report.md](./05_report.md) — dcf_results.json 받아 narrative 작성
- 방법론·공식·제약: [reference/dcf_methods.md](../reference/dcf_methods.md)
- 입력 스키마: [packages/shared-types/schemas/dcf-factors.ts](../../../packages/shared-types/schemas/dcf-factors.ts)
- 출력 스키마: [packages/shared-types/schemas/dcf-results.ts](../../../packages/shared-types/schemas/dcf-results.ts)

---

## 7. 체크리스트 (Checklist)

**입력 검증:**
- [ ] zod schema 자동 검증
- [ ] 수학적 제약 (terminal_g < WACC/CoE, ≤ Rf, ≤ GDP) 위반 시 `ValueError`
- [ ] 모든 사업부에 Bear/Base/Bull 시나리오 채워짐

**Method별 계산:**
- [ ] Method A (FCF DCF) 구현 + bucket='operating_ev'
- [ ] Method B (SOTP) 구현 + bucket='operating_ev'
- [ ] Method C (Excess Returns) 구현 + bucket='equity'
- [ ] Method D (NAV) 구현 + bucket='equity'
- [ ] Method E (Forward Multiple) 구현 + bucket=metric_name 조건부
- [ ] 각 method `components`에 PV 분해 포함 (감사용)
- [ ] 각 method dcf_methods §3 공식과 일치

**회사 종합:**
- [ ] 시나리오별 단순 합산 (가중평균 X)
- [ ] `operating_ev_sum`: bucket='operating_ev' 사업부 합
- [ ] `equity_sum`: bucket='equity' 사업부 합
- [ ] `shareholder_value` = (operating_ev_sum − net_debt − minority + non_op) + equity_sum
- [ ] `target_price` = shareholder_value / diluted_shares_outstanding

**결정적·테스트:**
- [ ] 같은 입력 → 같은 출력 (난수·외부 호출 X)
- [ ] 단위 테스트: 5가지 method 각각 알려진 입력 → 알려진 출력 (사업부 1개 단일 method 케이스)
- [ ] 단위 테스트: 5 method 혼합 회사 종합 (SOTP 포함, bucket 합산 검증)
- [ ] 단위 테스트: 수학적 제약 위반 시 `ValueError` throw 확인
