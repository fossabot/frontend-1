block( 'input' ).mod( 'has-counter', true )(
  elem( 'box' ).content()( ( node ) => {
    return [
      {
        block: 'button',
        mix: {
          block: node.block,
          elem: 'counter',
        },
        js: { val: '-1' },
        title: 'Уменьшить количество',
        text: '-'
      },
      applyNext(),
      {
        block: 'button',
        mix: {
          block: node.block,
          elem: 'counter',
        },
        js: { val: '1' },
        title: 'Увеличить количество',
        text: '+'
      },
    ]
  } )
);
