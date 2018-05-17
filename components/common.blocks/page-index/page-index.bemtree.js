block( 'page-index' ).replace()( ( { api: { entities } } ) => {
  return [
    {
      block: 'tour',
      mods: { view: 'promo' },
      tour: entities.tour[ entities.banner[ 1 ].url ]
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
    [ 'day', 'night', 'meteors' ].map( categoryName => {
      const category = entities.resource[ categoryName ];
      const tours = Object.keys( category.children )
        .map( tourId => {
          category.children[ tourId ].menuindex = parseInt( category.children[ tourId ].menuindex );
          return category.children[ tourId ];
        } )
        .sort( ( a, b ) => ( a.menuindex - b.menuindex ) );

      return {
        block: 'category',
        category: category,
        content: {
          block: 'list',
          mods: {
            of: 'tours',
            type: 'unstyled',
          },
          items: tours.map( tourObj => {
            const tour = entities.tour[ category.children[ tourObj.id ].alias ] || {};

            return {
              block: 'tour',
              mods: { view: 'preview' },
              tour: tour,
            }
          } ),
        },
      }
    } )
  ];
} );
