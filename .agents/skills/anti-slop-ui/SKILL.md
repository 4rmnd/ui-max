---
name: anti-slop-ui
description: Autonomous UI Revamp and Anti-AI Slop Engineering Agent. Automatically detects and eliminates generic AI design patterns ("AI slop", purple gradients, floating cards, default Inter font, boring 3-column features, robotic copy), selects an opinionated aesthetic direction and custom color palette, and refactors components into world-class, distinctive interfaces. Use whenever asked to "perbaiki UI", "deslop UI", "make UI look professional/less AI", "redesign this page/component", "audit and fix frontend", or when improving any web interface.
---

# 🛡️ Anti-Slop UI: Autonomous UI Engineering & Revamp Engine

An autonomous, end-to-end design intelligence agent that eliminates AI design slop, transforms generic interfaces into distinctive, high-craft digital products, and coordinates the workspace's entire UI toolkit seamlessly.

---

## ⚡ Autonomous Operation Contract

1. **Zero Unnecessary Friction**: When given a UI file, component, or URL, the agent **immediately makes autonomous decisions** (detects framework, audits AI tells, selects aesthetic archetype, formulates HSL palette, refactors components, and de-slops copy) and executes without requiring multi-step user prompts.
2. **Step 0 Requirements & Transparency Banner**: At the start of every run, the agent MUST immediately output a concise, transparent health-check banner displaying the detected stack, MCP server status, active subagents, and requirements status before proceeding to Phase 1.
3. **Confirmation Gate for Major Breaking Changes**: If an operation involves major structural breakage (e.g. deleting critical files, altering global routes, or fundamental architecture rewrites), ask the user first. For all visual improvements, design enhancements, and code refactorings: **execute immediately**.

---

## 📋 Step 0: Transparent Requirements & Health-Check Output (Mandatory on Every Run)

Whenever this skill executes, output this structured transparency header:

```markdown
🛡️ **[ANTI-SLOP UI ENGINE — ACTIVE RUN]**
──────────────────────────────────────────────────────────────────
📋 **Environment & Requirements Status:**
• **Tech Stack Detected**: [e.g. Next.js 15 / React 19 / Tailwind CSS v4 / shadcn/ui]
• **MCP Servers Active**: `shadcn` (Component Registry) | `chrome-devtools` (Visual Browser QA)
• **Parallel Subagents**: 5 Workers Active (`auditor`, `browser-qa`, `copy-editor`, `builder`, `a11y-polish`)
• **Selected Archetype**: [e.g. Swiss International / Industrial Technical / Warm Editorial]
• **Design Standards**: WCAG AAA Contrast (>=7:1) | Responsive Mobile-First | Active Human Voice
──────────────────────────────────────────────────────────────────
```

---

## 🔄 Autonomous 5-Phase Execution Pipeline

