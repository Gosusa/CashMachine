"""
app/data/{TICKER}/{TICKER}_analysis.md 파일을 파싱하여 Supabase stock_data 테이블에 업로드.

사용법:
  python scripts/upload_to_db.py              # 전체 종목 업로드
  python scripts/upload_to_db.py AAPL NVDA    # 특정 종목만 업로드
"""

import os
import re
import sys
import json
import urllib.request
import urllib.error

# Windows 콘솔 UTF-8 출력
sys.stdout.reconfigure(encoding="utf-8")
sys.stderr.reconfigure(encoding="utf-8")

# ── Supabase 접속 정보 ──────────────────────────────────────────────
# .env.local 파일에서 읽거나, 환경변수에서 읽음
def load_env():
    env_path = os.path.join(os.path.dirname(__file__), "..", "app", "web", ".env.local")
    env = {}
    if os.path.exists(env_path):
        with open(env_path, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if "=" in line and not line.startswith("#"):
                    key, val = line.split("=", 1)
                    env[key.strip()] = val.strip()
    return env

env = load_env()
SUPABASE_URL = os.environ.get("SUPABASE_URL") or env.get("NEXT_PUBLIC_SUPABASE_URL", "")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY") or env.get("NEXT_PUBLIC_SUPABASE_ANON_KEY", "")
DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "app", "data")

# ── YAML frontmatter 파싱 ──────────────────────────────────────────
def parse_frontmatter(content: str) -> dict | None:
    """파일 상단의 YAML frontmatter를 파싱한다. 없으면 None 반환."""
    if not content.startswith("---"):
        return None
    end = content.find("---", 3)
    if end == -1:
        return None
    yaml_block = content[3:end].strip()
    meta = {}
    for line in yaml_block.split("\n"):
        line = line.strip()
        if ":" in line and not line.startswith("#"):
            key, val = line.split(":", 1)
            val = val.strip()
            # 숫자 변환
            if val:
                try:
                    val = float(val) if "." in val else int(val)
                except ValueError:
                    pass
            else:
                val = None
            meta[key.strip()] = val
    return meta if meta else None

# ── 마크다운에서 데이터 추출 ────────────────────────────────────────
def parse_analysis(ticker: str, content: str) -> dict:
    """analysis.md 파일에서 핵심 수치를 추출한다. YAML frontmatter 필수."""
    data = {
        "ticker": ticker,
        "name": None,
        "sector": None,
        "current_price": None,
        "target_price": None,
        "extreme_bear_price": None,
        "bear_price": None,
        "base_price": None,
        "bull_price": None,
        "thesis_summary": None,
        "analysis_date": None,
        "content": content,
    }

    meta = parse_frontmatter(content)
    if not meta:
        print(f"  ❌ frontmatter 없음 — 스킵 (03_app_analysis_guide.md 참조)")
        return None

    # frontmatter에서 content 제외한 본문 추출 (두 번째 --- 이후)
    body_start = content.find("---", 3) + 3
    body = content[body_start:].strip()
    data["content"] = body

    for key in ["name", "sector", "analysis_date", "thesis_summary"]:
        if key in meta and meta[key]:
            data[key] = str(meta[key])
    for key in ["target_price", "extreme_bear_price", "bear_price", "base_price", "bull_price"]:
        if key in meta and meta[key] is not None:
            data[key] = float(meta[key])

    return data

# ── Supabase REST API로 upsert ──────────────────────────────────────
def upsert_stock(data: dict):
    """stock_data 테이블에 upsert (있으면 업데이트, 없으면 삽입)."""
    url = f"{SUPABASE_URL}/rest/v1/stock_data"

    # None 값 제거
    payload = {k: v for k, v in data.items() if v is not None}

    body = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=body, method="POST")
    req.add_header("apikey", SUPABASE_KEY)
    req.add_header("Authorization", f"Bearer {SUPABASE_KEY}")
    req.add_header("Content-Type", "application/json")
    req.add_header("Prefer", "resolution=merge-duplicates")  # upsert

    try:
        resp = urllib.request.urlopen(req)
        return resp.status
    except urllib.error.HTTPError as e:
        error_body = e.read().decode("utf-8")
        print(f"  ERROR {e.code}: {error_body}")
        return e.code

# ── 메인 ────────────────────────────────────────────────────────────
def main():
    if not SUPABASE_URL or not SUPABASE_KEY:
        print("ERROR: Supabase 접속 정보가 없습니다. app/web/.env.local 파일을 확인하세요.")
        sys.exit(1)

    # 대상 종목 결정
    if len(sys.argv) > 1:
        tickers = [t.upper() for t in sys.argv[1:]]
    else:
        tickers = sorted([
            d for d in os.listdir(DATA_DIR)
            if os.path.isdir(os.path.join(DATA_DIR, d))
        ])

    print(f"업로드 대상: {len(tickers)}개 종목")
    print(f"DB: {SUPABASE_URL}")
    print()

    success, fail = 0, 0
    for ticker in tickers:
        filepath = os.path.join(DATA_DIR, ticker, f"{ticker}_analysis.md")
        if not os.path.exists(filepath):
            print(f"  [{ticker}] 파일 없음: {filepath}")
            fail += 1
            continue

        with open(filepath, encoding="utf-8") as f:
            content = f.read()

        data = parse_analysis(ticker, content)
        if data is None:
            fail += 1
            continue
        status = upsert_stock(data)

        if status in (200, 201):
            price_info = f"Bull ${data.get('bull_price', '?')} / Base ${data.get('base_price', '?')} / Bear ${data.get('bear_price', '?')}"
            print(f"  [{ticker}] OK — {data.get('name', '?')} | {price_info}")
            success += 1
        else:
            print(f"  [{ticker}] FAIL (status {status})")
            fail += 1

    print(f"\n완료: {success} 성공, {fail} 실패 (총 {len(tickers)}개)")

if __name__ == "__main__":
    main()
