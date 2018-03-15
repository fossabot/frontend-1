'use strict';

const Request = require( './_request' );

const url = '/structure';

const getStructure = async ( { view = 'tree', lang = 'ru' } = {} ) => {
  const params = {
    view: view,
    lang: lang,
  };
  const structure = new Request( url, params );
  return await structure.request();
};

module.exports = getStructure;
