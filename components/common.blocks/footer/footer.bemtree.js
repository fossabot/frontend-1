block( 'footer' ).content()( node => {
  let items = [];
  if ( node.api && node.api.result && node.api.result.structureTree && node.api.result.structureTree.object ) {
    const compilation = node.api.result.structureTree.object[ 61 ].children;
    items = Object.keys( compilation ).map( id => {
      const resource = compilation[ id ];
      return {
        elem: 'item',
        elemMods: { type: 'link' },
        content: {
          block: 'link',
          url: `/${resource.alias}`,
          content: resource.pagetitle || resource.pagetitle
        },
      };
    } );
  }

  return [
    {
      elem: 'header'
    },
    {
      elem: 'content',
      content: [
        {
          block: 'heading',
          mods: {
            align: 'center',
            size: 'l'
          },
          mix: { block: 'footer', elem: 'heading' },
          content: 'А здесь ещё больше подборок с прогулками и экскурсиями:'
        },

        {
          block: 'menu',
          mods: { view: 'compilation' },
          mix: { block: 'footer', elem: 'compilation' },
          content: [
            ...items,
            ...items,
            ...items,
            ...items,
          ]
        }
      ]
    },
    {
      elem: 'footer',
      content: {
        elem: 'footer-inner',
        mix: { block: 'page', elem: 'content' },
        content: [
          {
            block: 'menu',
            mods: { view: 'footer' },
            mix: { block: node.block, elem: 'menu' },
            content: [
              {
                elem: 'item',
                elemMods: { type: 'link' },
                content: {
                  block: 'link',
                  url: '/#about',
                  content: 'О нас'
                }
              },
              {
                elem: 'item',
                elemMods: { type: 'link' },
                content: {
                  block: 'link',
                  url: '/oferta',
                  content: 'Оферта'
                }
              },
              {
                elem: 'item',
                elemMods: { type: 'link' },
                content: {
                  block: 'link',
                  url: '/sotrudnichestvo',
                  content: 'Сотрудничество'
                }
              },
              // {
              //   elem: 'item',
              //   elemMods: {
              //     type: 'link'
              //   },
              //   content: {
              //     block: 'link',
              //     url: '//vk.com/neva.trip',
              //     content: 'Мы в ВКонтакте'
              //   }
              // },
              // {
              //   elem: 'item',
              //   elemMods: {
              //     type: 'link'
              //   },
              //   content: {
              //     block: 'link',
              //     url: '//www.instagram.com/nevatrip.ru/',
              //     content: 'Instagram'
              //   }
              // },
              {
                elem: 'item',
                elemMods: {
                  type: 'link'
                },
                content: {
                  block: 'link',
                  url: '//moskvatrip.ru',
                  content: 'Прогулки в Москве'
                }
              },
            ]
          },
          {
            elem: 'copyright',
            content: '© 2014-2018'
          },
          {
            block: 'address',
            mix: { block: node.block, elem: 'address' },
            content: {
              elem: 'address',
              content: 'Санкт-Петербург, ул Малая Морская 11'
            }
          },
        ],
      },
    }
  ];
} );
