'use strict';

const Request = require( './_request' );

const url = '/settings';

const getSettings = async ( { key, page = 1, perPage = 0, lang = 'ru' } = {} ) => {
  const params = {
    key: key,
    page: page,
    perPage: perPage,
    lang: lang,
  };
  const settings = new Request( url, params );
  return await settings.request();
};

module.exports = getSettings;
