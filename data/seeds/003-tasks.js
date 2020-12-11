
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_id: 1, task_description: 'find quiet place to eat', task_notes: 'take the van to the park', task_completed: 0, project_id:1},
        {task_id: 2, task_description: 'Write noets', task_notes: 'Need a table. Check conference room', task_completed: 0, project_id:2},
        {task_id: 3, task_description: 'Fix those nasty bugs', task_notes: 'Need the mac.', task_completed: 0, project_id:3}
      ]);
    });
};
