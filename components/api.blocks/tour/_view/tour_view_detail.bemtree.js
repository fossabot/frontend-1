block( 'tour' ).mod( 'view', 'detail' ).content()( ( node, ctx ) => {
  const tour = ctx.tour;
  const {
    sight,
    gallery,
  } = node.api.entities;

  // @TODO: rewrite string to template: https://stackoverflow.com/questions/37128624/terse-way-to-intersperse-element-between-all-elements-in-javascript-array

  const renderTicketDescription = ticket => {
    let description = [];

    if ( parseInt( ticket.count ) > 1 ) {
      description.push( 'от ' + ticket.count + ' человек' );
    }

    if ( /^\d+$/.test( ticket.price ) & parseInt( ticket.price ) > 0 ) {
      description.push( ticket.price + ' ₽' );
    } else if( ticket.price !== '0' ) {
      description.push( ticket.price );
    }

    const name = `<abbr class="text text_inherit text_weight_bold text_size_m text_theme_nevatrip" title="${ ticket.description }">${ ticket.name.toLowerCase() }</abbr>`;

    return `${ name } ${ description.length ? '(' + description.join( ', ' ) + ')' : '' }`;
  };

  const renderTicketGroup = tickets => {
    const ticketsWPNRLastIndex = tickets.length - 1;
    const ticketsWPNRLastItem = tickets[ ticketsWPNRLastIndex ];

    if ( tickets.length > 1 ) {

      return tickets.slice( 0, ticketsWPNRLastIndex )
        .map( ticket => renderTicketDescription( ticket ) )
        .join( ', ' ) + 
        ` и ${ renderTicketDescription( ticketsWPNRLastItem ) }`;
    }

    return renderTicketDescription( ticketsWPNRLastItem );
  };

  const tickets = JSON.parse( tour.tv_e_tickets );
  const ticketsSingleWithPriceNotRequired = tickets.filter( ticket => parseInt( ticket.count ) < 2 & parseInt( ticket.price ) > 0 & !ticket.required );
  const ticketsSingleFreeNotRequired = tickets.filter( ticket => parseInt( ticket.count ) < 2 & parseInt( ticket.price ) === 0 & !ticket.required );
  const ticketsGroup = tickets.filter( ticket => parseInt( ticket.count ) > 1 );

  let ticketsTextArray = [];
  ticketsTextArray.push( `Есть ${ renderTicketGroup( ticketsSingleWithPriceNotRequired ) } билеты` );
  ticketsTextArray.push( `${ renderTicketGroup( ticketsSingleFreeNotRequired ) } — бесплатно` );
  ticketsTextArray.push( `${ renderTicketGroup( ticketsGroup ) }` );
  const ticketsText = ticketsTextArray.join( '; ' );

  return [
    {
      elem: 'image',
      content: `//nevatrip.dev.compaero.ru/${ tour.tv_e_image_1200 }`
    },
    {
      elem: 'main',
      content: [
        {
          elem: 'name',
          content: tour.longtitle || tour.pagetitle
        },
        {
          elem: 'section',
          content: [
            {
              elem: 'content',
              content: {
                elem: 'features',
                elemMods: {
                  pier: true,
                  vehicle: true,
                  languages: true,
                  'on-vehicle': true,
                  duration: true,
                },
                languages: tour.tv_e_excursion,
                pierStart: tour.tv_e_from,
                pierFinish: tour.tv_e_to,
                duration: tour.tv_e_duration,
                onVehicle: tour.tv_e_on_boat,
              },
            },
            {
              elem: 'aside',
              content: [
                {
                  elem: 'tickets',
                  content: [
                    {
                      block: 'text',
                      mods: { weight: 'bold' },
                      content: 'Скидки: ',
                    },
                    tour.tv_e_price_before,
                    ' ',
                    {
                      elem: 'tickets-text',
                      content: {
                        html: ticketsText
                      }
                    },
                    '. ',
                    tour.tv_e_price_after,
                  ]
                },
                {
                  elem: 'action',
                  content: [
                    {
                      elem: 'cost',
                      content: [
                        {
                          elem: 'price',
                          content: tour.tv_e_price
                        },
                        {
                          elem: 'price',
                          elemMods: { type: 'on-pier' },
                          content: tour.tv_e_price_on_pier
                        },
                      ]
                    },
                    {
                      elem: 'buy',
                      content: tour.id,
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
          elem: 'section',
          content: [
            {
              elem: 'content',
              content: [
                {
                  tag: 'details',
                  block: 'details',
                  content: [
                    {
                      elem: 'summary',
                      tag: 'summary',
                      content: 'Посмотреть маршрут прогулки'
                    },
                    {
                      content: {
                        html: tour.tv_e_map
                      }
                    }
                  ]
                },
                {
                  elem: 'description',
                  content: [
                    {
                      block: 'heading',
                      mix: { block: node.block, elem: 'heading' },
                      mods: { size: 's' },
                      content: 'Об экскурсии'
                    },
                    {
                      elem: 'tip',
                      content: tour.tv_e_advice_before
                    },
                    {
                      content: {
                        html: tour.content
                      }
                    },
                    {
                      elem: 'tip',
                      content: tour.tv_e_advice_after
                    },
                    {
                      elem: 'route',
                      content: {
                        html: tour.tv_e_map
                      }
                    }
                  ]
                }
              ]
            },
            {
              elem: 'aside',
              content: [
                {
                  elem: 'gallery',
                  content: tour.gallery.map( id => gallery[ id ] )
                },
                {
                  elem: 'sight',
                  content: tour.tv_e_showplaces.split( ',' ).map( sightID => sight[ sightID ].longtitle || sight[ sightID ].pagetitle )
                },
                {
                  block: 'heading',
                  mix: { block: node.block, elem: 'heading' },
                  mods: { size: 's' },
                  content: tour.tv_e_text_before_final_price,
                },
                {
                  elem: 'action',
                  content: [
                    {
                      elem: 'cost',
                      content: [
                        {
                          elem: 'price',
                          content: tour.tv_e_price
                        },
                        {
                          elem: 'price',
                          elemMods: { type: 'on-pier' },
                          content: tour.tv_e_price_on_pier
                        },
                      ]
                    },
                    {
                      elem: 'buy',
                      content: tour.id,
                    },
                  ]
                },
                {
                  block: 'heading',
                  mix: { block: node.block, elem: 'heading' },
                  mods: { size: 'xs' },
                  content: 'Другие наши экскурсии:',
                },
                {
                  elem: 'similar',
                }
              ]
            },
          ]
        }
      ]
    }
  ]
} );
