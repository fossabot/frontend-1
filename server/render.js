const fs       = require('fs'),
      path     = require('path'),
      nodeEval = require('node-eval'),
      __DEV__  = process.env.NODE_ENV.toLowerCase() !== 'production',
      cacheTTL = parseInt( process.env.CACHE_TTL ),
      config   = require('dotenv').config(),
      langs    = JSON.parse( process.env.LANGS ),
      useCache = cacheTTL > 0;

let cache = {};

const render = ( req, res, data = {}, context ) => {
  if ( __DEV__ && req.query.json || req.xhr ) {
    return res.json( data );
  }

  const currentLang = data.lang || langs[ 0 ];

  const user = req.isAuthenticated() ? req.user : false,
        cacheKey = req.originalUrl + currentLang + ( context ? JSON.stringify( context ) : '' ) + ( user ? JSON.stringify( user ) : '' );

  let cached = cache[ cacheKey ];

  if ( useCache && cached && ( new Date() - cached.timestamp < cacheTTL ) && !req.query.dropCache ) {
    return res.send( cached.html );
  }

  const bemtreeCtx = {
    block: 'root',
    context: context,
    api: data.api,
    config: config.parsed,
    data: {
      lang: currentLang,
      title: data.title,
      view: data.view || 'page-' + data.page,
      meta: data.meta,
      params: req.params,
      url: req._parsedUrl,
      // csrf: req.csrfToken(),
      user: user
    }
  };

  const templates = getTemplates( data.page, data.bundle );

  let bemjson;
  try {
    bemjson = templates[ currentLang ].BEMTREE.apply( bemtreeCtx );
  } catch( err ) {
    console.error( 'BEMTREE error', err.stack );
    console.trace( 'server stack' );
    return res.sendStatus( 500 );
  }

  if ( __DEV__ && req.query.bemjson ) {
    return res.json( bemjson );
  }

  let html;
  try {
    html = templates[ currentLang ].BEMHTML.apply( bemjson );
  } catch( err ) {
    console.error( 'BEMHTML error', err.stack );
    return res.sendStatus( 500 );
  }

  useCache && ( cache[ cacheKey ] = {
    timestamp: new Date(),
    html: html
  } );

  return res.send( html );
}

function dropCache() {
  cache = {};
}

function evalFile( filename ) {
  return nodeEval( fs.readFileSync( filename, 'utf8' ), filename );
}

function getTemplates( bundleName = 'index', level = 'desktop' ) {
  const pathToBundle = path.resolve( 'bundles', level + '.bundles', bundleName );
  return langs.reduce( ( tmpls, lang ) => {
    tmpls[ lang ] = {
      BEMTREE: evalFile( path.resolve( pathToBundle, bundleName + '.' + lang + '.bemtree.js' ) ).BEMTREE,
      BEMHTML: evalFile( path.resolve( pathToBundle, bundleName + '.bemhtml.js' ) ).BEMHTML
    };
    return tmpls;
  }, {} )
}

module.exports = {
  render: render,
  dropCache: dropCache
};
