block('page')(
  match( node => node.data && node.data.view ).content()( node => {
    return { block: node.data.view }
  } )
);
