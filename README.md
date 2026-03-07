# 🏥 Pusat Informasi Badan Usaha — BPJS Kesehatan Cabang Pematangsiantar

<div align="center">

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?style=flat-square&logo=github)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

**Website informasi layanan administrasi Badan Usaha dan panduan penggunaan eDabu**  
BPJS Kesehatan Cabang Pematangsiantar — Jl. Perintis Kemerdekaan No. 7

</div>

---

## 📋 Daftar Isi

- [Tentang Website](#-tentang-website)
- [Fitur](#-fitur)
- [Struktur Folder](#-struktur-folder)
- [Konfigurasi](#%EF%B8%8F-konfigurasi)
- [Cara Deploy ke GitHub Pages](#-cara-deploy-ke-github-pages)
- [Cara Upload Foto Contact Person](#%EF%B8%8F-cara-upload-foto-contact-person)
- [Cara Update Konten](#-cara-update-konten)
- [Teknologi](#%EF%B8%8F-teknologi)

---

## 🔍 Tentang Website

Website ini merupakan landing page statis untuk **Pusat Informasi Badan Usaha BPJS Kesehatan Cabang Pematangsiantar**. Dibangun menggunakan HTML, CSS, dan JavaScript murni — tanpa backend, tanpa database — sehingga dapat di-hosting secara gratis menggunakan **GitHub Pages**.

Website menyediakan:
- Akses unduhan dokumen panduan dan formulir administrasi Badan Usaha
- Informasi contact person beserta tautan langsung ke WhatsApp
- Lokasi kantor dan peta interaktif Google Maps
- Tampilan responsif yang optimal di desktop maupun mobile

---

## ✨ Fitur

| Fitur | Keterangan |
|-------|------------|
| 📱 Responsive Design | Tampilan optimal di semua ukuran layar |
| 🔝 Sticky Navbar | Navigasi tetap terlihat saat scroll |
| 🎨 Animasi Modern | Hover effects, scroll-reveal, floating shapes |
| 📄 Download Dokumen | 5 dokumen panduan siap unduh |
| 💬 WhatsApp Direct | Tombol langsung terhubung ke WhatsApp petugas |
| 🗺️ Google Maps Embed | Peta lokasi kantor terintegrasi |
| 🖼️ Foto Contact Person | Foto real dengan fallback avatar otomatis |
| ⚡ Tanpa Backend | Hosting gratis, tidak perlu server |

---

## 📁 Struktur Folder

```
📦 repository/
│
├── 📄 index.html               ← Halaman utama website
├── 🎨 style.css                ← Stylesheet (tema, layout, animasi)
├── ⚙️  script.js               ← JavaScript (navbar, scroll, interaksi)
├── 📘 README.md                ← Dokumentasi ini
│
└── 📂 files/
    ├── 📂 photos/              ← Foto contact person
    │   ├── 🖼️  evalyn.jpg
    │   ├── 🖼️  dzaky.jpg
    │   ├── 🖼️  andri.jpg
    │   └── 🖼️  junaina.jpg
    │
    ├── 📄 TATA CARA PENONAKTIFAN PEKERJA DARI EDABU NEW.pdf
    ├── 🖼️  REHAB.jpg
    ├── 📄 TATA CARA UBAH GAJI EDABU BADAN USAHA.pdf
    ├── 📝 Format Penonaktifan Pekerja.docx
    └── 📄 Usman Edabu BU v 7.14.0.pdf
```

> **Penting:** Nama file harus **persis sama** (termasuk spasi dan huruf kapital) dengan yang tertera di `index.html`.

---

## ⚙️ Konfigurasi

Sebelum deploy, pastikan hal-hal berikut sudah dikonfigurasi dengan benar.

### 1. Nomor WhatsApp Contact Person

Buka `index.html`, cari bagian `CONTACT PERSON`, dan pastikan nomor sudah benar:

| Petugas | Nomor WhatsApp |
|---------|----------------|
| Evalyn Lumban Raja | `628116200840` |
| Muhammad Dzaky | `6285275353860` |
| Andri Dwi Surya | `6285762338553` |
| Junaina Sahputri Sagala | `6287751077004` |

**Format nomor yang benar:** `628xxxxxxxxxx`
- Awali dengan `62` (kode negara Indonesia)
- Hilangkan angka `0` di depan nomor
- Contoh: `0812-3456-7890` → `628123456789`

### 2. Foto Contact Person

Letakkan foto di `files/photos/` dengan nama file berikut:

| Nama File | Petugas |
|-----------|---------|
| `evalyn.jpg` | Evalyn Lumban Raja |
| `dzaky.jpg` | Muhammad Dzaky |
| `andri.jpg` | Andri Dwi Surya |
| `junaina.jpg` | Junaina Sahputri Sagala |

> Jika foto tidak tersedia, avatar icon berwarna akan tampil otomatis sebagai pengganti.  
> Format yang didukung: `.jpg`, `.jpeg`, `.png`, `.webp`

### 3. File Dokumen

Pastikan semua file dokumen tersedia di folder `files/` dengan nama **persis sama**:

```
files/TATA CARA PENONAKTIFAN PEKERJA DARI EDABU NEW.pdf
files/REHAB.jpg
files/TATA CARA UBAH GAJI EDABU BADAN USAHA.pdf
files/Format Penonaktifan Pekerja.docx
files/Usman Edabu BU v 7.14.0.pdf
```

### 4. Google Maps (Opsional)

Untuk embed peta yang lebih akurat:
1. Buka [Google Maps](https://maps.google.com) dan cari lokasi kantor
2. Klik **Bagikan → Sematkan peta**
3. Salin URL dari atribut `src` pada kode `<iframe>`
4. Ganti URL di dalam `<iframe>` pada section `#lokasi` di `index.html`

---

## 🚀 Cara Deploy ke GitHub Pages

### Langkah 1 — Buat Repository

1. Login ke [github.com](https://github.com)
2. Klik tombol **"New"** (buat repository baru)
3. Isi nama repository, misalnya: `bpjs-badan-usaha`
4. Pilih visibility: **Public**
5. Klik **"Create repository"**

### Langkah 2 — Upload Semua File

**Via Browser (tanpa Git):**

1. Di halaman repository, klik **"Add file" → "Upload files"**
2. Drag & drop file: `index.html`, `style.css`, `script.js`, `README.md`
3. Buat folder `files/photos/`:
   - Klik **"Add file" → "Create new file"**
   - Ketik `files/photos/.gitkeep` pada kolom nama → klik **"Commit new file"**
4. Masuk ke folder `files/photos/`, klik **"Upload files"**, upload keempat foto
5. Masuk ke folder `files/`, upload semua dokumen
6. Pastikan semua file sudah terupload sebelum melanjutkan

**Via Git (Terminal):**

```bash
git init
git add .
git commit -m "feat: initial deploy BPJS Badan Usaha landing page"
git branch -M main
git remote add origin https://github.com/USERNAME/bpjs-badan-usaha.git
git push -u origin main
```

### Langkah 3 — Aktifkan GitHub Pages

1. Buka tab **Settings** di halaman repository
2. Pada menu kiri, pilih **Pages**
3. Di bagian **Branch**, pilih `main` dan folder `/ (root)`
4. Klik **Save**
5. Tunggu **1–3 menit**, lalu website aktif di:

```
https://USERNAME.github.io/bpjs-badan-usaha/
```

> Ganti `USERNAME` dengan username GitHub Anda, dan `bpjs-badan-usaha` dengan nama repository yang dibuat.

---

## 🖼️ Cara Upload Foto Contact Person

1. Di repository GitHub, navigasi ke folder `files/photos/`
2. Klik **"Add file" → "Upload files"**
3. Upload keempat foto sekaligus dengan nama file yang benar
4. Klik **"Commit changes"**
5. Website otomatis diperbarui dalam 1–2 menit

**Tips foto yang baik:**
- Ukuran disarankan: **300×300 px** ke atas (rasio 1:1 / persegi)
- Format: `.jpg` atau `.png`
- Foto formal/wajah dengan latar belakang bersih
- Ukuran file: maksimal **500 KB** per foto agar loading tetap cepat

---

## 🔄 Cara Update Konten

Setelah website live, untuk memperbarui konten lakukan push ulang ke GitHub:

```bash
# Edit file yang diperlukan, lalu:
git add .
git commit -m "update: [deskripsi perubahan]"
git push
```

GitHub Pages akan otomatis memperbarui website dalam **1–3 menit** setelah push.

**Panduan cepat perubahan umum:**

| Yang Ingin Diubah | File yang Diedit |
|-------------------|------------------|
| Nomor WhatsApp petugas | `index.html` → section `Contact Person` |
| Tambah / ganti dokumen | Folder `files/` + update link di `index.html` |
| Ganti foto petugas | Folder `files/photos/` (ganti file, nama sama) |
| Warna / tampilan / layout | `style.css` |
| Animasi / interaksi | `script.js` |
| Teks, judul, deskripsi | `index.html` |

---

## 🛠️ Teknologi

| Teknologi | Versi | Keterangan |
|-----------|-------|------------|
| HTML5 | — | Struktur dan semantik halaman |
| CSS3 | — | Styling, Flexbox, Grid, CSS Custom Properties |
| JavaScript | ES6+ | Interaktivitas, scroll effects, hamburger menu |
| [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins) | — | Tipografi utama |
| [Font Awesome](https://fontawesome.com) | 6.5.0 | Library ikon |
| [Google Maps Embed API](https://developers.google.com/maps/documentation/embed) | — | Peta lokasi kantor |

---

## 📞 Kontak Kantor

**BPJS Kesehatan Cabang Pematangsiantar**  
📍 Jl. Perintis Kemerdekaan No. 7, Pematangsiantar, Sumatera Utara  
📞 Hotline: **0800-500-400** *(Bebas Pulsa)*  
🕐 Jam Operasional: Senin – Jumat, 08.00 – 16.00 WIB

---

<div align="center">

&copy; 2025 BPJS Kesehatan Cabang Pematangsiantar — Semua hak dilindungi.

*Website ini bersifat statis dan tidak memerlukan server backend.*

</div>
