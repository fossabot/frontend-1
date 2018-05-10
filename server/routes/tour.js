'use strict';

const { normalize } = require( 'normalizr' );
const schema = require( '../queries/_schema' );
const getStructure = require( '../queries/getStructure' );
const getSetting = require( '../queries/getSetting' );
const getTour = require( '../queries/getTour' );
const getSight = require( '../queries/getSight' );

const data = async ( context, params ) => {
  const response = await Promise.all( [
    getStructure( { lang: params.lang, view: 'flat' } ),
    getStructure( { lang: params.lang, view: 'tree' } ),
    getSetting( { lang: params.lang }, context.session ),
    getTour( { lang: params.lang, name: params.tour /*, id: context.query.id */ }, context.session ),
    getSight( { lang: params.lang }, context.session ),
  ] );
  return normalize(
    {
      structureFlat: response[0],
      structureTree: response[1],
      setting: response[2],
      tour: response[3],
      sight: response[4],
    },
    {
      structureFlat: { object: [ schema.resource ] },
      structureTree: { object: schema.structure },
      setting: { results: [ schema.setting ] },
      tour: { object: schema.tour },
      sight: { results: [ schema.sight ] },
    },
  );
};

const action = async ( context, params ) => {
  const api = await data( context, params );
  const tour = api.entities.tour[ api.result.tour.object ];

  return {
    page: 'tour',
    api,
    lang: params.lang,
    title: tour.longtitle || tour.pagetitle,
    meta: {
      description: tour.description,
      og: {
        image: `//nevatrip.dev.compaero.ru/${ tour.tv_e_image_320 }`,
      }
    }
  };
};

module.exports = action;
