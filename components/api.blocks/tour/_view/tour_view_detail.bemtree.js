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
                  // route: true
                },
                route: tour.tv_e_map,
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
                  tag: 'details',
                  block: 'details',
                  content: [
                    {
                      elem: 'summary',
                      tag: 'summary',
                      content: 'Посмотреть маршрут прогулки'
                    },
                    {
                      content: {
                        html: tour.tv_e_map
                      }
                    }
                  ]
                },
                {
                  elem: 'description',
                  content: [
                    {
                      block: 'heading',
                      mix: { block: node.block, elem: 'heading' },
                      mods: { size: 's' },
                      content: 'Об экскурсии'
                    },
                    {
                      content: {
                        html: tour.content
                      }
                    },
                    {
                      elem: 'route',
                      content: {
                        html: tour.tv_e_map
                      }
                    }
                  ]
                }
              ]
            },
            {
              elem: 'aside',
              content: [
                {
                  elem: 'gallery',
                  content: [ 1, 2, 3, 4, 5, 6].map( () => `http://babeholder.pixoil.com/img/` )
                },
                {
                  elem: 'sight',
                  content: [
                    'Зимний Дворец (Эрмитаж)',
                    'Стрелка В.О.',
                    'Петропавловская крепость',
                    'Летний сад',
                    'Летний дворец Петра I',
                    'Чижик-Пыжик',
                    'Мариинский театр',
                    'Инженерный замок',
                    'Цирк',
                    'Шереметьевский дворец',
                    'Аничков Мост',
                    'Юсуповский дворец',
                    'Музей-усадьба Державина',
                    'Собор Св. Николая',
                    'Исаакиевский собор',
                    'Строгановский дворец',
                    'Мраморный дворец',
                  ]
                },
                {
                  elem: 'cost',
                  content: [
                    {
                      block: 'heading',
                      mix: { block: node.block, elem: 'heading' },
                      mods: { size: 's' },
                      // content: tour.tip
                      content: 'Незабываемые виды разводных мостов всего за:'
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
                },
                {
                  block: 'heading',
                  mix: { block: node.block, elem: 'heading' },
                  mods: { size: 'xs' },
                  content: 'Другие наши экскурсии:'
                },
                {
                  elem: 'similar',
                }
              ]
            },
          ]
        }
      ]
    }
  ]
} );
