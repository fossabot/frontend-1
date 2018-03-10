'use strict';

const Request = require( './_request' );

const url = '/tour';

const getTour = async ( { name, category, filter = {}, page = 1, perPage = 0, lang = 'ru' } = {} ) => {
  const params = {
    group: group,
    filter: filter,
    page: page,
    perPage: perPage,
    lang: lang,
    group: category,
  };
  const tour = new Request( name ? url + '/' + name : url, params );
  return await tour.request();
};

module.exports = getTour;
