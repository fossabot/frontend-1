block( 'tour' ).elem( 'time' )(
  match( node => node.mods.view === 'cart' && node.elemMods.loaded ).replace()( ( node, ctx ) => {

    return {
      block: 'fieldset',
      mix: { block: node.block, elem: node.elem },
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
                type: 'button',
                width: 'available',
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
          content: ctx.timeLast
            ? `Билет будет действовать в течение дня. Начало движения в ${ ctx.timeFirst }, последний отходит в ${ ctx.timeLast }.`
            : `Теплоход отходит от причала в ${ ctx.timeFirst }.`
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
                options: ctx.options
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
    };
  } ),
);