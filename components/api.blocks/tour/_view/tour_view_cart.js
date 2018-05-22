modules.define( 'tour',
  ['i-bem-dom', 'BEMHTML', 'jquery', 'form', 'form-field', 'calendar'],
  function( provide, bemDom, BEMHTML, $, Form, formField, Calendar, Tour ) {

  provide( Tour.declMod( { modName: 'view', modVal: 'cart' }, {
    onSetMod: {
      js: {
        inited: function() {
          this.__base.apply( this, arguments );

          // параметры экскурсии
          this._tour = this.params;

          // анализ экскурсии
            // это составная экскурсия
            // это самостоятельная экскурсия
          // текущая дата
          const now = new Date();
          // timestamp начала дня
          const first = new Date( now.getFullYear(), now.getMonth(), 1 ).getTime() / 1000 | 0;
          // timestamp конца следующего месяца
          const last = new Date( now.getFullYear(), now.getMonth() + 2, 0 ).setHours( 23, 59, 59, 999 ) / 1000 | 0;
          
          function leadZero( num ) {
            return num < 10 ? '0' + num : num;
          }

          // дата конца следующего месяца

          // список одиночных рейсов
            // запрос, date_start = текущая дата, date_end = дата конца следующего месяца
            // объект: { <дата>: { <время>: [{ рейс }] } }
            this._tour.trips = {};
            $.get( `https://nevatrip.dev.compaero.ru/rest/tour/${ this._tour.id }/trip/once/getlist`, { date_start: first, date_end: last } )
              .done( response => {
                // сотрировка по дате
                response.object
                .sort( ( a, b ) => ( a.time - b.time ) )
                .forEach( trip => {
                  let date = new Date();
                  date.setTime( trip.time * 1000 );
                  const dateFormat = `${ leadZero( date.getDate() ) }.${ leadZero( date.getMonth() + 1 ) }.${ date.getFullYear() }`
                  this._tour.trips[ dateFormat ] = this._tour.trips[ dateFormat ] || {};
                  this._tour.trips[ dateFormat ][ trip.time ] = this._tour.trips[ dateFormat ][ trip.time ] || [];
                  this._tour.trips[ dateFormat ][ trip.time ].push( trip );

                } )
                // рендер календаря
                  // обход дат из объекта
                  this._tour.availableDate = Object.keys( this._tour.trips );

                  // первый элемент — установить как выбранный
                  bemDom.replace(
                    this._elem( 'date' ).domElem,
                    BEMHTML.apply( {
                      block: 'tour',
                      mods: { view: 'cart' },
                      elem: 'date',
                      elemMods: { loaded: true },
                      earlierLimit: this._tour.earlierLimit,
                      laterLimit: this._tour.laterLimit,
                      content: this._tour.availableDate[ 0 ],
                      availableDate: this._tour.availableDate
                    } )
                  );
              } );

          // установка даты календаря
          // получение всех рейсов в выбранную дату

          // получение причалов
          // установка причала
          // получение возможных типов времени

          // get trip's id
          // get trip full detail
          // get tour's info
          // is it complex tour?
          // yes
            // get connect type
            // is it master?
            // yes
              //
            // no, it is slave

          // no
            // 

          this._data = {};

          now.setHours( 0, 0, 0, 0 );
          // const today = now.getTime() / 1000 | 0;
          // console.log( today );

          this._events( { elem : 'date' } ).on( 'change', ( event, data ) => {
            // data — выбранная дата
            const trips = this._tour.trips[ data ];

            const tripIDs = ( obj ) => {
              return Object.keys( obj )
                .map( date => obj[ date ] )
                .map( time => time.map( trip => trip.trip ).join( ',' ) )
                .join( ',' );
            }

            $.get( `https://nevatrip.dev.compaero.ru/rest/tour/${ this._tour.id }/trip/getlist?ids=${ tripIDs( trips ) }` )
              .done( response => {
                const renderTime = isoDate => {
                  const date = new Date( isoDate );
                  return `${ leadZero( date.getHours() ) }:${ leadZero( date.getMinutes() ) }`;
                };

                const times = response.object.sort( ( a, b ) => ( Date.parse( a.tv_tripDateTimeStart ) - Date.parse( b.tv_tripDateTimeStart ) ) );
                const timeFirst = renderTime( times[ 0 ].tv_tripDateTimeStart );
                const timeLast = times.length > 1 ? renderTime( times[ times.length - 1 ].tv_tripDateTimeStart ) : '';

                bemDom.replace(
                  this._elem( 'time' ).domElem,
                  BEMHTML.apply( {
                    block: 'tour',
                    mods: { view: 'cart' },
                    elem: 'time',
                    elemMods: { loaded: true },
                    timeFirst: timeFirst,
                    timeLast: timeLast,
                    options: times.map( trip => {
                      return {
                        val: trip.id,
                        text: `${ renderTime( trip.tv_tripDateTimeStart ) } (прибытие в ${ renderTime( trip.tv_tripDateTimeEnd ) })`
                      };
                    } )
                  } )
                );

              } );

            // $.get( `/api/tour/${ vendor }/${ this._tour.api.id }/?date=${ data }` )
            //   .done( response => {
            //     console.log( response );
            //     this._data.date = response.tour;

            //     this.update();
            //   } );
          } )
        }
      },
    },

    parseDate: function( val ) {
      if ( val instanceof Date ) return val;

      var parsed = this._parseDateParts( val );
      if ( parsed ) {
        var day = parsed.day,
          month = parsed.month,
          year = parsed.year,
          date = this._getToday();

        date.setMonth( month, day );

        if ( year ) {
          date.setFullYear( year );
        }

        return date;
      }

      return null;
    },

    _parseDateParts: function( str ) {
      var match = /^\s*(\d{1,2})[./-](\d{1,2})(?:[./-](\d{4}|\d\d))?\s*$/.exec( str );

      if ( match ) {
        return {
          day: match[1],
          month: match[2] - 1,
          year: match[3]
        };
      }

      match = /^\s*(\d{4})[./-](\d\d)(?:[./-](\d\d))?\s*$/.exec( str );

      if ( match ) {
        return {
          day: match[3],
          month: match[2] - 1,
          year: match[1]
        };
      }

      return null;
    },

    _getToday: function() {
      var today = new Date();
      today.setHours( 0, 0, 0, 0 );

      return today;
    },

  } ) );

} );
