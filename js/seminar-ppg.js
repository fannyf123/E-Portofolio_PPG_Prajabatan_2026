import { seminarDecks } from './seminar-ppg-data.js';

const meetingPlan = [
  'Identifikasi Diri',
  'Filosofi Pendidikan dan Pendidikan Nilai',
  'Pemahaman Peserta Didik dan Pembelajaran',
  'Pembelajaran Mendalam dan Asesmen',
  'PPL Terbimbing',
  'Pola Pikir Bertumbuh',
  'Inovasi Berbasis Ajaran Tamansiswa',
  'Refleksi Mata Kuliah Semester II',
  'Refleksi Mata Kuliah Semester II',
  'Refleksi Mata Kuliah Semester II',
  'Refleksi Mata Kuliah Semester II',
  'Refleksi Mata Kuliah Semester II',
  'Refleksi Program PPG',
  'Penyusunan Karya Inovasi',
  'Penyempurnaan Karya Inovasi',
  'Seminar PPG',
];

let initialized = false;
let currentDeckIndex = 0;
let currentSlideIndex = 0;
let touchStartX = null;

function twoDigits(value) {
  return String(value).padStart(2, '0');
}

function activeDeck() {
  return seminarDecks[currentDeckIndex];
}

function playerElements() {
  return {
    wrapper: document.getElementById('seminarPpgWrapper'),
    meetings: document.getElementById('seminarMeetings'),
    title: document.getElementById('seminarDeckTitle'),
    subtitle: document.getElementById('seminarDeckSubtitle'),
    meetingLabel: document.getElementById('seminarMeetingLabel'),
    stageShell: document.getElementById('seminarStageShell'),
    stage: document.getElementById('seminarStage'),
    image: document.getElementById('seminarSlideImage'),
    loading: document.getElementById('seminarLoading'),
    loadingLabel: document.getElementById('seminarLoadingLabel'),
    hotspots: document.getElementById('seminarHotspots'),
    thumbnails: document.getElementById('seminarThumbnails'),
    playerHint: document.getElementById('seminarPlayerHint'),
    current: document.getElementById('seminarCurrentSlide'),
    total: document.getElementById('seminarTotalSlides'),
    progress: document.getElementById('seminarProgressBar'),
    previous: document.getElementById('seminarPrev'),
    next: document.getElementById('seminarNext'),
    fullscreen: document.getElementById('seminarFullscreen'),
  };
}

function isVisible(wrapper) {
  return wrapper && getComputedStyle(wrapper).display !== 'none';
}

function buildMeetingLibrary(elements) {
  elements.meetings.replaceChildren();

  meetingPlan.forEach((title, index) => {
    const meeting = index + 1;
    const deckIndex = seminarDecks.findIndex((deck) => deck.meeting === meeting);
    const available = deckIndex >= 0;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'seminar-meeting';
    button.disabled = !available;
    button.dataset.meeting = String(meeting);
    button.innerHTML = `
      <span class="seminar-meeting-number">${twoDigits(meeting)}</span>
      <span class="seminar-meeting-copy">
        <strong>${title}</strong>
        <small>${available ? 'Presentasi interaktif' : 'Segera ditambahkan'}</small>
      </span>
      <span class="seminar-meeting-state" aria-hidden="true"></span>
    `;

    if (available) {
        button.addEventListener('click', () => {
          currentDeckIndex = deckIndex;
          currentSlideIndex = 0;
          renderDeck(elements);
          scrollPresentationIntoView(elements);
        });
    }

    elements.meetings.appendChild(button);
  });
}

function buildThumbnails(elements) {
  const deck = activeDeck();
  elements.thumbnails.replaceChildren();

  deck.slides.forEach((slide, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'seminar-thumb';
    button.setAttribute('aria-label', `Buka slide ${slide.number}`);
    button.innerHTML = `
      <img src="${slide.src}" alt="" width="320" height="180" loading="lazy" />
      <span>${twoDigits(slide.number)}</span>
    `;
    button.addEventListener('click', () => showSlide(index, elements));
    elements.thumbnails.appendChild(button);
  });
}

