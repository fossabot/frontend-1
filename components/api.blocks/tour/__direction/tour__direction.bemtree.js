block( 'tour' ).elem( 'direction' )(
  match( node => node.mods.view === 'order' ).replace()( ( node, ctx ) => {
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
            },
            directions: ['top-right'],
            js: {
              required: { message: 'Кажется, вы сделали невозможное — попытались отправить заказ, не выбрав направление поездки' },
            },
            val: ctx.val,
            options: ctx.content
          }
        ]
      },
    }
  } )
)
