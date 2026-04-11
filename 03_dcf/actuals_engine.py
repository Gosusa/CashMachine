"""
실적 비교 엔진
- yfinance에서 최신 실적 자동 수집
- 모델 가정 vs 실제 비교
- 실적 기반 DCF 재산출
"""

import yfinance as yf
import warnings
warnings.filterwarnings("ignore")


# ── 실적 수집 ──────────────────────────────────────────────────────────────
def get_actuals(ticker: str) -> dict | None:
    """
    yfinance에서 최신 연간 실적 가져오기
    반환: {
        fiscal_year    : 최근 회계연도 (str)
        revenue        : 매출 $M
        revenue_prev   : 전년 매출 $M
        revenue_growth : YoY 성장률
        op_income      : 연간 영업이익 $M
        op_margin      : 영업이익률
        op_margin_prev : 전년 영업이익률
        ttm_revenue    : TTM 매출 $M (분기 합산)
        ttm_op_income  : TTM 영업이익 $M
        ttm_op_margin  : TTM 영업이익률
        eps            : Trailing EPS ($)
    }
    """
    try:
        t    = yf.Ticker(ticker)
        fin  = t.financials           # 연간 손익계산서 (컬럼 = 회계연도)
        qfin = t.quarterly_financials # 분기

        if fin is None or fin.empty:
            return None

        cols = fin.columns.tolist()   # 최신 순 정렬
        if len(cols) < 2:
            return None

        def safe(df, key, col):
            try:
                v = df.loc[key, col]
                return float(v) / 1e6 if v is not None else None  # → $M
            except Exception:
                return None

        rev      = safe(fin, "Total Revenue",    cols[0])
        rev_prev = safe(fin, "Total Revenue",    cols[1])
        op_inc   = safe(fin, "Operating Income", cols[0])
        op_prev  = safe(fin, "Operating Income", cols[1])

        rev_growth = (rev / rev_prev - 1) if (rev and rev_prev) else None
        op_margin  = (op_inc / rev)       if (rev and op_inc)   else None
        op_m_prev  = (op_prev / rev_prev) if (rev_prev and op_prev) else None

        # TTM (최근 4분기 합산)
        ttm_rev = ttm_op = None
        if qfin is not None and not qfin.empty and len(qfin.columns) >= 4:
            qcols = qfin.columns[:4]
            try:
                ttm_rev = sum(float(qfin.loc["Total Revenue",    c]) for c in qcols) / 1e6
                ttm_op  = sum(float(qfin.loc["Operating Income", c]) for c in qcols) / 1e6
            except Exception:
                pass
        ttm_op_margin = (ttm_op / ttm_rev) if (ttm_rev and ttm_op) else op_margin

        # EPS (Trailing)
        eps = None
        try:
            info = t.info
            eps  = info.get("trailingEps", None)
            if eps is None:
                # Net Income / 발행주식수로 직접 계산
                net_inc = safe(fin, "Net Income", cols[0])
                shares_out = info.get("sharesOutstanding", None)
                if net_inc and shares_out:
                    eps = round(net_inc * 1e6 / shares_out, 2)  # $M → $
        except Exception:
            pass

        return {
            "fiscal_year":    str(cols[0])[:10],
            "revenue":        round(rev, 0)           if rev              else None,
            "revenue_prev":   round(rev_prev, 0)      if rev_prev         else None,
            "revenue_growth": round(rev_growth, 4)    if rev_growth is not None else None,
            "op_income":      round(op_inc, 0)        if op_inc           else None,
            "op_margin":      round(op_margin, 4)     if op_margin  is not None else None,
            "op_margin_prev": round(op_m_prev, 4)     if op_m_prev  is not None else None,
            "ttm_revenue":    round(ttm_rev, 0)       if ttm_rev          else None,
            "ttm_op_income":  round(ttm_op, 0)        if ttm_op           else None,
            "ttm_op_margin":  round(ttm_op_margin, 4) if ttm_op_margin is not None else None,
            "eps":            round(eps, 2)            if eps is not None  else None,
        }
    except Exception:
        return None


# ── 모델 vs 실적 비교 ──────────────────────────────────────────────────────
def _status(actual, model, threshold_warn=0.10, threshold_bad=0.20) -> str:
    """차이가 threshold 이내면 OK, 이상이면 주의, 2배 초과면 불일치"""
    if actual is None or model is None:
        return "—"
    diff = abs(actual - model)
    if diff <= threshold_warn:
        return "✅"
    elif diff <= threshold_bad:
        return "⚠️"
    else:
        return "❌"


