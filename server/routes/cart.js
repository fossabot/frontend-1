'use strict';

const { normalize } = require( 'normalizr' );
const getStructure = require( '../queries/getStructure' );
const getSetting = require( '../queries/getSetting' );
const getCart = require( '../queries/getCart' );
const postCart = require( '../queries/postCart' );
const postOrder = require( '../queries/postOrder' );
const getTour = require( '../queries/getTour' );

async function asyncForEach( array, callback ) {
  for ( let index = 0; index < array.length; index++ ) {
    await callback( array[index], index, array )
  }
}

const data = async ( context, params ) => {

  if ( context.body && context.body.action === 'cart/add' ) {
    await postCart( { product: context.body.id }, context.session );
  }

  if ( context.body && context.body.action === 'order/add' ) {
    const order = await postOrder( context.body, context.session );
    if ( order.success ) {
      context.session.__order = order;
      return { redirect: '/thanks' }
    }
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
  const response = await data( context, params );

  if ( response.redirect ) {
    return response;
  }

  return {
    page: 'cart',
    api: response,
    lang: params.lang,
  };
};

module.exports = action;
