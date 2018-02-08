block('header').elem('contacts').content()( () => {
  return {
    block: 'address',
    content: [
      { elem: 'email' },
      { elem: 'phone' }
    ]
  }
});
