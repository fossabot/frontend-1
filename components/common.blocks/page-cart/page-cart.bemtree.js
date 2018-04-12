block( 'page-cart' ).replace()( ( node ) => {

  const cart = node.api.result.cart.object.cart;

  if ( !node.api.result.cart.object.total_count ) {
    return 'Корзина пуста';
  }

  function leadZero( num ) {
    return num < 10 ? '0' + num : num;
  }

  return [
    {
      block: 'divider'
    },
    {
      elem: 'content',
      elemMods: { width: 'tiny' },
      content: [
        {
          block: 'heading',
          mods: { size: 'xxl' },
          content: 'Купить билет онлайн'
        },
        {
          block: 'layout',
          content: [
            {
              elem: 'content',
              content: Object.keys( cart ).map( key => {
                const tour = cart[ key ].tour;

                if ( !tour ) {
                  return 'Error with tour parsing';
                }

                return {
                  block: 'tour',
                  mods: { view: 'order' },
                  tour: tour,
                  content: [
                    {
                      elem: 'name',
                      content: [
                        'Экскурсия ',
                        {
                          block: 'link',
                          url: tour.uri ? ( tour.uri + '?id=' + tour.id ) : '?',
                          content: tour.longtitle
                        }
                      ]
                    },
                    {
                      elem: 'date',
                      availableDate: tour.trip.object.length && tour.trip.object.map( trip => {
                        let date = new Date();
                        date.setTime( trip.time * 1000 );
                        const day = leadZero( date.getDate() );
                        const month = leadZero( date.getMonth() + 1 );
                        const year = date.getFullYear();
                        
                        return `${ day }.${ month }.${ year }`;
                      } ),
                    },
                    {
                      elem: 'direction',
                      val: 1,
                      content: [
                        {
                          title: 'В одну сторону',
                          group: [
                            {
                              val: 1,
                              text: 'Санкт-Петербург → Петергоф',
                            },
                            {
                              val: 2,
                              text: 'Петергоф → Санкт-Петербург',
                            },
                          ]
                        },
                        {
                          title: 'Туда-обратно',
                          group: [
                            {
                              val: 3,
                              text: 'Санкт-Петербург → Петергоф → Санкт-Петербург',
                            }
                          ]
                        }
                      ]
                    },
                    { elem: 'pier' },
                    { elem: 'time' },
                    { elem: 'tickets' },
                    { elem: 'place' },
                  ]
                };
/*
                return {
                  block: 'tour',
                  mods: { view: 'order' },
                  js: { tourId: tour.id },
                  content: [
                    
                    {
                      block: 'fieldset',
                      content: {
                        block: 'form-field',
                        id: 'pier_start',
                        name: 'pier_start',
                        mods: {
                          type: 'select',
                          required: true,
                          message: 'popup'
                        },
                        directions: ['top-right'],
                        js: {
                          required: { message: 'К какому причалу подать кораблик?' },
                        },
                        content: [
                          {
                            block: 'label',
                            content: 'Причал отправления'
                          },
                          {
                            block: 'select',
                            mods: {
                              mode: 'radio',
                              width: 'available',
                            },
                            val: 1,
                            options: [
                              {
                                val: 1,
                                text: 'Дворцовая набережная',
                              },
                              {
                                val: 2,
                                text: 'Сенатская пристань',
                              },
                            ]
                          }
                        ]
                      },
                    },
                    {
                      block: 'fieldset',
                      content: [
                        {
                          block: 'form-field',
                          id: 'time_type',
                          name: 'time_type',
                          mods: {
                            type: 'radio',
                            required: true,
                            message: 'popup'
                          },
                          content: [
                            {
                              block: 'radio-group',
                              mods: {
                                type: 'button'
                              },
                              val: 1,
                              name: 'radio-button',
                              options: [
                                  {
                                      val: 1,
                                      text: 'Открытое время'
                                  },
                                  {
                                      val: 2,
                                      text: 'Фиксированное'
                                  },
                              ]
                            },
                          ]
                        },
                        {
                          block: 'paragraph',
                          content: 'Билет будет действовать в течение дня. Начало движения в 10:30, последний отходит в 14:35.'
                        },
                        { tag: 'hr' },
                        {
                          block: 'fieldset',
                          content: {
                            block: 'form-field',
                            id: 'time_start',
                            name: 'time_start',
                            mods: {
                              type: 'select',
                              required: true,
                              message: 'popup'
                            },
                            content: [
                              {
                                block: 'label',
                                content: 'Отправление Санкт-Петербург → Петергоф'
                              },
                              {
                                block: 'select',
                                mods: {
                                  mode: 'radio',
                                  width: 'available',
                                },
                                val: 1,
                                options: [
                                  {
                                    val: 1,
                                    text: '14:00 (прибытие в 15:00)',
                                  },
                                  {
                                    val: 2,
                                    text: '15:30 (прибытие в 16:30)',
                                  },
                                  {
                                    val: 3,
                                    text: '17:40 (прибытие в 18:40)',
                                  },
                                  {
                                    val: 4,
                                    text: '18:20 (прибытие в 19:20)',
                                  },
                                ]
                              }
                            ]
                          },
                        },
                        {
                          block: 'fieldset',
                          content: {
                            block: 'form-field',
                            id: 'time_finish',
                            name: 'time_finish',
                            mods: {
                              type: 'select',
                              required: true,
                              message: 'popup'
                            },
                            content: [
                              {
                                block: 'label',
                                content: 'Отправление Петергоф → Санкт-Петербург'
                              },
                              {
                                block: 'select',
                                mods: {
                                  mode: 'radio',
                                  width: 'available',
                                },
                                val: 1,
                                options: [
                                  {
                                    val: 1,
                                    text: '16:00 (прибытие в 17:00)',
                                  },
                                  {
                                    val: 2,
                                    text: '17:20 (прибытие в 18:20)',
                                  },
                                  {
                                    val: 3,
                                    text: '18:20 (прибытие в 19:20)',
                                  },
                                  {
                                    val: 4,
                                    text: '19:00 (прибытие в 20:00)',
                                  },
                                ]
                              }
                            ]
                          },
                        }
                      ]
                    },
                    {
                      block: 'fieldset',
                      legend: 'Билеты',
                      content: [
                        {
                          block: 'form-field',
                          mods: {
                            type: 'input',
                            inline: true,
                          },
                          id: 'adult',
                          name: 'ticket[adult]',
                          content: [
                            {
                              block: 'label',
                              content: 'Взрослый'
                            },
                            {
                              block: 'input',
                              mods: { 'has-counter': true },
                              maxLength: 2,
                              val: 1,
                              placeholder: 0
                            },
                          ]
                        },
                        {
                          block: 'form-field',
                          mods: {
                            type: 'input',
                            inline: true,
                          },
                          id: 'child',
                          name: 'ticket[child]',
                          content: [
                            {
                              block: 'label',
                              content: 'Детский'
                            },
                            {
                              block: 'input',
                              mods: { 'has-counter': true },
                              maxLength: 2,
                              placeholder: 0
                            },
                          ]
                        },
                        {
                          block: 'form-field',
                          mods: {
                            type: 'input',
                            inline: true,
                          },
                          id: 'preferential',
                          name: 'ticket[preferential]',
                          content: [
                            {
                              block: 'label',
                              content: 'Льготовый'
                            },
                            {
                              block: 'input',
                              mods: { 'has-counter': true },
                              maxLength: 2,
                              placeholder: 0
                            },
                          ]
                        },
                      ]
                    },
                    {
                      block: 'fieldset',
                      legend: 'Выбор мест',
                      content: {
                        block: 'form-field',
                        mods: {
                          type: 'checkbox-group',
                        },
                        id: 'place',
                        name: 'place',
                        content: [
                          {
                            block: 'checkbox-group',
                            mods: { type: 'button' },
                            val: [ 22, 36, 50 ],
                            options: [
                              { val: 1, text: 1 },
                              { val: 2, text: 2 },
                              { val: 3, text: 3 },
                              { val: 4, text: 4 },
                              { val: 5, text: 5 },
                              { val: 6, text: 6 },
                              { val: 7, text: 7 },
                              { val: 8, text: 8 },
                              { val: 9, text: 9 },
                              { val: 10, text: 10 },
                              { val: 11, text: 11 },
                              { val: 12, text: 12 },
                              { val: 13, text: 13 },
                              { val: 14, text: 14 },
                              { val: 15, text: 15 },
                              { val: 16, text: 16 },
                              { val: 17, text: 17 },
                              { val: 18, text: 18 },
                              { val: 19, text: 19 },
                              { val: 20, text: 20 },
                              { val: 21, text: 21 },
                              { val: 22, text: 22 },
                              { val: 23, text: 23 },
                              { val: 24, text: 24 },
                              { val: 25, text: 25 },
                              { val: 26, text: 26 },
                              { val: 27, text: 27 },
                              { val: 28, text: 28 },
                              { val: 29, text: 29 },
                              { val: 30, text: 30 },
                              { val: 31, text: 31 },
                              { val: 32, text: 32 },
                              { val: 33, text: 33 },
                              { val: 34, text: 34 },
                              { val: 35, text: 35 },
                              { val: 36, text: 36 },
                              { val: 37, text: 37 },
                              { val: 38, text: 38 },
                              { val: 39, text: 39 },
                              { val: 40, text: 40 },
                              { val: 41, text: 41 },
                              { val: 42, text: 42 },
                              { val: 43, text: 43 },
                              { val: 44, text: 44 },
                              { val: 45, text: 45 },
                              { val: 46, text: 46 },
                              { val: 47, text: 47 },
                              { val: 48, text: 48 },
                              { val: 49, text: 49 },
                              { val: 50, text: 50 },
                              { val: 51, text: 51 },
                              { val: 52, text: 52 },
                              { val: 53, text: 53 },
                              { val: 54, text: 54 },
                              { val: 55, text: 55 },
                            ]
                          }
                        ]
                      }
                    }
                  ]
                };
*/
              } )
            },
            {
              elem: 'content',
              content: [
                {
                  block: 'form',
                  mods: {
                    view: 'cart',
                    'has-validation': true,
                    message: 'popup',
                  },
                  directions: ['right-top'],
                  method: 'post'
                },
              ]
            },
          ]
        },
        {
          block: 'paragraph',
          content: 'Оплата билетов осуществляется через сервис Яндекс.Касса. Это современный и абсолютно безопасный метод. Контактные данные конфиденциальны и используются только для связи по данной прогулке.'
        },
        {
          block: 'paragraph',
          content: 'Вы можете осуществить покупку без комиссии любым удобным вам способом внесения платежа. Обратите внимание, что Выбор оплаты наличными не бронирует для вас места, они будут забронированы только после осуществления оплаты. При оплате наличными через Связной, Евросеть и Сбербанк комиссия 0%.'
        },
        {
          block: 'paragraph',
          content: [
            'Осуществление оплаты означает Ваше согласие ',
            {
              block: 'link',
              url: '/oferta',
              target: '_blank',
              content: 'с правилами покупки билета'
            },
            '. Возврат билетов по инициативе клиентов более, чем за 24 часа - комиссия платежной системы 5% от суммы заказа и 25 рублей за банковский перевод при возврате, менее 24 часов - 50% от стоимости билетов и 25 рублей, менее 12 часов - 100%.'
          ]
        },
        {
          block: 'paragraph',
          content: 'После оплаты нажмите "Вернуться в магазин". Вы будете перенаправлены на страницу с вашим номером билета. Пожалуйста, запишите его. Ваш электронный билет также будет отправлен вам на электронную почту, которую вы укажете на данной странице. По этому билету вы сможете осуществить посадку на теплоход.'
        },
        {
          block: 'paragraph',
          content: 'Если у вас возникли вопросы по покупке билета, пожалуйста, позвоните в нашу круглосуточную службу поддержки и мы обязательно поможем Вам.'
        }
      ]
    }
  ];
} );
