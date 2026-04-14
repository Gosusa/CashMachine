import streamlit as st
import pandas as pd
import yfinance as yf
import plotly.express as px
import plotly.graph_objects as go
import sys, os

st.set_page_config(page_title="CashMachine Portfolio", layout="wide")

sys.path.append(os.path.join(os.path.dirname(__file__), '..', '06_data'))
sys.path.append(os.path.join(os.path.dirname(__file__), '..', '03_dcf'))
from portfolio_data import HOLDINGS, TARGETS
from dcf_data import DCF_MODELS, ACTIVE_TICKERS

ACTIVE_MODELS = {t: DCF_MODELS[t] for t in ACTIVE_TICKERS if t in DCF_MODELS}
from dcf_engine import run_all_scenarios, weighted_price
from actuals_engine import get_actuals, compare_model_vs_actual, build_model_with_actuals

# ── 실시간 주가 조회 ──────────────────────────────────────────────────────
@st.cache_data(ttl=300)
def get_prices(tickers: list[str]) -> dict:
    prices = {}
    for ticker in tickers:
        try:
            prices[ticker] = round(yf.Ticker(ticker).fast_info.last_price, 2)
        except Exception:
            prices[ticker] = None
    return prices

@st.cache_data(ttl=300)
def get_usdkrw() -> float:
    try:
        return round(yf.Ticker("USDKRW=X").fast_info.last_price, 0)
    except Exception:
        return 1485.0

# ── 공통 데이터 ────────────────────────────────────────────────────────────
all_tickers = list({h["ticker"] for h in HOLDINGS} | set(ACTIVE_MODELS.keys()))
prices  = get_prices(all_tickers)
usdkrw  = get_usdkrw()

# ══════════════════════════════════════════════════════════════════════════
#  타이틀 + 탭
# ══════════════════════════════════════════════════════════════════════════
st.title("CashMachine")

header_l, header_r = st.columns([3, 1])
with header_l:
    st.caption(f"USD/KRW  {usdkrw:,.0f}  |  가격은 5분 캐시")
with header_r:
    use_krw = st.toggle("🇰🇷 원화로 보기", value=True)

tab1, tab2 = st.tabs(["📊 포트폴리오", "📈 DCF 분석"])

