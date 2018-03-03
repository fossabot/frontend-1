block( 'header' )
  .elem( 'logo' )
  .content()( () => {
  return {
    block: 'link',
    mods: { view: 'text' },
    to: 'index',
    content: {
      block: 'logo',
      content: {
        elem: 'image',
      },
    },
  };
} );
