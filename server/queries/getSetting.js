'use strict';

const Request = require( './_request' );

const url = '/setting';

const getSetting = async ( { key, page = 1, perPage = 0, lang = 'ru' } = {} ) => {
  const params = {
    key: key,
    page: page,
    perPage: perPage,
    lang: lang,
  };
  const setting = new Request( url, params );
  return await setting.request();
};

module.exports = getSetting;
