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
    getTour( { lang: params.lang, parent: params.category } ),
  ] );

  return normalize(
    {
      structureFlat: response[0],
      structureTree: response[1],
      setting: response[2],
      tour: response[3],
    },
    {
      structureFlat: { object: [ schema.resource ] },
      structureTree: { object: schema.structure },
      setting: { results: [ schema.setting ] },
      tour: { results: [ schema.tour ] },
    },
  );
};

const action = async ( context, params ) => {
  const api = await data( context, params );
  const category = api.entities.resource[ params.category ];

  return {
    page: 'category',
    title: category.longtitle || category.pagetitle,
    category: params.category,
    api,
    lang: params.lang,
  };
};

module.exports = action;
