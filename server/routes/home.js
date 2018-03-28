'use strict';

const { normalize } = require( 'normalizr' );
const schema = require( '../queries/_schema' );
const getStructure = require( '../queries/getStructure' );
const getSetting = require( '../queries/getSetting' );
const getTour = require( '../queries/getTour' );

const data = async ( context, params ) => {
  const response = await Promise.all( [
    getStructure( { lang: params.lang, view: 'flat' } ),
    getStructure( { lang: params.lang, view: 'tree' } ),
    getSetting( { lang: params.lang } ),
    getTour( { lang: params.lang } ),
  ] );

  return normalize(
    {
      structureFlat: response[0],
      structureTree: response[1],
      setting: response[2],
      tour: response[3],
    },
    {
      structureFlat: { object: [ schema.structureFlat ] },
      // setting: { results: [ schema.settings ] },
      tour: { results: [ schema.tour ] },
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
