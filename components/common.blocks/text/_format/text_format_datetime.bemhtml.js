block( 'text' ).mod( 'format', 'datetime' )(
  match( ( node, ctx ) => !ctx.content ).def()( '' ),

  def()( ( node, ctx ) => {
    let moment = node.require( 'moment' ) || window.moment,
        format = ctx.format,
        locale = ctx.locale || 'ru',
        datetime = moment.unix( ctx.content );

    switch ( locale ) {
      case 'ru': node.require( 'moment_ru' ); break;
    }

    datetime.locale( locale );

    if ( format === 'genitive#MMMM' && locale === 'ru' ) {
      format = 'MMMM';
      moment.updateLocale( 'ru', {
        months: [
          "января", "февраля", "марта", "апреля", "мая", "июня", "июля",
          "августа", "сентября", "октября", "ноября", "декабря"
        ]
      } );
    }
    return datetime.format( format );
  } ),

  tag()( 'time' )
)
