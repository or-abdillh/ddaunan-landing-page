# Website Creative Concept & Art Direction: DDaunan

> **Document Version:** 1.1.0 | **Status:** Approved | **Last Updated:** 2026-10-05  
> **Governing Agent/Role:** Executive Creative Director & Design Lead

### Revision Changelog
| Version | Date | Author / Role | Changes Summary |
|---|---|---|---|
| 1.1.0 | 2026-10-05 | Executive Creative Director | Mengintegrasikan 10-Day Botanical Timeline dan Verified Artisan Ledger ke dalam alur narasi hasil audit strategis |
| 1.0.0 | 2026-10-05 | Executive Creative Director | Inisialisasi konsep website kreatif tingkat agensi non-klise dengan perlindungan frontend-design dan antislop-ui |

---

## 1. Core Concept & Positioning Anchor

### Creative Thesis
DDaunan menolak tampilan template komersial generik yang serba kotak dan datar. Pengalaman digital DDaunan dirancang seperti membuka lembaran arsip botani basah di tepian Sungai Martapura: tenang, lapang, bertekstur serat alami, serta menghormati setiap tarikan benang jelujur tangan. Antarmuka memadukan keanggunan editorial majalah seni rupa dengan interaktivitas cerdas yang memperlihatkan transformasi dedaunan Kalimantan menjadi rona warna wastra murni tanpa setitik pun racun sintetis.

### Visual Archetype: Artisanal Editorial Luxury
- **Pilihan Arketipe:** *Artisanal Editorial Luxury* (Kemewahan Kerajinan Berkarakter Editorial).
- **Karakter:** Tenang, berwibawa, menghargai waktu dan proses (*slow craft*), serta menyajikan tipografi puitis berdisiplin tinggi tanpa ornamen palsu.

### 3-Second Emotional Hook
Saat pertama kali halaman termuat, pengunjung langsung merasakan desir angin tenang di beranda rumah panggung Banjar: kanvas katun mori mentah yang adem di mata, judul berskala anggun, serta visual tetesan pigmen daun ketapang yang meresap ke dalam serat kain.

---

## 2. Art Direction, Background & Depth Strategy

### Layout Philosophy
- **Asymmetrical Overlapping Canvas:** Menggabungkan bidang teks editorial dengan kartu foto yang bertumpuk halus (*layered overlap*) untuk menciptakan kedalaman bertingkat, menggantikan tata letak kolom kaku 50:50.
- **Dynamic Bento Grid pada Bagian Koleksi:** Mengelompokkan penawaran berdasarkan bobot informasi riil (kain primissima 2 meter dan kemeja siap pakai menempati kartu visual vertikal 2 baris, sementara cenderamata scarf dan tiket lokakarya menempati kartu ringkas 1 kolom).
- **Cadence of Section Heights:** Memvariasikan ritme vertikal secara dramatis: Hero megah setinggi satu layar penuh (`min-h-[92dvh]`), diikuti pita pengenal tipis (*origin strip*), kemudian ruang eksplorasi bento yang lapang, dan ditutup dengan undangan studio yang intim.

### Background Canvas Artistry
- **Warna Kanvas Utama:** Raw Cotton / Mori Mentah (`#F6F4EE`) sebagai bidang utama yang hangat dan ramah bagi mata.
- **Tekstur Taktil Alami (Subtle Noise Texture):** Lapisan tipis tekstur serat katun via SVG filter beropasitas 3 persen untuk menghilangkan kesan datar layar digital.
- **Ambient Glow Terukur (Dose Cap: 1 Titik Fokus):** Satu pendaran cahaya lembut berona Botanical Ochre (`#8A5A12`) dengan radius kabur luas (`blur-3xl`) dan opasitas 6 persen di sudut kanan atas area Hero.
- **Pola Geometris Halus:** Garis jelujur putus-putus tipis (*dashed stitch lines*) yang terinspirasi dari pola jahitan sirang motif Gigi Haruan sebagai aksen pembatas antar-bagian.

### Depth & Border Treatments
- **Hairline Precision Borders:** Setiap kartu produk dan kontainer menggunakan garis batas rambut setebal 1 piksel dengan transparansi terukur: `border border-[#2C3B4D]/15`.
- **Controlled Glassmorphism (Dose Cap: 1 Elemen):** Efek kaca buram halus (*frosted backdrop-blur*) hanya diterapkan pada bilah navigasi lengket (*Sticky Navbar*) saat pengguna menggulir halaman.
- **Bayangan Ambien Bertingkat (Soft Ambient Shadows):** Menggunakan bayangan lembut berlapis ganda (`shadow-[0_8px_30px_rgb(30,45,36,0.06)]`) pada kartu yang sedang disentuh kursor.

---

