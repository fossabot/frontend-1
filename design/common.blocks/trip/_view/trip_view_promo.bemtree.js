block( 'trip' )
  .mod( 'view', 'promo' )
  .content()( () => {
  return {
    elem: 'section',
    elemMods: { content: 'content' },
    mix: { block: 'page', elem: 'content' },
    content: {
      elem: 'content',
      content: [
        { elem: 'heading' },
        { elem: 'features' },
        {
          elem: 'section',
          elemMods: { content: 'actions' },
          content: [
            {
              elem: 'section',
              elemMods: { content: 'price' },
              content: [
                { elem: 'price', elemMods: { type: 'adult' } },
                { elem: 'price', elemMods: { type: 'default' } },
              ],
            },
            { elem: 'buy' },
            { elem: 'show-more' },
          ],
        },
      ],
    },
  };
} );
