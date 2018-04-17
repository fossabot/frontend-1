block( 'tour' ).elem( 'gallery' ).content()( ( node, ctx ) => {
  return [
    {
      block: 'heading',
      mix: { block: node.block, elem: 'heading' },
      mods: { size: 's' },
      content: 'Галерея'
    },    
    {
      block: 'list',
      mods: {
        of: 'gallery',
        type: 'unstyled',
      },
      items: ctx.content.map( ( url, index ) => {
        return {
          block: 'link',
          mods: { pseudo : true },
          mix: { block: 'list', elem: 'preview' },
          url: `${ url }/1920/1280/1/?${ index }`,
          target: '_blank',
          content: {
            block: 'image',
            mods: { width: 'available' },
            url: `${ url }/160/160/1/?${ index }`
          }
        }
      } )
    }
  ]
} );
