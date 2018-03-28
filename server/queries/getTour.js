'use strict';

const Request = require( './_request' );

const url = '/tour';

const getTour = async ( { name, id, category, filter, page = 1, perPage = 0, lang = 'ru' } = {}, session ) => {
  const params = {
    id: id,
    alias: name,
    filter: filter,
    page: page,
    perPage: perPage,
    lang: lang,
    group: category,
  };
  const tour = new Request( url, params, session );
  return await tour.request();
};

module.exports = getTour;
