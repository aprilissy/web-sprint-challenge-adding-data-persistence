const express = require('express');
const Tasks = require('./model');
const { validateTask } = require('../middleware/project-middleware');

const router = express.Router();

router.post('/', validateTask, async (req, res) => {
  try {
    const newTask = await Tasks.addTask(req.body)
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/', async (req, res) => {
  try {    
    const tasks = await Tasks.getAllTasks()
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router;