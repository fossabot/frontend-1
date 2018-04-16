block( 'page-tour' ).replace()( ( node ) => {
  if ( !node.api.result.tour.object ) {
    return {
      tag: 'pre',
      content: JSON.stringify( node.api, null, 2 ),
    };
  } else {
    return [
      {
        block: 'tour',
        mods: { view: 'detail' },
        tour: node.api.result.tour.object
      }
    ];
  }
} );
