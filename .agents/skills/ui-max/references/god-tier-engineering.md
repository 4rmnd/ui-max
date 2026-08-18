# ⚡ UI MAX: God-Tier Engineering & Micro-Interaction Reference (v3.0)

This reference contains production-ready implementation recipes for building interfaces that feel extraordinary, tactile, and completely free of AI slop.

---

## 1. 💫 Spotlight Border Shader (Cursor-Tracking Radial Mask)

Instead of static flat borders, use cursor-following radial gradient masks:

```tsx
import React, { useRef, useState } from 'react';

export function SpotlightCard({ children, className = "" }) {
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
      className={`relative rounded-xl border border-zinc-800 bg-zinc-950 p-8 overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Spotlight Glow Mask */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
```

---

## 2. 🔊 Synthetic Web Audio Micro-Click (Zero External MP3s)

Generate instant, low-latency synthetic haptic clicks using mathematical waveforms:

```ts
/**
 * Plays a clean, crisp 12ms synthetic micro-click sound for tactile UI feedback.
 */
export function playTactileClick(pitch = 1200, volume = 0.04) {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(pitch, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.015);

    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.015);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.015);
  } catch {
    // Graceful fallback on non-audio environments
  }
}
```

---

## 3. 🧠 OKLCH Perceptual Theme Tokens

Use CSS Relative Color Syntax for mathematically uniform UI states:

```css
:root {
  /* Surface Stack */
  --canvas: oklch(0.12 0.005 285);
  --surface: oklch(0.16 0.008 285);
  --surface-raised: oklch(0.20 0.010 285);
  
  /* Brand Accent */
  --accent: oklch(0.65 0.20 260);
  --accent-hover: oklch(from var(--accent) calc(l + 0.08) c h);
  --accent-active: oklch(from var(--accent) calc(l - 0.08) c h);
  --accent-glow: oklch(from var(--accent) l c h / 0.25);
  
  /* Hairlines */
  --border: oklch(0.26 0.010 285);
  --border-highlight: oklch(1 0 0 / 0.08);
}
```

---

## 4. 📐 Fluid `clamp()` Typography Scale

```css
:root {
  --text-display: clamp(2.5rem, 1.8rem + 3.5vw, 5rem);     /* 40px - 80px */
  --text-title: clamp(1.75rem, 1.3rem + 2.2vw, 3rem);      /* 28px - 48px */
  --text-headline: clamp(1.25rem, 1.05rem + 1vw, 1.75rem);  /* 20px - 28px */
  --text-body: clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem); /* 15px - 17px */
}
```

---

## 5. 💫 Spring Physics Animation Constants

```ts
export const SPRING_TRANSITIONS = {
  tactile: "cubic-bezier(0.16, 1, 0.3, 1)",
  snappy: "cubic-bezier(0.25, 1, 0.5, 1)",
  bouncy: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};
```
