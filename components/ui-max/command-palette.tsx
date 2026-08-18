'use client';

import React, { useEffect, useState } from 'react';
import { Search, Terminal, Zap, Shield, Cpu, X, CornerDownLeft } from 'lucide-react';

function playMicroSound(freq = 1200) {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.015);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.015);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.015);
  } catch {}
}

export function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        playMicroSound(1400);
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { icon: Zap, label: 'Run UI MAX God-Mode', shortcut: '⌘G' },
    { icon: Terminal, label: 'Audit AI Slop Tells', shortcut: '⌘S' },
    { icon: Cpu, label: 'Inject Linear Brand DNA', shortcut: '⌘L' },
    { icon: Shield, label: 'Verify WCAG AAA Contrast', shortcut: '⌘A' }
  ].filter(a => a.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-xl rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden font-sans text-zinc-100">
        {/* Input Bar */}
        <div className="flex items-center px-4 border-b border-zinc-800">
          <Search className="w-5 h-5 text-zinc-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search actions..."
            className="w-full py-4 bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none"
            autoFocus
          />
          <button onClick={onClose} className="p-1 rounded text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="p-2 max-h-72 overflow-y-auto space-y-1">
          {actions.map((item, idx) => (
            <button
              key={idx}
              onClick={() => { playMicroSound(1600); onClose(); }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors group text-left"
            >
              <span className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-emerald-400" />
                {item.label}
              </span>
              <span className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300">
                {item.shortcut}
              </span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
          <span>Navigate: ↑ ↓</span>
          <span className="flex items-center gap-1">Select: <CornerDownLeft className="w-3 h-3" /></span>
        </div>
      </div>
    </div>
  );
}
