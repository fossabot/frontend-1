block( 'footer' ).content()( node => {
  let items = [];
  // if ( node.api && node.api.result ) {
  //   items = Object.keys( node.api.result.structure.object[ 61 ].children ).map( id => {
  //     const resource = node.api.result.structure.object[ 61 ].children[ id ];
  //     return {
  //       block: 'link',
  //       url: resource.alias,
  //       text: resource.pagetitle
  //     };
  //   } );
  // }
  return [
    { elem: 'header' },
    {
      elem: 'content',
      content: {
        block: 'list',
        mods: { of: 'compilation' },
        items: items
      }
    },
    {
      elem: 'content',
      content: [
        {
          elem: 'award',
          mix: { block: 'layout' },
          content: [
            {
              block: 'image',
              mix: { block: 'layout', elem: 'aside' },
              width: 64,
              height: 64,
              title: '1-е место',
              url: 'https://nevatrip.ru/assets/img/golden-light.png'
            },
            {
              block: 'layout',
              elem: 'content',
              content: {
                html: 'Лучшая компания 2014 года всероссийской программы «Ты&nbsp;— предприниматель» в&nbsp;Санкт-Петербурге'
              }
            }
          ]
        },
        {
          elem: 'award',
          mix: { block: 'layout' },
          content: [
            {
              block: 'image',
              mix: { block: 'layout', elem: 'aside' },
              width: 64,
              height: 64,
              title: '1-е место',
              url: 'https://nevatrip.ru/assets/img/golden-light.png'
            },
            {
              block: 'layout',
              elem: 'content',
              content: {
                html: '1 место «Молодой предприниматель России 2015» в номинации «Сфера услуг»'
              }
            }
          ]
        },
        {
          elem: 'contacts',
          content: [
            {
              block: 'address',
              content: [
                {
                  elem: 'email',
                  content: 'info@nevatrip.ru'
                },
                {
                  elem: 'phone',
                  content: '8 812 965-34-04'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      elem: 'footer',
      content: [
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
        {
          block: 'menu',
          mods: { view: 'footer' },
          mix: { block: node.block, elem: 'menu' },
          content: [
            {
              elem: 'item',
              elemMods: {
                type: 'link'
              },
              content: {
                block: 'link',
                url: '/#about',
                content: 'О нас'
              }
            },
            {
              elem: 'item',
              elemMods: {
                type: 'link'
              },
              content: {
                block: 'link',
                url: '/oferta',
                content: 'Оферта'
              }
            },
            {
              elem: 'item',
              elemMods: {
                type: 'link'
              },
              content: {
                block: 'link',
                url: '/sotrudnichestvo',
                content: 'Сотрудничество'
              }
            },
            {
              elem: 'item',
              elemMods: {
                type: 'link'
              },
              content: {
                block: 'link',
                url: '//vk.com/neva.trip',
                content: 'Мы в ВКонтакте'
              }
            },
            {
              elem: 'item',
              elemMods: {
                type: 'link'
              },
              content: {
                block: 'link',
                url: '//www.instagram.com/nevatrip.ru/',
                content: 'Instagram'
              }
            },
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
        }
      ],
    },
  ];
} );
