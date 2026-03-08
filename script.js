/* ══════════════════════════════════════════════
   BPJS Kesehatan — script.js
   Features:
   • Dark / Light mode (persist + OS sync)
   • i18n: Bahasa Indonesia / English
   • Navbar: sticky, hamburger, active link
   • Panduan filter tabs
   • Gallery lightbox
   • Hero floating particles
   • Scroll-reveal cards
   • Back-to-top button
   • News ticker clone
══════════════════════════════════════════════ */

/* ─────────────────────────────────────
   i18n STRINGS
───────────────────────────────────── */
const i18n = {
  id: {
    brand_main: "BPJS Kesehatan",
    brand_sub:  "KC Pematangsiantar",
    nav_home:     "Beranda",
    nav_layanan:  "Informasi Layanan",
    nav_panduan:  "Panduan eDabu",
    nav_news:     "What's New",
    nav_gallery:  "Galeri",
    nav_contact:  "Contact",
    nav_lokasi:   "Lokasi",
    hero_badge:   "Resmi & Terpercaya",
    hero_title1:  "Pusat Informasi",
    hero_title2:  "Badan Usaha",
    hero_title3:  "BPJS Kesehatan",
    hero_title4:  "KC Pematangsiantar",
    hero_sub:     "Informasi layanan administrasi Badan Usaha dan Panduan Penggunaan <strong>eDabu</strong> untuk perusahaan Anda",
    btn_info:     "Lihat Informasi",
    btn_contact:  "Hubungi Kami",
    stat_layanan: "Layanan Tersedia",
    stat_petugas: "Petugas Siap Bantu",
    stat_online:  "Info Online",
    scroll_down:  "Scroll ke bawah",
    ticker_label: "Terbaru",
    tick1: "📢 User Manual eDabu versi 7.14.0 telah dirilis",
    tick2: "📋 Format baru Penonaktifan Pekerja sudah tersedia",
    tick3: "🏥 Jam pelayanan: Senin–Jumat 09.00–15.00 WIB",
    tick4: "📞 Hotline BPJS Kesehatan: 165",
    sec_doc_tag:     "Dokumen & Panduan",
    sec_layanan_title:"Informasi Layanan",
    sec_layanan_desc: "Unduh dokumen panduan dan formulir yang Anda butuhkan untuk administrasi kepesertaan Badan Usaha.",
    tag_panduan:  "Panduan",
    tag_program:  "Program",
    tag_formulir: "Formulir",
    tag_manual:   "Manual",
    card1_title:  "Tata Cara Penonaktifan Pekerja",
    card1_desc:   "Langkah-langkah menonaktifkan data pekerja melalui aplikasi eDabu secara benar dan tepat.",
    card2_title:  "Program REHAB Mandiri/Alih Segmen",
    card2_desc:   "Rencana Pembayaran Bertahap (REHAB) — solusi kemudahan pelunasan tunggakan iuran Mandiri/Alih Segmen.",
    card3_title:  "Tata Cara Ubah Gaji dari eDabu",
    card3_desc:   "Panduan lengkap cara mengubah data gaji / upah peserta melalui portal eDabu Badan Usaha.",
    card4_title:  "Format Penonaktifan Pekerja",
    card4_desc:   "Template / formulir resmi yang harus diisi untuk pengajuan penonaktifan peserta.",
    card5_title:  "User Manual eDabu",
    card5_desc:   "Panduan lengkap penggunaan aplikasi eDabu versi terbaru untuk Badan Usaha.",
    btn_view:     "Lihat / Unduh",
    btn_download: "Unduh",
    sec_edabu_tag:  "Panduan eDabu",
    sec_edabu_title:"Panduan Lengkap eDabu",
    sec_edabu_desc: "Kumpulan panduan administrasi kepesertaan Badan Usaha melalui aplikasi eDabu.",
    filter_all:     "Semua",
    filter_daftar:  "Pendaftaran",
    filter_keluarga:"Keluarga",
    filter_lainnya: "Lainnya",
    p1_title: "Pendaftaran Karyawan Baru Belum Terdaftar JKN",
    p1_desc:  "Langkah pendaftaran peserta baru yang belum terdaftar di program JKN melalui eDabu.",
    p2_title: "Pendaftaran Pekerja dari ISAT di BU yang Sama",
    p2_desc:  "Proses pendaftaran pekerja yang berasal dari ISAT dalam satu Badan Usaha yang sama.",
    p3_title: "Mutasi Anggota Keluarga Tambahan",
    p3_desc:  "Panduan proses mutasi atau perpindahan anggota keluarga tambahan peserta.",
    p4_title: "Re-aktivasi Anak Usia di atas 21 Tahun",
    p4_desc:  "Prosedur re-aktivasi kepesertaan anak yang telah berusia di atas 21 tahun.",
    p5_title: "Penonaktifan Anggota Keluarga Tidak Ditanggung/Meninggal",
    p5_desc:  "Prosedur penonaktifan anggota keluarga yang tidak lagi ditanggung atau telah meninggal dunia.",
    p6_title: "Pendaftaran ISA WNA Belum Terdaftar JKN",
    p6_desc:  "Panduan mendaftarkan Istri/Suami/Anak (ISA) Warga Negara Asing yang belum terdaftar JKN.",
    p7_title: "Tambah Keluarga dari Segmen Lain",
    p7_desc:  "Cara menambahkan anggota keluarga yang sebelumnya terdaftar di segmen peserta yang berbeda.",
    p8_title: "Tambah Keluarga Baru",
    p8_desc:  "Panduan menambahkan anggota keluarga baru (pasangan/anak) ke dalam kepesertaan JKN.",
    p9_title: "Pendaftaran Pekerja WNA Belum Terdaftar JKN",
    p9_desc:  "Prosedur mendaftarkan pekerja Warga Negara Asing yang belum memiliki kepesertaan JKN.",
    p10_title:"Pendaftaran Karyawan Mutasi PBPU ke PPU",
    p10_desc: "Panduan proses peralihan kepesertaan dari segmen PBPU ke segmen PPU Badan Usaha.",
    p11_title:"Sentra Layanan Administrasi Kepesertaan (Selaras)",
    p11_desc: "Panduan penggunaan layanan Selaras untuk administrasi kepesertaan Badan Usaha secara terpadu.",
    sec_news_tag:  "Informasi Terkini",
    sec_news_title:"What's New",
    sec_news_desc: "Informasi dan pengumuman terbaru dari BPJS Kesehatan KC Pematangsiantar.",
    badge_new:   "Baru",
    badge_info:  "Info",
    badge_pengumuman: "Pengumuman",
    ncat_update: "Update",
    ncat_layanan:"Layanan",
    ncat_admin:  "Administrasi",
    news1_title: "User Manual eDabu Versi 7.14.0 Telah Dirilis",
    news1_desc:  "Versi terbaru User Manual eDabu kini tersedia dengan panduan fitur-fitur baru yang lebih lengkap dan mudah dipahami.",
    news2_title: "Program REHAB Mandiri/Alih Segmen",
    news2_desc:  "Program Rencana Pembayaran Bertahap hadir untuk membantu peserta melunasi tunggakan iuran secara lebih mudah.",
    news3_title: "Layanan Selaras Kini Tersedia",
    news3_desc:  "Sentra Layanan Administrasi Kepesertaan (Selaras) hadir sebagai solusi terpadu administrasi kepesertaan Badan Usaha.",
    btn_readmore:"Baca Selengkapnya",
    sec_gallery_tag:   "Dokumentasi",
    sec_gallery_title: "Galeri",
    sec_gallery_desc:  "Dokumentasi kegiatan dan pelayanan BPJS Kesehatan KC Pematangsiantar.",
    gal1_cap: "Pelayanan Peserta",
    gal2_cap: "Sosialisasi Badan Usaha",
    gal3_cap: "Pelatihan eDabu",
    gal4_cap: "Kantor Pelayanan",
    gal5_cap: "Tim BPJS Kesehatan",
    gal6_cap: "Kegiatan Sosial",
    sec_contact_tag:  "Tim Kami",
    sec_contact_title:"Contact Person",
    sec_contact_desc: "Hubungi petugas kami langsung melalui WhatsApp untuk informasi dan bantuan lebih lanjut.",
    role_officer: "Petugas Badan Usaha",
    btn_wa: "Chat WhatsApp",
    sec_lokasi_tag:  "Kantor Kami",
    sec_lokasi_title:"Lokasi Kantor",
    sec_lokasi_desc: "Kunjungi kantor kami pada jam operasional untuk pelayanan langsung.",
    lokasi_name:    "BPJS Kesehatan KC Pematangsiantar",
    lokasi_jam:     "Jam Operasional",
    lokasi_jam_val: "Senin – Jumat: 09.00 – 15.00 WIB",
    lokasi_telp:    "Hotline",
    btn_direction:  "Petunjuk Arah",
    footer_tagline: "Melayani dengan sepenuh hati untuk Indonesia yang lebih sehat.",
    footer_links:   "Tautan Cepat",
    footer_contact: "Kontak",
    footer_rights:  "Semua hak dilindungi.",
    footer_made:    "Pusat Informasi Badan Usaha",
  },
  en: {
    brand_main: "BPJS Kesehatan",
    brand_sub:  "Branch Pematangsiantar",
    nav_home:     "Home",
    nav_layanan:  "Services",
    nav_panduan:  "eDabu Guides",
    nav_news:     "What's New",
    nav_gallery:  "Gallery",
    nav_contact:  "Contact",
    nav_lokasi:   "Location",
    hero_badge:   "Official & Trusted",
    hero_title1:  "Information Centre",
    hero_title2:  "Business Entity",
    hero_title3:  "BPJS Kesehatan",
    hero_title4:  "Branch Pematangsiantar",
    hero_sub:     "Administrative service information for Business Entities and <strong>eDabu</strong> Usage Guide for your company",
    btn_info:     "View Information",
    btn_contact:  "Contact Us",
    stat_layanan: "Services Available",
    stat_petugas: "Officers Ready",
    stat_online:  "Online Info",
    scroll_down:  "Scroll down",
    ticker_label: "Latest",
    tick1: "📢 eDabu User Manual version 7.14.0 has been released",
    tick2: "📋 New Employee Deactivation Format is now available",
    tick3: "🏥 Service hours: Mon–Fri 09:00–15:00 WIB",
    tick4: "📞 BPJS Kesehatan Hotline: 165",
    sec_doc_tag:     "Documents & Guides",
    sec_layanan_title:"Service Information",
    sec_layanan_desc: "Download guide documents and forms needed for Business Entity membership administration.",
    tag_panduan:  "Guide",
    tag_program:  "Program",
    tag_formulir: "Form",
    tag_manual:   "Manual",
    card1_title:  "Worker Deactivation Procedure",
    card1_desc:   "Steps to deactivate worker data through the eDabu application correctly.",
    card2_title:  "REHAB Mandiri/Alih Segmen Program",
    card2_desc:   "Instalment Payment Plan (REHAB) — easy solution to settle contribution arrears.",
    card3_title:  "Salary Update via eDabu",
    card3_desc:   "Complete guide on how to update participant salary/wage data through the eDabu portal.",
    card4_title:  "Worker Deactivation Form",
    card4_desc:   "Official form/template to be filled for participant deactivation submission.",
    card5_title:  "eDabu User Manual",
    card5_desc:   "Complete guide for using the latest version of eDabu for Business Entities.",
    btn_view:     "View / Download",
    btn_download: "Download",
    sec_edabu_tag:  "eDabu Guides",
    sec_edabu_title:"Complete eDabu Guides",
    sec_edabu_desc: "Collection of Business Entity membership administration guides through eDabu.",
    filter_all:     "All",
    filter_daftar:  "Registration",
    filter_keluarga:"Family",
    filter_lainnya: "Others",
    p1_title: "New Employee Registration (Not yet JKN)",
    p1_desc:  "Steps to register new participants not yet enrolled in the JKN program via eDabu.",
    p2_title: "Worker Registration from ISAT in the Same Business Entity",
    p2_desc:  "Registration process for workers from ISAT within the same Business Entity.",
    p3_title: "Additional Family Member Transfer",
    p3_desc:  "Guide for the transfer/mutation process of additional family members.",
    p4_title: "Re-activation of Child Above 21 Years Old",
    p4_desc:  "Procedure for re-activating JKN membership for children above 21 years old.",
    p5_title: "Deactivation of Uncovered/Deceased Family Member",
    p5_desc:  "Procedure to deactivate family members who are no longer covered or have passed away.",
    p6_title: "Foreign National (ISA) Registration Not yet JKN",
    p6_desc:  "Guide to register Foreign National spouse/children (ISA) not yet enrolled in JKN.",
    p7_title: "Add Family Member from Another Segment",
    p7_desc:  "How to add a family member previously registered in a different participant segment.",
    p8_title: "Add New Family Member",
    p8_desc:  "Guide to adding a new family member (spouse/child) to JKN membership.",
    p9_title: "Foreign Worker Registration Not yet JKN",
    p9_desc:  "Procedure to register foreign national workers who do not yet have JKN membership.",
    p10_title:"Employee Transfer Registration PBPU to PPU",
    p10_desc: "Guide for membership transition from PBPU segment to PPU Business Entity segment.",
    p11_title:"Membership Administration Service Centre (Selaras)",
    p11_desc: "Guide for using the Selaras service for integrated Business Entity membership administration.",
    sec_news_tag:  "Latest Updates",
    sec_news_title:"What's New",
    sec_news_desc: "Latest information and announcements from BPJS Kesehatan Branch Pematangsiantar.",
    badge_new:   "New",
    badge_info:  "Info",
    badge_pengumuman: "Announcement",
    ncat_update: "Update",
    ncat_layanan:"Service",
    ncat_admin:  "Administration",
    news1_title: "eDabu User Manual Version 7.14.0 Released",
    news1_desc:  "The latest version of the eDabu User Manual is now available with more complete and easy-to-understand guides.",
    news2_title: "REHAB Mandiri/Alih Segmen Program",
    news2_desc:  "The Instalment Payment Plan is here to help participants settle contribution arrears more easily.",
    news3_title: "Selaras Service Now Available",
    news3_desc:  "The Membership Administration Service Centre (Selaras) is here as an integrated solution for Business Entity membership administration.",
    btn_readmore:"Read More",
    sec_gallery_tag:   "Documentation",
    sec_gallery_title: "Gallery",
    sec_gallery_desc:  "Documentation of activities and services at BPJS Kesehatan Branch Pematangsiantar.",
    gal1_cap: "Participant Services",
    gal2_cap: "Business Entity Socialisation",
    gal3_cap: "eDabu Training",
    gal4_cap: "Service Office",
    gal5_cap: "BPJS Kesehatan Team",
    gal6_cap: "Social Activities",
    sec_contact_tag:  "Our Team",
    sec_contact_title:"Contact Person",
    sec_contact_desc: "Contact our officers directly via WhatsApp for information and further assistance.",
    role_officer: "Business Entity Officer",
    btn_wa: "Chat on WhatsApp",
    sec_lokasi_tag:  "Our Office",
    sec_lokasi_title:"Office Location",
    sec_lokasi_desc: "Visit our office during operating hours for direct service.",
    lokasi_name:    "BPJS Kesehatan Branch Pematangsiantar",
    lokasi_jam:     "Operating Hours",
    lokasi_jam_val: "Monday – Friday: 09:00 – 15:00 WIB",
    lokasi_telp:    "Hotline",
    btn_direction:  "Get Directions",
    footer_tagline: "Serving wholeheartedly for a healthier Indonesia.",
    footer_links:   "Quick Links",
    footer_contact: "Contact",
    footer_rights:  "All rights reserved.",
    footer_made:    "Business Entity Information Centre",
  }
};