function renderHotspots(slide, elements) {
  elements.hotspots.replaceChildren();

  slide.hotspots.forEach((hotspot) => {
    const control = hotspot.href ? document.createElement('a') : document.createElement('button');
    control.className = 'seminar-hotspot';
    control.setAttribute('aria-label', hotspot.label || 'Hotspot presentasi');
    control.title = hotspot.label || 'Hotspot presentasi';
    control.style.left = `${hotspot.x}%`;
    control.style.top = `${hotspot.y}%`;
    control.style.width = `${hotspot.width}%`;
    control.style.height = `${hotspot.height}%`;

    if (hotspot.href) {
      control.href = hotspot.href;
      control.target = '_blank';
      control.rel = 'noopener noreferrer';
    } else {
      control.type = 'button';
      control.addEventListener('click', () => showSlide(hotspot.targetSlide - 1, elements));
    }

    elements.hotspots.appendChild(control);
  });
}

function setSlideLoading(elements, loading, message = 'Memuat slide...') {
  const error = message !== 'Memuat slide...';
  elements.stage.classList.toggle('is-loading', loading);
  elements.stage.classList.toggle('is-error', error);
  elements.stage.setAttribute('aria-busy', String(loading));
  elements.loading?.setAttribute('aria-hidden', String(!loading && !error));
  if (elements.loadingLabel) elements.loadingLabel.textContent = message;
}

function preloadAdjacentSlides(deck, index) {
  [index - 1, index + 1].forEach((candidate) => {
    if (!deck.slides[candidate]) return;
    const image = new Image();
    image.src = deck.slides[candidate].src;
  });
}

function showSlide(index, elements = playerElements()) {
  const deck = activeDeck();
  const boundedIndex = Math.max(0, Math.min(deck.slides.length - 1, index));
  const slide = deck.slides[boundedIndex];
  currentSlideIndex = boundedIndex;

  elements.stage.classList.remove('is-changing');
  void elements.stage.offsetWidth;
  elements.stage.classList.add('is-changing');
  setSlideLoading(elements, true);
  elements.image.src = slide.src;
  elements.image.alt = slide.alt;
  elements.current.textContent = twoDigits(slide.number);
  elements.total.textContent = twoDigits(deck.slides.length);
  elements.progress.style.width = `${((boundedIndex + 1) / deck.slides.length) * 100}%`;
  elements.previous.disabled = boundedIndex === 0;
  elements.next.disabled = boundedIndex === deck.slides.length - 1;

  renderHotspots(slide, elements);

  elements.thumbnails.querySelectorAll('.seminar-thumb').forEach((thumbnail, thumbnailIndex) => {
    const active = thumbnailIndex === boundedIndex;
    thumbnail.classList.toggle('is-active', active);
    thumbnail.setAttribute('aria-current', active ? 'true' : 'false');
    if (active) thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });

  if (elements.image.currentSrc === slide.src && elements.image.complete && elements.image.naturalWidth > 0) {
    setSlideLoading(elements, false);
  }

  preloadAdjacentSlides(deck, boundedIndex);
}

function renderDeck(elements) {
  const deck = activeDeck();
  elements.title.textContent = deck.title;
  elements.subtitle.textContent = deck.subtitle;
  elements.meetingLabel.textContent = `Pertemuan ${twoDigits(deck.meeting)}`;
  elements.meetings.querySelectorAll('.seminar-meeting').forEach((button) => {
    const active = Number(button.dataset.meeting) === deck.meeting;
    button.classList.toggle('is-active', active);
  });
  buildThumbnails(elements);
  showSlide(currentSlideIndex, elements);
}

