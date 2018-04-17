block( 'tour' ).mod( 'view', 'promo' )(
  match( ( node, ctx ) => !ctx.tour ).def()( '' ),
  content()( ( node, ctx ) => {
    const tour = ctx.tour;

    return [
      {
        elem: 'section',
        content: {
          elem: 'content',
          content: [
            {
              elem: 'name',
              url: tour.uri,
              content: tour.longtitle || tour.pagetitle
            },
            {
              elem: 'features',
              route: '',
              content: tour.tv_e_points ? tour.tv_e_points.split( '\r\n' ) : []
            },
            {
              elem: 'action',
              content: [
                tour.price || tour.old_price
                ? {
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
                  }
                : '',
                {
                  elem: 'buy'
                },
                {
                  elem: 'show-more',
                  url: tour.uri
                },
              ]
            }
          ]
        }
      }

    ]
  } )
)