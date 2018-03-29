'use strict';

const { normalize } = require( 'normalizr' );
const getStructure = require( '../queries/getStructure' );
const getSetting = require( '../queries/getSetting' );
const getCart = require( '../queries/getCart' );
const postCart = require( '../queries/postCart' );
const getTour = require( '../queries/getTour' );

async function asyncForEach( array, callback ) {
  for ( let index = 0; index < array.length; index++ ) {
    await callback( array[index], index, array )
  }
}

const data = async ( context, params ) => {
  if ( context.body ) {
    await postCart( { product: context.body.id }, context.session );
  }

  let cart = await getCart( context.session );
 
  await asyncForEach( Object.keys( cart.object.cart ), async ( key ) => {
    let item = cart.object.cart[ key ];
    const tour = await getTour( { id: item.id }, context.session );
    item.tour = tour.object;
  } )

  const response = await Promise.all( [
    getStructure( { lang: params.lang } ),
    getSetting( { lang: params.lang } ),
  ] );
  return normalize(
    {
      structure: response[0],
      setting: response[1],
      cart: cart,
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
