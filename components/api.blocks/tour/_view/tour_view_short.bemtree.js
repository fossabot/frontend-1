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
    },
    {
      elem: 'action',
      content: [
        {
          elem: 'cost',
          content: [
            {
              elem: 'price',
              content: tour.tv_e_price
            },
            {
              elem: 'price',
              elemMods: {
                type: 'on-pier'
              },
              content: tour.tv_e_price_on_pier
            },
          ]
        },
        {
          elem: 'show-more'
        }
      ]
    },
  ]
} );
