const UniversalRouter = require( 'universal-router' );
const routes = require( './routes' );

const router = new UniversalRouter( routes, {
  resolveRoute( context, params ) {
    if ( typeof context.route.load === 'function' ) {
      return context.route.load().then( ( action ) => action( context, params ) );
    }
    if ( typeof context.route.action === 'function' ) {
      return context.route.action( context, params );
    }
    return undefined;
  },
} );

module.exports = router;
