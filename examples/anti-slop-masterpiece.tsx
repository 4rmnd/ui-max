import React from 'react';
import { ArrowUpRight, CheckCircle2, Terminal, Activity, Layers, Cpu } from 'lucide-react';

/**
 * ✨ Transformed Anti-Slop Component (Archetype: Bento Data Matrix + Industrial Technical)
 * Refactored autonomously by anti-slop-ui
 */
export function ModernProductionHero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 text-zinc-100">
      {/* Top Status & Vernacular Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-800/80">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-tight">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          SYSTEM STATUS: ALL ENGINES OPERATIONAL
        </div>
        <div className="text-xs font-mono text-zinc-400">
          NODE 24.x • TAILWIND v4 • SHADCN COMPLIANT
        </div>
      </div>

      {/* Main Grid: Asymmetric Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
        {/* Left Hero Block (7 Columns) */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-sm flex flex-col justify-between">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Deterministic infrastructure for high-scale agentic code.
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Execute parallel subagent pipelines with zero-friction orchestration, strict WCAG AAA contrast guarantees, and verified production code outputs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-800/80">
            <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
              Deploy Pipeline
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400">
              <Terminal className="w-4 h-4 text-zinc-400" />
              View Benchmark Logs
            </button>
          </div>
        </div>

        {/* Right Telemetry Widget (5 Columns) */}
        <div className="lg:col-span-5 p-6 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 text-zinc-400">
            <span className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              LIVE TELEMETRY
            </span>
            <span className="text-[10px] text-zinc-400">SYNC 12ms</span>
          </div>

          {/* Metric Rows */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between p-2.5 rounded-md bg-zinc-900/80 border border-zinc-800/60">
              <span className="text-zinc-400">Parallel Workers</span>
              <span className="text-white font-semibold">5 Dispatched</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-md bg-zinc-900/80 border border-zinc-800/60">
              <span className="text-zinc-400">Contrast Ratio</span>
              <span className="text-emerald-400 font-semibold">14.2:1 (AAA Pass)</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-md bg-zinc-900/80 border border-zinc-800/60">
              <span className="text-zinc-400">Render Latency</span>
              <span className="text-white font-semibold">0.4ms</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-[11px] leading-relaxed">
            <code>$ npx skills add anti-slop-ui --agent *</code>
          </div>
        </div>
      </div>

      {/* Bottom 3 Asymmetric Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 text-emerald-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">Zero-Friction Engine</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Auto-detects framework variants and selects intentional color tokens without configuration overhead.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 text-emerald-400">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">Bento Grid Composition</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Structured information hierarchy prioritizing density, clear data grouping, and readability.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">Verified Human Tone</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Eliminates LLM filler phrases and delivers crisp, active-voice statements grounded in technical facts.
          </p>
        </div>
      </div>
    </section>
  );
}
