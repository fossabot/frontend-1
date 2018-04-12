modules.define( 'tour__date', ['i-bem-dom', 'form-field'], function( provide, bemDom, inputCalendar ) {

  provide( bemDom.declElem( 'tour', 'date', {
    onSetMod: {
      js: {
        inited: function() {
          this._events( this.findChildBlock( inputCalendar ) ).on( 'change', event => {
            this._emit( 'change', event.bemTarget.getVal() );
          } );
        }
      }
    }
  } ) );

} );
