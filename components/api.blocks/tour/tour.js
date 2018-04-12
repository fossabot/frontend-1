modules.define( 'tour', [ 'i-bem-dom', 'jquery', ], function( provide, bemDom, $, ) {

  provide( bemDom.declBlock( this.name, {
    onSetMod: {
      js: {
        inited: function() {
          this._id = this.params.tour.id;

          this._events( { elem : 'date' } ).on( 'change', ( event, data ) => {
            // data — выбранная дата

            $.get( `/api/tour/nevatravel/1223263874329870352/?date=${ data }&pier=3` )
              .done( response => {
                console.log( response );
              } );
          } )
        }
      }
    }
  } ) );

} );
