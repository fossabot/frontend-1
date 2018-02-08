block('trip').elem('buy').replace()( ( node ) => {
  return {
    block: 'button',
    mods: {
      type: 'link',
      view: 'action',
      size: 'l'
    },
    url: '#',
    text: node.i18n('trip', 'buy')
  }
} )
