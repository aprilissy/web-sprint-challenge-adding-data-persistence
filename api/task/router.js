const express = require('express');
const Tasks = require('./model');
const { validateTask } = require('../middleware/project-middleware');

const router = express.Router();

router.post('/', validateTask, async (req, res) => {
  try {
    req.body.completed = !!req.body.completed
    const newTask = await Tasks.addTask(req.body)
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/', async (req, res) => {
  try {    
    const tasks = await Tasks.getAllTasks()
    tasks.forEach(tsk => {
      tsk.completed = !!tsk.completed
    })   
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router;