'use strict';

const Request = require( './_request' );

const getTrip = async ( { id, tour, page = 1, perPage = 0, lang = 'ru', once = false } = {} ) => {
  const url = `/tour/${ tour }/trip${ once ? '/once' : '' }/getlist`;
  const params = {
    id: id,
    tour: tour,
    page: page,
    perPage: perPage,
    lang: lang,
  };
  const trip = new Request( url, params );
  return await trip.request();
};

module.exports = getTrip;
