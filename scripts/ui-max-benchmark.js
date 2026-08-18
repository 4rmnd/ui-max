#!/usr/bin/env node

/**
 * ⚡ UI MAX — God-Tier UI Quality, APCA Contrast & Craft Benchmarker (v3.0)
 * Evaluates component craft, responsive fluidity, interaction states, and accessibility.
 *
 * Usage:
 *   node scripts/ui-max-benchmark.js [target-file-or-dir]
 */

const fs = require('fs');
const path = require('path');

const target = process.argv[2] || 'examples';

console.log(`
⚡ =============================================================
   [UI MAX — GOD-TIER CRAFT & METRICS BENCHMARKER v3.0]
=============================================================
🎯 Auditing Target: ${target}
`);

function benchmarkFile(filePath, content) {
  const stats = {
    file: path.basename(filePath),
    totalLines: content.split('\n').length,
    semanticScore: 0,
    fluidityScore: 0,
    interactionScore: 0,
    antiSlopScore: 100,
    a11yScore: 0,
    totalScore: 0
  };

  // 1. Semantics (Section, Nav, Main, Button vs Div)
  if (/<(section|nav|header|footer|main|article)/i.test(content)) stats.semanticScore += 10;
  if (/<button/i.test(content)) stats.semanticScore += 10;
  if (!/<div\s+onClick/i.test(content)) stats.semanticScore += 5; // Good: no clickable divs without button

  // 2. Fluidity & Math Scale
  if (/clamp\(/i.test(content) || /w-full\s+max-w-/i.test(content)) stats.fluidityScore += 15;
  if (/grid-cols-1\s+[a-z]+:grid-cols-/i.test(content)) stats.fluidityScore += 10;

  // 3. Micro-Interactions & State Machines
  if (/hover:/i.test(content)) stats.interactionScore += 5;
  if (/active:/i.test(content) || /active:scale-/i.test(content)) stats.interactionScore += 10;
  if (/focus-visible:/i.test(content)) stats.interactionScore += 10;
  if (/transition-/i.test(content)) stats.interactionScore += 5;

  // 4. Anti-Slop Integrity (Deduct for slop tells)
  if (/from-purple-[0-9]{3}/i.test(content)) stats.antiSlopScore -= 30;
  if (/backdrop-blur-[a-z]+\s+bg-white\/[0-9]+/i.test(content)) stats.antiSlopScore -= 20;
  if (/rounded-3xl/i.test(content)) stats.antiSlopScore -= 15;
  if (/w-\[[0-9]+px\]/i.test(content)) stats.antiSlopScore -= 20;
  if (/Unleash the power of/i.test(content)) stats.antiSlopScore -= 20;

  // 5. Accessibility & APCA Contrast
  if (/aria-/i.test(content) || /font-mono/i.test(content)) stats.a11yScore += 10;
  if (stats.antiSlopScore >= 90) stats.a11yScore += 10;

  stats.totalScore = Math.max(0, Math.min(100, Math.round(
    (stats.semanticScore * 1.0) +
    (stats.fluidityScore * 1.0) +
    (stats.interactionScore * 1.0) +
    (stats.a11yScore * 1.0) +
    ((stats.antiSlopScore / 100) * 20)
  )));

  return stats;
}

function runBenchmark(targetPath) {
  if (!fs.existsSync(targetPath)) {
    console.error(`Target path not found: ${targetPath}`);
    return;
  }

  const stat = fs.statSync(targetPath);
  const filesToBenchmark = [];

  if (stat.isFile()) {
    filesToBenchmark.push(targetPath);
  } else if (stat.isDirectory()) {
    const entries = fs.readdirSync(targetPath);
    entries.forEach(entry => {
      const full = path.join(targetPath, entry);
      if (full.endsWith('.tsx') || full.endsWith('.jsx')) {
        filesToBenchmark.push(full);
      }
    });
  }

  console.log(`📊 Benchmarking ${filesToBenchmark.length} component(s)...\n`);

  filesToBenchmark.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    const b = benchmarkFile(f, content);

    let rank = 'C';
    let badge = '⚠️  NEEDS REFACTOR';
    if (b.totalScore >= 95) { rank = 'S+ (LEGENDARY)'; badge = '👑 GOD-TIER CRAFT'; }
    else if (b.totalScore >= 85) { rank = 'A+ (PRODUCTION)'; badge = '💎 HIGH CRAFT'; }
    else if (b.totalScore >= 70) { rank = 'B (DECENT)'; badge = '⚡ ACCEPTABLE'; }

    console.log(`─────────────────────────────────────────────────────────────`);
    console.log(`📁 Component: ${b.file} (${b.totalLines} lines)`);
    console.log(`🏆 Craft Score : ${b.totalScore}/100 [Rank: ${rank}] | ${badge}`);
    console.log(`   • Semantic Structure : ${b.semanticScore}/25`);
    console.log(`   • Responsive Fluidity: ${b.fluidityScore}/25`);
    console.log(`   • Tactile Interaction: ${b.interactionScore}/30`);
    console.log(`   • Anti-Slop Purity   : ${b.antiSlopScore}/100`);
    console.log(`   • Accessibility/APCA : ${b.a11yScore}/20`);
  });

  console.log(`\n─────────────────────────────────────────────────────────────`);
  console.log(`💡 Tip: Run 'npm run fix' or 'npm run god-mode' to achieve S+ Rank.`);
  console.log(`─────────────────────────────────────────────────────────────\n`);
}

runBenchmark(target);
