block( 'tour' ).elem( 'direction' )(
  match( node => node.mods.view === 'cart' && node.elemMods.loaded ).replace()( ( node, ctx ) => {
    return {
      block: 'fieldset',
      mix: { block: node.block, elem: node.elem },
      content: {
        block: 'form-field',
        mods: {
          type: 'select',
          required: true,
          message: 'popup'
        },
        directions: [ 'top-right' ],
        js: {
          required: { message: 'Кажется, вы сделали невозможное — попытались отправить заказ, не выбрав направление поездки' },
        },
        id: 'direction',
        name: 'direction',
        content: [
          {
            block: 'label',
            content: 'Направление'
          },
          {
            block: 'select',
            mods: {
              mode: 'radio',
              width: 'available',
              disabled: true,
            },
            // val: 1,
            val: ctx.val || 0,
            // options: [
            //   {
            //     title: 'В одну сторону',
            //     group: [
            //       {
            //         val: 1,
            //         text: 'Санкт-Петербург → Петергоф',
            //       },
            //       {
            //         val: 2,
            //         text: 'Петергоф → Санкт-Петербург',
            //       },
            //     ]
            //   },
            //   {
            //     title: 'Туда-обратно',
            //     group: [
            //       {
            //         val: 3,
            //         text: 'Санкт-Петербург → Петергоф → Санкт-Петербург',
            //       }
            //     ]
            //   }
            // ]
            options: ctx.content || [ { val: 0, text: 'Загрузка…' } ],
          }
        ]
      },
    }
  } )
)
