'use strict';

const action = ( context, params ) => {
  return {
    api: 'date',
    params: params,
  };
};

module.exports = action;