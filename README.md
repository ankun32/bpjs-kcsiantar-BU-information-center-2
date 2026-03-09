# 🏥 Pusat Informasi Badan Usaha
### BPJS Kesehatan KC Pematangsiantar

<div align="center">

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-blue?style=for-the-badge&logo=github)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Website informasi layanan administrasi Badan Usaha BPJS Kesehatan KC Pematangsiantar.**  
Dibangun murni dengan HTML5, CSS3, dan Vanilla JavaScript — siap deploy ke GitHub Pages.

</div>

---

## 📌 Daftar Isi

- [Fitur](#-fitur)
- [Struktur File](#-struktur-file)
- [Contact Person](#-contact-person)
- [Lokasi Kantor (4 Tab)](#-lokasi-kantor)
- [Konfigurasi Umum](#-konfigurasi-umum)
- [Deploy GitHub Pages](#-deploy-ke-github-pages)
- [Menjalankan Lokal](#-menjalankan-secara-lokal)
- [Kustomisasi Tampilan](#-kustomisasi-tampilan)
- [Teknologi](#-teknologi)

---

## ✨ Fitur

| Fitur | Keterangan |
|---|---|
| 🌙 **Dark / Light Mode** | Toggle tema gelap/terang, tersimpan di browser, sinkron OS |
| 🌐 **Bilingual (ID / EN)** | Seluruh teks tersedia Bahasa Indonesia & English |
| 📱 **Fully Responsive** | Optimal di mobile, tablet, laptop, desktop |
| 🎨 **Premium Visual** | Shimmer cards, conic-gradient avatar ring, gradient badges, panel fade |
| 📄 **Informasi Layanan** | 5 kartu dokumen utama (PDF, JPG, DOCX) |
| 📚 **Panduan eDabu** | 11 panduan administrasi + filter tab kategori |
| 📰 **What's New** | 3 kartu berita terkini dengan foto, tanggal, kategori |
| 🖼️ **Galeri + Lightbox** | 7 foto kegiatan, viewer fullscreen, swipe mobile |
| 📢 **News Ticker** | Scrolling bar pengumuman otomatis, loop seamless |
| ✨ **Hero Particles** | Animasi partikel mengambang di section hero |
| 👥 **Contact Person** | Pimpinan · Admin · 4 RO Cabang · 4 RO Kabupaten |
| 📍 **Lokasi 4 Tab** | 4 kantor dengan Maps embed & petunjuk arah masing-masing |
| ⬆️ **Back to Top** | Tombol muncul otomatis setelah scroll 400px |
| 🔄 **Scroll Reveal** | Animasi kartu saat masuk viewport |

---

## 📁 Struktur File

```
/
├── index.html                                           ← Halaman utama
├── style.css                                            ← Styling lengkap (dark/light, responsive, animasi)
├── script.js                                            ← Interaktivitas (i18n, tema, galeri, tab, dll)
├── README.md                                            ← Dokumentasi ini
│
└── files/
    │
    ├── photos/
    │   ├── logo-bpjs.png                                ← Logo BPJS (navbar, hero, footer)
    │   ├── siantar.png                                  ← Favicon tab browser
    │   │
    │   │   — PIMPINAN —
    │   ├── kepala.jpg                                   ← Muhammad Novar Nasution
    │   │
    │   │   — ADMIN KEPESERTAAN —
    │   ├── admin1.jpg                                   ← Tetty Indah Sari Pardosi
    │   ├── admin2.jpg                                   ← Febby Ai Ginting
    │   ├── admin3.jpg                                   ← Indah Sriwardani Purba
    │   │
    │   │   — KANTOR CABANG —
    │   ├── evalyn.jpg                                   ← Evalyn Lumban Raja
    │   ├── dzaky.jpg                                    ← Muhammad Dzaky
    │   ├── andri.jpg                                    ← Andri Dwi Surya
    │   ├── junaina.jpg                                  ← Junaina Sahputri Sagala
    │   │
    │   │   — KANTOR KABUPATEN —
    │   ├── ro-simalungun1.jpg                           ← Jana Nofanna Siallagan
    │   ├── ro-simalungun2.jpg                           ← Abdi Ardian Parinduri
    │   ├── ro-toba.jpg                                  ← Hermanto Naibaho
    │   ├── ro-samosir.jpg                               ← Fhony Br Harianja
    │   │
    │   │   — GALERI & BERITA —
    │   ├── galeri1.jpg                                  ← Gathering Badan Usaha
    │   ├── galeri2.jpg                                  ← Gathering Badan Usaha
    │   ├── galeri3.jpg                                  ← Gathering Badan Usaha
    │   ├── galeri4.jpg                                  ← Pemberian Penghargaan PBPU Kolektif
    │   ├── galeri5.jpg                                  ← Sosialisasi Terhadap Badan Usaha
    │   ├── galeri6.jpg                                  ← Awarding Satya JKN (foto 1)
    │   ├── galeri7.jpg                                  ← Awarding Satya JKN (foto 2)
    │   ├── news1.jpg                                    ← Jenis Pelayanan dan Jam Layanan
    │   ├── news2.jpg                                    ← BPJS Siap Membantu
    │   └── news3.jpg                                    ← Ayo Kita Semua Wajib Skrining
    │
    ├── TATA CARA PENONAKTIFAN PEKERJA DARI EDABU NEW.pdf
    ├── REHAB.jpg
    ├── TATA CARA UBAH GAJI EDABU BADAN USAHA.pdf
    ├── Format Penonaktifan Pekerja.docx
    ├── Usman Edabu BU v 7.14.0.pdf
    │
    └── panduan/
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

## 👥 Contact Person

Section Contact Person terdiri dari **5 grup** yang ditampilkan secara berurutan dengan label pemisah berwarna.

### Grup 1 — Pimpinan *(badge biru, tanpa tombol WA)*

| Jabatan | Nama | File Foto |
|---|---|---|
| Kepala Bagian Kepesertaan | **Muhammad Novar Nasution** | `files/photos/kepala.jpg` |

Kartu pimpinan tampil di tengah dengan badge animasi shimmer "Kepala Bagian" di atas foto dan border biru premium.

---

### Grup 2 — Admin Kepesertaan *(badge teal, tanpa tombol WA)*

| Nama | File Foto |
|---|---|
| **Tetty Indah Sari Pardosi** | `files/photos/admin1.jpg` |
| **Febby Ai Ginting** | `files/photos/admin2.jpg` |
| **Indah Sriwardani Purba** | `files/photos/admin3.jpg` |

---

### Grup 3 — Kantor Cabang Pematangsiantar *(badge cyan, ada tombol WA)*

| Nama | Nomor WhatsApp | File Foto |
|---|---|---|
| **Evalyn Lumban Raja** | [628116200840](https://wa.me/628116200840) | `files/photos/evalyn.jpg` |
| **Muhammad Dzaky** | [6285275353860](https://wa.me/6285275353860) | `files/photos/dzaky.jpg` |
| **Andri Dwi Surya** | [6285762338553](https://wa.me/6285762338553) | `files/photos/andri.jpg` |
| **Junaina Sahputri Sagala** | [6287751077004](https://wa.me/6287751077004) | `files/photos/junaina.jpg` |

Role: **Relationship Officer**

---

### Grup 4 — Kantor Kabupaten Simalungun *(badge merah, ada tombol WA)*

| Nama | Nomor WhatsApp | File Foto |
|---|---|---|
| **Jana Nofanna Siallagan** | [628116145313](https://wa.me/628116145313) | `files/photos/ro-simalungun1.jpg` |
| **Abdi Ardian Parinduri** | [628116208527](https://wa.me/628116208527) | `files/photos/ro-simalungun2.jpg` |

Role: **Relationship Officer**

---

### Grup 5 — Kantor Kabupaten Toba *(badge merah, ada tombol WA)*

| Nama | Nomor WhatsApp | File Foto |
|---|---|---|
| **Hermanto Naibaho** | [6281210944093](https://wa.me/6281210944093) | `files/photos/ro-toba.jpg` |

Role: **Relationship Officer**

---

### Grup 6 — Kantor Kabupaten Samosir *(badge merah, ada tombol WA)*

| Nama | Nomor WhatsApp | File Foto |
|---|---|---|
| **Fhony Br Harianja** | [628116131999](https://wa.me/628116131999) | `files/photos/ro-samosir.jpg` |

Role: **Relationship Officer**

---

### Cara Mengubah Nama atau Nomor WA

Buka `index.html`, cari nama yang ingin diubah:

```html
<!-- Ubah nama di tag <h3> -->
<h3 data-i18n="ro_sml1_name">Jana Nofanna Siallagan</h3>

<!-- Ubah nomor WA di href -->
<a href="https://wa.me/628116145313" target="_blank" class="btn-whatsapp">
```

Format nomor WA: tanpa `+`, awali dengan `62`.
Contoh: `0812-3456-7890` → `6281234567890`

Perbarui juga nama di `script.js` pada key `ro_sml1_name` di objek `id: {...}` dan `en: {...}`.

---

### Cara Mengganti Foto Contact Person

Upload foto ke folder `files/photos/` dengan nama persis sesuai tabel di atas.

**Spesifikasi foto:**

| Jenis | Format | Ukuran Min | Rasio | Maks File |
|---|---|---|---|---|
| Semua foto contact | JPG / PNG | 300×300px | 1:1 | 200KB |

> Jika foto belum tersedia, avatar warna dengan ikon akan tampil otomatis (fallback).

---

## 📍 Lokasi Kantor

Section Lokasi menampilkan **4 tab kantor** — klik tab untuk berpindah antar kantor, dengan animasi fade-in.

| Tab | Kantor | Petunjuk Arah |
|---|---|---|
| **KC Pematangsiantar** | Jl. Perintis Kemerdekaan No. 7, Pematangsiantar | [Google Maps](https://www.google.com/maps/place/Kantor+BPJS+Kesehatan+Pematang+Siantar/@2.9560239,99.0584555,17z) |
| **Kab. Simalungun** | Kab. Simalungun, Sumatera Utara | [Google Maps](https://www.google.com/maps/place/kantor+Bpjs-kesehatan+kab.simalungun/@2.9662907,98.8631609,17z) |
| **Kab. Toba** | Kab. Toba, Sumatera Utara | [Google Maps](https://www.google.com/maps/place/BPJS+Kesehatan+Kab.+Toba/@2.3427511,99.091667,17z) |
| **Kab. Samosir** | Kab. Samosir, Sumatera Utara | [Google Maps](https://maps.app.goo.gl/YDMeJW7cZNMsRr5V7) |

Semua kantor memiliki jam operasional: **Senin – Jumat, 09.00 – 15.00 WIB**, hotline **165**.

### Cara Mengganti Embed Google Maps

Untuk setiap kantor, buka `index.html` dan cari panel yang sesuai (misal `id="panel-toba"`), lalu ganti nilai `src` pada `<iframe>`:

1. Buka [Google Maps](https://maps.google.com)
2. Cari lokasi kantor → **Share** → **Embed a map** → salin nilai `src="..."`
3. Ganti nilai `src` pada `<iframe>` di panel yang sesuai

---

## ⚙️ Konfigurasi Umum

### Logo BPJS Kesehatan

```
files/photos/logo-bpjs.png
```

Gunakan PNG berlatar transparan. Logo tampil di navbar, hero, dan footer.
Jika tidak ditemukan, ikon `fa-shield-heart` tampil otomatis.

---

### File Panduan eDabu (11 File)

Upload semua PDF ke `files/panduan/` dengan nama **persis**:

**Kategori Pendaftaran** *(filter tab "Pendaftaran")*

| Nama File | Panduan |
|---|---|
| `pendaftaran-karyawan-baru.pdf` | Pendaftaran Karyawan Baru Belum Terdaftar JKN |
| `pendaftaran-isat.pdf` | Pendaftaran Pekerja dari ISAT di BU yang Sama |
| `pendaftaran-isa-wna.pdf` | Pendaftaran ISA WNA Belum Terdaftar JKN |
| `pendaftaran-wna.pdf` | Pendaftaran Pekerja WNA Belum Terdaftar JKN |
| `mutasi-pbpu-ppu.pdf` | Pendaftaran Karyawan Mutasi PBPU ke PPU |

**Kategori Keluarga** *(filter tab "Keluarga")*

| Nama File | Panduan |
|---|---|
| `mutasi-keluarga.pdf` | Mutasi Anggota Keluarga Tambahan |
| `reaktivasi-anak.pdf` | Re-aktivasi Anak Usia di atas 21 Tahun |
| `penonaktifan-keluarga.pdf` | Penonaktifan Anggota Keluarga Tidak Ditanggung/Meninggal |
| `tambah-keluarga-segmen.pdf` | Tambah Keluarga dari Segmen Lain |
| `tambah-keluarga-baru.pdf` | Tambah Keluarga Baru |

**Kategori Lainnya** *(filter tab "Lainnya")*

| Nama File | Panduan |
|---|---|
| `selaras.pdf` | Sentra Layanan Administrasi Kepesertaan (Selaras) |

---

### Galeri (7 Foto)

Upload ke `files/photos/`:

| File | Keterangan Saat Ini |
|---|---|
| `galeri1.jpg` | Gathering Badan Usaha |
| `galeri2.jpg` | Gathering Badan Usaha |
| `galeri3.jpg` | Gathering Badan Usaha |
| `galeri4.jpg` | Pemberian Penghargaan PBPU Kolektif Kepada Badan Usaha Berkontribusi |
| `galeri5.jpg` | Sosialisasi Terhadap Badan Usaha |
| `galeri6.jpg` | Awarding Satya JKN Badan Usaha Terbaik Nasional |
| `galeri7.jpg` | Awarding Satya JKN Badan Usaha Terbaik Nasional |

Ukuran ideal: landscape, min 800×600px, maks 500KB.

Untuk mengubah keterangan, edit di `index.html`:
```html
<span data-i18n="gal1_cap">Gathering Badan Usaha</span>
```
Dan perbarui terjemahan Inggrisnya di `script.js`:
```js
// objek en: { ... }
gal1_cap: 'Business Entity Gathering',
```

---

### Foto Berita (What's New)

| File | Berita |
|---|---|
| `news1.jpg` | Jenis Pelayanan dan Jam Layanan |
| `news2.jpg` | BPJS Siap Membantu |
| `news3.jpg` | Ayo Kita Semua Wajib Skrining |

---

### News Ticker

Buka `index.html`, cari `<div id="tickerItems">`:

```html
<div class="ticker-items" id="tickerItems">
  <span data-i18n="tick1">📢 Pesan pertama</span>
  <span data-i18n="tick2">📋 Pesan kedua</span>
  <span data-i18n="tick3">🏥 Pesan ketiga</span>
  <span data-i18n="tick4">📞 Pesan keempat</span>
</div>
```

Perbarui teks dan terjemahannya di `script.js` (key `tick1`–`tick4` di objek `id` dan `en`).

---

### Menambah Petugas Baru

Salin template berikut ke dalam grid yang sesuai di `index.html`.
Ganti `data-cat` sesuai grup: Cabang gunakan `.contact-grid`, Kabupaten gunakan `.contact-grid-kab1` (1 orang) atau `.contact-grid-kab2` (2 orang).

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

Warna `--rc` (avatar ring) bisa disesuaikan: `#009FE3`, `#f77f00`, `#9b5de5`, dll.

---

### Menambah Kantor Baru di Tab Lokasi

Tambahkan tombol tab di `.lokasi-tabs`:

```html
<button class="ltab" data-kantor="namakantor">
  <i class="fa-solid fa-location-dot"></i>
  <span>Nama Kantor</span>
</button>
```

Tambahkan panel lokasi setelah panel terakhir:

```html
<div class="lokasi-panel" id="panel-namakantor">
  <div class="lokasi-wrapper">
    <div class="lokasi-info">
      <div class="lokasi-info-header">
        <div class="lokasi-badge lokasi-badge-kab">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <div>
          <h3 class="lokasi-office-name">BPJS Kesehatan Kab. Nama</h3>
          <span class="lokasi-type-tag lokasi-type-kab">Kantor Kabupaten</span>
        </div>
      </div>
      <!-- ... info-item alamat, jam, hotline ... -->
      <a href="https://maps.google.com/..." target="_blank" class="btn-direction">
        <i class="fa-solid fa-diamond-turn-right"></i>
        Petunjuk Arah
      </a>
    </div>
    <div class="map-wrapper">
      <iframe src="EMBED_URL_GOOGLE_MAPS" width="100%" height="360"
              style="border:0" allowfullscreen loading="lazy"></iframe>
    </div>
  </div>
</div>
```

---

## 🚀 Deploy ke GitHub Pages

### Cara 1 — Via Browser (Tanpa Git)

1. Login ke [github.com](https://github.com) → **New repository**
2. Nama repo (misal `bpjs-bu-siantar`), pilih **Public** → **Create**
3. Klik **uploading an existing file**
4. Upload semua file: `index.html`, `style.css`, `script.js`, `README.md`, folder `files/`
5. **Commit changes**
6. **Settings → Pages → Source: Deploy from branch → main → / (root) → Save**
7. Tunggu 1–3 menit, website aktif di:
   ```
   https://<username>.github.io/<nama-repo>/
   ```

### Cara 2 — Via Terminal (Git CLI)

```bash
cd /path/ke/folder-proyek
git init
git remote add origin https://github.com/<username>/<nama-repo>.git
git add .
git commit -m "🏥 Launch: BPJS Kesehatan KC Pematangsiantar"
git branch -M main
git push -u origin main
```

Aktifkan Pages: **Settings → Pages → Deploy from branch → main → / (root) → Save**

### Cara 3 — Custom Domain (Opsional)

Buat file `CNAME` di root folder:
```
bu.bpjssiantar.id
```

Di pengaturan DNS domain, buat CNAME record:
- **Host:** `bu`
- **Points to:** `<username>.github.io`

Lalu di **Settings → Pages → Custom domain** → masukkan domain → **Save** → centang **Enforce HTTPS**.

---

## 🛠️ Menjalankan Secara Lokal

Tidak perlu build tool. Gunakan salah satu server lokal agar foto dan PDF dapat dimuat:

```bash
# VS Code Live Server (DISARANKAN)
# Install extension "Live Server" → klik kanan index.html → "Open with Live Server"
# Buka: http://127.0.0.1:5500

# Python
python3 -m http.server 8000
# Buka: http://localhost:8000

# Node.js
npx http-server .
# Buka: http://localhost:8080
```

> Membuka `index.html` langsung (double-click) menyebabkan foto & PDF tidak muncul karena kebijakan CORS browser.

---

## 🎨 Kustomisasi Tampilan

### Warna Utama

Buka `style.css`, temukan `:root, [data-theme="light"]`:

```css
:root, [data-theme="light"] {
  --c-primary:   #006db3;   /* Biru utama BPJS */
  --c-accent:    #009FE3;   /* Biru aksen */
  --c-accent-l:  #7dd0f0;   /* Biru terang (hero highlight) */
}
```

Untuk dark mode, ubah juga di blok `[data-theme="dark"]`.

### Avatar Ring Color (per kartu)

Setiap kartu contact punya warna ring sendiri via CSS custom property `--rc`:

```html
<!-- Ganti warna hex sesuai keinginan -->
<div class="contact-avatar-photo" style="--rc:#009FE3">
```

### Warna Badge Grup Contact

Badge label grup (Pimpinan, Admin, dll) dapat diubah di `style.css`:

```css
.cg-badge-leader  { background: linear-gradient(135deg, #006db3, #009FE3); }
.cg-badge-admin   { background: linear-gradient(135deg, #2a9d8f, #38c9b9); }
.cg-badge-cabang  { background: linear-gradient(135deg, #0077cc, #009FE3); }
.cg-badge-kab     { background: linear-gradient(135deg, #c1121f, #e63946); }
```

### Font

Ganti URL Google Fonts di `index.html` bagian `<head>`, lalu sesuaikan di `style.css`:

```css
body { font-family: 'Plus Jakarta Sans', 'Poppins', sans-serif; }
```

---

## 🖼️ Spesifikasi Foto

| Jenis | Format | Ukuran Min | Rasio | Maks File |
|---|---|---|---|---|
| Logo BPJS | PNG (transparan) | 200×80px | Bebas | 50KB |
| Contact Person | JPG / PNG | 300×300px | 1:1 | 200KB |
| Galeri | JPG | 800×600px | 4:3 | 500KB |
| Berita (News) | JPG | 800×500px | 16:10 | 400KB |
| Favicon | PNG | 32×32px | 1:1 | 10KB |

**Tools kompresi foto gratis:**
- [Squoosh](https://squoosh.app) — kompresi & konversi, berbasis browser
- [TinyPNG](https://tinypng.com) — kompresi PNG/JPG otomatis

---

## 🧰 Teknologi

| Teknologi | Versi | Kegunaan |
|---|---|---|
| HTML5 | — | Struktur halaman, semantik |
| CSS3 | — | Styling, animasi, custom properties, responsive |
| JavaScript (Vanilla) | ES6+ | i18n, dark/light, lightbox, filter, tabs, particles |
| [Font Awesome](https://fontawesome.com) | 6.5.0 | Ikon seluruh halaman |
| [Plus Jakarta Sans](https://fonts.google.com) | — | Font body |
| [Poppins](https://fonts.google.com) | — | Font heading & angka hero |
| [GitHub Pages](https://pages.github.com) | — | Hosting gratis |

---

## 📞 Informasi Kantor

| | |
|---|---|
| **Kantor Cabang** | BPJS Kesehatan KC Pematangsiantar |
| **Alamat** | Jl. Perintis Kemerdekaan No. 7, Pematangsiantar, Sumatera Utara |
| **Hotline** | **165** (Gratis) |
| **Website Resmi** | [www.bpjs-kesehatan.go.id](https://www.bpjs-kesehatan.go.id) |
| **Jam Operasional** | Senin – Jumat, **09.00 – 15.00 WIB** |

---

## 📝 Riwayat Perubahan

| Versi | Keterangan |
|---|---|
| **3.0.0** | Struktur Contact Person 6 grup (Pimpinan · Admin · Cabang · Simalungun · Toba · Samosir) · Lokasi 4 tab interaktif · Premium visual: shimmer line, conic-gradient ring, badge animasi, panel fade, gradient info icon · Maps Samosir diperbarui |
| **2.0.0** | Bilingual ID/EN · 7 galeri + lightbox · 11 panduan eDabu · What's New · News ticker · Hero particles · Logo BPJS · Footer 3 kolom |
| **1.0.0** | Initial release: 5 layanan, 4 contact, lokasi |

---

<div align="center">

**© 2025 BPJS Kesehatan KC Pematangsiantar**  
*Melayani dengan sepenuh hati untuk Indonesia yang lebih sehat.*

</div>
