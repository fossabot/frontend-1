block( 'header' )
  .elem( 'menu' )
  .content()( ( node ) => {
  return {
    block: 'page',
    elem: 'content',
    content: {
      block: 'menu',
      mods: { view: 'header' },
      content: [
        {
          elem: 'item',
          elemMods: {
            type: 'link'
          },
          mix: { block: node.block, elem: 'menu-item' },
          content: {
            block: 'link',
            mix: { block: node.block, elem: 'menu-link' },
            url: '/day',
            content: [
              {
                block: node.block,
                elem: 'menu-heading',
                content: 'Дневные экскурсии'
              },
              {
                block: node.block,
                elem: 'menu-subheading',
                content: 'по реками и каналам'
              },
            ]
          }
        },
        {
          elem: 'item',
          elemMods: {
            type: 'link'
          },
          mix: { block: node.block, elem: 'menu-item' },
          content: {
            block: 'link',
            mix: { block: node.block, elem: 'menu-link' },
            url: '/night',
            content: [
              {
                block: node.block,
                elem: 'menu-heading',
                content: 'Ночные прогулки'
              },
              {
                block: node.block,
                elem: 'menu-subheading',
                content: 'под развод мостов'
              },
            ]
          }
        },
        {
          elem: 'item',
          elemMods: {
            type: 'link'
          },
          mix: { block: node.block, elem: 'menu-item' },
          content: {
            block: 'link',
            mix: { block: node.block, elem: 'menu-link' },
            url: '/meteors',
            content: [
              {
                block: node.block,
                elem: 'menu-heading',
                content: 'Метеор'
              },
              {
                block: node.block,
                elem: 'menu-subheading',
                content: 'в Петергоф и пригороды'
              },
            ]
          }
        },
        {
          elem: 'item',
          elemMods: {
            type: 'link'
          },
          mix: { block: node.block, elem: 'menu-item' },
          content: {
            block: 'link',
            mix: { block: node.block, elem: 'menu-link' },
            url: '/arenda-teplokhoda',
            content: [
              {
                block: node.block,
                elem: 'menu-heading',
                content: 'Аренда теплохода'
              },
              {
                block: node.block,
                elem: 'menu-subheading',
                content: 'на свадьбу, корпоратив'
              },
            ]
          }
        },
      ]
    }
  }
} );
