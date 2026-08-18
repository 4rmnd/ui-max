# 🤝 Contributing to UI MAX

Terima kasih atas minatmu untuk berkontribusi pada **UI MAX — Autonomous Anti-Slop UI & Design Intelligence Toolkit**!

---

## 🌟 Cara Berkontribusi

### 1. Menambahkan Pola AI Slop Baru
Jika kamu menemukan pola desain klise baru yang sering dihasilkan AI:
1. Buka [scripts/deslop-orchestrator.js](file:///d:/Projek%20Gabut/test/UI%20MAX/scripts/deslop-orchestrator.js).
2. Tambahkan aturan Regex baru di array `AI_TELLS_RULES`.
3. Dokumentasikan di [.agents/skills/anti-slop-ui/references/ai-slop-tells-catalog.md](file:///d:/Projek%20Gabut/test/UI%20MAX/.agents/skills/anti-slop-ui/references/ai-slop-tells-catalog.md).

### 2. Menambahkan Archetype / Tema Desain Baru
1. Tambahkan profil gaya baru di [.agents/skills/anti-slop-ui/references/aesthetic-archetypes.md](file:///d:/Projek%20Gabut/test/UI%20MAX/.agents/skills/anti-slop-ui/references/aesthetic-archetypes.md).
2. Tentukan pasangan font, variabel HSL TweakCN, dan batas radius yang ideal.

### 3. Mengembangkan Skill Baru
Gunakan skill `skill-creator` untuk membuat skill baru:
```bash
npx skills init nama-skill-baru
```

---

## 🧪 Menguji Perubahan Sebelum Pull Request

Jalankan test pre-flight dan scan sebelum submit PR:
```bash
npm run setup
npm run scan
```
Pastikan seluruh pengecekan berstatus `✅ PASS`.
