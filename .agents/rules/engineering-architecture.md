---
trigger: always_on
---

# OFFICIAL ENGINEERING ARCHITECTURE DOCUMENT

## Vanilla JavaScript + Tailwind CSS v4 + Vite Implementation Standard

**Version: 2.0 (User Overridden to Vanilla JS)**

---

# 1. PURPOSE

Dokumen ini menetapkan standar arsitektur, struktur proyek, dan aturan implementasi teknis untuk seluruh pengembangan website menggunakan:

- Vanilla JavaScript (ES Modules)
- Vite Build Tool
- Tailwind CSS v4 via `@tailwindcss/vite`
- Lenis Smooth Scroll
- Lucide Vanilla Icons

Dokumen ini bersifat:
- Non-negotiable
- Mengikat
- Prioritas tertinggi dalam keputusan teknis (mengikuti direktif eksplisit pengguna: "gunakan vanila js, jangan vue maupun nuxt")

---

# 2. CORE STACK (LOCKED - NON NEGOTIABLE)

## Framework & Scripting Layer
Wajib menggunakan:
- Vanilla JavaScript (ES6+ Modules)
- Semantic HTML5
- Modular components / section builders di `src/`
- Vite sebagai dev server & production bundler

Dilarang:
- Framework berbasis SPA berat (Vue, Nuxt, React, Angular, Svelte) jika tidak diminta.

---

## Styling Layer
Wajib menggunakan:
- Tailwind CSS v4 via `@tailwindcss/vite`
- CSS variables mapping di `:root` (`src/style.css`)
- `@import "tailwindcss";`

---

# 3. PROJECT STRUCTURE (VANILLA JS + VITE)

```
/
├── index.html                    # Entry point HTML dengan semantic markup & SEO
├── vite.config.js                # Vite config dengan plugin @tailwindcss/vite
├── package.json                  # Scripts & dependencies
├── public/                       # Static public assets
└── src/
    ├── style.css                 # CSS variables, Tailwind v4 imports, ambient styles
    ├── main.js                   # Application bootstrap, Lenis init, section handlers
    ├── data/
    │   └── content.js            # Master data, botanical pigments, offerings, trust anchors
    └── components/
        ├── navbar.js             # Sticky blur navbar
        ├── visualizer.js         # Botanical Pigment Visualizer interactive logic
        ├── bento.js              # Dynamic Bento catalog logic
        ├── workshop.js           # Workshop scheduler & WhatsApp integration
        └── scroll.js             # Lenis smooth scroll initialization
```

---

# 4. PERFORMANCE & ACCESSIBILITY BASELINE

- WCAG AA contrast ratio (minimal 4.5:1 untuk teks, 3.0:1 untuk elemen non-teks).
- Keyboard accessibility dengan `:focus-visible` ring berkontras tinggi.
- Mobile tap targets minimal 44 x 44 px.
- Zero horizontal overflow leak pada viewport sempit (360px–390px).
