'use strict';

const Request = require( './_request' );

const url = '/cart';

const postCart = async ( { product, count = 1 } = {}, session ) => {
  const params = {
    product: product,
    count: count,
  }
  const tour = new Request( url, params, session );
  return await tour.request( 'post' );
};

module.exports = postCart;
