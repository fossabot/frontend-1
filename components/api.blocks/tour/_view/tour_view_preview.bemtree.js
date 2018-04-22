block( 'tour' ).mod( 'view', 'preview' )(
  match( ( node, ctx ) => !ctx.tour ).def()( '' ),
  content()( ( node, ctx ) => {
    const tour = ctx.tour;

    return [
      {
        elem: 'image',
        url: tour.uri,
        content: tour.tv_e_image_320 ? `//nevatrip.dev.compaero.ru/${ tour.tv_e_image_320 }` : 'http://hunkholder.pixoil.com/img/373/16:9/?' + node.generateId(),
      },
      {
        elem: 'content',
        content: [
          {
            elem: 'name',
            url: tour.uri,
            content: tour.longtitle || tour.pagetitle,
          },
          {
            elem: 'features',
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
                    content: tour.tv_e_price,
                  },
                  {
                    elem: 'price',
                    elemMods: { type: 'on-pier' },
                    content: tour.tv_e_price_on_pier,
                  }
                ]
              },
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