block( 'tour' ).elem( 'similar' ).replace()( () => {
  return {
    block: 'list',
    mods: {
      of: 'similar',
      type: 'unstyled'
    },
    items: [
      {
        name: 'Алые Паруса на теплоходе со стороны Троицкого моста 2018',
        url: '/night/alye-parusa',
        image: 'https://nevatrip.ru/assets/img/e/night/alye-parusa.jpg',
        tv_e_price: 250,
        tv_e_price_on_pier: 350,
      },
      {
        name: 'Детский теплоход «Спектакль-экскурсия для детей»',
        url: '/day/meropriyatie-dlya-detey',
        image: 'https://nevatrip.ru/assets/img/e/day/meropriyatie-dlya-detey.jpg',
        tv_e_price: 340,
        tv_e_price_on_pier: 'не реализуется на причале'
      },
      {
        name: 'Салют с теплохода 9 июля',
        url: '/day/salut-s-borta-teplohoda',
        image: 'https://nevatrip.ru/assets/img/e/day/salut-s-borta-teplohoda.jpg',
        tv_e_price: 430,
        tv_e_price_on_pier: 530,
      },
      {
        name: 'Врунгель-шоу на Неве',
        url: '/day/vrungel-shou-na-neve',
        image: 'https://nevatrip.ru/assets/img/e/day/vrungel-shou-na-neve.jpg',
        tv_e_price: 520,
        tv_e_price_on_pier: 620,
      },
    ].map( tour => {
      return {
        block: 'tour',
        mods: { view: 'short' },
        tour
      }
    } )
  }
} );
