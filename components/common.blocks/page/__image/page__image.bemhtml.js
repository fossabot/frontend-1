block( 'page' ).elem( 'image' )( {
  addAttrs: ( node, ctx ) => {
    return {
      style: `background-image: url( ${ ctx.url } )`,
    }
  }
} );
