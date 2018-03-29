block( 'page' )(
  def()( ( node, ctx ) => {
    ctx.styles = [ { elem: 'css', url: '/assets/css/nevatrip-desktop/nevatrip-desktop.min.css' } ];
    return applyNext();
  } )
)


block( 'page-test' ).replace()( () => {
  return [
    {
      block: 'link',
      mods: {
        theme: 'islands',
        size: 'm'
      },
      url: 'https://bem.info/',
      content: 'bem.info'
    }
  ];
} );