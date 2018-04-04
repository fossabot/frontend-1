'use strict';

const action = ( context, params ) => {
  return {
    api: 'index',
    params: params,
  };
};

module.exports = action;