block( 'tour' ).mod( 'view', 'cart' ).content()( ( node, { tour } ) => {

  return [
    {
      elem: 'name',
      url: tour.uri,
      content: tour.longtitle || tour.pagetitle,
    },
    { elem: 'date' },
    { elem: 'direction' },
    { elem: 'pier' },
    { elem: 'time' },
    { elem: 'tickets' },
    { elem: 'place' },
  ]
} );