## 3. Typography Stance & Dramatic Hierarchy

### Headline Expression
- **Font Judul (Display Serif):** Menggunakan tipografi Editorial Serif klasik berkarakter anggun (seperti *Cormorant Garamond* atau *Playfair Display*) dengan penjarakan huruf rapat (`tracking-tight` atau `tracking-tighter`).
- **Skala Dramatis:** Rasio kontras dramatis antara Display Hero Headline (`text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.05]`) dengan metadata mikro (`text-xs font-sans tracking-[0.25em] uppercase text-[#1E2D24]/70`).

### Body Copy & Navigasi
- **Font Teks Bacaan:** Menggunakan Modern Geometric Sans-Serif bersih (*Plus Jakarta Sans* atau *Inter*) dengan ketebalan reguler hingga medium untuk memastikan keterbacaan tinggi pada layar ponsel cerdas.

---

## 4. Hero Section Blueprint (The Showstopper)

### Visual Structure & Geometry
- **Tata Letak Asimetris:**
  - *Sisi Kiri (60% Desktop):* Eyebrow metadata penanda lokasi geografis ("SEBERANG MESJID, BANJARMASIN"), Headline display berskala besar, paragraf proposisi nilai lugas, dan klaster tombol aksi ganda.
  - *Sisi Kanan (40% Desktop):* Komponen interaktif *Botanical Pigment Visualizer* yang menyatu dengan kartu foto kain Sasirangan resolusi tinggi.

### Interactive Showstopper Moment: Botanical Pigment Visualizer
- **Mekanisme Interaktif:**
  Pengunjung dapat menekan 4 piringan sampel pigmen botani Kalimantan:
  1. *Daun Ketapang:* Menampilkan transformasi rona hijau zaitun matang pada motif Gigi Haruan.
  2. *Getah Ulin:* Menampilkan rona cokelat tembaga teduh khas kayu besi Borneo pada motif Bayam Raja.
  3. *Indigofera Lokal:* Menampilkan rona biru sungai Martapura pada motif Kangkung Kaombakan.
  4. *Kunyit Rimba:* Menampilkan rona kuning keemasan hangat pada motif Hiris Pudak.
- Setiap kali piringan pigmen dipilih, foto kain peraga melakukan transisi rona halus (*cross-fade dissolve*) disertai keterangan resep botani dan rasio fiksasi alami.

### Primary Media Element
Foto beresolusi tinggi yang menampilkan perajin perempuan Banjar sedang mengangkat kain Sasirangan dari kuali rebusan alami, dengan latar belakang pekarangan studio di Seberang Mesjid dan uap air tipis yang terkena cahaya matahari pagi.

### Call-to-Action (CTA) Cluster
- **Tombol Utama (Magnetic Pill Button):** "Pesan Kain & Busana" (latar Peat Moss `#1E2D24` dengan teks Raw Cotton `#F6F4EE`, beradius penuh `rounded-full`, respon kursor magnetik).
- **Tombol Sekunder:** "Ikuti Lokakarya Studio" (garis batas River Slate dengan ikon panah diagonal ke kanan atas).
- **Lencana Bukti Nyata (First-Day Trust Badge):** "100% Pewarna Botani • Nol Residu Kimia di Sungai Martapura" bertengger rapi di bawah tombol aksi.

---

## 5. Storytelling Rhythm & Section Narrative

### Section 1: Hero Section (The Botanical Prelude)
- **Fungsi:** Menghentikan guliran layar (*scroll stopper*) dan menanamkan proposisi nilai dalam 3 detik pertama melalui interaksi Botanical Pigment Visualizer.

### Section 2: River Origin Strip (Pita Sentra Budaya Seberang Mesjid)
- **Fungsi:** Kompresi visual tipis berlatar Pale Botanical Wash (`#E4E7DF`).
- **Isi:** Fakta geografis sentra tertua Kampung Sasirangan, komitmen pelestarian sungai, dan transparansi sertifikasi formula alami.

### Section 3: The Antagonist & The Craft (Melawan Limbah Tekstil Kimia)
- **Fungsi:** Menghadirkan alasan moral keberadaan DDaunan melalui perbandingan visual berdampingan:
  - *Sisi Gelap:* Fakta pembuangan limbah napthol tekstil sintetis ke saluran air sungai.
  - *Sisi Terang DDaunan:* Proses perebusan daun lokal, fiksasi garam dan tawas alami, serta air bilasan sisa celup yang aman disiramkan ke tanaman pekarangan.

### Section 3b: 10-Day Botanical Craftsmanship Timeline (Fitur Premium)
- **Fungsi:** Komponen interaktif pembuktian nilai (*craftsmanship proof*) yang memaparkan 5 fase waktu kelahiran sehelai wastra (rebusan daun, tusukan jelujur sirang, 15x celup bertahap, fiksasi mineral alami, dan pelepasan benang) untuk menjustifikasi nilai busana berstandar karya seni tinggi.