# ══════════════════════════════════════════════════════════════════════════
#  TAB 1 : 포트폴리오
# ══════════════════════════════════════════════════════════════════════════
with tab1:
    # 통화 포맷
    if use_krw:
        fmt   = lambda v: f"₩{v*usdkrw:,.0f}"
        fmt_r = lambda v: f"₩{v*usdkrw:+,.0f}"
    else:
        fmt   = lambda v: f"${v:,.0f}"
        fmt_r = lambda v: f"${v:+,.0f}"

    # 포트폴리오 계산
    rows = []
    for h in HOLDINGS:
        ticker   = h["ticker"]
        price    = prices.get(ticker)
        cost     = h["cost"]
        shares   = h["shares"]
        cost_ttl = cost * shares
        mkt_ttl  = price * shares if price else None
        ret      = mkt_ttl - cost_ttl if mkt_ttl else None
        ret_pct  = ret / cost_ttl * 100 if ret is not None else None
        rows.append({
            "Ticker": ticker, "Company": h["company"], "Shares": shares,
            "Cost ($)": cost, "Price ($)": price,
            "Cost Total": cost_ttl, "Mkt Value": mkt_ttl,
            "Return ($)": ret, "Return (%)": ret_pct,
        })

    df    = pd.DataFrame(rows)
    valid = df.dropna(subset=["Mkt Value"])
    total_cost    = valid["Cost Total"].sum()
    total_mkt     = valid["Mkt Value"].sum()
    total_ret     = total_mkt - total_cost
    total_ret_pct = total_ret / total_cost * 100

    # 요약 카드
    c1, c2, c3, c4 = st.columns(4)
    c1.metric("총 투자금", fmt(total_cost))
    c2.metric("평가금액",  fmt(total_mkt))
    c3.metric("평가손익",  fmt_r(total_ret))
    c4.metric("수익률",    f"{total_ret_pct:+.2f}%")
    st.divider()

    # 보유 종목 테이블
    st.subheader("보유 종목")
    display = df.copy()
    if use_krw:
        display["Cost ($)"]   = display["Cost ($)"].apply(lambda x: f"₩{x*usdkrw:,.0f}")
        display["Price ($)"]  = display["Price ($)"].apply(lambda x: f"₩{x*usdkrw:,.0f}" if x else "N/A")
        display["Cost Total"] = display["Cost Total"].apply(lambda x: f"₩{x*usdkrw:,.0f}")
        display["Mkt Value"]  = display["Mkt Value"].apply(lambda x: f"₩{x*usdkrw:,.0f}" if x else "N/A")
        display["Return ($)"] = display["Return ($)"].apply(lambda x: f"₩{x*usdkrw:+,.0f}" if x else "N/A")
        display = display.rename(columns={"Cost ($)":"매수가","Price ($)":"현재가","Cost Total":"투자금","Mkt Value":"평가금액","Return ($)":"평가손익"})
    else:
        display["Cost ($)"]   = display["Cost ($)"].map("${:,.2f}".format)
        display["Price ($)"]  = display["Price ($)"].apply(lambda x: f"${x:,.2f}" if x else "N/A")
        display["Cost Total"] = display["Cost Total"].map("${:,.0f}".format)
        display["Mkt Value"]  = display["Mkt Value"].apply(lambda x: f"${x:,.0f}" if x else "N/A")
        display["Return ($)"] = display["Return ($)"].apply(lambda x: f"${x:+,.0f}" if x else "N/A")
    display["Return (%)"] = display["Return (%)"].apply(lambda x: f"{x:+.1f}%" if x else "N/A")
    st.dataframe(display, use_container_width=True, hide_index=True)
    st.divider()

    # 차트
    col_l, col_r = st.columns(2)
    with col_l:
        st.subheader("포트폴리오 비중")
        fig_pie = px.pie(valid, values="Mkt Value", names="Ticker", hole=0.4,
                         color_discrete_sequence=px.colors.qualitative.Set2)
        fig_pie.update_traces(textposition="inside", textinfo="percent+label")
        fig_pie.update_layout(showlegend=False, margin=dict(t=20,b=20))
        st.plotly_chart(fig_pie, use_container_width=True)

    with col_r:
        st.subheader("종목별 수익률 (%)")
        ret_df = valid.sort_values("Return (%)")
        colors = ["#ef4444" if r < 0 else "#22c55e" for r in ret_df["Return (%)"]]
        fig_bar = go.Figure(go.Bar(
            x=ret_df["Return (%)"].round(1), y=ret_df["Ticker"],
            orientation="h", marker_color=colors,
            text=ret_df["Return (%)"].apply(lambda x: f"{x:+.1f}%"),
            textposition="outside",
        ))
        fig_bar.update_layout(xaxis_title="Return (%)", margin=dict(t=20,b=20),
                               yaxis=dict(tickfont=dict(size=13)))
        st.plotly_chart(fig_bar, use_container_width=True)

    st.divider()

    # 목표주가 vs 현재가
    st.subheader("목표주가 vs 현재가")
    target_rows = [{"Ticker": t, "현재가": prices.get(t),
                    "Bear": v["bear"], "Base": v["base"], "Bull": v["bull"]}
                   for t, v in TARGETS.items()]
    tdf = pd.DataFrame(target_rows).dropna(subset=["현재가"])
    fig_t = go.Figure()
    for _, row in tdf.iterrows():
        tk = row["Ticker"]
        fig_t.add_trace(go.Scatter(
            x=[tk]*4, y=[row["Bear"], row["Base"], row["Bull"], row["현재가"]],
            mode="markers",
            marker=dict(size=[14,14,14,18],
                        color=["#f97316","#3b82f6","#22c55e","#ffffff"],
                        symbol=["circle","circle","circle","diamond"],
                        line=dict(width=2, color="#94a3b8")),
            showlegend=False,
        ))
        fig_t.add_shape(type="line", x0=tk, x1=tk,
                        y0=row["Bear"], y1=row["Bull"],
                        line=dict(color="#475569", width=1, dash="dot"))
    for label, color in [("Bear","#f97316"),("Base","#3b82f6"),("Bull","#22c55e"),("현재가","#ffffff")]:
        fig_t.add_trace(go.Scatter(x=[None], y=[None], mode="markers",
                                   marker=dict(size=10, color=color,
                                               line=dict(width=2, color="#94a3b8")),
                                   name=label))
    fig_t.update_layout(xaxis_title="Ticker", yaxis_title="Price ($)",
                        margin=dict(t=20,b=20),
                        legend=dict(orientation="h", yanchor="bottom", y=1.02),
                        plot_bgcolor="#0f172a", paper_bgcolor="#0f172a", font_color="#e2e8f0")
    st.plotly_chart(fig_t, use_container_width=True)


