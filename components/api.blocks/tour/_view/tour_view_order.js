modules.define( 'tour', function( provide, Tour ) {

provide( Tour.declMod( { modName: 'view', modVal: 'order' }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
} ) );

} );
