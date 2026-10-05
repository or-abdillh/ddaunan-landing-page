# Design Direction Document: DDaunan

> **Document Version:** 1.0.0 | **Status:** Approved | **Last Updated:** 2026-10-05  
> **Governing Agent/Role:** Senior Brand Designer & Visual Strategist

### Revision Changelog
| Version | Date | Author / Role | Changes Summary |
|---|---|---|---|
| 1.0.0 | 2026-10-05 | Senior Brand Designer | Ekstraksi palet warna botani Kalimantan, verifikasi kontras WCAG AA via antislop-human, dan perumusan panduan visual anti-slop |

---

## 1. Color Palette & WCAG Contrast Verification

Palet warna DDaunan diekstraksi langsung dari material organik pewarna alami Sasirangan di Kalimantan Selatan: dedaunan ketapang, getah kayu ulin, kunyit rimba, fermentasi tanaman indigo, serta kain mori katun tanpa pemutih kimia (*unbleached raw cotton*). Seluruh kombinasi warna telah diuji menggunakan skrip verifikasi kontras mandiri (`contrast-check.py`).

| Kategori | Nama Warna & Asal Bahan | Hex Code | Peruntukan UI | WCAG AA Ratio (vs Surface/Text) | Status Uji |
|---|---|---|---|---|---|
| **Primary** | Peat Moss (Daun Ulin & Gambut Basah) | `#1E2D24` | Tombol CTA Utama, Header Navbar, Aksen Struktur Penting | 13.11:1 (vs `#F6F4EE`) | **PASS** (Normal >= 4.5:1, Large >= 3.0:1) |
| **Secondary** | Pale Botanical Wash (Air Rendaman Daun) | `#E4E7DF` | Latar Belakang Kartu Unggulan, Kontainer Fitur, Border Lembut | 11.53:1 (vs `#1E2D24`) | **PASS** |
| **Neutral Dark** | Peat Deep Slate (Endapan Kayu Ulin Tua) | `#1E2D24` | Judul Utama (Headings), Teks Paragraf Body, Ikon Navigasi | 13.11:1 (vs `#F6F4EE`) | **PASS** (Normal >= 4.5:1) |
| **Neutral Light** | Raw Cotton / Mori Alami (Serat Katun Mentah) | `#F6F4EE` | Kanvas Latar Utama, Latar Kartu Standar, Teks di Atas Tombol Gelap | 13.11:1 (vs `#1E2D24`) | **PASS** |
| **Accent** | Botanical Ochre (Kuning Rimba & Bunga Tegeran) | `#8A5A12` | Penanda Interaktif Khusus, Badge Lokakarya, Tombol Sekunder | 5.38:1 (vs `#F6F4EE`) | **PASS** (Normal >= 4.5:1, Large >= 3.0:1) |
| **Border / Line** | River Slate (Indigofera Sungai Martapura) | `#2C3B4D` | Garis Batas Presisi (*Hairline Border*), Pembatas Kolom | 10.38:1 (vs `#F6F4EE`) | **PASS** |

*Catatan Kontras Tombol CTA:*
- Teks Mori Alami (`#F6F4EE`) di atas Tombol Peat Moss (`#1E2D24`): Rasio **13.11:1** (Sangat Kontras dan Aman).
- Teks Mori Alami (`#F6F4EE`) di atas Tombol Aksen Ochre (`#8A5A12`): Rasio **5.38:1** (Lolos Uji Standar WCAG AA).

---

## 2. Visual Identity & Mood Analysis

### Core Personality
1. **Artisanal Grounded (Kerajinan Membumi):** Menampilkan kejujuran tekstur serat kain, tarikan benang jelujur tangan, dan rona warna tumbuhan tanpa kepalsuan efek sintetis.
2. **Riverside Serenity (Ketenangan Tepian Sungai):** Mencerminkan suasana damai perkampungan tepi Sungai Martapura di pagi hari, tempat kain-kain Sasirangan dijemur di bawah sinar matahari tropis.
3. **Restrained Editorial (Keanggunan Berdisiplin):** Mengedepankan ruang bernapas yang lapang, tipografi berpola majalah seni rupa, serta susunan informasi yang tenang tanpa elemen visual yang berteriak.

### Psychological Impact
Kombinasi warna hijau gambut tua dan katun mentah memberikan rasa ketenangan batin, kepercayaan terhadap kemurnian bahan, serta keterhubungan dengan alam. Aksen kuning rimba dari ekstrak kayu tegeran memberikan sentuhan kehangatan yang mengundang pengunjung untuk menyentuh kain atau menghadiri kelas lokakarya secara langsung.

