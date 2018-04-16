block( 'tour' ).elem( 'image' )(
  match( ( node, ctx ) => ctx.url ).replace()( ( node, { content, url } ) => {
    return {
      block: 'link',
      mods: { view: 'text' },
      mix: { block: node.block, elem: node.elem },
      url,
      content: {
        block: 'image',
        mods: {
          rounded: true,
          width: 'available'
        },
        url: content
      }
    }
  } ),

  replace()( ( node, { content } ) => {
    return {
      block: 'image',
      mods: {
        width: 'available'
      },
      mix: { block: node.block, elem: node.elem },
      url: content
    }
  } ),
)