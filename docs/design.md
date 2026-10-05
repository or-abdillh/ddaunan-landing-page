# Technical Design Specification: DDaunan

> **Document Version:** 1.0.0 | **Status:** Approved | **Last Updated:** 2026-10-05  
> **Governing Agent/Role:** Principal Design System Architect & Lead Frontend UI Specialist

### Revision Changelog
| Version | Date | Author / Role | Changes Summary |
|---|---|---|---|
| 1.0.0 | 2026-10-05 | Principal Design System Architect | Spesifikasi teknis implementasi desain agensi anti-slop dengan 5-Pillar Quality Armor untuk Nuxt 4 dan Tailwind v4 |

---

## 1. Overview & Creative Thesis

### Aesthetic Stance
Estetika digital DDaunan berakar kuat pada kerajinan wastra Sasirangan tepi Sungai Martapura di Seberang Mesjid, Banjarmasin. Desain menghindari klise visual AI populer (seperti kombinasi krem-terakota, latar hitam dengan aksen hijau neon, atau deretan kartu seragam). Pendekatan visual yang diterapkan adalah **Artisanal Editorial Luxury**: kanvas terang berbahan serat katun mori mentah, tipografi editorial klasik berwibawa, garis jelujur presisi tipis, serta satu pusat interaktivitas utama pada bagian Hero (*Spend Boldness in One Place*).

### Tech & Styling Stack Alignment
- **Framework:** Nuxt 4 (arsitektur App Directory) dengan Vue 3 Composition API `<script setup lang="ts">`.
- **Styling Engine:** Tailwind CSS v4 via `@tailwindcss/vite` dengan pemetaan token ke variabel CSS murni di `:root`.
- **Tipografi:** Google Fonts (*Cormorant Garamond* dan *Plus Jakarta Sans*).
- **Kinetic Engine:** Lenis Smooth Scroll untuk sensasi gulir navigasi yang berbobot dan mengalir.

### Target Experience
Menghadirkan rasa ketenangan alami (*riverside serenity*), kejelasan informasi tentang asal usul tumbuhan lokal, serta kemudahan bagi pengunjung untuk memesan kain, pakaian siap pakai, atau mendaftar lokakarya studio secara langsung.

---

## 2. Color System & CSS Variable Mapping

### CSS Variables Definition (`:root` di `app/assets/styles/main.css`)
```css
:root {
  /* Brand Core Tokens */
  --color-primary: #1E2D24;          /* Peat Moss (Daun Ulin & Gambut Basah) */
  --color-secondary: #E4E7DF;        /* Pale Botanical Wash (Air Rendaman Daun) */
  --color-accent: #8A5A12;           /* Botanical Ochre (Kuning Rimba & Bunga Tegeran) */

  /* Surface & Canvas Tokens */
  --color-surface-base: #F6F4EE;     /* Raw Cotton (Serat Katun Mori Mentah) */
  --color-surface-card: #FFFFFF;     /* Pure Card Surface */
  --color-surface-ambient: #E4E7DF;  /* Soft Section Container */

  /* Text & Typography Tokens */
  --color-text-main: #1E2D24;        /* Deep Peat Dark (Headings & Body Text) */
  --color-text-muted: #526356;       /* Soft Botanical Slate (Subtitles & Meta) */
  --color-text-inverse: #F6F4EE;     /* Raw Cotton Light (Text on Dark Buttons) */

  /* Structural & Hairline Borders */
  --color-border-subtle: rgba(44, 59, 77, 0.15); /* River Slate 15% Opacity */
  --color-border-accent: rgba(138, 90, 18, 0.40); /* Ochre Border 40% Opacity */
}
```

