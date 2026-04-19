"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

type StockData = {
  ticker: string;
  name: string;
  current_price: number;
  bull_price: number;
  base_price: number;
  bear_price: number;
};

type SimResult = {
  ticker: string;
  name: string;
  months: number;
  monthlyAmount: number;
  totalInvested: number;
  sharesAccumulated: number;
  bull: { value: number; returnPct: number };
  base: { value: number; returnPct: number };
  bear: { value: number; returnPct: number };
};

export default function SimulationPage() {
  const [user, setUser] = useState<User | null>(null);
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [selectedTicker, setSelectedTicker] = useState("");
  const [monthlyAmount, setMonthlyAmount] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<SimResult | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    supabase.from("stock_data").select("*").then(({ data }) => {
      if (data) setStocks(data);
    });
  }, []);

  function simulate() {
    const stock = stocks.find((s) => s.ticker === selectedTicker);
    if (!stock || !monthlyAmount || !years) return;

    const months = Number(years) * 12;
    const monthly = Number(monthlyAmount);
    const totalInvested = monthly * months;

    // 매월 현재가로 매수한다고 가정 → 총 누적 주식 수
    const sharesPerMonth = monthly / stock.current_price;
    const sharesAccumulated = sharesPerMonth * months;

    // 시나리오별 최종 평가액
    const bullValue = sharesAccumulated * stock.bull_price;
    const baseValue = sharesAccumulated * stock.base_price;
    const bearValue = sharesAccumulated * stock.bear_price;

    setResult({
      ticker: stock.ticker,
      name: stock.name,
      months,
      monthlyAmount: monthly,
      totalInvested,
      sharesAccumulated: Math.round(sharesAccumulated * 100) / 100,
      bull: {
        value: Math.round(bullValue),
        returnPct: Math.round(((bullValue / totalInvested) - 1) * 1000) / 10,
      },
      base: {
        value: Math.round(baseValue),
        returnPct: Math.round(((baseValue / totalInvested) - 1) * 1000) / 10,
      },
      bear: {
        value: Math.round(bearValue),
        returnPct: Math.round(((bearValue / totalInvested) - 1) * 1000) / 10,
      },
    });
    setSavedMessage("");
  }

  async function saveResult() {
    if (!user || !result) return;
    setSaving(true);

    const { error } = await supabase.from("simulations").insert({
      user_id: user.id,
      title: `${result.ticker} 월 $${result.monthlyAmount} × ${result.months / 12}년`,
      type: "dca",
      input: {
        ticker: result.ticker,
        monthlyAmount: result.monthlyAmount,
        months: result.months,
      },
      result: {
        totalInvested: result.totalInvested,
        sharesAccumulated: result.sharesAccumulated,
        bull: result.bull,
        base: result.base,
        bear: result.bear,
      },
    });

    setSaving(false);
    if (error) {
      alert("저장 실패: " + error.message);
    } else {
      setSavedMessage("저장되었습니다!");
    }
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
        <p className="text-zinc-500">로그인이 필요합니다.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">월 적립 시뮬레이션</h1>

      {/* 입력 폼 */}
      <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">종목 선택</label>
          <select
            value={selectedTicker}
            onChange={(e) => setSelectedTicker(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
          >
            <option value="">선택하세요</option>
            {stocks.map((s) => (
              <option key={s.ticker} value={s.ticker}>
                {s.ticker} - {s.name} (현재가 ${s.current_price})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">월 투자금 ($)</label>
            <input
              type="number"
              value={monthlyAmount}
              onChange={(e) => setMonthlyAmount(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
              placeholder="예: 500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">투자 기간 (년)</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
              placeholder="예: 3"
            />
          </div>
        </div>

        <button
          onClick={simulate}
          disabled={!selectedTicker || !monthlyAmount || !years}
          className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          시뮬레이션 실행
        </button>
      </div>

      {/* 결과 */}
      {result && (
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-bold">
            {result.ticker} ({result.name}) 시뮬레이션 결과
          </h2>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="grid grid-cols-3 gap-4 text-sm mb-4">
              <div>
                <p className="text-zinc-500">총 투자금</p>
                <p className="text-lg font-bold">
                  ${result.totalInvested.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-zinc-500">투자 기간</p>
                <p className="text-lg font-bold">{result.months / 12}년 ({result.months}개월)</p>
              </div>
              <div>
                <p className="text-zinc-500">누적 주식 수</p>
                <p className="text-lg font-bold">{result.sharesAccumulated}주</p>
              </div>
            </div>
          </div>

          {/* 시나리오별 결과 */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950">
              <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">
                Bull 시나리오
              </p>
              <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                ${result.bull.value.toLocaleString()}
              </p>
              <p className="text-sm text-green-500 mt-1">
                +{result.bull.returnPct}% 수익
              </p>
              <p className="text-xs text-green-600/60 mt-1">
                +${(result.bull.value - result.totalInvested).toLocaleString()} 이익
              </p>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
              <p className="text-sm text-zinc-500 font-medium mb-1">
                Base 시나리오
              </p>
              <p className="text-2xl font-bold">
                ${result.base.value.toLocaleString()}
              </p>
              <p className={`text-sm mt-1 ${result.base.returnPct >= 0 ? "text-green-500" : "text-red-500"}`}>
                {result.base.returnPct >= 0 ? "+" : ""}{result.base.returnPct}% 수익
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                {result.base.value - result.totalInvested >= 0 ? "+" : ""}
                ${(result.base.value - result.totalInvested).toLocaleString()} 이익
              </p>
            </div>

            <div className="p-4 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950">
              <p className="text-sm text-red-600 dark:text-red-400 font-medium mb-1">
                Bear 시나리오
              </p>
              <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                ${result.bear.value.toLocaleString()}
              </p>
              <p className="text-sm text-red-500 mt-1">
                {result.bear.returnPct}% 손실
              </p>
              <p className="text-xs text-red-600/60 mt-1">
                ${(result.bear.value - result.totalInvested).toLocaleString()} 손실
              </p>
            </div>
          </div>

          {/* 저장 버튼 */}
          <div className="flex items-center gap-3">
            <button
              onClick={saveResult}
              disabled={saving}
              className="px-6 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 transition-colors"
            >
              {saving ? "저장 중..." : "결과 저장"}
            </button>
            {savedMessage && (
              <span className="text-sm text-green-500">{savedMessage}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
