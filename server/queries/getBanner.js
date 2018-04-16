'use strict';

const Request = require( './_request' );

const url = '/banners';

const getBanner = async ( { page = 1, perPage = 0, lang = 'ru' } = {}, session ) => {
  const params = {
    page: page,
    perPage: perPage,
    lang: lang,
  };
  const banner = new Request( url, params, session );
  return await banner.request();
};

module.exports = getBanner;
