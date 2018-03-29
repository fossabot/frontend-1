block( 'page-index' ).replace()( ( node ) => {
  return [
    {
      block: 'trip',
      mods: { view: 'promo' },
    },
    {
      block: 'no-list',
      mods: { of: 'icons' },
      content: {
        html: `
          <div class="container">
            <div class="row lead text-center">
              <div class="col-sm-6 col-md-3">
                <p class="text-center text-primary"><i class="fa fa-money fa-2x"></i></p>
                <p>Самые выгодные цены</p>
              </div>
              <div class="col-sm-6 col-md-3">
                <p class="text-center text-primary"><i class="fa fa-credit-card fa-2x"></i></p>
                <p>Покупка в 2 клика</p>
              </div>
              <div class="col-sm-6 col-md-3">
                <p class="text-center text-primary"><i class="fa fa-ticket fa-2x"></i></p>
                <p>Электронный билет с открытым временем</p>
              </div>
              <div class="col-sm-6 col-md-3">
                <p class="text-center text-primary"><i class="fa fa-star fa-2x"></i></p>
                <p>Лучшие маршруты от теплоходных компаний</p>
              </div>
            </div>
          </div>
        `
      }
    },
    [ 'day', 'night', 'meteors' ].map( category => {
      const categoryObject = node.api.entities.structureFlat[ category ];
      const categoryId = categoryObject.id;
      const categoryTitle = categoryObject.pagetitle;
      const categoryChildren = node.api.result.structureTree.object[ categoryId ].children;
      const tours = Object.keys( categoryChildren );

      return {
        block: 'category',
        content: [
          {
            elem: 'header',
            // content: categoryTitle,
            content: {
              html: `
                <div class="img-bg" style="background-image: url('https://nevatrip.ru/assets/img/e/${ categoryObject.alias }/bg.jpg');">
                    <div class="container">
                        <a href="day"><h2 class="alpha-bg" style="color: #312d2d">${ categoryTitle }</h2></a>
                    </div>
                </div>
              `
            }
          },
          {
            elem: 'content',
            content: {
              block: 'list',
              mods: {
                of: 'trips',
                type: 'unstyled'
              },
              cls: 'container',
              items: tours.map( tourId => {
                const tour = node.api.entities.tour[ tourId ];
                console.log( tour.tv_e_points );
                return {
                  html: `
                    <div class="row">
                      <div class="col-sm-5">
                        <a href="/${ categoryObject.alias }/${ tour.alias }?id=${ tour.id }">
                          <img src="https://nevatrip.ru/assets/img/e/${ categoryObject.alias }/${ tour.alias }.jpg" srcset="https://nevatrip.ru/assets/img/e/${ categoryObject.alias }/${ tour.alias }_x2.jpg 2x" alt="${ tour.longtitle }" class="img-responsive h3 img-rounded img-item">
                        </a>
                      </div>
                      <div class="col-sm-6">
                        <a href="/${ categoryObject.alias }/${ tour.alias }?id=${ tour.id }" class="h3"><h3>${ tour.longtitle || tour.pagetitle }</h3></a>
                        <ul class="fa-ul">
                          ${ tour.tv_e_points ? tour.tv_e_points.split( '\r\n' ).map( point => '<li><i class="fa-li fa fa-chevron-down text-warning"></i>&nbsp;<span class="lead">' + point + '</span></li>' ).join( '' ) : '' }
                        </ul>
                        <div class="clearfix" style="margin-bottom: 14px;">
                          <div class="pull-left">
                            <span class="price">1490 <i class="fa fa-rub fa-xs"></i></span>
                            <small class="sub-price">2000 <i class="fa fa-rub fa-xs"></i> на причале</small>
                          </div>
                          &nbsp; &nbsp;
                          <a href="/${ categoryObject.alias }/${ tour.alias }?id=${ tour.id }" class="btn btn-warning btn-lg">Подробнее  →</a>
                        </div>
                      </div>
                    </div>
                  `
                };

                // return {
                //   block: 'trip',
                //   content: [
                //     {
                //       elem: 'aside',
                //     },
                //     {
                //       elem: 'content',
                //       content: [
                //         {
                //           elem: 'heading',
                //           content: tour.pagetitle,
                //         },
                //         // {
                //         //   elem: 'features',
                //         //   content: {
                //         //     block: 'list',
                //         //   },
                //         // },
                //         // { elem: 'price', mods: { type: 'adult' } },
                //         // { elem: 'price', mods: { type: 'default' } },
                //         // { elem: 'show-more' },
                //       ],
                //     },
                //   ],
                // }
              } ),
            },
          },
        ],

      }
    } )
  ];
} );
