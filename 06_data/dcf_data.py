# ══════════════════════════════════════════════════════════════
#  DCF 모델 데이터 — 종목별 시나리오 파라미터
#  수정 방법: 각 종목의 scenarios 안 숫자만 바꾸면 됨
# ══════════════════════════════════════════════════════════════
#
#  필드 설명:
#    segments      : 사업부문별 기준연도 매출 ($M)
#    shares        : 희석 주식수 (M주)
#    net_debt      : 순부채 ($M), 음수 = 순현금
#    tax_rate      : 법인세율
#    da_pct        : D&A / 매출 비율 (없으면 0)
#    capex_pct     : CapEx / 매출 비율 (없으면 0)
#    capex_mode    : 'rev' = 매출 대비 | 'nopat' = NOPAT 대비
#    scenarios     : bear / base / bull 각 파라미터
#      growth      : 부문별 연간 성장률 (5년 동일 적용)
#      op_margin   : 영업이익률
#      wacc        : 할인율
#      terminal_g  : 영구성장률

# 분석 활성 종목 — 여기에 없으면 대시보드에 표시 안 됨 (데이터는 보존)
ACTIVE_TICKERS = ["TSLA", "OXY", "KKR", "ORCL"]

DCF_MODELS = {

    "TSLA": {
        "name": "Tesla Inc",
        "segments": {
            "Automotive": 77100,
            "Energy":     10090,
            "Services":   10530,
        },
        "shares":     3180,
        "net_debt":  -29000,
        "tax_rate":   0.21,
        "da_pct":     0.05,
        "capex_pct":  0.08,
        "capex_mode": "rev",
        "nwc_pct":    0.02,
        "scenarios": {
            "bear": {
                "growth":                {"Automotive": 0.10, "Energy": 0.20, "Services": 0.15},
                "op_margin":              0.09,   # Gross 20% - OpEx 11%
                "margin_growth_per_year": 0.01,
                "wacc":                   0.11,
                "terminal_g":             0.02,
            },
            "base": {
                "growth":                {"Automotive": 0.15, "Energy": 0.35, "Services": 0.25},
                "op_margin":              0.16,   # Gross 25% - OpEx 9%
                "margin_growth_per_year": 0.01,
                "wacc":                   0.10,
                "terminal_g":             0.03,
            },
            "bull": {
                "growth":                {"Automotive": 0.20, "Energy": 0.50, "Services": 0.40},
                "op_margin":              0.27,   # Gross 35% - OpEx 8%
                "margin_growth_per_year": 0.01,
                "wacc":                   0.09,
                "terminal_g":             0.05,
            },
        },
    },

    "OXY": {
        "name": "Occidental Petroleum",
        "segments": {
            "Oil & Gas":  21500,
            "Chemicals":   5300,
            "Midstream":   1200,
        },
        "shares":    950,
        "net_debt":  28000,
        "tax_rate":  0.21,
        "da_pct":    0.12,
        "capex_pct": 0.14,
        "capex_mode":"rev",
        "nwc_pct":   0.01,
        "scenarios": {
            "bear": {
                "growth":    {"Oil & Gas": -0.05, "Chemicals": 0.00, "Midstream": 0.02},
                "op_margin": 0.45,   # Gross 55% - OpEx 10%
                "wacc":      0.11,
                "terminal_g":0.00,
            },
            "base": {
                "growth":    {"Oil & Gas": 0.02, "Chemicals": 0.03, "Midstream": 0.10},
                "op_margin": 0.54,   # Gross 62% - OpEx 8%
                "wacc":      0.085,
                "terminal_g":0.015,
            },
            "bull": {
                "growth":    {"Oil & Gas": 0.08, "Chemicals": 0.05, "Midstream": 0.25},
                "op_margin": 0.61,   # Gross 68% - OpEx 7%
                "wacc":      0.075,
                "terminal_g":0.025,
            },
        },
    },

    "KKR": {
        "name": "KKR & Co Inc",
        "segments": {
            "FRE":       3800,
            "Carry":     1500,
            "Insurance": 1150,
        },
        "shares":    910,
        "net_debt":    0,
        "tax_rate":  0.22,
        "da_pct":    0.00,
        "capex_pct": 0.00,
        "capex_mode":"rev",
        "scenarios": {
            "bear": {
                "growth":    {"FRE": 0.08, "Carry": 0.00, "Insurance": 0.05},
                "op_margin": 1.00,   # 이미 영업이익 기준 매출
                "wacc":      0.11,
                "terminal_g":0.03,
            },
            "base": {
                "growth":    {"FRE": 0.15, "Carry": 0.05, "Insurance": 0.10},
                "op_margin": 1.00,
                "wacc":      0.11,
                "terminal_g":0.03,
            },
            "bull": {
                "growth":    {"FRE": 0.22, "Carry": 0.15, "Insurance": 0.15},
                "op_margin": 1.00,
                "wacc":      0.11,
                "terminal_g":0.03,
            },
        },
    },

    "ADBE": {
        "name": "Adobe Inc",
        "segments": {
            "Digital Media": 17550,
            "Digital Exp":    5850,
            "Publishing":      400,
        },
        "shares":    448,
        "net_debt": -5200,
        "tax_rate":  0.18,
        "da_pct":    0.00,
        "capex_pct": 0.02,
        "capex_mode":"rev",
        "scenarios": {
            "bear": {
                "growth":    {"Digital Media": 0.09, "Digital Exp": 0.07, "Publishing": -0.02},
                "op_margin": 0.45,
                "wacc":      0.105,
                "terminal_g":0.025,
            },
            "base": {
                "growth":    {"Digital Media": 0.115, "Digital Exp": 0.10, "Publishing": 0.00},
                "op_margin": 0.465,
                "wacc":      0.095,
                "terminal_g":0.030,
            },
            "bull": {
                "growth":    {"Digital Media": 0.14, "Digital Exp": 0.12, "Publishing": 0.02},
                "op_margin": 0.48,
                "wacc":      0.085,
                "terminal_g":0.035,
            },
        },
    },

    "ORCL": {
        "name": "Oracle Corp",
        "segments": {
            "Cloud & License": 41500,
            "Cloud Other":      5000,
            "HW & Services":    5500,
        },
        "shares":    2901,   # 희석주식(2760) + ATM $20B 신주(141M) ≈ 2900.8
        "net_debt":  118000,
        "tax_rate":  0.19,
        "da_pct":    0.00,
        "da_fixed":  5500,   # D&A 고정 $5500M/년 (매출 성장과 무관)
        "capex_pct": 0.00,
        "capex_mode":"nopat",
        "capex_phase_switch_year": 2,   # 3년차(2028E)부터 매출×10% 전환
        "capex_phase2_pct":        0.10,
        "scenarios": {
            "bear": {
                "growth":    {"Cloud & License": 0.30, "Cloud Other": -0.05, "HW & Services": 0.00},
                "op_margin": 0.40,
                "wacc":      0.10,
                "terminal_g":0.03,
                "capex_ratio":0.80,
            },
            "base": {
                "growth":    {"Cloud & License": 0.35, "Cloud Other": -0.03, "HW & Services": 0.01},
                "op_margin": 0.44,
                "wacc":      0.09,
                "terminal_g":0.035,
                "capex_ratio":0.70,
            },
            "bull": {
                "growth":    {"Cloud & License": 0.40, "Cloud Other": -0.02, "HW & Services": 0.02},
                "op_margin": 0.45,
                "wacc":      0.08,
                "terminal_g":0.04,
                "capex_ratio":0.60,
            },
        },
    },

    "ROP": {
        "name": "Roper Technologies",
        "segments": {
            "App Software":  4200,
            "Network/Sys":   1900,
            "Tech Products": 1800,
        },
        "shares":    107,
        "net_debt":  8800,
        "tax_rate":  0.21,
        "da_pct":    0.12,
        "capex_pct": 0.01,
        "capex_mode":"rev",
        "scenarios": {
            "bear": {
                "growth":    {"App Software": 0.03, "Network/Sys": 0.02, "Tech Products": 0.03},
                "op_margin": 0.38,
                "wacc":      0.095,
                "terminal_g":0.02,
            },
            "base": {
                "growth":    {"App Software": 0.05, "Network/Sys": 0.04, "Tech Products": 0.06},
                "op_margin": 0.41,
                "wacc":      0.085,
                "terminal_g":0.03,
            },
            "bull": {
                "growth":    {"App Software": 0.10, "Network/Sys": 0.06, "Tech Products": 0.07},
                "op_margin": 0.43,
                "wacc":      0.075,
                "terminal_g":0.04,
            },
        },
    },
}
