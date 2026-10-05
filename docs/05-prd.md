# Product Requirements Document (PRD): DDaunan MVP Website

> **Document Version:** 1.1.0 | **Status:** Approved | **Last Updated:** 2026-10-05  
> **Governing Agent/Role:** Senior Technical Product Manager & Lead Frontend Specialist

### Revision Changelog
| Version | Date | Author / Role | Changes Summary |
|---|---|---|---|
| 1.1.0 | 2026-10-05 | Principal Product Strategist | Menyuntikkan fitur premium Botanical Craftsmanship Timeline, Bespoke Configurator, dan Verified Artisan Ledger ke MoSCoW matrix hasil strategic audit |
| 1.0.0 | 2026-10-05 | Senior Product Manager | Inisialisasi PRD operasional MVP DDaunan dengan matriks MoSCoW, spesifikasi section Nuxt 4, batasan scope, dan checklist pitch |

---

## 1. Product Overview & Executive Summary

- **Product Name & Type:** DDaunan Digital Platform (High-Converting Catalog & Workshop Booking MVP Landing Page).
- **Primary Objective:** Menghadirkan representasi digital berkelas agensi seni rupa yang membangun kepercayaan instan di hari pertama, mengedukasi pelestarian Sungai Martapura dari limbah zat warna kimia, serta memfasilitasi pemesanan kain, pakaian siap pakai, dan reservasi lokakarya langsung via WhatsApp.
- **Core Value Proposition:** Wastra Sasirangan murni warna alam dari jantung Kampung Seberang Mesjid, menjaga warisan jelujur Banjar dengan pigmen dedaunan lokal Kalimantan, tanpa menyisakan limbah kimia di aliran sungai.

---

## 2. Target Users & Core Scenarios

### Primary Personas
1. **Eco-Conscious Urbanite (Pencinta Busana Ramah Lingkungan):** Membutuhkan pakaian kasual adem berpotongan modern yang aman bagi kulit dan ramah bagi ekosistem sungai.
2. **Wisatawan Budaya & Pelancong Minat Khusus:** Mencari cenderamata otentik khas Kampung Sasirangan dan ingin merasakan pengalaman meracik daun serta menarik benang jelujur secara langsung di studio.
3. **Pengadaan Resmi / Instansi Komunitas:** Memerlukan kain seragam atau buah tangan kehormatan dengan filosofi budaya yang luhur.

### Core User Journey
1. **Discovery & Visual Hook (< 3 Detik):** Mendarat di Hero section, disambut kanvas hangat katun mentah dan interaksi *Botanical Pigment Visualizer* yang memperlihatkan transformasi dedaunan Kalimantan menjadi warna wastra.
2. **Validation & Origin Trust:** Membaca pita asal usul Seberang Mesjid, memahami misi pencegahan limbah kimia tekstil ke Sungai Martapura, dan melihat formula terbuka bahan alami.
3. **Catalog Exploration:** Menelusuri Dynamic Bento Grid produk 3 tingkat (kain primissima 2 meter, kemeja santai, scarf cenderamata, dan selendang sutra) dengan informasi harga transparan.
4. **Workshop Engagement:** Memilih jadwal lokakarya di studio terbuka dan melihat tahapan praktik pembuatan kain.
5. **Direct Conversion:** Mengklik tombol pemesanan atau pendaftaran lokakarya yang terhubung langsung ke WhatsApp Business dengan pesan otomatis yang rapi.

---

## 3. Section & Functional Specifications (MoSCoW Matrix)

