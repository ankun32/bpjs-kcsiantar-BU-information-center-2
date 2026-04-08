# 📰 Panduan Penambahan News Baru
### BPJS Kesehatan KC Pematangsiantar — What's New Section

---

## 📌 Ringkasan Perubahan

Penambahan **2 kartu berita baru** (`newsina` dan `newsina1`) ke dalam section *What's New* di `index.html`, tanpa mengubah kartu berita yang sudah ada sebelumnya.

| File | Perubahan |
|---|---|
| `index.html` | +2 kartu news baru di dalam `news-grid` |
| `style.css` | Grid diubah ke 3 kolom seragam + style khusus kartu baru |
| `script.js` | +8 i18n key baru (ID & EN) |

---

## 📁 File Foto yang Dibutuhkan

Upload kedua foto berikut ke folder `files/photos/`:

| File Foto | Digunakan Oleh | Ukuran Ideal |
|---|---|---|
| `newsina.jpg` | Kartu baru 1 — *"Informasi Terbaru BPJS Kesehatan"* | 800×500px, maks 400KB |
| `newsina1.jpg` | Kartu baru 2 — *"Update Layanan BPJS Kesehatan"* | 800×500px, maks 400KB |

> Jika foto belum tersedia, kartu tetap tampil dengan background gradasi biru sebagai fallback otomatis.

---

## 🗂️ Struktur News Grid Sekarang

Section `#news` sekarang memiliki **6 kartu** dalam grid 3 kolom:

```
┌─────────────────┬─────────────────┬─────────────────┐
│  newsina (lama) │ newsina1 (lama) │  news1 (lama)   │  ← Baris 1
│  Perubahan      │  Perubahan PIC  │  Jam Layanan    │
│  Jabatan        │  RO             │  (featured)     │
├─────────────────┼─────────────────┼─────────────────┤
│  news3 (lama)   │  newsina (baru) │  newsina1(baru) │  ← Baris 2
│  Skrining       │  Info Terbaru   │  Update Layanan │
│  Kesehatan      │  🔵 Terkini     │  🔵 Terkini     │
└─────────────────┴─────────────────┴─────────────────┘
```

> Kartu **baru** ditandai badge biru "Terkini" dan garis aksen biru di atas kartu.

---

## ✏️ Cara Mengubah Isi Kartu News Baru

### 1. Ubah Judul & Deskripsi

Buka `script.js`, cari bagian `/* News baru — newsina & newsina1 */`:

```js
/* Bahasa Indonesia */
newsina_title  : 'Informasi Terbaru BPJS Kesehatan',   // ← ganti judul
newsina_desc   : 'Informasi terbaru seputar layanan…', // ← ganti deskripsi
newsina_date   : 'Mei 2026',                           // ← ganti tanggal

newsina1_title : 'Update Layanan BPJS Kesehatan',
newsina1_desc  : 'Pembaruan informasi layanan…',
newsina1_date  : 'Mei 2026',
```

Perbarui juga terjemahan Inggris di blok `en: { ... }` tepat di bawahnya.

### 2. Ubah Tanggal Langsung di HTML (Opsional)

Jika tidak pakai i18n, bisa langsung edit di `index.html`:

```html
<span data-i18n="newsina_date">Mei 2026</span>
```

### 3. Ubah Badge Kategori

Di `index.html`, ubah atribut `data-i18n` pada `<span class="news-cat">`:

```html
<!-- Ganti ncat_baru dengan key lain, mis: ncat_update / ncat_layanan / ncat_admin -->
<span class="news-cat news-cat-baru" data-i18n="ncat_baru">Informasi</span>
```

Key kategori yang tersedia di `script.js`:

| Key | ID | EN |
|---|---|---|
| `ncat_update` | Update | Update |
| `ncat_layanan` | Layanan | Service |
| `ncat_admin` | Skrining Kesehatan | Health Screening |
| `ncat_baru` | Informasi | Information |

