block('page').mod('view', '404')(
  def()( () => {
    return applyNext( { 'data.view': '' } )
  } ),
  content()( () => {
    return '404'
  } )
)
