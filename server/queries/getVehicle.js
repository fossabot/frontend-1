'use strict';

const Request = require( './_request' );

const url = '/vihicle';

const getVihicle = async ( { name, page = 1, perPage = 0, lang = 'ru' } = {} ) => {
  const params = {
    page: page,
    perPage: perPage,
    lang: lang,
  };
  const vihicle = new Request( name ? url + '/' + name : url, params );
  return await vihicle.request();
};

module.exports = getVihicle;
