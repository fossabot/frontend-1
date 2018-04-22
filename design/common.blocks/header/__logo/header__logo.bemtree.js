block( 'header' )
  .elem( 'logo' )
  .content()( () => {
  return {
    block: 'logo',
    content: {
      elem: 'image',
    },
  };
} );
