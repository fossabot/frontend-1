block( 'page-tour' ).replace()( ( node ) => {
  return [
    {
      block: 'tour',
      mods: { view: 'detail' },
      tour: node.api.entities.tour[ node.api.result.tour.object ]
    }
  ];
} );
