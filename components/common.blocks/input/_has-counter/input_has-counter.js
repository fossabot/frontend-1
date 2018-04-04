modules.define( 'input', ['button'], function( provide, Button, Input ) {

  provide( Input.declMod( { modName: 'has-counter', modVal: true }, {
    onSetMod: {
      js: {
        inited: function() {
          this.__base.apply( this, arguments );
          this._domEvents( 'counter' ).on( 'click', event => {
            const inputVal = parseInt( this.getVal() ) || 0;
            const buttonVal = parseInt( event.bemTarget.params.val );
            this.setVal( inputVal + buttonVal ); 
          } )
        }
      }
    },
  } ) );

} );
