
exports.seed = function(knex) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('task_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task_resources').insert([
        {task_resource_id: 1, resource_id: 4, task_id: 1},
        {task_resource_id: 2, resource_id: 2, task_id: 2},
        {task_resource_id: 3, resource_id: 1, task_id: 3}
      ]);
    });
};
