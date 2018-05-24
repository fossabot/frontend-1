'use strict';

const { normalize } = require( 'normalizr' );
const schema = require( '../queries/_schema' );
const getStructure = require( '../queries/getStructure' );
const getSetting = require( '../queries/getSetting' );
const getTour = require( '../queries/getTour' );
const getTrip = require( '../queries/getTrip' );

const data = async ( context, params ) => {
  const response = await Promise.all( [
    getStructure( { lang: params.lang, view: 'flat' } ),
    getStructure( { lang: params.lang, view: 'tree' } ),
    getSetting( { lang: params.lang } ),
    getTrip( { tour: params.tour } ),
    getTour( { lang: params.lang, id: params.tour } ),
  ] );
  return normalize(
    {
      structureFlat: response[ 0 ],
      structureTree: response[ 1 ],
      setting: response[ 2 ],
      trip: response[ 3 ],
      tour: response[ 4 ],
    },
    {
      structureFlat: { object: [ schema.resource ] },
      structureTree: { object: schema.structure },
      setting: { results: [ schema.setting ] },
      tour: { object: schema.tour },
      trip: { object: [ schema.trip ] },
    },
  );
};

const action = async ( context, params ) => {
  return {
    page: 'calendar',
    api: await data( context, params ),
  };
};

module.exports = action;
