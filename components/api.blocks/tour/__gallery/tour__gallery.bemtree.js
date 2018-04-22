block( 'tour' ).elem( 'gallery' ).content()( ( node, ctx ) => {
  const gallery = {};
  ctx.content.forEach( galleryItem => {
    gallery[ galleryItem.name ] = gallery[ galleryItem.name ] || {};
    gallery[ galleryItem.name ][ galleryItem.path ] = galleryItem;
  } )

  // todo: use gallery;
  
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
      mix: { block: 'gallery', js: true },
      items: ctx.content
        .filter( galleryItem => /120x90/.test( galleryItem.path ) )
        .map( ( { url, description } ) => {
          return {
            block: 'gallery',
            elem: 'item',
            tag: 'figure',
            attrs: {
              itemscope: true,
              itemprop: 'associatedMedia',
              itemtype: 'http://schema.org/ImageObject',
            },
            content: [
              {
                block: 'link',
                mods: { pseudo : true },
                mix: { block: 'gallery', elem: 'link' },
                url: `//nevatrip.dev.compaero.ru/assets/images/resources${ url }`,
                target: '_blank',
                attrs: {
                  itemprop: 'contentUrl',
                },
                js: {
                  size: '1920x1280'
                },
                title: description,
                content: {
                  block: 'image',
                  mods: { width: 'available' },
                  mix: { block: 'gallery', elem: 'thumbnail' },
                  attrs: {
                    itemprop: 'thumbnail'
                  },
                  title: description,
                  url: `//nevatrip.dev.compaero.ru/assets/images/resources${ url }`
                }
              },
              {
                elem: 'description',
                mix: { block: 'visually-hidden' },
                tag: 'figcaption',
                attrs: {
                  itemprop: 'caption description'
                },
                content: description,
              }
            ]
          };
      } )
    }
  ]
} );
