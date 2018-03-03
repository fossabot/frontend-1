'use strict';

const Request = require( './_request' );

const url = '/tour';

const getTour = async ( { name, group, filter = {}, page = 1, perPage = 0, lang = 'ru' } = {} ) => {
  const params = {
    group: group,
    filter: filter,
    page: page,
    perPage: perPage,
    lang: lang,
  };
  const tour = new Request( name ? url + '/' + name : url, params );
  return await tour.request();
};

module.exports = getTour;
