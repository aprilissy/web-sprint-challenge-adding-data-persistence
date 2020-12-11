
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'find quiet place to eat', notes: 'take the van to the park', completed: 0, project_id:1},
        {id: 2, description: 'Write noets', notes: 'Need a table. Check conference room', completed: 0, project_id:2},
        {id: 3, description: 'Fix those nasty bugs', notes: 'Need the mac.', completed: 0, project_id:3}
      ]);
    });
};
