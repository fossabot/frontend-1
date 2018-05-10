'use strict';

const rest = require( 'rest' );
const mime = require( 'rest/interceptor/mime' );
const basicAuth = require( 'rest/interceptor/basicAuth' );
const api = rest
  .wrap( basicAuth )
  .wrap( mime );

class astraMarin {
  constructor( path, username, password ) {
    this.path = () => path;
    this.username = () => username;
    this.password = () => password;
  }

  async init() {
    return await api( { path: this.path, username: this.username, password: this.password } ).then( response => {
      console.log( response.entity );
      return this;
    } )

  }
}

module.exports = astraMarin;