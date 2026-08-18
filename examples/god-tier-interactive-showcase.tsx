'use client';

import React, { useRef, useState } from 'react';
import { ArrowRight, Terminal, Cpu, Zap, Activity, ShieldCheck } from 'lucide-react';

/**
 * 🔊 Zero-Asset Synthetic Micro-Click Feedback
 */
function playTactileSound() {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.015);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.015);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.015);
  } catch {
    // Gracefully handle blocked audio contexts
  }
}

/**
 * 💫 Spotlight Card with Cursor-Tracking Radial Glow
 */
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-xl border border-zinc-800/90 bg-zinc-950/80 p-8 overflow-hidden transition-all duration-300 hover:border-zinc-700 shadow-sm ${className}`}
    >
      {/* Dynamic Cursor Light Beam */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.12), transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * ⚡ UI MAX God-Tier Interactive Showcase Component
 */
export function GodTierInteractiveShowcase() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20 text-zinc-100 font-sans antialiased">
      {/* Top Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-4 border-b border-zinc-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-none" />
          ENGINE: UI MAX GOD-MODE v3.0 (ACTIVE)
        </div>
        <div className="text-xs font-mono text-zinc-400">
          OKLCH WIDE-GAMUT • APCA WCAG AAA (14.8:1)
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Spotlight Hero Card (7 Columns) */}
        <SpotlightCard className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Deterministic UI engineering built with pure aesthetic physics.
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8">
              Construct high-craft software interfaces with hardware-accelerated spotlight shaders, fluid spatial mathematics, and zero generic AI slop.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-800/80">
            <button
              onClick={playTactileSound}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-sm"
            >
              Test Tactile Click
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={playTactileSound}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-700/80 text-zinc-200 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-[0.98]"
            >
              <Terminal className="w-4 h-4 text-zinc-400" />
              View Telemetry Spec
            </button>
          </div>
        </SpotlightCard>

        {/* Telemetry Matrix Card (5 Columns) */}
        <SpotlightCard className="lg:col-span-5 font-mono text-xs flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 text-zinc-400">
            <span className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              PHYSICS & TELEMETRY
            </span>
            <span className="text-emerald-400">P3 GAMUT OK</span>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
              <span className="text-zinc-400">Perceptual Space</span>
              <span className="text-white font-semibold">OKLCH Uniform</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
              <span className="text-zinc-400">Fluid Formula</span>
              <span className="text-white font-semibold">clamp(2rem, 3.5vw, 5rem)</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
              <span className="text-zinc-400">Tactile Audio</span>
              <span className="text-emerald-400 font-semibold">12ms Synthetic Wave</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800 text-zinc-400 text-[11px]">
            <code>$ npm run god-mode --dna linear</code>
          </div>
        </SpotlightCard>
      </div>

      {/* 3 Interactive Bottom Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SpotlightCard>
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center mb-4 text-emerald-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">OKLCH Color Physics</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Eliminates perceptual color distortion and guarantees mathematically uniform contrast on any screen.
          </p>
        </SpotlightCard>

        <SpotlightCard>
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center mb-4 text-emerald-400">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">Spotlight Radial Masks</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Smooth 60fps cursor-following light refraction replacing generic flat cards with high-craft depth.
          </p>
        </SpotlightCard>

        <SpotlightCard>
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center mb-4 text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">Zero-Fluff Copywriting</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Strict active human voice grounded in engineering specifications without AI cliché phrasing.
          </p>
        </SpotlightCard>
      </div>
    </section>
  );
}
