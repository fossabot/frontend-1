'use strict';

const { normalize } = require( 'normalizr' );
const getStructure = require( '../../queries/getStructure' );
const getTours = require( '../../queries/getTours' );
const getSetting = require( '../../queries/getSetting' );

const data = async ( context, params ) => {
  const response = await Promise.all( [
    getStructure( { lang: params.lang } ),
    getTours( { lang: params.lang } ),
    getSetting( { lang: params.lang } ),
  ] );
  return normalize(
    {
      structure: response[0],
      tours: response[2],
      setting: response[1],
    },
    {
      // structure: { object: schema.structure },
      // tours: { results: [ schema.settings ] },
      // setting: { results: [ schema.settings ] },
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
