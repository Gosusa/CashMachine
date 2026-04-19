#!/bin/bash
# ============================================================
#  CashMachine — 종목 분석 자동 루프 (신규 분석 전용)
#  UNIVERSE.md에서 미완료 종목을 순회하며 claude -p 로 분석 실행
#  update 모드는 별도 가이드 작성 후 추가 예정
# ============================================================

set -uo pipefail  # -e 제외: 개별 실패를 if로 직접 처리

# ── Ctrl+C (SIGINT) 처리 ──
# claude -p 실행 중 Ctrl+C → 현재 종목 cleanup 후 스크립트 종료
INTERRUPTED=false
CURRENT_TICKER=""
CURRENT_HAD_DIR=false

trap_handler() {
  INTERRUPTED=true
  echo ""
  echo "⚠️  Ctrl+C 감지 — 중단 처리 중..."
  # 현재 진행 중인 종목이 있으면 cleanup
  if [[ -n "$CURRENT_TICKER" ]]; then
    echo "  현재 종목 ($CURRENT_TICKER) 정리 중..."
    cleanup_failed "$CURRENT_TICKER" "$CURRENT_HAD_DIR"
  fi
}
trap trap_handler SIGINT

# ── 경로 설정 ──
REPO_ROOT="c:/Stocks/CashMachine"
UNIVERSE="$REPO_ROOT/stocks/02_tickers/UNIVERSE.md"
TICKERS_DIR="$REPO_ROOT/stocks/02_tickers"
APP_DATA_DIR="$REPO_ROOT/app/data"
LOG_BASE="$REPO_ROOT/scripts/logs"
RUN_ID="$(date +%Y%m%d_%H%M%S)"
LOG_DIR="$LOG_BASE/$RUN_ID"
SUMMARY="$LOG_DIR/summary.log"

# ── Node.js / Claude CLI PATH 추가 ──
export PATH="/c/Users/cjk06/AppData/Roaming/npm:/c/Program Files/nodejs:$PATH"

mkdir -p "$LOG_DIR"

# ── 옵션 파싱 ──
MAX_COUNT=0  # 0 = 무제한

usage() {
  cat <<'USAGE'
사용법:
  ./run_analysis.sh [옵션]

옵션:
  -n, --count <N>   최대 N개만 처리 (기본: 무제한)
  -h, --help        도움말

예시:
  ./run_analysis.sh          # 미분석 종목 전체 순회
  ./run_analysis.sh -n 5     # 5개만 처리
USAGE
  exit 0
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -n|--count)   MAX_COUNT="$2"; shift 2 ;;
    -h|--help)    usage ;;
    *)            echo "알 수 없는 옵션: $1"; usage ;;
  esac
done

