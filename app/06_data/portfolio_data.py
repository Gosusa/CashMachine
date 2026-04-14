# ══════════════════════════════════════════════════════════════
#  포트폴리오 데이터 — 여기서만 수정하면 대시보드에 자동 반영
# ══════════════════════════════════════════════════════════════

# ── 보유 종목 ──────────────────────────────────────────────────
# 수정 방법: shares(주수), cost(평균매수가 $) 값만 바꾸면 됨
# 종목 추가: 아래 형식으로 한 줄 추가
# 종목 제거: 해당 줄 삭제 또는 앞에 # 붙이기

HOLDINGS = [
    {"ticker": "TSLA", "company": "Tesla Inc",             "shares": 200,  "cost": 202.76},
    {"ticker": "KKR",  "company": "KKR & Co Inc",          "shares": 460,  "cost": 93.08},
    {"ticker": "ORCL", "company": "Oracle Corp",           "shares": 197,  "cost": 147.95},
    {"ticker": "OXY",  "company": "Occidental Petroleum",  "shares": 10,   "cost": 59.97},
    {"ticker": "ADBE", "company": "Adobe Inc",             "shares": 60,   "cost": 294.53},
    {"ticker": "SN",   "company": "SharkNinja Inc",        "shares": 1,    "cost": 91.99},
    {"ticker": "SMR",  "company": "NuScale Power Corp",    "shares": 1600, "cost": 5.69},
    {"ticker": "WBTN", "company": "Webtoon Entertainment", "shares": 1754, "cost": 16.66},
    {"ticker": "DMRC", "company": "Digimarc Corp",         "shares": 876,  "cost": 6.16},
]

# ── 목표주가 (Bear / Base / Bull) ─────────────────────────────
# 수정 방법: bear/base/bull 숫자만 바꾸면 됨
# 종목 추가: "TICKER": {"bear": 0, "base": 0, "bull": 0} 형식으로 추가

TARGETS = {
    "ROP":  {"bear": 363, "base": 599, "bull": 1161},
    "KKR":  {"bear": 84,  "base": 109, "bull": 144},
    "ADBE": {"bear": 330, "base": 456, "bull": 662},
    "ORCL": {"bear": 131, "base": 248, "bull": 438},
}
