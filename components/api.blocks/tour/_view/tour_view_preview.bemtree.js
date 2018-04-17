block( 'tour' ).mod( 'view', 'preview' )(
  match( ( node, ctx ) => !ctx.tour ).def()( '' ),
  content()( ( node, ctx ) => {
    const tour = ctx.tour;

    return [
      {
        elem: 'image',
        url: tour.uri,
        content: tour.image ? `https://nevatrip.dev.compaero.ru/${ tour.image }` : 'http://babeholder.pixoil.com/img/373/16:9/?' + node.generateId(),
      },
      {
        elem: 'content',
        content: [
          {
            elem: 'name',
            url: tour.uri,
            content: tour.longtitle || tour.pagetitle
          },
          {
            elem: 'features',
            content: tour.tv_e_points ? tour.tv_e_points.split( '\r\n' ) : []
          },
          {
            elem: 'action',
            content: [
              tour.price || tour.old_price ? {
                elem: 'cost',
                content: [
                  {
                    elem: 'price',
                    content: tour.price
                  },
                  {
                    elem: 'price',
                    elemMods: { type: 'on-pier' },
                    content: tour.old_price
                  }
                ]
              } : '',
              {
                elem: 'show-more',
                url: tour.uri,
              }
            ]
          }
        ]
      }

    ]
  } )
)