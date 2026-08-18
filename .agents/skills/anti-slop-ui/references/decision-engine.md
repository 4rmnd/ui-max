# 🧠 Autonomous UI Decision Engine

The Autonomous UI Decision Engine guides the agent to make confident design and technical choices automatically without asking redundant questions.

---

## 1. Automated Tech Stack Detection

```
Inspect Files in Project
 ├── `package.json` contains `next` ──────────► React 19 / Next.js App Router (Tailwind + shadcn)
 ├── `package.json` contains `vite` + `react` ─► Vite React (Tailwind / CSS Modules)
 ├── `package.json` contains `vue` / `nuxt` ───► Vue 3 / Nuxt (Tailwind / shadcn-vue)
 ├── `package.json` contains `svelte` ────────► SvelteKit (Tailwind / shadcn-svelte)
 └── `index.html` without bundler ────────────► Vanilla HTML5 + Modern CSS3 + Glassmorphism/Bento
```

---

## 2. Autonomous Archetype Selection Algorithm

| Product Context Clues in Code / Prompt | Auto-Selected Archetype |
| :--- | :--- |
| Contains code snippets, terminals, API keys, JSON, Docker, Git | **1. Industrial Technical** |
| Dashboard, metrics, charts, billing, analytics, CRM | **2. Swiss International** or **8. Bento Data Matrix** |
| Blog, documentation, stories, markdown reader, poetry, essays | **3. Warm Editorial** |
| Web3, portfolio, agency, creative showcase, meme, social | **4. Technical Neobrutalism** |
| Dark gaming interface, bot monitoring, network scanner | **5. Deep OLED Cyber** |
| Luxury store, real estate listing, portfolio, jewelry | **6. Minimalist Luxury** |
| Task manager, notes, calendar, kanban board | **7. Clean Modern Nordic** |

---

## 3. Decision Matrix: When to Ask vs When to Execute

```
Operation Type                    Action Policy
─────────────────────────────────────────────────────────────────────────────
• Color token refinement          ► EXECUTE IMMEDIATELY
• Typography upgrade              ► EXECUTE IMMEDIATELY
• Card / Bento grid refactor      ► EXECUTE IMMEDIATELY
• Adding micro-interactions       ► EXECUTE IMMEDIATELY
• Fixing contrast / accessibility ► EXECUTE IMMEDIATELY
• De-slopping copywriting         ► EXECUTE IMMEDIATELY
• Adding missing shadcn components► EXECUTE IMMEDIATELY
• Deleting database / core API    ► ⚠️ ASK CONFIRMATION FIRST
• Changing global routing arch    ► ⚠️ ASK CONFIRMATION FIRST
• Replacing major framework       ► ⚠️ ASK CONFIRMATION FIRST
```
