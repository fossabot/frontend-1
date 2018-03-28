'use strict';

const { normalize } = require( 'normalizr' );
const getStructure = require( '../queries/getStructure' );
const getSetting = require( '../queries/getSetting' );
const getTour = require( '../queries/getTour' );

const data = async ( context, params ) => {
  const response = await Promise.all( [
    getStructure( { lang: params.lang } ),
    getSetting( { lang: params.lang } ),
    getTour( { lang: params.lang, category: params.category } ),
  ] );
  return normalize(
    {
      structure: response[0],
      setting: response[1],
      tour: response[2],
    },
    {
      // structure: { object: schema.structure },
      // setting: { results: [ schema.settings ] },
      // tour: { results: [ schema.settings ] },
    },
  );
};

const action = async ( context, params ) => {
  return {
    page: 'category',
    api: await data( context, params ),
    lang: params.lang,
  };
};

module.exports = action;
