block( 'tour' ).elem( 'sight' ).content()( ( node, ctx ) => {
  return [
    {
      block: 'heading',
      mix: { block: node.block, elem: 'heading' },
      mods: { size: 's' },
      content: 'Вы увидите:'
    },
    {
      block: 'list',
      mods: {
        of: 'sights'
      },
      items: ctx.content
    }
  ]
} );
