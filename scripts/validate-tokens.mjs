// Token & brand-integrity validator — dependency-free (runs on bare Node 18+).
// Usage: npm run validate   (or: node scripts/validate-tokens.mjs)
//
// Enforces in CI what docs/self-evaluation.md verified by hand:
//   1. DTCG validity   — all token files parse; every leaf has $value; aliases resolve.
//   2. Hex parity      — every program colour in programs/*/tokens.json
//                        appears in that program's [data-program] block in
//                        programs/<slug>/skin.css (the hand-authored skin must match
//                        the canonical token source).
//   3. Contrast audit  — WCAG 2.1 ratios recomputed per program. Hard failures
//                        (< 3:1) fail the build; large-only accents (3–4.5:1)
//                        are reported, matching docs/accessibility.md.
//   4. Dist freshness  — dist bundle contains program scopes and the bundled
//                        Morganite @font-face (i.e. build.sh ran after changes).
//
// Brand values are Luisa-León-confirmed. This script never edits them — it
// only proves the copies agree and the palette stays accessible.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rel = (p) => path.join(root, p);
let errors = 0, warnings = 0;
const err = (m) => { errors++; console.error(`  ✗ ${m}`); };
const note = (m) => { warnings++; console.log(`  ⚠ ${m}`); };
const ok = (m) => console.log(`  ✓ ${m}`);

/* ---------- 1 · DTCG validity -------------------------------------------- */
console.log('\n1 · DTCG token validity');
const programSlugs = fs.readdirSync(rel('programs'))
  .filter(d => fs.existsSync(rel(`programs/${d}/tokens.json`))).sort();
const tokenFiles = [
  'tokens/gsc.tokens.json',
  ...programSlugs.map(slug => `programs/${slug}/tokens.json`)
];
const KNOWN_TYPES = new Set(['color', 'fontFamily', 'fontWeight', 'dimension', 'duration', 'string']);
const trees = {};

function walk(node, prefix, file, inheritedType, leaves) {
  const nodeType = node.$type || inheritedType;
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith('$')) continue;
    if (v && typeof v === 'object' && '$value' in v) {
      const type = v.$type || nodeType;
      if (!type) err(`${file}: ${[...prefix, k].join('.')} has no $type (own or inherited)`);
      else if (!KNOWN_TYPES.has(type)) err(`${file}: ${[...prefix, k].join('.')} unknown $type "${type}"`);
      leaves.push({ path: [...prefix, k].join('.'), value: v.$value, type });
    } else if (v && typeof v === 'object') {
      walk(v, [...prefix, k], file, nodeType, leaves);
    }
  }
  return leaves;
}

for (const file of tokenFiles) {
  try {
    const data = JSON.parse(fs.readFileSync(rel(file), 'utf8'));
    const leaves = walk(data, [], file, null, []);
    // alias resolution within the file (corporate refs resolve in corporate)
    for (const leaf of leaves) {
      if (typeof leaf.value === 'string' && leaf.value.startsWith('{')) {
        const target = leaf.value.slice(1, -1);
        if (!leaves.some(l => l.path === target)) err(`${file}: alias ${leaf.value} in ${leaf.path} does not resolve`);
      }
    }
    trees[file] = leaves;
    ok(`${file} — ${leaves.length} tokens, aliases resolve`);
  } catch (e) { err(`${file}: ${e.message}`); }
}

/* ---------- 2 · Hex parity tokens ↔ programs/<slug>/skin.css -------------- */
console.log('\n2 · Hex parity (programs/<slug>/tokens.json ↔ skin.css, corporate-inheritance-aware)');
// Programs override colour where they differ and INHERIT the corporate base
// otherwise (e.g. white text = corporate --gsc-text). A token hex is satisfied
// if it appears in the program's own skin OR is already provided by the
// corporate base (css/tokens.css). This checks the skin never omits a
// program-specific colour, without demanding it re-declare inherited neutrals.
const corporateCss = fs.readFileSync(rel('css/tokens.css'), 'utf8').toLowerCase();
for (const slug of programSlugs) {
  const skinPath = rel(`programs/${slug}/skin.css`);
  if (!fs.existsSync(skinPath)) { err(`programs/${slug}/skin.css missing`); continue; }
  const skin = fs.readFileSync(skinPath, 'utf8').toLowerCase();
  if (!skin.includes(`[data-program="${slug}"]`)) err(`programs/${slug}/skin.css: no [data-program="${slug}"] selector`);
  const hexes = [...new Set((trees[`programs/${slug}/tokens.json`] || [])
    .filter(l => l.type === 'color' && /^#/.test(String(l.value)))
    .map(l => String(l.value).toLowerCase()))];
  const missing = hexes.filter(h => !skin.includes(h) && !corporateCss.includes(h));
  if (missing.length) err(`${slug}: token hexes in neither skin.css nor corporate base → ${missing.join(', ')}`);
  else ok(`${slug} — ${hexes.length} colour values present (skin + inherited)`);
}

/* ---------- 3 · WCAG contrast audit --------------------------------------- */
console.log('\n3 · WCAG 2.1 contrast audit');
function lum(hex) {
  const c = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map(i => {
    let v = parseInt(c.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const ratio = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};
let hard = 0;
for (const slug of programSlugs) {
  const leaves = trees[`programs/${slug}/tokens.json`] || [];
  const get = (p) => {
    const l = leaves.find(x => x.path === `color.semantic.${p}`);
    if (!l) return null;
    let v = l.value;
    if (typeof v === 'string' && v.startsWith('{')) {
      const t = leaves.find(x => x.path === v.slice(1, -1));
      v = t ? t.value : null;
    }
    return v && /^#/.test(v) ? v : null;
  };
  const bg = get('bg'), surface = get('surface'), primary = get('primary'),
        heading = get('heading'), body = get('body');
  const combos = [
    ['heading on bg', heading, bg, 4.5],
    ['body on bg', body, bg, 4.5],
    ['body on surface', body, surface, 4.5],
    ['primary on bg', primary, bg, 3.0],       // accent = large-only by rule
    ['primary on surface', primary, surface, 3.0],
  ];
  for (const [label, fg, bgc, min] of combos) {
    if (!fg || !bgc) continue;
    const r = ratio(fg, bgc);
    if (r < 3.0) { hard++; err(`${slug}: ${label} = ${r.toFixed(2)}:1 — HARD FAIL (<3:1)`); }
    else if (r < 4.5 && min === 4.5) { hard++; err(`${slug}: ${label} = ${r.toFixed(2)}:1 — fails AA normal`); }
    else if (r < 4.5) note(`${slug}: ${label} = ${r.toFixed(2)}:1 — LARGE-ONLY (per docs/accessibility.md)`);
  }
}
if (hard === 0) ok('0 hard failures across all programs (matches audit)');

/* ---------- 4 · Dist freshness -------------------------------------------- */
console.log('\n4 · Dist bundle freshness');
const dist = fs.readFileSync(rel('dist/gsc-design-system.css'), 'utf8');
if (!dist.includes('[data-program="gsa"]')) err('dist missing program scopes — run: npm run css');
else ok('dist contains program scopes');
if (!dist.includes("font-family: 'Morganite'")) err('dist missing Morganite @font-face — run: npm run css');
else ok('dist contains self-hosted Morganite @font-face');

/* ---------- summary -------------------------------------------------------- */
console.log(`\n${errors ? '✗ FAILED' : '✓ PASSED'} — ${errors} error(s), ${warnings} large-only note(s)\n`);
process.exit(errors ? 1 : 0);
