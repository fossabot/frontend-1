block( 'tour' ).elem( 'features' )(
  match( ( node, ctx ) => !ctx.content ).def()( '' ),

  match( ( node, ctx ) => ctx.content ).replace()( ( node, { content, route } ) => {

    if ( node.elemMods.languages ) {
      content.push( [
        {
          block: 'text',
          mods: {
            weight: 'bold'
          },
          content: 'Язык экскурсии'
        },
        ': 🇨🇷 🇾🇪 🇱🇾'
      ] );
    }

    if ( node.elemMods['on-vehicle'] ) {
      content.push( [
        {
          block: 'text',
          mods: {
            weight: 'bold'
          },
          content: 'На борту'
        },
        ': туалет, сопроводительная экскурсия.'
      ] );
    }

    if ( node.elemMods.vehicle ) {
      content.push( [
        {
          block: 'text',
          mods: {
            weight: 'bold'
          },
          content: 'Теплоход'
        },
        ': комфортабельный отапливаемый двухпалубный теплоход с закрытой и открытой палубой класса «Москва».'
      ] );
    }

    if ( node.elemMods.route ) {
      content.push( {
        tag: 'details',
        block: 'details',
        content: [
          {
            elem: 'summary',
            tag: 'summary',
            content: 'Посмотреть маршрут прогулки'
          },
          {
            content: {
              html: route
            }
          }
        ]
      } );
    }

    return {
      block: 'list',
      mods: {
        type: 'circle',
        of: 'features'
      },
      mix: { block: node.block, elem: node.elem },
      items: content
    }
  } ),
)
