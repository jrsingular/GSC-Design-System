// FALLBACK token build — regenerates Style Dictionary outputs from the W3C
// DTCG token source without requiring the style-dictionary npm package.
// The canonical path is `npm run tokens` (Style Dictionary v4); use this
// script only when the npm registry is unreachable:  node scripts/build-tokens.mjs
// Reads tokens/gsc.tokens.json + tokens/programs/*.tokens.json and emits
// build/{css,scss,js,ios,android} mirrors of what `npm run tokens` produces.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Repo root = one level above this script's directory (portable, no hardcoding).
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const corpToken = JSON.parse(fs.readFileSync(path.join(root, 'tokens/gsc.tokens.json'), 'utf8'));

// Load program token files
const progDir = path.join(root, 'tokens/programs');
const progFiles = fs.readdirSync(progDir).filter(f => f.endsWith('.tokens.json'));
const progTokens = progFiles.map(f => ({
  slug: f.replace('.tokens.json', ''),
  data: JSON.parse(fs.readFileSync(path.join(progDir, f), 'utf8'))
}));

// Flatten a DTCG token tree into { path: [...], value } entries.
// DTCG lets a parent node declare $type once for all its children — inherit it.
function flatten(node, acc = [], prefix = [], inheritedType = null) {
  const nodeType = node['$type'] || inheritedType;
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith('$')) continue;
    if (v && typeof v === 'object' && '$value' in v) {
      acc.push({ path: [...prefix, k], value: v['$value'], type: v['$type'] || nodeType });
    } else if (v && typeof v === 'object') {
      flatten(v, acc, [...prefix, k], nodeType);
    }
  }
  return acc;
}

const corpFlat = flatten(corpToken);

// CSS variable name from a token path
function cssVarName(pathArr) {
  return '--' + pathArr.join('-');
}
// Resolve references like {color.ink.base}
function resolveRef(val, flat) {
  if (typeof val === 'string' && val.startsWith('{') && val.endsWith('}')) {
    const ref = val.slice(1, -1).split('.');
    const found = flat.find(t => t.path.join('.') === ref.join('.'));
    return found ? resolveRef(found.value, flat) : val;
  }
  if (Array.isArray(val)) {
    // Quote multi-word font family names (matches Style Dictionary output).
    return val.map(v => /\s/.test(v) ? `'${v}'` : v).join(', ');
  }
  return val;
}

// --- CSS ---
const cssLines = [':root {'];
for (const t of corpFlat) {
  cssLines.push(`  ${cssVarName(t.path)}: ${resolveRef(t.value, corpFlat)};`);
}
cssLines.push('}');
fs.mkdirSync(path.join(root, 'build/css'), { recursive: true });
fs.writeFileSync(path.join(root, 'build/css/gsc-tokens.css'), cssLines.join('\n') + '\n');

// Per-program CSS scopes (data-program selectors)
const progCssLines = ['/* Program token scopes — generated. Canonical CSS lives in css/programs.css */'];
for (const p of progTokens) {
  const flat = flatten(p.data);
  progCssLines.push(`[data-program="${p.slug}"] {`);
  for (const t of flat) {
    if (t.type === 'color' || t.type === 'fontFamily' || t.type === 'fontWeight') {
      progCssLines.push(`  ${cssVarName(t.path)}: ${resolveRef(t.value, flat)};`);
    }
  }
  progCssLines.push('}');
}
fs.writeFileSync(path.join(root, 'build/css/gsc-program-tokens.css'), progCssLines.join('\n') + '\n');

// --- SCSS ---
const scssLines = corpFlat.map(t => `$${t.path.join('-')}: ${resolveRef(t.value, corpFlat)};`);
fs.mkdirSync(path.join(root, 'build/scss'), { recursive: true });
fs.writeFileSync(path.join(root, 'build/scss/_gsc-tokens.scss'), scssLines.join('\n') + '\n');

// --- JS (es6) ---
const jsObj = {};
for (const t of corpFlat) jsObj[t.path.join('.')] = resolveRef(t.value, corpFlat);
const jsLines = ['// GSC Design System tokens — generated. Do not edit.', 'export const tokens = ' + JSON.stringify(jsObj, null, 2) + ';'];
fs.mkdirSync(path.join(root, 'build/js'), { recursive: true });
fs.writeFileSync(path.join(root, 'build/js/gsc-tokens.js'), jsLines.join('\n') + '\n');
fs.writeFileSync(path.join(root, 'build/js/gsc-tokens.json'), JSON.stringify(jsObj, null, 2) + '\n');

// --- iOS Swift (colors + dimens) ---
const iosColors = corpFlat.filter(t => t.type === 'color');
const iosLines = [
  '// GSC Design System tokens — generated. Do not edit.',
  'import UIKit',
  '',
  'public class GSCTokens {'
];
for (const t of iosColors) {
  const hex = String(resolveRef(t.value, corpFlat)).replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const name = t.path.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
  iosLines.push(`  public static let ${name} = UIColor(red: ${r}, green: ${g}, blue: ${b}, alpha: 1.0)`);
}
iosLines.push('}');
fs.mkdirSync(path.join(root, 'build/ios'), { recursive: true });
fs.writeFileSync(path.join(root, 'build/ios/GSCTokens.swift'), iosLines.join('\n') + '\n');

// --- Android (colors.xml + dimens.xml) ---
const androidColors = iosColors.map(t => {
  const hex = String(resolveRef(t.value, corpFlat));
  const name = 'gsc_' + t.path.join('_');
  return `  <color name="${name}">${hex}</color>`;
});
fs.mkdirSync(path.join(root, 'build/android'), { recursive: true });
fs.writeFileSync(path.join(root, 'build/android/gsc_colors.xml'), '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n' + androidColors.join('\n') + '\n</resources>\n');

const androidDimens = corpFlat.filter(t => t.type === 'dimension').map(t => {
  const name = 'gsc_' + t.path.join('_');
  return `  <dimen name="${name}">${t.value}</dimen>`;
});
fs.writeFileSync(path.join(root, 'build/android/gsc_dimens.xml'), '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n' + androidDimens.join('\n') + '\n</resources>\n');

console.log('Build regenerated:');
console.log('  build/css/gsc-tokens.css (' + cssLines.length + ' lines)');
console.log('  build/css/gsc-program-tokens.css (' + progCssLines.length + ' lines)');
console.log('  build/scss/_gsc-tokens.scss (' + scssLines.length + ' lines)');
console.log('  build/js/gsc-tokens.js + gsc-tokens.json');
console.log('  build/ios/GSCTokens.swift (' + iosColors.length + ' colors)');
console.log('  build/android/gsc_colors.xml (' + iosColors.length + ' colors) + gsc_dimens.xml');
