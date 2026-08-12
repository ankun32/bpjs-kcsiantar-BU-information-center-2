/* ══════════════════════════════════════════════════
   registrasi-badan-usaha.js
   Perilaku khusus halaman Panduan Registrasi Badan Usaha.
   Navbar, dark/light mode, bahasa ID/EN, back-to-top,
   dan scroll-reveal umum sudah ditangani oleh script.js
   (dipanggil bersamaan lewat DOMContentLoaded-nya sendiri).
══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initSubnavScroll();
  initRbReveal();
});

/* ── FAQ ACCORDION ── */
function initFaqAccordion() {
  document.querySelectorAll('.rb-faq-item').forEach(item => {
    const q = item.querySelector('.rb-faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.rb-faq-item.open').forEach(el => {
        if (el !== item) el.classList.remove('open');
      });
      item.classList.toggle('open', !isOpen);
    });
  });
}

/* ── SUB-NAV: highlight bagian aktif saat scroll ── */
function initSubnavScroll() {
  const links = document.querySelectorAll('.rb-subnav a');
  if (!links.length) return;

  const sections = Array.from(links)
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => observer.observe(sec));

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const y = target.getBoundingClientRect().top + window.pageYOffset - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
}

/* ── SCROLL REVEAL untuk elemen .reveal-up di halaman ini ── */
function initRbReveal() {
  const targets = document.querySelectorAll('.reveal-up');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(t => io.observe(t));
}
