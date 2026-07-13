// Program brand scorecards — reproducible, evidence-based grading (see
// docs/program-scorecards.md for the rubric). Every pillar is computed from
// real repo facts, so grades update automatically as brands improve (bundle a
// font, add an SVG, write a slogan → the score rises).
//
// Usage: node scripts/score-programs.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rel = (p) => path.join(root, p);
const fontsCss = fs.readFileSync(rel('css/fonts.css'), 'utf8');

const WEIGHTS = { P1: 15, P2: 15, P3: 15, P4: 15, P5: 15, P6: 10, P7: 10, P8: 5 };

// --- WCAG relative luminance / contrast ---
const lum = (hex) => {
  const c = hex.replace('#', '');
  const ch = (i) => { let v = parseInt(c.slice(i, i + 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  return 0.2126 * ch(0) + 0.7152 * ch(2) + 0.0722 * ch(4);
};
const ratio = (a, b) => { const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x); return (l1 + 0.05) / (l2 + 0.05); };

const slugs = fs.readdirSync(rel('programs')).filter(d => fs.existsSync(rel(`programs/${d}/tokens.json`))).sort();
const rows = [];

for (const slug of slugs) {
  const d = JSON.parse(fs.readFileSync(rel(`programs/${slug}/tokens.json`), 'utf8'));
  const prog = d.program || {};
  const meta = Object.keys(prog).filter(k => !k.startsWith('$'));
  const sem = (p) => {
    let v = d.color?.semantic?.[p]?.$value;
    if (typeof v === 'string' && v.startsWith('{')) { let x = d; for (const k of v.slice(1, -1).split('.')) x = x[k]; v = x.$value; }
    return v;
  };
  const disp = d.font.family.display.$value[0];
  const logos = fs.readdirSync(rel(`programs/${slug}/logos`));
  const exts = new Set(logos.map(l => path.extname(l).toLowerCase()));
  const variants = new Set();
  for (const l of logos) for (const v of ['color', 'mono', 'alt', 'symbol', 'line-art', 'wordmark', 'light', 'dark']) if (l.includes(v)) variants.add(v);
  const bm = fs.readFileSync(rel(`programs/${slug}/brand.md`), 'utf8');
  const words = bm.split(/\s+/).length;
  const hasSource = fs.readdirSync(rel(`programs/${slug}/_source`)).length > 0;

  // P1 Brand Fidelity: confirmed baseline 9; +1 if palette locked to a licensed partner.
  const P1 = meta.includes('partner') ? 10 : 9;
  // P2 Token Architecture: valid+complete 8; +1 for rich metadata (partner/philosophy/slogan/parent).
  const rich = ['partner', 'philosophy', 'slogan', 'slogan-1', 'parent-program'].some(k => meta.includes(k));
  const P2 = rich ? 9 : 8;
  // P3 Accessibility: 5 combos; 5/5 pass AA-normal → 10; else (0 hard fails) → 8.
  const combos = [ratio(sem('heading'), sem('bg')), ratio(sem('body'), sem('bg')), ratio(sem('body'), sem('surface')), ratio(sem('primary'), sem('bg')), ratio(sem('primary'), sem('surface'))];
  const pass = combos.filter(r => r >= 4.5).length, hard = combos.filter(r => r < 3).length;
  const P3 = hard ? 3 : (pass === 5 ? 10 : 8);
  // P4 Typography Delivery: display font self-hosted in css/fonts.css → 10; else 5 (fallback-only).
  const bundled = new RegExp(`font-family:\\s*'${disp}'`).test(fontsCss);
  const P4 = bundled ? 10 : 5;
  // P5 Asset Completeness: variants + web vector. base 4; +{0,2,3} for 1/2/3+ variants; +3 SVG; +0.5 .ai master.
  const vBonus = variants.size >= 3 ? 3 : variants.size === 2 ? 2 : 0;
  const P5 = Math.min(10, 4 + vBonus + (exts.has('.svg') ? 3 : 0) + (exts.has('.ai') ? 0.5 : 0));
  // P6 Documentation: thorough sheet 8; +1 if >=560 words.
  const P6 = words >= 560 ? 9 : 8;
  // P7 Voice & Content: base 7; +2 if a slogan/philosophy; +1 more if two slogans; +1 if distinct child register.
  const slogans = ['slogan', 'slogan-1', 'slogan-2', 'philosophy'].filter(k => meta.includes(k)).length;
  let P7 = 7 + (slogans >= 1 ? 2 : 0) + (slogans >= 2 ? 1 : 0);
  if (slogans === 0 && (meta.includes('age-range') || meta.includes('parent-program'))) P7 += 1;
  // P8 Provenance & Governance: source doc + named owner (Luisa León, repo-wide) → 10.
  const P8 = hasSource ? 10 : 6;

  const sc = { P1, P2, P3, P4, P5, P6, P7, P8 };
  const final = Object.keys(WEIGHTS).reduce((a, p) => a + sc[p] * WEIGHTS[p], 0) / 100;
  rows.push({ name: prog.name?.$value || slug, sc, final });
}

// --- report ---
const pad = (s, n) => String(s).padEnd(n);
console.log('\nGSC Program Brand Scorecards — rubric in docs/program-scorecards.md\n');
console.log(pad('Program', 30) + Object.keys(WEIGHTS).map(p => pad(p, 5)).join('') + '  FINAL');
for (const r of rows) console.log(pad(r.name, 30) + Object.keys(WEIGHTS).map(p => pad(r.sc[p], 5)).join('') + `  ${r.final.toFixed(1)}/10`);
console.log('\nRanked:');
for (const r of [...rows].sort((a, b) => b.final - a.final)) console.log(`  ${r.final.toFixed(1)}  ${r.name}`);
console.log(`\nPortfolio average: ${(rows.reduce((a, r) => a + r.final, 0) / rows.length).toFixed(1)}/10\n`);
