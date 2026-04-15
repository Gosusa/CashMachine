"""Merge {TICKER}_base/thesis/revaluation.md into a single report for messenger paste.

Usage:
    python scripts/build_report.py KKR              # plain text (messenger-friendly)
    python scripts/build_report.py KKR --markdown   # keep markdown syntax
    python scripts/build_report.py KKR -o out.txt   # custom output path
"""

from __future__ import annotations

import argparse
import datetime as dt
import re
import sys
import unicodedata
from pathlib import Path


def _cell_width(s: str) -> int:
    """Display width counting CJK/emoji as 2."""
    w = 0
    for ch in s:
        if unicodedata.east_asian_width(ch) in ("W", "F"):
            w += 2
        elif unicodedata.category(ch).startswith("M"):
            w += 0
        else:
            w += 1
    return w


def _pad(s: str, width: int) -> str:
    return s + " " * max(0, width - _cell_width(s))


def _is_sep_row(line: str) -> bool:
    inner = line.strip().strip("|")
    return bool(inner) and all(re.fullmatch(r"\s*:?-+:?\s*", c) for c in inner.split("|"))


def _format_tables(text: str) -> str:
    """Align markdown-style pipe tables using display width (CJK-aware)."""
    lines = text.splitlines()
    out = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.lstrip().startswith("|") and "|" in line[1:]:
            block = []
            while i < len(lines) and lines[i].lstrip().startswith("|"):
                block.append(lines[i])
                i += 1
            out.extend(_render_table(block))
            continue
        out.append(line)
        i += 1
    return "\n".join(out)


def _split_row(line: str) -> list[str]:
    s = line.strip()
    if s.startswith("|"):
        s = s[1:]
    if s.endswith("|"):
        s = s[:-1]
    return [c.strip() for c in s.split("|")]


def _render_table(block: list[str]) -> list[str]:
    rows = []
    sep_idx = -1
    for idx, ln in enumerate(block):
        if _is_sep_row(ln):
            sep_idx = idx
            continue
        rows.append(_split_row(ln))
    if not rows:
        return block
    ncols = max(len(r) for r in rows)
    rows = [r + [""] * (ncols - len(r)) for r in rows]
    widths = [max(_cell_width(r[c]) for r in rows) for c in range(ncols)]

    result = []
    for ridx, r in enumerate(rows):
        result.append("| " + " | ".join(_pad(r[c], widths[c]) for c in range(ncols)) + " |")
        if ridx == 0 and sep_idx >= 0:
            result.append("|" + "|".join("-" * (widths[c] + 2) for c in range(ncols)) + "|")
    return result

ROOT = Path(__file__).resolve().parent.parent
STOCKS_DIR = ROOT / "stocks" / "02_stocks"

PARTS = [
    ("Part 1. Base — 시장 컨센서스",      "{ticker}_base.md"),
    ("Part 2. Thesis — 사용자 엣지",       "{ticker}_thesis.md"),
    ("Part 3. Revaluation — 재평가",       "{ticker}_revaluation.md"),
    ("Part 4. Stress — 취약점 점검 (참고용, Reval 미반영)", "{ticker}_stress.md"),
]


def to_plain(md: str) -> str:
    """Convert markdown to messenger-readable plain text (KakaoTalk 등)."""
    lines = []
    in_code = False
    for raw in md.splitlines():
        line = raw

        if line.strip().startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            lines.append(line)
            continue

        # Headers
        m = re.match(r"^(#{1,6})\s+(.*)$", line)
        if m:
            level = len(m.group(1))
            text = m.group(2).strip()
            prefix = {1: "■ ", 2: "▶ ", 3: "· ", 4: "- ", 5: "- ", 6: "- "}[level]
            lines.append(f"{prefix}{text}")
            continue

        # Blockquote
        line = re.sub(r"^\s*>\s?", "  ", line)

        # Bold / italic markers
        line = re.sub(r"\*\*(.+?)\*\*", r"\1", line)
        line = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", r"\1", line)
        line = re.sub(r"`([^`]+)`", r"\1", line)

        # Links [text](url) -> text (url)
        line = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r"\1 (\2)", line)

        lines.append(line)

    # Collapse 3+ blank lines
    out = "\n".join(lines)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out


def build(ticker: str, markdown: bool) -> str:
    ticker = ticker.upper()
    today = dt.date.today().isoformat()

    header = f"{ticker} 투자 보고서 ({today})"
    bar = "=" * max(30, len(header))
    chunks = [f"{bar}\n{header}\n{bar}\n"]

    for title, fname in PARTS:
        fpath = STOCKS_DIR / ticker / fname.format(ticker=ticker)
        if not fpath.exists():
            print(f"[WARN] missing: {fpath}", file=sys.stderr)
            continue
        body = fpath.read_text(encoding="utf-8")
        if not markdown:
            body = to_plain(body)
        body = _format_tables(body)
        sep = "-" * 60
        chunks.append(f"\n{sep}\n[{title}]\n{sep}\n\n{body.strip()}\n")

    return "\n".join(chunks).rstrip() + "\n"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("ticker")
    ap.add_argument("--markdown", action="store_true", help="keep markdown syntax")
    ap.add_argument("-o", "--output", help="output file (default: stdout + auto file)")
    args = ap.parse_args()

    report = build(args.ticker, args.markdown)

    if args.output:
        Path(args.output).write_text(report, encoding="utf-8")
        print(f"wrote {args.output}")
    else:
        ext = "md" if args.markdown else "txt"
        default = STOCKS_DIR / args.ticker.upper() / f"{args.ticker.upper()}_report.{ext}"
        default.write_text(report, encoding="utf-8")
        print(f"wrote {default}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
