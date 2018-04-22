block( 'tour' ).mod( 'view', 'promo' )(
  def()( ( node, ctx ) => {
    ctx.attrs = {
      style: `background-image: url(//nevatrip.dev.compaero.ru/${ ctx.tour.tv_e_image_1200 });`
    };
    return applyNext();
  } ),
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
                {
                  elem: 'cost',
                  content: [
                    {
                      elem: 'price',
                      content: tour.tv_e_price
                    },
                    {
                      elem: 'price',
                      elemMods: { type: 'on-pier' },
                      content: tour.tv_e_price_on_pier
                    }
                  ]
                },
                {
                  elem: 'buy',
                  content: tour.id,
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