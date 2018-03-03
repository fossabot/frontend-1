'use strict';

const Request = require( './_request' );

const url = '/pier';

const getPier = async ( { name, page = 1, perPage = 0, lang = 'ru' } = {} ) => {
  const params = {
    page: page,
    perPage: perPage,
    lang: lang,
  };
  const pier = new Request( name ? url + '/' + name : url, params );
  return await pier.request();
};

module.exports = getPier;
