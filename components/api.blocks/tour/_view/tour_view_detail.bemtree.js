block( 'tour' ).mod( 'view', 'detail' ).content()( ( node, ctx ) => {
  const tour = ctx.tour;

  return [
    {
      elem: 'image',
      content: `//nevatrip.dev.compaero.ru/${ tour.tv_e_image_1200 }`
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
                  pier: true,
                  vehicle: true,
                  languages: true,
                  'on-vehicle': true,
                  duration: true,
                },
                languages: tour.tv_e_excursion,
                pierStart: tour.tv_e_from,
                pierFinish: tour.tv_e_to,
                duration: tour.tv_e_duration,
                onVehicle: tour.tv_e_on_boat,
              },
            },
            {
              elem: 'aside',
              content: {
                elem: 'cost',
                content: [
                  // {
                  //   elem: 'preprice',
                  //   content: tour.tv_e_price_before
                  // },
                  {
                    elem: 'tickets',
                    content: [
                      {
                        block: 'text',
                        mods: { weight: 'bold' },
                        content: 'Скидки: ',
                      },
                      tour.tv_e_price_before,
                      ' ',
                      'Есть льготный (690 ₽) и детский (450 ₽) билет.',
                      ' ',
                      tour.tv_e_price_after
                    ]
                  },
                  // {
                  //   elem: 'postprice',
                  //   content: tour.tv_e_price_after
                  // },
                  {
                    elem: 'price',
                    content: tour.tv_e_price
                  },
                  {
                    elem: 'price',
                    elemMods: { type: 'on-pier' },
                    content: tour.tv_e_price_on_pier
                  },
                  {
                    elem: 'buy',
                    content: tour.id,
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
                      elem: 'tip',
                      content: tour.tv_e_advice_before
                    },
                    {
                      content: {
                        html: tour.content
                      }
                    },
                    {
                      elem: 'tip',
                      content: tour.tv_e_advice_after
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
                  content: tour.gallery
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
                      content: tour.tv_e_text_before_final_price,
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
                      elem: 'buy',
                      content: tour.id,
                    },
                  ]
                },
                {
                  block: 'heading',
                  mix: { block: node.block, elem: 'heading' },
                  mods: { size: 'xs' },
                  content: 'Другие наши экскурсии:',
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
