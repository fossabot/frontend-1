const fs = require('fs'),
      path = require('path'),
      app = require('express')(),
      passport = require('passport'),
      PrettyError = require('pretty-error'),
      router = require('./router'),
      staticFolder = process.env.STATIC_FOLDER,
      port = process.env.PORT,
      isSocket = isNaN(port),
      __DEV__ = process.env.NODE_ENV.toLowerCase() !== 'production',
      _next = ( req, res, next ) => next();

if ( __DEV__ ) { require('debug-http')() }

app
  .disable( 'x-powered-by' )
  .enable( 'trust proxy' )
  .use( require( 'compression' )() )
  .use( require( 'serve-favicon' )( path.join( staticFolder, 'favicon.ico' ) ) )
  .use( require( 'serve-static' )( staticFolder ) )
  .use( __DEV__ ? require('express-pino-logger')({
    extreme: true,
    level: process.env.LOG_LEVEL.toLowerCase()
  }) : _next )
  .use( require( 'cookie-parser' )() )
  .use( require( 'body-parser' ).urlencoded( { extended: true } ) )
  .use( require( 'express-session' )( {
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
  } ) )
  .use( passport.initialize() )
  .use( passport.session() )
  .use( ( req, res, next ) => {
    req.apiRequests = [];
    req.on( 'close', () => {
      req.apiRequests.map( ( request ) => {
        request.cancelSource.cancel();
        return null;
      })
    });
    next();
  })
  .use( require('csurf')() )
  .use( __DEV__ ? _next : require( 'connect-slashes' )() );

app.get( '*', async ( req, res, next ) => {
  try {
    console.time( 'Route' );
    const route = await router.resolve( {
      pathname: req.path,
      query: req.query || {},
    } );
    console.timeEnd( 'Route' );

    if ( route.redirect ) {
      res.redirect( route.status || 302, route.redirect );
      return;
    }

    res.status( route.status || 200 );
    
    return res.send( route );
    
  } catch ( error ) {
    next( error );
  }
} );

//
// Error handling
// ----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage( 'express' );

// eslint-disable-next-line no-unused-vars
app.use( ( err, req, res, next ) => {
  console.error( pe.render( err ) );
  const html = res.json( err );
  res.status( err.status || 500 );
  return res.send( html );
});

isSocket && fs.existsSync( port ) && fs.unlinkSync( port );
app.listen( port, function () {
  isSocket && fs.chmod( port, '0777' );
  console.log( 'Server is listening on', this.address().port );
} );
