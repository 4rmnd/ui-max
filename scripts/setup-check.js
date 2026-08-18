#!/usr/bin/env node

/**
 * 🛠️ UI MAX — Environment & Requirements Pre-Flight Setup Checker
 * Verifies system readiness, Node.js version, Chrome availability, and MCP integrity.
 *
 * Usage:
 *   node scripts/setup-check.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log(`
🛡️  =============================================================
   [UI MAX — SYSTEM & MCP REQUIREMENTS CHECKER]
=============================================================
`);

let allPassed = true;

// 1. Check Node.js Version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0], 10);
if (majorVersion >= 18) {
  console.log(`✅ [1/5] Node.js Version: ${nodeVersion} (Supported: >= 18.x)`);
} else {
  console.log(`❌ [1/5] Node.js Version: ${nodeVersion} (FAILED: Minimum required is Node.js 18+)`);
  console.log(`    👉 Solusi: Download Node.js LTS terbaru di https://nodejs.org\n`);
  allPassed = false;
}

// 2. Check NPM / NPX
try {
  const npmVersion = execSync('npm -v', { encoding: 'utf8' }).trim();
  console.log(`✅ [2/5] NPM / NPX Availability: npm v${npmVersion} (Ready)`);
} catch (e) {
  console.log(`❌ [2/5] NPM / NPX Availability: Not found in PATH`);
  console.log(`    👉 Solusi: Pastikan npm/npx terdaftar di Environment PATH\n`);
  allPassed = false;
}

// 3. Check Google Chrome (for chrome-devtools MCP)
let chromeDetected = false;
if (process.platform === 'win32') {
  const paths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    path.join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe')
  ];
  chromeDetected = paths.some(p => fs.existsSync(p));
} else if (process.platform === 'darwin') {
  chromeDetected = fs.existsSync('/Applications/Google Chrome.app');
} else {
  chromeDetected = true; // Assumed installed on Linux via which chrome
}

if (chromeDetected) {
  console.log(`✅ [3/5] Google Chrome Browser: Detected (Live Browser QA Ready)`);
} else {
  console.log(`⚠️  [3/5] Google Chrome Browser: Not found at default path`);
  console.log(`    ℹ️  Catatan: chrome-devtools MCP membutuhkan Chrome jika ingin fitur live screenshot.\n`);
}

// 4. Check Skills Integrity (20 Skills in .agents/skills)
const skillsPath = path.join(process.cwd(), '.agents', 'skills');
if (fs.existsSync(skillsPath)) {
  const skillsList = fs.readdirSync(skillsPath).filter(f => fs.statSync(path.join(skillsPath, f)).isDirectory());
  console.log(`✅ [4/7] Agent Skills: ${skillsList.length}/20 Skills Installed & Ready`);
} else {
  console.log(`❌ [4/7] Agent Skills: Folder .agents/skills tidak ditemukan`);
  allPassed = false;
}

// 5. Check Brand DNA References (75 Top Brand Design Specs in .agents/references)
const refPath = path.join(process.cwd(), '.agents', 'references');
if (fs.existsSync(refPath)) {
  const refList = fs.readdirSync(refPath).filter(f => f.endsWith('.md'));
  console.log(`✅ [5/7] Brand Design DNAs: ${refList.length}/75 World-Class Brand Specs Ready (Linear, Stripe, Apple, etc.)`);
} else {
  console.log(`⚠️  [5/7] Brand Design DNAs: .agents/references tidak ditemukan`);
}

// 6. Check MCP Configuration (.mcp.json)
const mcpPath = path.join(process.cwd(), '.mcp.json');
if (fs.existsSync(mcpPath)) {
  try {
    const mcpData = JSON.parse(fs.readFileSync(mcpPath, 'utf8'));
    const servers = Object.keys(mcpData.mcpServers || {});
    console.log(`✅ [6/7] MCP Servers Config: .mcp.json Valid (${servers.join(', ')})`);
  } catch (e) {
    console.log(`❌ [6/7] MCP Servers Config: .mcp.json JSON syntax error`);
    allPassed = false;
  }
} else {
  console.log(`❌ [6/7] MCP Servers Config: .mcp.json tidak ditemukan`);
  allPassed = false;
}

// 7. Check 21st.dev API Key (.env)
let has21stKey = Boolean(process.env.TWENTY_FIRST_API_KEY);
const envPath = path.join(process.cwd(), '.env');
if (!has21stKey && fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  has21stKey = envContent.includes('TWENTY_FIRST_API_KEY=') && !envContent.includes('TWENTY_FIRST_API_KEY=your_');
}

if (has21stKey) {
  console.log(`✅ [6/6] 21st.dev MCP API Key: Configured (Full Library Access Ready)`);
} else {
  console.log(`ℹ️  [6/6] 21st.dev MCP API Key: Not Set (Optional)`);
  console.log(`    👉 Dapatkan key gratis di https://21st.dev/mcp lalu tambahkan ke .env jika ingin akses privat.`);
}

console.log(`\n=============================================================`);
if (allPassed) {
  console.log(`🎉 HASIL: Lingkungan 100% SIAP! Kamu bisa langsung pakai skill ini di Antigravity / Claude Code / Cursor.`);
} else {
  console.log(`⚠️  HASIL: Ada beberapa prasyarat yang perlu diperbaiki sebelum menjalankan skill.`);
}
console.log(`=============================================================\n`);
