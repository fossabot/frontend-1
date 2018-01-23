const api = require('../../queries');
const schema = require('../../controllers/schemas');
const { normalize } = require('normalizr');

const _30DaysAgo = ( Math.floor( ( Date.now() / 1000 ) / 3600 ) * 3600 - ( 31 * 60 * 60 ) );

const data = async ( context, params ) => {
  const response = await Promise.all([
    api.getCategory( { lang: params.lang } ),
    api.getSchedule( { dateFrom: _30DaysAgo, perPage: 4, unique: true, lang: params.lang } ),
    api.getAuthorСompilation( { perPage: 5, lang: params.lang } ),
    api.getNews( { perPage: 4, lang: params.lang } )
  ]);
  return normalize( {
    category: response[ 0 ],
    schedule: response[ 1 ],
    authorCompilation: response[ 2 ],
    news: response[ 3 ]
  }, {
    category: { meta: schema.meta, items: [ schema.category ] },
    schedule: { meta: schema.meta, items: [ schema.schedule ] },
    authorCompilation: { meta: schema.meta, items: [ schema.authorCompilation ] },
    news: { meta: schema.meta, items: [ schema.news ] }
  } );
}

const action = async ( context, params ) => {
  return {
    page: 'index',
    api: await data( context, params ),
    lang: params.lang
  }
};

module.exports = action;
