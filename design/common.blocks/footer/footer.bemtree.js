block('footer').content()( () => {
  return [
    { elem: 'header' },
    {
      elem: 'content',
      content: 'list'
    },
    {
      elem: 'footer',
      content: {
        elem: 'contacts',
        content: 'zzz'
      }
    }
  ]
});
