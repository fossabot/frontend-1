block( 'tour' ).elem( 'tickets' ).elemMod( 'loaded', true ).content()( () => {
  return {
    block: 'fieldset',
    legend: 'Билеты',
    content: [
      {
        block: 'form-field',
        mods: {
          type: 'input',
          inline: true,
        },
        id: 'adult',
        name: 'ticket[adult]',
        content: [
          {
            block: 'label',
            content: 'Взрослый'
          },
          {
            block: 'input',
            mods: { 'has-counter': true },
            maxLength: 2,
            val: 1,
            placeholder: 0
          },
        ]
      },
      {
        block: 'form-field',
        mods: {
          type: 'input',
          inline: true,
        },
        id: 'child',
        name: 'ticket[child]',
        content: [
          {
            block: 'label',
            content: 'Детский'
          },
          {
            block: 'input',
            mods: { 'has-counter': true },
            maxLength: 2,
            placeholder: 0
          },
        ]
      },
      {
        block: 'form-field',
        mods: {
          type: 'input',
          inline: true,
        },
        id: 'preferential',
        name: 'ticket[preferential]',
        content: [
          {
            block: 'label',
            content: 'Льготовый'
          },
          {
            block: 'input',
            mods: { 'has-counter': true },
            maxLength: 2,
            placeholder: 0
          },
        ]
      },
    ]
  };
} );
