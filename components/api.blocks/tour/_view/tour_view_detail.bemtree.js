block( 'tour' ).mod( 'view', 'detail' ).content()( ( node, ctx ) => {
  const tour = ctx.tour;

  return [
    {
      elem: 'image',
      content: `http://babeholder.pixoil.com/img/1920/600`
    },
    {
      elem: 'main',
      content: [
        {
          elem: 'name',
          content: tour.longtitle || tour.pagetitle
        },
        {
          elem: 'section',
          content: [
            {
              elem: 'content',
              content: {
                elem: 'features',
                elemMods: {
                  vehicle: true,
                  languages: true,
                  'on-vehicle': true,
                  route: true
                },
                content: tour.tv_e_points ? tour.tv_e_points.split( '\r\n' ) : []
              },
            },
            {
              elem: 'aside',
              content: {
                elem: 'cost',
                content: [
                  {
                    elem: 'tickets',
                    content: [
                      'Скидки: 20% при бронировании онлайн!',
                      ' ',
                      'Есть льготный (690 ₽) и детский (450 ₽) билет. До 3 лет — бесплатно, для групп — индивидуально.'
                    ]
                  },
                  {
                    elem: 'price',
                    content: tour.price
                  },
                  {
                    elem: 'price',
                    elemMods: { type: 'on-pier' },
                    // content: tour.old_price,
                    content: 'Не реализуется на причале',
                  },
                  {
                    elem: 'buy'
                  },
                ]
              }
            }
          ]
        },
        {
          elem: 'section',
          content: [
            {
              elem: 'content',
              content: [
                {
                  elem: 'description',
                  content: {
                    html: tour.content
                  }
                }
              ]
            },
            {
              elem: 'aside',
              content: [
                {
                  elem: 'gallery',
                  content: [1,2,3,4,5,6].map( () => `http://babeholder.pixoil.com/img/160/1:1/1/?${ node.generateId() }` )
                },
                {
                  elem: 'sight'
                },
                {
                  elem: 'cost',
                  content: [
                    {
                      elem: 'tip',
                      content: 'Незабываемые виды разводных мостов всего за'
                    },
                    {
                      elem: 'price',
                      content: tour.price
                    },
                    {
                      elem: 'price',
                      elemMods: { type: 'on-pier' },
                      // content: tour.old_price,
                      content: 'Не реализуется на причале',
                    },
                    {
                      elem: 'buy'
                    },
                  ]
                }
              ]
            },
          ]
        }
      ]
    }
  ]
} );
