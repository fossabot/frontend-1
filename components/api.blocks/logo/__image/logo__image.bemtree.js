block( 'logo' )(
  elem( 'image' )(
    replace()( ( node ) => {
      return {
        block: 'image',
        mix: { block: node.block, elem: node.elem },
        url: '/assets/img/logo/__image/logo__image_theme_nevatrip.png',
      };
    } ),
    match( node => node.data.url.pathname !== '/' ).wrap()( node => {
      return {
        block: 'link',
        mods: { view: 'text' },
        url: '/',
        content: {
          block: 'image',
          mix: { block: node.block, elem: node.elem },
          url: '/assets/img/logo/__image/logo__image_theme_nevatrip.png',
        }
      };
    } ),
  )
);