### Photography & Asset Style
- **Subjek Foto:**
  - Detail makro (*close-up*) tekstur kain katun dengan titik jelujur sirang asli yang presisi.
  - Tangki gerabah dan kuali rebusan dedaunan alami yang mengepulkan uap air hangat.
  - Tangan perajin perempuan Banjar yang sedang mencelupkan kain ke dalam larutan warna alami.
  - Foto busana siap pakai yang dikenakan dalam suasana luar ruang tropis alami (taman botani, rumah kayu panggung, atau tepian dermaga sungai).
- **Pencahayaan & Tone Foto:**
  - Cahaya alami pagi atau sore hari (*diffused golden morning light*).
  - Hindari filter saturasi berlebihan atau efek HDR buatan yang membuat warna kain terlihat sintetis.
  - Terapkan perlakuan duotone lembut atau masking beradius lengkung halus agar menyatu serasi dengan kanvas Raw Cotton (`#F6F4EE`).

---

## 3. UI/UX Theming Recommendation

### Base Theme: Warm Artisanal Light Mode
- **Justifikasi Industri:** Produk tekstil wastra ramah lingkungan dan warna alam membutuhkan kanvas terang yang hangat untuk merepresentasikan warna asli kain mori katun. Dark mode pekat tidak cocok sebagai tema dasar karena mengaburkan rona warna tumbuhan asli yang cenderung redup dan bernuansa pastel matang.
- **Karakter Permukaan:** Permukaan kanvas utama menggunakan rona `#F6F4EE` dengan kartu sekunder berona `#E4E7DF`, menciptakan kontras lembut alami tanpa membuat mata lelah.

### Component Styling Direction
- **Border Radius:** Menerapkan hierarki lengkungan yang matang dan organik:
  - Kartu Produk & Kontainer Showcase: `rounded-2xl` (16px) hingga `rounded-3xl` (24px) untuk kesan ramah dan lembut.
  - Tombol CTA Utama: `rounded-full` (gaya kapsul modern) atau `rounded-xl` (12px) dengan ruang sentuh minimal 44 x 44 px untuk kenyamanan jari pada layar ponsel.
- **Elevation & Shadows:**
  - Hindari drop shadow hitam pekat.
  - Gunakan garis batas rambut tipis (*1px hairline border*) dengan transparansi terukur: `border border-[#2C3B4D]/15`.
  - Tambahkan bayangan lembut bertingkat (*multi-layered ambient shadow*) dengan opasitas sangat rendah (5 persen hingga 8 persen) untuk kartu aktif.

### Typography Tone
- **Headline Display (Judul Utama):** Tipografi Editorial Serif berkarakter anggun dan berwibawa (seperti *Playfair Display*, *Cinzel*, atau *Cormorant Garamond*) dengan penjarakan huruf rapat (`tracking-tight`) untuk memancarkan aura tradisi budaya yang luhur.
- **Body & Metadata:** Tipografi Modern Sans-Serif bersih (seperti *Plus Jakarta Sans*, *Inter*, atau *Outfit*) yang mudah dibaca pada layar kecil ponsel dengan keterbacaan tinggi.

---

## 4. Anti-Slop Guardrails & Dose Caps (antislop-ui & antislop-human)

1. **Batas Dosis Visual (Dose Caps):**
   - Efek *glassmorphism* (kaca buram / `backdrop-blur`) dibatasi secara ketat maksimal pada 1 elemen (Sticky Navbar utama saat digulir).
   - Efek pendaran latar (*ambient glow*) dibatasi maksimal pada 1 titik aksen lembut di area Hero (menggunakan rona kuning rimba `#8A5A12` dengan opasitas 6 persen dan blur luas). Dilarang menempatkan pendaran di belakang kartu produk.
2. **Larangan Emoji Dekoratif:**
   - Dilarang keras menempatkan emoji dekoratif (seperti daun, api, bintang, atau roket) pada teks judul, label tombol, atau kartu fitur. Seluruh visual wajib menggunakan tipografi bersih atau ikon garis SVG berpresisi tinggi.
3. **Integritas Kontras Foto dan Latar:**
   - Setiap teks yang diletakkan di atas foto kain atau banner visual wajib menggunakan lapisan pelindung (*scrim overlay*) berupa gradasi warna Peat Moss (`#1E2D24`) dengan densitas minimal 60 persen pada titik pembacaan teks agar tetap memenuhi rasio kontras 4.5:1.
4. **Target Sentuh Mobile:**
   - Seluruh elemen yang dapat diklik atau disentuh (tombol WhatsApp, tautan navigasi, kartu filter kategori) wajib memiliki area sentuh minimal 44 x 44 piksel pada tampilan ponsel cerdas.