/* ─────────────────────────────────────
   STATE
───────────────────────────────────── */
let currentLang  = localStorage.getItem('bpjs-lang')  || 'id';
let currentTheme = localStorage.getItem('bpjs-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

/* ─────────────────────────────────────
   INIT
───────────────────────────────────── */
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
  cloneTickerIfNeeded();

});

/* ─────────────────────────────────────
   THEME
───────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('bpjs-theme', theme);
  currentTheme = theme;
}
function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  btn.addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('bpjs-theme')) applyTheme(e.matches ? 'dark' : 'light');
  });
}

/* ─────────────────────────────────────
   i18n
───────────────────────────────────── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('bpjs-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  const strings = i18n[lang] || i18n.id;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key] !== undefined) el.innerHTML = strings[key];
  });
  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Update ticker
  cloneTickerIfNeeded();
}
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

/* ─────────────────────────────────────
   FOOTER YEAR
───────────────────────────────────── */
function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ─────────────────────────────────────
   NAVBAR
───────────────────────────────────── */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const sections  = document.querySelectorAll('section[id]');
  const links     = document.querySelectorAll('.nav-link');

  // Scroll shadow
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    const open = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', closeMenu));
  document.addEventListener('click', e => {
    if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) { closeMenu(); hamburger.focus(); }
  });
  window.addEventListener('resize', () => { if (window.innerWidth >= 768) closeMenu(); });

  function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Active link on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => obs.observe(s));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-h') || '66');
      window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────
   HERO PARTICLES
