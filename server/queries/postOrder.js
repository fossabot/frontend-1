'use strict';

const Request = require( './_request' );

const url = '/shop';

const postCart = async ( { email, receiver, phone, payment, city, comment } = {}, session ) => {
  const params = {
    email: email,
    receiver: receiver,
    phone: phone,
    payment: payment,
    city: city,
    comment: comment,
  }
  const tour = new Request( url, params, session );
  return await tour.request( 'post' );
};

module.exports = postCart;
