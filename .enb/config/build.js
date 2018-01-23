const path = require('path'),
      techs = require( path.resolve( __dirname, '..', 'config', 'techs' ) ),
      __DEV__ = process.env.NODE_ENV !== 'production';

module.exports = function( node, platform ) {
  node.addTechs([
    // essential
    [techs.bem.deps, { target: '.?.deps.js' } ],
    [techs.bem.files, { depsFile: '.?.deps.js' } ],

    // css
    [techs.postcss, {
      target: '?.css',
      oneOfSourceSuffixes: ['post.css', 'css'],
      plugins: techs.postcssPlugins
    }],

    // i18n
    [techs.keysets, { lang: '{lang}' }],
    [techs.i18n, {
      exports: { ym: true, commonJS: true },
      lang: '{lang}'
    }],

    // bemtree
    [techs.bemtreeI18N, {
      sourceSuffixes: ['bemtree', 'bemtree.js'],
      target: '?.{lang}.bemtree.js',
      lang: '{lang}'
    }],

    // templates
    [techs.bemhtml, {
      sourceSuffixes: ['bemhtml', 'bemhtml.js'],
      forceBaseTemplates: true,
      engineOptions: {
        elemJsInstances: true,
        runtimeLint: true
      },
      requires: {
        moment: {
          globals: 'moment',
          commonJS: 'moment'
        },
        moment_ru: {
          globals: 'moment/locale/ru',
          commonJS: 'moment/locale/ru'
        }
      }
    }],

    // client templates
    [techs.bem.depsByTechToBemdecl, {
      target: '.?.tmpl.bemdecl.js',
      sourceTech: 'js',
      destTech: 'bemhtml'
    }],
    [techs.bem.deps, {
      target: '.?.tmpl.deps.js',
      bemdeclFile: '.?.tmpl.bemdecl.js'
    }],
    [techs.bem.files, {
      depsFile: '.?.tmpl.deps.js',
      filesTarget: '?.tmpl.files',
      dirsTarget: '?.tmpl.dirs'
    }],
    [techs.bemhtml, {
      target: '.?.browser.bemhtml.js',
      filesTarget: '?.tmpl.files',
      sourceSuffixes: ['bemhtml', 'bemhtml.js'],
      engineOptions: {
        elemJsInstances: true
      },
      requires: {
        moment: {
          globals: 'moment',
          commonJS: 'moment'
        },
        moment_ru: {
          globals: 'moment/locale/ru',
          commonJS: 'moment/locale/ru'
        }
      }
    }],

    // js
    [techs.browserJs, {
      target: '.?.browser.js',
    }],
    [techs.fileMerge, {
      target: '.?.pre.es6.{lang}.js',
      sources: ['?.lang.{lang}.js', '.?.browser.bemhtml.js', '.?.browser.js'],
      lang: '{lang}'
    }],

    __DEV__
      ? [techs.fileCopy, { target: '?.pre.{lang}.js', source: '.?.pre.es6.{lang}.js' }]
      : [techs.babel, { target: '?.pre.{lang}.js', sourceTarget: '.?.pre.es6.{lang}.js', babelOptions: { presets: [ [ "env", { "targets": { "browsers": ["last 2 versions", "safari >= 7"] } } ] ] } }],

    [techs.prependYm, {
      source: '?.pre.{lang}.js',
      target: '?.{lang}.js'
    }],

    [techs.borschik, { minify: !__DEV__, freeze: false, source: '?.{lang}.js', target: '?.{lang}.min.js' }],
    [techs.borschik, { minify: !__DEV__, freeze: true,  source: '?.css', target: '?.min.css' }],
    [techs.borschik, { minify: !__DEV__, freeze: false, source: '?.bemhtml.js', target: '?.bemhtml.min.js' }]
  ]);
}