───────────────────────────────────── */
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  const count = window.innerWidth < 768 ? 12 : 24;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      animation-duration:${Math.random() * 15 + 10}s;
      animation-delay:${Math.random() * -20}s;
      opacity:${Math.random() * .4 + .05};
    `;
    container.appendChild(p);
  }
}

/* ─────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────── */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => {
          entry.target.style.opacity  = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.info-card, .contact-card, .news-card, .gal-item').forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    obs.observe(el);
  });
}

/* ─────────────────────────────────────
   PANDUAN FILTER
───────────────────────────────────── */
function initPanduanFilter() {
  const tabs  = document.querySelectorAll('.ftab');
  const cards = document.querySelectorAll('#panduanGrid .info-card');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      cards.forEach(card => {
        const cat = card.dataset.cat || 'all';
        const show = filter === 'all' || cat === filter;
        card.classList.toggle('hidden', !show);
        if (show) {
          card.style.opacity   = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            setTimeout(() => {
              card.style.opacity   = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          });
        }
      });
    });
  });
}

/* ─────────────────────────────────────
   GALLERY LIGHTBOX
───────────────────────────────────── */
function initGalleryLightbox() {
  const lb      = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lbImg');
  const lbCap   = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');
  const lbPrev  = document.getElementById('lbPrev');
  const lbNext  = document.getElementById('lbNext');
  if (!lb) return;

  const items = Array.from(document.querySelectorAll('.gal-item'));
  let current = 0;

  function openLb(idx) {
    current = idx;
    const item = items[idx];
    const img = item.querySelector('.gal-img');
    const cap = item.querySelector('.gal-overlay span');
    lbImg.src = img ? img.src : '';
    lbImg.alt = cap ? cap.textContent : '';
    lbCap.textContent = cap ? cap.textContent : '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }
  function goPrev() { openLb((current - 1 + items.length) % items.length); }
  function goNext() { openLb((current + 1) % items.length); }

  items.forEach((item, idx) => item.addEventListener('click', () => openLb(idx)));
  lbClose.addEventListener('click', closeLb);
  lbPrev .addEventListener('click', e => { e.stopPropagation(); goPrev(); });
  lbNext .addEventListener('click', e => { e.stopPropagation(); goNext(); });
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLb();
    if (e.key === 'ArrowLeft')  goPrev();
    if (e.key === 'ArrowRight') goNext();
  });
}

/* ─────────────────────────────────────
   BACK TO TOP
───────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─────────────────────────────────────
   NEWS TICKER — clone for seamless loop
───────────────────────────────────── */
function cloneTickerIfNeeded() {
  const items = document.getElementById('tickerItems');
  if (!items) return;
  // Remove previous clone if any
  const oldClone = items.parentElement.querySelector('.ticker-clone');
  if (oldClone) oldClone.remove();
  const clone = items.cloneNode(true);
  clone.classList.add('ticker-clone');
  items.parentElement.appendChild(clone);
}
