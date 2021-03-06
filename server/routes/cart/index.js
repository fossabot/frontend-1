'use strict';

const { normalize } = require( 'normalizr' );
const getStructure = require( '../../queries/getStructure' );
const getSetting = require( '../../queries/getSetting' );
const getCart = require( '../../queries/getCart' );

const data = async ( context, params ) => {
  const response = await Promise.all( [
    getStructure( { lang: params.lang } ),
    getSetting( { lang: params.lang } ),
    getCart( { lang: params.lang, group: params.category } ),
  ] );
  return normalize(
    {
      structure: response[0],
      setting: response[1],
      cart: response[2],
    },
    {
      // structure: { object: schema.structure },
      // settings: { results: [ schema.settings ] },
      // cart: { results: [ schema.settings ] },
    },
  );
};

const action = async ( context, params ) => {
  return {
    page: 'cart',
    api: await data( context, params ),
    lang: params.lang,
  };
};

module.exports = action;
