/* ============================================
   SEMESTER 2 — E-PORTFOLIO 1
   Modul gerak halaman, mengikuti kosakata yang
   sudah dipakai EP1 (scroll-experience.js) dan
   EP2 (eportfolio2-animation.js): split-text,
   scrub parallax, entrance berjenjang, dan
   micro-motion pada hover.

   Dua mode tersedia untuk dibandingkan:
     ?tenang  → tanpa sapuan warna latar dan
                tanpa kanvas partikel
     bawaan   → gerak penuh
   ============================================ */

import { gsap, ScrollTrigger } from './gsap-init.js';
import { applyScrollExperienceTo } from './scroll-experience.js';

/* Bagian yang diserahkan ke mesin gerak asli E-Portfolio 1, bukan ke modul
   ini. Dipakai untuk perbandingan berdampingan: 01 memakai mesin EP1,
   02–06 memakai modul ini. */
const PAKAI_MESIN_EP1 = new Set(['s2ep1-rancangan']);

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function isCalm() {
  return new URLSearchParams(window.location.search).has('tenang');
}

/* Warna sapuan per bagian, memakai token yang sama dengan [data-accent]. */
const WASH = {
  's2ep1-rancangan':   'rgba(15, 94, 168, 0.13)',
  's2ep1-materi':      'rgba(57, 189, 235, 0.13)',
  's2ep1-media':       'rgba(46, 196, 182, 0.13)',
  's2ep1-video':       'rgba(107, 203, 119, 0.13)',
  's2ep1-nonmengajar': 'rgba(155, 114, 207, 0.13)',
  's2ep1-penilaian':   'rgba(255, 111, 145, 0.13)',
};

let built = false;

/* ---------- Utilitas ---------- */

/**
 * Membungkus tiap kata dalam dua span bersarang. Span luar memotong
 * (overflow hidden), span dalam yang digerakkan — sehingga kata terlihat
 * naik dari balik garis, bukan sekadar memudar. Teknik yang sama dipakai
 * splitTextReveal() pada eportfolio2-animation.js.
 */
function splitWords(el) {
  if (!el || el.dataset.split === 'true') return [];
  const words = el.textContent.trim().split(/\s+/);
  el.textContent = '';
  const inner = words.map((word, i) => {
    const outer = document.createElement('span');
    outer.className = 's2ep1-word';
    const span = document.createElement('span');
    span.textContent = word;
    outer.appendChild(span);
    el.appendChild(outer);
    if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    return span;
  });
  el.dataset.split = 'true';
  return inner;
}

function highlight(id) {
  document.querySelectorAll('#s2ep1Rail a[data-rail]').forEach((link) => {
    if (link.dataset.rail === id) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}

/* ---------- Bagian-bagian gerak ---------- */

function buildHero(wrapper) {
  const hero = wrapper.querySelector('.s2ep1-hero');
  if (!hero) return;

  const title = hero.querySelector('.s2ep1-hero-title');
  const words = [];
  title.querySelectorAll('br').forEach(() => {});
  // Judul memuat <br> dan <em>; pecah tiap simpul teks secara terpisah
  // agar penggalan baris dan penekanan warnanya tetap utuh.
  title.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      const holder = document.createElement('span');
      holder.textContent = node.textContent;
      node.replaceWith(holder);
      words.push(...splitWords(holder));
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'EM') {
      words.push(...splitWords(node));
    }
  });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from(hero.querySelector('.s2ep1-eyebrow'), {
    opacity: 0, y: 14, scale: 0.94, duration: 0.5, ease: 'back.out(1.7)',
  })
    .from(words, { yPercent: 115, opacity: 0, duration: 0.75, stagger: 0.035 }, '-=0.25')
    .from(hero.querySelector('.s2ep1-hero-lead'), { opacity: 0, y: 18, duration: 0.6 }, '-=0.4')
    .from(hero.querySelectorAll('.s2ep1-hero-index li'), {
      opacity: 0, x: 26, duration: 0.5, stagger: 0.06, ease: 'back.out(1.4)',
    }, '-=0.45');

  // Parallax lembut: daftar enam butir bergerak lebih lambat dari judul.
  gsap.to(hero.querySelector('.s2ep1-hero-index'), {
    yPercent: -14,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 },
  });
}

function buildSection(section) {
  const label = section.querySelector('.s2ep1-item-label, .s2ep1-rubrik-label');
  const heading = section.querySelector('h2');
  const lead = section.querySelector(':scope .s2ep1-item-text > p, :scope .s2ep1-profil-lead');
  const points = section.querySelectorAll('.s2ep1-fokus li, .s2ep1-chips li');
  const words = splitWords(heading);

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: { trigger: section, start: 'top 78%', once: true },
    onStart: () => section.classList.add('is-in'),
  });

  if (label) {
    tl.from(label, { opacity: 0, x: -18, duration: 0.45, ease: 'back.out(1.6)' });
  }
  tl.from(words, { yPercent: 110, opacity: 0, duration: 0.6, stagger: 0.03 }, '-=0.2');
  if (lead) tl.from(lead, { opacity: 0, y: 16, duration: 0.5 }, '-=0.35');
  if (points.length) {
    tl.from(points, {
      opacity: 0, y: 14, duration: 0.45, stagger: 0.07, ease: 'back.out(1.4)',
    }, '-=0.3');
  }
}

