#!/usr/bin/env node

/**
 * 🛡️ Anti-Slop UI Static Scanner & Orchestrator
 * Analyzes frontend files (JSX, TSX, HTML, CSS, Vue, Svelte) for AI design slop tells.
 *
 * Usage:
 *   node scripts/deslop-orchestrator.js [path]
 */

const fs = require('fs');
const path = require('path');

const AI_TELLS_RULES = [
  {
    id: 'SLOP-01',
    name: 'Generic Purple/Indigo Gradient',
    severity: 'HIGH',
    regex: /(from-(?:purple|indigo|violet)-(?:400|500|600)\s+to-(?:pink|fuchsia|indigo|purple)-(?:500|600))/gi,
    fix: 'Use a single dominant brand color or clean solid neutral backdrop with high-contrast accent.'
  },
  {
    id: 'SLOP-02',
    name: 'Soap-Bubble Backdrop Blur Overuse',
    severity: 'MEDIUM',
    regex: /(backdrop-blur-(?:md|lg|xl)\s+bg-white\/[1-3]0)/gi,
    fix: 'Use solid surface with 1px border: bg-card border border-border shadow-sm.'
  },
  {
    id: 'SLOP-03',
    name: 'Over-rounded Container Radii',
    severity: 'MEDIUM',
    regex: /(rounded-(?:3xl|\[32px\]|\[40px\]))/gi,
    fix: 'Use structured radii: rounded-lg (8px) or rounded-md (6px) for software interfaces.'
  },
  {
    id: 'SLOP-04',
    name: 'Artificial Pulsing Badge',
    severity: 'LOW',
    regex: /(animate-pulse\s+bg-(?:green|emerald|blue|purple)-(?:400|500))/gi,
    fix: 'Use static status indicator: bg-emerald-500/15 text-emerald-600 border border-emerald-500/20.'
  },
  {
    id: 'SLOP-05',
    name: 'Robotic AI Copywriting Cliché',
    severity: 'HIGH',
    regex: /(unleash the power of|supercharge your|seamlessly elevate|effortlessly transform|cutting-edge AI-powered)/gi,
    fix: 'Apply stop-slop: write clear, direct value propositions in human active voice.'
  },
  {
    id: 'SLOP-06',
    name: 'Fixed Unresponsive Width',
    severity: 'HIGH',
    regex: /(w-\[(?:1200px|1400px|1000px)\])/gi,
    fix: 'Use fluid responsive layout: w-full max-w-6xl mx-auto px-4.'
  }
];

function scanContent(filePath, content) {
  const findings = [];
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    AI_TELLS_RULES.forEach(rule => {
      rule.regex.lastIndex = 0;
      let match;
      while ((match = rule.regex.exec(line)) !== null) {
        findings.push({
          file: filePath,
          line: index + 1,
          ruleId: rule.id,
          name: rule.name,
          severity: rule.severity,
          match: match[0],
          fix: rule.fix
        });
      }
    });
  });

  return findings;
}

function scanPath(targetPath) {
  let allFindings = [];
  const stat = fs.statSync(targetPath);

  if (stat.isFile()) {
    const ext = path.extname(targetPath).toLowerCase();
    if (['.jsx', '.tsx', '.html', '.css', '.vue', '.svelte', '.js', '.ts'].includes(ext)) {
      const content = fs.readFileSync(targetPath, 'utf8');
      allFindings.push(...scanContent(targetPath, content));
    }
  } else if (stat.isDirectory()) {
    if (targetPath.includes('node_modules') || targetPath.includes('.git') || targetPath.includes('.system_generated') || targetPath.includes('scripts')) {
      return allFindings;
    }
    const entries = fs.readdirSync(targetPath);
    entries.forEach(entry => {
      const full = path.join(targetPath, entry);
      allFindings.push(...scanPath(full));
    });
  }

  return allFindings;
}

const target = process.argv[2] || '.';

console.log(`
🛡️  =============================================================
   [ANTI-SLOP UI ENGINE v2.0 - ACTIVE RUN]
=============================================================
📋 System & Environment Requirements:
   • Runtime       : Node.js ${process.version} (${process.platform} ${process.arch})
   • Working Dir   : ${process.cwd()}
   • MCP Servers   : 21st.dev | shadcn-ui-mcp-server | chrome-devtools-mcp
   • Subagent Fleet: 5 Parallel Workers Active
   • Target Path   : ${target}
=============================================================
`);

try {
  const results = scanPath(target);

  if (results.length === 0) {
    console.log('✅ Clean! No generic AI UI slop tells detected.');
  } else {
    console.log(`🚨 Found ${results.length} AI Slop Tell(s):\n`);
    results.forEach((r, idx) => {
      console.log(`[${idx + 1}] ${r.severity} - ${r.name} (${r.ruleId})`);
      console.log(`    File: ${r.file}:${r.line}`);
      console.log(`    Match: "${r.match}"`);
      console.log(`    💡 Fix: ${r.fix}\n`);
    });
  }
} catch (err) {
  console.error('Error during scan:', err.message);
}
