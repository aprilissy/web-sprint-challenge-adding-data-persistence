const db = require('../../data/dbConfig');

module.exports = {
  getAllTasks,
  addTask
}

function getAllTasks() {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('p.project_name', 'p.project_description', 't.task_description', 't.task_notes', 't.task_completed')
}

function addTask(task) {
  return db('tasks')
    .insert(task, 'id')
    .then(ids => ({ id: ids[0], ...task}))
}

// select
//   p.project_name,
//   p.project_description,
//   t.task_description,
//   t.task_notes,
//   t.task_completed
// from tasks as t
// join projects as p
//     on t.project_id = p.project_id;