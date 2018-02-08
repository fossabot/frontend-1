block('footer').elem('header').content()( () => {
  return {
    block: 'heading',
    mods: {
      align: 'center',
      size: 'l'
    },
    mix: { block: 'page', elem: 'heading', elemMods: { size: 'l' } },
    content: 'А здесь ещё больше подборок с прогулками и экскурсиями:'
  }
});
