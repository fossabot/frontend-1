block( 'page' )
  .elem( 'header' )
  .replace()( ( node ) => {
  return {
    block: 'header',
    mix: { block: node.block, elem: node.elem },
  };
} );
