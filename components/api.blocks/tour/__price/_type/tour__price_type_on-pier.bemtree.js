block( 'tour' ).elem( 'price' ).elemMod( 'type', 'on-pier' )(
  match( ( node, ctx ) => !ctx.content ).def()( '' ),
  match( ( node, ctx ) => typeof ctx.content === 'number' ).content()( ( node, ctx ) => `${ ctx.content } ₽ на причале` ),
)
