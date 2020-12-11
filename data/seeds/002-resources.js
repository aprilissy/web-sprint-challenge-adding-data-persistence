
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'computer', description: 'MacBook Pro'},
        {id: 2, name: 'conference room', description: '1A'},
        {id: 3, name: 'microphone', description: 'The Massive One'},
        {id: 4, name: 'delivery van', description: 'White #005'}
      ]);
    });
};
