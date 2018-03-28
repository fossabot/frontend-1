const axios = require( 'axios' );
const { cacheAdapterEnhancer } = require( 'axios-extensions' );

const API = axios.create( {
  baseURL: process.env.API,
  headers: { 'Cache-Control': 'no-cache' },
  // cache will be enabled by default
  adapter: cacheAdapterEnhancer( axios.defaults.adapter, false ),
} );

const fetch = async ( options ) => {
  try {

    // if ( options.clientRequest ) {
    //   options.headers = Object.assign(
    //     options.headers || {},
    //     {
    //       Cookie:
    //         (options.clientRequest.user && options.clientRequest.user.cookies)
    //           ? options.clientRequest.user.cookies.join('')
    //           : ''
    //     }
    //   );
    // }

    // const source = axios.CancelToken.source();
    // options.cancelToken = source.token;
    // options.cancelSource = source;

    const response = await API( options );
    return response;
  } catch ( error ) {
    console.error( 'Request Failed:', error.config );
    if ( error.response ) {
      console.error( 'Status:', error.response.status );
      console.error( 'Data:', error.response.data );
      console.error( 'Headers:', error.response.headers );
    } else {
      console.error( 'Error Message:', error.message );
    }
    throw new Error( error.response || error.message );
  }
};

class Request {
  constructor( url, params = {}, session ) {
    this.pathname = url.replace( /\/?$/, '/' );
    this.search = params;
    this.session = session;
  }

  get url() {
    const params = Object.keys( this.search )
      .map( ( param ) => {
        return `${ param }=${ this.search[ param ] }`;
      } )
      .join( '&' );
    return `${ this.pathname }/?${ params }`;
  }

  set url( url ) {
    this.pathname = url;
    return this;
  }

  get params() {
    return this.search;
  }

  set params( params = {} ) {
    this.search = Object.assign( {}, this.search, params );
    return this;
  }

  set removeParam( param ) {
    if ( this.search.hasOwnProperty( param ) ) {
      delete this.search[param];
    }
    return this;
  }

  request( type = 'get' ) {
    const options = {
      method: type,
      url: this.pathname,
      params: this.params,
      ...type === 'post' ? { data: this.params } : {},
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': this.session && this.session.__api ? this.session.__api.join( '' ) : ''
      },
      withCredentials: true,
    };
    return fetch( options )
      .then( ( response ) => {
        if ( response.headers['set-cookie'] && this.session ) {
          this.session.__api = this.session.__api || response.headers['set-cookie'];
          // if (options.clientRequest && options.clientRequest.user ) {
          //   options.clientRequest.user.cookies = response.headers['set-cookie'];
          // }
        }
        return response.data;
      } )
      .catch( ( error ) => error );
  }
}

module.exports = Request;
