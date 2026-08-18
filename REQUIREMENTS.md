# 📋 Persyaratan Sistem & Panduan Transparansi (Requirements & Setup)

Dokumen ini menjelaskan seluruh prasyarat lingkungan, dependensi, dan konfigurasi yang diperlukan agar **UI MAX & Anti-Slop UI Agent** dapat berjalan dengan lancar saat di-*clone* atau di-*install* oleh pengguna lain.

---

## 💻 1. Prasyarat Sistem (System Prerequisites)

| Komponen | Versi Minimal | Rekomendasi | Keterangan |
| :--- | :--- | :--- | :--- |
| **Node.js** | `>= 18.18.0` | `v20.x` LTS atau `v22.x` | Diperlukan untuk menjalankan script scanner, CLI tools, dan MCP servers |
| **NPM** | `>= 9.0.0` | `v10.x` | Digunakan untuk mengeksekusi `npx` on-demand |
| **Git** | `>= 2.30.0` | Versi terbaru | Diperlukan untuk instalasi skill via git dan worktrees |
| **Browser Chrome** | Chrome 120+ | Google Chrome Stable | Diperlukan jika ingin menggunakan fitur inspeksi visual via `chrome-devtools-mcp` |
| **Sistem Operasi** | Windows 10/11, macOS, atau Linux | *Cross-platform* | Berjalan mulus di PowerShell, Zsh, dan Bash |

---

## 🤖 2. Lingkungan AI & Parallel Subagent Fleet

### Supported AI Platforms:
1. **Google Antigravity IDE (AGY)**: Native support via `.agents/skills/`, `.agents/agents/`, `.agents/rules/`, dan `.mcp.json`.
2. **Claude Code CLI (`claude`)**: Support via slash command `/deslop-ui` di `.claude/commands/`.
3. **Cursor / Codex / Windsurf / VS Code Copilot**: Native support via `AGENTS.md` dan `.agents/skills/`.

### 👥 5 Parallel Worker Subagents (`agents/` & `.agents/agents/`):
Ketika **Lead UI Architect** (`anti-slop-ui-architect`) memproses tugas besar/multi-halaman, tugas dibagi secara paralel ke subagents khusus:
* **`subagent-ui-auditor`**: Memindai puluhan file/komponen secara bersamaan untuk menemukan pola AI slop.
* **`subagent-browser-qa`**: Menjalankan inspeksi live browser via `chrome-devtools` MCP tanpa memblokir pembuatan kode.
* **`subagent-copy-editor`**: Mengedit dan merapikan seluruh teks/headline menjadi *human active voice* secara paralel.
* **`subagent-component-builder`**: Membangun section terpisah (Hero, Bento Grid, Pricing, Footer) secara bersamaan.
* **`subagent-a11y-polish`**: Memvalidasi rasio kontras WCAG AAA, focus ring, dan kerapian pixel-perfect.

---

## 🛠️ 3. Konfigurasi MCP Servers (Model Context Protocol)

