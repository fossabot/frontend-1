'use strict';

const { normalize } = require( 'normalizr' );
const schema = require( '../queries/_schema' );
const getStructure = require( '../queries/getStructure' );
const getSetting = require( '../queries/getSetting' );
const getTour = require( '../queries/getTour' );

const data = async ( context, params ) => {
  const response = await Promise.all( [
    getStructure( { lang: params.lang, view: 'tree' }, context.session ),
    getSetting( { lang: params.lang }, context.session ),
    getTour( { lang: params.lang, name: params.tour /*, id: context.query.id */ }, context.session ),
  ] );
  return normalize(
    {
      structureTree: response[0],
      setting: response[1],
      tour: response[2],
    },
    {
      // structureTree: { object: schema.structure },
      setting: { results: [ schema.settings ] },
      tour: { object: schema.tour },
    },
  );
};

const action = async ( context, params ) => {
  return {
    page: 'tour',
    api: await data( context, params ),
    lang: params.lang,
  };
};

module.exports = action;
