[{
  shouldDeps: [
    {
      mods: { theme: '*' },
      elems: [
        'header',
        'content',
        'contacts',
        'footer'
      ]
    },
    { block: 'page', elem: 'section'},
    { block: 'list' },
    'layout',
    {
      block: 'menu',
      mods: { view: 'footer' },
    }
  ]
}]
