'use strict';

const Request = require( './_request' );

const url = '/sight';

const getSight = async ( { name, page = 1, perPage = 0, lang = 'ru' } = {} ) => {
  const params = {
    page: page,
    perPage: perPage,
    lang: lang,
  };
  const sight = new Request( name ? url + '/' + name : url, params );
  return await sight.request();
};

module.exports = getSight;