File konfigurasi MCP disertakan di [.mcp.json](file:///d:/Projek%20Gabut/test/UI%20MAX/.mcp.json) dan [.agents/mcp_config.json](file:///d:/Projek%20Gabut/test/UI%20MAX/.agents/mcp_config.json):

```json
{
  "mcpServers": {
    "21st": {
      "serverUrl": "https://21st.dev/api/mcp"
    },
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn-ui-mcp-server"]
    },
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```

* **`21st` (`21st.dev`)**: Menghubungkan AI Agent langsung ke katalog komponen modern 21st.dev, Magic UI, dan inspirasi desain.
* **`shadcn`**: Menghubungkan AI Agent langsung ke registri komponen resmi `shadcn/ui`.
* **`chrome-devtools`**: Memungkinkan AI Agent membuka browser live, menangkap screenshot, dan memeriksa CSS computed styles secara mandiri.

> [!NOTE]
> Server MCP dieksekusi on-demand menggunakan `npx -y`, sehingga pengguna **tidak perlu menginstal package MCP secara global**.

---

## 🚀 4. Langkah Instalasi & Setup User (Hanya 2 Langkah!)

Berikut adalah langkah nyata yang dilakukan pengguna saat pertama kali meng-clone repositori ini:

```bash
# 1. Clone repository
git clone https://github.com/username/ui-max.git
cd ui-max

# 2. Jalankan Pre-Flight Requirements Check (Memeriksa Node, Chrome, Skills, & MCP)
npm run setup
# atau: node scripts/setup-check.js
```

### Output yang Akan Muncul di Layar User:
```text
🛡️  =============================================================
   [UI MAX — SYSTEM & MCP REQUIREMENTS CHECKER]
=============================================================

✅ [1/5] Node.js Version: v24.x (Supported: >= 18.x)
✅ [2/5] NPM / NPX Availability: npm v11.x (Ready)
✅ [3/5] Google Chrome Browser: Detected (Live Browser QA Ready)
✅ [4/5] Agent Skills: 19/19 Skills Installed & Ready
✅ [5/5] MCP Servers Config: .mcp.json Valid (21st, shadcn, chrome-devtools)

=============================================================
🎉 HASIL: Lingkungan 100% SIAP! Kamu bisa langsung pakai skill ini di Antigravity / Claude Code / Cursor.
=============================================================
```

Jika ada yang kurang (misal Node.js belum terinstall atau versi terlalu lama), script ini langsung memberi tahu link download dan solusi perbaikannya.

---

## 📦 5. Daftar 19 Skills yang Terintegrasi di `.agents/skills/`

| # | Nama Skill | Sumber Asli | Fungsi & Peran |
| :---: | :--- | :--- | :--- |
| **1** | **`anti-slop-ui`** | UI MAX (Core) | **[MASTER AGENT]** Mengorkestrasi perbaikan UI 5-fase secara mandiri |
| **2** | **`browser-fallback-inspector`** | UI MAX (Core) | Fallback otomatis ke live browser (chrome-devtools) saat scraping statis gagal |
| **3** | **`skill-creator`** | [anthropics/skills](https://github.com/anthropics/skills) | Mesin pembuat, evaluator, dan penguji skill AI baru |
| **4** | **`shadcn`** | `shadcn/ui` (Official) | Integrasi komponen, discovery registri, dan best practices shadcn |
| **5** | **`stop-slop`** | [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop) | Eliminasi kata-kata klise / AI prose tells pada teks & copywriting |
| **6** | **`avoid-ai-design`** | UI MAX | Deteksi pola AI slop (gradien ungu, kartu blur sabun, dll.) |
| **7** | **`clone-website`** | [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | Reverse engineering website target menjadi komponen Next.js + Tailwind |
| **8** | **`grill-with-docs`** | [mattpocock/skills](https://github.com/mattpocock/skills) | Interview arsitektur mendalam sebelum eksekusi & update ADR / CONTEXT.md |
| **9** | **`improve`** | `shadcn/improve` | Codebase auditor penyusun rencana perbaikan terstruktur |
| **10** | **`migrate-radix-to-base`** | `shadcn/ui` | Panduan migrasi dari Radix UI ke Base UI |
| **11** | **`frontend-design`** | UI MAX | Pembentukan identitas visual unik, tipografi berani, & layout berkarakter |
| **12** | **`ui-ux-pro-max`** | UI MAX | Standar desain UI/UX tingkat lanjut, 50+ gaya, 161 palet, micro-interactions |
| **13** | **`taste-skill`** | UI MAX | Standar taste estetika dan craftsmanship kelas atas |
| **14** | **`interface-design`** | UI MAX | Desain sistem token, hierarki komponen, dan state interaktif |
| **15** | **`refactoring-ui`** | UI MAX | Panduan refactoring visual praktis (kontras, hierarki, whitespace) |
| **16** | **`hallmark`** | UI MAX | Standar visual polish industri |
| **17** | **`impeccable`** | UI MAX | Presisi layout *pixel-perfect* |
| **18** | **`designer-process`** | UI MAX | Alur proses perancangan desain dari konsep ke implementasi |
| **19** | **`styleseed`** | UI MAX | Eksplorasi gaya desain & variasi tema |

---

## 🎨 6. Sumber Daya Desain Eksternal (Zero Setup Needed)

Skill ini juga secara otomatis merujuk pada resource kurasi publik berikut:
* **Theme Customizer**: [TweakCN Theme Editor](https://tweakcn.com/editor/theme) & [TweakCN Community](https://tweakcn.com/community)
* **Prompt Engineering UI**: [Design Prompts Dev](https://www.designprompts.dev/)
* **Inspirasi Visual**: Inspora, Refero, Dark Design, MacApp Supply, SupaHero, Footer Design, Load More.

---

## 🔒 7. Keamanan & Privasi (Security & Secrets)

* File `.gitignore` telah dikonfigurasi untuk **selalu mengabaikan** `.env`, `.claude/settings.json`, dan file credential lainnya.
* Tidak ada API key yang di-*hardcode* di dalam kode maupun skill.
