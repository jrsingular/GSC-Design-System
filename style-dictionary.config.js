/**
 * Style Dictionary v4 config — compiles the W3C DTCG token source
 * (tokens/gsc.tokens.json) into platform-specific outputs.
 *
 *   npm install
 *   npm run tokens        # → build/{css,scss,ios,android,js}
 *
 * The hand-authored css/tokens.css remains the canonical, richly-commented CSS
 * for the web system. These generated files give native platforms (iOS,
 * Android) and JS/Figma pipelines identical token values — real cross-platform
 * parity for the mobile guidance in docs/mobile.md.
 */
export default {
  source: ['tokens/gsc.tokens.json'],
  // DTCG 2025.10 stable format
  log: { verbosity: 'default' },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [{ destination: 'gsc-tokens.css', format: 'css/variables', options: { outputReferences: true } }]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/scss/',
      files: [{ destination: '_gsc-tokens.scss', format: 'scss/variables' }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      files: [
        { destination: 'gsc-tokens.js', format: 'javascript/es6' },
        { destination: 'gsc-tokens.json', format: 'json/flat' }
      ]
    },
    ios: {
      transformGroup: 'ios-swift',
      buildPath: 'build/ios/',
      files: [{ destination: 'GSCTokens.swift', format: 'ios-swift/class.swift', options: { className: 'GSCTokens' } }]
    },
    android: {
      transformGroup: 'android',
      buildPath: 'build/android/',
      files: [
        { destination: 'gsc_colors.xml', format: 'android/colors' },
        { destination: 'gsc_dimens.xml', format: 'android/dimens' }
      ]
    }
  }
};
