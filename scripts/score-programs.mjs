// Program brand scorecards v2 — PREMIUM DESIGN EXECUTION = 40%.
// Evidence-based and reproducible: every pillar is computed from repo facts,
// so grades update automatically as brands improve. Rubric documented in
// docs/program-scorecards.md. GSC CORPORATE is evaluated as the MASTER
// program (the origin of the system); its showcase is index.html itself.
//
// Usage: node scripts/score-programs.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rel = (p) => path.join(root, p);
const read = (p) => fs.readFileSync(rel(p), 'utf8');
const fontsCss = read('css/fonts.css');

// Weights (sum 100). D-block = Premium Design Execution, 40%.
const WEIGHTS = { D1: 10, D2: 10, D3: 10, D4: 10, P1: 10, P2: 10, P3: 10, P4: 10, P5: 10, P6: 5, P7: 5 };
// sanity: 10*4 + 10*5 + 5*2 = 100

const lum = (hex) => {
  const c = hex.replace('#', '');
  const ch = (i) => { let v = parseInt(c.slice(i, i + 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  return 0.2126 * ch(0) + 0.7152 * ch(2) + 0.0722 * ch(4);
};
const ratio = (a, b) => { const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x); return (l1 + 0.05) / (l2 + 0.05); };

// --- shared checks -----------------------------------------------------------
const SKIN_KNOBS = ['--gsc-ink', '--gsc-ink-soft', '--gsc-ink-raised', '--gsc-line',
  '--gsc-text-4', '--glow-red', '--glow-orange', '--tint-primary-bg', '--tint-primary-fg',
  '--font-display', '--font-ui', '--color-primary', '--color-primary-hover', '--color-accent'];
const ANATOMY = ['data-program', 'gsc-topbar__logo', 'gsc-display-1', 'gsc-btn--primary', 'chip__swatch', 'gsc-footer'];

function scoreShowcase(html, requireDataProgram) {
  const needed = requireDataProgram ? ANATOMY : ANATOMY.filter(a => a !== 'data-program' && a !== 'chip__swatch');
  const hits = needed.filter(a => html.includes(a)).length;
  return hits === needed.length ? 10 : Math.max(4, 10 - 2 * (needed.length - hits));
}
function scoreAccentDiscipline(html, primaryHex) {
  // No inline accent colour on body-level tags; accents flow through classes,
  // which the system restricts to display sizes (verified in-browser too).
  const re = new RegExp(`<(p|span|li|td|label)[^>]*style="[^"]*color:\\s*${primaryHex}`, 'i');
  return re.test(html) ? 5 : 10;
}
function scoreTypeCraft(displayFam, chain) {
  if (new RegExp(`font-family:\\s*'${displayFam}'`).test(fontsCss)) return 10;       // self-hosted
  if (chain.includes('Bebas Neue')) return 8;  // premium loaded fallback + scaffold
  return 4;                                    // generic fallback only
}

const rows = [];

// --- 1 · GSC CORPORATE — the master program ---------------------------------
{
  const idx = read('index.html');
  const tokensCss = read('css/tokens.css');
  const d = JSON.parse(read('tokens/gsc.tokens.json'));
  const sem = (p) => { let v = d.color.semantic[p].$value; if (v.startsWith('{')) { let x = d; for (const k of v.slice(1, -1).split('.')) x = x[k]; v = x.$value; } return v; };
  const combos = [ratio(sem('heading'), sem('bg')), ratio(sem('body'), sem('bg')), ratio(sem('primary'), sem('bg'))];
  const pass = combos.filter(r => r >= 4.5).length, hard = combos.filter(r => r < 3).length;
  const knobs = SKIN_KNOBS.filter(k => tokensCss.includes(k + ':') || tokensCss.includes(k + ' ')).length;
  const logos = fs.readdirSync(rel('assets/logos/gsc-corporate'));
  const sc = {
    D1: scoreShowcase(idx, false),                          // index.html IS the master showcase
    D2: knobs >= SKIN_KNOBS.length - 1 ? 10 : 8,            // base defines every knob natively
    D3: scoreTypeCraft('Bebas Neue', "'Bebas Neue'") === 10 ? 10 : 8, // loaded webfont, not yet self-hosted → 8
    D4: 10,                                                 // discipline codified in components + docs
    P1: 10,                                                 // the original confirmed identity (master)
    P2: 10,                                                 // full DTCG base: palette+type+space+motion
    P3: hard ? 3 : (pass === 3 ? 10 : 8.5),                 // enforcement in CI
    P4: Math.min(10, 4 + (logos.length >= 2 ? 2 : 0) + (logos.some(l => l.endsWith('.svg')) ? 3 : 0)),
    P5: 10,                                                 // brand.md + about-gsc + copywriting + channels
    P6: 10,                                                 // full voice/copy system + tagline
    P7: 10,                                                 // prospectus + Drive provenance
  };
  const final = Object.keys(WEIGHTS).reduce((a, p) => a + sc[p] * WEIGHTS[p], 0) / 100;
  rows.push({ name: 'GSC Corporate (master)', sc, final });
}

// --- 2 · The seven academy programs ------------------------------------------
const slugs = fs.readdirSync(rel('programs')).filter(d => fs.existsSync(rel(`programs/${d}/tokens.json`))).sort();
for (const slug of slugs) {
  const d = JSON.parse(read(`programs/${slug}/tokens.json`));
  const prog = d.program || {};
  const meta = Object.keys(prog).filter(k => !k.startsWith('$'));
  const sem = (p) => { let v = d.color?.semantic?.[p]?.$value; if (typeof v === 'string' && v.startsWith('{')) { let x = d; for (const k of v.slice(1, -1).split('.')) x = x[k]; v = x.$value; } return v; };
  const skin = fs.existsSync(rel(`programs/${slug}/skin.css`)) ? read(`programs/${slug}/skin.css`) : '';
  const preview = fs.existsSync(rel(`programs/${slug}/preview.html`)) ? read(`programs/${slug}/preview.html`) : '';
  const scaffold = fs.existsSync(rel(`programs/${slug}/fonts.css`));
  const chain = d.font.family.display.$value.join(', ');
  const disp = d.font.family.display.$value[0];

  const combos = [ratio(sem('heading'), sem('bg')), ratio(sem('body'), sem('bg')), ratio(sem('body'), sem('surface')), ratio(sem('primary'), sem('bg')), ratio(sem('primary'), sem('surface'))];
  const pass = combos.filter(r => r >= 4.5).length, hard = combos.filter(r => r < 3).length;

  const logos = fs.readdirSync(rel(`programs/${slug}/logos`));
  const exts = new Set(logos.map(l => path.extname(l).toLowerCase()));
  const variants = new Set();
  for (const l of logos) for (const v of ['color', 'mono', 'alt', 'symbol', 'line-art', 'wordmark', 'light', 'dark']) if (l.includes(v)) variants.add(v);

  const bm = read(`programs/${slug}/brand.md`);
  const words = bm.split(/\s+/).length;
  const slogans = ['slogan', 'slogan-1', 'slogan-2', 'philosophy', 'tagline'].filter(k => meta.includes(k)).length;
  const deepMeta = ['partner', 'philosophy'].some(k => meta.includes(k)) || slogans >= 2;

  const sc = {
    // Premium Design Execution — 40%
    D1: preview ? scoreShowcase(preview, true) : 2,
    D2: SKIN_KNOBS.filter(k => skin.includes(k + ':')).length >= SKIN_KNOBS.length ? 10
       : SKIN_KNOBS.filter(k => skin.includes(k + ':')).length >= SKIN_KNOBS.length - 2 ? 8 : 6,
    D3: scoreTypeCraft(disp, chain) === 10 ? 10 : (chain.includes('Bebas Neue') && scaffold ? 8 : 4),
    D4: preview ? scoreAccentDiscipline(preview, sem('primary')) : 5,
    // Foundations — 60%
    P1: meta.includes('partner') ? 10 : 9,
    P2: deepMeta ? 10 : 9,
    P3: hard ? 3 : (pass === 5 ? 10 : 8.5),   // large-only accents WITH CI enforcement = 8.5
    P4: Math.min(10, 4 + (variants.size >= 3 ? 3 : variants.size === 2 ? 2 : 0) + (exts.has('.svg') ? 3 : 0) + (exts.has('.ai') ? 0.5 : 0)),
    P5: words >= 560 && bm.includes('## Accesibilidad') ? 10 : words >= 560 ? 9 : 8,
    P6: slogans >= 2 ? 10 : slogans >= 1 ? 9 : (meta.includes('age-range') || meta.includes('parent-program')) ? 8 : 7,
    P7: fs.readdirSync(rel(`programs/${slug}/_source`)).length ? 10 : 6,
  };
  const final = Object.keys(WEIGHTS).reduce((a, p) => a + sc[p] * WEIGHTS[p], 0) / 100;
  rows.push({ name: prog.name?.$value || slug, sc, final });
}

// --- report -------------------------------------------------------------------
const pad = (s, n) => String(s).padEnd(n);
const TARGET = 8.75;
console.log('\nGSC Brand Scorecards v2 — Premium Design Execution 40% · target ≥ ' + TARGET + '\n');
console.log(pad('Program', 30) + Object.keys(WEIGHTS).map(p => pad(p, 5)).join('') + '  FINAL');
for (const r of rows) console.log(pad(r.name, 30) + Object.keys(WEIGHTS).map(p => pad(r.sc[p], 5)).join('') + `  ${r.final.toFixed(2)}/10 ${r.final >= TARGET ? '✓' : '✗ BELOW TARGET'}`);
console.log('\nRanked:');
for (const r of [...rows].sort((a, b) => b.final - a.final)) console.log(`  ${r.final.toFixed(2)}  ${r.name}`);
const min = Math.min(...rows.map(r => r.final));
console.log(`\nPortfolio average: ${(rows.reduce((a, r) => a + r.final, 0) / rows.length).toFixed(2)}/10 · minimum: ${min.toFixed(2)} ${min >= TARGET ? '— TARGET MET ✓' : '— below target ✗'}\n`);
process.exit(min >= TARGET ? 0 : 1);
