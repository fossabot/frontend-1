'use strict';

const Request = require( './_request' );

const url = '/cart';

const postCart = async ( context ) => {
  const tour = new Request( url, { product: context.id, count: 1 } );
  return await tour.request( 'post' );
};

module.exports = postCart;
