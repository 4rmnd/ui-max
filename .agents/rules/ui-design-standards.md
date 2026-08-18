---
name: ui-design-standards
trigger: always_on
description: Core UI/UX design standards, anti-slop rules, themes, and curated inspiration resources for building world-class interfaces.
---

# UI Design Standards & Curated Resources

When building or updating user interfaces, adhere to these standards and utilize the installed skills and design resources:

---

## 🎨 Theme & Styling Configuration
- **Custom Theme Generator**: [TweakCN Theme Editor](https://tweakcn.com/editor/theme) — customize color tokens, radii, fonts, and HSL variables.
- **Community Themes**: [TweakCN Community](https://tweakcn.com/community) — curated community presets and palettes.
- **Design Prompts**: [Design Prompts Dev](https://www.designprompts.dev/) — prompt engineering strategies for UI aesthetics.

---

## 💎 Curated Inspiration Directory
Use these reference sites for aesthetic directions, micro-interactions, layouts, and typography:
- **General & Editorial**: [Inspora Design](https://inspora.design) | [Posts Design](https://posts.design) | [Recent Design](https://recent.design)
- **Dark Mode Specialists**: [Dark Design](https://dark.design)
- **App & Native UI**: [MacApp Supply](https://macapp.supply)
- **Component Specific**: [Footer Design](https://footer.design) | [SupaHero Hero Sections](https://supahero.io) | [Load More Patterns](https://loadmo.re)
- **Real App Screens**: [Refero Design](https://refero.design)

---

## ⚡ Installed Agent Skills
The workspace is configured with 19 agent skills located in `.agents/skills/`:
1. **`anti-slop-ui`**: **[MASTER AUTONOMOUS AGENT]** Zero-friction autonomous UI redesign & anti-AI slop engine (5-phase pipeline).
2. **`browser-fallback-inspector`**: Proaktif menginspeksi & men-scrape website via browser live saat scraping HTTP biasa gagal / terblokir.
3. **`skill-creator`** (`anthropics/skills`): Guide and automate the creation, evaluation, and optimization of AI agent skills.
4. **`shadcn`** (`shadcn/ui`): Official component integration, registry lookup, and component customization.
5. **`stop-slop`** (`hardikpandya/stop-slop`): Prose & copy anti-AI slop elimination.
6. **`avoid-ai-design`**: UI anti-AI slop detection and rewrite engine.
7. **`clone-website`** (`JCodesMore/ai-website-cloner-template`): Reverse-engineers and rebuilds any website into modern Next.js/Tailwind components.
8. **`grill-with-docs`** (`mattpocock/skills`): Rigorous architectural questioning and ADR/documentation updater.
9. **`improve`** (`shadcn/improve`): Codebase auditor producing structured implementation plans.
10. **`migrate-radix-to-base`**: Migration helper from Radix primitives to Base UI.
11. **`frontend-design`**: Distinctive, opinionated visual identity and typography principles.
12. **`ui-ux-pro-max`**: Comprehensive design system, micro-interactions, layout rhythms, and color harmony.
13. **`taste-skill`**: High-craft aesthetic standards and design sensibility.
14. **`interface-design`**: Design system tokens, component hierarchies, and interactive states.
15. **`refactoring-ui`**: Practical UI visual refactoring rules (hierarchy, contrast, whitespace).
16. **`hallmark`**: Visual polish and layout standards.
17. **`impeccable`**: Pixel-perfect implementation and precision details.
18. **`designer-process`**: End-to-end design thinking and execution workflow.
19. **`styleseed`**: Design seeds and aesthetic direction jumpstarters.

---

## 🛠️ MCP Servers Configuration
The following MCP servers are configured in `.mcp.json` and `.agents/mcp_config.json`:
- **`21st`** (`21st.dev`): `https://21st.dev/api/mcp` (Registri komponen modern & inspirasi UI)
- **`shadcn`**: `npx -y shadcn-ui-mcp-server`
- **`chrome-devtools`**: `npx -y chrome-devtools-mcp@latest`
