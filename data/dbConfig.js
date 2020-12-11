const knex = require('knex');

const knexConfig = require('../knexfile');

const environment = process.env.NODE_ENV || "development";

// const db = knex(config.development); // wselect the development object from our knexfile

// module.exports = db; // export for use in codebase

module.exports = knex(knexConfig[environment]);