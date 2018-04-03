modules.define('input', ['button'], function(provide, Button, Input) {

  provide(Input.declMod({ modName: 'has-counter', modVal: true }, {
    onSetMod: {
      js: {
        inited: function() {
          this.__base.apply( this, arguments );
          let _this = this;
          this._domEvents('counter').on( 'click', function( event ) {
            const inputVal = parseInt( _this.getVal() ) || 0;
            const buttonVal = parseInt( event.bemTarget.findMixedBlock( Button ).params.val );
            _this.setVal( inputVal + buttonVal ); 
          } )
        }
      }
    },
  }));

});
