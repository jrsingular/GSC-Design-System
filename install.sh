#!/usr/bin/env bash
# Install the GSC design-system skills into an AI coding agent.
# Copies the four Agent Skills into a target project's skills directory and
# drops the portable AGENTS.md / DESIGN.md references beside them.
#
# Usage:
#   ./install.sh [TARGET_DIR]      # default: current directory
#
# Works with Claude Code (.claude/skills), and the AGENTS.md/DESIGN.md files are
# read by Cursor, Codex, Windsurf, Gemini CLI and Copilot.
set -euo pipefail

SRC="$(cd "$(dirname "$0")" && pwd)"
TARGET="${1:-$PWD}"

echo "GSC Design System → installing into: $TARGET"

# 1) Agent Skills (Claude Code)
mkdir -p "$TARGET/.claude/skills"
cp -R "$SRC/.claude/skills/." "$TARGET/.claude/skills/"
echo "  ✓ .claude/skills/ (building-gsc-brand, designing-gsc-interfaces, writing-gsc-copy, designing-gsc-landing-pages, creating-gsc-social-art)"

# 2) Cross-tool reference files (Cursor / Codex / Windsurf / Copilot)
cp "$SRC/AGENTS.md" "$TARGET/AGENTS.md"
cp "$SRC/DESIGN.md" "$TARGET/DESIGN.md"
echo "  ✓ AGENTS.md, DESIGN.md"

# 2b) Routing map — the program registry + guide (resolve the brand before designing)
mkdir -p "$TARGET/programs" "$TARGET/docs"
cp "$SRC/programs/registry.json" "$TARGET/programs/registry.json"
cp "$SRC/docs/program-routing.md" "$TARGET/docs/program-routing.md"
cp "$SRC/gsc.manifest.json" "$TARGET/gsc.manifest.json"
[ -f "$SRC/llms.txt" ] && cp "$SRC/llms.txt" "$TARGET/llms.txt"
echo "  ✓ programs/registry.json, docs/program-routing.md, gsc.manifest.json, llms.txt"

# 3) The stylesheet bundle (optional but handy)
if [ -f "$SRC/dist/gsc-design-system.css" ]; then
  mkdir -p "$TARGET/vendor/gsc"
  cp "$SRC/dist/gsc-design-system.css" "$TARGET/vendor/gsc/gsc-design-system.css"
  echo "  ✓ vendor/gsc/gsc-design-system.css"
fi

echo "Done. Point your agent at AGENTS.md, or open .claude/skills/ in Claude Code."
