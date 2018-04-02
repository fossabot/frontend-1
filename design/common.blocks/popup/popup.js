modules.define( 'popup',
  ['i-bem-dom', 'objects'],
  function( provide, bemDom, objects, Popup ) {

provide( bemDom.declBlock( Popup, {
  _getDefaultParams : function() {
    return objects.extend(
      this.__base(),
      {
        mainOffset : 5,
        viewportOffset : 10
      }
    );
  }
} ) );

} );
