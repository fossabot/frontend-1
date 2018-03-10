'use strict';

const Request = require( './_request' );

const url = '/tour';

const getTour = async ( { name, category, filter = {}, page = 1, perPage = 0, lang = 'ru' } = {} ) => {
  const params = {
    id: name,
    filter: filter,
    page: page,
    perPage: perPage,
    lang: lang,
    group: category,
  };
  const tour = new Request( url, params );
  return await tour.request();
};

module.exports = getTour;
