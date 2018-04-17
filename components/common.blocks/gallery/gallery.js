modules.define( 'gallery', ['i-bem-dom', 'BEMHTML', 'pswp', 'pswp__ui'], function( provide, bemDom, BEMHTML, PhotoSwipe, PhotoSwipeUI_Default ) {

  provide( bemDom.declBlock( this.name, {
    onSetMod: {
      js: {
        inited: function() {
          const pswpElement = bemDom.append(
            bemDom.scope,
            BEMHTML.apply( { block: 'pswp' } )
          );

          const items = [
            {
              src: 'http://babeholder.pixoil.com/img/600/400',
              w: 600,
              h: 400
            },
            {
              src: 'http://babeholder.pixoil.com/img/1200/900',
              w: 1200,
              h: 900
            }
          ];

          const options = {
            index: 0
          };

          console.log( PhotoSwipeUI_Default );

          const gallery = new PhotoSwipe( pswpElement[ 0 ], PhotoSwipeUI_Default, items, options );
          gallery.init();
        }
      }
    }
  } ) );

} );
