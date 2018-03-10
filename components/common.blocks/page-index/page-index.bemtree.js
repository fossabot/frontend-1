block( 'page-index' ).replace()( ( node ) => {
  return [
    {
      block: 'trip',
      mods: { view: 'promo' },
    },
    {
      block: 'list',
      mods: { of: 'icons' },
    },
    {
      block: 'category',
      content: [
        {
          elem: 'header',
          content: 'Заголовок категории',
        },
        {
          elem: 'content',
          content: {
            block: 'list',
            mods: { of: 'trips' },
            items: [
              {
                block: 'trip',
                content: [
                  {
                    elem: 'aside',
                  },
                  {
                    elem: 'content',
                    content: [
                      {
                        elem: 'heading',
                        content: 'Название экскурсии',
                      },
                      {
                        elem: 'features',
                        content: {
                          block: 'list',
                        },
                      },
                      { elem: 'price', mods: { type: 'adult' } },
                      { elem: 'price', mods: { type: 'default' } },
                      { elem: 'show-more' },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          tag: 'pre',
          content: JSON.stringify( node.api.result.tour, null, 2 ),
        }
      ],
    },
  ];
} );
