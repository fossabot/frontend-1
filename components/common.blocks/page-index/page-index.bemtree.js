block( 'page-index' ).replace()( ( node ) => {
  return [
    {
      block: 'tour',
      mods: { view: 'promo' },
      tour: node.api.entities.tour[ node.api.entities.banner[ 1 ].url ]
    },
    {
      block: 'list',
      mods: {
        of: 'icons',
        type: 'unstyled',
      },
      mix: { block: 'page', elem: 'content' },
      items: [
        [
          {
            block: 'image',
            mix: { block: 'list', elem: 'icon' },
            url: 'http://via.placeholder.com/40x40'
          },
          {
            block: 'paragraph',
            mods: {
              align: 'center',
              size: 'l',
            },
            mix: { block: 'list', elem: 'description' },
            content: 'Самые выгодные цены'
          }
        ],
        [
          {
            block: 'image',
            mix: { block: 'list', elem: 'icon' },
            url: 'http://via.placeholder.com/40x40'
          },
          {
            block: 'paragraph',
            mods: {
              align: 'center',
              size: 'l',
            },
            mix: { block: 'list', elem: 'description' },
            content: 'Покупка в 2 клика'
          }
        ],
        [
          {
            block: 'image',
            mix: { block: 'list', elem: 'icon' },
            url: 'http://via.placeholder.com/40x40'
          },
          {
            block: 'paragraph',
            mods: {
              align: 'center',
              size: 'l',
            },
            mix: { block: 'list', elem: 'description' },
            content: 'Электронный билет с открытым временем'
          }
        ],
        [
          {
            block: 'image',
            mix: { block: 'list', elem: 'icon' },
            url: 'http://via.placeholder.com/40x40'
          },
          {
            block: 'paragraph',
            mods: {
              align: 'center',
              size: 'l',
            },
            mix: { block: 'list', elem: 'description' },
            content: 'Лучшие маршруты от теплоходных компаний'
          }
        ],
      ]
    },
    [ 'day', 'night', 'meteors' ].map( category => {
      const categoryObject = node.api.entities.structureFlat[ category ];
      const categoryId = categoryObject.id;
      const categoryTitle = categoryObject.pagetitle;
      const categoryChildren = node.api.result.structureTree.object[ categoryId ].children;
      const tours = Object.keys( categoryChildren );

      return {
        block: 'category',
        category: categoryObject,
        content: [
          {
            elem: 'header',
            attrs: {
              style: `background-image: url('https://nevatrip.ru/assets/img/e/${ categoryObject.alias }/bg.jpg')`
            },
            content: {
              elem: 'name',
              content: categoryTitle,
              url: categoryObject.alias,
            },
          },
          {
            elem: 'content',
            content: {
              block: 'list',
              mods: {
                of: 'tours',
                type: 'unstyled',
              },
              items: tours.map( tourId => {
                const tour = node.api.entities.tour[ tourId ] || {};

                return {
                  block: 'tour',
                  mods: { view: 'preview' },
                  tour: tour,
                }
              } ),
            },
          },
        ],

      }
    } )
  ];
} );
