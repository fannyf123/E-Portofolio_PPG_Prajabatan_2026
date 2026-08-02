import { refreshSemester2Ep1, refreshSemester2Ep2 } from './semester2-ep1.js';

import { refreshSeminarPpg } from './seminar-ppg.js';

/* ============================================

   PORTFOLIO CHOOSER SCREEN

   Show 2 portfolio options after intro loading

   ============================================ */

export function initPortfolioChooser() {

  const chooser = document.getElementById('portfolioChooser');

  const introTear = document.getElementById('introTear');

  if (!chooser) return;

  const STORAGE_KEY = 'selectedPortfolio';

  // Hanya kartu e-portfolio. Kartu pemilih semester ([data-goto-semester])

  // dan kartu "belum dibuka" tidak boleh ikut memicu selectPortfolio().

  const cards = chooser.querySelectorAll('.chooser-card[data-portfolio]');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ep2Wrapper = document.getElementById('eportfolio2Wrapper');

  const s2ep1Wrapper = document.getElementById('s2ep1Wrapper');

  const s2ep2Wrapper = document.getElementById('s2ep2Wrapper');

  const seminarWrapper = document.getElementById('seminarPpgWrapper');

  function isCardLocked(card) {

    return card?.dataset.locked === 'true' || card?.classList.contains('is-locked');

  }

  // Layar pemilih dua langkah: pilih semester, lalu pilih e-portfolio.

  const steps = chooser.querySelectorAll('.chooser-step');

  function gotoStep(name) {

    steps.forEach((step) => {

      const active = step.dataset.chooserStep === name;

      step.classList.toggle('is-active', active);

      step.hidden = !active;

    });

    if (typeof gsap !== 'undefined' && window.innerWidth > 768) {

      const active = chooser.querySelector('.chooser-step.is-active');

      if (active) {

        gsap.fromTo(

          active.querySelectorAll('.chooser-title, .chooser-subtitle, .chooser-card, .chooser-step-back'),

          { opacity: 0, y: 10 },

          { opacity: 1, y: 0, duration: 0.3, stagger: 0.04, ease: 'power2.out' }

        );

      }

    }

  }

  function initChooserSteps() {

    if (!steps.length) return;

    chooser.querySelectorAll('[data-goto-semester]').forEach((card) => {

      card.addEventListener('click', () => gotoStep(card.dataset.gotoSemester));

    });

    chooser.querySelectorAll('[data-chooser-back]').forEach((btn) => {

      btn.addEventListener('click', () => gotoStep('semester'));

    });

  }

  initChooserSteps();

  // ---------- Mode pratinjau (?preview=1) ----------

  // Membuka paksa kartu Semester 2 yang terkunci di RUNTIME saja, agar

  // pemilik dapat melihat isinya sebelum dinilai. Markup asli (data-locked,

  // aria-disabled, class is-locked) TIDAK diubah, sehingga portofolio tetap

  // terkunci bagi pengunjung biasa dan test markup tetap berlaku.

  const previewMode = new URLSearchParams(window.location.search).get('preview') === '1';

  if (previewMode) {

    const previewLabels = { s2ep1: 'Lihat E-Portfolio 1 →', s2ep2: 'Lihat E-Portfolio 2 →' };

    cards.forEach((card) => {

      if (!isCardLocked(card)) return;

      const num = card.dataset.portfolio;

      if (!previewLabels[num]) return; // hanya kartu yang sudah ada isinya

      card.dataset.locked = 'false';

      card.removeAttribute('aria-disabled');

      card.classList.remove('is-locked');

      const badge = card.querySelector('.chooser-card-badge');

      const cta = card.querySelector('.chooser-card-cta');

      const lock = card.querySelector('.chooser-card-lock');

      if (badge) badge.textContent = 'PRATINJAU';

      if (lock) lock.remove();

      if (cta) cta.textContent = previewLabels[num];

    });

  }

  function showChooser() {

    gotoStep('semester');

    chooser.classList.add('active');

    chooser.setAttribute('aria-hidden', 'false');

    chooser.style.opacity = '1';

    chooser.style.display = 'flex';

    chooser.style.visibility = 'visible';

    document.body.style.overflow = 'hidden';

    document.body.style.height = '100vh';

    document.body.style.position = 'fixed';

    document.body.style.width = '100%';

    document.body.style.top = '0';

    document.body.classList.add('chooser-active');

    setTimeout(() => {

      if (chooser.classList.contains('active')) {

        chooser.style.display = 'flex';

        chooser.style.opacity = '1';

        chooser.style.visibility = 'visible';

        document.body.style.overflow = 'hidden';

        document.body.style.position = 'fixed';

      }

    }, 300);

    if (typeof gsap !== 'undefined' && window.innerWidth > 768) {

      gsap.from('.chooser-content > *', {

        opacity: 0, y: 12, duration: 0.25, stagger: 0.03, ease: 'power2.out', delay: 0

      });

    }

  }

  function hideChooser() {

    chooser.classList.remove('active');

    chooser.setAttribute('aria-hidden', 'true');

    chooser.style.display = 'none';

    chooser.style.visibility = 'hidden';

    document.body.style.overflow = '';

    document.body.style.height = '';

    document.body.style.position = '';

    document.body.style.width = '';

    document.body.style.top = '';

    document.body.classList.remove('chooser-active');

  }

  function showEP2() {

    if (!ep2Wrapper) return;

    // Hide all E-Portfolio 1 sections

    document.querySelectorAll('body > section, body > footer, .floating-shapes, .scroll-progress, #navbar, .back-to-top, .scroll-rail').forEach(el => {

      el.style.display = 'none';

    });

    if (s2ep1Wrapper) s2ep1Wrapper.style.display = 'none';

    if (s2ep2Wrapper) s2ep2Wrapper.style.display = 'none';

    // Show E-Portfolio 2

    ep2Wrapper.style.display = 'block';

    document.body.style.overflow = '';

    document.body.style.position = '';

    window.scrollTo({ top: 0, behavior: 'auto' });

    // Trigger reveal animations + refresh GSAP ScrollTrigger

    setTimeout(() => {

      ep2Wrapper.querySelectorAll('.reveal').forEach(el => {

        el.classList.add('visible');

      });

      if (typeof window.refreshEp2Animation === 'function') {

        window.refreshEp2Animation();

      }

    }, 0);

  }

  function hideEP2() {

    if (!ep2Wrapper) return;

    ep2Wrapper.style.display = 'none';

    // Restore E-Portfolio 1 sections

    document.querySelectorAll('body > section, body > footer, .floating-shapes, .scroll-progress, #navbar, .back-to-top, .scroll-rail').forEach(el => {

      el.style.display = '';

    });

    window.scrollTo({ top: 0, behavior: 'auto' });

  }

  // Halaman Semester 2 memakai ulang navbar, footer, bilah kemajuan, dan

  // tombol kembali-ke-atas milik E-Portfolio 1 — bukan salinannya. Dengan

  // begitu penukar tema, Performance Mode, dan tombol home bekerja tanpa

  // ID ganda. Hanya daftar tautannya yang ditukar.

  const HIDEABLE = 'body > section, .floating-shapes, .scroll-rail';

  const S2_LINKS = [

    ['#s2ep1-hero', 'Beranda'],

    ['#s2ep1-rancangan', 'Rancangan'],

    ['#s2ep1-materi', 'Materi'],

    ['#s2ep1-media', 'Media'],

    ['#s2ep1-video', 'Video'],

    ['#s2ep1-nonmengajar', 'Nonmengajar'],

    ['#s2ep1-penilaian', 'Penilaian'],

    ['#s2ep1-produk', 'Produk'],

    ['#s2ep1-refleksi', 'Refleksi'],

  ];

  const S2EP2_LINKS = [

    ['#s2ep2-hero', 'Beranda'],

    ['#s2ep2-produk', 'Rancangan'],

    ['#s2ep2-video', 'Video'],

    ['#s2ep2-refleksi', 'Refleksi'],

  ];

  const navLinks = document.getElementById('navLinks');

  const footerEp1 = document.querySelector('body > footer');

  const footerSitemap = footerEp1 ? footerEp1.querySelector('.footer-sitemap ul') : null;

  // Simpul asli disimpan sebagai elemen, bukan sebagai string HTML.

  // js/main.js menangkap `.nav-links a` sebagai NodeList statis saat halaman

  // dimuat dan mengikat pendengar klik langsung pada tiap <a>. Memulihkan

  // daftar lewat innerHTML akan membuat simpul baru, sehingga penyorotan

  // tautan aktif dan penutupan menu ponsel di E-Portfolio 1 berhenti bekerja

  // setelah pengunjung sempat membuka halaman Semester 2.

  let navAsli = null;

  let footerAsli = null;

  // Footer E-Portfolio 1 berada di DOM sebelum wrapper Semester 2, sehingga

  // bila hanya dibiarkan tampil ia muncul di atas isi halaman. Penanda ini

  // merekam posisi aslinya agar footer dapat dipindahkan ke akhir wrapper

  // saat halaman Semester 2 dibuka, lalu dikembalikan persis ke tempatnya.

  let penandaFooter = null;

  function pindahkanFooterKeSemester2() {

    if (!footerEp1 || !s2ep1Wrapper) return;

    if (!penandaFooter) {

      penandaFooter = document.createComment('posisi-asli-footer-ep1');

      footerEp1.parentNode.insertBefore(penandaFooter, footerEp1);

    }

    s2ep1Wrapper.appendChild(footerEp1);

  }

  function kembalikanFooter() {

    if (!footerEp1 || !penandaFooter || !penandaFooter.parentNode) return;

    penandaFooter.parentNode.insertBefore(footerEp1, penandaFooter);

  }

  /** Membuat simpul <li> baru untuk daftar tautan Semester 2. */

  function simpulTautan(list, aktifPertama) {

    return list.map(([href, label], i) => {

      const li = document.createElement('li');

      const a = document.createElement('a');

      a.href = href;

      a.textContent = label;

      if (i === 0 && aktifPertama) a.className = 'active';

      li.appendChild(a);

      return li;

    });

  }

  function pakaiTautanSemester2(links) {

    const daftar = links || S2_LINKS;

    if (navLinks) {

      if (navAsli === null) navAsli = [...navLinks.children];

      navLinks.replaceChildren(...simpulTautan(daftar, true));

    }

    if (footerSitemap) {

      if (footerAsli === null) footerAsli = [...footerSitemap.children];

      footerSitemap.replaceChildren(...simpulTautan(daftar, false));

    }

  }

  function pulihkanTautan() {

    // Simpul yang sama dipasang kembali, jadi pendengar klik yang terikat

    // padanya sejak halaman dimuat tetap hidup.

    if (navLinks && navAsli) navLinks.replaceChildren(...navAsli);

    if (footerSitemap && footerAsli) footerSitemap.replaceChildren(...footerAsli);

  }

  function showS2Ep1() {

    if (!s2ep1Wrapper) return;

    document.querySelectorAll(HIDEABLE).forEach((el) => { el.style.display = 'none'; });

    if (ep2Wrapper) ep2Wrapper.style.display = 'none';

    if (s2ep2Wrapper) s2ep2Wrapper.style.display = 'none';

    document.querySelectorAll('.s2ep2-rail').forEach(el => el.style.display = 'none');

    pakaiTautanSemester2();

    pindahkanFooterKeSemester2();

    s2ep1Wrapper.style.display = 'block';

    document.body.style.overflow = '';

    document.body.style.position = '';

    window.scrollTo({ top: 0, behavior: 'auto' });

    setTimeout(() => refreshSemester2Ep1(), 0);

  }

  function hideS2Ep1() {

    if (!s2ep1Wrapper) return;

    s2ep1Wrapper.style.display = 'none';

    kembalikanFooter();

    pulihkanTautan();

    document.querySelectorAll(HIDEABLE).forEach((el) => { el.style.display = ''; });

    document.querySelectorAll('.s2ep1-rail, .s2ep2-rail').forEach(el => el.style.display = 'none');

    window.scrollTo({ top: 0, behavior: 'auto' });

  }

  function showS2Ep2() {

    if (!s2ep2Wrapper) return;

    document.querySelectorAll(HIDEABLE).forEach((el) => { el.style.display = 'none'; });

    if (ep2Wrapper) ep2Wrapper.style.display = 'none';

    if (s2ep1Wrapper) s2ep1Wrapper.style.display = 'none';
    document.querySelectorAll('.s2ep1-rail').forEach(el => el.style.display = 'none');

    pakaiTautanSemester2(S2EP2_LINKS);

    pindahkanFooterKeSemester2();

    s2ep2Wrapper.style.display = 'block';

    document.body.style.overflow = '';

    document.body.style.position = '';

    window.scrollTo({ top: 0, behavior: 'auto' });

    setTimeout(() => refreshSemester2Ep2(), 0);

  }

  function hideS2Ep2() {

    if (!s2ep2Wrapper) return;

    s2ep2Wrapper.style.display = 'none';

    kembalikanFooter();

    pulihkanTautan();

    document.querySelectorAll(HIDEABLE).forEach((el) => { el.style.display = ''; });

    document.querySelectorAll('.s2ep1-rail, .s2ep2-rail').forEach(el => el.style.display = 'none');

    window.scrollTo({ top: 0, behavior: 'auto' });

  }

  const SEMINAR_HIDEABLE = 'body > section, body > footer, .floating-shapes, .scroll-rail, .s2ep1-rail, .s2ep2-rail, #navbar, .scroll-progress, .back-to-top';

  function showSeminar() {

    if (!seminarWrapper) return;

    document.body.dataset.portfolio = 'seminar';

    document.querySelectorAll(SEMINAR_HIDEABLE).forEach((el) => { el.style.display = 'none'; });

    if (ep2Wrapper) ep2Wrapper.style.display = 'none';

    if (s2ep1Wrapper) s2ep1Wrapper.style.display = 'none';

    if (s2ep2Wrapper) s2ep2Wrapper.style.display = 'none';

    seminarWrapper.style.display = 'block';

    document.body.style.overflow = '';

    document.body.style.height = '';

    document.body.style.position = '';

    document.body.style.width = '';

    document.body.style.top = '';

    history.replaceState(null, '', '#seminar-ppg');

    window.scrollTo({ top: 0, behavior: 'auto' });

    setTimeout(() => refreshSeminarPpg(), 0);

  }

  function hideSeminar() {

    if (!seminarWrapper) return;

    seminarWrapper.style.display = 'none';

    document.querySelectorAll(SEMINAR_HIDEABLE).forEach((el) => { el.style.display = ''; });

    document.querySelectorAll('.s2ep1-rail, .s2ep2-rail').forEach(el => el.style.display = 'none');

    history.replaceState(null, '', window.location.pathname + window.location.search);

    window.scrollTo({ top: 0, behavior: 'auto' });

  }

  function selectPortfolio(num) {

    document.body.setAttribute('data-portfolio', num);

    hideChooser();

    if (num === '2') showEP2();

    else if (num === 's2ep1') showS2Ep1();

    else if (num === 's2ep2') showS2Ep2();

    else if (num === 'seminar') showSeminar();

  }

  cards.forEach(card => {

    card.addEventListener('click', (e) => {

      if (isCardLocked(card)) {

        e.preventDefault();

        e.stopPropagation();

        card.classList.remove('shake');

        void card.offsetWidth;

        card.classList.add('shake');

        return;

      }

      const num = card.getAttribute('data-portfolio');

      selectPortfolio(num);

    });

  });

  // Tombol home dan penukar portofolio di footer -> kembali ke pemilih.

  // Keduanya kini dipakai bersama oleh E-Portfolio 1 dan halaman Semester 2,

  // jadi halaman Semester 2 harus ditutup lebih dahulu bila sedang terbuka —

  // tanpa ini, wrappernya tetap tampak di balik layar pemilih dan daftar

  // tautan navbar tidak pernah dipulihkan.

  var ep1BackTriggers = document.querySelectorAll('#homeBtn, #ep1FooterBack');

  ep1BackTriggers.forEach(btn => {

    btn.addEventListener('click', (e) => {

      e.preventDefault();

      if (s2ep1Wrapper && s2ep1Wrapper.style.display === 'block') hideS2Ep1();

      if (s2ep2Wrapper && s2ep2Wrapper.style.display === 'block') hideS2Ep2();

      window.scrollTo({ top: 0, behavior: 'auto' });

      showChooser();

    });

  });

  // EP2 back buttons

  if (ep2Wrapper) {

    var backBtns = ep2Wrapper.querySelectorAll('#ep2BackBtn, #ep2BackChooser, #ep2FooterBack');

    backBtns.forEach(btn => {

      btn.addEventListener('click', (e) => {

        e.preventDefault();

        hideEP2();

        showChooser();

      });

    });

  }

  if (seminarWrapper) {

    const seminarBack = document.getElementById('seminarBackBtn');

    seminarBack?.addEventListener('click', (event) => {

      event.preventDefault();

      hideSeminar();

      showChooser();

    });

    const seminarThemeToggle = document.getElementById('seminarThemeToggle');

    const themeRoot = document.documentElement;

    const syncThemeIcons = () => {

      const isDark = themeRoot.getAttribute('data-theme') === 'dark';

      document.querySelectorAll('#themeToggle .theme-icon, #ep2ThemeToggle .theme-icon, #seminarThemeToggle .theme-icon')

        .forEach((icon) => { icon.textContent = isDark ? '☀️' : '🌙'; });

    };

    syncThemeIcons();

    seminarThemeToggle?.addEventListener('click', () => {

      const nextTheme = themeRoot.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

      themeRoot.setAttribute('data-theme', nextTheme);

      localStorage.setItem('theme', nextTheme);

      syncThemeIcons();

    });

    new MutationObserver(syncThemeIcons).observe(themeRoot, {

      attributes: true,

      attributeFilter: ['data-theme'],

    });

  }

  // Menu ponsel: main.js mengikat penutup menu pada tiap <a> milik

  // E-Portfolio 1 saat halaman dimuat. Tautan Semester 2 dibuat belakangan

  // oleh pakaiTautanSemester2(), jadi tanpa delegasi ini menu hamburger

  // tidak menutup ketika tautan Semester 2 diklik.

  if (navLinks) {

    navLinks.addEventListener('click', (e) => {

      if (!e.target.closest('a')) return;

      document.getElementById('hamburger')?.classList.remove('active');

      navLinks.classList.remove('open');

    });

  }

  function introAnimationCompleted() {

    if (!introTear) return true;

    if (window.location.hash) return document.body.classList.contains('intro-opened');

    if (prefersReducedMotion) return document.body.classList.contains('intro-opened');

    return introTear.classList.contains('is-opening') && introTear.classList.contains('is-complete');

  }

  function tryShowChooser() {

    if (introAnimationCompleted()) {

      handleInitialHash() || showChooser();

    } else {

      const observer = new MutationObserver(() => {

        if (introAnimationCompleted()) {

          observer.disconnect();

          handleInitialHash() || showChooser();

        }

      });

      observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

      if (introTear) {

        observer.observe(introTear, { attributes: true, attributeFilter: ['class'] });

      }

    }

  }

  function handleInitialHash() {

    const hash = window.location.hash;

    if (!hash || hash.length < 2) return false;

    const ep2Card = chooser.querySelector('.chooser-card[data-portfolio="2"]');

    const s2ep1Card = chooser.querySelector('.chooser-card[data-portfolio="s2ep1"]');

    const s2ep2Card = chooser.querySelector('.chooser-card[data-portfolio="s2ep2"]');

    const ep2Locked = isCardLocked(ep2Card);

    const s2ep1Locked = isCardLocked(s2ep1Card);

    const s2ep2Locked = isCardLocked(s2ep2Card);

    const isEp2Hash = hash.startsWith('#ep2-');

    const isS2Hash = hash.startsWith('#s2ep1-');

    const isS2Ep2Hash = hash.startsWith('#s2ep2-');

    const isSeminarHash = hash === '#seminar-ppg';

    // Deep link ke kartu terkunci diabaikan agar selector tidak bisa dilewati.

    if ((isEp2Hash && ep2Locked) || (isS2Hash && s2ep1Locked) || (isS2Ep2Hash && s2ep2Locked)) {

      history.replaceState(null, '', window.location.pathname + window.location.search);

      return false;

    }

    if (!isEp2Hash && !isS2Hash && !isS2Ep2Hash && !isSeminarHash) return false;

    hideChooser();

    if (isEp2Hash) showEP2();

    else if (isS2Hash) showS2Ep1();

    else if (isS2Ep2Hash) showS2Ep2();

    else if (isSeminarHash) showSeminar();

    setTimeout(() => {

      const target = document.querySelector(hash);

      if (target && typeof target.scrollIntoView === 'function') {

        target.scrollIntoView({ behavior: 'auto', block: 'start' });

      }

    }, 60);

    return isEp2Hash || isS2Hash || isS2Ep2Hash || isSeminarHash;

  }

  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', tryShowChooser);

  } else {

    tryShowChooser();

  }

}