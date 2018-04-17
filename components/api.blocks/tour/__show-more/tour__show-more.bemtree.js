block( 'tour' ).elem( 'show-more' ).replace()( ( node, ctx ) => {
  
  return {
    block: 'button',
    mods: {
      type: 'link',
      view: node.mods.view === 'promo' ? 'plain' : 'action',
      size: 'xl'
    },
    mix: { block: node.block, elem: node.elem },
    url: ctx.url,
    text: node.mods.view === 'promo' ? 'Подробнее об экскурсии →' : 'Подробнее →'
  }
} );
