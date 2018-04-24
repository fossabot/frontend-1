block( 'tour' ).mod( 'view', 'cart' )(
  addJs()( ( node, { tour } ) => {
    const {
      id,
      alias,
      tv_e_from: {
        id: pierId,
        longtitle: pierName
      },
      tv_e_start_points,
      tv_e_end_date,
      tv_added_products,
      'vendor.id': vendorId,
      complexes,
    } = tour;

    return {
      id,
      alias,
      pier: {
        id: pierId,
        name: pierName
      },
      api: {
        id: tv_e_start_points,
        vendor: vendorId,
      },
      end: tv_e_end_date,
      products: tv_added_products,
      complexes,
    }
  } )
);
