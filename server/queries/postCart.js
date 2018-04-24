'use strict';

const Request = require( './_request' );

const url = '/cart';

const postCart = async ( { product, options = {}, count = 1 } = {}, session ) => {
  const params = {
    product,
    options,
    count,
  }
  const tour = new Request( url, params, session );
  return await tour.request( 'post' );
};

module.exports = postCart;
