const fs = require( 'fs' ),
  path = require( 'path' ),
  app = require( 'express' )(),
  passport = require( 'passport' ),
  expressSession = require( 'express-session' ),
  // MemcachedStore = require( 'connect-memcached' )( expressSession ),
  LocalStrategy = require( 'passport-local' ).Strategy,
  PrettyError = require( 'pretty-error' ),
  router = require( './router' ),
  render = require( './render' ).render,
  Request = require( './queries/_request' ),
  staticFolder = process.env.STATIC_FOLDER,
  port = process.env.PORT,
  isSocket = isNaN( port ),
  __DEV__ = process.env.NODE_ENV.toLowerCase() !== 'production',
  _next = ( req, res, next ) => next();

if ( __DEV__ ) {
  require( 'debug-http' )();
}

passport.use( new LocalStrategy( {
    usernameField: 'username',
    passwordField: 'password'
  }, ( username, password, done ) => {
    let result = {
      credentials: { username: username, password: password }
    };
    const auth = new Request( '/auth', result.credentials );
    auth.request( 'post' )
      .then( api => {
        if ( api.error ) {
          return done( null, false, api );
        } else {
          result.cookies = api.__set_cookie;
          result.status = api.status;
          result.data   = api.user;
          return done( null, result )
        }
      } )
      .catch( () => console.log( 'Passport error' ) )
} ) );

passport.serializeUser( ( user, done ) => {
  done( null, JSON.stringify( user ) );
} );

passport.deserializeUser( ( user, done ) => {
  done( null, JSON.parse( user ) );
} );

app
  .disable( 'x-powered-by' )
  .enable( 'trust proxy' )
  .use( require( 'compression' )() )
  .use( require( 'body-parser' ).urlencoded( { extended: true } ) )
  // .use( __DEV__ ? require( 'tiny-lr' ).middleware( { app: app, dashboard: true } ) : _next )
  .use( require( 'serve-static' )( staticFolder ) )
  .use( require( 'serve-favicon' )( path.join( staticFolder, 'favicon.ico' ) ) )
  .use(
    __DEV__
      ? require( 'express-pino-logger' )( {
          extreme: true,
          level: process.env.LOG_LEVEL.toLowerCase(),
        } )
      : _next,
  )
  .use( require( 'cookie-parser' )() )
  .use(
    expressSession( {
      name: 'user',
      resave: false,
      saveUninitialized: true,
      key: 'test',
      proxy: 'true',
      secret: process.env.SESSION_SECRET,
      // cookie: {
      //   secure: !__DEV__,
      //   httpOnly: true,
      //   // domain: 'localhost',
      //   path: '/',
      //   expires: new Date( Date.now() + 365 * 24 * 60 * 60 * 1000 ), // 1 hour
      // },
      // store: new MemcachedStore( {
      //   hosts: ['127.0.0.1:11211'],
      //   secret: process.env.SESSION_SECRET,
      // } ),
    } ),
  )
  .use( passport.initialize() )
  .use( passport.session() )
  // .use( ( req, res, next ) => {
  //   // Close connection
  //   req.apiRequests = [];
  //   req.on( 'close', () => {
  //     req.apiRequests.map( ( request ) => {
  //       request.cancelSource.cancel();
  //       return null;
  //     } );
  //   } );
  //   next();
  // } )
  .use( require( 'csurf' )( /* { cookie: true } */ ) )
  .use( __DEV__ ? _next : require( 'connect-slashes' )() );

app.all( '*', async ( req, res, next ) => {
  try {
    console.time( 'Route' );
    const route = await router.resolve( {
      pathname: req.path,
      query: req.query || {},
      body: req.body || {},
      session: req.session,
    } );
    console.timeEnd( 'Route' );

    if ( route.redirect ) {
      res.redirect( route.status || 302, route.redirect );
      return;
    }

    res.status( route.status || 200 );

    if ( route.page ) {
      console.time( 'Render' );
      const html = await render( req, res, route );
      console.timeEnd( 'Render' );
      return html;
    } else {
      return res.json( route );
    }
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
  const html = render( req, res, {}, { page: 'error', api: { error: err } } );
  res.status( err.status || 500 );
  return res.send( html );
} );

if ( __DEV__ ) {
  require( './rebuild' )( app );
}

isSocket && fs.existsSync( port ) && fs.unlinkSync( port );
app.listen( port, function() {
  isSocket && fs.chmod( port, '0777' );
  console.log( 'Server is listening on', this.address().port );
} );
