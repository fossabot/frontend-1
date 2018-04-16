block( 'page-index' ).replace()( ( node ) => {
  console.log( node.api.entities.banner[ 1 ] );
  return [
    {
      block: 'tour',
      mods: { view: 'promo' },
      tour: node.api.entities.tour[ node.api.entities.banner[ 1 ].url ]
    },
    // {
    //   block: 'list',
    //   mods: { of: 'icons' },
    //   content: {
    //     html: `
    //       <div class="container">
    //         <div class="row lead text-center">
    //           <div class="col-sm-6 col-md-3">
    //             <p class="text-center text-primary"><i class="fa fa-money fa-2x"></i></p>
    //             <p>Самые выгодные цены</p>
    //           </div>
    //           <div class="col-sm-6 col-md-3">
    //             <p class="text-center text-primary"><i class="fa fa-credit-card fa-2x"></i></p>
    //             <p>Покупка в 2 клика</p>
    //           </div>
    //           <div class="col-sm-6 col-md-3">
    //             <p class="text-center text-primary"><i class="fa fa-ticket fa-2x"></i></p>
    //             <p>Электронный билет с открытым временем</p>
    //           </div>
    //           <div class="col-sm-6 col-md-3">
    //             <p class="text-center text-primary"><i class="fa fa-star fa-2x"></i></p>
    //             <p>Лучшие маршруты от теплоходных компаний</p>
    //           </div>
    //         </div>
    //       </div>
    //     `
    //   }
    // },
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
