'use strict';

const Request = require( './_request' );

const url = '/cart';

const getCart = async ( session ) => {
  const tour = new Request( url, {}, session );
  return await tour.request();
};

module.exports = getCart;
