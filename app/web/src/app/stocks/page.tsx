"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

type Stock = {
  ticker: string;
  name: string;
  sector: string;
  target_price: number;
  bull_price: number;
  base_price: number;
  bear_price: number;
  analysis_date: string;
};

export default function StocksPage() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [search, setSearch] = useState("");
  const [sectorFilter, setSectorFilter] = useState("");

  useEffect(() => {
    supabase
      .from("stock_data")
      .select("ticker, name, sector, target_price, bull_price, base_price, bear_price, analysis_date")
      .order("ticker")
      .then(({ data }) => {
        if (data) setStocks(data);
      });
  }, []);

  const sectors = [...new Set(stocks.map((s) => s.sector).filter(Boolean))].sort();

  const filtered = stocks.filter((s) => {
    const matchSearch =
      !search ||
      s.ticker.toLowerCase().includes(search.toLowerCase()) ||
      (s.name && s.name.toLowerCase().includes(search.toLowerCase()));
    const matchSector = !sectorFilter || s.sector === sectorFilter;
    return matchSearch && matchSector;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">종목 리서치</h1>

      {/* 검색 & 필터 */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="종목명 또는 티커 검색..."
          className="flex-1 px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
        />
        <select
          value={sectorFilter}
          onChange={(e) => setSectorFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
        >
          <option value="">전체 섹터</option>
          {sectors.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* 종목 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((s) => (
          <Link
            key={s.ticker}
            href={`/stocks/${s.ticker}`}
            className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-bold text-lg">{s.ticker}</h3>
                <p className="text-sm text-zinc-500">{s.name}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {s.sector}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
              <div>
                <p className="text-green-600 dark:text-green-400 text-xs">Bull</p>
                <p className="font-semibold">${s.bull_price}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs">Base</p>
                <p className="font-semibold">${s.base_price}</p>
              </div>
              <div>
                <p className="text-red-600 dark:text-red-400 text-xs">Bear</p>
                <p className="font-semibold">${s.bear_price}</p>
              </div>
            </div>

            {s.target_price && (
              <p className="text-sm mt-3 text-zinc-500">
                목표가: <span className="font-semibold text-zinc-900 dark:text-zinc-100">${s.target_price}</span>
              </p>
            )}

            {s.analysis_date && (
              <p className="text-xs text-zinc-400 mt-2">{s.analysis_date}</p>
            )}
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-zinc-500 py-10">검색 결과가 없습니다.</p>
      )}
    </div>
  );
}
