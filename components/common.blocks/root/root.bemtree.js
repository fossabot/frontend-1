const Cldr = require('cldrjs');

block('root').replace()( ( node, ctx ) => {
  const api = node.api = ctx.api,
        config = node.config = ctx.config,
        data = node.data = ctx.data,
        meta = data.meta || {},
        og = meta.og || {},
        bundle = data.bundle || 'nevatrip-desktop';

  if ( ctx.context ) {
    return ctx.context;
  }

  Cldr.load( require( 'cldr-data//supplemental/likelySubtags.json' ) );
  const locale = new Cldr( data.lang );

  return {
    block: 'page',
    api: api,
    config: config,
    title: data.title || node.i18n( 'site', 'name' ),
    lang: data.lang,
    favicon: '/favicon.ico',
    styles: {
      elem: 'css',
      url: '/assets/css/' + bundle + '/' + bundle + '.min.css'
    },
    scripts: {
      elem: 'js',
      url: '/assets/js/' + bundle + '/' + bundle + '.' + data.lang + '.min.js'
    },
    head: [
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { // favicons
        html: [
          '<base href="http://localhost:3000/">',
          '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">',
          '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">',
          '<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">',
          '<link rel="manifest" href="/manifest.json">',
          '<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f3203c">',
          '<meta name="theme-color" content="#f3203c">'
        ].join('')
      },

      // meta
      { elem: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: node.i18n( 'site', 'name' ) } },
      { elem: 'meta', attrs: { name: 'application-name', content: node.i18n( 'site', 'name' ) } },
      { elem: 'meta', attrs: { name: 'description', content: node.i18n( 'meta', 'description' ) } },
      { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title } },
      { elem: 'meta', attrs: { property: 'og:url', content: og.url } },
      { elem: 'meta', attrs: { property: 'og:image', content: og.image } },
      { elem: 'meta', attrs: { property: 'og:site_name', content: node.i18n( 'site', 'name' ) } },
      { elem: 'meta', attrs: { property: 'og:locale', content: data.lang + '_' + locale.attributes.territory } },
      { elem: 'meta', attrs: { property: 'og:type', content: 'website' } },

    ],
    mods: { view: data.view }
  };
});