### WCAG AA Contrast Verification Summary
Seluruh nilai token telah diverifikasi menggunakan skrip `contrast-check.py`:
- `var(--color-text-main)` (`#1E2D24`) vs `var(--color-surface-base)` (`#F6F4EE`): **13.11:1** (Lolos WCAG AA Normal Text >= 4.5:1).
- `var(--color-text-muted)` (`#526356`) vs `var(--color-surface-base)` (`#F6F4EE`): **5.82:1** (Lolos WCAG AA Normal Text >= 4.5:1).
- `var(--color-accent)` (`#8A5A12`) vs `var(--color-surface-base)` (`#F6F4EE`): **5.38:1** (Lolos WCAG AA Normal Text >= 4.5:1).
- `var(--color-text-inverse)` (`#F6F4EE`) vs `var(--color-primary)` (`#1E2D24`): **13.11:1** (Sangat Kontras dan Terbaca Jelas).
- Elemen interaktif dan batas fokus (`#8A5A12`) memenuhi standar non-teks >= 3.0:1.

---

## 3. Typography Architecture & Pairing Specs

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Font Roles
- **Display Serif:** `'Cormorant Garamond', Georgia, serif` (Judul Utama, Kutipan Editorial, Angka Filosofis).
- **Interface Sans-Serif:** `'Plus Jakarta Sans', system-ui, sans-serif` (Teks Tubuh Paragraf, Navigasi, Label Tombol, Data Spesifikasi).

### Type Scale Matrix (Fluid Clamp & Responsive)

| Level Hierarki | Fluid Clamp CSS | Utility Tailwind Classes | Penggunaan |
|---|---|---|---|
| **H1 Display** | `clamp(2.75rem, 6vw, 5.5rem)` | `text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.05]` | Headline Utama Hero Section |
| **H2 Section** | `clamp(2rem, 4vw, 3.25rem)` | `text-3xl md:text-5xl font-serif font-medium tracking-tight leading-tight` | Judul Bagian Halaman |
| **H3 Card** | `clamp(1.25rem, 2.5vw, 1.75rem)` | `text-xl md:text-2xl font-serif font-medium leading-snug` | Judul Kartu Produk & Nilai |
| **Lead / Intro** | `clamp(1.125rem, 1.5vw, 1.25rem)` | `text-lg md:text-xl font-sans text-[#526356] leading-relaxed` | Paragraf Pembuka Section |
| **Body Base** | `1rem (16px)` | `text-base font-sans text-[#1E2D24] font-normal leading-relaxed` | Paragraf Penjelasan & Deskripsi |
| **Micro Meta** | `0.75rem (12px)` | `text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#8A5A12]` | Eyebrow, Label Kategori, Tag Lokasi |

---

## 4. Layout Engineering & Grid Blueprints

### Dynamic Bento Grid Specification (Katalog Produk 3 Tingkat)
- **Desktop Layout (`lg:grid lg:grid-cols-3 lg:gap-8`):**
  - *Kartu 1 (Busana Siap Pakai Kasual):* Menempati 2 kolom x 2 baris (`lg:col-span-2 lg:row-span-2`), memuat foto busana besar, deskripsi katun adem, dan rincian harga.
  - *Kartu 2 (Kain Katun Primissima 2 Meter):* Menempati 1 kolom x 2 baris (`lg:col-span-1 lg:row-span-2`), menampilkan tekstur jelujur motif Gigi Haruan dan Bayam Raja.
  - *Kartu 3 (Cenderamata Scarf & Aksesoris):* Menempati 1 kolom x 1 baris (`lg:col-span-1 lg:row-span-1`), ringkas dengan tombol aksi cepat.
  - *Kartu 4 (Paket Selendang Sutra Eksklusif):* Menempati 2 kolom x 1 baris (`lg:col-span-2 lg:row-span-1`), menampilkan gradasi warna bertingkat dan aksen kain sutra tenun.