function buildNumberParallax(wrapper) {
  wrapper.querySelectorAll('.s2ep1-item-num').forEach((num) => {
    const section = num.closest('.s2ep1-item');

    // Muncul dengan skala dan putaran halus.
    gsap.from(num, {
      opacity: 0,
      scale: 0.6,
      rotate: -8,
      duration: 0.9,
      ease: 'elastic.out(1, 0.65)',
      scrollTrigger: { trigger: section, start: 'top 80%', once: true },
    });

    // Lalu hanyut lebih lambat dari teks selama bagian dilewati.
    gsap.to(num, {
      yPercent: -34,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 0.7 },
    });
  });
}

function buildRefleksi(wrapper) {
  const cards = wrapper.querySelectorAll('.s2ep1-refleksi-card');
  if (!cards.length) return;

  gsap.from(cards, {
    opacity: 0,
    y: 30,
    scale: 0.96,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.5)',
    scrollTrigger: { trigger: '.s2ep1-refleksi', start: 'top 78%', once: true },
  });
}

function buildHover(wrapper) {
  wrapper.querySelectorAll('.s2ep1-refleksi-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -6, scale: 1.015, duration: 0.3, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, scale: 1, duration: 0.35, ease: 'power2.out' });
    });
  });

  wrapper.querySelectorAll('#s2ep1Rail a').forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { x: 4, duration: 0.25, ease: 'power2.out' });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { x: 0, duration: 0.3, ease: 'power2.out' });
    });
  });
}

/** Sapuan warna latar mengikuti bagian yang sedang dibaca. Mode penuh saja. */
function buildWash(wrapper) {
  const wash = wrapper.querySelector('.s2ep1-wash');
  if (!wash) return;

  Object.keys(WASH).forEach((id) => {
    const section = document.getElementById(id);
    if (!section) return;
    ScrollTrigger.create({
      trigger: section,
      start: 'top 60%',
      end: 'bottom 40%',
      onEnter: () => gsap.to(wash, { backgroundColor: WASH[id], duration: 0.8, ease: 'power2.out' }),
      onEnterBack: () => gsap.to(wash, { backgroundColor: WASH[id], duration: 0.8, ease: 'power2.out' }),
    });
  });
}

function buildRail(wrapper) {
  const rail = document.getElementById('s2ep1Rail');
  if (!rail) return;

  rail.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-rail]');
    if (!link) return;
    e.preventDefault();
    const target = document.getElementById(link.dataset.rail);
    if (!target) return;
    target.scrollIntoView({ behavior: REDUCED_MOTION ? 'auto' : 'smooth', block: 'start' });
    highlight(link.dataset.rail);
  });

  if (typeof IntersectionObserver !== 'function') return;

  const sections = wrapper.querySelectorAll('.s2ep1-item[id]');
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) highlight(visible[0].target.id);
    },
    { rootMargin: '-88px 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
  highlight(sections[0].id);
}

/** Tanpa GSAP atau saat pengguna meminta gerak dikurangi: tampilkan langsung. */
function revealStatic(wrapper) {
  wrapper.querySelectorAll('.s2ep1-item, .s2ep1-profil, .s2ep1-refleksi-card').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  wrapper.querySelectorAll('.s2ep1-item, .s2ep1-profil, .s2ep1-refleksi').forEach((el) => {
    el.classList.add('is-in');
  });
}

/* ---------- API ---------- */

export function initSemester2Ep1() {
  const wrapper = document.getElementById('s2ep1Wrapper');
  if (!wrapper) return;

  document.body.dataset.s2Motion = isCalm() ? 'tenang' : 'penuh';
  buildRail(wrapper);
}

/**
 * Dipanggil portfolio-chooser.js setiap kali halaman ditampilkan.
 * Timeline baru dibangun di sini, bukan saat halaman dimuat, karena
 * ScrollTrigger memerlukan wrapper yang sudah benar-benar terlihat
 * untuk menghitung posisi pemicu.
 */
export function refreshSemester2Ep1() {
  const wrapper = document.getElementById('s2ep1Wrapper');
  if (!wrapper) return;

  document.body.dataset.s2Motion = isCalm() ? 'tenang' : 'penuh';

  if (REDUCED_MOTION) {
    revealStatic(wrapper);
    return;
  }

  if (built) {
    ScrollTrigger.refresh();
    return;
  }
  built = true;

  buildHero(wrapper);

  wrapper.querySelectorAll('.s2ep1-item, .s2ep1-profil').forEach((section, i) => {
    if (PAKAI_MESIN_EP1.has(section.id)) {
      applyScrollExperienceTo(section, i);
      // Kelas ini milik CSS berkas ini, bukan milik mesin EP1. Tanpa
      // menambahkannya, garis aksen pada daftar fokus tetap scaleX(0)
      // dan bagian 01 terlihat rusak, bukan sekadar berbeda.
      ScrollTrigger.create({
        trigger: section,
        start: 'top 78%',
        once: true,
        onEnter: () => section.classList.add('is-in'),
      });
    } else {
      buildSection(section);
    }
  });

  buildNumberParallax(wrapper);
  buildRefleksi(wrapper);
  buildHover(wrapper);
  if (!isCalm()) buildWash(wrapper);

  ScrollTrigger.refresh();
}