# ══════════════════════════════════════════════════════════════════════════
#  TAB 2 : DCF 분석
# ══════════════════════════════════════════════════════════════════════════
with tab2:
    st.subheader("DCF 적정주가 분석")

    # 종목 선택
    ticker_sel = st.selectbox("종목 선택", list(ACTIVE_MODELS.keys()),
                               format_func=lambda t: f"{t}  —  {ACTIVE_MODELS[t]['name']}")
    model = ACTIVE_MODELS[ticker_sel]
    results = run_all_scenarios(model)

    # 확률 가중치 슬라이더
    st.markdown("**시나리오 확률 가중치**")
    w_col1, w_col2, w_col3 = st.columns(3)
    w_bear = w_col1.slider("🔴 Bear", 0, 100, 25, 5, key="wb") / 100
    w_base = w_col2.slider("🔵 Base", 0, 100, 50, 5, key="wbs") / 100
    w_bull = w_col3.slider("🟢 Bull", 0, 100, 25, 5, key="wbu") / 100
    total_w = w_bear + w_base + w_bull

    current_price = prices.get(ticker_sel)

    # 적정주가 요약 카드
    st.divider()
    mc1, mc2, mc3, mc4 = st.columns(4)
    mc1.metric("🔴 Bear", f"${results['bear']['target_price']:,.0f}")
    mc2.metric("🔵 Base", f"${results['base']['target_price']:,.0f}")
    mc3.metric("🟢 Bull", f"${results['bull']['target_price']:,.0f}")

    if total_w > 0:
        w_price = weighted_price(results, {"bear": w_bear/total_w, "base": w_base/total_w, "bull": w_bull/total_w})
        delta = f"{(w_price/current_price - 1)*100:+.1f}% vs 현재가" if current_price else ""
        mc4.metric("⚖️ 가중 적정주가", f"${w_price:,.0f}", delta)
    st.divider()

    # 시나리오별 상세 비교 테이블
    st.subheader("시나리오별 주요 지표")
    scenario_labels = {"bear": "🔴 Bear", "base": "🔵 Base", "bull": "🟢 Bull"}
    p = model["scenarios"]
    summary_rows = []
    for s, label in scenario_labels.items():
        r = results[s]
        summary_rows.append({
            "시나리오":     label,
            "WACC":         f"{r['wacc']*100:.1f}%",
            "터미널 성장률": f"{r['terminal_g']*100:.1f}%",
            "EV ($B)":      f"${r['ev']/1000:,.1f}B",
            "PV 터미널 ($B)":f"${r['pv_tv']/1000:,.1f}B",
            "적정주가":      f"${r['target_price']:,.0f}",
            "현재가 대비":   f"{(r['target_price']/current_price - 1)*100:+.1f}%" if current_price else "N/A",
        })
    st.dataframe(pd.DataFrame(summary_rows), use_container_width=True, hide_index=True)
    st.divider()

    # FCF 추이 차트
    st.subheader("FCF 추이 (5년 예측)")
    years = [2025, 2026, 2027, 2028, 2029]
    fig_fcf = go.Figure()
    colors_s = {"bear": "#f97316", "base": "#3b82f6", "bull": "#22c55e"}
    for s, label in scenario_labels.items():
        fig_fcf.add_trace(go.Scatter(
            x=years,
            y=[f/1000 for f in results[s]["fcfs"]],
            mode="lines+markers",
            name=label,
            line=dict(color=colors_s[s], width=2),
            marker=dict(size=7),
        ))
    fig_fcf.update_layout(yaxis_title="FCF ($B)", xaxis_title="Year",
                           margin=dict(t=20,b=20), legend=dict(orientation="h"))
    st.plotly_chart(fig_fcf, use_container_width=True)

    # ── 실적 vs 모델 비교 ────────────────────────────────────────────────
    st.divider()
    st.subheader("최신 실적 vs 모델 가정")

    @st.cache_data(ttl=3600)
    def fetch_actuals(ticker):
        return get_actuals(ticker)

    with st.spinner("최신 실적 데이터 불러오는 중..."):
        actuals = fetch_actuals(ticker_sel)

    if actuals:
        # 실적 요약 카드
        ac1, ac2, ac3, ac4 = st.columns(4)
        ac1.metric("회계연도",    actuals["fiscal_year"])
        ac2.metric("실제 매출",   f"${actuals['revenue']:,.0f}M" if actuals.get("revenue") else "N/A")
        ac3.metric("TTM 매출",    f"${actuals['ttm_revenue']:,.0f}M" if actuals.get("ttm_revenue") else "N/A")
        ac4.metric("TTM 영업이익률", f"{actuals['ttm_op_margin']:.1%}" if actuals.get("ttm_op_margin") else "N/A")

        st.markdown("")
        # 모델 가정 vs 실제 비교 테이블
        comparison = compare_model_vs_actual(model, actuals, scenario="base")
        if comparison:
            st.dataframe(pd.DataFrame(comparison), use_container_width=True, hide_index=True)

        # 실적 기반 DCF 재산출
        st.divider()
        st.subheader("실적 반영 DCF 재산출")
        st.caption("최신 실적 매출/마진을 기준연도로 업데이트한 DCF")

        updated_model   = build_model_with_actuals(model, actuals)
        updated_results = run_all_scenarios(updated_model)
        w_updated       = weighted_price(updated_results)

        u1, u2, u3, u4 = st.columns(4)
        u1.metric("🔴 Bear (실적 반영)", f"${updated_results['bear']['target_price']:,.0f}",
                  f"{updated_results['bear']['target_price'] - results['bear']['target_price']:+.0f} vs 모델")
        u2.metric("🔵 Base (실적 반영)", f"${updated_results['base']['target_price']:,.0f}",
                  f"{updated_results['base']['target_price'] - results['base']['target_price']:+.0f} vs 모델")
        u3.metric("🟢 Bull (실적 반영)", f"${updated_results['bull']['target_price']:,.0f}",
                  f"{updated_results['bull']['target_price'] - results['bull']['target_price']:+.0f} vs 모델")
        u4.metric("⚖️ 가중평균 (실적 반영)", f"${w_updated:,.0f}",
                  f"{w_updated - weighted_price(results):+.0f} vs 모델")

        # 모델 vs 실적반영 FCF 비교
        fig_comp = go.Figure()
        years = [2025, 2026, 2027, 2028, 2029]
        fig_comp.add_trace(go.Scatter(
            x=years, y=[f/1000 for f in results["base"]["fcfs"]],
            name="Base (원본 모델)", mode="lines+markers",
            line=dict(color="#3b82f6", width=2, dash="dot"), marker=dict(size=6),
        ))
        fig_comp.add_trace(go.Scatter(
            x=years, y=[f/1000 for f in updated_results["base"]["fcfs"]],
            name="Base (실적 반영)", mode="lines+markers",
            line=dict(color="#22c55e", width=2), marker=dict(size=6),
        ))
        fig_comp.update_layout(
            title="FCF 비교: 원본 모델 vs 실적 반영",
            yaxis_title="FCF ($B)", xaxis_title="Year",
            margin=dict(t=40, b=20), legend=dict(orientation="h"),
        )
        st.plotly_chart(fig_comp, use_container_width=True)

    else:
        st.warning(f"{ticker_sel} 실적 데이터를 가져올 수 없습니다.")

    # ── 전 종목 요약 ─────────────────────────────────────────────────────
    st.divider()
    st.subheader("전 종목 DCF 적정주가 요약")
    all_rows = []
    for tk, m in ACTIVE_MODELS.items():
        r  = run_all_scenarios(m)
        cp = prices.get(tk)
        wp = weighted_price(r)
        all_rows.append({
            "Ticker":        tk,
            "현재가":         f"${cp:,.0f}" if cp else "N/A",
            "Bear":          f"${r['bear']['target_price']:,.0f}",
            "Base":          f"${r['base']['target_price']:,.0f}",
            "Bull":          f"${r['bull']['target_price']:,.0f}",
            "가중평균":        f"${wp:,.0f}",
            "업사이드(Base)": f"{(r['base']['target_price']/cp - 1)*100:+.1f}%" if cp else "N/A",
        })
    st.dataframe(pd.DataFrame(all_rows), use_container_width=True, hide_index=True)
