# 🏢 Panduan Halaman Baru: Registrasi Badan Usaha Baru
### BPJS Kesehatan KC Pematangsiantar — Landing Page Panduan Pendaftaran

---

## 📌 Ringkasan

Dibuat **1 halaman landing page baru** yang berdiri sendiri (terpisah dari `index.html`) khusus untuk memandu Badan Usaha yang ingin mendaftar baru ke BPJS Kesehatan.

| File | Keterangan |
|---|---|
| `registrasi-badan-usaha.html` | Halaman baru — panduan lengkap registrasi Badan Usaha |
| `registrasi-badan-usaha.css` | Style khusus halaman ini (memakai token warna yang sama dengan `style.css`, tidak mengubah file lama) |
| `registrasi-badan-usaha.js`  | Interaksi khusus halaman ini (accordion FAQ, sub-navigasi, animasi scroll) |
| `index.html` | +1 menu navbar "Registrasi BU Baru", +1 banner CTA di atas section Informasi Layanan, +1 tautan di footer |
| `script.js` | +6 i18n key baru (ID & EN) untuk menu navbar & banner di `index.html` |

**Alur navigasi:** `index.html` → klik menu **"Registrasi BU Baru"** (navbar) atau banner **"Lihat Panduan Registrasi"** → `registrasi-badan-usaha.html`

---

## 📁 WAJIB: Upload 6 Berkas ke Folder Ini

Buat folder baru bernama `files/registrasi-badan-usaha/` lalu upload ke-6 file berikut **persis dengan nama ini** (huruf besar/kecil dan spasi harus sama):

| No | Nama File | Jenis | Digunakan Untuk |
|---|---|---|---|
| 1 | `Form BU Regis.xls` | Excel | Formulir 1 — Data Pendaftaran Badan Usaha |
| 2 | `Form 2 BU Regis.xls` | Excel | Formulir 2 — Data Pendaftaran Pekerja |
| 3 | `DAFTAR GAJI DAN FASKES I.xls` | Excel | Daftar gaji pekerja & pemilihan Faskes Tingkat I |
| 4 | `Form 4 BU Regis.doc` | Word | Formulir 4 — Data tambahan/perubahan Badan Usaha |
| 5 | `Pakta Integritas Edabu.docx` | Word | Surat pernyataan Pakta Integritas eDabu |
| 6 | `SYARAT BADAN USAHA 2.pdf` | PDF | Checklist & penjelasan lengkap syarat dokumen Badan Usaha |

> Jika nama file yang diupload berbeda, tombol unduh pada halaman **tidak akan berfungsi (404)**. Jika ingin mengganti nama file, cari-dan-ganti path-nya di `registrasi-badan-usaha.html` pada bagian `<!-- BERKAS PENDAFTARAN (6 FILE) -->`.

Struktur folder akhirnya:
```
files/
└── registrasi-badan-usaha/
    ├── Form BU Regis.xls
    ├── Form 2 BU Regis.xls
    ├── DAFTAR GAJI DAN FASKES I.xls
    ├── Form 4 BU Regis.doc
    ├── Pakta Integritas Edabu.docx
    └── SYARAT BADAN USAHA 2.pdf
```

---

## 🗂️ Struktur Halaman `registrasi-badan-usaha.html`

```
┌───────────────────────────────────────────┐
│  Navbar (sama seperti index.html)         │
│  Breadcrumb: Beranda > Registrasi BU Baru │
├───────────────────────────────────────────┤
│  HERO — judul, ringkasan cepat, 2 tombol  │
│  CTA: "Unduh Berkas" & "Lihat Alur"       │
├───────────────────────────────────────────┤
│  Sub-navigasi sticky (loncat antar bagian)│
├───────────────────────────────────────────┤
│  1. Syarat Badan Usaha (4 kartu)          │
│     NIB · NPWP · KTP Pekerja · KK Pekerja │
├───────────────────────────────────────────┤
│  2. Berkas Pendaftaran (6 kartu unduh)    │
├───────────────────────────────────────────┤
│  3. Alur Pendaftaran (stepper 6 langkah)  │
├───────────────────────────────────────────┤
│  4. Ketentuan Penting (5 kotak info)      │
│     UMK · Gaji Pokok+Tunjangan · Faskes I │
│     Waktu berlaku · Syarat Sertifikat BU  │
├───────────────────────────────────────────┤
│  5. Ketentuan Umum Pendaftaran (8 poin)   │
├───────────────────────────────────────────┤
│  6. FAQ (6 pertanyaan, accordion)         │
├───────────────────────────────────────────┤
│  CTA akhir + Footer                       │
└───────────────────────────────────────────┘
```

