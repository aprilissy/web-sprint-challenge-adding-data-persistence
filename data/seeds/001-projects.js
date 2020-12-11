
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Lunch', description:'eat lunch', completed:false},
        {id: 2, name: 'Study', description:'finish notes', completed:false},
        {id: 3, name: 'Bugs, Bugs, Bugs', description:'debug', completed:false}
      ]);
    });
};
