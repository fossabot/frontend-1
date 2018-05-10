'use strict';

const nevaTravel = require( './provider/nevaTravel' );
const astraMarin = require( './provider/astraMarin' );

const action = async ( { query }, { service, id } ) => {
  let api;

  switch ( service ) {
    case 'nevatravel':
      api = new nevaTravel( process.env.NEVATRAVEL_HOST, process.env.NEVATRAVEL_KEY );
      break;
    case 'astramarin':
      api = new astraMarin( process.env.ASTRAMARIN_HOST, process.env.ASTRAMARIN_LOGIN, process.env.ASTRAMARIN_PASSWORD );
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
  // const init = await api.init();
  // console.log( init );


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