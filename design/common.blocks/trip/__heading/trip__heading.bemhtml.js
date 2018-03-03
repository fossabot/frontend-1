block( 'trip' ).elem( 'heading' )(
  replace()( ( node, ctx ) => {
    return {
      block: 'heading',
      mods: { size: 'l' },
      mix: { block: 'page', elem: 'heading', elemMods: { size: 'l' } },
      content: ctx.content,
    };
  } ),
);
