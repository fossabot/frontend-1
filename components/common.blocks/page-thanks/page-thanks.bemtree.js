block( 'page-thanks' ).replace()( ( node ) => {
  console.log( node.api.order );
  return [
    'Thanks'
  ];
} );
