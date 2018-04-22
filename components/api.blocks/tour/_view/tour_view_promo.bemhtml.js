block( 'tour' ).mod( 'view', 'promo' )( {
  tag: 'section',
} );

block( 'tour' ).mod( 'view', 'promo' ).elem( 'section' )( {
  addMix: { block: 'page', elem: 'content' }
} )