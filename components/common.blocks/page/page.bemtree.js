block( 'page' )(
  match( ( node ) => node.data && node.data.view ).content()( ( node ) => {
    return { block: node.data.view };
  } ),
  // prependContent()( () => {
  //   return { elem: 'header' };
  // } ),
  // appendContent()( () => {
  //   return { elem: 'footer' };
  // } ),
);
