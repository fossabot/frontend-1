modules.define( 'form', function( provide, Form ) {

  provide( Form.declMod( { modName: 'view', modVal: 'cart' }, {
    onSetMod: {
      js: {
        inited: function() {
          this.__base.apply( this, arguments );
          this._events().on( 'success', this._onFormSuccess );
          this._events().on( 'error', this._onFormError );
        }
      }
    },

    _onFormSuccess: function() {
      console.log( this.getVal() );
    },

    _onFormError: function( e, data ) {
      console.log( 'error', data );
    }
  } ) );

} );
