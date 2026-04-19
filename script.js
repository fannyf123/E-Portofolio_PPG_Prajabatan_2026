/* ============================================
   E-PORTFOLIO — JAVASCRIPT
   Interactions, Animations & UX
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Typed Text Effect ----------
  const typedTextEl = document.getElementById('typedText');
  const phrases = [
    'Guru Teknik Manufaktur',
    'Peserta PPG Prajabatan 2026',
    'Pendidik yang Berdedikasi',
    'Pembelajar Sepanjang Hayat'
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeEffect() {
    const current = phrases[phraseIdx];

    if (isDeleting) {
      typedTextEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      typedTextEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIdx === current.length) {
      typingSpeed = 2000; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typedTextEl) typeEffect();

  // ---------- Navbar Scroll ----------
  const navbar = document.getElementById('navbar');

  function handleNavScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ---------- Active Nav Link ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function highlightNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  // ---------- Hamburger ----------
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksEl.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinksEl.classList.remove('open');
    });
  });

  // ---------- Dark / Light Mode Toggle ----------
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  const savedTheme = localStorage.getItem('theme');

  // Apply saved preference or default to light
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      themeIcon.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    }
  });

  // ---------- Scroll Reveal ----------
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---------- Skill Bar Animation ----------
  const skillBars = document.querySelectorAll('.bar-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // ---------- Portfolio Filter ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          card.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ---------- Back to Top ----------
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- Contact Form (basic) ----------
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = contactForm.querySelector('.form-submit');
    const originalText = btn.textContent;
    btn.textContent = '✅ Pesan Terkirim!';
    btn.style.background = 'linear-gradient(135deg, #6BCB77, #2EC4B6)';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      contactForm.reset();
    }, 3000);
  });

  // ---------- Smooth anchor scrolling ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});

// Fade-in keyframe (used by filter)
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

/* ============================================
   PARTICLE ANIMATION SYSTEM
   Lightweight canvas-based floating particles
   ============================================ */
(function() {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let width, height;

  // Particle colors (matching the design palette)
  const colors = [
    { r: 255, g: 107, b: 107 }, // coral
    { r: 46,  g: 196, b: 182 }, // teal
    { r: 155, g: 114, b: 207 }, // lavender
    { r: 255, g: 179, b: 71  }, // amber
    { r: 86,  g: 204, b: 242 }, // sky
    { r: 107, g: 203, b: 119 }, // mint
    { r: 255, g: 111, b: 145 }, // rose
  ];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function getParticleCount() {
    // Fewer particles on mobile for performance
    if (width < 768) return 30;
    if (width < 1024) return 45;
    return 60;
  }

  function createParticle() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.4 - 0.15, // slight upward drift
      color: color,
      alpha: isDark ? (Math.random() * 0.12 + 0.03) : (Math.random() * 0.2 + 0.05),
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    };
  }

  function initParticles() {
    particles = [];
    const count = getParticleCount();
    for (let i = 0; i < count; i++) {
      particles.push(createParticle());
    }
  }

  function drawParticle(p) {
    // Pulsating alpha
    const pulseFactor = Math.sin(p.pulse) * 0.3 + 0.7;
    const alpha = p.alpha * pulseFactor;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
    ctx.fill();

    // Subtle glow for larger particles
    if (p.size > 2.5) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.15})`;
      ctx.fill();
    }
  }

  function drawConnections() {
    const connectionDistance = 120;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const maxAlpha = isDark ? 0.04 : 0.06;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * maxAlpha;
          const p = particles[i];
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.pulse += p.pulseSpeed;

      // Wrap around edges
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      drawParticle(p);
    });

    drawConnections();
    animationId = requestAnimationFrame(animate);
  }

  // Initialize
  resize();
  initParticles();
  animate();

  // Handle resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      initParticles();
    }, 200);
  });

  // Pause when tab not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
})();
