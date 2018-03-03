block( 'address' )
  .elem( 'phone' )
  .content()( () => {
  return {
    block: 'link',
    url: 'email:info@nevatrip.ru',
    content: 'info@nevatrip.ru',
  };
} );
