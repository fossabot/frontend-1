block( 'radio-group' )(
  content()( function() {
    const mods = this.mods;
    const ctx = this.ctx;
    const isValDef = typeof ctx.val !== 'undefined';

    return ( ctx.options || [] ).map( function( option, i ) {
      return [
        !!i && !mods.type && { tag: 'br' },
        {
          block: 'radio',
          mods: {
            type: mods.type,
            mode: mods.mode,
            theme: mods.theme,
            width: mods.width,
            size: mods.size,
            checked: isValDef && ctx.val === option.val,
            disabled: option.disabled || mods.disabled
          },
          name: ctx.name,
          val: option.val,
          text: option.text,
          title: option.title,
          icon: option.icon
        }
      ];
    } );
  } )
);
