block( 'page' )(
  match( ( node ) => node.data && node.data.view || node.data.page ).content()( ( node ) => {
    return { block: node.data.view || `page-${ node.data.page }` };
  } ),
  prependContent()( () => {
    return { elem: 'header' };
  } ),
  appendContent()( () => {
    return { elem: 'footer' };
  } ),
);
