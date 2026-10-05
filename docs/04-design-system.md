# Design System & Visual Guidelines: DDaunan

> **Document Version:** 1.1.0 | **Status:** Approved | **Last Updated:** 2026-10-05  
> **Governing Agent/Role:** Principal Design System Architect & Lead Frontend UI Specialist

### Revision Changelog
| Version | Date | Author / Role | Changes Summary |
|---|---|---|---|
| 1.1.0 | 2026-10-05 | Principal Design System Architect | Menambahkan spesifikasi komponen Verified Artisan Ledger dan Botanical Craftsmanship Timeline hasil strategic audit |
| 1.0.0 | 2026-10-05 | Principal Design System Architect | Inisialisasi sistem desain ramah pemangku kepentingan lintas divisi dengan proteksi 5-Pillar Armor |

---

## 1. Design Foundations

### 1.1 Color Palette & Semantic Meaning
Sistem warna DDaunan berakar langsung pada bahan pewarna alami Sasirangan dari hutan dan sungai Kalimantan Selatan. Palet ini mengutamakan ketenangan mata, kejujuran bahan mentah, dan kehangatan serat katun mori.

| Nama Token | Kode Hex | Asal Usul Alami | Peruntukan Antarmuka | Karakter Psikologis |
|---|---|---|---|---|
| **Peat Moss** | `#1E2D24` | Daun ulin tua dan tanah gambut basah | Tombol utama, bilah navigasi, judul teks utama | Kestabilan, keteduhan hutan tropis, wibawa tradisi |
| **Raw Cotton** | `#F6F4EE` | Serat katun mori mentah tanpa zat pemutih | Kanvas latar belakang utama, kontainer kartu | Kejujuran serat alami, nyaman dibaca lama di layar |
| **Pale Botanical Wash** | `#E4E7DF` | Air rendaman dedaunan pertama | Latar belakang kotak sorotan, kartu fitur sekunder | Kesegaran embun pagi di tepian sungai |
| **Botanical Ochre** | `#8A5A12` | Ekstrak kunyit rimba dan kayu tegeran | Lencana lencana unggulan, penanda aksi interaktif | Kehangatan ramah, energi kreativitas kerajinan |
| **River Slate** | `#2C3B4D` | Fermentasi indigofera Sungai Martapura | Garis batas presisi tipis (*hairline border*), ikon | Ketegasan struktur, keterhubungan dengan air sungai |

### 1.2 Typography Pairing & Hierarchy
Memadukan tipografi klasik berkarakter majalah seni rupa dengan sans-serif modern yang sangat mudah dibaca.
- **Display Serif (Judul Utama):** *Cormorant Garamond* atau *Playfair Display*. Menghadirkan wibawa kerajinan pusaka dengan penjarakan huruf rapat (*tight letter tracking*).
- **Interface Sans-Serif (Teks Tubuh & Navigasi):** *Plus Jakarta Sans* atau *Inter*. Memberikan kejelasan baca yang optimal pada berbagai ukuran layar ponsel cerdas.

---

## 2. Layout & Spacing Philosophy

### 2.1 Spacing Rhythm & Cadence
- **Ukuran Dasar (Base Grid):** Menggunakan kelipatan 8 piksel (8px, 16px, 24px, 32px, 48px, 64px, 96px).
- **Lebar Maksimal Kontainer:** Kontainer utama dibatasi maksimal 1280 piksel (`max-w-7xl`) dengan ruang bantalan (*padding*) horizontal 20 piksel pada ponsel dan 40 piksel pada desktop.
- **Variasi Ritme Vertikal:** Mengurangi jarak antar-bagian desktop (80 sampai 120 piksel) menjadi sekitar setengahnya pada ponsel (40 sampai 56 piksel) agar pengguna ponsel tidak perlu menggulir ruang kosong yang berlebihan.

---

## 3. Component Visual Specifications

### 3.1 Tombol Interaktif (Buttons)
- **Tombol Utama (Primary Action):** Bentuk kapsul modern (`rounded-full`), berlatar Peat Moss (`#1E2D24`), teks katun mentah (`#F6F4EE`), ukuran sentuh minimal 44 piksel tinggi dan lebar. Memberikan respons sedikit membesar saat diarahkan kursor.
- **Tombol Sekunder (Secondary Action):** Bentuk kapsul bergaris batas tipis River Slate (`#2C3B4D`/20), teks Peat Moss, dengan ikon panah diagonal ke kanan atas.
- **Tombol Terapung WhatsApp:** Ikon mengambang di pojok kanan bawah ponsel dengan bantalan aman di atas bilah navigasi perangkat.

### 3.2 Kontainer & Kartu (Cards)
- **Hierarki Lengkungan:** Kartu produk menggunakan sudut melengkung `rounded-2xl` (16 piksel) atau `rounded-3xl` (24 piksel).
- **Batas Rambut Presisi:** Garis batas 1 piksel dengan transparansi halus (`border border-[#2C3B4D]/15`).
- **Bayangan Ambien Lembut:** Bayangan berlapis tipis yang hanya menguat saat kartu disentuh, menghindari drop shadow hitam pekat yang kotor.

### 3.3 Lencana Penanda (Badges & Tags)
- Berbentuk kapsul penuh (`rounded-full`), berlatar Botanical Ochre dengan teks kontras tinggi, digunakan untuk menandai informasi penting seperti status ketersediaan atau label lokakarya.

### 3.4 Verified Artisan Cards (Buku Perajin Seberang Mesjid)
- Kartu potret perajin berbingkai halus (`rounded-2xl border border-[#2C3B4D]/15`), memuat foto hitam-putih hangat perajin sedang memegang jarum sirang, disertai kutipan dedikasi tangan dan jam terbang keahlian.

### 3.5 Craftsmanship Timeline Track
- Garis waktu horizontal responsif yang runtuh rapi menjadi vertikal pada layar ponsel, menampilkan indikator titik emas (`#8A5A12`) dengan deskripsi 5 tahap kelahiran kain Sasirangan alami.

---

## 4. Photography & Asset Curation Guidelines

### 4.1 Panduan Kurasi Foto Unsplash
- **Tema Utama:**
  - Tekstur makro kain katun berjelujur tangan (*hand-stitched basting detail*).
  - Tangan perajin sedang merendam kain di kuali rebusan alami pekarangan.
  - Busana potongan kasual tropis yang dikenakan di ruang terbuka bersinar matahari pagi alami.
- **Karakter Visual:**
  - Pencahayaan hangat alami (*natural diffused sunlight*).
  - Hindari foto yang terlalu disaturasi secara digital. Pertahankan warna tanah dan hijau dedaunan yang lembut.
  - Terapkan perpaduan tepi halus (*rounded mask*) agar foto menyatu secara organik dengan kanvas kain mentah.
