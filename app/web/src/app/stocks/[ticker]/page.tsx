"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import AuthGuard from "@/components/AuthGuard";

type StockDetail = {
  ticker: string;
  name: string;
  sector: string;
  target_price: number;
  extreme_bear_price: number;
  bear_price: number;
  base_price: number;
  bull_price: number;
  thesis_summary: string;
  analysis_date: string;
  content: string;
};

/* ── 마크다운 커스텀 컴포넌트 ─────────────────────────────── */
const mdComponents: Components = {
  /* 테이블 — 카드 스타일 + 줄무늬 + 호버 */
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-700">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-zinc-100 dark:bg-zinc-800 text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2.5 text-left font-semibold">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2 border-t border-zinc-100 dark:border-zinc-800">{children}</td>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">{children}</tr>
  ),

  /* 인용구 — 왼쪽 액센트 바 + 배경 */
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-4 border-blue-400 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 rounded-r-lg px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 [&>p]:m-0">
      {children}
    </blockquote>
  ),

  /* 구분선 — 좀 더 세련된 스타일 */
  hr: () => (
    <hr className="my-8 border-none h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-600 to-transparent" />
  ),

  /* h1 — 페이지 상단 헤더와 겹치므로 약간 축소 */
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-700">
      {children}
    </h1>
  ),

  /* h2 — 주요 섹션 헤더 */
  h2: ({ children }) => (
    <h2 className="text-xl font-bold mt-10 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100">
      {children}
    </h2>
  ),

  /* h3 — 서브 섹션 */
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold mt-8 mb-3 text-zinc-800 dark:text-zinc-200">
      {children}
    </h3>
  ),

  /* h4 — 소제목 */
  h4: ({ children }) => (
    <h4 className="text-base font-semibold mt-6 mb-2 text-zinc-700 dark:text-zinc-300">
      {children}
    </h4>
  ),

  /* 코드 블록 */
  pre: ({ children }) => (
    <pre className="my-4 rounded-lg bg-zinc-900 dark:bg-zinc-950 p-4 overflow-x-auto text-sm leading-relaxed text-zinc-100 border border-zinc-700">
      {children}
    </pre>
  ),
  code: ({ className, children }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) return <code className={className}>{children}</code>;
    return (
      <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-[0.85em] font-mono">
        {children}
      </code>
    );
  },

  /* 리스트 — 간격 조정 */
  ul: ({ children }) => (
    <ul className="my-3 ml-1 space-y-1.5 list-disc list-outside pl-5 marker:text-zinc-400 dark:marker:text-zinc-500">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-3 ml-1 space-y-1.5 list-decimal list-outside pl-5 marker:text-zinc-400 dark:marker:text-zinc-500">
      {children}
    </ol>
  ),

  /* 강조 — bold에 약간의 색 */
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{children}</strong>
  ),

  /* 링크 */
  a: ({ href, children }) => (
    <a href={href} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};

type PriceData = {
  price: number;
  change: number;
  changePercent: number;
};

export default function StockDetailPage() {
  const params = useParams();
  const ticker = (params.ticker as string).toUpperCase();
  const [stock, setStock] = useState<StockDetail | null>(null);
  const [price, setPrice] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("stock_data")
      .select("*")
      .eq("ticker", ticker)
      .single()
      .then(({ data }) => {
        if (data) setStock(data);
        setLoading(false);
      });

    fetch(`/api/price/${ticker}`)
      .then((r) => r.json())
      .then((d) => { if (d.price) setPrice(d); })
      .catch(() => {});
  }, [ticker]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
        <p className="text-zinc-500">로딩 중...</p>
      </div>
    );
  }

  if (!stock) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
        <p className="text-zinc-500">{ticker} 종목을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <AuthGuard>
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 상단 네비 */}
      <Link
        href="/stocks"
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        &larr; 종목 리스트
      </Link>

      {/* 종목 헤더 */}
      <div className="mt-4 mb-6 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">
              {stock.ticker}{" "}
              <span className="text-zinc-500 font-normal text-lg">
                {stock.name}
              </span>
            </h1>
            <p className="text-sm text-zinc-500 mt-1">
              {stock.sector} · 분석일 {stock.analysis_date}
            </p>
            {stock.thesis_summary && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 italic">
                {stock.thesis_summary}
              </p>
            )}
          </div>
          <div className="flex items-start gap-6">
            {price && (
              <div className="text-right">
                <p className="text-sm text-zinc-500">현재가</p>
                <p className="text-2xl font-bold">${price.price}</p>
                <p className={`text-xs font-medium ${price.change >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                  {price.change >= 0 ? "+" : ""}{price.change} ({price.change >= 0 ? "+" : ""}{price.changePercent}%)
                </p>
              </div>
            )}
            {stock.target_price && (
              <div className="text-right">
                <p className="text-sm text-zinc-500">목표가</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  ${stock.target_price}
                </p>
                {price && (
                  <p className={`text-xs font-medium ${stock.target_price > price.price ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                    {stock.target_price > price.price ? "+" : ""}{Math.round((stock.target_price / price.price - 1) * 1000) / 10}%
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 text-sm">
          {stock.extreme_bear_price && (
            <div className="p-3 rounded-lg bg-red-100 dark:bg-red-950">
              <p className="text-red-600 dark:text-red-400 text-xs font-medium">
                Extreme Bear
              </p>
              <p className="text-lg font-bold text-red-700 dark:text-red-300">
                ${stock.extreme_bear_price}
              </p>
            </div>
          )}
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/50">
            <p className="text-red-500 text-xs font-medium">Bear</p>
            <p className="text-lg font-bold">${stock.bear_price}</p>
          </div>
          <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <p className="text-zinc-500 text-xs font-medium">Base</p>
            <p className="text-lg font-bold">${stock.base_price}</p>
          </div>
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/50">
            <p className="text-green-600 dark:text-green-400 text-xs font-medium">
              Bull
            </p>
            <p className="text-lg font-bold">${stock.bull_price}</p>
          </div>
        </div>
      </div>

      {/* 분석 본문 (마크다운 렌더링) */}
      <div className="prose prose-zinc dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-li:text-zinc-700 dark:prose-li:text-zinc-300">
        <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]} components={mdComponents}>
          {stock.content}
        </ReactMarkdown>
      </div>
    </div>
    </AuthGuard>
  );
}
