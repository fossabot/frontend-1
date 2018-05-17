block( 'tour' ).mod( 'view', 'cart' ).content()( ( node, { tour } ) => {
  const category = node.api.result.structureTree.object[ tour.parent ];

  return [
    {
      elem: 'name',
      url: `${ category }/${ tour.alias }`,
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
