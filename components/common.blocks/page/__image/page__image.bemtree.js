block( 'page' ).elem( 'image' )( {
  content: ( node, ctx ) => {
    return {
      elem: 'content',
      content: {
        elem: 'name',
        content: ctx.content
      }
    }
  }
} );