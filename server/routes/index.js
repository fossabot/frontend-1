module.exports = {
  path: '',
  name: 'root',
  children: [
    {
      path: '',
      name: 'index',
      action: ( ctx ) => {
        return { Hello: 'World' };
      }
    },
    {
      path: '(.*)',
      name: '404',
      action: ( ctx, z ) => {
        return { error: 404, pathname: ctx.pathname, query: ctx.query };
      }
    }
  ],

  async action( { next } ) {
    const route = await next() || {};
    return route;
  }
};
