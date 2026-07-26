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
import { pasangDosir } from './semester2-ui.js';

/* Seluruh bagian analisis digerakkan mesin asli E-Portfolio 1
   (scroll-experience.js), bukan tiruan. Modul ini kini hanya mengurus
   hero, rel navigasi, dan micro-motion pada kartu refleksi. */

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

/** Menyorot satu butir pada rel navigasi dan melepas sorotan butir lain. */
function highlight(id) {
  document.querySelectorAll('#s2ep1Rail a[data-rail]').forEach((link) => {
    if (link.dataset.rail === id) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}

function buildHover(wrapper) {
  wrapper.querySelectorAll('.pillar-card').forEach((card) => {
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

  const sections = wrapper.querySelectorAll('.analisis.section[id]');
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
  wrapper.querySelectorAll('.analisis.section, .analisis-card, .pillar-card, .philosophy-card, .section-header').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.visibility = 'visible';
  });
  wrapper.querySelectorAll('.analisis.section, .s2ep1-refleksi').forEach((el) => {
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
  pasangDosir();

  if (REDUCED_MOTION) {
    revealStatic(wrapper);
    return;
  }

  if (built) {
    ScrollTrigger.refresh();
    return;
  }
  built = true;

  // Hero kini beranatomi EP1 (.hero-greeting, .hero-name, .hero-desc,
  // .hero-badge), yang seluruhnya sudah terdaftar di MOTION_TARGETS milik
  // scroll-experience.js — jadi ia ikut digerakkan mesin yang sama.
  //
  wrapper.querySelectorAll('.s2ep1-hero, .analisis.section, .s2ep1-refleksi').forEach((section, i) => {
    applyScrollExperienceTo(section, i);
    ScrollTrigger.create({
      trigger: section,
      start: 'top 78%',
      once: true,
      onEnter: () => section.classList.add('is-in'),
    });
  });

  buildHover(wrapper);
  if (!isCalm()) buildWash(wrapper);

  ScrollTrigger.refresh();
}
