# UI MAX — One-Click Installer for Existing Projects (Windows PowerShell)
param (
    [string]$TargetDir = "."
)

Write-Host "🚀 Installing UI MAX Anti-Slop Skills & Agents into current workspace..." -ForegroundColor Cyan

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

$destSkills = Join-Path $TargetDir ".agents\skills"
$destAgents = Join-Path $TargetDir ".agents\agents"
$destRules = Join-Path $TargetDir ".agents\rules"
$destReferences = Join-Path $TargetDir ".agents\references"

New-Item -ItemType Directory -Force -Path $destSkills | Out-Null
New-Item -ItemType Directory -Force -Path $destAgents | Out-Null
New-Item -ItemType Directory -Force -Path $destRules | Out-Null
New-Item -ItemType Directory -Force -Path $destReferences | Out-Null

Copy-Item -Recurse -Force -Path "$ScriptDir\.agents\skills\*" -Destination $destSkills
Copy-Item -Recurse -Force -Path "$ScriptDir\.agents\agents\*" -Destination $destAgents
Copy-Item -Recurse -Force -Path "$ScriptDir\.agents\rules\*" -Destination $destRules
Copy-Item -Recurse -Force -Path "$ScriptDir\.agents\references\*" -Destination $destReferences
Copy-Item -Force -Path "$ScriptDir\.mcp.json" -Destination (Join-Path $TargetDir ".mcp.json")

Write-Host "✅ 20 Skills, 5 Parallel Subagents, 75 Brand DNAs, and MCP Config installed successfully!" -ForegroundColor Green
Write-Host "👉 Run 'npm run setup' or 'node scripts/setup-check.js' to verify your environment." -ForegroundColor Yellow
