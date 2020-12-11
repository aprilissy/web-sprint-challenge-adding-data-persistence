const db = require('../../data/dbConfig');

module.exports = {
  getAllTasks,
  addTask
}

function getAllTasks() {
  return db('tasks as t')
    .join('projects as p', 't.id', 'p.id')
    .select('p.name', 'p.description', 't.description', 't.notes', 't.completed')
}

function addTask(task) {
  return db('tasks')
    .insert(task, 'id')
    .then(ids => ({ id: ids[0], ...task}))
}

// select
//   p.name,
//   p.description,
//   t.description,
//   t.notes,
//   t.completed
// from tasks as t
// join projects as p
//     on t.id = p.id;