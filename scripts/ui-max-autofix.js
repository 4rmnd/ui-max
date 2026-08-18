#!/usr/bin/env node

/**
 * ⚡ UI MAX — Autonomous AST Self-Healing Auto-Fixer (God-Mode v3.0)
 * Automatically scans, refactors, and eliminates AI slop patterns from code.
 *
 * Usage:
 *   node scripts/ui-max-autofix.js [target-file-or-dir]
 */

const fs = require('fs');
const path = require('path');

console.log(`
⚡ =============================================================
   [UI MAX — AUTONOMOUS SELF-HEALING AUTO-FIXER]
=============================================================
`);

const REPLACEMENTS = [
  // 1. Slop Colors -> Structured Modern Tokens
  {
    from: /bg-gradient-to-r\s+from-purple-[0-9]{3}\s+via-[a-z]+-[0-9]{3}\s+to-[a-z]+-[0-9]{3}/gi,
    to: 'bg-zinc-950 border border-zinc-800',
    desc: 'Replaced generic purple gradient with structured high-contrast surface'
  },
  {
    from: /from-purple-600\s+to-indigo-600/gi,
    to: 'bg-zinc-900 border border-zinc-800',
    desc: 'Replaced purple-to-indigo gradient with solid card surface'
  },
  // 2. Soap-bubble Blur -> Solid Elevated Surface
  {
    from: /backdrop-blur-[a-z]+\s+bg-white\/[0-9]+/gi,
    to: 'bg-zinc-900/90 border border-zinc-800 shadow-sm',
    desc: 'Replaced soap-bubble backdrop blur with solid elevated surface'
  },
  // 3. Over-rounded Radii -> Software Precision Radii
  {
    from: /rounded-3xl/gi,
    to: 'rounded-xl',
    desc: 'Adjusted rounded-3xl to software precision rounded-xl'
  },
  // 4. Fixed Unresponsive Width -> Fluid Responsive Layout
  {
    from: /w-\[1200px\]/gi,
    to: 'w-full max-w-6xl mx-auto px-4',
    desc: 'Converted fixed w-[1200px] to fluid responsive container'
  },
  // 5. Artificial Pulsing Badge -> Static Verified Telemetry Indicator
  {
    from: /animate-pulse\s+bg-green-500/gi,
    to: 'bg-emerald-400',
    desc: 'Replaced distracting animate-pulse with clean status indicator'
  },
  // 6. Robotic AI Marketing Clichés -> Crisp Human Active Voice
  {
    from: /Unleash the power of AI to effortlessly transform your workflow/gi,
    to: 'Deterministic infrastructure for high-scale agentic engineering',
    desc: 'Rewrote generic AI headline into clear, authoritative value proposition'
  },
  {
    from: /Seamlessly elevate your business with our cutting-edge AI-powered solutions designed for ultimate productivity\./gi,
    to: 'Execute parallel subagent pipelines with zero-friction orchestration and verified production outputs.',
    desc: 'Eliminated robotic copywriting filler with factual technical copy'
  },
  {
    from: /Supercharge your/gi,
    to: 'Accelerate',
    desc: 'Replaced cliché "Supercharge" with active verb "Accelerate"'
  }
];

function fixContent(filePath, content) {
  let modified = content;
  let fixCount = 0;

  REPLACEMENTS.forEach(rule => {
    if (rule.from.test(modified)) {
      modified = modified.replace(rule.from, rule.to);
      fixCount++;
      console.log(`  🔧 [Auto-Fixed] ${rule.desc} in ${path.basename(filePath)}`);
    }
  });

  return { modified, fixCount };
}

function processTarget(targetPath) {
  if (!fs.existsSync(targetPath)) {
    console.error(`Target not found: ${targetPath}`);
    return;
  }

  const stat = fs.statSync(targetPath);
  let totalFixes = 0;

  if (stat.isFile()) {
    const original = fs.readFileSync(targetPath, 'utf8');
    const { modified, fixCount } = fixContent(targetPath, original);
    if (fixCount > 0) {
      fs.writeFileSync(targetPath, modified, 'utf8');
      totalFixes += fixCount;
    }
  } else if (stat.isDirectory()) {
    if (targetPath.includes('node_modules') || targetPath.includes('.git') || targetPath.includes('scripts')) {
      return;
    }
    const entries = fs.readdirSync(targetPath);
    entries.forEach(entry => {
      const full = path.join(targetPath, entry);
      const isCode = full.endsWith('.tsx') || full.endsWith('.jsx') || full.endsWith('.html') || full.endsWith('.vue');
      if (isCode) {
        const original = fs.readFileSync(full, 'utf8');
        const { modified, fixCount } = fixContent(full, original);
        if (fixCount > 0) {
          fs.writeFileSync(full, modified, 'utf8');
          totalFixes += fixCount;
        }
      }
    });
  }

  console.log(`\n🎉 Completed: Applied ${totalFixes} autonomous self-healing fix(es).\n`);
}

const target = process.argv[2] || 'examples';
processTarget(target);
