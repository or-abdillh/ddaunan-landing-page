# Strategic Audit & Premium Enhancements: DDaunan

> **Document Version:** 1.0.0 | **Status:** Approved | **Last Updated:** 2026-10-05  
> **Governing Agent/Role:** Principal Product Strategist & UX Quality Auditor

### Revision Changelog
| Version | Date | Author / Role | Changes Summary |
|---|---|---|---|
| 1.0.0 | 2026-10-05 | Principal Product Strategist | Inisialisasi audit diferensiasi strategis, penambahan fitur interaktif premium timeline botani, dan arsitektur kepercayaan berselera tinggi |

---

## 1. Premium Positioning Features (Frontend-Only Architecture)

### 1.1 Fitur 1: Interactive Botanical Timeline & Craftsmanship Journey
- **Nama & Konsep Fitur:** *10-Day Botanical Craftsmanship Timeline*.
- **Deskripsi Fungsional:**
  Komponen interaktif berbasis slider/stepper horizontal yang memperlihatkan kronologi 10 hari kelahiran sehelai kain Sasirangan warna alam DDaunan:
  1. *Hari 1-2 (Perburuan & Peracikan Daun):* Pengumpulan daun ketapang kering dan serpihan kayu ulin di Seberang Mesjid serta perebusan 4 jam di kuali tembaga.
  2. *Hari 3-5 (Ketelitian Jarum Jelujur Sirang):* Ratusan tusukan jarum dan tarikan benang katun rapat oleh perajin perempuan lokal.
  3. *Hari 6-8 (Siklus 15 Kali Celup & Aerasi Angin):* Proses pencelupan bertahap dengan jeda pengeringan angin alami di bawah rindangnya pohon pekarangan.
  4. *Hari 9 (Fiksasi Mineral Alami):* Penguncian pigmen warna menggunakan larutan garam batu, tawas, dan kapur sirih tanpa zat penguat kimia buatan.
  5. *Hari 10 (Pembukaan Benang & Pembersihan Lembut):* Pelepasan benang jelujur untuk menyaksikan kemunculan motif putih bergradasi, disusul pembilasan air sumur yang aman disiramkan ke tanaman.
- **Business Impact saat Pitching:**
  Mendidik prospek dan calon pembeli tentang alasan di balik harga kain (Rp 450.000 hingga Rp 2.400.000). Mengubah sudut pandang konsumen dari "membeli selembar kain" menjadi "mengoleksi karya seni bernilai kesabaran 10 hari", menghapus resistensi harga secara natural.
- **Frontend Implementation Logic:**
  State aktif sederhana berbasis indeks langkah (`activeStepIndex`) dengan navigasi tab atau scroll observer yang memperbarui ilustrasi waktu, estimasi jam kerja, dan foto dokumentasi proses.

### 1.2 Fitur 2: Bespoke Botanical & Motif Configurator
- **Nama & Konsep Fitur:** *Interactive Bespoke Wastra Configurator*.
- **Deskripsi Fungsional:**
  Simulator pemilihan kain pesanan khusus yang memungkinkan pelanggan memilih:
  - *Tipe Kain:* Katun Primissima 2 Meter / Sutra Tenun ATBM.
  - *Pilihan Motif Banjar:* Gigi Haruan (Ketajaman Pikir) / Bayam Raja (Wibawa Luhur) / Kangkung Kaombakan (Keteguhan Hati).
  - *Pilihan Ekstrak Daun:* Daun Ketapang (Hijau Zaitun) / Kayu Ulin (Cokelat Tembaga) / Indigofera (Biru Sungai).
  - *Output Dinamis:* Menampilkan estimasi waktu pengerjaan (7-14 hari kerja), estimasi harga, dan tombol "Kirim Format Pesanan ke WhatsApp Studio" yang secara otomatis merangkai teks pesanan terstruktur.
- **Business Impact:**
  Mendorong konversi pesanan bernilai tinggi (*high-ticket custom orders*) untuk kalangan pejabat, kolektor, atau instansi tanpa membutuhkan backend e-commerce yang rumit.

---

## 2. Subtle Trust-Building Architecture

### 2.1 Verified Artisan Ledger (Buku Penghormatan Ibu Perajin Jelujur)
- **Konsep:**
  Menghilangkan testimoni bintang lima generik yang rentan diragukan keasliannya. Menggantikannya dengan seksi dedikasi khusus yang memuat foto dan profil singkat para perajin perempuan Kampung Sasirangan:
  - *Acil Aminah (54 tahun):* 28 tahun mengabdi pada ketelitian tusukan jelujur motif Gigi Haruan.
  - *Ibu Rusnah (47 tahun):* Ahli peracik rendaman kayu ulin tua dengan rona cokelat tembaga abadi.
  - *Mbak Nurul (32 tahun):* Generasi muda Seberang Mesjid yang mengembangkan fermentasi indigo alami.
- **Emosional Hook:**
  Setiap helai pakaian menyertakan kartu fisik bertanda tangan perajin yang bersangkutan, menumbuhkan ikatan batin yang mendalam antara pemakai dan pembuat busana.

### 2.2 River Purity Guarantee & Eco-Transparency Counter
- **Pernyataan Mutu Lingkungan:**
  Menampilkan transparansi audit ramah lingkungan:
  - `0 Gram` Napthol & Logam Berat Sintetis terbuang ke Sungai Martapura.
  - `100%` Air Bilasan Dapat Diserap Tanah Pekarangan Tanpa Mematikan Tanaman.
  - `15 Kali` Pencelupan Bertahap Manual untuk Kepadatan Warna Alami yang Tahan Lama.

### 2.3 Motion & Micro-Interaction Guidance
- **Scroll Pinning / Subtle Horizontal Reveal:** Pada bagian Timeline 10 Hari, teks waktu bergerak mengalir tenang mengikuti guliran Lenis.
- **Tactile Border Glow:** Kartu profil perajin menampilkan garis batas tipis yang menyala lembut dalam rona emas kunyit (`#8A5A12`/30%) saat kursor melintas.

---

## 3. Document Sync Log

- [x] Fitur *10-Day Botanical Craftsmanship Timeline* dan *Bespoke Configurator* disinkronkan ke `docs/05-prd.md` (Versi 1.1.0).
- [x] Spesifikasi komponen interaktif dan panduan visual baru dicatat pada `docs/04-design-system.md` (Versi 1.1.0).
- [x] Cetak biru storytelling naratif diperbarui pada `docs/03-website-concept.md` (Versi 1.1.0).
