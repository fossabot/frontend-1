block( 'footer' )
  .elem( 'header' )
  .content()( () => {
  return [
    {
      elem: 'award',
      content: [
        {
          block: 'image',
          mods: { width: 'available' },
          mix: { block: 'footer', elem: 'award-icon' },
          width: 500,
          height: 459,
          title: '1-е место',
          url: 'https://nevatrip.ru/assets/img/golden-light.png'
        },
        {
          elem: 'award-description',
          content: {
            html: 'Лучшая компания 2014&nbsp;года всероссийской программы «Ты&nbsp;— предприниматель» в&nbsp;Санкт-Петербурге'
          }
        }
      ]
    },
    {
      elem: 'award',
      content: [
        {
          block: 'image',
          mods: {
            width: 'available'
          },
          mix: { block: 'footer', elem: 'award-icon' },
          width: 500,
          height: 459,
          title: '1-е место',
          url: 'https://nevatrip.ru/assets/img/golden-light.png'
        },
        {
          elem: 'award-description',
          content: {
            html: '1 место «Молодой предприниматель России 2015» в номинации «Сфера&nbsp;услуг»'
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
  ];
} );
