block( 'tour' )(
  match( node => node.mods.view === 'order' ).addJs()( ( node, { tour } ) => {
    return {
      tour
    }
  } )
);
