block( 'category' ).content()( ( node, { category, content } ) => {

  return [
    {
      elem: 'header',
      attrs: {
        style: `background-image: url('https://nevatrip.ru/assets/img/e/${ category.alias }/bg.jpg')`
      },
      content: {
        elem: 'name',
        content: category.longtitle || category.pagetitle,
        url: category.alias,
      },
    },
    {
      elem: 'content',
      content: content
    }
  ]
} );
