/* ════════════════════════════════════════════════════
   Pusat Informasi Badan Usaha
   BPJS Kesehatan KC Pematangsiantar
   script.js  —  v2.0

   Fitur:
   ├─ Dark / Light Mode  (persist + OS sync)
   ├─ Bilingual  ID / EN  (i18n lengkap)
   ├─ Navbar  sticky · hamburger · active-link
   ├─ Filter Tab  Panduan eDabu
   ├─ Gallery Lightbox  (7 foto, keyboard nav)
   ├─ Hero Particles  (animasi mengambang)
   ├─ Scroll Reveal  (cards + news + gallery)
   ├─ News Ticker  (seamless loop)
   └─ Back-to-Top button
════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────
   i18n — TERJEMAHAN LENGKAP
   Semua key diambil langsung dari data-i18n di HTML
───────────────────────────────────────────────── */
const i18n = {

  /* ══ BAHASA INDONESIA ══ */
  id: {
    /* Navbar / Brand */
    brand_main : 'BPJS Kesehatan',
    brand_sub  : 'KC Pematangsiantar',
    nav_home   : 'Beranda',
    nav_layanan: 'Informasi Layanan',
    nav_panduan: 'Panduan eDabu',
    nav_news   : "What's New",
    nav_gallery: 'Galeri',
    nav_contact: 'Contact',
    nav_lokasi : 'Lokasi',

    /* Hero */
    hero_badge : 'Resmi &amp; Terpercaya',
    hero_title1: 'Pusat Informasi',
    hero_title2: 'Badan Usaha',
    hero_title3: 'BPJS Kesehatan',
    hero_title4: 'KC Pematangsiantar',
    hero_sub   : 'Informasi layanan administrasi Badan Usaha dan Panduan Penggunaan <strong>eDabu</strong> untuk perusahaan Anda',
    btn_info   : 'Lihat Informasi',
    btn_contact: 'Hubungi Kami',
    btn_follow : 'Ikuti Kami',
    stat_layanan: 'Layanan Tersedia',
    stat_petugas: '8 Petugas Membantu',
    stat_online : 'Info Online',
    scroll_down : 'Scroll ke bawah',

    /* Ticker */
    ticker_label: 'Terbaru',
    tick1: '📢 User Manual eDabu versi 7.14.0 telah dirilis',
    tick2: '📋 Format baru Penonaktifan Pekerja sudah tersedia',
    tick3: '🏥 Jam pelayanan: Senin–Jumat 09.00–15.00 WIB',
    tick4: '📞 Hotline BPJS Kesehatan: 165',

    /* Seksi Informasi Layanan */
    sec_doc_tag     : 'Dokumen &amp; Panduan',
    sec_layanan_title: 'Informasi Layanan',
    sec_layanan_desc : 'Unduh dokumen panduan dan formulir yang Anda butuhkan untuk administrasi kepesertaan Badan Usaha.',
    tag_panduan : 'Panduan',
    tag_program : 'Program',
    tag_formulir: 'Formulir',
    tag_manual  : 'Manual',
    btn_view    : 'Lihat / Unduh',
    btn_download: 'Unduh',
    card1_title: 'Tata Cara Penonaktifan Pekerja',
    card1_desc : 'Langkah-langkah menonaktifkan data pekerja melalui aplikasi eDabu secara benar dan tepat.',
    card2_title: 'Program REHAB Mandiri/Alih Segmen',
    card2_desc : 'Rencana Pembayaran Bertahap (REHAB) — solusi kemudahan pelunasan tunggakan iuran Mandiri/Alih Segmen.',
    card3_title: 'Tata Cara Ubah Gaji dari eDabu',
    card3_desc : 'Panduan lengkap cara mengubah data gaji / upah peserta melalui portal eDabu Badan Usaha.',
    card4_title: 'Format Penonaktifan Pekerja',
    card4_desc : 'Template / formulir resmi yang harus diisi untuk pengajuan penonaktifan peserta.',
    card5_title: 'User Manual eDabu',
    card5_desc : 'Panduan lengkap penggunaan aplikasi eDabu versi terbaru untuk Badan Usaha.',

    /* Seksi Panduan eDabu */
    sec_edabu_tag  : 'Panduan eDabu',
    sec_edabu_title: 'Panduan Lengkap eDabu',
    sec_edabu_desc : 'Kumpulan panduan administrasi kepesertaan Badan Usaha melalui aplikasi eDabu.',
    filter_all     : 'Semua',
    filter_daftar  : 'Pendaftaran',
    filter_keluarga: 'Keluarga',
    filter_lainnya : 'Lainnya',
    p1_title : 'Pendaftaran Karyawan Baru Belum Terdaftar JKN',
    p1_desc  : 'Langkah pendaftaran peserta baru yang belum terdaftar di program JKN melalui eDabu.',
    p2_title : 'Pendaftaran Pekerja dari ISAT di BU yang Sama',
    p2_desc  : 'Proses pendaftaran pekerja yang berasal dari ISAT dalam satu Badan Usaha yang sama.',
    p3_title : 'Mutasi Anggota Keluarga Tambahan',
    p3_desc  : 'Panduan proses mutasi atau perpindahan anggota keluarga tambahan peserta.',
    p4_title : 'Re-aktivasi Anak Usia di atas 21 Tahun',
    p4_desc  : 'Prosedur re-aktivasi kepesertaan anak yang telah berusia di atas 21 tahun.',
    p5_title : 'Penonaktifan Anggota Keluarga Tidak Ditanggung/Meninggal',
    p5_desc  : 'Prosedur penonaktifan anggota keluarga yang tidak lagi ditanggung atau telah meninggal dunia.',
    p6_title : 'Pendaftaran ISA WNA Belum Terdaftar JKN',
    p6_desc  : 'Panduan mendaftarkan Istri/Suami/Anak (ISA) Warga Negara Asing yang belum terdaftar JKN.',
    p7_title : 'Tambah Keluarga dari Segmen Lain',
    p7_desc  : 'Cara menambahkan anggota keluarga yang sebelumnya terdaftar di segmen peserta yang berbeda.',
    p8_title : 'Tambah Keluarga Baru',
    p8_desc  : 'Panduan menambahkan anggota keluarga baru (pasangan/anak) ke dalam kepesertaan JKN.',
    p9_title : 'Pendaftaran Pekerja WNA Belum Terdaftar JKN',
    p9_desc  : 'Prosedur mendaftarkan pekerja Warga Negara Asing yang belum memiliki kepesertaan JKN.',
    p10_title: 'Pendaftaran Karyawan Mutasi PBPU ke PPU',
    p10_desc : 'Panduan proses peralihan kepesertaan dari segmen PBPU ke segmen PPU Badan Usaha.',
    p11_title: 'Sentra Layanan Administrasi Kepesertaan (Selaras)',
    p11_desc : 'Panduan penggunaan layanan Selaras untuk administrasi kepesertaan Badan Usaha secara terpadu.',

    /* Seksi What's New */
    sec_news_tag  : 'Informasi Terkini',
    sec_news_title: "What's New",
    sec_news_desc : 'Informasi dan pengumuman terbaru dari BPJS Kesehatan KC Pematangsiantar.',
    badge_new       : 'Baru',
    badge_info      : 'Info',
    badge_pengumuman: 'Pengumuman',
    ncat_update : 'Update',
    ncat_layanan: 'Layanan',
    ncat_admin  : 'Skrining Kesehatan',
    news1_title: 'Jenis Pelayanan dan Jam Layanan',
    news1_desc : 'Seluruh Pelayanan Administrasi Peserta JKN akan dilaksanakan Satu Pintu di Mal Pelayanan Publik Kota Pematangsiantar.',
    news2_title: 'BPJS Siap Membantu',
    news2_desc : 'Butuh Informasi/Terkendala Pelayanan?',
    news3_title: 'Ayo Kita Semua Wajib Skrining',
    news3_desc : 'Serangkaian pemeriksaan medis yang bertujuan mendeteksi dini penyakit dan risiko kesehatan, bahkan sebelum gejala muncul.',

    /* News baru — newsina & newsina1 */
    ncat_baru       : 'Informasi',
    badge_baru      : 'Terkini',
    newsina_date    : 'Mei 2026',
    newsina_title   : 'Informasi Terbaru BPJS Kesehatan',
    newsina_desc    : 'Informasi terbaru seputar layanan dan administrasi kepesertaan BPJS Kesehatan KC Pematangsiantar.',
    newsina1_date   : 'Mei 2026',
    newsina1_title  : 'Update Layanan BPJS Kesehatan',
    newsina1_desc   : 'Pembaruan informasi layanan administrasi kepesertaan Badan Usaha BPJS Kesehatan KC Pematangsiantar.',
    btn_readmore: 'Baca Selengkapnya',

    /* Seksi Galeri */
    sec_gallery_tag  : 'Dokumentasi',
    sec_gallery_title: 'Galeri Badan Usaha',
    sec_gallery_desc : 'Dokumentasi kegiatan dan pelayanan BPJS Kesehatan KC Pematangsiantar.',
    gal1_cap: 'Gathering Badan Usaha',
    gal2_cap: 'Gathering Badan Usaha',
    gal3_cap: 'Gathering Badan Usaha',
    gal4_cap: 'Pemberian Penghargaan PBPU Kolektif Kepada Badan Usaha Berkontribusi',
    gal5_cap: 'Sosialisasi Terhadap Badan Usaha',
    gal6_cap: 'Awarding Satya JKN Badan Usaha Terbaik Nasional',

    /* Seksi Contact Person */
    sec_contact_tag  : 'Tim Kami',
    sec_contact_title: 'Contact Person',
    sec_contact_desc : 'Hubungi petugas kami langsung melalui WhatsApp untuk informasi dan bantuan lebih lanjut.',
    role_officer: 'Relationship Officer',
    btn_wa      : 'Chat WhatsApp',

    /* Seksi Lokasi */
    sec_lokasi_tag  : 'Kantor Kami',
    sec_lokasi_title: 'Lokasi Kantor',
    sec_lokasi_desc : 'Kunjungi kantor kami pada jam operasional untuk pelayanan langsung.',
    lokasi_name        : 'BPJS Kesehatan KC Pematangsiantar',
    lokasi_sml_name    : 'BPJS Kesehatan Kab. Simalungun',
    lokasi_toba_name   : 'BPJS Kesehatan Kab. Toba',
    lokasi_samosir_name: 'BPJS Kesehatan Kab. Samosir',
    lokasi_alamat      : 'Alamat',
    lokasi_sml_alamat  : 'Kab. Simalungun, Sumatera Utara',
    lokasi_toba_alamat : 'Kab. Toba, Sumatera Utara',
    lokasi_samosir_alamat: 'Kab. Samosir, Sumatera Utara',
    lokasi_jam    : 'Jam Operasional',
    lokasi_jam_val: 'Senin – Jumat: 09.00 – 15.00 WIB',
    lokasi_telp   : 'Hotline',
    btn_direction : 'Petunjuk Arah',
    ltab_cabang   : 'KC Pematangsiantar',
    ltab_simalungun: 'Kab. Simalungun',
    ltab_toba     : 'Kab. Toba',
    ltab_samosir  : 'Kab. Samosir',
    ltag_cabang   : 'Kantor Cabang',
    ltag_kab      : 'Kantor Kabupaten',

    /* Contact Groups */
    cg_leader    : 'Pimpinan',
    cg_admin     : 'Admin Kepesertaan',
    cg_cabang    : 'Kantor Cabang Pematangsiantar',
    cg_simalungun: 'Kantor Kabupaten Simalungun',
    cg_toba      : 'Kantor Kabupaten Toba',
    cg_samosir   : 'Kantor Kabupaten Samosir',
    badge_leader : 'Kepala Bagian',
    role_leader  : 'Kepala Bagian Kepesertaan',
    role_admin   : 'Admin Kepesertaan',
    leader_name  : 'Muhammad Novar Nasution',
    admin1_name  : 'Tetty Indah Sari Pardosi',
    admin2_name  : 'Febby Ai Ginting',
    admin3_name  : 'Indah Sriwardani Purba',
    ro_sml1_name : 'Jana Nofanna Siallagan',
    ro_sml2_name : 'Abdi Ardian Parinduri',
    ro_toba_name : 'Hermanto Naibaho',
    ro_samosir_name: 'Fhony Br Harianja',

    /* Footer */
    footer_tagline: 'Melayani dengan sepenuh hati untuk Indonesia yang lebih sehat.',
    footer_links  : 'Tautan Cepat',
    footer_contact: 'Kontak',
    footer_rights : 'Semua hak dilindungi.',
    footer_made   : 'Pusat Informasi Badan Usaha',
  },

  /* ══ ENGLISH ══ */
  en: {
    /* Navbar / Brand */
    brand_main : 'BPJS Kesehatan',
    brand_sub  : 'Branch Pematangsiantar',
    nav_home   : 'Home',
    nav_layanan: 'Services',
    nav_panduan: 'eDabu Guides',
    nav_news   : "What's New",
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    nav_lokasi : 'Location',

    /* Hero */
    hero_badge : 'Official &amp; Trusted',
    hero_title1: 'Information Centre',
    hero_title2: 'Business Entity',
    hero_title3: 'BPJS Kesehatan',
    hero_title4: 'Branch Pematangsiantar',
    hero_sub   : 'Administrative service information for Business Entities and <strong>eDabu</strong> usage guide for your company',
    btn_info   : 'View Information',
    btn_contact: 'Contact Us',
    btn_follow : 'Follow Us',
    stat_layanan: 'Services Available',
    stat_petugas: '8 Officers Ready',
    stat_online : 'Online Info',
    scroll_down : 'Scroll down',

    /* Ticker */
    ticker_label: 'Latest',
    tick1: '📢 eDabu User Manual version 7.14.0 has been released',
    tick2: '📋 New Employee Deactivation Format is now available',
    tick3: '🏥 Service hours: Mon–Fri 09:00–15:00 WIB',
    tick4: '📞 BPJS Kesehatan Hotline: 165',

    /* Services Section */
    sec_doc_tag     : 'Documents &amp; Guides',
    sec_layanan_title: 'Service Information',
    sec_layanan_desc : 'Download guide documents and forms needed for Business Entity membership administration.',
    tag_panduan : 'Guide',
    tag_program : 'Program',
    tag_formulir: 'Form',
    tag_manual  : 'Manual',
    btn_view    : 'View / Download',
    btn_download: 'Download',
    card1_title: 'Worker Deactivation Procedure',
    card1_desc : 'Steps to deactivate worker data through the eDabu application correctly and precisely.',
    card2_title: 'REHAB Mandiri / Alih Segmen Program',
    card2_desc : 'Instalment Payment Plan (REHAB) — easy solution to settle contribution arrears for Mandiri/Alih Segmen.',
    card3_title: 'Salary Update via eDabu',
    card3_desc : 'Complete guide on updating participant salary/wage data through the Business Entity eDabu portal.',
    card4_title: 'Worker Deactivation Form',
    card4_desc : 'Official form/template to be completed for participant deactivation submission.',
    card5_title: 'eDabu User Manual',
    card5_desc : 'Complete guide for using the latest version of eDabu for Business Entities.',

    /* eDabu Guides Section */
    sec_edabu_tag  : 'eDabu Guides',
    sec_edabu_title: 'Complete eDabu Guides',
    sec_edabu_desc : 'Collection of Business Entity membership administration guides through the eDabu application.',
    filter_all     : 'All',
    filter_daftar  : 'Registration',
    filter_keluarga: 'Family',
    filter_lainnya : 'Others',
    p1_title : 'New Employee Registration (Not yet JKN)',
    p1_desc  : 'Steps to register new participants not yet enrolled in the JKN programme via eDabu.',
    p2_title : 'Worker Registration from ISAT in the Same Business Entity',
    p2_desc  : 'Registration process for workers from ISAT within the same Business Entity.',
    p3_title : 'Additional Family Member Transfer',
    p3_desc  : 'Guide for the transfer/mutation process of additional family members of participants.',
    p4_title : 'Re-activation of Child Above 21 Years Old',
    p4_desc  : 'Procedure for re-activating JKN membership for children above 21 years of age.',
    p5_title : 'Deactivation of Uncovered / Deceased Family Member',
    p5_desc  : 'Procedure to deactivate family members who are no longer covered or have passed away.',
    p6_title : 'Foreign National (ISA) Registration — Not yet JKN',
    p6_desc  : 'Guide to register Foreign National spouse/children (ISA) not yet enrolled in JKN.',
    p7_title : 'Add Family Member from Another Segment',
    p7_desc  : 'How to add a family member previously registered in a different participant segment.',
    p8_title : 'Add New Family Member',
    p8_desc  : 'Guide for adding a new family member (spouse/child) to JKN membership.',
    p9_title : 'Foreign Worker Registration — Not yet JKN',
    p9_desc  : 'Procedure to register foreign national workers who do not yet have JKN membership.',
    p10_title: 'Employee Transfer Registration — PBPU to PPU',
    p10_desc : 'Guide for membership transition from the PBPU segment to the PPU Business Entity segment.',
    p11_title: 'Membership Administration Service Centre (Selaras)',
    p11_desc : 'Guide for using the Selaras service for integrated Business Entity membership administration.',

    /* What's New Section */
    sec_news_tag  : 'Latest Updates',
    sec_news_title: "What's New",
    sec_news_desc : 'Latest information and announcements from BPJS Kesehatan Branch Pematangsiantar.',
    badge_new       : 'New',
    badge_info      : 'Info',
    badge_pengumuman: 'Announcement',
    ncat_update : 'Update',
    ncat_layanan: 'Service',
    ncat_admin  : 'Health Screening',
    news1_title: 'Service Types and Service Hours',
    news1_desc : 'All JKN Participant Administrative Services will be held under One Roof at the Pematangsiantar City Public Service Mall.',
    news2_title: 'BPJS Ready to Help',
    news2_desc : 'Need Information or Experiencing Service Issues?',
    news3_title: 'Everyone Must Get Health Screening',
    news3_desc : 'A series of medical examinations aimed at early detection of diseases and health risks, even before symptoms appear.',

    /* New news — newsina & newsina1 */
    ncat_baru       : 'Information',
    badge_baru      : 'Latest',
    newsina_date    : 'May 2026',
    newsina_title   : 'Latest BPJS Kesehatan Information',
    newsina_desc    : 'Latest information about services and membership administration of BPJS Kesehatan Branch Pematangsiantar.',
    newsina1_date   : 'May 2026',
    newsina1_title  : 'BPJS Kesehatan Service Update',
    newsina1_desc   : 'Updated information on membership administration services for Business Entities at BPJS Kesehatan Branch Pematangsiantar.',
    btn_readmore: 'Read More',

    /* Gallery Section */
    sec_gallery_tag  : 'Documentation',
    sec_gallery_title: 'Business Entity Gallery',
    sec_gallery_desc : 'Documentation of activities and services at BPJS Kesehatan Branch Pematangsiantar.',
    gal1_cap: 'Business Entity Gathering',
    gal2_cap: 'Business Entity Gathering',
    gal3_cap: 'Business Entity Gathering',
    gal4_cap: 'PBPU Collective Award to Contributing Business Entities',
    gal5_cap: 'Socialisation for Business Entities',
    gal6_cap: 'Satya JKN National Best Business Entity Award',

    /* Contact Section */
    sec_contact_tag  : 'Our Team',
    sec_contact_title: 'Contact Person',
    sec_contact_desc : 'Contact our officers directly via WhatsApp for information and further assistance.',
    role_officer: 'Relationship Officer',
    role_leader : 'Head of Membership Division',
    role_admin  : 'Membership Admin',
    btn_wa      : 'Chat on WhatsApp',
    cg_leader    : 'Leadership',
    cg_admin     : 'Membership Admin',
    cg_cabang    : 'Pematangsiantar Branch Office',
    cg_simalungun: 'Simalungun District Office',
    cg_toba      : 'Toba District Office',
    cg_samosir   : 'Samosir District Office',
    badge_leader : 'Department Head',
    leader_name  : 'Muhammad Novar Nasution',
    admin1_name  : 'Tetty Indah Sari Pardosi',
    admin2_name  : 'Febby Ai Ginting',
    admin3_name  : 'Indah Sriwardani Purba',
    ro_sml1_name : 'Jana Nofanna Siallagan',
    ro_sml2_name : 'Abdi Ardian Parinduri',
    ro_toba_name : 'Hermanto Naibaho',
    ro_samosir_name: 'Fhony Br Harianja',

    /* Location Section */
    sec_lokasi_tag  : 'Our Office',
    sec_lokasi_title: 'Office Locations',
    sec_lokasi_desc : 'Visit our offices during operating hours for direct service.',
    lokasi_name        : 'BPJS Kesehatan Branch Pematangsiantar',
    lokasi_sml_name    : 'BPJS Kesehatan Simalungun District',
    lokasi_toba_name   : 'BPJS Kesehatan Toba District',
    lokasi_samosir_name: 'BPJS Kesehatan Samosir District',
    lokasi_alamat      : 'Address',
    lokasi_sml_alamat  : 'Simalungun Regency, North Sumatra',
    lokasi_toba_alamat : 'Toba Regency, North Sumatra',
    lokasi_samosir_alamat: 'Samosir Regency, North Sumatra',
    lokasi_jam    : 'Operating Hours',
    lokasi_jam_val: 'Monday – Friday: 09:00 – 15:00 WIB',
    lokasi_telp   : 'Hotline',
    btn_direction : 'Get Directions',
    ltab_cabang   : 'Pematangsiantar Branch',
    ltab_simalungun: 'Simalungun District',
    ltab_toba     : 'Toba District',
    ltab_samosir  : 'Samosir District',
    ltag_cabang   : 'Branch Office',
    ltag_kab      : 'District Office',

    /* Footer */
    footer_tagline: 'Serving wholeheartedly for a healthier Indonesia.',
    footer_links  : 'Quick Links',
    footer_contact: 'Contact',
    footer_rights : 'All rights reserved.',
    footer_made   : 'Business Entity Information Centre',
  },
};

