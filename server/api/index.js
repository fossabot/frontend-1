'use strict';

const nevaTravel = require( './provider/nevaTravel' );
const astraMarin = require( './provider/astraMarin' );

const action = async ( { query }, { service, id } ) => {
  let api;

  switch ( service ) {
    case 'nevatravel':
      api = new nevaTravel(
        process.env.NEVATRAVEL_HOST,
        process.env.NEVATRAVEL_KEY );
      break;
    case 'astramarin':
      api = new astraMarin(
        process.env.ASTRAMARIN_HOST,
        process.env.ASTRAMARIN_LOGIN,
        process.env.ASTRAMARIN_PASSWORD,
        process.env.ASTRAMARIN_EMAIL );
      break;
    default:
      throw new Error( 'Service is not defined' );
  }

  // const init = await Promise.all( [
  //   api.init(),
  //   api.piers(),
  //   api.programs(),
  // ] );

  // Astra
  await api._GetServiceGroup();

  const today = new Date();
  const todayPlusMonth = new Date( today.setMonth( today.getMonth() + 1 ) );
  await api._ServicesOnDate( today, todayPlusMonth, 'Т00000002' );
  const EventsOnDate = await api._EventsOnDate( today, '000000001' ); // 000000001 → "City Sightseeing NEVA"

  api.venueID = EventsOnDate._EventsOnDate[ EventsOnDate._EventsOnDate.length - 1 ].VenueID;
  api.eventID = EventsOnDate._EventsOnDate[ EventsOnDate._EventsOnDate.length - 1 ].ID;

  await api._SeatСategory();

  await api._SeatsOnEvent( '000033078' );
  // await api._BookingSeat( 'PALMIRA-3', 'nevatrip_testapi_000001', '000033078' );
  // await api._BookingSeat( 'PALMIRA-3', 'nevatrip_testapi_000001', '000033078' );
  await api._GetTicketType();
  await api._GetPaymentType();
  api.categoryID = '000000002';
  await api._GetSeatPrice( '000033078', '000000001', '000000001', false, '', '000000002' );

  const response = api;
  console.log( response );

  if ( query.date ) {
    await api.date( query.date, { program: id, pier: query.pier } );
  }
  
  // await api.pier();
  // await api.direction();

  // await api.time();
  // await api.tickets();
  // await api.seat();
  // await api.order();

  return {
    // id,
    // service,
    ...api,
  };
};

module.exports = action;