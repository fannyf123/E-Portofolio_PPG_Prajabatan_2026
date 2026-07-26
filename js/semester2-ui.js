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

/* ---------- Mode demo berkas ----------
   Hanya berlaku selama kunjungan; data pada semester2-artefak-data.js
   tidak diubah, sehingga tidak ada tautan contoh yang ikut terkirim
   ketika portofolio dinilai. */
const BERKAS_CONTOH =
  'https://drive.google.com/file/d/13HtahKdlZsOCvZQitf-nsfdewEUgTeHT/view?usp=sharing';

function modeDemo() {
  return new URLSearchParams(window.location.search).get('demo') === 'berkas';
}

/** Tautan berkas: yang sebenarnya, atau contoh saat mode demo. */
function tautanBerkas(a) {
  if (a && a.fileUrl) return a.fileUrl;
  return modeDemo() ? BERKAS_CONTOH : '';
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

  const berkas = tautanBerkas(a);
  const pratinjau = berkas
    ? `<div class="s2ui-pratinjau">
         <div class="s2ui-pratinjau-kepala">
           <h4>Pratinjau Dokumen</h4>
           <a href="${aman(berkas)}" target="_blank" rel="noopener noreferrer">Buka di tab baru &nearr;</a>
         </div>
         ${!a.fileUrl ? '<p class="s2ui-demo-catatan">Contoh tampilan. Dokumen di bawah masih milik artefak Semester 1, dipakai sekadar memperlihatkan bentuk pratinjau.</p>' : ''}
         <iframe src="${aman(tautanSemat(berkas))}" title="Pratinjau ${aman(a.title)}" loading="lazy"></iframe>
       </div>`
    : `<div class="s2ui-belum">
         <span class="s2ui-belum-tanda"></span>
         Berkas belum diunggah. Setelah tautan Google Drive dipasang pada
         <code>fileUrl</code>, pratinjau dokumen muncul di sini dengan sendirinya.
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

/* ---------- Pembangun daftar ---------- */

function barisHtml(id) {
  const a = SEMESTER2_ARTEFAK[id];
  const ada = tautanBerkas(a);
  return `
    <div class="s2dosir-baris" data-artefak="${id}">
      <button type="button" class="s2dosir-kepala" aria-expanded="false">
        <span class="s2dosir-panah" aria-hidden="true"></span>
        <span class="s2dosir-judul">${aman(a ? a.title : id)}</span>
        <span class="s2dosir-jenis">${aman(a ? a.type : '')}</span>
        <span class="s2dosir-tanda${ada ? ' is-ada' : ''}">${ada ? 'Ada berkas' : 'Belum diunggah'}</span>
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

  SEMESTER2_KOMPONEN.forEach((k) => {
    const wadah = wrapper.querySelector(`.s2dosir[data-komponen="${k.id}"]`);
    if (wadah) wadah.innerHTML = k.artefak.map(barisHtml).join('');
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