def compare_model_vs_actual(model: dict, actuals: dict, scenario: str = "base") -> list[dict]:
    """
    모델 가정과 실제 실적 비교 테이블 반환
    각 항목: {항목, 모델 기준, 실제 (최신), 차이, 상태}
    """
    if not actuals:
        return []

    p              = model["scenarios"][scenario]
    model_base_rev = sum(model["segments"].values())
    avg_growth     = sum(p["growth"].values()) / len(p["growth"])
    tax            = model.get("tax_rate", 0.21)
    shares         = model.get("shares", 1)

    # 모델 함의 영업이익 / EPS (기준연도)
    model_op_income = model_base_rev * p["op_margin"]           # $M
    model_eps       = model_op_income * (1 - tax) / shares      # $/주 (shares 단위: M주)

    actual_rev      = actuals.get("ttm_revenue")    or actuals.get("revenue")
    actual_growth   = actuals.get("revenue_growth")
    actual_op_inc   = actuals.get("ttm_op_income")  or actuals.get("op_income")
    actual_margin   = actuals.get("ttm_op_margin")  or actuals.get("op_margin")
    actual_eps      = actuals.get("eps")

    # 모델이 '매출 = 이익' 구조인지 (KKR 등 op_margin=1.00)
    earnings_as_rev = (p["op_margin"] >= 1.0)

    rows = []

    # 1. 매출
    if actual_rev and model_base_rev:
        diff_pct = (actual_rev - model_base_rev) / model_base_rev
        label    = "매출 기준 이익 ($M)" if earnings_as_rev else "매출 ($M)"
        note     = " ※모델은 경영이익 기준" if earnings_as_rev else ""
        rows.append({
            "항목":       label + note,
            "모델 기준":  f"${model_base_rev:,.0f}M",
            "실제 (최신)": f"${actual_rev:,.0f}M",
            "차이":       f"{diff_pct:+.1%}",
            "상태":       "—" if earnings_as_rev else _status(0, diff_pct, 0.10, 0.20),
        })

    # 2. 매출 성장률
    if actual_growth is not None:
        rows.append({
            "항목":       "매출 성장률 (YoY)",
            "모델 기준":  f"{avg_growth:+.1%}",
            "실제 (최신)": f"{actual_growth:+.1%}",
            "차이":       f"{actual_growth - avg_growth:+.1%}",
            "상태":       _status(actual_growth, avg_growth, 0.05, 0.10),
        })

    # 3. 영업이익 ($M)
    if actual_op_inc is not None:
        diff_pct = (actual_op_inc - model_op_income) / model_op_income if model_op_income else None
        rows.append({
            "항목":       "영업이익 ($M)",
            "모델 기준":  f"${model_op_income:,.0f}M",
            "실제 (최신)": f"${actual_op_inc:,.0f}M",
            "차이":       f"{diff_pct:+.1%}" if diff_pct is not None else "—",
            "상태":       _status(0, diff_pct, 0.15, 0.30) if diff_pct is not None else "—",
        })

    # 4. 영업이익률
    if actual_margin is not None:
        if earnings_as_rev:
            # op_margin=100% 모델은 GAAP 마진과 비교 불가 → 참고용으로만 표시
            rows.append({
                "항목":       "영업이익률 ※GAAP 참고값",
                "모델 기준":  "N/A (이익=매출 구조)",
                "실제 (최신)": f"{actual_margin:.1%}",
                "차이":       "—",
                "상태":       "—",
            })
        else:
            rows.append({
                "항목":       "영업이익률",
                "모델 기준":  f"{p['op_margin']:.1%}",
                "실제 (최신)": f"{actual_margin:.1%}",
                "차이":       f"{actual_margin - p['op_margin']:+.1%}",
                "상태":       _status(actual_margin, p["op_margin"], 0.03, 0.07),
            })

    # 5. EPS
    if actual_eps is not None or model_eps:
        rows.append({
            "항목":       "EPS ($)",
            "모델 기준":  f"${model_eps:.2f}" if model_eps else "—",
            "실제 (최신)": f"${actual_eps:.2f}" if actual_eps is not None else "—",
            "차이":       f"{actual_eps - model_eps:+.2f}" if (actual_eps is not None and model_eps) else "—",
            "상태":       _status(actual_eps, model_eps, model_eps * 0.15, model_eps * 0.30)
                          if (actual_eps is not None and model_eps) else "—",
        })

    return rows


# ── 실적 기반 DCF 재산출 ───────────────────────────────────────────────────
def build_model_with_actuals(model: dict, actuals: dict) -> dict:
    """
    실제 매출을 기준연도로 업데이트한 새 model dict 반환
    세그먼트 비중은 유지하고 총 매출만 실적으로 대체
    """
    actual_rev = actuals.get("ttm_revenue") or actuals.get("revenue")
    if not actual_rev:
        return model

    import copy
    new_model = copy.deepcopy(model)

    # 기존 세그먼트 비중 유지하며 총 매출을 실적으로 스케일
    orig_total = sum(model["segments"].values())
    scale = actual_rev / orig_total
    new_model["segments"] = {
        seg: round(val * scale, 0)
        for seg, val in model["segments"].items()
    }

    # KKR처럼 op_margin=1.0인 모델은 마진 업데이트 안 함 (의미 없음)
    p = model["scenarios"]["base"]
    if p["op_margin"] < 1.0:
        actual_margin = actuals.get("ttm_op_margin") or actuals.get("op_margin")
        if actual_margin:
            new_model["scenarios"]["base"]["op_margin"] = actual_margin

    return new_model
