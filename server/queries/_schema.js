'use strict';

const { schema } = require( 'normalizr' );

const structure = new schema.Entity( 'structure' );
const structureSchema = new schema.Values( structure );
const settingsSchema = new schema.Entity( 'setting' );
const tourSchema = new schema.Entity( 'tour' );

module.exports = {
  structure: structureSchema,
  settings: settingsSchema,
  tour: tourSchema,
};
