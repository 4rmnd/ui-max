---
name: browser-fallback-inspector
description: Proactively inspect, scrape, and extract content from websites using live browser automation (chrome-devtools MCP, browser tools) whenever standard static HTTP requests or curl/read_url_content fail (due to 403 Forbidden, 404, Cloudflare/bot protection, Single Page Apps, JavaScript dynamic hydration, cookie paywalls, or blocked scrapers). Use this skill when scraping fails, when extracting design inspiration/tokens from reference sites (Inspora, Refero, Dark Design, Supahero, Tweakcn), or when needing visual screenshots, computed CSS, and live interactive state inspection.
---

# Browser Fallback Inspector (Multi-Engine Resilience Hierarchy)

A robust, fail-safe skill for inspecting, extracting, and scraping web pages using a **4-Tier Multi-Engine Browser Automation Hierarchy** whenever standard HTTP requests (`read_url_content`, `curl`, `fetch`) fail or return incomplete content.

---

## 🌐 4-Tier Multi-Engine Browser Hierarchy

When scraping or inspecting a target URL, the agent automatically shifts between 4 execution engines depending on the environment:

| Engine Tier | Technology | Best Used For | Fallback Trigger |
| :--- | :--- | :--- | :--- |
| **Tier 1: Native MCP** | `chrome-devtools` MCP | Live DOM inspection, computed CSS tokens, pixel-perfect screenshots | Default primary engine |
| **Tier 2: Agentic Browser** | `browser-use` / `browserbase` | Multi-step interactive flows, Cloudflare bypass, deep pagination | If Tier 1 encounters bot walls or complex navigation |
| **Tier 3: Headless Playwright** | `playwright` / `puppeteer` | Headless execution on Linux/CI/CD servers without local GUI Chrome | If local Chrome browser is not detected |
| **Tier 4: Zero-Binary Engine** | Node.js `fetch` + `cheerio` / `jsdom` | Fast static DOM parsing and CSS extraction without downloading browser binaries | If binary execution is restricted |

---

## 🎯 When to Use (Trigger Criteria)

Activate this skill immediately in any of the following scenarios:
1. **HTTP/Scraping Failure**: `read_url_content` or fetch returns `403 Forbidden`, `404 Not Found`, `429 Too Many Requests`, Cloudflare challenge, or empty/malformed HTML.
2. **JavaScript-Rendered / SPA Sites**: The target page is built with React, Next.js, Vue, Svelte, Angular, or Webflow where the primary content is rendered client-side.
3. **Interactive & Protected Content**: Pages behind cookie consent banners, dropdowns, infinite scroll, tab switches, or modal overlays.
4. **Design & Token Extraction**: Extracting live computed styles, color palettes, typography scales, screenshot captures, and layout structures from inspiration sites (such as [Inspora](https://inspora.design), [Refero](https://refero.design), [Dark Design](https://dark.design), [SupaHero](https://supahero.io), [TweakCN](https://tweakcn.com)).

---

## 🔄 Core Workflow

```
[Target URL Request]
        │
        ▼
[Attempt Static Fetch: read_url_content]
        │
    ┌───┴────────────────────────────┐
    ▼                                ▼
[Success & Complete]        [Failed / 403 / SPA / Blocked]
    │                                │
    ▼                                ▼
[Proceed with Data]         🚨 ACTIVATE browser-fallback-inspector
                                     │
                                     ▼
                    [Step 1: Navigate via chrome-devtools]
                                     │
                                     ▼
                    [Step 2: Wait & Handle Overlays/Modals]
                                     │
                                     ▼
                    [Step 3: Extract Live Snapshot / Scripts]
                                     │
                                     ▼
                    [Step 4: Capture Screenshots / Computed Tokens]
                                     │
                                     ▼
                    [Step 5: Format & Hand off Clean Data]
```

---

## 🛠️ Step-by-Step Tool Usage

### Step 1: Open Target Page
Use `call_mcp_tool` with `chrome-devtools`:
```json
{
  "ServerName": "chrome-devtools",
  "ToolName": "navigate_page",
  "Arguments": {
    "url": "https://target-website.com"
  }
}
```

### Step 2: Wait for Hydration & Handle Overlays
If the page has dynamic content or cookie consent banners:
1. **Wait for element**: Call `wait_for` to ensure key content has loaded.
2. **Dismiss popups/banners**: Find the button UID using `take_snapshot` and call `click`.

### Step 3: Extract Content & Text
Choose the best extraction method based on the goal:

#### Option A: Quick Text & Hierarchy Snapshot (`take_snapshot`)
Takes an accessibility tree snapshot with all text and element IDs:
```json
{
  "ServerName": "chrome-devtools",
  "ToolName": "take_snapshot",
  "Arguments": {
    "verbose": false
  }
}
```

#### Option B: Full DOM / Rich Data Extraction (`evaluate_script`)
Execute custom JavaScript in the browser context to extract clean structured data:
```json
{
  "ServerName": "chrome-devtools",
  "ToolName": "evaluate_script",
  "Arguments": {
    "function": "() => {\n  return {\n    title: document.title,\n    metaDesc: document.querySelector('meta[name=\"description\"]')?.content || '',\n    headings: Array.from(document.querySelectorAll('h1, h2, h3')).map(h => ({ tag: h.tagName, text: h.innerText.trim() })),\n    paragraphs: Array.from(document.querySelectorAll('p, li')).map(p => p.innerText.trim()).filter(Boolean).slice(0, 30)\n  };\n}"
  }
}
```

#### Option C: Design & Computed CSS Extraction (`evaluate_script`)
Extract real design tokens (colors, fonts, radii, spacing) directly from computed styles:
```json
{
  "ServerName": "chrome-devtools",
  "ToolName": "evaluate_script",
  "Arguments": {
    "function": "() => {\n  const hero = document.querySelector('header, main, section');\n  if (!hero) return {};\n  const style = window.getComputedStyle(hero);\n  return {\n    fontFamily: style.fontFamily,\n    fontSize: style.fontSize,\n    color: style.color,\n    backgroundColor: style.backgroundColor,\n    borderRadius: style.borderRadius\n  };\n}"
  }
}
```

### Step 4: Visual Capture (`take_screenshot`)
When visual layout, UI inspection, or verification is needed:
```json
{
  "ServerName": "chrome-devtools",
  "ToolName": "take_screenshot",
  "Arguments": {}
}
```

---

## 📚 Bundled References

For specialized procedures, refer to:
- [MCP Chrome DevTools Guide](references/mcp-chrome-devtools.md) — Comprehensive parameter and error handling reference.
- [Dynamic Scraping Recipes](references/dynamic-scraping-recipes.md) — JS snippets for extracting galleries, articles, pricing tables, and assets.
- [Design References Inspection Guide](references/design-references-guide.md) — Recipes tailored for Inspora, SupaHero, Dark Design, Refero, and TweakCN.
