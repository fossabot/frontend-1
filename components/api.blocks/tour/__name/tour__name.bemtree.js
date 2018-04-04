block( 'tour' ).elem( 'name' )(
  match( node => node.mods.view === 'order' ).replace()( ( node, ctx ) => {
    return {
      block: 'heading',
      mods: { size: 'l' },
      mix: { block: node.block, elem: node.elem },
      content: ctx.content
    }
  } )
)