```
[Target Component / Page / URL]
               │
               ▼
┌─────────────────────────────────────────────────────────────┐
│ PHASE 1: DEEP RECON & AI SLOP AUDIT                         │
│ Skills: avoid-ai-design, styleseed, stop-slop               │
│ • Detect: from-purple-500, blurred cards, Inter default,    │
│   gratuitous Lucide icons, 3-column feature grid, AI copy.  │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ PHASE 2: VISUAL QA & DOM INSPECTION                         │
│ Skills: browser-fallback-inspector, chrome-devtools MCP     │
│ • Live inspect rendered layout / capture screenshot.        │
│ • Extract computed CSS, contrast ratios, and spacing rhythm.│
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ PHASE 3: OPINIONATED DIRECTION & TOKEN SYNTHESIS            │
│ Skills: frontend-design, ui-ux-pro-max, taste-skill, TweakCN│
│ • Auto-select 1 of 12 Archetypes (Swiss, Industrial, Cyber, │
│   Warm Editorial, Modern Neobrutalism, Minimalist Luxury).  │
│ • Auto-formulate curated HSL color tokens & font pairings.  │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ PHASE 4: SURGICAL REFACTOR & COMPONENT COMPOSITION          │
│ Skills: shadcn, refactoring-ui, interface-design, impeccable│
│ • Replace generic cards with semantic, structured layouts.  │
│ • Add micro-interactions (hover, active, focus-visible).    │
│ • Implement dark/light theme tokens and WCAG AAA contrast.  │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ PHASE 5: COPY DE-SLOP & PIXEL POLISH VERIFICATION          │
│ Skills: stop-slop, hallmark                                 │
│ • Eliminate throat-clearing openers & robotic AI marketing. │
│ • Verify optical alignment, typography rhythm, and polish.  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚫 Catalog of 10 Critical AI Tells (Auto-Fixed on Sight)

| # | AI Slop Pattern | Why It Fails | Autonomous Anti-Slop Fix |
| :--- | :--- | :--- | :--- |
| **1** | `bg-gradient-to-r from-purple-600 to-indigo-600` | Universal AI tell; zero brand identity. | Single bold dominant color with high-contrast accent or solid neutral backdrop. |
| **2** | `rounded-3xl shadow-2xl backdrop-blur-md` on everything | Floating soapy plastic look; poor contrast. | Purposeful radii (`rounded-none`, `rounded-sm`, or `rounded-lg`) with crisp 1px borders. |
| **3** | Default `Inter` or browser system font everywhere | Unmemorable, template default. | Intentional font pairings: Display (e.g. *Outfit, Space Grotesk, Plus Jakarta Sans, Syne*) + Body (e.g. *Geist, JetBrains Mono, Inter*). |
| **4** | Lucide icon in a colored rounded circle before every heading | Visual clutter trying to compensate for weak layout. | Typography hierarchy + data-rich tables, stats, or clean visual dividers. |
| **5** | Formulaic 3-column feature grid (Icon + Title + 2-line lorem) | Lazy symmetrical layout without information hierarchy. | Asymmetric Bento grid, timeline, comparison table, or interactive demo widget. |
| **6** | Flashing / pulsing animated badge on static content | Distracting artificial urgency. | Subtle micro-interaction on hover or purposeful status indicator. |
| **7** | Low-contrast gray text (`text-zinc-400` on dark gray) | Unreadable; fails WCAG accessibility. | High-contrast hierarchy: Primary `text-foreground`, Secondary `text-muted-foreground` (>4.5:1 ratio). |
| **8** | Unresponsive desktop-only fixed widths (`w-[1200px]`) | Broken layout on mobile/tablet. | Mobile-first fluid grids, CSS flexbox, container queries, and auto-fit grids. |
| **9** | Generic AI marketing copy ("Unleash the power of...", "Elevate your...") | Hollow, predictable corporate noise. | Direct, factual benefit statements written with human active voice. |
| **10** | Missing interactive states (no active, focus, disabled, loading) | Interface feels dead and unresponsive. | Complete interactive states: `:hover`, `:active`, `:focus-visible`, `disabled:opacity-50`. |

---

## 🎨 Autonomous Aesthetic Archetype Selection

When refactoring a UI, the agent automatically maps the domain to one of these signature directions:

1. **Sharp Industrial / Technical**: Monospaced accents, hairline borders, dense telemetry, high contrast, muted slate & amber/emerald badge accents.
2. **Modern Swiss Minimalist**: Grid-strict layouts, bold grotesk headlines, generous whitespace, stark black/white with one primary electric accent.
3. **Warm Editorial**: Elegant serif/display type, warm beige/sand background, olive/terracotta/burgundy palette, relaxed reading rhythm.
4. **Clean Technical Neobrutalism**: High-contrast solid borders (2px), sharp drop shadows (no blur), vibrant pastels, punchy typography.
5. **Deep Tactical Cyber**: Pure OLED black (`#09090b`), glowing hairline borders, neon cyan/lime micro-accents, data-first widgets.
6. **Minimalist SaaS Luxury**: Muted neutral tones, refined typography scale, subtle surface elevation (1px border + faint inset shadow), silky transitions.

---

## 🛠️ Step-by-Step Autonomous Execution Guide

### Step 1: Scan & Detect
Run the built-in scanner or inspect AST:
```bash
node scripts/deslop-orchestrator.js <file-or-dir>
```

### Step 2: Auto-Formulate Design Tokens
Generate color tokens using TweakCN HSL standards:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --border: 240 5.9% 90%;
  --radius: 0.5rem;
}
.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 217.2 91.2% 59.8%;
  --border: 240 3.7% 15.9%;
}
```

### Step 3: Refactor Code & Verify
1. Rewrite markup with clean semantic tags (`header`, `main`, `section`, `article`, `footer`).
2. Integrate `shadcn/ui` components or clean Tailwind utilities.
3. Apply `stop-slop` to all textual content.
4. Verify accessibility and responsiveness.
