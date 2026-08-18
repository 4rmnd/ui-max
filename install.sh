#!/usr/bin/env bash

# UI MAX — One-Click Installer for Existing Projects (macOS/Linux)
set -e

echo "🚀 Installing UI MAX Anti-Slop Skills & Agents into current workspace..."

TARGET_DIR="${1:-.}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

mkdir -p "$TARGET_DIR/.agents/skills"
mkdir -p "$TARGET_DIR/.agents/agents"
mkdir -p "$TARGET_DIR/.agents/rules"
mkdir -p "$TARGET_DIR/.agents/references"

cp -R "$SCRIPT_DIR/.agents/skills/"* "$TARGET_DIR/.agents/skills/"
cp -R "$SCRIPT_DIR/.agents/agents/"* "$TARGET_DIR/.agents/agents/"
cp -R "$SCRIPT_DIR/.agents/rules/"* "$TARGET_DIR/.agents/rules/"
cp -R "$SCRIPT_DIR/.agents/references/"* "$TARGET_DIR/.agents/references/"
cp "$SCRIPT_DIR/.mcp.json" "$TARGET_DIR/.mcp.json"

echo "✅ 20 Skills, 5 Parallel Subagents, 75 Brand DNAs, and MCP Config installed successfully!"
echo "👉 Run 'npm run setup' to verify your environment."
