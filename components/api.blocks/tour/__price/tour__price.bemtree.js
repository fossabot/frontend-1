block( 'tour' ).elem( 'price' )(
  match( ( node, ctx ) => !ctx.content ).def()( '' ),
  match( ( node, ctx ) => typeof ctx.content === 'number' ).content()( ( node, ctx ) => `${ ctx.content } ₽` ),
)
