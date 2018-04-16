block( 'category' ).elem( 'name' ).replace()( ( node, ctx ) => {
  return {
    block: 'heading',
    mods: { size: 'xl' },
    mix: [{ block: node.block, elem: node.elem }, { block: 'page', elem: 'content', elemMods: { width: 'tiny' } }],
    content: {
      block: 'link',
      mods: { view: 'text' },
      url: ctx.url,
      content: ctx.content,
    }
  }
} );
