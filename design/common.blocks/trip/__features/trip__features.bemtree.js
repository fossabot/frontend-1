block( 'trip' ).elem( 'features' )(
  replace()( ( node, ctx ) => {
    return {
      block: 'list',
      mods: { type: 'circle' },
      items: ctx.content,
    };
  } ),
);
