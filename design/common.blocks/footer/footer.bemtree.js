block( 'footer' ).content()( ( node ) => {
  console.log( node );
  let items = [];
  // if ( node.api && node.api.result ) {
  //   items = Object.keys( node.api.result.structure.object[ 61 ].children ).map( id => {
  //     const resource = node.api.result.structure.object[ 61 ].children[ id ];
  //     return {
  //       block: 'link',
  //       url: resource.alias,
  //       text: resource.pagetitle
  //     };
  //   } );
  // }
  return [
    { elem: 'header' },
    {
      elem: 'content',
      content: 'list',
    },
    {
      elem: 'footer',
      content: {
        elem: 'contacts',
        content: 'zzz',
      },
    },
  ];
} );
