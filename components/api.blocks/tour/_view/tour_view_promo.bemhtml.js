block( 'tour' ).mod( 'view', 'promo' )( {
  tag: 'section',
  addAttrs: {
    style: `background-image: url(http://babeholder.pixoil.com/img/1920/400);`
  },
} );

block( 'tour' ).mod( 'view', 'promo' ).elem( 'section' )( {
  addMix: { block: 'page', elem: 'content' }
} )