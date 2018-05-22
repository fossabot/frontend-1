block( 'tour' ).mod( 'view', 'cart' )(
  addJs()( ( node, { tour } ) => {
    const {
      id,
      alias,
      tv_e_start_date: earlierLimit,
      tv_e_end_date: laterLimit,
      complexes,
    } = tour;

    return {
      id,
      alias,
      earlierLimit,
      laterLimit,
      complexes,
    }
  } )
);
