block( 'logo' )
  .elem( 'image' )
  .replace()( ( node ) => {
  return {
    block: 'image',
    mix: { block: node.block, elem: node.elem },
    url: '/assets/img/logo/__image/logo__image_theme_nevatrip.png',
  };
} );
