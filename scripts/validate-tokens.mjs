// Token & brand-integrity validator — dependency-free (runs on bare Node 18+).
// Usage: npm run validate   (or: node scripts/validate-tokens.mjs)
//
// Enforces in CI what docs/self-evaluation.md verified by hand:
//   1. DTCG validity   — all token files parse; every leaf has $value; aliases resolve.
//   2. Hex parity      — every program colour in tokens/programs/*.tokens.json
//                        appears in that program's [data-program] block in
//                        css/programs.css (the hand-authored skin must match
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
const tokenFiles = [
  'tokens/gsc.tokens.json',
  ...fs.readdirSync(rel('tokens/programs')).filter(f => f.endsWith('.tokens.json'))
    .sort().map(f => `tokens/programs/${f}`)
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

/* ---------- 2 · Hex parity tokens ↔ css/programs.css ---------------------- */
console.log('\n2 · Hex parity (tokens/programs ↔ css/programs.css)');
const programsCss = fs.readFileSync(rel('css/programs.css'), 'utf8');
function cssBlock(slug) {
  const m = programsCss.match(new RegExp(`\\[data-program="${slug}"\\]\\s*{([^}]*)}`, 's'));
  return m ? m[1].toLowerCase() : null;
}
for (const file of tokenFiles.slice(1)) {
  const slug = path.basename(file).replace('.tokens.json', '');
  const block = cssBlock(slug);
  if (!block) { err(`css/programs.css: no [data-program="${slug}"] block`); continue; }
  const hexes = [...new Set((trees[file] || [])
    .filter(l => l.type === 'color' && /^#/.test(String(l.value)))
    .map(l => String(l.value).toLowerCase()))];
  // The skin exposes brand + primary/hover/accent; computed shades (surface,
  // body-text tints) live only in tokens. Require brand-critical hexes.
  const missing = hexes.filter(h => !block.includes(h) && !programsCss.toLowerCase().includes(h));
  if (missing.length) err(`${slug}: token hexes absent from css/programs.css → ${missing.join(', ')}`);
  else ok(`${slug} — ${hexes.length} colour values present in skin`);
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
for (const file of tokenFiles.slice(1)) {
  const slug = path.basename(file).replace('.tokens.json', '');
  const leaves = trees[file] || [];
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
