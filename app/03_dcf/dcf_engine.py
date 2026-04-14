"""
DCF 계산 엔진 — 엑셀 모델 동일 로직
- 5년 명시적 예측 (mid-year convention: 0.5, 1.5, 2.5, 3.5, 4.5)
- 터미널 밸류: 5년차 FCF 기준, period 4.5로 할인 (엑셀 동일)
"""


def run_dcf(model: dict, scenario: str) -> dict:
    """
    model   : dcf_data.DCF_MODELS의 개별 종목 dict
    scenario: 'bear' | 'base' | 'bull'
    return  : 계산 결과 dict
    """
    p        = model["scenarios"][scenario]
    segments = model["segments"]
    wacc     = p["wacc"]
    tg       = p["terminal_g"]
    op_m0    = p["op_margin"]                      # 1년차 영업이익률
    margin_g = p.get("margin_growth_per_year", 0)  # 연간 마진 상승폭 (TSLA 등)
    tax      = model["tax_rate"]
    da_pct   = model.get("da_pct", 0)
    da_fixed = model.get("da_fixed", None)  # 고정 D&A 금액 (ORCL 등, da_pct보다 우선)
    cx_pct   = model.get("capex_pct", 0)
    cx_mode  = model.get("capex_mode", "rev")
    nwc_pct  = model.get("nwc_pct", 0)   # NWC 증가분 / 매출 (현금 유출)
    shares   = model["shares"]
    net_debt = model["net_debt"]          # 양수 = 순부채, 음수 = 순현금

    # ── 5년 매출 예측 ──────────────────────────────────────────
    yearly_rev = []
    prev = dict(segments)
    for _ in range(5):
        cur = {seg: prev[seg] * (1 + p["growth"][seg]) for seg in segments}
        yearly_rev.append(cur)
        prev = cur

    # ── FCF 계산 ───────────────────────────────────────────────
    fcfs = []
    for i, rev in enumerate(yearly_rev):
        total = sum(rev.values())
        op_m  = op_m0 + margin_g * i       # 마진 연도별 상승
        nopat = total * op_m * (1 - tax)
        da    = da_fixed if da_fixed is not None else total * da_pct
        nwc   = total * nwc_pct

        # CapEx 계산 (모드별)
        if cx_mode == "nopat":
            cr = p.get("capex_ratio", 0)
            phase_yr  = model.get("capex_phase_switch_year")   # 전환 연도 (None = 없음)
            phase_pct = model.get("capex_phase2_pct", cx_pct)  # 전환 후 CapEx/매출
            if phase_yr and (i + 1) > phase_yr:
                capex = total * phase_pct
            else:
                capex = nopat * cr
        else:
            capex = total * cx_pct

        fcfs.append(nopat + da - capex - nwc)

    # ── PV 할인 (mid-year: 0.5, 1.5, 2.5, 3.5, 4.5) ──────────
    pv_fcfs = [fcf / (1 + wacc) ** (i + 0.5) for i, fcf in enumerate(fcfs)]

    # ── 터미널 밸류 — period 4.5로 할인 (엑셀 동일) ─────────────
    tv    = fcfs[-1] * (1 + tg) / (wacc - tg)
    pv_tv = tv / (1 + wacc) ** 4.5

    # ── 주가 산출 ──────────────────────────────────────────────
    ev           = sum(pv_fcfs) + pv_tv
    equity_value = ev - net_debt          # net_debt > 0 이면 차감
    target_price = equity_value / shares

    return {
        "yearly_rev":   yearly_rev,
        "fcfs":         fcfs,
        "pv_fcfs":      pv_fcfs,
        "pv_tv":        pv_tv,
        "ev":           ev,
        "equity_value": equity_value,
        "target_price": round(target_price, 1),
        "wacc":         wacc,
        "terminal_g":   tg,
    }


def run_all_scenarios(model: dict) -> dict:
    return {s: run_dcf(model, s) for s in ("bear", "base", "bull")}


def weighted_price(results: dict, weights: dict = None) -> float:
    if weights is None:
        weights = {"bear": 0.25, "base": 0.50, "bull": 0.25}
    return round(sum(results[s]["target_price"] * w for s, w in weights.items()), 1)
