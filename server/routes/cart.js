'use strict';

const { normalize } = require( 'normalizr' );
const schema = require( '../queries/_schema' );
const getStructure = require( '../queries/getStructure' );
const getSetting = require( '../queries/getSetting' );
const getCart = require( '../queries/getCart' );
const postCart = require( '../queries/postCart' );
const postOrder = require( '../queries/postOrder' );
const getTour = require( '../queries/getTour' );
const getTrip = require( '../queries/getTrip' );

async function asyncForEach( array, callback ) {
  for ( let index = 0; index < array.length; index++ ) {
    await callback( array[index], index, array )
  }
}

const data = async ( context, params ) => {

  if ( context.body && context.body.action === 'cart/add' ) {
    await postCart( { product: context.body.id, options: context.body.options }, context.session );
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
    const response = await Promise.all( [
      getTour( { id: item.id }, context.session ),
      getTrip( { tour: item.id, once: true }, context.session )
    ] );
    item.tour = response[ 0 ];
    item.tour.trip = response[ 1 ];
  } )

  const response = await Promise.all( [
    getStructure( { lang: params.lang, view: 'flat' } ),
    getStructure( { lang: params.lang, view: 'tree' } ),
    getSetting( { lang: params.lang } ),
  ] );
  return normalize(
    {
      structureFlat: response[0],
      structureTree: response[1],
      setting: response[2],
      cart: cart,
    },
    {
      structureFlat: { object: [ schema.resource ] },
      structureTree: { object: schema.structure },
      setting: { results: [ schema.setting ] },
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
