block( 'page-index' ).replace()( ( node ) => {
  console.log( node.api.entities );
  return [
    {
      block: 'trip',
      mods: { view: 'promo' },
    },
    {
      block: 'list',
      mods: { of: 'icons' },
    },
    [ 'day', 'night', 'meteors' ].map( category => {
      const categoryObject = node.api.entities.structureFlat[ category ];
      const categoryId = categoryObject.id;
      const categoryTitle = categoryObject.pagetitle;
      const categoryChildren = node.api.result.structureTree.object[ categoryId ].children;
      const tours = Object.keys( categoryChildren ).map( tourId => {
        console.log( tourId );
        return []
      } );

      return {
        block: 'category',
        content: [
          {
            elem: 'header',
            content: categoryTitle,
          },
          {
            elem: 'content',
            content: {
              block: 'list',
              mods: { of: 'trips' },
              items: tours.map( tour => {
                console.log( tour );
                return {
                  block: 'trip',
                  content: [
                    {
                      elem: 'aside',
                    },
                    {
                      elem: 'content',
                      content: [
                        // {
                        //   elem: 'heading',
                        //   content: tour.pagetitle,
                        // },
                        // {
                        //   elem: 'features',
                        //   content: {
                        //     block: 'list',
                        //   },
                        // },
                        // { elem: 'price', mods: { type: 'adult' } },
                        // { elem: 'price', mods: { type: 'default' } },
                        // { elem: 'show-more' },
                      ],
                    },
                  ],
                }                
              } ),
            },
          },
        ],

      }
    } )
  ];
} );
