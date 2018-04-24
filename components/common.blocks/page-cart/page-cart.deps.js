[{
  shouldDeps: [
    {
      block: 'page',
      elem: 'content',
      mods: { width: 'tiny' },
    },
    {
      block: 'tour',
      mods: { view: 'cart' }
    },
    {
      block: 'form',
      mods: {
        view: 'cart',
        'has-validation': true,
        message: ['popup', 'text'],
      }
    },
    'layout'
  ]
}]
