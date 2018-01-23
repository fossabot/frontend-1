module.exports = {
  path: '',
  name: 'root',
  children: [
    {
      path: '',
      name: 'index',
      load: async () => await require('./home')
    },
    {
      path: '(.*)',
      name: '404',
      load: async () => await require('./404')
    }
  ],

  async action( { next } ) {
    const route = await next() || {};
    return route;
  }
};
