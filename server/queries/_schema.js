'use strict';

const { schema } = require( 'normalizr' );

const resource = new schema.Entity( 'resource', {}, { idAttribute: 'alias' } );
const structure = new schema.Values( resource );
// resource.define( { resources } );
// const structure = new schema.Entity( 'structure', {}, { idAttribute: 'alias' } );

const setting = new schema.Entity( 'setting', {}, { idAttribute: 'key' } );
const pier = new schema.Entity( 'pier', {}, { idAttribute: 'alias' } );
const gallery = new schema.Entity( 'gallery', {}, { idAttribute: 'id' } );
const tour = new schema.Entity( 'tour', {
  tv_e_from: pier,
  gallery: [ gallery ],
}, { idAttribute: 'alias' } );
const banner = new schema.Entity( 'banner', { url: tour } );
const sight = new schema.Entity( 'sight' );

module.exports = {
  resource,
  structure,
  setting,
  tour,
  banner,
  sight,
};