| ID | Section / Feature Name | Priority | Deskripsi Fungsional & Spesifikasi Teknis | Acuan Komponen Modular |
|---|---|---|---|---|
| **SEC-01** | **Sticky Dynamic Navbar** | Must Have | Menampilkan logo tipografi DDaunan, tautan navigasi halus (*smooth anchor links*), dan tombol aksi cepat "Reservasi Studio". Menerapkan efek kaca buram halus saat halaman digulir. | `TheNavbar` |
| **SEC-02** | **Hero Section (Showstopper)** | Must Have | Memuat headline display berkarakter editorial, proposisi nilai lugas, tombol aksi ganda magnetik, serta komponen interaktif *Botanical Pigment Visualizer* (pilihan daun ketapang, kayu ulin, indigofera, kunyit dengan transisi foto lembut dan resep botani). Tinggi minimal `min-h-[92dvh]`. | `TheHero` & `BotanicalVisualizer` |
| **SEC-03** | **River Origin & Trust Strip** | Must Have | Pita tipis berlatar Pale Botanical Wash (`#E4E7DF`) yang memuat data geografis Kampung Sasirangan Seberang Mesjid, komitmen 100 persen bahan botani, dan nol racun kimia. | `RiverOriginStrip` |
| **SEC-04** | **River Rescue & Craft Philosophy** | Should Have | Narasi perbandingan visual antara bahaya limbah zat warna kimia tekstil sintetis di Sungai Martapura vs metode ekstraksi botani ramah pekarangan DDaunan. | `ThePhilosophy` |
| **SEC-05** | **Core Offerings Dynamic Bento** | Must Have | Tata letak bento asimetris memuat 4 kartu produk 3 tingkat (Kemeja kasual, kain katun primissima 2m, scarf cenderamata, dan selendang sutra eksklusif) lengkap dengan harga, foto kurasi Unsplash, dan tombol order WhatsApp. | `TheOfferingsCatalog` & `ProductCard` |
| **SEC-06** | **Open Studio & Workshop Scheduler** | Must Have | Menampilkan agenda lokakarya mingguan di studio Seberang Mesjid Gg. Paris, rincian aktivitas (memola, menjelujur, mencelup, membuka ikatan sirang), dan tombol registrasi langsung via WhatsApp. | `TheWorkshop` |
| **SEC-07** | **First-Day Trust Anchors** | Must Have | Empat kartu transparansi kredibilitas: Open Recipe formula bahan alami, Garansi 30 Hari Perawatan, Botol Sabun Lerak Gratis, dan Penghargaan Nama Ibu Perajin Sirang Lokal. | `TheTrustAnchors` |
| **SEC-08** | **Location Map & Conversion Footer** | Must Have | Peta panduan lokasi studio di Seberang Mesjid Gg. Paris RT.06/RW.01, jam operasional studio, tautan media sosial, serta tombol terapung (*floating action*) WhatsApp khusus tampilan ponsel cerdas. | `TheFooter` & `FloatingWhatsApp` |
| **SEC-09** | **10-Day Botanical Craftsmanship Timeline** | Should Have | Komponen interaktif kronologi 5 fase perjalanan 10 hari sehelai kain (perebusan daun, jelujur tangan, 15x celup, fiksasi mineral, dan pelarutan benang) untuk menjustifikasi nilai craftsmanship premium. | `TheCraftTimeline` |
| **SEC-10** | **Bespoke Botanical Configurator** | Could Have | Simulator pemilih tipe kain, motif klasik Banjar, dan dedaunan lokal dengan estimasi waktu pengerjaan dan tombol export pesanan ke format WhatsApp. | `BespokeConfigurator` |
| **SEC-11** | **Verified Artisan Ledger** | Must Have | Kartu profil dedikasi para ibu penjelujur Kampung Sasirangan (Acil Aminah, Ibu Rusnah, Mbak Nurul) sebagai bukti sosial otentik pengganti ulasan rekaan. | `ArtisanLedger` |

---

## 4. Technical & Non-Functional Requirements (NFR)

### Tech Stack Baseline (Locked via Engineering Architecture)
- **Framework:** Nuxt 4 (App Directory architecture di dalam folder `/app`).
- **Engine UI:** Vue 3 Composition API `<script setup lang="ts">` dengan pengetikan TypeScript ketat.
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` dengan pemetaan variabel CSS murni di `:root`.
- **Kinetic Motion:** Lenis Smooth Scroll untuk navigasi halaman yang luwes dan berbobot.
- **Ikonografi:** Ikon garis vektor presisi tinggi (Lucide Icons).

### Responsiveness & Mobile Architecture
- Mematuhi standar multi-state reflow: Ponsel (< 600px, 1 kolom penuh), Tablet (600px sampai 1024px, 2 kolom seimbang), Desktop (> 1024px, bento asimetris).
- Larangan `100vh` kaku pada mobile; wajib menggunakan unit `dvh` atau `auto`.
- Target sentuh interaktif (*tap targets*) minimal 44 x 44 piksel pada layar sentuh.
- Nol kebocoran scroll horizontal pada resolusi sempit (360px sampai 390px).

### Aksesibilitas (WCAG AA) & Performa
- Seluruh teks memenuhi rasio kontras minimal 4.5:1 terhadap latar belakang (teruji via Python `contrast-check.py`).
- Seluruh elemen interaktif menyediakan cincin fokus terlihat jelas (`:focus-visible`).
- Target skor performa Lighthouse mobile minimal 90 dengan optimasi format gambar modern (WebP).
- Struktur semantik HTML yang rapi (`header`, `main`, `section`, `article`, `footer`).

---

## 5. Explicit Out of Scope (Batasan Tegas Fase MVP)

Untuk menjaga peluncuran cepat dan fokus pada konversi langsung, hal berikut berada di luar cakupan MVP:
1. **Sistem Payment Gateway Otomatis:** Pembayaran dilakukan melalui transfer bank manual atau pembayaran tunai langsung di studio setelah konfirmasi WhatsApp.
2. **Sistem Akun & Autentikasi Pengguna:** Tidak ada fitur pendaftaran login atau keranjang belanja multi-produk yang rumit.
3. **Penyimpanan Database Backend Kompleks:** Seluruh data katalog, formula pigmen, dan jadwal lokakarya dikelola melalui composable data statis yang bersih di dalam aplikasi.

---

## 6. Pitch Readiness & Soft-Selling Checklist

- [x] Apakah proposisi nilai langsung menjawab keresahan limbah tekstil dan kebutuhan busana etnik kasual adem?
- [x] Apakah alamat studio mencantumkan lokasi riil di pusat Kampung Sasirangan (Jl. Seberang Mesjid Gg. Paris RT.06/RW.01, Banjarmasin)?
- [x] Apakah tombol WhatsApp menggunakan teks pembuka otomatis yang memudahkan calon pembeli memilih produk atau jadwal lokakarya?
- [x] Apakah seluruh rona warna diturunkan secara organik dari bahan botani asli Kalimantan (daun ketapang, kayu ulin, indigo, kunyit)?
- [x] Apakah dokumen mematuhi standar penulisan alami tanpa kata klise AI dan tanpa karakter em dash?
