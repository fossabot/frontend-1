const action = async ( context, params ) => {
  return {
    page: 'index',
    lang: params.lang
  }
};

module.exports = action;
