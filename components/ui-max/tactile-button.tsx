'use client';

import React from 'react';

function playClickSound() {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.015);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.015);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.015);
  } catch {}
}

export interface TactileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
}

export function TactileButton({
  children,
  variant = 'primary',
  className = '',
  onClick,
  ...props
}: TactileButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playClickSound();
    if (onClick) onClick(e);
  };

  const variants = {
    primary: 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold focus-visible:ring-emerald-400 shadow-sm',
    secondary: 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 font-medium focus-visible:ring-zinc-400',
    ghost: 'hover:bg-zinc-900 text-zinc-300 hover:text-white focus-visible:ring-zinc-400',
    danger: 'bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 focus-visible:ring-red-400'
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