### Multi-State Responsive Reflow
- **Ponsel (< 600px):** Seluruh grid runtuh (*reflow*) menjadi 1 kolom vertikal mandiri (`grid-cols-1 gap-6`). Kartu foto menyesuaikan rasio aspek horizontal, urutan tombol diatur dengan lebar penuh (*full-width*), dan padding sisi layar dijaga pada 20 piksel (`px-5`).
- **Tablet (600px – 1024px):** Grid bertransisi menjadi 2 kolom (`grid-cols-2 gap-6`) dengan tata letak simetris seimbang.
- **Desktop (> 1024px):** Tata letak asimetris penuh dengan kontainer maksimal 1280 piksel (`max-w-7xl mx-auto px-8`).

### Section Height Cadence
- **Hero Section:** Menggunakan `min-h-[92dvh]` (menolak `100vh` kaku agar tidak terpotong bilah alamat peramban ponsel).
- **Origin Strip:** Kompak setinggi sekitar 120 piksel untuk menyambung ritme secara rapat.
- **Story & Bento Sections:** Memiliki ruang vertikal lapang (`py-20 md:py-28`) untuk memberi waktu mata beristirahat.

---

## 5. Elevation, Depth & Ambient Lighting

### Hairline Precision Borders
- Seluruh kontainer, kartu, dan pembatas kolom menggunakan garis batas presisi:
  ```css
  border: 1px solid var(--color-border-subtle); /* rgba(44, 59, 77, 0.15) */
  ```

### Ambient Light Glow Dose (Maksimal 1 Titik Fokus)
- Satu titik pendaran cahaya lembut di sudut kanan atas area Hero:
  ```html
  <div class="pointer-events-none absolute -top-24 right-0 h-[480px] w-[480px] rounded-full bg-[#8A5A12]/6 blur-[120px]" />
  ```
- Dilarang menempatkan pendaran cahaya tambahan di belakang kartu produk atau teks artikel.

### Controlled Glassmorphism Dose (Maksimal 1 Elemen)
- Hanya diterapkan pada bilah navigasi lengket (*Sticky Navbar*) saat pengguna menggulir:
  ```css
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background-color: rgba(246, 244, 238, 0.88);
  border-bottom: 1px solid rgba(44, 59, 77, 0.12);
  ```

### Tactile Surface Noise Texture
- Lapisan noise halus terintegrasi pada latar kanvas utama menggunakan data URI SVG filter beropasitas 3 persen untuk menghadirkan kesan taktil serat katun.

### Soft Ambient Shadows
- Bayangan fungsional halus pada kartu:
  ```css
  box-shadow: 0 4px 24px -2px rgba(30, 45, 36, 0.05), 0 2px 6px -1px rgba(30, 45, 36, 0.03);
  ```

---

## 6. Shapes, Radii & Geometry

### Border Radius Hierarchy
- **Kontainer & Kartu Produk:** `rounded-2xl` (16 piksel) pada ponsel dan `rounded-3xl` (24 piksel) pada layar desktop.
- **Tombol Interaktif (CTA):** `rounded-full` (bentuk kapsul modern) dengan padding vertikal dan horizontal seimbang.
- **Lencana & Label Status:** `rounded-full` (kapsul kecil).
- **Input Form & Pemilih Tanggal:** `rounded-xl` (12 piksel).
- **Aturan Geometri:** Menolak penyeragaman satu ukuran lengkungan untuk semua elemen; setiap tingkat komponen memiliki identitas bentuk yang terukur.

---

## 7. Components, Micro-Interactions & Tap Targets

### 7.1 Lenis Smooth Scroll Configuration
```typescript
import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.15,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.5,
})
```

### 7.2 Ukuran Target Sentuh Mobile (Tap Targets >= 44 x 44 px)
- Seluruh tombol utama, tombol navigasi, piringan pemilih pigmen, dan tombol penutup modal wajib memiliki dimensi area sentuh minimal 44 x 44 piksel pada resolusi ponsel.

### 7.3 Accessible Focus Rings
- Seluruh kontrol interaktif yang menerima fokus keyboard wajib menampilkan cincin fokus kontras tinggi:
  ```css
  :focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
  ```