/* ─────────────────────────────────────────────────
   STATE  —  tema & bahasa
───────────────────────────────────────────────── */
let currentLang  = localStorage.getItem('bpjs-lang')
                || (navigator.language.startsWith('id') ? 'id' : 'id');
let currentTheme = localStorage.getItem('bpjs-theme')
                || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

/* ─────────────────────────────────────────────────
   ENTRY POINT
───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  initYear();
  initNavbar();
  initThemeToggle();
  initLangSwitcher();
  initParticles();
  initScrollReveal();
  initPanduanFilter();
  initGalleryLightbox();
  initBackToTop();
  initTicker();
  initLokasiTabs();
  initPhotoProtection();
});

/* ─────────────────────────────────────────────────
   DARK / LIGHT MODE
───────────────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('bpjs-theme', theme);
  currentTheme = theme;
}

function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  /* Sinkron jika OS mengubah mode malam otomatis */
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('bpjs-theme')) applyTheme(e.matches ? 'dark' : 'light');
  });
}

/* ─────────────────────────────────────────────────
   i18n  —  BILINGUAL
───────────────────────────────────────────────── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('bpjs-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'id');

  const strings = i18n[lang] || i18n.id;

  /* Terapkan semua elemen dengan data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key] !== undefined) {
      el.innerHTML = strings[key];
    }
  });

  /* Update tombol aktif */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });

  /* Refresh ticker setelah teks berubah */
  refreshTicker();
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

