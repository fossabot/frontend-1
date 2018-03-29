const fs        = require('fs'),
      path      = require('path'),
      mkdirp    = require('mkdirp'),
      techs     = require('./config/techs'),
      getLevels = require('./config/levels').getLevels,
      SETS      = require('./config/levels').SETS,
      langs     = JSON.parse( process.env.LANGS ),
      __DEV__   = process.env.NODE_ENV !== 'production';

module.exports = ( config ) => {
  config.setLanguages( langs );

  let levels;
  const platforms = Object.keys( SETS );
  platforms.forEach( function( platform ) {
    [ 'css', 'js' ].forEach( catalog => {
      pathToStatic = path.resolve( 'static', 'assets', catalog, platform );
      fs.existsSync( pathToStatic ) || mkdirp( pathToStatic );
    } );

    levels = getLevels( platform );
    !__DEV__ || levels.push( { path: path.join( 'components', 'development.blocks' ), check: true } );
  } );

  // Сборка бандлов по декларациям
  config.nodes( 'bundles/*', ( nodeConfig ) => {
    nodeConfig.addTechs([
      [techs.bem.levels, { levels: levels }],
      [techs.fileProvider, { target: '?.bemdecl.js' }],
      [techs.bem.deps, { target: '.?.deps.js' } ],
      [techs.bem.files, { depsFile: '.?.deps.js' } ],
      [techs.keysets, { lang: '{lang}' }],
      [techs.i18n, {
        exports: { ym: true, commonJS: true },
        lang: '{lang}'
      }],
    ]);
  });

  platforms.forEach( function( platform ) {
    config.nodes( 'bundles/*', ( nodeConfig ) => {
      nodeConfig.addTechs([
        // bemtree
        [techs.bemtreeI18N, {
          sourceSuffixes: ['bemtree', 'bemtree.js'],
          target: '?.' + platform + '.{lang}.bemtree.js',
          lang: '{lang}'
        }],

        // templates
        [techs.bemhtml, {
          sourceSuffixes: ['bemhtml', 'bemhtml.js'],
          target: '?.' + platform + '.{lang}.bemhtml.js',
          forceBaseTemplates: true,
          engineOptions: {
            elemJsInstances: true,
            runtimeLint: true,
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
          },
        }]
      ]);

      nodeConfig.addTargets([
        '?.' + platform + '.{lang}.bemtree.js',
        '?.' + platform + '.{lang}.bemhtml.js'
      ]);
    } );
    
    config.node( 'dist/' + platform, function( nodeConfig ) {
      nodeConfig.addTechs([
        [techs.bem.levels, { levels: levels }],
        [techs.bem.levelsToBemdecl ],

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
          target: '?.' + platform + '.{lang}.bemtree.js',
          lang: '{lang}'
        }],

        // templates
        [techs.bemhtml, {
          sourceSuffixes: ['bemhtml', 'bemhtml.js'],
          target: '?.' + platform + '.bemhtml.js',
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
        [techs.borschik, { minify: !__DEV__, freeze: false, source: '?.bemhtml.js', target: '?.bemhtml.min.js' }],

        [techs.fileCopy, { source: '?.{lang}.min.js', target: '../../static/assets/js/' + platform + '/?.{lang}.min.js' }],
        [techs.fileCopy, { source: '?.min.css', target: '../../static/assets/css/' + platform + '/?.min.css' }]
      ]);

      nodeConfig.addTargets([
        '../../static/assets/css/' + platform + '/?.min.css',
        '../../static/assets/js/' + platform + '/?.{lang}.min.js'
      ]);
    } );

  } );


};
