/* ============================================
   SEMESTER 2 — VARIAN NUANSA UI
   Tiga susunan halaman yang dapat dibandingkan langsung:

     ?ui=meja     berkas di kiri, pratinjau + analisis di panel kanan
     ?ui=langkah  satu komponen per layar, maju-mundur 01 sampai 06
     ?ui=dosir    baris ringkas per berkas, membuka analisis di tempat
     bawaan       gulir panjang, kartu 2x2, analisis lewat modal

   Ketiganya memakai isi, warna, tipografi, dan mesin gerak yang sama.
   Yang berbeda hanya susunan dan cara berpindah antar bagian.

   Markup bawaan tidak pernah dihapus, hanya disembunyikan lewat CSS,
   sehingga berpindah varian cukup dengan mengubah alamat.
   ============================================ */

import { SEMESTER2_ARTEFAK, SEMESTER2_KOMPONEN } from './semester2-artefak-data.js';

const VARIAN = ['meja', 'langkah', 'dosir'];

export function varianUi() {
  const pilihan = new URLSearchParams(window.location.search).get('ui');
  return VARIAN.includes(pilihan) ? pilihan : null;
}

/* ---------- Utilitas ---------- */

function aman(teks) {
  return String(teks == null ? '' : teks)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Mengubah tautan berbagi Google Drive menjadi tautan yang dapat disemat. */
function tautanSemat(url) {
  if (!url) return '';
  const m = url.match(/\/file\/d\/([^/]+)/);
  return m ? `https://drive.google.com/file/d/${m[1]}/preview` : url;
}

/**
 * Merender satu analisis artefak. Susunannya sengaja sama dengan modal
 * milik E-Portfolio 1 — konteks, tujuan, kelebihan dan kekurangan, kajian
 * teori, lalu pratinjau dokumen — agar pembaca menemukan urutan yang sama
 * di varian mana pun.
 */
export function analisisHtml(id) {
  const a = SEMESTER2_ARTEFAK[id];
  if (!a) return '<p class="s2ui-kosong">Analisis belum tersedia.</p>';

  const pros = a.pros.map((t) => `<li class="s2ui-plus">${aman(t)}</li>`).join('');
  const cons = a.cons.map((t) => `<li class="s2ui-minus">${aman(t)}</li>`).join('');

  const pratinjau = a.fileUrl
    ? `<div class="s2ui-pratinjau">
         <div class="s2ui-pratinjau-kepala">
           <h4>Pratinjau Dokumen</h4>
           <a href="${aman(a.fileUrl)}" target="_blank" rel="noopener noreferrer">Buka di tab baru &nearr;</a>
         </div>
         <iframe src="${aman(tautanSemat(a.fileUrl))}" title="Pratinjau ${aman(a.title)}" loading="lazy"></iframe>
       </div>`
    : `<div class="s2ui-belum">
         <span class="s2ui-belum-tanda"></span>
         Berkas belum diunggah. Setelah tautan Google Drive dipasang pada
         <code>fileUrl</code>, pratinjau dokumen muncul di sini dengan sendirinya.
       </div>`;

  return `
    <header class="s2ui-kepala">
      <h3>${aman(a.title)}</h3>
      <p class="s2ui-jenis">${aman(a.type)}</p>
    </header>
    <div class="s2ui-isi">
      <h4>Konteks Pembuatan</h4>
      <p>${aman(a.context)}</p>
      <h4>Tujuan</h4>
      <p>${aman(a.purpose)}</p>
      <h4>Kelebihan &amp; Kekurangan</h4>
      <ul class="s2ui-nilai">${pros}${cons}</ul>
      <h4>Kajian Teori</h4>
      <p class="s2ui-teori">${aman(a.theory)}</p>
      ${pratinjau}
    </div>`;
}

/* ---------- Varian A: meja kerja ---------- */

function bangunMeja(wrapper) {
  if (wrapper.querySelector('.s2meja')) return;

  const daftar = SEMESTER2_KOMPONEN.map((k) => `
      <div class="s2meja-grup">
        <div class="s2meja-grup-judul"><span>${k.nomor}</span> ${aman(k.nama)}</div>
        <ul>
          ${k.artefak.map((id) => `
            <li><button type="button" class="s2meja-item" data-artefak="${id}">
              ${aman(SEMESTER2_ARTEFAK[id] ? SEMESTER2_ARTEFAK[id].title : id)}
            </button></li>`).join('')}
        </ul>
      </div>`).join('');

  const meja = document.createElement('div');
  meja.className = 's2meja';
  meja.innerHTML = `
    <div class="s2ep1-container s2meja-grid">
      <aside class="s2meja-daftar" aria-label="Daftar berkas Semester 2">${daftar}</aside>
      <section class="s2meja-panel" id="s2mejaPanel" aria-live="polite"></section>
    </div>`;

  const acuan = wrapper.querySelector('.analisis.section');
  wrapper.insertBefore(meja, acuan);

  const panel = meja.querySelector('#s2mejaPanel');
  const tombol = meja.querySelectorAll('.s2meja-item');

  function pilih(id) {
    panel.innerHTML = analisisHtml(id);
    tombol.forEach((b) => b.setAttribute('aria-current', String(b.dataset.artefak === id)));
    panel.scrollTop = 0;
  }

  meja.addEventListener('click', (e) => {
    const b = e.target.closest('.s2meja-item');
    if (b) pilih(b.dataset.artefak);
  });

  pilih(SEMESTER2_KOMPONEN[0].artefak[0]);
}

/* ---------- Varian B: langkah 01 sampai 06 ---------- */

function bangunLangkah(wrapper) {
  if (wrapper.querySelector('.s2langkah-bar')) return;

  const bagian = [...wrapper.querySelectorAll('.analisis.section')];
  if (!bagian.length) return;

  const bar = document.createElement('div');
  bar.className = 's2langkah-bar';
  bar.innerHTML = `
    <div class="s2ep1-container s2langkah-bar-inner">
      <ol class="s2langkah-titik">
        ${SEMESTER2_KOMPONEN.map((k, i) => `
          <li><button type="button" data-langkah="${i}" aria-label="Langkah ${k.nomor} ${aman(k.nama)}">
            <span>${k.nomor}</span></button></li>`).join('')}
      </ol>
      <span class="s2langkah-label" id="s2langkahLabel"></span>
    </div>`;
  wrapper.insertBefore(bar, bagian[0]);

  const nav = document.createElement('div');
  nav.className = 's2langkah-nav';
  nav.innerHTML = `
    <div class="s2ep1-container s2langkah-nav-inner">
      <button type="button" class="s2langkah-tombol" data-arah="-1">&larr; <span></span></button>
      <button type="button" class="s2langkah-tombol s2langkah-tombol--maju" data-arah="1"><span></span> &rarr;</button>
    </div>`;
  bagian[bagian.length - 1].after(nav);

  let aktif = 0;
  const label = bar.querySelector('#s2langkahLabel');
  const mundur = nav.querySelector('[data-arah="-1"]');
  const maju = nav.querySelector('[data-arah="1"]');

  function tampilkan(i) {
    aktif = Math.max(0, Math.min(bagian.length - 1, i));
    bagian.forEach((s, n) => s.classList.toggle('is-langkah-aktif', n === aktif));
    bar.querySelectorAll('[data-langkah]').forEach((b, n) => {
      b.setAttribute('aria-current', String(n === aktif));
      b.parentElement.classList.toggle('is-lewat', n < aktif);
    });

    const k = SEMESTER2_KOMPONEN[aktif];
    label.textContent = `Langkah ${aktif + 1} dari ${bagian.length} · ${k.nama}`;

    mundur.hidden = aktif === 0;
    maju.hidden = aktif === bagian.length - 1;
    if (!mundur.hidden) mundur.querySelector('span').textContent = SEMESTER2_KOMPONEN[aktif - 1].nama;
    if (!maju.hidden) maju.querySelector('span').textContent = SEMESTER2_KOMPONEN[aktif + 1].nama;

    bar.scrollIntoView({ block: 'start', behavior: 'auto' });
  }

  bar.addEventListener('click', (e) => {
    const b = e.target.closest('[data-langkah]');
    if (b) tampilkan(Number(b.dataset.langkah));
  });
  nav.addEventListener('click', (e) => {
    const b = e.target.closest('[data-arah]');
    if (b) tampilkan(aktif + Number(b.dataset.arah));
  });

  // Rel navigasi berpindah langkah, bukan menggulir.
  document.querySelectorAll('#s2ep1Rail a[data-rail]').forEach((a, i) => {
    a.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); tampilkan(i); }, true);
  });

  tampilkan(0);
}