function scrollPresentationIntoView(elements) {
  if (!elements.stageShell || !elements.playerHint) return;

  requestAnimationFrame(() => {
    const stageRect = elements.stageShell.getBoundingClientRect();
    const hintRect = elements.playerHint.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const contentHeight = Math.max(0, hintRect.bottom - stageRect.top);
    const targetTop = contentHeight <= viewportHeight - 32
      ? stageRect.top - Math.max(16, (viewportHeight - contentHeight) / 2)
      : hintRect.bottom - (viewportHeight - 24);

    window.scrollBy({ top: targetTop, behavior: 'smooth' });
  });
}

async function toggleFullscreen(elements) {
  if (elements.stageShell.classList.contains('is-pseudo-fullscreen')) {
    elements.stageShell.classList.remove('is-pseudo-fullscreen');
  } else if (document.fullscreenElement) {
    await document.exitFullscreen?.();
  } else {
    try {
      await elements.stageShell.requestFullscreen?.();
      if (!document.fullscreenElement) {
        elements.stageShell.classList.add('is-pseudo-fullscreen');
      }
    } catch (_) {
      elements.stageShell.classList.add('is-pseudo-fullscreen');
    }
  }
  updateFullscreenLabel(elements);
}

function updateFullscreenLabel(elements) {
  const active = document.fullscreenElement === elements.stageShell ||
    elements.stageShell.classList.contains('is-pseudo-fullscreen');
  elements.fullscreen.setAttribute(
    'aria-label',
    active ? 'Keluar dari layar penuh' : 'Tampilkan presentasi layar penuh'
  );
  const label = elements.fullscreen.querySelector('span');
  if (label) label.textContent = active ? 'Keluar' : 'Layar penuh';
  const icon = elements.fullscreen.querySelector('i');
  if (icon) icon.className = active ? 'fa-solid fa-compress' : 'fa-solid fa-expand';
}

export function initSeminarPpg() {
  if (initialized) return;
  const elements = playerElements();
  if (!elements.wrapper || !seminarDecks.length) return;
  initialized = true;

  elements.image.addEventListener('load', () => setSlideLoading(elements, false));
  elements.image.addEventListener('error', () => {
    setSlideLoading(elements, false, 'Slide tidak dapat dimuat');
  });

  buildMeetingLibrary(elements);
  renderDeck(elements);

  elements.previous.addEventListener('click', () => showSlide(currentSlideIndex - 1, elements));
  elements.next.addEventListener('click', () => showSlide(currentSlideIndex + 1, elements));
  elements.fullscreen.addEventListener('click', () => toggleFullscreen(elements));
  document.addEventListener('fullscreenchange', () => updateFullscreenLabel(elements));

  elements.stage.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0]?.clientX ?? null;
  }, { passive: true });

  elements.stage.addEventListener('touchend', (event) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const distance = touchEndX - touchStartX;
    touchStartX = null;
    if (Math.abs(distance) < 48) return;
    showSlide(currentSlideIndex + (distance < 0 ? 1 : -1), elements);
  }, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (!isVisible(elements.wrapper)) return;
    if (event.key === 'ArrowRight' || event.key === 'PageDown') {
      event.preventDefault();
      showSlide(currentSlideIndex + 1, elements);
    } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault();
      showSlide(currentSlideIndex - 1, elements);
    } else if (event.key === 'Home') {
      event.preventDefault();
      showSlide(0, elements);
    } else if (event.key === 'End') {
      event.preventDefault();
      showSlide(activeDeck().slides.length - 1, elements);
    } else if (event.key.toLowerCase() === 'f') {
      event.preventDefault();
      toggleFullscreen(elements);
    } else if (event.key === 'Escape' && elements.stageShell.classList.contains('is-pseudo-fullscreen')) {
      event.preventDefault();
      elements.stageShell.classList.remove('is-pseudo-fullscreen');
      updateFullscreenLabel(elements);
    }
  });
}

export function refreshSeminarPpg() {
  initSeminarPpg();
  const elements = playerElements();
  if (!elements.wrapper) return;
  renderDeck(elements);
  elements.stage.focus({ preventScroll: true });
}
