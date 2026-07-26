/* ============================================
   SEMESTER 2 — E-PORTFOLIO 1
   Rel navigasi dan reveal saat menggulir.
   Modul ini tidak mengetahui layar pemilih.
   ============================================ */

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function highlight(id) {
  document.querySelectorAll('#s2ep1Rail a[data-rail]').forEach((link) => {
    if (link.dataset.rail === id) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}

/**
 * Dipanggil sekali oleh main.js saat halaman dimuat.
 * Memasang pendengar klik pada rel dan penyorotan otomatis.
 */
export function initSemester2Ep1() {
  const wrapper = document.getElementById('s2ep1Wrapper');
  const rail = document.getElementById('s2ep1Rail');
  if (!wrapper || !rail) return;

  rail.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-rail]');
    if (!link) return;
    e.preventDefault();
    const target = document.getElementById(link.dataset.rail);
    if (!target) return;
    target.scrollIntoView({
      behavior: REDUCED_MOTION ? 'auto' : 'smooth',
      block: 'start',
    });
    highlight(link.dataset.rail);
  });

  // Bila IntersectionObserver tidak tersedia, rel tetap dapat diklik —
  // hanya penyorotan otomatis yang mati.
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

/**
 * Dipanggil portfolio-chooser.js setiap kali halaman Semester 2 ditampilkan.
 * Menjalankan reveal dan menyegarkan ScrollTrigger agar posisi pemicu
 * dihitung ulang setelah wrapper benar-benar terlihat.
 */
export function refreshSemester2Ep1() {
  const wrapper = document.getElementById('s2ep1Wrapper');
  if (!wrapper) return;

  const revealables = wrapper.querySelectorAll(
    '.s2ep1-item, .s2ep1-profil, .s2ep1-refleksi-card'
  );
  if (!revealables.length) return;

  if (REDUCED_MOTION || typeof window.gsap === 'undefined') {
    revealables.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  revealables.forEach((el) => {
    window.gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    );
  });

  if (window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') {
    window.ScrollTrigger.refresh();
  }
}
