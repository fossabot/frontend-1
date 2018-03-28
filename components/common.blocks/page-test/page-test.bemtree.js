block( 'page' ).def()( ( node, ctx ) => {
  ctx.styles = [ { elem: 'css', url: '/assets/css/nevatrip-desktop/nevatrip-desktop.min.css' } ];
  return applyNext();
} )

block( 'page-test' ).replace()( () => {
  return [
    {
      block: 'link',
      url: '/',
      content: 'Test'
    }
  ];
} );