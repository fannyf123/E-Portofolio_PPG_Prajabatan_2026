import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const CSS_PATH = new URL('../css/semester2-ep1.css', import.meta.url);
const source = readFileSync(CSS_PATH, 'utf8');

// Komentar dibuang supaya contoh warna di dalam catatan tidak ikut terjaring.
const css = source.replace(/\/\*[\s\S]*?\*\//g, '');

test('tidak memuat warna heksadesimal mentah', () => {
  const found = css.match(/#[0-9A-Fa-f]{3,8}\b/g) ?? [];
  assert.deepEqual(
    found,
    [],
    `Warna harus lewat token base.css. Ditemukan: ${found.join(', ')}`
  );
});

test('setiap border-radius memakai token radius', () => {
  const declared = [...css.matchAll(/border-radius:\s*([^;}]+)/g)].map((m) =>
    m[1].trim()
  );
  const offenders = declared.filter(
    (value) => !/^var\(--s2-r-(sm|md|pill)\)$/.test(value)
  );
  assert.deepEqual(
    offenders,
    [],
    `border-radius hanya boleh var(--s2-r-sm|md|pill). Menyimpang: ${offenders.join(' | ')}`
  );
});

test('token lokal dipetakan dari token global', () => {
  assert.match(css, /--s2-ink:\s*var\(--gray-800\)/);
  assert.match(css, /--s2-r-sm:\s*12px/);
  assert.match(css, /--s2-r-md:\s*20px/);
  assert.match(css, /--s2-r-pill:\s*999px/);
});
