# ⚡ Parallel Subagent Dispatch & Concurrency Protocol

This document defines how the **Lead UI Architect** (`anti-slop-ui-architect`) spawns and manages parallel subagents to execute complex, multi-component redesigns without blocking the main workflow.

---

## 🏗️ Parallel Subagent Architecture

```
                 ┌──────────────────────────────────────┐
                 │ anti-slop-ui-architect (Lead Agent)  │
                 │   (Orchestrator & Decision Core)     │
                 └──────────────────┬───────────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       ▼                            ▼                            ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│ subagent-        │       │ subagent-        │       │ subagent-        │
│ ui-auditor       │       │ browser-qa       │       │ copy-editor      │
│ (Fast Code Scan) │       │ (Live Render/CSS)│       │ (Prose Cleanup)  │
└────────┬─────────┘       └────────┬─────────┘       └────────┬─────────┘
         │                          │                          │
         └──────────────────────────┼──────────────────────────┘
                                    │
                                    ▼
                 ┌──────────────────────────────────────┐
                 │ SYNCHRONIZATION BARRIER (Phase 3)    │
                 │ Commit Direction + HSL Token Palette │
                 └──────────────────┬───────────────────┘
                                    │
       ┌────────────────────────────┴────────────────────────────┐
       ▼                                                         ▼
┌──────────────────────────────┐              ┌──────────────────────────────┐
│ subagent-component-builder-A │              │ subagent-component-builder-B │
│ (Section: Hero + Navigation) │              │ (Section: Bento Grid/Pricing)│
└──────────────┬───────────────┘              └──────────────┬───────────────┘
               │                                             │
               └──────────────────────┬──────────────────────┘
                                      │
                                      ▼
                 ┌──────────────────────────────────────┐
                 │ subagent-a11y-polish (Final QA)      │
                 │ (WCAG AAA Contrast, Focus, Polish)   │
                 └──────────────────────────────────────┘
```

---

## 🔄 Concurrency Roles & Dispatch Matrix

| Subagent Name | Role / Task | Invocation Timing | Skills Used |
| :--- | :--- | :--- | :--- |
| **`subagent-ui-auditor`** | Pemindaian statis AST & deteksi 40+ AI tells | Concurrently pada Phase 1 | `avoid-ai-design`, `styleseed`, `improve` |
| **`subagent-browser-qa`** | Buka browser live, ambil screenshot, & ukur token CSS | Concurrently pada Phase 1 & 2 | `browser-fallback-inspector` |
| **`subagent-copy-editor`** | De-slop semua copy teks & headline menjadi *active voice* | Concurrently pada Phase 2 & 4 | `stop-slop` |
| **`subagent-component-builder`** | Membangun section UI terpisah secara paralel (Hero, Bento, dll.) | Concurrently pada Phase 4 | `shadcn`, `frontend-design`, `ui-ux-pro-max`, `refactoring-ui` |
| **`subagent-a11y-polish`** | Validasi kontras WCAG AAA, focus ring, dan alignment | Concurrently pada Phase 5 | `hallmark`, `impeccable`, `grill-with-docs` |

---

## ⚙️ Partitioning Guidelines for Multi-Section Redesigns
When handling a complete page or application:
1. **Partition by Section**:
   - Worker 1: `Navigation` + `HeroSection`
   - Worker 2: `FeatureBentoGrid` + `InteractiveDemo`
   - Worker 3: `PricingTable` + `FAQAccordion` + `Footer`
2. **Shared Token Source**: All workers import the single unified theme tokens formulated by the Lead Architect in Phase 3.
3. **Merge & Verification**: The Lead Architect merges section files and dispatches `subagent-a11y-polish` for the final quality gate.
