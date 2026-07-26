/* ============================================
   SEMESTER 2 — SUSUNAN DOSIR ARSIP

   Tiap komponen menampilkan berkasnya sebagai baris ringkas. Baris yang
   diklik membuka analisis dan pratinjau dokumen di tempat, tanpa modal
   dan tanpa berpindah halaman.

   Daftar baris dibangun dari js/semester2-artefak-data.js, bukan ditulis
   di index.html, supaya judul dan urutan berkas hanya perlu diubah di
   satu tempat.

     ?demo=berkas   memperlihatkan tampilan setelah dokumen benar-benar
                    diunggah, memakai satu berkas nyata sebagai contoh
   ============================================ */

import { SEMESTER2_ARTEFAK, SEMESTER2_KOMPONEN } from './semester2-artefak-data.js';

/* Praktik mengajar mandiri berjalan dalam empat siklus, sehingga tiap
   artefak memiliki empat berkas — satu per siklus. */
const SIKLUS = [1, 2, 3, 4];

/* ---------- Mode demo berkas ----------
   ?demo=berkas mengisi keempat siklus dengan berkas nyata dari artefak
   Semester 1 supaya bentuk akhirnya dapat dilihat sebelum dokumen yang
   sesungguhnya diunggah. Hanya berlaku selama kunjungan; data pada
   semester2-artefak-data.js tidak diubah, sehingga tidak ada tautan contoh
   yang ikut terkirim ketika portofolio dinilai. */
const BERKAS_CONTOH = [
  'https://drive.google.com/file/d/13HtahKdlZsOCvZQitf-nsfdewEUgTeHT/view?usp=sharing',
  'https://drive.google.com/file/d/17Dta9nZyABe3j9t8P9DnovuKzn75m45l/view?usp=sharing',
  'https://drive.google.com/file/d/1SJhusFCTSfJd1659mWUAMIJrQBfO3nmM/view?usp=sharing',
  'https://drive.google.com/file/d/1mcGkRJtcLVytwnXn7z2mykJoX9hgZZ9R/view?usp=sharing',
];

function modeDemo() {
  return new URLSearchParams(window.location.search).get('demo') === 'berkas';
}

/**
 * Tautan berkas satu siklus. Diambil dari `siklus` pada data artefak bila
 * sudah diisi; kalau belum, dari contoh saat mode demo.
 */
function tautanSiklus(a, n) {
  const punya = a && Array.isArray(a.siklus) ? a.siklus[n - 1] : '';
  if (punya) return punya;
  return modeDemo() ? BERKAS_CONTOH[(n - 1) % BERKAS_CONTOH.length] : '';
}

