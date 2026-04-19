import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      {/* 히어로 섹션 */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          장기투자 포트폴리오
          <br />
          <span className="text-blue-600 dark:text-blue-400">시뮬레이터</span>
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          AI가 분석한 종목 리서치를 바탕으로, 포트폴리오 구성부터 월 적립
          시뮬레이션까지. 장기투자의 모든 시나리오를 한눈에 확인하세요.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            시작하기
          </Link>
          <Link
            href="/simulation"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            시뮬레이션 해보기
          </Link>
        </div>
      </div>

      {/* 기능 소개 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h3 className="font-semibold text-lg mb-2">포트폴리오 대시보드</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            최대 5종목 등록, Bull/Base/Bear 시나리오별 목표가와 현재
            포지션을 한눈에 확인
          </p>
        </div>
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h3 className="font-semibold text-lg mb-2">월 적립 시뮬레이션</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            &ldquo;매월 50만원씩 3년&rdquo; 같은 자연어로 시뮬레이션.
            시나리오별 예상 수익을 차트로 확인
          </p>
        </div>
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h3 className="font-semibold text-lg mb-2">AI 분석 챗</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            리서치 데이터 기반 AI 대화. 종목 비교, 리밸런싱 제안,
            시나리오 변경 시 영향 분석
          </p>
        </div>
      </div>
    </div>
  );
}
