const db = require('../../data/dbConfig');

module.exports = {
  getAllResources
}

function getAllResources() {
  return db('resources')
}