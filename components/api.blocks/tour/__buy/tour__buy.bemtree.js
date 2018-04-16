block( 'tour' ).elem( 'buy' ).replace()( node => {
  return {
    block: 'button',
    mods: {
      type: 'link',
      view: 'action',
      size: 'xl'
    },
    mix: { block: node.block, elem: node.elem },
    url: '#',
    text: 'Купить'
  }
} );
