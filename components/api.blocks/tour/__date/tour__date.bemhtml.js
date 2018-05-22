block( 'tour' ).elem( 'date' )(
  match( node => node.mods.view === 'cart' && node.elemMods.loaded ).replace()( ( node, ctx ) => {

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
            earlierLimit: ctx.earlierLimit,
            laterLimit: ctx.laterLimit,
            availableDate: ctx.availableDate,
            val: ctx.content
          }
        ]
      },
    }
  } )
);
