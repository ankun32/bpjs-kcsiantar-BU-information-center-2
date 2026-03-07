# Pusat Informasi Badan Usaha — BPJS Kesehatan Pematangsiantar

Website landing page statis untuk Pusat Informasi Badan Usaha BPJS Kesehatan Cabang Pematangsiantar, dibangun dengan HTML, CSS, dan JavaScript murni — siap di-deploy ke **GitHub Pages**.

---

## 📁 Struktur Folder

```
/
├── index.html          ← Halaman utama
├── style.css           ← Stylesheet
├── script.js           ← JavaScript
├── README.md           ← Dokumentasi ini
└── files/              ← Folder dokumen yang bisa diunduh
    ├── TATA CARA PENONAKTIFAN PEKERJA DARI EDABU NEW.pdf
    ├── REHAB.jpg
    ├── TATA CARA UBAH GAJI EDABU BADAN USAHA.pdf
    ├── Format Penonaktifan Pekerja.docx
    └── Usman Edabu BU v 7.14.0.pdf
```

---

## ✏️ Konfigurasi Sebelum Deploy

### 1. Update Nomor WhatsApp Contact Person

Buka `index.html`, cari bagian **SECTION CONTACT PERSON**, lalu ganti nomor berikut:

| Nama                    | Placeholder Sekarang     | Ganti Dengan            |
|-------------------------|--------------------------|-------------------------|
| Evalyn Lumban Raja      | `wa.me/6281234560001`    | Nomor WA yang benar     |
| Muhammad Dzaky          | `wa.me/6281234560002`    | Nomor WA yang benar     |
| Andri Dwi Surya         | `wa.me/6281234560003`    | Nomor WA yang benar     |
| Junaina Sahputri Sagala | `wa.me/6281234560004`    | Nomor WA yang benar     |

Format nomor: **`628xxxxxxxxxx`** (tanpa +, tanpa 0 di depan)  
Contoh: `628123456789` untuk nomor `0812-3456-789`

### 2. Update Google Maps Embed (Opsional)

Untuk mendapatkan embed URL yang lebih presisi:
1. Buka [Google Maps](https://maps.google.com)
2. Cari **"BPJS Kesehatan Pematangsiantar"**
3. Klik **Bagikan > Sematkan peta**
4. Salin kode `<iframe>` dan ganti iframe di dalam section `#lokasi` pada `index.html`

### 3. Tambahkan File Dokumen

Letakkan semua file di dalam folder `files/` dengan nama **persis sama** seperti yang tercantum di `index.html`:

```
files/TATA CARA PENONAKTIFAN PEKERJA DARI EDABU NEW.pdf
files/REHAB.jpg
files/TATA CARA UBAH GAJI EDABU BADAN USAHA.pdf
files/Format Penonaktifan Pekerja.docx
files/Usman Edabu BU v 7.14.0.pdf
```

> **Catatan:** GitHub Pages mendukung file PDF, JPG, dan DOCX. Pastikan ukuran total repository tidak melebihi 1 GB.

---

## 🚀 Cara Deploy ke GitHub Pages

### Langkah 1 — Buat Repository GitHub

1. Login ke [github.com](https://github.com)
2. Klik tombol **"New"** untuk membuat repository baru
3. Beri nama repository, misalnya: `bpjs-badan-usaha`
4. Pilih **Public**
5. Klik **"Create repository"**

### Langkah 2 — Upload File

**Cara A — Melalui Browser (tanpa Git):**
1. Di halaman repository, klik **"Add file" → "Upload files"**
2. Drag & drop semua file dan folder (`index.html`, `style.css`, `script.js`, folder `files/`)
3. Scroll ke bawah, klik **"Commit changes"**

**Cara B — Menggunakan Git (Terminal):**
```bash
git init
git add .
git commit -m "Initial commit: BPJS Badan Usaha landing page"
git branch -M main
git remote add origin https://github.com/USERNAME/bpjs-badan-usaha.git
git push -u origin main
```

### Langkah 3 — Aktifkan GitHub Pages

1. Di repository GitHub, klik tab **"Settings"**
2. Pada menu kiri, pilih **"Pages"**
3. Di bagian **"Branch"**, pilih `main` dan folder `/ (root)`
4. Klik **"Save"**
5. Tunggu 1–2 menit, lalu website aktif di:

```
https://USERNAME.github.io/bpjs-badan-usaha/
```

---

## 🔄 Update Konten

Setelah website live, untuk memperbarui konten:
1. Edit file yang diperlukan
2. Commit dan push ke GitHub
3. GitHub Pages akan otomatis memperbarui website dalam 1–2 menit

---

## 🛠️ Teknologi

- **HTML5** — Struktur halaman
- **CSS3** — Styling & animasi (Flexbox, Grid, Custom Properties)
- **JavaScript (Vanilla)** — Interaktivitas & scroll effects
- **Google Fonts (Poppins)** — Tipografi
- **Font Awesome 6** — Ikon
- **Google Maps Embed** — Peta lokasi

---

## 📞 Kontak

BPJS Kesehatan Cabang Pematangsiantar  
Jl. Perintis Kemerdekaan No. 7, Pematangsiantar, Sumatera Utara  
Hotline: **0800-500-400** (Gratis)

---

*Website ini bersifat statis dan tidak memerlukan server backend — cocok untuk hosting gratis di GitHub Pages.*
