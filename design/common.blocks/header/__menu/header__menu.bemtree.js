block( 'header' )
  .elem( 'menu' )
  .content()( () => {
  return {
    block: 'navigation',
    mods: { view: 'header' },
    mix: { block: 'page', elem: 'content' },
    content: {
      block: 'list',
      mods: { type: 'unstyled' },
      mix: { block: 'navigation', elem: 'list' },
      content: [
        {
          heading: 'Дневные экскурсии',
          subheading: 'по реками и каналам',
        },
        {
          heading: 'Ночные прогулки',
          subheading: 'под развод мостов',
        },
        {
          heading: 'Метеор',
          subheading: 'в Петергоф и пригороды',
        },
        {
          heading: 'Аренда теплохода',
          subheading: 'на свадьбу, корпоратив',
        },
      ].map( ( link ) => {
        return {
          elem: 'item',
          mix: { block: 'navigation', elem: 'item' },
          content: {
            block: 'button',
            mods: {
              type: 'link',
              width: 'available',
            },
            mix: { block: 'navigation', elem: 'link' },
            url: '#',
            text: [
              {
                block: 'navigation',
                elem: 'subheading',
                content: link.heading,
              },
              {
                block: 'navigation',
                elem: 'subheading',
                content: link.subheading,
              },
            ],
          },
        };
      } ),
    },
  };
} );
