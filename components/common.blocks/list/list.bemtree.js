/**
 *
 * limit
 * offset
 * sortDir [ 'asc' | 'desc' | 'rand' ]
 * sortBy
 * result
 * entities
 * items
 * getKey
 */
block( 'list' )(
  match( ( node, ctx ) => ctx.result && ctx.entities && !ctx.items && !ctx.content ).def()(
    ( node, ctx ) => {
      const sortDir = ctx.sortDir.toLowerCase();
      let items = ctx.result.map( ( item ) => {
        return ctx.entities[item];
      } );
      if ( sortDir === 'asc' || sortDir === 'desc' ) {
        items = items.sort( ( a, b ) => {
          const x = typeof a === 'object' && ctx.sortBy ? a[ctx.sortBy] : a;
          const y = typeof b === 'object' && ctx.sortBy ? b[ctx.sortBy] : b;
          if ( typeof x === 'string' && typeof y === 'string' ) {
            return x.localeCompare( y );
          }
          if ( typeof x === 'number' && typeof y === 'number' ) {
            return x - y;
          }
          if ( typeof x === 'number' || typeof y === 'number' ) {
            return x === 'number' ? 1 : -1;
          }
          return x === y;
        } );
        if ( sortDir === 'desc' ) {
          items = items.reverse();
        }
      }
      if ( sortDir === 'rand' ) {
        items = shuffle( items );
      }
      return applyNext( {
        ctx: {
          ...ctx,
          items,
        },
      } );

      function shuffle( array ) {
        let currentIndex = array.length,
          temporaryValue,
          randomIndex;
        while ( 0 !== currentIndex ) {
          randomIndex = Math.floor( Math.random() * currentIndex );
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
    },
  ),
  match( ( node, ctx ) => ctx.items && !ctx.content ).content()( ( node, ctx ) => {
    const limit = ctx.limit || 10;
    const offset = ctx.offset || 0;
    const items = ctx.items.slice( offset, offset + limit );
    return items.map( ( item ) => {
      return typeof item === 'object' && ctx.getKey
        ? { elem: 'item', mix: ctx.itemMix, content: item[ctx.getKey] }
        : item ? { elem: 'item', mix: ctx.itemMix, content: item } : '';
    } );
  } ),
);
