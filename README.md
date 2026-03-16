# 🏥 Pusat Informasi Badan Usaha
### BPJS Kesehatan KC Pematangsiantar

<div align="center">

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-0077cc?style=for-the-badge&logo=github)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Portal informasi digital untuk Badan Usaha peserta BPJS Kesehatan KC Pematangsiantar.**
Dibangun dengan HTML5, CSS3, dan Vanilla JavaScript — production-ready, siap deploy ke GitHub Pages.

</div>

---

## 📌 Daftar Isi

- [Gambaran Proyek](#-gambaran-proyek)
- [Struktur File](#-struktur-file)
- [Fitur Lengkap](#-fitur-lengkap)
- [Panduan Konfigurasi](#-panduan-konfigurasi)
  - [Contact Person](#contact-person)
  - [Nomor WhatsApp](#nomor-whatsapp)
  - [Foto Petugas](#foto-petugas)
  - [Panduan eDabu (11 file)](#panduan-edabu-11-file)
  - [Lokasi & Maps](#lokasi--maps)
  - [Galeri](#galeri)
  - [News / What's New](#news--whats-new)
  - [Logo & Favicon](#logo--favicon)
  - [Social Media](#social-media)
  - [Halaman Faskes](#halaman-faskes-faskeshtml)
- [Deploy ke GitHub Pages](#-deploy-ke-github-pages)
- [Menjalankan Lokal](#-menjalankan-secara-lokal)
- [Kustomisasi Tampilan](#-kustomisasi-tampilan)
- [Spesifikasi Foto](#-spesifikasi-foto)
- [Teknologi](#-teknologi)
- [Riwayat Perubahan](#-riwayat-perubahan)

---

## 🏢 Gambaran Proyek

Website ini berfungsi sebagai **portal informasi resmi** untuk Badan Usaha (BU) yang terdaftar di BPJS Kesehatan KC Pematangsiantar. Mencakup wilayah kerja:

| Wilayah | Jenis Kantor |
|---|---|
| Kota Pematangsiantar | Kantor Cabang Utama |
| Kabupaten Simalungun | Kantor Kabupaten |
| Kabupaten Toba | Kantor Kabupaten |
| Kabupaten Samosir | Kantor Kabupaten |

---

## 📁 Struktur File

```
/
├── index.html              ← Halaman utama portal
├── faskes.html             ← Halaman direktori fasilitas kesehatan
├── style.css               ← Sistem styling lengkap (dark/light, responsive, animasi)
├── script.js               ← Interaktivitas (i18n, tema, galeri, tabs, search)
├── README.md               ← Dokumentasi ini
│
└── files/
    │
    ├── photos/
    │   │
    │   │   ── LOGO & FAVICON ──
    │   ├── logo-bpjs.png               ← Logo BPJS Kesehatan (navbar, hero, footer)
    │   ├── siantar.png                 ← Favicon tab browser
    │   │
    │   │   ── PIMPINAN ──
    │   ├── kepala.jpg                  ← Muhammad Novar Nasution (Kepala Bag. Kepesertaan)
    │   │
    │   │   ── ADMIN KEPESERTAAN ──
    │   ├── admin1.jpg                  ← Tetty Indah Sari Pardosi
    │   ├── admin2.jpg                  ← Febby Ai Ginting
    │   ├── admin3.jpg                  ← Indah Sriwardani Purba
    │   │
    │   │   ── KANTOR CABANG PEMATANGSIANTAR ──
    │   ├── evalyn.jpg                  ← Evalyn Lumban Raja
    │   ├── dzaky.jpg                   ← Muhammad Dzaky
    │   ├── andri.jpg                   ← Andri Dwi Surya
    │   ├── junaina.jpg                 ← Junaina Sahputri Sagala
    │   │
    │   │   ── KANTOR KABUPATEN ──
    │   ├── ro-simalungun1.jpg          ← Jana Nofanna Siallagan
    │   ├── ro-simalungun2.jpg          ← Abdi Ardian Parinduri
    │   ├── ro-toba.jpg                 ← Hermanto Naibaho
    │   ├── ro-samosir.jpg              ← Fhony Br Harianja
    │   │
    │   │   ── GALERI (7 foto) ──
    │   ├── galeri1.jpg                 ← Gathering Badan Usaha
    │   ├── galeri2.jpg                 ← Gathering Badan Usaha
    │   ├── galeri3.jpg                 ← Gathering Badan Usaha
    │   ├── galeri4.jpg                 ← Pemberian Penghargaan PBPU Kolektif
    │   ├── galeri5.jpg                 ← Sosialisasi Terhadap Badan Usaha
    │   ├── galeri6.jpg                 ← Awarding Satya JKN Terbaik Nasional
    │   ├── galeri7.jpg                 ← Awarding Satya JKN Terbaik Nasional
    │   │
    │   │   ── BERITA / WHAT'S NEW ──
    │   ├── news1.jpg                   ← Jenis Pelayanan dan Jam Layanan
    │   ├── news2.jpg                   ← BPJS Siap Membantu
    │   └── news3.jpg                   ← Ayo Kita Semua Wajib Skrining
    │
    │   ── DOKUMEN UTAMA ──
    ├── TATA CARA PENONAKTIFAN PEKERJA DARI EDABU NEW.pdf
    ├── TATA CARA UBAH GAJI EDABU BADAN USAHA.pdf
    ├── Format Penonaktifan Pekerja.docx
    ├── Usman Edabu BU v 7.14.0.pdf
    ├── REHAB.jpg
    │
    └── panduan/                        ← 11 panduan eDabu (PDF)
        ├── pendaftaran-karyawan-baru.pdf
        ├── pendaftaran-isat.pdf
        ├── mutasi-keluarga.pdf
        ├── reaktivasi-anak.pdf
        ├── penonaktifan-keluarga.pdf
        ├── pendaftaran-isa-wna.pdf
        ├── tambah-keluarga-segmen.pdf
        ├── tambah-keluarga-baru.pdf
        ├── pendaftaran-wna.pdf
        ├── mutasi-pbpu-ppu.pdf
        └── selaras.pdf
```

---

## ✨ Fitur Lengkap

### `index.html` — Halaman Utama

| # | Fitur | Keterangan |
|---|---|---|
| 1 | **Navbar Dropdown** | Sticky glassmorphism navbar, dropdown animasi untuk Informasi Layanan, Pusat Panduan, dan Faskes |
| 2 | **Global Search** | Search bar di navbar, pencarian realtime dengan dropdown suggestion |
| 3 | **Dark / Light Mode** | Toggle tema gelap/terang, tersimpan di browser, sinkron preferensi OS |
| 4 | **Bilingual ID/EN** | Seluruh teks tersedia Bahasa Indonesia dan English |
| 5 | **Hero Particles** | Animasi partikel canvas di hero section, dengan animated counter stats |
| 6 | **News Ticker** | Bar pengumuman scrolling otomatis (4 item, loop tanpa putus) |
| 7 | **Informasi Layanan** | 5 kartu dokumen administrasi dengan warna aksen unik per kartu |
| 8 | **Panduan eDabu** | 11 kartu panduan dengan filter tab (Semua / Pendaftaran / Keluarga / Lainnya) |
| 9 | **Panduan Mobile JKN** | 6 kartu panduan langkah-demi-langkah penggunaan aplikasi Mobile JKN |
| 10 | **What's New** | 3 kartu berita terkini dengan foto, tanggal, badge kategori |
| 11 | **Download Center** | 7 dokumen dengan filter kategori (Panduan / Formulir / Manual) + tombol preview & unduh |
| 12 | **FAQ Accordion** | 8 pertanyaan umum dengan animasi expand/collapse |
| 13 | **Galeri + Lightbox** | 7 foto kegiatan, viewer fullscreen, keyboard nav, swipe mobile |
| 14 | **Contact Person** | 6 grup kontak (Pimpinan, Admin, Cabang, Simalungun, Toba, Samosir) |
| 15 | **Proteksi Foto** | Foto petugas tidak bisa diklik kanan, di-drag, atau dibuka di tab baru |
| 16 | **Lokasi 4 Tab** | 4 kantor dengan Maps embed & tombol Petunjuk Arah masing-masing |
| 17 | **Floating WA Button** | Tombol WhatsApp melayang dengan daftar semua petugas, animasi pulse |
| 18 | **Scroll Reveal** | Animasi kartu saat masuk viewport |
| 19 | **Back to Top** | Tombol muncul otomatis setelah scroll 400px |
| 20 | **Fully Responsive** | Optimal di mobile, tablet, laptop, desktop |

### `faskes.html` — Direktori Fasilitas Kesehatan

| # | Fitur | Keterangan |
|---|---|---|
| 1 | **206 Faskes** | Data RS, Klinik, Puskesmas, Dokter, Apotek, Optik dari 4 wilayah |
| 2 | **Dropdown Navbar Faskes** | Akses cepat per wilayah dari navbar |
| 3 | **Tab Wilayah** | Pematangsiantar · Simalungun · Toba · Samosir · Mobile JKN |
| 4 | **Search Realtime** | Cari nama, alamat, kecamatan, atau kode faskes |
| 5 | **Filter Jenis** | RS / Klinik / Puskesmas / Dokter / Apotek / Optik |
| 6 | **Filter Kecamatan** | Dropdown dinamis sesuai wilayah aktif |
| 7 | **Card View** | Grid kartu berwarna per jenis faskes dengan conic-gradient ring |
| 8 | **Table View** | Tabel lengkap dengan kode faskes |
| 9 | **Panduan Mobile JKN** | 9 kartu panduan lengkap di tab tersendiri |

---

## ⚙️ Panduan Konfigurasi

### Contact Person

Semua data contact person ada di `index.html`. Struktur 6 grup:

| Grup | Anggota | WhatsApp |
|---|---|---|
| **Pimpinan** | Muhammad Novar Nasution | — |
| **Admin Kepesertaan** | Tetty Indah Sari Pardosi, Febby Ai Ginting, Indah Sriwardani Purba | — |
| **KC Pematangsiantar** | Evalyn, Dzaky, Andri, Junaina | ✅ |
| **Kab. Simalungun** | Jana Nofanna Siallagan, Abdi Ardian Parinduri | ✅ |
| **Kab. Toba** | Hermanto Naibaho | ✅ |
| **Kab. Samosir** | Fhony Br Harianja | ✅ |

Untuk mengganti nama, cari di `index.html`:
```html
<!-- Contoh: ganti nama Kepala Bagian -->
<h3 data-i18n="leader_name">Muhammad Novar Nasution</h3>
```
Perbarui juga di `script.js` pada key yang sama di objek `id:{}` dan `en:{}`.

---

### Nomor WhatsApp

Format: tanpa `+`, awali dengan `62`. Contoh: `0812-3456-7890` → `6281234567890`

| Petugas | Nomor |
|---|---|
| Evalyn Lumban Raja | `628116200840` |
| Muhammad Dzaky | `6285275353860` |
| Andri Dwi Surya | `6285762338553` |
| Junaina Sahputri Sagala | `6287751077004` |
| Jana Nofanna Siallagan | `628116145313` |
| Abdi Ardian Parinduri | `628116208527` |
| Hermanto Naibaho | `6281210944093` |
| Fhony Br Harianja | `628116131999` |

Untuk mengganti, cari di `index.html`:
```html
<a href="https://wa.me/628116200840" target="_blank" class="btn-whatsapp">
```

> Nomor WA petugas juga ada di **Floating WhatsApp Button** — perbarui di bagian `<div class="float-wa-list">` di bawah `index.html`.

---

### Foto Petugas

Upload foto ke `files/photos/` dengan nama file **persis** sesuai tabel di bawah:

| File | Petugas | Rasio |
|---|---|---|
| `kepala.jpg` | Muhammad Novar Nasution | 1:1 |
| `admin1.jpg` | Tetty Indah Sari Pardosi | 1:1 |
| `admin2.jpg` | Febby Ai Ginting | 1:1 |
| `admin3.jpg` | Indah Sriwardani Purba | 1:1 |
| `evalyn.jpg` | Evalyn Lumban Raja | 1:1 |
| `dzaky.jpg` | Muhammad Dzaky | 1:1 |
| `andri.jpg` | Andri Dwi Surya | 1:1 |
| `junaina.jpg` | Junaina Sahputri Sagala | 1:1 |
| `ro-simalungun1.jpg` | Jana Nofanna Siallagan | 1:1 |
| `ro-simalungun2.jpg` | Abdi Ardian Parinduri | 1:1 |
| `ro-toba.jpg` | Hermanto Naibaho | 1:1 |
| `ro-samosir.jpg` | Fhony Br Harianja | 1:1 |

> Jika foto belum tersedia, avatar warna dengan ikon akan tampil otomatis (fallback).
> Semua foto petugas **diproteksi** — tidak bisa diklik kanan, di-drag, atau dibuka di tab baru.

---

### Panduan eDabu (11 File)

Upload semua PDF ke `files/panduan/` dengan nama **persis**:

| File PDF | Judul Panduan | Kategori |
|---|---|---|
| `pendaftaran-karyawan-baru.pdf` | Pendaftaran Karyawan Baru Belum Terdaftar JKN | Pendaftaran |
| `pendaftaran-isat.pdf` | Pendaftaran Pekerja dari ISAT di BU yang Sama | Pendaftaran |
| `pendaftaran-isa-wna.pdf` | Pendaftaran ISA WNA Belum Terdaftar JKN | Pendaftaran |
| `pendaftaran-wna.pdf` | Pendaftaran Pekerja WNA Belum Terdaftar JKN | Pendaftaran |
| `mutasi-pbpu-ppu.pdf` | Pendaftaran Karyawan Mutasi PBPU ke PPU | Pendaftaran |
| `mutasi-keluarga.pdf` | Mutasi Anggota Keluarga Tambahan | Keluarga |
| `reaktivasi-anak.pdf` | Re-aktivasi Anak Usia di atas 21 Tahun | Keluarga |
| `penonaktifan-keluarga.pdf` | Penonaktifan Anggota Keluarga Tidak Ditanggung | Keluarga |
| `tambah-keluarga-segmen.pdf` | Tambah Keluarga dari Segmen Lain | Keluarga |
| `tambah-keluarga-baru.pdf` | Tambah Keluarga Baru | Keluarga |
| `selaras.pdf` | Sentra Layanan Administrasi Kepesertaan (Selaras) | Lainnya |

---

### Lokasi & Maps

Setiap kantor memiliki panel tab sendiri di `index.html`. Maps menggunakan Google Maps Embed:

| Kantor | ID Panel | Alamat |
|---|---|---|
| KC Pematangsiantar | `panel-cabang` | Jl. Perintis Kemerdekaan No. 7 |
| Kab. Simalungun | `panel-simalungun` | Jl. Sutomo, Komplek Griya Hapoltakan, Kec. Raya |
| Kab. Toba | `panel-toba` | Jl. Lintas Pematangsiantar KM 5, Desa Lumban Gaol, Balige |
| Kab. Samosir | `panel-samosir` | Jl. Pangururan-Simanindo, Desa Saitnihuta, Pangururan |

**Cara mengganti embed Maps:**
1. Buka [maps.google.com](https://maps.google.com), cari lokasi kantor
2. Klik **Share → Embed a map** → salin nilai `src="..."`
3. Di `index.html`, temukan panel yang sesuai (`id="panel-cabang"` dst.) lalu ganti `src` pada `<iframe>`

---

### Galeri

Upload 7 foto ke `files/photos/`:

| File | Keterangan |
|---|---|
| `galeri1.jpg` | Gathering Badan Usaha (tampil lebar / featured) |
| `galeri2.jpg` | Gathering Badan Usaha |
| `galeri3.jpg` | Gathering Badan Usaha |
| `galeri4.jpg` | Pemberian Penghargaan PBPU Kolektif (tampil tinggi) |
| `galeri5.jpg` | Sosialisasi Terhadap Badan Usaha |
| `galeri6.jpg` | Awarding Satya JKN Badan Usaha Terbaik Nasional |
| `galeri7.jpg` | Awarding Satya JKN Badan Usaha Terbaik Nasional |

Untuk mengubah keterangan galeri, edit di `index.html`:
```html
<span data-i18n="gal1_cap">Gathering Badan Usaha</span>
```
Dan perbarui terjemahan Inggris di `script.js`:
```js
gal1_cap: 'Business Entity Gathering',
```

---

### News / What's New

Upload 3 foto ke `files/photos/`:

| File | Judul | Tanggal |
|---|---|---|
| `news1.jpg` | Jenis Pelayanan dan Jam Layanan | Maret 2025 |
| `news2.jpg` | BPJS Siap Membantu | September 2025 |
| `news3.jpg` | Ayo Kita Semua Wajib Skrining | Agustus 2025 |

---

### Logo & Favicon

| File | Keterangan |
|---|---|
| `files/photos/logo-bpjs.png` | Logo utama BPJS (PNG transparan, tampil di navbar, hero, footer) |
| `files/photos/siantar.png` | Favicon tab browser (32×32px) |

---

### Social Media

Di `index.html` bagian footer, cari:
```html
<div class="footer-social">
  <a href="https://www.instagram.com/siantar_sehat" ...>Instagram</a>
  <a href="https://www.facebook.com/bpjskesehatan" ...>Facebook</a>
  <a href="https://www.youtube.com/@BPJSKesehatanRI" ...>YouTube</a>
</div>
```

| Platform | Akun |
|---|---|
| Instagram | `@siantar_sehat` |
| Facebook | `bpjskesehatan` |
| YouTube | `@BPJSKesehatanRI` |

---

### Halaman Faskes (`faskes.html`)

Data 206 faskes ada di dalam file `faskes.html` sebagai objek JavaScript `FASKES_DB`. Setiap entri berformat:
```js
{kode:"0036R010", nama:"RS Vita Insani", jenis:"RS", kec:"Siantar Barat", alamat:"Jl. Merdeka No. 329"},
```

**Menambah faskes baru** — tambahkan entri di array wilayah yang sesuai (`siantar`, `simalungun`, `toba`, atau `samosir`):
```js
{kode:"KODE_BARU", nama:"Nama Faskes", jenis:"Klinik", kec:"Nama Kecamatan", alamat:"Alamat Lengkap"},
```

**Jenis faskes yang tersedia:** `RS` · `Klinik` · `Puskesmas` · `Dokter` · `Apotek` · `Optik`

**Jumlah faskes per wilayah:**

| Wilayah | RS | Klinik | Puskesmas | Dokter | Apotek | Optik | Total |
|---|---|---|---|---|---|---|---|
| Kota Pematangsiantar | 9 | 19 | 19 | 4 | 11 | 6 | **68** |
| Kab. Simalungun | 7 | 27 | 43 | 3 | — | — | **80** |
| Kab. Toba | 2 | 5 | 19 | 2 | 5 | — | **33** |
| Kab. Samosir | 1 | 4 | 12 | 4 | 1 | 3 | **25** |
| **Total** | | | | | | | **206** |

---

### Menambah Petugas Baru

Salin template berikut ke grup yang sesuai di `index.html`. Untuk petugas **tanpa WhatsApp** (admin/pimpinan), hilangkan baris `<a href="...btn-whatsapp">`.

```html
<div class="contact-card" data-delay="0">
  <div class="contact-avatar-photo" style="--rc:#009FE3">
    <img src="files/photos/nama-file.jpg" alt="Nama Petugas" class="contact-photo"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
    <div class="contact-photo-fallback" style="--ac:#009FE3;display:none">
      <i class="fa-solid fa-user-tie"></i>
    </div>
    <div class="avatar-ring"></div>
  </div>
  <div class="contact-info">
    <h3>Nama Petugas</h3>
    <p class="contact-role" data-i18n="role_officer">Relationship Officer</p>
  </div>
  <a href="https://wa.me/628XXXXXXXXXX" target="_blank" class="btn-whatsapp">
    <i class="fa-brands fa-whatsapp"></i>
    <span data-i18n="btn_wa">Chat WhatsApp</span>
  </a>
</div>
```

Ganti warna `--rc` (avatar ring) sesuai keinginan: `#009FE3` · `#f77f00` · `#9b5de5` · `#e63946` dst.

---

## 🚀 Deploy ke GitHub Pages

### Cara 1 — Via Browser (Tanpa Git)

1. Login ke [github.com](https://github.com) → **New repository**
2. Nama repo (contoh: `bpjs-bu-siantar`), pilih **Public** → **Create**
3. Klik **uploading an existing file**
4. Upload semua file dan folder: `index.html`, `faskes.html`, `style.css`, `script.js`, `README.md`, folder `files/`
5. **Commit changes**
6. **Settings → Pages → Source: Deploy from branch → main → / (root) → Save**
7. Tunggu 1–3 menit, website aktif di:
   ```
   https://<username>.github.io/<nama-repo>/
   ```

### Cara 2 — Via Terminal (Git CLI)

```bash
# Clone atau init repository
git init
git remote add origin https://github.com/<username>/<nama-repo>.git

# Tambah semua file
git add .
git commit -m "🏥 Launch: Pusat Informasi BU BPJS KC Pematangsiantar"
git branch -M main
git push -u origin main
```

Aktifkan Pages: **Settings → Pages → Deploy from branch → main → / (root) → Save**

### Cara 3 — Custom Domain (Opsional)

1. Buat file `CNAME` di root folder:
   ```
   bu.bpjssiantar.id
   ```
2. Di DNS domain, buat CNAME record:
   - **Host:** `bu`
   - **Points to:** `<username>.github.io`
3. Di **Settings → Pages → Custom domain** → masukkan domain → **Save** → centang **Enforce HTTPS**

---

## 🛠️ Menjalankan Secara Lokal

> Membuka `index.html` langsung (double-click) menyebabkan foto dan PDF tidak tampil karena kebijakan CORS browser. Gunakan server lokal:

```bash
# VS Code Live Server (DISARANKAN)
# Install extension "Live Server" → klik kanan index.html → "Open with Live Server"
# → Buka: http://127.0.0.1:5500

# Python 3
python3 -m http.server 8000
# → Buka: http://localhost:8000

# Node.js
npx http-server .
# → Buka: http://localhost:8080
```

---

## 🎨 Kustomisasi Tampilan

### Warna Utama

Buka `style.css`, temukan blok `[data-theme="light"]` dan `[data-theme="dark"]`:

```css
[data-theme="dark"] {
  --c-primary: #00aaff;   /* Biru utama */
  --c-accent:  #00e5ff;   /* Cyan neon */
  --c-accent2: #7b61ff;   /* Ungu aksen */
}
[data-theme="light"] {
  --c-primary: #006db3;
  --c-accent:  #009FE3;
  --c-accent2: #6040d0;
}
```

### Font

Ganti Google Fonts URL di `<head>` pada `index.html` dan `faskes.html`, lalu sesuaikan di `style.css`:

```css
body { font-family: 'Inter', 'Poppins', sans-serif; }
```

### Avatar Ring Color

Setiap kartu contact punya warna ring sendiri via `--av`:

```html
<div class="ct-avatar" style="--av:#009FE3">
```
Ganti nilai hex sesuai warna yang diinginkan.

### Badge Grup Contact

```css
.cg-leader  { background: linear-gradient(135deg, #006db3, #00aaff); }
.cg-admin   { background: linear-gradient(135deg, #2a9d8f, #38c9b9); }
.cg-cabang  { background: linear-gradient(135deg, #0077cc, #009FE3); }
.cg-kab     { background: linear-gradient(135deg, #c1121f, #e63946); }
```

### News Ticker

Cari `<div class="ticker-items" id="tickerItems">` di `index.html`:

```html
<span>📢 Pesan pertama Anda</span>
<span>📋 Pesan kedua Anda</span>
```

Perbarui teks yang sama di `script.js` (key `tick1`–`tick4`).

---

## 🖼️ Spesifikasi Foto

| Jenis | Format | Ukuran Min | Rasio | Maks File |
|---|---|---|---|---|
| Logo BPJS | PNG (transparan) | 200×80px | Bebas | 50 KB |
| Contact Person | JPG / PNG | 300×300px | 1:1 (bujur sangkar) | 200 KB |
| Galeri | JPG | 800×600px | 4:3 atau 16:9 | 500 KB |
| Berita (News) | JPG | 800×500px | 16:10 | 400 KB |
| Favicon | PNG | 32×32px | 1:1 | 10 KB |

**Tools kompresi foto gratis:**
- [Squoosh.app](https://squoosh.app) — kompresi & konversi, berbasis browser
- [TinyPNG](https://tinypng.com) — kompresi otomatis PNG/JPG

---

## 🧰 Teknologi

| Teknologi | Versi | Kegunaan |
|---|---|---|
| HTML5 | — | Struktur halaman, semantik |
| CSS3 | — | Styling, custom properties, animasi, responsive |
| JavaScript (Vanilla) | ES6+ | i18n, dark/light, lightbox, filter tabs, search, canvas particles |
| [Font Awesome](https://fontawesome.com) | 6.5.0 | Ikon seluruh halaman |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Font body & UI |
| [Poppins](https://fonts.google.com/specimen/Poppins) | — | Font heading, angka, judul |
| [GitHub Pages](https://pages.github.com) | — | Hosting gratis |

---

## 📞 Informasi Kantor

| | |
|---|---|
| **Kantor Cabang** | BPJS Kesehatan KC Pematangsiantar |
| **Alamat** | Jl. Perintis Kemerdekaan No. 7, Pematangsiantar, Sumatera Utara |
| **Hotline** | **165** (Gratis 24 jam) |
| **Website Resmi** | [www.bpjs-kesehatan.go.id](https://www.bpjs-kesehatan.go.id) |
| **Instagram** | [@siantar_sehat](https://www.instagram.com/siantar_sehat) |
| **Jam Operasional** | Senin – Jumat, **09.00 – 15.00 WIB** |

---

## 📝 Riwayat Perubahan

| Versi | Tanggal | Perubahan |
|---|---|---|
| **3.1** | Mar 2026 | README lengkap · Restore file stabil dari upload |
| **3.0** | Mar 2026 | Rebuild navbar dropdown · Floating WA button · FAQ section · Download Center · Global search · Proteksi foto contact · faskes.html (206 data, 4 wilayah + Mobile JKN) |
| **2.1** | Mar 2026 | Instagram → `@siantar_sehat` · Update foto Relationship Officer kab (nama + nomor WA) · Maps Samosir → link baru |
| **2.0** | Mar 2026 | Contact 6 grup (Pimpinan, Admin, Cabang, Simalungun, Toba, Samosir) · Lokasi 4 tab interaktif · Avatar conic-gradient ring · Shimmer badge leader · Panel fade animation |
| **1.5** | Mar 2026 | Seluruh nama & nomor WA petugas diperbarui · Role → Relationship Officer · Stat 8 petugas |
| **1.0** | Feb 2026 | Initial release: hero, ticker, panduan 11 kartu, galeri 7 foto, lokasi, dark/light mode, bilingual ID/EN |

---

<div align="center">

**© 2025–2026 BPJS Kesehatan KC Pematangsiantar**

*Melayani dengan sepenuh hati untuk Indonesia yang lebih sehat.*

</div>
