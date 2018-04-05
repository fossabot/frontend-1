'use strict';

const rest = require( 'rest' );
const mime = require( 'rest/interceptor/mime' );
const api = rest.wrap( mime );

class nevaTravel {
  constructor( url, key ) {
    this.url = () => url;
    this.key = () => key;
  }

  async init() {
    return await api( `${ this.url() }/get_api_status?auth_key=${ this.key() }` ).then( response => {
      if ( response.entity.status === 'available' ) {
        this.success = response.entity.status === 'available';
      } else {
        throw new Error( 'API is not available', response.entity );
      }

      return this;
    } );
  }

  async piers () {
    return await api( `${ this.url() }/get_piers_info?auth_key=${ this.key() }` ).then( response => {
      this.piers = response.entity;

      return this;
    } );
  }

  async programs () {
    return await api( `${ this.url() }/get_programs_info?auth_key=${ this.key() }` ).then( response => {
      this.programs = response.entity;

      return this;
    } );
  }

  set program ( id ) {
    if ( id ) {
      this.programId = id;
    } else {
      throw new Error( 'program is empty' )
    }

    return this;
  }

  get program () { return this.programId; }

  set pier ( id ) {
    if ( id ) {
      this.pierId = id;
    } else {
      throw new Error( 'Pier is empty' )
    }

    return this;
  }

  get pier () { return this.pierId; }

  async date ( start_date, { program = '', pier = '' } = {} ) {
    this.date = start_date;

    await api( `${ this.url() }/get_cruises_info?auth_key=${ this.key() }&start_date=${ start_date }&program=${ program }&pier=${ pier }` ).then( response => {
      this.tour = response.entity;
    } );

    return this;
  }
}

module.exports = nevaTravel;
