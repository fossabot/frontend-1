block( 'form' ).mod( 'view', 'cart' ).content()( ( node ) => {
  return [
    {
      elem: 'content',
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
          id: 'receiver',
          name: 'receiver',
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
          id: 'payment',
          name: 'payment',
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
                mods: { type: 'block' },
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
              },
              val: '123',
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
      ]
    },
    {
      elem: 'footer',
      content: [
        {
          block: 'button',
          mods: {
            type: 'submit',
            view: 'action',
            size: 'xl',
          },
          mix: { block: node.block, elem: 'submit' },
          name: 'action',
          val: 'order/add',
          text: 'Перейти к оплате'
        },
        {
          block: 'form-field',
          mods: {
            type: 'input'
          },
          name: 'action',
          content: {
            block: 'input',
            mods: { type: 'hidden' },
            val: 'order/add'
          }
        },
        {
          block: 'form-field',
          mods: {
            type: 'input',
            message: 'popup'
          },
          name: '_csrf',
          content: {
            block: 'input',
            mods: { type: 'hidden' },
            val: node.data.csrf
          }
        },
      ]
    }
  ]
} );
