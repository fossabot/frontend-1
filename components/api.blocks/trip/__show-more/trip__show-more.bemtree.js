block( 'trip' )
  .elem( 'show-more' )
  .replace()( ( node ) => {
  return {
    block: 'button',
    mods: {
      type: 'link',
      view: 'plain',
      size: 'l',
    },
    url: '#',
    text: node.i18n( 'trip', 'show-more' ) + ' →',
  };
} );
