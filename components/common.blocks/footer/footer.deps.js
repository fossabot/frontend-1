[{
  shouldDeps: [
    {
      elems: [
        'header',
        'content',
        'footer',
        'heading',
        'footer-inner',
        'compilation',
        'menu',
        'copyright',
        'address',
      ]
    },
    { block: 'page', elems: ['section', 'content']},
    { block: 'list' },
    {
      block: 'menu',
      mods: { view: 'footer' },
    },
    {
      block: 'address',
      elems: [
        'email',
        'phone',
        'social'
      ]
    }
  ]
}]
