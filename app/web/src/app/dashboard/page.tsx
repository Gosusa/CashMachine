"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

type StockData = {
  ticker: string;
  name: string;
  sector: string;
  current_price: number;
  bull_price: number;
  base_price: number;
  bear_price: number;
  thesis_summary: string;
};

type Portfolio = {
  id: string;
  ticker: string;
  shares: number;
  avg_buy_price: number;
  stock_data: StockData;
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedTicker, setSelectedTicker] = useState("");
  const [shares, setShares] = useState("");
  const [avgPrice, setAvgPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) loadPortfolio(data.user.id);
    });
    loadStocks();
  }, []);

  async function loadStocks() {
    const { data } = await supabase.from("stock_data").select("*");
    if (data) setStocks(data);
  }

  async function loadPortfolio(userId: string) {
    const { data } = await supabase
      .from("portfolios")
      .select("*, stock_data(*)")
      .eq("user_id", userId);
    if (data) setPortfolio(data);
    setLoading(false);
  }

  async function addStock() {
    if (!user || !selectedTicker || !shares) return;

    const { error } = await supabase.from("portfolios").insert({
      user_id: user.id,
      ticker: selectedTicker,
      shares: Number(shares),
      avg_buy_price: Number(avgPrice) || null,
    });

    if (error) {
      alert("추가 실패: " + error.message);
      return;
    }

    setShowAddModal(false);
    setSelectedTicker("");
    setShares("");
    setAvgPrice("");
    loadPortfolio(user.id);
  }

  async function removeStock(id: string) {
    if (!user) return;
    await supabase.from("portfolios").delete().eq("id", id);
    loadPortfolio(user.id);
  }

  // 포트폴리오 전체 평가 계산
  const totalCurrent = portfolio.reduce(
    (sum, p) => sum + p.stock_data.current_price * p.shares,
    0
  );
  const totalBull = portfolio.reduce(
    (sum, p) => sum + p.stock_data.bull_price * p.shares,
    0
  );
  const totalBase = portfolio.reduce(
    (sum, p) => sum + p.stock_data.base_price * p.shares,
    0
  );
  const totalBear = portfolio.reduce(
    (sum, p) => sum + p.stock_data.bear_price * p.shares,
    0
  );
  const totalCost = portfolio.reduce(
    (sum, p) => sum + (p.avg_buy_price || p.stock_data.current_price) * p.shares,
    0
  );

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
        <p className="text-zinc-500">로그인이 필요합니다.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
        <p className="text-zinc-500">로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">내 포트폴리오</h1>
        {portfolio.length < 5 && (
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            + 종목 추가
          </button>
        )}
      </div>

      {/* 포트폴리오 요약 카드 */}
      {portfolio.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 mb-1">투자 원금</p>
            <p className="text-xl font-bold">
              ${totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 mb-1">현재 평가</p>
            <p className="text-xl font-bold">
              ${totalCurrent.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className={`text-sm ${totalCurrent >= totalCost ? "text-green-500" : "text-red-500"}`}>
              {totalCurrent >= totalCost ? "+" : ""}
              {((totalCurrent / totalCost - 1) * 100).toFixed(1)}%
            </p>
          </div>
          <div className="p-4 rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950">
            <p className="text-sm text-green-600 dark:text-green-400 mb-1">Bull 시나리오</p>
            <p className="text-xl font-bold text-green-700 dark:text-green-300">
              ${totalBull.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-sm text-green-500">
              +{((totalBull / totalCost - 1) * 100).toFixed(1)}%
            </p>
          </div>
          <div className="p-4 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950">
            <p className="text-sm text-red-600 dark:text-red-400 mb-1">Bear 시나리오</p>
            <p className="text-xl font-bold text-red-700 dark:text-red-300">
              ${totalBear.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
            <p className="text-sm text-red-500">
              {((totalBear / totalCost - 1) * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      )}

      {/* 종목 리스트 */}
      {portfolio.length === 0 ? (
        <div className="text-center py-20 text-zinc-500">
          <p className="text-lg mb-2">아직 등록된 종목이 없습니다</p>
          <p className="text-sm">위의 &quot;종목 추가&quot; 버튼으로 시작하세요 (최대 5종목)</p>
        </div>
      ) : (
        <div className="space-y-4">
          {portfolio.map((p) => {
            const gain = p.stock_data.current_price - (p.avg_buy_price || p.stock_data.current_price);
            const gainPct = p.avg_buy_price
              ? ((p.stock_data.current_price / p.avg_buy_price - 1) * 100).toFixed(1)
              : "0.0";
            return (
              <div
                key={p.id}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg">
                      {p.stock_data.ticker}{" "}
                      <span className="text-zinc-500 font-normal text-sm">
                        {p.stock_data.name}
                      </span>
                    </h3>
                    <p className="text-sm text-zinc-500">{p.stock_data.sector}</p>
                  </div>
                  <button
                    onClick={() => removeStock(p.id)}
                    className="text-sm text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    삭제
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-sm">
                  <div>
                    <p className="text-zinc-500">보유</p>
                    <p className="font-semibold">{p.shares}주</p>
                  </div>
                  <div>
                    <p className="text-zinc-500">현재가</p>
                    <p className="font-semibold">${p.stock_data.current_price}</p>
                    <p className={`text-xs ${gain >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {gain >= 0 ? "+" : ""}{gainPct}%
                    </p>
                  </div>
                  <div>
                    <p className="text-green-600 dark:text-green-400">Bull</p>
                    <p className="font-semibold">${p.stock_data.bull_price}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500">Base</p>
                    <p className="font-semibold">${p.stock_data.base_price}</p>
                  </div>
                  <div>
                    <p className="text-red-600 dark:text-red-400">Bear</p>
                    <p className="font-semibold">${p.stock_data.bear_price}</p>
                  </div>
                </div>

                <p className="text-sm text-zinc-500 mt-3 italic">
                  {p.stock_data.thesis_summary}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* 종목 추가 모달 */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 w-full max-w-sm mx-4 border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-bold mb-4">종목 추가</h2>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">종목 선택</label>
                <select
                  value={selectedTicker}
                  onChange={(e) => setSelectedTicker(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
                >
                  <option value="">선택하세요</option>
                  {stocks
                    .filter((s) => !portfolio.some((p) => p.ticker === s.ticker))
                    .map((s) => (
                      <option key={s.ticker} value={s.ticker}>
                        {s.ticker} - {s.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">보유 수량</label>
                <input
                  type="number"
                  value={shares}
                  onChange={(e) => setShares(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
                  placeholder="예: 10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  평균 매수가 (선택)
                </label>
                <input
                  type="number"
                  value={avgPrice}
                  onChange={(e) => setAvgPrice(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
                  placeholder="예: 180"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                취소
              </button>
              <button
                onClick={addStock}
                disabled={!selectedTicker || !shares}
                className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