---

## ✏️ Cara Mengubah Isi Halaman

### 1. Ubah Teks Ketentuan Penting

Buka `registrasi-badan-usaha.html`, cari komentar:
```html
<!-- KETENTUAN PENTING (notice callouts) -->
```
Setiap ketentuan berada di dalam `<div class="rb-notice ...">`. Ubah teks di dalam `<div class="rb-notice-body">`.

### 2. Tambah / Ubah Langkah pada Alur Pendaftaran

Cari komentar:
```html
<!-- ALUR PENDAFTARAN -->
```
Setiap langkah adalah satu blok `<div class="rb-step">`. Salin salah satu blok, ubah angka pada `<div class="rb-step-num">`, judul pada `.rb-step-title`, dan deskripsi pada `.rb-step-desc`.

### 3. Tambah / Ubah Pertanyaan FAQ

Cari komentar `<!-- FAQ -->`, lalu salin satu blok `<div class="rb-faq-item">` untuk menambah pertanyaan baru:
```html
<div class="rb-faq-item">
  <button class="rb-faq-q">Pertanyaan Anda di sini? <i class="fa-solid fa-chevron-down"></i></button>
  <div class="rb-faq-a">Jawaban Anda di sini.</div>
</div>
```

### 4. Ubah Nama / Deskripsi Berkas Unduhan

Cari komentar `<!-- BERKAS PENDAFTARAN (6 FILE) -->`. Setiap berkas ada di dalam `<div class="rb-file-card">`:
```html
<div class="rb-file-name">Form BU Regis.xls</div>
<div class="rb-file-desc">Formulir 1 — Data Pendaftaran Badan Usaha</div>
<a href="files/registrasi-badan-usaha/Form BU Regis.xls" download class="rb-file-dl">...</a>
```
Jika mengganti nama file, ubah di 3 tempat: `rb-file-name`, atribut `href`, dan `aria-label`.

---

## 🔗 Cara Mengakses Halaman dari `index.html`

Ada 3 cara masuk ke halaman ini dari `index.html`:
1. **Menu navbar** — "Registrasi BU Baru" (desktop & mobile hamburger menu)
2. **Banner CTA** — kotak biru "Badan Usaha Anda Baru Berdiri?" tepat di atas section Informasi Layanan
3. **Footer** — tautan "Registrasi Badan Usaha Baru" di kolom Tautan Cepat

Semua sudah otomatis aktif tanpa perlu konfigurasi tambahan.

---

## 🎨 Catatan Teknis

- Halaman baru **tidak mengubah isi `style.css` maupun `script.js` yang lama** (kecuali menambah 6 baris i18n baru & 1 baris menu navbar) — seluruh style unik halaman ini berdiri sendiri di `registrasi-badan-usaha.css`, dan seluruh interaksi unik (accordion FAQ, sub-nav aktif, animasi scroll) berdiri sendiri di `registrasi-badan-usaha.js`.
- Halaman tetap memakai `style.css` dan `script.js` yang sama agar navbar, dark/light mode, dan tombol back-to-top tetap konsisten dan otomatis berfungsi.
- Sudah responsif: desktop (4 kolom syarat, 3 kolom berkas) → tablet (2 kolom) → mobile (1 kolom).
- Sumber ketentuan pada bagian "Ketentuan Umum Pendaftaran Badan Usaha" merangkum ketentuan kepesertaan JKN (Peraturan Presiden tentang Jaminan Kesehatan), ketentuan NIB melalui sistem OSS, dan prosedur administrasi resmi BPJS Kesehatan. **Selalu konfirmasikan ke kantor cabang untuk ketentuan paling mutakhir**, karena regulasi dapat berubah sewaktu-waktu.

---

## 📝 Riwayat Perubahan

| Tanggal | Perubahan |
|---|---|
| Agu 2026 | Halaman baru `registrasi-badan-usaha.html`: syarat Badan Usaha, 6 berkas unduhan, alur 6 langkah, ketentuan penting (UMK, gaji pokok+tunjangan, Faskes I, waktu berlaku, syarat Sertifikat BU 100% pekerja), ketentuan umum, FAQ · Tautan ditambahkan ke navbar, banner, dan footer `index.html` |

---

*BPJS Kesehatan KC Pematangsiantar — Pusat Informasi Badan Usaha*
