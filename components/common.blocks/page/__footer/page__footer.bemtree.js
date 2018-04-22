block( 'page' )
  .elem( 'footer' )
  .replace()( ( node ) => {
  return {
    block: 'footer',
    mods: {
      theme: 'nevatrip-dark'
    },
    mix: { block: node.block, elem: node.elem },
  };
} );
