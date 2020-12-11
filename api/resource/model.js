const db = require('../../data/dbConfig');

module.exports = {
  getAllResources,
  addResource
}

function getAllResources() {
  return db('resources')
}

function addResource(resource) {
  return db('resources')
    .insert(resource, 'id')
    .then(ids => ({ id: ids[0], ...resource}))
}