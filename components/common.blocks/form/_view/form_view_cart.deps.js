[{
  shouldDeps: [{
      block: 'form-field',
      mods: {
        type: [ 'input', 'checkbox', 'radio-group', 'select', 'checkbox-group' ],
        required: true,
        message: 'text',
      },
    },
    {
      block: 'input',
      mods: {
        'has-calendar': true,
        width: 'available',
        type: 'date'
      },
    },
    {
      block: 'select',
      mods: {
        mode: 'radio',
        width: 'available',
      },
    },
    {
      block: 'menu',
      mods: {
        mode: 'radio',
        width: 'available',
      },
    },
    {
      block: 'radio-group',
      mods: {
        type: 'button'
      },
    },
    {
      block: 'text',
      mods: { bold: true },
    },
    {
      block : 'checkbox-group',
      mods: { type: 'button' },
    },
    'fieldset',
    'label',
  ]
}]
