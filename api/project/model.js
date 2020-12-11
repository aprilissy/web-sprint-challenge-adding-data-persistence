const db = require('../../data/dbConfig');

module.exports = {
  getAllProjects,
  addProject
}

function getAllProjects() {
  return db('projects')
}

function addProject(project) {  
  return db('projects')
    .insert(project, 'id')
    .then(ids => ({ id: ids[0], ...project}))
}

// insert into projects (project_name, project_description, project_completed)
//   values ("Attend Meeting", "Mark's meeting should have been an emial", 0)