/** Berapa siklus yang berkasnya sudah tersedia. */
function jumlahSiklusTerisi(a) {
  return SIKLUS.filter((n) => tautanSiklus(a, n)).length;
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
 * artefak E-Portfolio 1 — konteks, tujuan, kelebihan dan kekurangan,
 * kajian teori, lalu pratinjau dokumen.
 */
function analisisHtml(id) {
  const a = SEMESTER2_ARTEFAK[id];
  if (!a) return '<p class="s2ui-kosong">Analisis belum tersedia.</p>';

  const pros = a.pros.map((t) => `<li class="s2ui-plus">${aman(t)}</li>`).join('');
  const cons = a.cons.map((t) => `<li class="s2ui-minus">${aman(t)}</li>`).join('');

  const adaContoh = modeDemo() && !(Array.isArray(a.siklus) && a.siklus.some(Boolean));

  const kartu = SIKLUS.map((n) => {
    const url = tautanSiklus(a, n);
    return url
      ? `<button type="button" class="s2siklus-kartu is-ada"
                 data-berkas="${aman(url)}"
                 data-judul="${aman(a.title)} — Siklus ${n}">
           <span class="s2siklus-nomor">Siklus ${n}</span>
           <span class="s2siklus-ikon" aria-hidden="true"><i class="fa-regular fa-file-lines"></i></span>
           <span class="s2siklus-aksi">Lihat berkas</span>
         </button>`
      : `<div class="s2siklus-kartu" aria-disabled="true">
           <span class="s2siklus-nomor">Siklus ${n}</span>
           <span class="s2siklus-ikon" aria-hidden="true"><i class="fa-regular fa-file-lines"></i></span>
           <span class="s2siklus-aksi">Belum diunggah</span>
         </div>`;
  }).join('');

  const pratinjau = `
    <div class="s2siklus">
      <h4>Berkas per Siklus</h4>
      ${adaContoh ? '<p class="s2ui-demo-catatan">Contoh tampilan. Keempat berkas di bawah masih milik artefak Semester 1, dipakai sekadar memperlihatkan bentuk akhirnya.</p>' : ''}
      <div class="s2siklus-grid">${kartu}</div>
    </div>`;

  return `
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

/* ---------- Modal pratinjau berkas ----------
   Memakai ulang cangkang modal E-Portfolio 1 (#modalOverlay dan
   #modalContent). Tombol tutup, klik latar, dan tombol Escape sudah
   terpasang di js/artefak.js sejak halaman dimuat, jadi hanya bagian
   membuka yang perlu ditambahkan di sini. */

/**
 * Mengunci gulir halaman selama modal terbuka.
 *
 * Menyetel overflow pada <body> saja tidak cukup di halaman ini: agar rel
 * navigasi tetap menempel, body memakai overflow-x: clip, dan itu
 * memindahkan kontainer gulir ke <html>. Body yang terkunci pun tetap
 * membiarkan halaman bergulir di belakang modal.
 *
 * Pengamat ini mengikuti kelas .active pada overlay, bukan memasang
 * pendengar tutup sendiri, sehingga kuncinya terlepas siapa pun yang
 * menutup modal — tombol silang, klik latar, maupun tombol Escape yang
 * ketiganya dipasang js/artefak.js. Berlaku juga untuk modal artefak
 * E-Portfolio 1 yang memakai cangkang yang sama.
 */
function pasangKunciGulirModal() {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay || overlay.dataset.kunciGulir === 'true') return;
  overlay.dataset.kunciGulir = 'true';

  const html = document.documentElement;
  new MutationObserver(() => {
    html.classList.toggle('is-modal-terkunci', overlay.classList.contains('active'));
  }).observe(overlay, { attributes: true, attributeFilter: ['class'] });
}

function bukaModalBerkas(judul, url) {
  const overlay = document.getElementById('modalOverlay');
  const isi = document.getElementById('modalContent');
  if (!overlay || !isi) {
    window.open(url, '_blank', 'noopener');
    return;
  }

  isi.innerHTML = `
    <div class="modal-header s2siklus-modal-kepala">
      <div>
        <h3>${aman(judul)}</h3>
        <p>Pratinjau dokumen</p>
      </div>
      <a href="${aman(url)}" target="_blank" rel="noopener noreferrer" class="s2siklus-modal-tautan">
        Buka di tab baru &nearr;
      </a>
    </div>
    <div class="modal-body s2siklus-modal-isi">
      <iframe src="${aman(tautanSemat(url))}" title="Pratinjau ${aman(judul)}" loading="lazy"></iframe>
    </div>`;

  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

/* ---------- Pembangun daftar ---------- */

function barisHtml(id) {
  const a = SEMESTER2_ARTEFAK[id];
  const terisi = jumlahSiklusTerisi(a);
  return `
    <div class="s2dosir-baris" data-artefak="${id}">
      <button type="button" class="s2dosir-kepala" aria-expanded="false">
        <span class="s2dosir-panah" aria-hidden="true"></span>
        <span class="s2dosir-judul">${aman(a ? a.title : id)}</span>
        <span class="s2dosir-jenis">${aman(a ? a.type : '')}</span>
        <span class="s2dosir-tanda${terisi ? ' is-ada' : ''}">${terisi} dari ${SIKLUS.length} siklus</span>
      </button>
      <div class="s2dosir-isi" hidden></div>
    </div>`;
}

/**
 * Dipanggil setelah halaman Semester 2 ditampilkan. Analisis baru dirender
 * ketika barisnya benar-benar dibuka, sehingga dua puluh empat iframe
 * pratinjau tidak dimuat sekaligus saat halaman dibuka.
 */
export function pasangDosir() {
  const wrapper = document.getElementById('s2ep1Wrapper');
  if (!wrapper || wrapper.dataset.dosirSiap === 'true') return;
  wrapper.dataset.dosirSiap = 'true';

  pasangKunciGulirModal();

  SEMESTER2_KOMPONEN.forEach((k) => {
    const wadah = wrapper.querySelector(`.s2dosir[data-komponen="${k.id}"]`);
    if (wadah) wadah.innerHTML = k.artefak.map(barisHtml).join('');
  });

  wrapper.addEventListener('click', (e) => {
    const kartu = e.target.closest('.s2siklus-kartu.is-ada');
    if (kartu) {
      bukaModalBerkas(kartu.dataset.judul, kartu.dataset.berkas);
      return;
    }

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
