# 🏥 Pusat Informasi Badan Usaha
## BPJS Kesehatan KC Pematangsiantar

<div align="center">

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-blue?style=for-the-badge&logo=github)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Website informasi layanan administrasi Badan Usaha BPJS Kesehatan KC Pematangsiantar.**  
Dibangun dengan HTML5, CSS3, dan Vanilla JavaScript — siap deploy ke GitHub Pages tanpa framework tambahan.

[🌐 Lihat Demo](#-deploy-ke-github-pages) · [📋 Fitur](#-fitur) · [📁 Struktur File](#-struktur-file) · [⚙️ Konfigurasi](#-konfigurasi) · [🚀 Deploy](#-deploy-ke-github-pages)

---

</div>

## 📋 Fitur

| Fitur | Deskripsi |
|---|---|
| 🌙 **Dark / Light Mode** | Toggle tema gelap/terang, tersimpan otomatis di browser, sinkron dengan setelan OS |
| 🌐 **Bilingual (ID / EN)** | Semua konten tersedia dalam Bahasa Indonesia dan English, toggle di navbar |
| 📱 **Fully Responsive** | Optimal di semua ukuran layar: mobile, tablet, laptop, desktop |
| 📄 **Informasi Layanan** | 5 kartu dokumen utama (PDF, JPG, DOCX) dengan tombol lihat/unduh |
| 📚 **Panduan eDabu (11 Panduan)** | Sub-menu panduan administrasi kepesertaan, dilengkapi filter kategori |
| 📰 **What's New** | Seksi berita/pengumuman terkini dengan gambar, kategori, dan badge |
| 🖼️ **Galeri + Lightbox** | Grid foto kegiatan dengan viewer fullscreen, navigasi keyboard, klik luar untuk tutup |
| 📢 **News Ticker** | Scrolling bar pengumuman di bawah hero, loop otomatis |
| ✨ **Hero Particles** | Animasi partikel mengambang di section hero |
| 👥 **Contact Person** | 4 kartu petugas dengan foto, nama, dan tombol langsung ke WhatsApp |
| 📍 **Lokasi + Maps** | Embed Google Maps dengan info jam operasional dan tombol petunjuk arah |
| ⬆️ **Back to Top** | Tombol kembali ke atas yang muncul saat scroll ke bawah |
| 🔄 **Scroll Reveal** | Kartu muncul dengan animasi saat pertama kali masuk ke viewport |

---

## 📁 Struktur File

```
/
├── index.html                                        ← Halaman utama
├── style.css                                         ← Semua styling (dark/light, responsive)
├── script.js                                         ← Semua interaktivitas (i18n, tema, galeri, dll)
├── README.md                                         ← Dokumentasi ini
│
└── files/
    │
    ├── photos/
    │   ├── logo-bpjs.png                             ← Logo BPJS Kesehatan (navbar & hero)
    │   ├── siantar.png                               ← Favicon (ikon tab browser)
    │   ├── evalyn.jpg                                ← Foto Contact Person 1
    │   ├── dzaky.jpg                                 ← Foto Contact Person 2
    │   ├── andri.jpg                                 ← Foto Contact Person 3
    │   ├── junaina.jpg                               ← Foto Contact Person 4
    │   ├── news1.jpg                                 ← Foto berita What's New 1
    │   ├── news2.jpg                                 ← Foto berita What's New 2
    │   ├── news3.jpg                                 ← Foto berita What's New 3
    │   ├── galeri1.jpg                               ← Foto galeri 1
    │   ├── galeri2.jpg                               ← Foto galeri 2
    │   ├── galeri3.jpg                               ← Foto galeri 3
    │   ├── galeri4.jpg                               ← Foto galeri 4
    │   ├── galeri5.jpg                               ← Foto galeri 5
    │   └── galeri6.jpg                               ← Foto galeri 6
    │
    ├── TATA CARA PENONAKTIFAN PEKERJA DARI EDABU NEW.pdf
    ├── REHAB.jpg
    ├── TATA CARA UBAH GAJI EDABU BADAN USAHA.pdf
    ├── Format Penonaktifan Pekerja.docx
    ├── Usman Edabu BU v 7.14.0.pdf
    │
    └── panduan/
        ├── pendaftaran-karyawan-baru.pdf             ← Pendaftaran Karyawan Baru Belum Terdaftar JKN
        ├── pendaftaran-isat.pdf                      ← Pendaftaran Pekerja dari ISAT di BU yang Sama
        ├── mutasi-keluarga.pdf                       ← Mutasi Anggota Keluarga Tambahan
        ├── reaktivasi-anak.pdf                       ← Re-aktivasi Anak Usia di atas 21 Tahun
        ├── penonaktifan-keluarga.pdf                 ← Penonaktifan Anggota Keluarga
        ├── pendaftaran-isa-wna.pdf                   ← Pendaftaran ISA WNA Belum Terdaftar JKN
        ├── tambah-keluarga-segmen.pdf                ← Tambah Keluarga dari Segmen Lain
        ├── tambah-keluarga-baru.pdf                  ← Tambah Keluarga Baru
        ├── pendaftaran-wna.pdf                       ← Pendaftaran Pekerja WNA Belum Terdaftar JKN
        ├── mutasi-pbpu-ppu.pdf                       ← Pendaftaran Karyawan Mutasi PBPU ke PPU
        └── selaras.pdf                               ← Sentra Layanan Administrasi Kepesertaan (Selaras)
```

---

## ⚙️ Konfigurasi

### 1. Logo BPJS Kesehatan

Letakkan file logo resmi BPJS Kesehatan di:

```
files/photos/logo-bpjs.png
```

> **Tips:** Gunakan format PNG dengan latar transparan. Logo ditampilkan di navbar, section hero, dan footer.  
> Jika file tidak ditemukan, ikon `fa-shield-heart` akan tampil otomatis sebagai pengganti.

---

### 2. Nomor WhatsApp Contact Person

Buka `index.html`, cari bagian `CONTACT PERSON`, lalu ubah nomor sesuai format internasional (tanpa `+`, awali dengan `62`):

| Petugas | Nomor Saat Ini | Tag di Kode |
|---|---|---|
| Evalyn Lumban Raja | `628116200840` | `href="https://wa.me/628116200840"` |
| Muhammad Dzaky | `6285275353860` | `href="https://wa.me/6285275353860"` |
| Andri Dwi Surya | `6285762338553` | `href="https://wa.me/6285762338553"` |
| Junaina Sahputri Sagala | `6287751077004` | `href="https://wa.me/6287751077004"` |

> **Contoh format:** Nomor `0812-3456-7890` ditulis sebagai `6281234567890`

---

### 3. Foto Contact Person

Upload foto ke folder `files/photos/` dengan nama file yang **persis** sama:

| File | Petugas | Spesifikasi |
|---|---|---|
| `evalyn.jpg` | Evalyn Lumban Raja | Foto formal, min 300×300px, max 200KB |
| `dzaky.jpg` | Muhammad Dzaky | Foto formal, min 300×300px, max 200KB |
| `andri.jpg` | Andri Dwi Surya | Foto formal, min 300×300px, max 200KB |
| `junaina.jpg` | Junaina Sahputri Sagala | Foto formal, min 300×300px, max 200KB |

> Jika foto tidak tersedia, avatar warna dengan ikon akan tampil otomatis.

---

### 4. Foto Galeri

Upload 6 foto kegiatan ke `files/photos/`:

| File | Keterangan Default | Ukuran Ideal |
|---|---|---|
| `galeri1.jpg` | Pelayanan Peserta | Landscape, min 800×600px |
| `galeri2.jpg` | Sosialisasi Badan Usaha | Landscape, min 800×600px |
| `galeri3.jpg` | Pelatihan eDabu | Landscape, min 800×600px |
| `galeri4.jpg` | Kantor Pelayanan | Landscape, min 800×600px |
| `galeri5.jpg` | Tim BPJS Kesehatan | Portrait atau Landscape |
| `galeri6.jpg` | Kegiatan Sosial | Landscape, min 800×600px |

Untuk mengubah keterangan foto, buka `index.html` dan ubah teks di dalam:
```html
<span data-i18n="gal1_cap">Pelayanan Peserta</span>
```
Kemudian perbarui juga terjemahan Inggrisnya di `script.js`:
```js
// objek en: { ... }
gal1_cap: "Participant Services",
```

---

### 5. Foto Berita (What's New)

Upload foto ke `files/photos/`:

| File | Berita | Ukuran Ideal |
|---|---|---|
| `news1.jpg` | User Manual eDabu 7.14.0 | Landscape, min 800×500px |
| `news2.jpg` | Program REHAB | Landscape, min 800×500px |
| `news3.jpg` | Layanan Selaras | Landscape, min 800×500px |

> Jika foto tidak ditemukan, background gradasi biru akan tampil otomatis.

---

### 6. File Panduan eDabu

Upload 11 file PDF ke folder `files/panduan/` dengan nama yang sesuai:

| Nama File | Panduan |
|---|---|
| `pendaftaran-karyawan-baru.pdf` | Pendaftaran Karyawan Baru Belum Terdaftar JKN |
| `pendaftaran-isat.pdf` | Pendaftaran Pekerja dari ISAT di BU yang Sama |
| `mutasi-keluarga.pdf` | Mutasi Anggota Keluarga Tambahan |
| `reaktivasi-anak.pdf` | Re-aktivasi Anak Usia di atas 21 Tahun |
| `penonaktifan-keluarga.pdf` | Penonaktifan Anggota Keluarga Tidak Ditanggung/Meninggal |
| `pendaftaran-isa-wna.pdf` | Pendaftaran ISA WNA Belum Terdaftar JKN |
| `tambah-keluarga-segmen.pdf` | Tambah Keluarga dari Segmen Lain |
| `tambah-keluarga-baru.pdf` | Tambah Keluarga Baru |
| `pendaftaran-wna.pdf` | Pendaftaran Pekerja WNA Belum Terdaftar JKN |
| `mutasi-pbpu-ppu.pdf` | Pendaftaran Karyawan Mutasi PBPU ke PPU |
| `selaras.pdf` | Sentra Layanan Administrasi Kepesertaan (Selaras) |

---

### 7. Google Maps Embed

Untuk memperbarui peta dengan koordinat kantor yang akurat:

1. Buka [Google Maps](https://maps.google.com) → cari alamat kantor
2. Klik **Share** → **Embed a map** → **Copy HTML**
3. Salin hanya nilai `src="..."` dari kode iframe
4. Buka `index.html`, cari tag `<iframe` di dalam `.map-wrapper`
5. Ganti nilai atribut `src` dengan URL baru tersebut

---

### 8. Memperbarui Berita (What's New)

Setiap kartu berita di `index.html` memiliki struktur berikut. Ubah sesuai kebutuhan:

```html
<div class="news-card">
  <div class="news-img-wrap">
    <img src="files/photos/news1.jpg" .../>       ← ganti foto
    <span class="news-badge">Baru</span>           ← ganti teks badge
  </div>
  <div class="news-body">
    <span class="news-cat">Update</span>            ← ganti kategori
    <span class="news-date">Maret 2025</span>       ← ganti tanggal
    <h3 class="news-title">Judul Berita</h3>        ← ganti judul
    <p  class="news-excerpt">Deskripsi...</p>       ← ganti deskripsi
    <a  href="files/dokumen.pdf">Baca...</a>        ← ganti link tujuan
  </div>
</div>
```

Perbarui juga terjemahan Inggris di `script.js` untuk key `news1_title`, `news1_desc`, dll.

---

### 9. News Ticker

Buka `index.html`, cari `<div id="tickerItems">`, lalu tambah atau ubah baris `<span>`:

```html
<div class="ticker-items" id="tickerItems">
  <span data-i18n="tick1">📢 Pesan pertama Anda di sini</span>
  <span data-i18n="tick2">📋 Pesan kedua Anda di sini</span>
  <span data-i18n="tick3">🏥 Pesan ketiga Anda di sini</span>
</div>
```

Perbarui juga terjemahannya di `script.js`:
```js
// Dalam id: { ... }
tick1: "📢 Pesan dalam Bahasa Indonesia",
// Dalam en: { ... }
tick1: "📢 Message in English",
```

---

### 10. Menambah Kartu Panduan eDabu Baru

Salin template ini ke dalam `<div id="panduanGrid">` di `index.html`:

```html
<div class="info-card" data-delay="0" data-cat="daftar">
  <!-- data-cat bisa: "daftar" | "keluarga" | "lainnya" -->
  <div class="card-glow"></div>
  <div class="card-icon-wrap" style="--cc:#0077cc">
    <i class="fa-solid fa-user-plus"></i>   <!-- ikon dari Font Awesome 6 -->
  </div>
  <div class="card-body">
    <span class="card-tag">Panduan</span>
    <h3 class="card-title">Judul Panduan Baru</h3>
    <p  class="card-desc">Deskripsi singkat panduan ini.</p>
  </div>
  <div class="card-footer">
    <a href="files/panduan/nama-file-baru.pdf" target="_blank" class="btn-card">
      <i class="fa-solid fa-eye"></i> Lihat / Unduh
    </a>
    <span class="card-type"><i class="fa-solid fa-file-pdf"></i> PDF</span>
  </div>
</div>
```

> Untuk ikon, kunjungi [fontawesome.com/icons](https://fontawesome.com/icons) dan pilih ikon yang sesuai.

---

### 11. Menambah Bahasa Baru

Buka `script.js`, temukan `const i18n = { id: {...}, en: {...} }`.  
Salin blok `en: {...}`, terjemahkan nilainya, lalu tambahkan sebagai key baru:

```js
const i18n = {
  id: { ... },
  en: { ... },
  // Contoh: tambah Bahasa Melayu
  ms: {
    brand_main: "BPJS Kesehatan",
    nav_home:   "Laman Utama",
    // ... dan seterusnya (salin semua key dari blok en)
  }
};
```

Lalu tambahkan tombol di `index.html` dalam `.lang-switcher`:

```html
<button class="lang-btn" data-lang="ms">
  <span class="lang-flag">🇲🇾</span>
  <span class="lang-code">MY</span>
</button>
```

---

## 🚀 Deploy ke GitHub Pages

### Cara Cepat (via Browser, tanpa Git)

1. Login ke [github.com](https://github.com) → klik **New repository**
2. Isi nama repositori (misal: `bpjs-bu-siantar`), pilih **Public** → **Create repository**
3. Klik **uploading an existing file**
4. Drag & drop semua file dan folder:
   - `index.html`, `style.css`, `script.js`, `README.md`
   - Seluruh folder `files/` beserta isinya
5. Klik **Commit changes**
6. Buka **Settings → Pages → Source: Deploy from branch → Branch: `main` → Folder: `/ (root)`** → klik **Save**
7. Tunggu 1–2 menit, website aktif di:
   ```
   https://<username>.github.io/<nama-repo>/
   ```

---

### Cara Terminal (Git CLI)

```bash
# 1. Masuk ke folder proyek
cd /path/ke/folder-proyek

# 2. Inisialisasi Git
git init
git remote add origin https://github.com/<username>/<nama-repo>.git

# 3. Tambahkan semua file
git add .
git commit -m "🏥 Initial release: BPJS Kesehatan KC Pematangsiantar"

# 4. Push ke GitHub
git branch -M main
git push -u origin main

# 5. Aktifkan GitHub Pages:
# Settings → Pages → Source: Deploy from branch → main → / (root) → Save
```

---

### Custom Domain (Opsional)

Untuk menggunakan domain sendiri (misal `bu.bpjssiantar.id`):

1. Buat file bernama `CNAME` di root folder, isi hanya nama domain:
   ```
   bu.bpjssiantar.id
   ```
2. Di pengaturan DNS domain, tambahkan CNAME record:
   - **Host:** `bu` (atau `@` untuk root domain)
   - **Points to:** `<username>.github.io`
3. Di **Settings → Pages → Custom domain**, masukkan nama domain Anda → Save
4. Centang **Enforce HTTPS** setelah sertifikat SSL aktif

---

## 🛠️ Menjalankan Secara Lokal

Tidak memerlukan build tool atau Node.js. Cukup buka di browser:

```bash
# Opsi 1: Buka langsung (foto & PDF mungkin tidak muncul karena CORS)
open index.html          # macOS
start index.html         # Windows

# Opsi 2: VS Code Live Server (DISARANKAN)
# Install extension "Live Server" → klik kanan index.html → "Open with Live Server"

# Opsi 3: Python built-in server
cd /path/ke/folder-proyek
python3 -m http.server 8000
# Buka: http://localhost:8000

# Opsi 4: Node.js http-server
npx http-server .
# Buka: http://localhost:8080
```

---

## 🖼️ Panduan Foto

### Spesifikasi Teknis

| Jenis Foto | Format | Ukuran Minimum | Rasio | Maks File |
|---|---|---|---|---|
| Logo BPJS | PNG (transparan) | 200×80px | Bebas | 50KB |
| Contact Person | JPG / PNG | 300×300px | 1:1 (kotak) | 200KB |
| Galeri | JPG | 800×600px | 4:3 | 500KB |
| Berita (News) | JPG | 800×500px | 16:10 | 400KB |
| Favicon | PNG | 32×32px | 1:1 | 10KB |

### Tools Kompresi Foto (Gratis)

- **[Squoosh](https://squoosh.app)** — kompresi & konversi format, berbasis browser
- **[TinyPNG](https://tinypng.com)** — kompresi PNG/JPG otomatis
- **[iLoveIMG](https://www.iloveimg.com/compress-image)** — kompresi batch

---

## 🔧 Kustomisasi Lanjutan

### Mengubah Warna Utama

Buka `style.css`, temukan blok `:root, [data-theme="light"]`:

```css
:root, [data-theme="light"] {
  --c-primary:   #006db3;   /* Biru utama — ubah di sini */
  --c-accent:    #009FE3;   /* Biru aksen — ubah di sini */
  --c-accent-l:  #7dd0f0;   /* Biru terang (highlight hero) */
}
```

Untuk dark mode, ubah juga di blok `[data-theme="dark"]`.

### Mengubah Font

Ganti URL Google Fonts di `index.html` bagian `<head>`, lalu sesuaikan di `style.css`:

```css
body {
  font-family: 'Plus Jakarta Sans', 'Poppins', sans-serif;
  /* Ganti dengan font pilihan Anda */
}
```

### Mengubah Breakpoint Responsive

Temukan komentar `RESPONSIVE` di `style.css` untuk menyesuaikan tampilan di berbagai ukuran layar:

| Breakpoint | Lebar | Perubahan Utama |
|---|---|---|
| lg | ≤ 1023px | Grid 2 kolom, news 2 kolom, footer 2 kolom |
| md | ≤ 767px | Hamburger menu aktif, semua grid 1 kolom |
| sm | ≤ 575px | Navbar tinggi 60px, teks WA disembunyikan |
| xs | ≤ 399px | Contact card jadi horizontal |

---

## 🧰 Teknologi

| Teknologi | Versi | Kegunaan |
|---|---|---|
| HTML5 | — | Struktur halaman, semantik, aksesibilitas |
| CSS3 | — | Styling, animasi CSS, custom properties, responsive grid |
| JavaScript | ES6+ | i18n, dark/light mode, galeri lightbox, filter, particles, scroll reveal |
| [Font Awesome](https://fontawesome.com) | 6.5.0 | Ikon seluruh halaman |
| [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | — | Font body utama |
| [Poppins](https://fonts.google.com/specimen/Poppins) | — | Font heading & judul |
| [GitHub Pages](https://pages.github.com) | — | Hosting gratis, zero-config |

---

## 📞 Informasi Kantor

| | |
|---|---|
| **Nama** | BPJS Kesehatan Kantor Cabang Pematangsiantar |
| **Alamat** | Jl. Perintis Kemerdekaan No. 7, Pematangsiantar, Sumatera Utara |
| **Hotline** | 165 (Gratis) |
| **Website Resmi** | [www.bpjs-kesehatan.go.id](https://www.bpjs-kesehatan.go.id) |
| **Jam Operasional** | Senin – Jumat, 09.00 – 15.00 WIB |

---

## 📝 Riwayat Perubahan

| Versi | Tanggal | Perubahan |
|---|---|---|
| **2.0.0** | Maret 2025 | Bilingual ID/EN · Galeri + lightbox · 11 panduan eDabu · What's New · News ticker · Hero particles · Back-to-top · Logo BPJS · Footer 3 kolom · Sosial media links |
| **1.1.0** | — | Dark/Light mode · Toggle tema |
| **1.0.0** | — | Initial release: 5 layanan, 4 contact person, peta lokasi |

---

<div align="center">

**© 2025 BPJS Kesehatan KC Pematangsiantar**

*Melayani dengan sepenuh hati untuk Indonesia yang lebih sehat.*

</div>
