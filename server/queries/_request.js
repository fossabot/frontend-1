const axios = require( 'axios' );

const API = axios.create( { baseURL: process.env.API } );

const fetch = async ( options ) => {
  let response;
  try {
    response = await API( options );
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
  return response.data;
};

class Request {
  constructor( url, params = {}, schema = {} ) {
    this.pathname = url.replace( /\/?$/, '/' );
    this.search = params;
    this.schema = schema;
  }

  get url() {
    const params = Object.keys( this.search )
      .map( ( param ) => {
        return `${param}=${this.search[param]}`;
      } )
      .join( '&' );
    return `${this.pathname}/?${params}`;
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
      data: this.params,
    };
    return fetch( options )
      .then( ( response ) => response )
      .catch( ( error ) => error );
  }
}

module.exports = Request;
