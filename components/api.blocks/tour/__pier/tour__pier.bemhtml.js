block( 'tour' ).elem( 'pier' )(
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
        id: 'pier',
        name: 'pier',
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
              disabled: true,
            },
            val: ctx.val || 0,
            options: ctx.content || [{
              val: 0,
              text: 'Загрузка…'
            }],
          }
        ]
      },
    }
  } )
)
