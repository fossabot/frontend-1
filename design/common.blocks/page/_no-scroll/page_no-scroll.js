modules.define( 'page', function( provide, Page ) {
  provide(
    Page.declMod(
      { modName: 'no-scroll', modVal: true },
      {
        onSetMod: {
          js: {
            inited: function() {},
          },
        },
      },
    ),
  );
} );
