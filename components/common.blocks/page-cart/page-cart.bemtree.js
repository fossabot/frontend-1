block( 'page' ).def()( ( node, ctx ) => {
  ctx.styles = [ { elem: 'css', url: '/assets/css/nevatrip-desktop/nevatrip-desktop.min.css' } ];
  return applyNext();
} )

block( 'page-cart' ).replace()( () => {
  return [
    // {
    //   tag: 'pre',
    //   content: JSON.stringify( node.api.result.cart.object.cart, null, 2 )
    // },
    {
      block: 'divider'
    },
    {
      elem: 'content',
      content: [
        {
          block: 'heading',
          mods: { size: 'xxl' },
          content: 'Купить билет онлайн'
        },
        {
          block: 'form',
          mods: {
            view: 'cart',
            'has-validation': true,
            message: 'text',
          },
          action: 'https://nevatrip.ru/payment/go',
          method: 'post'
        }
      ]
    }
  ];
} );