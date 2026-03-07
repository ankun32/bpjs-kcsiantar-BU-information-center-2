/* ═══════════════════════════════════════════════
   BPJS Kesehatan — script.js
   Fully responsive interactions
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Year in footer ──
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── DOM refs ──
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // ── Sticky navbar shadow on scroll ──
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // ── Hamburger toggle ──
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    // Prevent body scroll when menu is open on mobile
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // ── Close mobile menu when a nav link is clicked ──
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ── Close mobile menu when clicking outside ──
  document.addEventListener('click', (e) => {
    if (
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  // ── Close menu on Escape key ──
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMobileMenu();
      hamburger.focus();
    }
  });

  function closeMobileMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // ── Active nav link on scroll (IntersectionObserver) ──
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, {
    rootMargin: '-40% 0px -50% 0px',
    threshold: 0
  });
  sections.forEach(s => sectionObserver.observe(s));

  // ── Scroll-reveal for cards ──
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => {
          entry.target.style.opacity  = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.info-card, .contact-card').forEach(card => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(22px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    cardObserver.observe(card);
  });

  // ── Smooth scroll for anchor links with navbar offset ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navbarH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--navbar-h') || '64'
      );
      const top = target.getBoundingClientRect().top + window.scrollY - navbarH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── Resize: close menu and restore scroll on desktop ──
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    }, 100);
  });

});
