block( 'tour' ).elem( 'time' )(
  match( node => node.mods.view === 'order' ).replace()( () => {

    return {
      block: 'fieldset',
      content: {
        block: 'form-field',
        id: 'time',
        name: 'time',
        mods: {
          type: 'select',
          required: true,
          message: 'popup'
        },
        content: [
          {
            block: 'label',
            content: 'Отправление Санкт-Петербург → Петергоф'
          },
          {
            block: 'select',
            mods: {
              mode: 'radio',
              width: 'available',
            },
            val: 1,
            options: [
              {
                val: 1,
                text: '14:00 (прибытие в 15:00)',
              },
              {
                val: 2,
                text: '15:30 (прибытие в 16:30)',
              },
              {
                val: 3,
                text: '17:40 (прибытие в 18:40)',
              },
              {
                val: 4,
                text: '18:20 (прибытие в 19:20)',
              },
            ]
          }
        ]
      },
    };
  } ),
);