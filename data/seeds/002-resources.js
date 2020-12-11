
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_id: 1, resource_name: 'computer', resource_description: 'MacBook Pro'},
        {resource_id: 2, resource_name: 'conference room', resource_description: '1A'},
        {resource_id: 3, resource_name: 'microphone', resource_description: 'The Massive One'},
        {resource_id: 4, resource_name: 'delivery van', resource_description: 'White #005'}
      ]);
    });
};