### 4. Ubah Badge Pojok Gambar

```html
<!-- Badge "Terkini" (biru) — untuk kartu baru -->
<span class="news-badge news-badge-baru" data-i18n="badge_baru">Terkini</span>

<!-- Badge "Baru" (merah) — untuk berita featured -->
<span class="news-badge news-badge-hot" data-i18n="badge_new">Baru</span>

<!-- Badge "Info" (putih transparan) — default -->
<span class="news-badge" data-i18n="badge_info">Info</span>
```

### 5. Ubah Link "Baca Selengkapnya"

Saat ini link menuju langsung ke file foto. Jika punya URL artikel:

```html
<!-- Sebelum: -->
<a href="files/photos/newsina.jpg" target="_blank" class="news-link">

<!-- Sesudah: -->
<a href="https://link-artikel-anda.com" target="_blank" class="news-link">
```

---

## 🎨 Penjelasan CSS Baru (`style.css`)

### Perubahan Grid

```css
/* Lama: 3 kolom tidak seragam (featured lebih besar) */
grid-template-columns: 1.6fr 1fr 1fr;

/* Baru: 3 kolom seragam, 6 kartu */
grid-template-columns: repeat(3, 1fr);
```

### Class `.news-new` (khusus kartu baru)

```css
.news-new {
  border-color: var(--c-accent);           /* Border biru */
  box-shadow: 0 0 0 1px rgba(0,159,227,.15); /* Glow tipis */
  animation: newsNewIn .6s ease both;      /* Fade-up masuk */
}
.news-new::after {
  /* Garis aksen biru di atas kartu */
  background: linear-gradient(90deg, var(--c-primary), var(--c-accent));
  height: 3px; top: 0;
}
```

---

## 📱 Responsive Behavior

| Breakpoint | Layout |
|---|---|
| Desktop ≥ 1024px | 3 kolom × 2 baris (6 kartu) |
| Tablet 768–1023px | 2 kolom × 3 baris |
| Mobile < 768px | 1 kolom × 6 baris |

---

## ➕ Cara Menambah News Baru Lagi di Masa Depan

Salin template berikut dan tempel di dalam `<div class="news-grid">` di `index.html`:

```html
<div class="news-card news-new" data-delay="350">
  <div class="news-img-wrap">
    <img src="files/photos/NAMA_FOTO.jpg" alt="Deskripsi Foto" class="news-img"
         onerror="this.parentElement.classList.add('news-img-fallback')"/>
    <div class="news-img-overlay"></div>
    <span class="news-badge news-badge-baru">Terkini</span>
  </div>
  <div class="news-body">
    <div class="news-meta">
      <span class="news-cat news-cat-baru">Informasi</span>
      <span class="news-date">
        <i class="fa-regular fa-calendar"></i> Bulan Tahun
      </span>
    </div>
    <h3 class="news-title">Judul Berita Baru</h3>
    <p class="news-excerpt">Deskripsi singkat berita baru Anda di sini.</p>
    <a href="files/photos/NAMA_FOTO.jpg" target="_blank" class="news-link">
      <span>Baca Selengkapnya</span> <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
</div>
```

> Tidak perlu tambah i18n key jika konten teks ditulis langsung (hardcode) tanpa `data-i18n`.

---

## 📝 Riwayat Perubahan News Section

| Tanggal | Perubahan |
|---|---|
| Mei 2026 | Tambah 2 kartu baru: `newsina` & `newsina1` · Grid diubah ke `repeat(3,1fr)` · CSS `.news-new` dengan animasi masuk & border aksen |
| Mar 2026 | Kartu `newsina` & `newsina1` pertama (Perubahan Jabatan, Perubahan PIC RO) |
| Mar 2025 | Kartu original: Jenis Pelayanan, BPJS Siap Membantu, Skrining Kesehatan |

---

*BPJS Kesehatan KC Pematangsiantar — Pusat Informasi Badan Usaha*
