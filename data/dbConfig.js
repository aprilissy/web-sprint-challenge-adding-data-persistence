const knex = require('knex');

const config = require('../knexfile');

const db = knex(config.development); // wselect the development object from our knexfile

module.exports = db; // export for use in codebase