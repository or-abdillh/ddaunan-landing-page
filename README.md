# DDaunan: Wastra Sasirangan Murni Warna Alam

> Landing page dan sistem katalog interaktif untuk studio wastra Sasirangan pewarna botani Kalimantan di Kampung Seberang Mesjid, Banjarmasin.

---

## 1. Tentang Proyek

DDaunan adalah brand wastra berkelanjutan yang berbasis di sentra cagar budaya Kampung Sasirangan, Banjarmasin Tengah. Proyek ini menghadirkan antarmuka digital berstandar agensi seni rupa untuk mempromosikan kain Sasirangan pewarna alami 100 persen dedaunan Kalimantan (daun ketapang, kayu ulin, fermentasi indigofera, dan kunyit rimba), sekaligus mengedukasi masyarakat tentang penyelamatan Sungai Martapura dari limbah zat warna kimia tekstil sintetis.

Website ini dibangun menggunakan arsitektur **Vanilla JavaScript (ES Modules), Tailwind CSS v4, dan Vite**, dengan panduan ketat **5-Pillar Quality Armor** (aksesibilitas WCAG AA, tipografi fluid, copywriting manusiawi bebas kata klise AI, dan reflow multi-state layar sentuh).

---

## 2. Fitur Unggulan

- **Botanical Pigment Visualizer:** Komponen interaktif berbasis Vanilla JS untuk menguji rona kain secara langsung berdasarkan 4 ekstrak dedaunan lokal Kalimantan, lengkap dengan resep fiksasi dan filosofi motif Banjar.
- **10-Day Craftsmanship Timeline:** Kronologi interaktif 5 fase pengerjaan kain (perebusan daun, jelujur sirang tangan, 15 kali pencelupan bertahap, fiksasi mineral alami, dan pelepasan benang) yang menjustifikasi nilai seni dan kesabaran pengerjaan manual.
- **Dynamic Bento Grid Catalog:** Tata letak katalog asimetris yang menampilkan 4 kategori penawaran (Kemeja Kasual Tropis, Kain Primissima 2 Meter, Scarf Cenderamata, dan Selendang Sutra Eksklusif) dengan transparansi harga dan pemesanan cepat via WhatsApp.
- **Open Studio & Workshop Scheduler:** Formulir pemilih sesi kelas pembuatan kain mingguan di studio Seberang Mesjid dengan generator pesan otomatis ke WhatsApp Business.
- **Verified Artisan Ledger:** Buku dedikasi profil perajin perempuan lokal (Acil Aminah, Ibu Rusnah, Mbak Nurul) sebagai bukti sosial otentik pengganti ulasan bintang lima rekaan.
- **Eco-Transparency Counter:** Audit keterbukaan lingkungan (0 gram napthol tekstil ke sungai, 100 persen air sisa celup ramah pekarangan, 15 kali celup bertahap).
- **First-Day Trust Anchors:** Empat pilar kredibilitas (Open Recipe formula bahan, Garansi 30 Hari Perawatan, Botol Sabun Lerak Alami Gratis, dan Label Nama Penjahit Jelujur).
- **Lenis Smooth Scroll:** Navigasi gulir halaman yang tenang, luwes, dan mengalir seperti arus sungai.

---

## 3. Teknologi & Alat Pengembangan

- **Bahasa & Skrip:** Vanilla JavaScript (ES6+ Modules murni tanpa framework SPA berat).
- **Styling Engine:** Tailwind CSS v4 via `@tailwindcss/vite` dengan pemetaan variabel CSS murni di `:root`.
- **Bundler & Server:** Vite 8.
- **Kinetic Engine:** Lenis Smooth Scroll (`lenis`).
- **Ikonografi:** Lucide Icons & SVG garis vektor presisi tinggi.
- **Validasi Visual:** Playwright MCP untuk pengujian multi-viewport (Desktop 1440x900 dan Mobile 390x844).

---

## 4. Struktur Direktori Proyek