- Dilarang menyetel `outline: none` tanpa pengganti `:focus-visible`.

### 7.4 Botanical Pigment Visualizer Component Specification
- **State Data Reaktif:**
  ```typescript
  interface BotanicalPigment {
    id: 'ketapang' | 'ulin' | 'indigo' | 'kunyit'
    name: string
    plantOrigin: string
    colorHex: string
    motifName: string
    mordant: string
    imageUrl: string
  }
  ```
- **Interaksi:** Menekan tombol piringan pigmen memicu pergantian state aktif dengan transisi foto lembut (*opacity fade 300ms*) dan memperbarui kartu informasi resep botani di sampingnya.

### 7.5 Unsplash Curation Registry (Foto Berkualitas Tinggi Terverifikasi)

| Peruntukan Bagian | ID Foto Unsplash & URL | Deskripsi Visual & Aksen |
|---|---|---|
| **Hero Media Utama** | `photo-1598033129183-c4f50c736f10` | Kuali perendaman kain pewarna alami dengan uap air pagi |
| **Kain Gigi Haruan (Daun Ketapang)** | `photo-1584917865442-de89df76afd3` | Tekstur serat katun alami rona hijau zaitun matang |
| **Kain Bayam Raja (Getah Ulin)** | `photo-1528458906838-66654998844f` | Kain katun mori alami bernuansa cokelat tembaga teduh |
| **Kain Kangkung Kaombakan (Indigo)** | `photo-1607344645866-009c320c5ab8` | Kain celupan indigofera alami rona biru sungai |
| **Kain Hiris Pudak (Kunyit Rimba)** | `photo-1528459801416-a9e53bbf4e17` | Kain rona kuning keemasan dari ekstrak kunyit dan tegeran |
| **Busana Siap Pakai Kasual** | `photo-1515886657613-9f3515b0c78f` | Model mengenakan kemeja santai etnik di ruang terbuka alami |
| **Lokakarya Studio Terbuka** | `photo-1544717305-2782549b5136` | Tangan perajin sedang mengikat benang sirang di atas kain |

---

## 8. Do's and Don'ts Matrix (5-Pillar Quality Armor Checklist)

| Area | ❌ Terlarang (AI-Slop & Pelanggaran Kualitas) | ✅ Wajib (Standar Agensi DDaunan) |
|---|---|---|
| **Warna** | Memakai palet klise krim-terakota atau hitam-neon generik. | Menggunakan palet botani asli Kalimantan: Peat Moss, Raw Cotton, dan Botanical Ochre. |
| **Dosis Visual** | Menyebarkan efek kaca dan glow di seluruh kartu. | Batasi maksimal 1 elemen glassmorphism (Navbar) dan 1 ambient glow lembut di Hero. |
| **Kontras** | Menempatkan teks abu-abu tipis tanpa validasi kontras. | Seluruh teks memenuhi rasio WCAG AA minimal 4.5:1 (teruji via `contrast-check.py`). |
| **Tata Letak** | Membuat deretan 3 kartu vertikal seragam monoton. | Menerapkan Dynamic Bento Grid asimetris sesuai bobot informasi produk. |
| **Mobile** | Memaksa `100vh` kaku dan membiarkan kebocoran scroll horizontal. | Menggunakan `min-h-[92dvh]`, target sentuh >= 44px, dan reflow multi-state teruji. |
| **Copywriting** | Menggunakan kosakata AI (*unlock, elevate, delve, showcase, seamless*). | Menggunakan kalimat aktif lugas dan jujur dengan subjek nyata. |
| **Tanda Baca** | Menggunakan em dash (`—` atau `--`) sebagai penghubung kalimat. | Menggunakan tanda titik, koma, titik dua, atau tanda kurung secara disiplin. |
| **Kredibilitas** | Mengarang ulasan bintang lima atau testimoni pembeli palsu. | Menampilkan First-Day Trust Anchors: formula terbuka, garansi 30 hari, dan studio fisik terbuka. |
