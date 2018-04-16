block( 'tour' ).elem( 'gallery' ).replace()( ( node, ctx ) => {
  return [
    {
      block:'heading',
      mods: { size: 's' },
      content: 'Галерея'
    },
    {
      block: 'list',
      mods: {
        of: 'gallery',
        type: 'unstyled',
      },
      items: ctx.content.map( url => {
        return {
          block: 'image',
          mods: { width: 'available' },
          url
        }
      } )
    }
  ]
} );