```
/
├── index.html                    # Struktur semantik HTML5, metadata SEO, dan Google Fonts
├── vite.config.js                # Konfigurasi plugin Tailwind CSS v4 di Vite
├── package.json                  # Dependensi dan skrip proyek
├── src/
│   ├── style.css                 # CSS variables, Tailwind v4 imports, dan utilitas ambient
│   ├── main.js                   # Entry point aplikasi & inisialisasi interaksi
│   ├── data/
│   │   └── content.js            # Data master botani, katalog 3 tingkat, dan profil perajin
│   └── components/
│       ├── scroll.js             # Inisialisasi Lenis Smooth Scroll
│       ├── navbar.js             # Sticky blur navbar & drawer menu mobile
│       ├── visualizer.js         # Interactive Botanical Pigment Visualizer
│       ├── bento.js              # Dynamic Bento Grid katalog produk
│       ├── workshop.js           # Pemilih jadwal lokakarya & WhatsApp generator
│       └── timeline.js           # 10-Day Craftsmanship Timeline & Artisan Ledger
└── docs/                         # Arsip dokumentasi tata kelola dan spesifikasi desain
    ├── 00-brand-initiation.md    # Catatan dekonstruksi brand & benchmarking pasar
    ├── 00-master-data.md         # Greenfield Master Data & profil bisnis riil
    ├── 01-design-direction.md    # Arahan visual & palet warna tervalidasi WCAG AA
    ├── 02-brand-identity.md      # Strategi identitas, tone of voice, dan pilar nilai
    ├── 03-website-concept.md     # Konsep artistik, blueprint hero, dan ritme narasi
    ├── 04-design-system.md       # Sistem desain ramah stakeholder lintas divisi
    ├── design.md                 # Spesifikasi teknis rekayasa 8-bab baku
    ├── 05-prd.md                 # Product Requirements Document operasional (MoSCoW matrix)
    └── 06-strategic-audit.md     # Audit diferensiasi & fitur interaktif premium
```

---

## 5. Cara Menjalankan Proyek Secara Lokal

### Prasyarat
- Node.js versi 18 ke atas (disarankan versi 20 atau 22).
- npm versi 9 ke atas.

### Instalasi Dependensi
```bash
npm install
```

### Menjalankan Development Server
```bash
npm run dev
```
Akses server lokal melalui peramban di `http://localhost:3000`.

### Membangun Versi Produksi (Production Build)
```bash
npm run build
```
File siap saji (*distributable assets*) akan tersimpan di direktori `dist/`.

### Menjalankan Preview Hasil Build
```bash
npm run preview
```

---

## 6. Standar Kualitas & Kepatuhan Aksesibilitas (WCAG AA)

Proyek ini diaudit secara ketat menggunakan **5-Pillar Quality Armor**:
1. **WCAG AA Contrast Ratio:** Seluruh teks utama memiliki rasio kontras 13.11:1 terhadap kanvas Raw Cotton (`#F6F4EE`), melebihi syarat minimal 4.5:1 (teruji via skrip mandiri Python `contrast-check.py`).
2. **Keyboard Accessibility:** Dilengkapi ring fokus `:focus-visible` kontras tinggi (outline 2px solid `#8A5A12`).
3. **Mobile Tap Targets:** Seluruh tombol, pemilih piringan pigmen, dan tautan memiliki dimensi sentuh minimal 44 × 44 piksel pada layar ponsel.
4. **Zero Horizontal Overflow:** Bebas kebocoran scroll horizontal pada resolusi sempit (360px sampai 390px).
5. **Dose Caps Visual:** Efek *glassmorphism* dibatasi pada 1 elemen (Sticky Navbar saat digulir) dan *ambient glow* dibatasi pada 1 titik fokus di area Hero.

---

## 7. Kontak & Basis Operasional

- **Studio Fisik:** Jl. Seberang Mesjid Gg. Paris RT.06/RW.01, Kel. Seberang Mesjid, Kec. Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan 70114.
- **Jam Operasional:** Senin sampai Sabtu, pukul 09.00 hingga 17.00 WITA (Hari Minggu dengan reservasi khusus).
- **Saluran Kontak:** WhatsApp Studio (+62 812-5550-1928) atau Instagram (@ddaunan.id).
