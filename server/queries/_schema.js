'use strict';

const { schema } = require( 'normalizr' );

const structureFlat = new schema.Entity( 'structureFlat', {}, { idAttribute: 'alias' } );

const settingsSchema = new schema.Entity( 'setting' );
const tourSchema = new schema.Entity( 'tour' );

module.exports = {
  structureFlat: structureFlat,
  settings: settingsSchema,
  tour: tourSchema,
};
