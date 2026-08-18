# 📖 Comprehensive Catalog of AI UI Slop Tells & Precise Fixes

This catalog documents the specific, repeatable code and design anti-patterns commonly produced by AI models and outlines the exact transformations required.

---

## 1. Color & Gradient Slop

### Tell 1.1: The Omnipresent Purple/Indigo/Violet Gradient
- **Symptom**: `bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500`, `bg-gradient-to-tr from-violet-600 to-fuchsia-600`.
- **Why it looks AI**: It is the default training bias reflex of Claude/GPT when prompted for "modern", "futuristic", or "sleek".
- **Fix**: Replace with a solid, grounded background and an intentional single accent color. Use CSS variables defined via TweakCN.

### Tell 1.2: Unanchored Multicolor Rainbows
- **Symptom**: Every card, badge, and button uses a different bright tailwind color (one green, one blue, one purple, one amber).
- **Why it looks AI**: Lack of an intentional color system; AI tries to make things "vibrant" by scattering hues.
- **Fix**: Enforce the 60-30-10 rule: 60% neutral background/surface, 30% structural contrast (slate/zinc/white/black), 10% single brand accent.

### Tell 1.3: Washed Out Low-Contrast Grays
- **Symptom**: `text-gray-400` on `bg-gray-900` or `text-zinc-500` on `bg-zinc-800` where contrast is below 3.5:1.
- **Why it looks AI**: Overzealous dark mode mimicking dribbble mockups without checking accessibility.
- **Fix**: Use crisp contrast: `text-zinc-100` / `text-zinc-200` for body, `text-zinc-400` for secondary metadata, minimum 4.5:1 ratio.

---

## 2. Component & Layout Slop

### Tell 2.1: Soap-Bubble Glassmorphism Everywhere
- **Symptom**: `backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-3xl` on basic cards.
- **Why it looks AI**: Superficial decoration that reduces legibility and performance.
- **Fix**: Solid background cards (`bg-card` or `bg-zinc-900/90`) with crisp `border border-border` (1px) and tight shadow `shadow-sm` or `shadow-md`.

### Tell 2.2: The Lazy 3-Column Feature Grid
- **Symptom**: 3 identical cards: [Centered Icon in Circle] -> [H3 Title] -> [2-3 sentences of generic explanation].
- **Why it looks AI**: Zero thought given to the actual information structure.
- **Fix**:
  - Convert to an **asymmetrical Bento Grid** with one hero card (2-column span) containing a live interactive preview or stat counter.
  - Or use a **horizontal feature strip** with tabs or segmented control.

### Tell 2.3: Giant Pill Radii on Content Containers
- **Symptom**: `rounded-3xl` or `rounded-[32px]` on data tables, dashboards, and form inputs.
- **Why it looks AI**: Infant-toy aesthetic applied inappropriately to serious software.
- **Fix**: Use structured radii: `rounded-md` (6px) or `rounded-lg` (8px) for SaaS dashboards; `rounded-none` or `rounded-sm` for technical/developer tools.

---

## 3. Typography & Copy Slop

### Tell 3.1: Monotonous Inter / Roboto
- **Symptom**: Inter font applied unconditionally from `h1` down to captions.
- **Why it looks AI**: Reliance on standard browser boilerplate.
- **Fix**: Introduce contrast with tailored font pairings:
  - Technical: *Space Grotesk* (Headings) + *Geist / JetBrains Mono* (Body)
  - Editorial: *Playfair Display / Fraunces* (Headings) + *Plus Jakarta Sans* (Body)
  - Modern Product: *Outfit / Syne* (Headings) + *Inter / DM Sans* (Body)

### Tell 3.2: Cliché AI Buzzword Marketing Copy
- **Symptom**: "Supercharge your workflow", "Unleash AI-powered potential", "Seamlessly elevate your digital transformation".
- **Why it looks AI**: Hollow LLM buzzwords.
- **Fix**: Apply `stop-slop` principles — write clear, concrete value propositions stating what the product literally does in active voice.

---

## 4. Interaction & Motion Slop

### Tell 4.1: Gratuitous Infinite Pulsing Badges
- **Symptom**: `<span className="animate-pulse bg-green-500 rounded-full" />` next to non-realtime text.
- **Why it looks AI**: Fake urgency.
- **Fix**: Static status badge (`bg-emerald-500/15 text-emerald-600 border border-emerald-500/20`) with clean micro-dot.

### Tell 4.2: Lack of Keyboard & Focus States
- **Symptom**: Buttons without `focus-visible:ring-2 focus-visible:ring-offset-2` or `disabled:cursor-not-allowed`.
- **Why it looks AI**: Generated purely for visual appearance without testing usability.
- **Fix**: Use standard shadcn button variants or Radix primitives with complete interactive states.
