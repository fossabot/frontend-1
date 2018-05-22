block( 'tour' ).elem( 'features' )(
  replace()( ( node, { content = [], languages, pierStart, duration, onVehicle } ) => {

    if ( node.elemMods.duration ) {
      content.push( [
        {
          block: 'text',
          mods: { weight: 'bold' },
          content: 'Длительность'
        },
        `: ${ duration }`,
      ] );
    }

    if ( node.elemMods.pier ) {
      content.push( [
        {
          block: 'text',
          mods: { weight: 'bold' },
          content: 'Причал отправления'
        },
        `: ${ pierStart.longtitle || pierStart.pagetitle }`,
      ] );
    }

    if ( node.elemMods.vehicle ) {
      content.push( [
        {
          block: 'text',
          mods: { weight: 'bold' },
          content: 'Теплоход'
        },
        ': этот метод пока не реализован и поэтому захардкожен'
      ] );
    }

    if ( node.elemMods.languages ) {
      content.push( [
        {
          block: 'text',
          mods: { weight: 'bold' },
          content: 'Язык экскурсии'
        },
        ': ',
        languages.split( '\n' ).map( language => {
          switch ( language ) {
            case 'ru': return /* 🇷🇺 */ 'русский';
            case 'es': return /* 🇪🇸 */ 'испанский';
            case 'ir': return /* 🇮🇷 */ 'иранский';
            case 'gb': return /* 🇺🇸 */ 'английский';
            case 'it': return /* 🇮🇹 */ 'итальянский';
            case 'ch': return /* 🇨🇳 */ 'китайский';
            case 'de': return /* 🇩🇪 */ 'немецкий';
            case 'fi': return /* 🇫🇮 */ 'финский';
            case 'fr': return /* 🇫🇷 */ 'французский';
            case 'se': return /* 🇸🇪 */ 'шведский';
            case 'jp': return /* 🇯🇵 */ 'японский';
            default:
              break;
          }
          return false;
        } ).join( ', ' )
      ] );
    }

    if ( node.elemMods['on-vehicle'] ) {
      content.push( [
        {
          block: 'text',
          mods: { weight: 'bold' },
          content: 'На борту'
        },
        ': ',
        onVehicle.split( '\n' ).map( feature => {
          switch ( feature ) {
            case 'male'    : return /* 🚾 */ 'туалет';
            case 'comment' : return /* 🎤 */ 'экскурсия';
            case 'glass'   : return /* 🍸 */ 'бар';
            case 'cutlery' : return /* 🍳 */ 'еда';
            case 'music'   : return /* 🎵 */ 'музыка';
            default:
              break;
          }
          return false;
        } ).join( ', ' )
      ] );
    }

    return {
      block: 'list',
      mods: {
        type: 'circle',
        of: 'features'
      },
      mix: { block: node.block, elem: node.elem },
      items: content
    }
  } ),
)