/* ─────────────────────────────────────────────────
   TAHUN DI FOOTER
───────────────────────────────────────────────── */
function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ─────────────────────────────────────────────────
   NAVBAR  —  sticky · hamburger · active link
───────────────────────────────────────────────── */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  /* ── Bayangan scroll ── */
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    document.getElementById('backToTop')?.classList.toggle('visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Hamburger ── */
  function openMenu() {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function toggleMenu() {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  }

  hamburger.addEventListener('click', e => { e.stopPropagation(); toggleMenu(); });

  /* Tutup saat klik link */
  navLinks.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', closeMenu));

  /* Tutup saat klik di luar */
  document.addEventListener('click', e => {
    if (navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)) closeMenu();
  });

  /* Tutup saat Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  /* Tutup otomatis saat resize ke desktop */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (window.innerWidth >= 768) closeMenu(); }, 100);
  });

  /* ── Active link via IntersectionObserver ── */
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const match = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => sectionObs.observe(s));

  /* ── Smooth scroll (offset navbar) ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--navbar-h') || '66'
      );
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navH,
        behavior: 'smooth',
      });
    });
  });
}

/* ─────────────────────────────────────────────────
   HERO PARTICLES
───────────────────────────────────────────────── */
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  /* Kurangi jumlah partikel di perangkat kecil */
  const count = window.innerWidth < 768 ? 10 : 22;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    p.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${Math.random() * 100}%`,
      `animation-duration:${Math.random() * 14 + 10}s`,
      `animation-delay:${Math.random() * -22}s`,
      `opacity:${(Math.random() * 0.35 + 0.05).toFixed(2)}`,
    ].join(';');
    container.appendChild(p);
  }
}

/* ─────────────────────────────────────────────────
   SCROLL REVEAL
   Kartu, berita, dan item galeri muncul dengan
   animasi saat pertama kali masuk ke viewport.
───────────────────────────────────────────────── */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.info-card, .contact-card, .news-card, .gal-item'
  );

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
      }, delay);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -24px 0px' });

  targets.forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    obs.observe(el);
  });
}

/* ─────────────────────────────────────────────────
   PANDUAN eDabu  —  FILTER TABS
   Kategori: all | daftar | keluarga | lainnya
───────────────────────────────────────────────── */
function initPanduanFilter() {
  const tabs  = document.querySelectorAll('.ftab');
  const cards = document.querySelectorAll('#panduanGrid .info-card');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      /* Update tab aktif */
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      cards.forEach(card => {
        const cat  = card.dataset.cat || 'all';
        const show = filter === 'all' || cat === filter;

        if (show) {
          card.classList.remove('hidden');
          /* Trigger re-entry animation */
          card.style.opacity   = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            setTimeout(() => {
              card.style.opacity   = '1';
              card.style.transform = 'translateY(0)';
            }, 60);
          });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ─────────────────────────────────────────────────
   GALLERY LIGHTBOX
   Mendukung 7 foto · navigasi ← → · keyboard
───────────────────────────────────────────────── */
function initGalleryLightbox() {
  const lb      = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lbImg');
  const lbCap   = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');
  const lbPrev  = document.getElementById('lbPrev');
  const lbNext  = document.getElementById('lbNext');
  if (!lb) return;

  /* Ambil semua item galeri yang terlihat (bukan fallback) */
  const items = Array.from(document.querySelectorAll('.gal-item'));
  let current = 0;

  function openLightbox(idx) {
    current = (idx + items.length) % items.length;
    const item    = items[current];
    const imgEl   = item.querySelector('.gal-img');
    const capEl   = item.querySelector('.gal-overlay span');
    lbImg.src          = imgEl  ? imgEl.src         : '';
    lbImg.alt          = capEl  ? capEl.textContent  : '';
    lbCap.textContent  = capEl  ? capEl.textContent  : '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbImg.focus?.();
  }

  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  /* Buka lightbox saat foto diklik */
  items.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(idx); }
    });
  });

  lbClose.addEventListener('click', closeLightbox);

  lbPrev.addEventListener('click', e => {
    e.stopPropagation();
    openLightbox(current - 1);
  });

  lbNext.addEventListener('click', e => {
    e.stopPropagation();
    openLightbox(current + 1);
  });

  /* Klik background (luar foto) untuk tutup */
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

  /* Navigasi keyboard */
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    switch (e.key) {
      case 'Escape':     closeLightbox(); break;
      case 'ArrowLeft':  openLightbox(current - 1); break;
      case 'ArrowRight': openLightbox(current + 1); break;
    }
  });

  /* Swipe touch untuk mobile */
  let touchStartX = 0;
  lb.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) < 40) return;
    openLightbox(dx < 0 ? current + 1 : current - 1);
  });
}

/* ─────────────────────────────────────────────────
   BACK TO TOP BUTTON
───────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─────────────────────────────────────────────────
   NEWS TICKER  —  seamless infinite loop
   Menduplikat konten agar ticker tidak putus di
   tengah saat animasi kembali ke awal.
───────────────────────────────────────────────── */
function initTicker() {
  refreshTicker();
}

function refreshTicker() {
  const track    = document.querySelector('.ticker-track');
  const original = document.getElementById('tickerItems');
  if (!track || !original) return;

  /* Hapus clone lama jika ada */
  track.querySelectorAll('.ticker-clone').forEach(el => el.remove());

  /* Buat clone untuk loop mulus */
  const clone = original.cloneNode(true);
  clone.removeAttribute('id');
  clone.classList.add('ticker-clone');
  track.appendChild(clone);
}

/* ─────────────────────────────────────────────────
   PHOTO PROTECTION — contact section
   Mencegah: klik kanan, drag, "open in new tab"
───────────────────────────────────────────────── */
function initPhotoProtection() {
  const section = document.getElementById('contact');
  if (!section) return;

  const photos = section.querySelectorAll('.contact-photo, .contact-avatar-photo');

  photos.forEach(el => {
    /* Blokir context menu (klik kanan) */
    el.addEventListener('contextmenu', e => e.preventDefault());

    /* Blokir drag & drop */
    el.addEventListener('dragstart', e => e.preventDefault());

    /* Blokir touch hold (mobile) */
    el.addEventListener('touchstart', e => {
      if (e.touches.length > 1) e.preventDefault();
    }, { passive: false });
  });

  /* Blokir context menu di seluruh section contact */
  section.addEventListener('contextmenu', e => {
    if (e.target.tagName === 'IMG' || e.target.closest('.contact-avatar-photo')) {
      e.preventDefault();
    }
  });
}
function initLokasiTabs() {
  const tabs   = document.querySelectorAll('.ltab');
  const panels = document.querySelectorAll('.lokasi-panel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.kantor;

      /* Update tab aktif */
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      /* Tampilkan panel yang sesuai */
      panels.forEach(panel => {
        const isTarget = panel.id === `panel-${target}`;
        panel.classList.toggle('active', isTarget);
      });
    });
  });
}