### Section 4: Core Offerings (Dynamic Bento Catalog)
- **Fungsi:** Menampilkan katalog produk 3 tingkat secara elegan:
  - *Kartu 1 (2 Kolom x 2 Baris):* Busana Siap Pakai Kasual (Kemeja kerah terbuka dan rompi luar berpotongan modern).
  - *Kartu 2 (1 Kolom x 2 Baris):* Kain Katun Primissima 2 Meter Motif Klasik (Gigi Haruan, Bayam Raja).
  - *Kartu 3 (1 Kolom x 1 Baris):* Scarf dan Aksesoris Cenderamata Cepat.
  - *Kartu 4 (1 Kolom x 1 Baris):* Paket Selendang Sutra Eksklusif Pesanan Khusus.

### Section 5: The Open Studio & Workshop Experience (Lokakarya Terbuka)
- **Fungsi:** Menghubungkan pengunjung ke pengalaman fisik di studio Seberang Mesjid.
- **Interaksi:** Jadwal lokakarya interaktif mingguan dengan pemilih tanggal, rincian aktivitas (memola, menjelujur, mencelup daun, membuka ikatan sirang), dan tombol reservasi WhatsApp langsung.

### Section 6: First-Day Trust Anchors (Fondasi Kredibilitas Transparan)
- **Fungsi:** Menghilangkan keraguan pembeli tanpa menggunakan testimoni rekaan:
  - Kartu Formula Terbuka (*Open Recipe*).
  - Kartu Garansi 30 Hari Perawatan dan Penggantian.
  - Kartu Sabun Lerak Alami Gratis.

### Section 6b: Verified Artisan Ledger (Buku Perajin Seberang Mesjid)
- **Fungsi:** Menyajikan profil nyata para ibu penjelujur Kampung Sasirangan dengan foto kerja hitam-putih hangat dan kutipan dedikasi tangan, memberikan bukti sosial otentik yang melampaui ulasan bintang lima biasa.

### Section 7: Conversion Closing & Riverside Invitation (Penutup Aksi)
- **Fungsi:** Mengundang kunjungan fisik ke studio di Seberang Mesjid Gg. Paris atau konsultasi pesanan busana khusus melalui WhatsApp Business.
- **Peta Visual:** Diagram rute sederhana dari pusat kota Banjarmasin menuju dermaga Kampung Sasirangan.

---

## 6. Kinetic Motion & Micro-UX Philosophy

### Smooth Scroll Standard (Default: Lenis)
- Navigasi halaman menggunakan **Lenis Smooth Scroll** untuk menghasilkan pergerakan gulir yang luwes, berbobot, dan mengalir seperti aliran air sungai tenang.

### Motion Character: Restrained & Organic
- Transisi elemen menggunakan percepatan alami (*cubic-bezier(0.16, 1, 0.3, 1)*).
- Gerakan teks judul muncul secara bertingkat (*staggered reveal*) per baris kata saat memasuki viewport.
- Dilarang menggunakan animasi berputar, memantul ekstrem, atau efek zoom kasar yang mengganggu kenyamanan membaca.

### Hover & Active States
- **Tombol Magnetik:** Tombol utama sedikit bergeser mengikuti arah kursor saat didekati (maksimal perpindahan 4 piksel).
- **Kartu Produk:** Sedikit terangkat secara halus (`translate-y-[-4px]`) dengan garis batas yang menjadi lebih tegas saat diarahkan kursor.

---

## 7. Premium Signals & Anti-Slop Guardrails (antislop-ui & frontend-design)

1. **Kepatuhan Batas Dosis (Dose Caps):**
   - Glassmorphism dibatasi maksimal 1 elemen (Sticky Navbar).
   - Ambient Glow dibatasi maksimal 1 titik fokus di area Hero (kuning rimba opasitas 6%).
2. **Kepatuhan Anti-Klise:**
   - Menolak kombinasi AI generik (tidak memakai cream-terracotta ataupun black-acid-green).
   - Menolak tata letak 3 kartu seragam membosankan.
   - Nol emoji dekoratif pada teks antarmuka.
3. **Kepatuhan Aksesibilitas & Responsif Ponsel:**
   - Semua warna teks dan latar mematuhi rasio kontras WCAG AA (minimal 4.5:1 untuk teks normal).
   - Seluruh target interaktif memenuhi ukuran minimal 44 x 44 piksel pada ponsel.
   - Penataan grid bertingkat runtuh (*collapse*) secara tertib menjadi 1 kolom yang nyaman dibaca pada layar sempit tanpa kebocoran scroll horizontal.
