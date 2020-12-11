const express = require('express');
const Projects = require('./model');
const { validateProject } = require('../middleware/project-middleware');

const router = express.Router();

router.get('/', async (req, res) => {
  try {    
    const projects = await Projects.getAllProjects()
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/', validateProject, async (req, res) => {
  try {
    const newProject = await Projects.addProject(req.body)
    res.status(201).json(newProject)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router;