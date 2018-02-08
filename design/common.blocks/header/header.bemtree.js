block('header').content()( () => {
  return [
    {
      elem: 'content',
      mix: { block: 'page', elem: 'content' },
      content: [
        { elem: 'logo' },
        { elem: 'slogan' },
        { elem: 'contacts' }
      ]
    },
    {
      elem: 'menu',
      mix: { block: 'page', elem: 'section' }
    }
  ]
});
