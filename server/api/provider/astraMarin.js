'use strict';

const rest = require( 'rest' );
const mime = require( 'rest/interceptor/mime' );
const basicAuth = require( 'rest/interceptor/basicAuth' );
const fastXmlParser = require( 'fast-xml-parser' );
const api = rest
  .wrap( basicAuth )
  .wrap( mime );

class astraMarin {
  constructor( path, username, password, email ) {
    this.path = () => path;
    this.username = () => username;
    this.password = () => password;
    this.email = () => email;
    this.trip = {};
  }

  async init() {
    return await api( {
      path: this.path() + '?wsdl',
      username: this.username(),
      password: this.password()
    } ).then( response => {
      const jsonObj = fastXmlParser.parse( response.entity );
      console.log( jsonObj );
      return this;
    } )
  }

  static _createRequest( method, body ) {
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:int="http://localhost/InternetSaleJSON">
       <soapenv:Header/>
       <soapenv:Body>
          <int:${ method }>
            ${ body ? '<int:StringJSON>' + JSON.stringify( body ) + '</int:StringJSON>' : '' }
          </int:${ method }>
       </soapenv:Body>
    </soapenv:Envelope>`;
  }

  // 
  set serviceGroupID( serviceGroupID ) { this.trip.serviceGroupID = serviceGroupID; }
  get serviceGroupID() { return this.trip.serviceGroupID; }
  // 
  set serviceID( serviceID ) { this.trip.serviceID = serviceID; }
  get serviceID() { return this.trip.serviceID; }
  // 
  set eventID( eventID ) { this.trip.eventID = eventID; }
  get eventID() { return this.trip.eventID; }
  // 
  set venueID( venueID ) { this.trip.venueID = venueID; }
  get venueID() { return this.trip.venueID; }
  // 
  set categoryID( categoryID ) { this.trip.categoryID = categoryID; }
  get categoryID() { return this.trip.categoryID; }
  // 
  set seatID( seatID ) { this.trip.seatID = seatID; }
  get seatID() { return this.trip.seatID; }
  // 
  set sessionID( sessionID ) { this.trip.sessionID = sessionID; }
  get sessionID() { return this.trip.sessionID; }
  // 
  set ticketTypeID( ticketTypeID ) { this.trip.ticketTypeID = ticketTypeID; }
  get ticketTypeID() { return this.trip.ticketTypeID; }
  // 
  set paymentTypeID( paymentTypeID ) { this.trip.paymentTypeID = paymentTypeID; }
  get paymentTypeID() { return this.trip.paymentTypeID; }
  // 
  set resident( resident ) { this.trip.resident = resident; }
  get resident() { return this.trip.resident; }


  // 1
  async _GetServiceGroup() {
    return await api( {
      path     : this.path(),
      username : this.username(),
      password : this.password(),
      entity   : this._createRequest( 'GetServiceGroup' ),
    } ).then( response => {
      const jsonObj = fastXmlParser.parse( response.entity );
      this._GetServiceGroup = JSON.parse( jsonObj['soap:Envelope']['soap:Body']['m:GetServiceGroupResponse']['m:return']['d4p1:ServiceType']['d4p1:StringJSON'] );

      return this;
    } )
  }

  // 2
  async _ServicesOnDate( dateFrom, dateTo = '', serviceGroupID = '' ) {
    this.trip.serviceGroupID = this.trip.serviceGroupID || serviceGroupID;
    const request = {
      Date_From       : dateFrom.toISOString(),
      Date_To         : dateTo.toISOString(),
      ServiceGroup_ID : this.trip.serviceGroupID,
      Email           : this.email(),
    };

    return await api( {
      path     : this.path(),
      username : this.username(),
      password : this.password(),
      entity   : this._createRequest( 'ServicesOnDate', request ),
    } ).then( response => {
      const jsonObj = fastXmlParser.parse( response.entity );
      this._ServicesOnDate = JSON.parse( jsonObj['soap:Envelope']['soap:Body']['m:ServicesOnDateResponse']['m:return']['d4p1:Services']['d4p1:StringJSON'] );

      return this;
    } )
  }

  // 3
  async _EventsOnDate( date, serviceID, serviceGroupID, eventID = '' ) {
    this.trip.serviceID = this.trip.serviceID || serviceID;
    this.trip.serviceGroupID = this.trip.serviceGroupID || serviceGroupID;
    this.trip.eventID = this.trip.eventID || eventID;
    const request = {
      Service_ID      : this.trip.serviceID,
      Date            : date.toISOString(),
      ServiceGroup_ID : this.trip.serviceGroupID,
      Event_ID        : this.trip.eventID,
      Email           : this.email(),
    };

    return await api( {
      path     : this.path(),
      username : this.username(),
      password : this.password(),
      entity   : this._createRequest( 'EventsOnDate', request ),
    } ).then( response => {
      const jsonObj = fastXmlParser.parse( response.entity );
      this._EventsOnDate = JSON.parse( jsonObj['soap:Envelope']['soap:Body']['m:EventsOnDateResponse']['m:return']['d4p1:Event']['d4p1:StringJSON'] );

      return this;
    } )
  }

  // 4
  async _SeatСategory( venueID ) {
    this.trip.venueID = this.trip.venueID || venueID;
    const request = {
      Venue_ID : this.trip.venueID,
      Email    : this.email(),
    };

    return await api( {
      path     : this.path(),
      username : this.username(),
      password : this.password(),
      entity   : this._createRequest( 'SeatСategory', request ),
    } ).then( response => {
      const jsonObj = fastXmlParser.parse( response.entity );
      this._SeatСategory = JSON.parse( jsonObj['soap:Envelope']['soap:Body']['m:Seat']['m:return']['d4p1:Seats']['d4p1:StringJSON'] );

      return this;
    } )
  }

  // 5
  async _SeatsOnEvent( eventID, categoryID = '' ) {
    this.trip.eventID = this.trip.eventID || eventID;
    this.trip.categoryID = this.trip.categoryID || categoryID;
    const request = {
      Event_ID    : this.trip.eventID,
      Category_ID : this.trip.categoryID,
      Email       : this.email(),
    };

    return await api( {
      path     : this.path(),
      username : this.username(),
      password : this.password(),
      entity   : this._createRequest( 'SeatsOnEvent', request ),
    } ).then( response => {
      const jsonObj = fastXmlParser.parse( response.entity );
      this._SeatsOnEvent = JSON.parse( jsonObj['soap:Envelope']['soap:Body']['m:SeatsOnEventResponse']['m:return']['d4p1:Seats']['d4p1:StringJSON'] );

      return this;
    } )
  }

  // 6
  async _BookingSeat( seatID, sessionID, eventID ) {
    this.trip.seatID = this.trip.seatID || seatID;
    this.trip.sessionID = this.trip.sessionID || sessionID;
    this.trip.eventID = this.trip.eventID || eventID;
    const request = {
      Event_ID   : this.trip.eventID,
      Seat_ID    : this.trip.seatID,
      Session_ID : this.trip.sessionID,
      Email      : this.email(),
    };

    return await api( {
      path     : this.path(),
      username : this.username(),
      password : this.password(),
      entity   : this._createRequest( 'BookingSeat', request ),
    } ).then( response => {
      const jsonObj = fastXmlParser.parse( response.entity );
      this._BookingSeat = JSON.parse( jsonObj['soap:Envelope']['soap:Body']['m:BookingSeatResponse']['m:return']['d4p1:Book']['d4p1:StringJSON'] );

      return this;
    } )
  }

  // 7
  async _CancelBookingSeat( seatID = '', sessionID, eventID ) {
    this.trip.seatID = this.trip.seatID || seatID;
    this.trip.sessionID = this.trip.sessionID || sessionID;
    this.trip.eventID = this.trip.eventID || eventID;
    const request = {
      Event_ID   : this.trip.eventID,
      Seat_ID    : this.trip.seatID,
      Session_ID : this.trip.sessionID,
      Email      : this.email(),
    };

    return await api( {
      path     : this.path(),
      username : this.username(),
      password : this.password(),
      entity   : this._createRequest( 'CancelBookingSeat', request ),
    } ).then( response => {
      const jsonObj = fastXmlParser.parse( response.entity );
      this._CancelBookingSeat = JSON.parse( jsonObj['soap:Envelope']['soap:Body']['m:CancelBookingSeatResponse']['m:return']['d4p1:CancelBook']['d4p1:StringJSON'] );

      return this;
    } )
  }

  // 8
  async _GetTicketType( serviceID ) {
    this.trip.serviceID = this.trip.serviceID || serviceID;
    const request = {
      Service_ID : this.trip.serviceID,
      Email      : this.email(),
    };

    return await api( {
      path     : this.path(),
      username : this.username(),
      password : this.password(),
      entity   : this._createRequest( 'GetTicketType', request ),
    } ).then( response => {
      const jsonObj = fastXmlParser.parse( response.entity );
      this._GetTicketType = JSON.parse( jsonObj['soap:Envelope']['soap:Body']['m:GetTicketTypeResponse']['m:return']['d4p1:TicketType']['d4p1:StringJSON'] );

      return this;
    } )
  }

  // 9
  async _GetPaymentType() {
    const request = {
      Email      : this.email(),
    };

    return await api( {
      path     : this.path(),
      username : this.username(),
      password : this.password(),
      entity   : this._createRequest( 'GetPaymentType', request ),
    } ).then( response => {
      const jsonObj = fastXmlParser.parse( response.entity );
      console.log( jsonObj['soap:Envelope']['soap:Body'] );
      this._GetPaymentType = JSON.parse( jsonObj['soap:Envelope']['soap:Body']['m:GetPaymentTypeResponse']['m:return']['d4p1:PaymentType']['d4p1:StringJSON'] );
      console.log( this._GetPaymentType );

      return this;
    } )
  }
  
  // 10
  async _GetSeatPrice( eventID, ticketTypeID, paymentTypeID, resident = false, seatID = '', categoryID = '' ) {
    this.trip.eventID = this.trip.eventID || eventID;
    this.trip.ticketTypeID = this.trip.ticketTypeID || ticketTypeID;
    this.trip.paymentTypeID = this.trip.paymentTypeID || paymentTypeID;    
    this.trip.resident = this.trip.resident || resident;    
    this.trip.seatID = this.trip.seatID || seatID;
    this.trip.categoryID = this.trip.categoryID || categoryID;
    const request = {
      Event_ID       : this.trip.eventID,
      Seat_ID        : this.trip.seatID,
      Category_ID    : this.trip.categoryID,
      TicketType_ID  : this.trip.ticketTypeID,
      PaymentType_ID : this.trip.paymentTypeID,
      Email          : this.email(),
    };

    return await api( {
      path     : this.path(),
      username : this.username(),
      password : this.password(),
      entity   : this._createRequest( 'GetSeatPrice', request ),
    } ).then( response => {
      const jsonObj = fastXmlParser.parse( response.entity );
      this._GetSeatPrice = JSON.parse( jsonObj['soap:Envelope']['soap:Body']['m:GetSeatPriceResponse']['m:return']['d4p1:Price']['d4p1:StringJSON'] );

      return this;
    } )
  }
  
}

module.exports = astraMarin;