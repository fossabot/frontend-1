block( 'tour' ).mod( 'view', 'cart' ).content()( ( node, { tour } ) => {
  const category = node.api.result.structureTree.object[ tour.parent ];

  return [
    {
      elem: 'name',
      url: `${ category }/${ tour.alias }`,
      content: tour.longtitle || tour.pagetitle,
    },
    { elem: 'date'      , elemMods: { loaded: false } },
    { elem: 'direction' , elemMods: { loaded: false } },
    { elem: 'pier'      , elemMods: { loaded: false } },
    { elem: 'time'      , elemMods: { loaded: false } },
    { elem: 'tickets'   , elemMods: { loaded: false } },
    { elem: 'place'     , elemMods: { loaded: false } },
  ]
} );
