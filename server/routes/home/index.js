'use strict';

const { normalize } = require( 'normalizr' );
const getStructure = require( '../../queries/getStructure' );
const getSettings = require( '../../queries/getSettings' );
const getTours = require( '../../queries/getTours' );

const data = async ( context, params ) => {
  const response = await Promise.all( [
    getStructure( { lang: params.lang } ),
    getSettings( { lang: params.lang } ),
    getTours( { lang: params.lang } ),
  ] );
  return normalize(
    {
      structure: response[0],
      settings: response[1],
      tours: response[2],
    },
    {
      // structure: { object: schema.structure },
      // settings: { results: [ schema.settings ] },
      // tours: { results: [ schema.settings ] },
    },
  );
};

const action = async ( context, params ) => {
  return {
    page: 'index',
    api: await data( context, params ),
    lang: params.lang,
  };
};

module.exports = action;
