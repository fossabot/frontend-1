block( 'page' )
  .elem( 'footer' )
  .replace()( ( node ) => {
  return {
    block: 'footer',
    mix: { block: node.block, elem: node.elem },
  };
} );
