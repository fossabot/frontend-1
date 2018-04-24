modules.define( 'tour', ['jquery', 'form', 'form-field', 'calendar'], function( provide, $, Form, formField, Calendar, Tour ) {

  provide( Tour.declMod( { modName: 'view', modVal: 'cart' }, {
    onSetMod: {
      js: {
        inited: function() {
          this.__base.apply( this, arguments );
          this._id = this.params.id;
          this._apiId = this.params.api.id;
          this._apiVendor = this.params.api.vendor;

          this._data = {};

          const now = new Date();
          // параметры экскурсии
          // текущая дата
          // дата конца следующего месяца
          // список одиночных рейсов
            // запрос, date_start = текущая дата, date_end = дата конца следующего месяца
            // объект: { <дата>: [{ рейс }] }
          // рендер календаря
            // обход дат из объекта
            // сотрировка по дате
            // первый элемент — установить как выбранный
          // установка даты календаря
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

          const first = new Date( now.getFullYear(), now.getMonth(), 1 ).getTime() / 1000 | 0;
          const last = new Date( now.getFullYear(), now.getMonth() + 2, 0 ).setHours( 23, 59, 59, 999 ) / 1000 | 0;

          console.log( first );
          console.log( last );

          now.setHours( 0, 0, 0, 0 );
          const today = now.getTime() / 1000 | 0;
          console.log( today );

          const calendar  = this.findChildBlock( Calendar );

          this.update();

          this._events( { elem : 'date' } ).on( 'change', ( event, data ) => {
            // data — выбранная дата

            const date = calendar.parseDate( data );
            const start = date.getTime() / 1000 | 0;
            const end = date.setHours( 23, 59, 59, 999 ) / 1000 | 0;

            console.log( start );
            console.log( end );

            let vendor;
            switch ( this._apiVendor ) {
              case 1:
                vendor = 'nevatravel';
                break;
              default:
                console.log( 'Vendor is not defined' );
                break;
            }

            $.get( `https://nevatrip.dev.compaero.ru/rest/tour/${ this._id }/trip/once/getlist?date_start=${ start }&date_end=${ end }` )
              .done( response => {
                console.log( response );
                this._data.trips = response.object;


                this.update();
              } );

            $.get( `/api/tour/${ vendor }/${ this._apiId }/?date=${ data }` )
              .done( response => {
                console.log( response );
                this._data.date = response.tour;

                this.update();
              } );
          } )
        }
      },
    },

    update: function() {
      console.log( this._elem( 'date' ) );
    }
  } ) );

} );
