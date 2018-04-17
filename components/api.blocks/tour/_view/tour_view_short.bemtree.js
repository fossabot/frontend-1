block( 'tour' ).mod( 'view', 'short' ).content()( ( node, ctx ) => {
  const tour = ctx.tour;

  return [
    {
      elem: 'image',
      url: tour.url,
      content: tour.image
    },
    {
      elem: 'name',
      url: tour.url,
      content: tour.name
    }
  ]
} );
