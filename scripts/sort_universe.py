"""
UNIVERSE.md 종목을 시가총액 내림차순으로 재정렬.
이미 분석 완료된 종목(Y)도 순서만 바뀌고 상태는 보존된다.

사용법:
  python scripts/sort_universe.py
"""

import re
import sys
import yfinance as yf

UNIVERSE = "c:/Stocks/CashMachine/stocks/02_tickers/UNIVERSE.md"

# ── 1. UNIVERSE.md 파싱 ──
with open(UNIVERSE, "r", encoding="utf-8") as f:
    lines = f.readlines()

header_lines = []  # 헤더/메타 (테이블 위)
separator = ""     # 구분선 (| ------ | ... |)
data_rows = []     # 데이터 행

in_table = False
for line in lines:
    if re.match(r"^\|\s*Ticker", line):
        header_lines.append(line)
        in_table = True
    elif in_table and re.match(r"^\|\s*-", line):
        separator = line
    elif in_table and re.match(r"^\|", line):
        # 티커 추출
        parts = line.split("|")
        ticker = parts[1].strip() if len(parts) > 1 else ""
        if ticker:
            data_rows.append({"ticker": ticker, "line": line})
    else:
        if not in_table:
            header_lines.append(line)

tickers = [r["ticker"] for r in data_rows]
print(f"종목 수: {len(tickers)}개")

# ── 2. 시총 조회 (배치) ──
print("시총 데이터 조회 중...")

# yfinance는 한번에 여러 종목 조회 가능
batch_size = 100
market_caps = {}

for i in range(0, len(tickers), batch_size):
    batch = tickers[i:i + batch_size]
    batch_str = " ".join(batch)
    print(f"  조회 중: {i + 1}~{min(i + batch_size, len(tickers))} / {len(tickers)}")

    try:
        data = yf.Tickers(batch_str)
        for ticker in batch:
            try:
                info = data.tickers[ticker].info
                cap = info.get("marketCap", 0) or 0
                market_caps[ticker] = cap
            except Exception:
                market_caps[ticker] = 0
    except Exception as e:
        print(f"  배치 조회 실패: {e}", file=sys.stderr)
        for ticker in batch:
            market_caps[ticker] = 0

# 조회 실패 종목 확인
failed = [t for t, cap in market_caps.items() if cap == 0]
if failed:
    print(f"시총 조회 실패 ({len(failed)}개, 맨 뒤로 배치): {', '.join(failed[:10])}{'...' if len(failed) > 10 else ''}")

# ── 3. 시총 내림차순 정렬 ──
row_map = {r["ticker"]: r["line"] for r in data_rows}
sorted_tickers = sorted(tickers, key=lambda t: market_caps.get(t, 0), reverse=True)

# ── 4. 정렬된 UNIVERSE.md 작성 ──
with open(UNIVERSE, "w", encoding="utf-8") as f:
    for line in header_lines:
        f.write(line)
    f.write(separator)
    for ticker in sorted_tickers:
        f.write(row_map[ticker])

print("정렬 완료!")

# 상위 10개 출력
print("\n시총 Top 10:")
for i, t in enumerate(sorted_tickers[:10], 1):
    cap = market_caps.get(t, 0)
    cap_str = f"${cap / 1e12:.2f}T" if cap >= 1e12 else f"${cap / 1e9:.1f}B"
    print(f"  {i:2d}. {t:<6} {cap_str}")