/* ---------- Varian C: dosir arsip ---------- */

function bangunDosir(wrapper) {
  if (wrapper.querySelector('.s2dosir')) return;

  SEMESTER2_KOMPONEN.forEach((k) => {
    const bagian = document.getElementById(k.id);
    if (!bagian) return;

    const dosir = document.createElement('div');
    dosir.className = 's2dosir';
    dosir.innerHTML = k.artefak.map((id) => {
      const a = SEMESTER2_ARTEFAK[id];
      return `
        <div class="s2dosir-baris" data-artefak="${id}">
          <button type="button" class="s2dosir-kepala" aria-expanded="false">
            <span class="s2dosir-panah" aria-hidden="true"></span>
            <span class="s2dosir-judul">${aman(a ? a.title : id)}</span>
            <span class="s2dosir-jenis">${aman(a ? a.type : '')}</span>
            <span class="s2dosir-tanda">${a && a.fileUrl ? 'Ada berkas' : 'Belum diunggah'}</span>
          </button>
          <div class="s2dosir-isi" hidden></div>
        </div>`;
    }).join('');

    const grid = bagian.querySelector('.s2ep1-artefak-grid');
    if (grid) grid.after(dosir);
  });

  wrapper.addEventListener('click', (e) => {
    const kepala = e.target.closest('.s2dosir-kepala');
    if (!kepala) return;
    const baris = kepala.closest('.s2dosir-baris');
    const isi = baris.querySelector('.s2dosir-isi');
    const buka = kepala.getAttribute('aria-expanded') === 'true';

    if (!buka && !isi.dataset.terisi) {
      isi.innerHTML = analisisHtml(baris.dataset.artefak);
      isi.dataset.terisi = 'true';
    }
    kepala.setAttribute('aria-expanded', String(!buka));
    isi.hidden = buka;
    baris.classList.toggle('is-buka', !buka);
  });
}

/* ---------- API ---------- */

/**
 * Dipanggil setelah halaman Semester 2 ditampilkan. Varian dibangun sekali;
 * markup bawaan tetap utuh di DOM dan hanya disembunyikan lewat CSS.
 */
export function pasangVarianUi() {
  const wrapper = document.getElementById('s2ep1Wrapper');
  if (!wrapper) return;

  const v = varianUi();
  if (!v) { delete document.body.dataset.s2Ui; return; }
  document.body.dataset.s2Ui = v;

  if (v === 'meja') bangunMeja(wrapper);
  else if (v === 'langkah') bangunLangkah(wrapper);
  else if (v === 'dosir') bangunDosir(wrapper);
}
