
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1, project_name: 'Lunch', project_description:'eat lunch', project_completed:false},
        {project_id: 2, project_name: 'Study', project_description:'finish notes', project_completed:false},
        {project_id: 3, project_name: 'Bugs, Bugs, Bugs', project_description:'debug', project_completed:false}
      ]);
    });
};
