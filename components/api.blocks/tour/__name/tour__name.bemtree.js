block( 'tour' ).elem( 'name' )(
  replace()( ( node, { content } ) => {
    return {
      block: 'heading',
      mods: { size: 'l' },
      mix: { block: node.block, elem: node.elem },
      content
    }
  } ),
  match( ( node, { url } ) => url ).replace()( ( node, { content, url } ) => {
    return {
      block: 'heading',
      mods: { size: 'l' },
      mix: { block: node.block, elem: node.elem },
      content: {
        block: 'link',
        mods: { view: 'text' },
        url,
        content,
      }
    }
  } ),
)
