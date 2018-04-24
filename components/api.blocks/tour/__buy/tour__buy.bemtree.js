block( 'tour' ).elem( 'buy' ).replace()( ( node, ctx ) => {
  return {
    block: 'form',
    action: '/buy-tickets',
    method: 'post',
    content: [
      {
        tag: 'input',
        attrs: {
          name: '_csrf',
          type: 'hidden',
          value: node.data.csrf,
        }
      },
      {
        tag: 'input',
        attrs: {
          name: 'id',
          type: 'hidden',
          value: ctx.content,
        }
      },
      {
        tag: 'input',
        attrs: {
          name: 'options[ticket][adult]',
          type: 'hidden',
          value: 1,
        }
      },
      {
        block: 'button',
        mods: {
          type: 'submit',
          view: 'action',
          size: 'xl'
        },
        name: 'action',
        val: 'cart/add',
        mix: { block: node.block, elem: node.elem },
        text: 'Купить'
      }
    ]
  }
} );
