block( 'page' ).mod( 'view', '500' )(
  def()( () => {
    return applyNext( { 'data.view': '' } );
  } ),
  content()( () => {
    return '500';
  } ),
);
