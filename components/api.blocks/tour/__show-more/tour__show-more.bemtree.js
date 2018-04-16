block( 'tour' ).elem( 'show-more' ).replace()( node => {
  return {
    block: 'button',
    mods: {
      type: 'link',
      view: node.mods.view === 'promo' ? 'plain' : 'action',
      size: 'xl'
    },
    mix: { block: node.block, elem: node.elem },
    url: '#',
    text: node.mods.view === 'promo' ? 'Подробнее об экскурсии →' : 'Подробнее →'
  }
} );