# ── 대상 종목 추출 (Base가 빈 종목만) ──
extract_tickers() {
  local tickers=()

  while IFS='|' read -r _ ticker base _rest; do
    ticker=$(echo "$ticker" | xargs)
    base=$(echo "$base" | xargs)
    # 마크다운 메타 행(#, >, 빈 줄) 및 헤더/구분선 스킵
    [[ -z "$ticker" || "$ticker" == "Ticker" || "$ticker" == "------" ]] && continue
    [[ "$ticker" == \#* || "$ticker" == \>* ]] && continue
    # Base가 비어있으면 대상
    [[ -z "$base" ]] && tickers+=("$ticker")
  done < "$UNIVERSE"

  # MAX_COUNT 적용
  if [[ "$MAX_COUNT" -gt 0 && "${#tickers[@]}" -gt "$MAX_COUNT" ]]; then
    tickers=("${tickers[@]:0:$MAX_COUNT}")
  fi

  printf '%s\n' "${tickers[@]}"
}

# ── 실패 시 불완전 파일 정리 (신규 폴더만 삭제) ──
cleanup_failed() {
  local ticker="$1"
  local had_dir="$2"  # 분석 전 폴더 존재 여부
  local ticker_log="$LOG_DIR/${ticker}.log"
  local ticker_dir="$TICKERS_DIR/$ticker"
  local app_dir="$APP_DATA_DIR/$ticker"

  if [[ "$had_dir" == false ]]; then
    # 신규 분석이었으면 생긴 폴더 통째로 삭제
    if [[ -d "$ticker_dir" ]]; then
      rm -rf "$ticker_dir"
      echo "  정리: $ticker_dir 삭제" | tee -a "$ticker_log" "$SUMMARY"
    fi
    if [[ -d "$app_dir" ]]; then
      rm -rf "$app_dir"
      echo "  정리: $app_dir 삭제" | tee -a "$ticker_log" "$SUMMARY"
    fi
  else
    echo "  기존 폴더 존재 — 정리 스킵 (수동 확인 필요)" | tee -a "$ticker_log" "$SUMMARY"
  fi
}

# ── UNIVERSE.md 업데이트 ──
update_universe() {
  local ticker="$1"
  local today
  today=$(date +%Y-%m-%d)

  python3 -c "
import re, sys

ticker = sys.argv[1]
today = sys.argv[2]
path = sys.argv[3]

with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

pattern = re.compile(r'^\|\s*' + re.escape(ticker) + r'\s*\|')
updated = False

for i, line in enumerate(lines):
    if pattern.match(line):
        # | Ticker | Base   | Stress   | AppReport   | Revaluation   | Last Updated   |
        t = ticker
        lines[i] = f'| {t:<6} | {\"Y\":<6} | {\"Y\":<8} | {\"Y\":<11} | {\"\":<13} | {today:<14} |\n'
        updated = True
        break

if updated:
    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'{ticker} updated')
else:
    print(f'{ticker} not found in UNIVERSE.md', file=sys.stderr)
    sys.exit(1)
" "$ticker" "$today" "$UNIVERSE"
}

# ── 진행률 계산 ──
show_progress() {
  local completed="$1"

  local total
  total=$(grep -cE '^\|[^-]' "$UNIVERSE" || echo "0")
  total=$((total - 1))  # 헤더 제외

  local done_count
  done_count=$(grep -cE '^\|.*\| Y ' "$UNIVERSE" || echo "0")

  local pct=0
  [[ "$total" -gt 0 ]] && pct=$((done_count * 100 / total))

  echo ""
  echo "══════════════════════════════════════"
  echo "  루프 현황"
  echo "  직전 완료: $completed"
  echo "  누적 완료: $done_count / $total ($pct%)"
  echo "══════════════════════════════════════"
  echo ""
}

# ── 메인 루프 ──
main() {
  echo "======================================" | tee -a "$SUMMARY"
  echo "  CashMachine 분석 루프 시작"          | tee -a "$SUMMARY"
  echo "  모드: 신규 분석 (Base 빈 종목)"      | tee -a "$SUMMARY"
  echo "  시각: $(date)"                       | tee -a "$SUMMARY"
  echo "  로그: $LOG_DIR/"                     | tee -a "$SUMMARY"
  echo "======================================" | tee -a "$SUMMARY"

  mapfile -t TICKERS < <(extract_tickers)

  if [[ ${#TICKERS[@]} -eq 0 ]]; then
    echo "대상 종목이 없습니다." | tee -a "$SUMMARY"
    exit 0
  fi

  echo "대상 종목: ${#TICKERS[@]}개" | tee -a "$SUMMARY"
  echo "목록: ${TICKERS[*]}"         | tee -a "$SUMMARY"
  echo ""

  local count=0
  local succeeded=()
  local failed=()

  for ticker in "${TICKERS[@]}"; do
    count=$((count + 1))
    local ticker_log="$LOG_DIR/${ticker}.log"

    echo "[${count}/${#TICKERS[@]}] $ticker 분석 시작 — $(date)" | tee -a "$ticker_log" "$SUMMARY"

    # 분석 전 폴더 존재 여부 확인 (정리 판단용)
    local had_dir=false
    [[ -d "$TICKERS_DIR/$ticker" ]] && had_dir=true

    # 현재 종목 추적 (Ctrl+C trap에서 사용)
    CURRENT_TICKER="$ticker"
    CURRENT_HAD_DIR="$had_dir"

    # claude -p 로 분석 실행 (매 호출 = 새 세션 = 깨끗한 컨텍스트)
    # PIPESTATUS[0]으로 claude의 실제 exit code를 확인 (tee 성공에 가려지지 않도록)
    # --dangerously-skip-permissions: 모든 도구 자동 승인 (허용 질문 없음)
    claude -p "분석가이드대로 ${ticker} 종목 분석해줘" \
         --dangerously-skip-permissions \
         2>&1 | tee -a "$ticker_log"
    local exit_code=${PIPESTATUS[0]}

    # Ctrl+C로 중단됐으면 즉시 루프 탈출
    if [[ "$INTERRUPTED" == true ]]; then
      echo "❌ $ticker 분석 중단 (Ctrl+C) — $(date)" | tee -a "$ticker_log" "$SUMMARY"
      failed+=("$ticker")
      break
    fi

    # 필수 파일 존재 여부 검증 (exit 0이어도 파일이 없으면 실패 처리)
    local base_file="$TICKERS_DIR/$ticker/${ticker}_base.md"
    local stress_file="$TICKERS_DIR/$ticker/${ticker}_stress.md"
    local app_file="$APP_DATA_DIR/$ticker/${ticker}_analysis.md"
    local files_ok=true

    if [[ "$exit_code" -eq 0 ]]; then
      for required in "$base_file" "$stress_file" "$app_file"; do
        if [[ ! -f "$required" ]]; then
          echo "⚠️  필수 파일 누락: $required" | tee -a "$ticker_log" "$SUMMARY"
          files_ok=false
        fi
      done
    fi

    if [[ "$exit_code" -eq 0 && "$files_ok" == true ]]; then
      echo "[${count}/${#TICKERS[@]}] $ticker 분석 완료 — $(date)" | tee -a "$ticker_log" "$SUMMARY"
      update_universe "$ticker" | tee -a "$ticker_log" "$SUMMARY"
      show_progress "$ticker"  | tee -a "$SUMMARY"
      succeeded+=("$ticker")
    else
      echo "❌ $ticker 분석 실패 (exit code: $exit_code) — $(date)" | tee -a "$ticker_log" "$SUMMARY"
      cleanup_failed "$ticker" "$had_dir"
      failed+=("$ticker")
    fi

    # 현재 종목 추적 리셋
    CURRENT_TICKER=""

    # rate limit 방지
    sleep 5
  done

  # ── 최종 보고 ──
  echo ""                                        | tee -a "$SUMMARY"
  echo "========================================"  | tee -a "$SUMMARY"
  echo "  루프 완료"                               | tee -a "$SUMMARY"
  echo "  성공: ${#succeeded[@]}개"                | tee -a "$SUMMARY"
  echo "  실패: ${#failed[@]}개"                   | tee -a "$SUMMARY"
  [[ ${#succeeded[@]} -gt 0 ]] && \
    echo "  성공 목록: ${succeeded[*]}"            | tee -a "$SUMMARY"
  [[ ${#failed[@]} -gt 0 ]] && \
    echo "  실패 목록: ${failed[*]}"               | tee -a "$SUMMARY"
  echo "  로그: $LOG_DIR/"                         | tee -a "$SUMMARY"
  echo "========================================"  | tee -a "$SUMMARY"
}

main
