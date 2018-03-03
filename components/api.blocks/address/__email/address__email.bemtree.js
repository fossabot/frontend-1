block( 'address' )
  .elem( 'email' )
  .content()( () => {
  return {
    block: 'link',
    url: 'tel:+78129653404',
    content: '8 (812) 965-34-04',
  };
} );
