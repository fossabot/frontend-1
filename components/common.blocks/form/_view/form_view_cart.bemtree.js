block( 'form' ).mod( 'view', 'cart' ).content()( ( node ) => {
  const cart = node.api.result.cart.object.cart;

  if ( !node.api.result.cart.object.total_count ) {
    return 'Корзина пуста';
  }

  function leadZero( num ) {
    return num < 10 ? '0' + num : num;
  }

  const currentDate = new Date();
  const day = leadZero( currentDate.getDate() );
  const month = leadZero( currentDate.getMonth() + 1 );
  const year = currentDate.getFullYear();
  const today = `${ day }.${ month }.${ year }`;

  return [
    {
      tag: 'input',
      attrs: {
        type: 'hidden',
        name: '_csrf',
        val: node.data.csrf
      },
    },
    {
      elem: 'content',
      content: [
        {
          elem: 'section',
          content: Object.keys( cart ).map( key => {
            const tour = cart[key].tour;

            if ( !tour ) {
              return 'Error with tour parsing';
            }

            return {
              block: 'cart',
              content: [
                {
                  block: 'h4',
                  tag: 'h2',
                  content: [
                    'Экскурсия ',
                    {
                      block: 'link',
                      url: tour.uri ? ( tour.uri + '?id=' + tour.id ) : '?',
                      content: tour.longtitle
                    }
                  ]
                },
                { // TODO: БЭМ-форма не видит данные в getVal(). Перенести в form-field?
                  tag: 'input',
                  attrs: {
                    type: 'hidden',
                    name: 'id',
                    val: tour.id
                  },
                },
                {
                  block: 'fieldset',
                  content: {
                    block: 'form-field',
                    id: 'date',
                    name: 'date',
                    mods: {
                      type: 'input',
                      required: true,
                      message: 'popup'
                    },
                    directions: ['top-right'],
                    js: {
                      required: { message: 'Пф-ф-ф-ф-ф! Братан, как мы без даты тебе будем экскурсию подбирать?' },
                    },
                    content: [{
                        block: 'label',
                        content: 'Выберите дату рейса'
                      },
                      {
                        block: 'input',
                        mods: {
                          'has-calendar': true,
                          width: 'available',
                          // type: 'date'
                        },
                        weekdays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
                        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                        val: today
                      }
                    ]
                  },
                },
/*
                {
                  block: 'fieldset',
                  content: {
                    block: 'form-field',
                    id: 'direction',
                    name: 'direction',
                    mods: {
                      type: 'select',
                      required: true,
                      message: 'popup'
                    },
                    content: [{
                        block: 'label',
                        content: 'Направление'
                      },
                      {
                        block: 'select',
                        mods: {
                          mode: 'radio',
                          width: 'available',
                        },
                        directions: ['top-right'],
                        js: {
                          required: { message: 'Кажется, вы сделали невозможное — попытались отправить заказ, не выбрав направление поездки' },
                        },
                        val: 1,
                        options: [
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
                      }
                    ]
                  },
                },
*/
/*
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
*/
/*
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
*/
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
/*
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
*/
              ]
            };
          } )
        },
        {
          elem: 'section',
          content: [
            {
              block: 'form-field',
              id: 'email',
              name: 'email',
              mods: {
                type: 'input',
                required: true,
                validate: 'email',
                message: 'popup'
              },
              directions: ['top-right'],
              js: {
                required: { message: 'А куда же мы отправим билет и чек?' },
                email: { message: 'Это как-то не похоже на адрес электронной почты. Упрлс?' },
              },
              content: [
                {
                  block: 'label',
                  content: 'Email'
                },
                {
                  block: 'input',
                  mods: {
                    type: 'email',
                    width: 'available'
                  },
                  val: 'nevatrip@romanganin.ru',
                }
              ]
            },
            {
              block: 'form-field',
              id: 'name',
              name: 'name',
              mods: {
                type: 'input',
                required: true,
                message: 'popup'
              },
              directions: ['top-right'],
              js: {
                required: { message: 'От кого шифруешься, фраерок?' },
              },
              content: [
                {
                  block: 'label',
                  content: 'Фамилия и имя'
                },
                {
                  block: 'input',
                  mods: {
                    width: 'available'
                  },
                  val: 'Roman'
                }
              ]
            },
            {
              block: 'form-field',
              id: 'phone',
              name: 'phone',
              mods: {
                type: 'input',
                required: true,
                message: 'popup'
              },
              directions: ['top-right'],
              js: {
                required: { message: 'А если что не так пойдёт? Маловероятно, конечно, но а вдруг, куда звонить?' },
              },
              content: [
                {
                  block: 'label',
                  content: 'Номер мобильного телефона'
                },
                {
                  block: 'input',
                  mods: {
                    type: 'phone',
                    width: 'available'
                  },
                  placeholder: '+7 9×× ×××-××-××',
                  val: '+79216556291'
                }
              ]
            },
            {
              block: 'form-field',
              id: 'payment-type',
              name: 'payment-type',
              mods: {
                type: 'radio-group',
                required: true,
                message: 'popup'
              },
              content: [
                {
                  block: 'label',
                  content: 'Вариант оплаты'
                },
                {
                    block: 'radio-group',
                    val: 1,
                    options: [
                      {
                        val: 1,
                        text: [
                          {
                            block: 'text',
                            mods: { bold: true },
                            content: 'Банковской картой'
                          }
                        ]
                      },
                      {
                        val: 2,
                        text: [
                          'Из кошелька в ',
                          {
                            block: 'text',
                            mods: { bold: true },
                            content: 'Яндекс.Деньгах'
                          }
                        ]
                      },
                      {
                        val: 3,
                        text: [
                          {
                            block: 'text',
                            mods: { bold: true },
                            content: 'Наличными'
                          },
                          ' через Сбербанк, Связной и терминалы'
                        ]
                      }
                    ]
                }
              ]
            },
            {
              block: 'form-field',
              id: 'promocode',
              name: 'promocode',
              mods: {
                type: 'input',
                message: 'popup'
              },
              content: [
                {
                  block: 'label',
                  content: 'Промокод (если есть)'
                },
                {
                  block: 'input',
                  mods: {
                    width: 'available'
                  }
                }
              ]
            },
            {
              elem: 'sum',
              mods: { size: 'xl' },
              content: [
                'Итого к оплате: ',
                node.api.result.cart.object.total_cost,
                ' руб.'
              ]
            },
            {
              block: 'form-field',
              id: 'disclaimer',
              name: 'disclaimer',
              mods: {
                type: 'checkbox',
                required: true,
                message: 'popup'
              },
              directions: ['top-right'],
              js: {
                required: { message: 'Жмакни галочку по-братски…' },
              },
              content: [
                {
                  block: 'checkbox',
                  mods: {
                    checked: true
                  },
                  val: 'agree',
                  text: [
                    'Я согласен(на) с ',
                    {
                      block: 'link',
                      url: '/offerta',
                      target: '_blank',
                      title: 'Открыть пользовательское соглашение в новой вкладке',
                      content: 'пользовательским соглашением'
                    },
                    ' и даю своё согласие на обработку моих персональных данных.'
                  ]
                }
              ]
            },
            {
              block: 'button',
              mods: {
                type: 'submit',
                view: 'action',
                size: 'xl',
              },
              mix: { block: node.block, elem: 'submit' },
              text: 'Перейти к оплате'
            }
          ]
        }
      ]
    },
  ]
} );
