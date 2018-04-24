block( 'tour' ).elem( 'date' )(
  match( node => node.mods.view === 'cart' ).replace()( node => {
    function leadZero( num ) {
      return num < 10 ? '0' + num : num;
    }

    let date = new Date();
    // date.setTime( trip.time * 1000 );
    const day = leadZero( date.getDate() );
    const month = leadZero( date.getMonth() + 1 );
    const year = date.getFullYear();

    return {
      block: 'fieldset',
      mix: { block: node.block, elem: node.elem, js: true },
      content: {
        block: 'form-field',
        mods: {
          type: 'input',
          required: true,
          message: 'popup'
        },
        directions: ['top-right'],
        js: {
          required: { message: 'Пф-ф-ф-ф-ф! Братан, как мы без даты тебе будем экскурсию подбирать?' },
        },
        id: 'date',
        name: 'date',
        content: [
          {
            block: 'label',
            content: 'Выберите дату рейса'
          },
          {
            block: 'input',
            mods: {
              'has-calendar': true,
              width: 'available',
              disabled: true,
            },
            weekdays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            earlierLimit: `${ day }.${ month }.${ year }`,
            laterLimit: '22.05.2018',
            // availableDate: ctx.availableDate,
            // val: ctx.content
          }
        ]
      },
    }
  } )
);
