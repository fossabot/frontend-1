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
        image: 'https://nevatrip.ru/assets/img/e/night/alye-parusa.jpg'
      },
      {
        name: 'Детский теплоход «Спектакль-экскурсия для детей»',
        url: '/day/meropriyatie-dlya-detey',
        image: 'https://nevatrip.ru/assets/img/e/day/meropriyatie-dlya-detey.jpg'
      },
      {
        name: 'Салют с теплохода 9 июля',
        url: '/day/salut-s-borta-teplohoda',
        image: 'https://nevatrip.ru/assets/img/e/day/salut-s-borta-teplohoda.jpg'
      },
      {
        name: 'Врунгель-шоу на Неве',
        url: '/day/vrungel-shou-na-neve',
        image: 'https://nevatrip.ru/assets/img/e/day/vrungel-shou-na-neve.jpg'
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
