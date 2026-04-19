/**
 * Yahoo Finance에서 현재가(전일 종가)를 가져오는 Route Handler.
 * GET /api/price/AAPL → { price: 198.5, change: -1.2, changePercent: -0.6, marketState: "CLOSED" }
 */

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ ticker: string }> }
) {
  const { ticker } = await params;
  const symbol = ticker.toUpperCase();

  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=1d&interval=1d`;
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 300 }, // 5분 캐시
    });

    if (!res.ok) {
      return Response.json({ error: "Yahoo Finance 요청 실패" }, { status: 502 });
    }

    const data = await res.json();
    const meta = data?.chart?.result?.[0]?.meta;

    if (!meta) {
      return Response.json({ error: "데이터 없음" }, { status: 404 });
    }

    const price = meta.regularMarketPrice;
    const prevClose = meta.chartPreviousClose ?? meta.previousClose;
    const change = price - prevClose;
    const changePercent = prevClose ? (change / prevClose) * 100 : 0;

    return Response.json({
      price: Math.round(price * 100) / 100,
      change: Math.round(change * 100) / 100,
      changePercent: Math.round(changePercent * 100) / 100,
      marketState: meta.currentTradingPeriod?.regular ? "REGULAR" : "CLOSED",
      currency: meta.currency ?? "USD",
    });
  } catch {
    return Response.json({ error: "가격 조회 실패" }, { status: 500 });
  }
}
