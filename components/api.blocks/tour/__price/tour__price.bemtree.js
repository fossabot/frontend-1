block( 'tour' ).elem( 'price' )(
  match( ( node, ctx ) => !ctx.content ).def()( '' ),
  content()( ( node, ctx ) => {
    return {
      html: ctx.content
    }
  } ),
  match( ( node, ctx ) => /^\d+$/.test( ctx.content ) ).content()( ( node, ctx ) => `${ ctx.content } ₽` ),
)
