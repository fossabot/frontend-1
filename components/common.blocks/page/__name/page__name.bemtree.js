block( 'page' ).elem( 'name' ).replace()( ( node, { content } ) => {
  return {
    block: 'heading',
    mods: { size: 'xxl' },
    mix: { block: node.block, elem: node.elem },
    content
  }
} );
