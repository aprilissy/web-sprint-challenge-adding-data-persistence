const express = require('express');
const Tasks = require('./model');

const router = express.Router();

// [POST] /api/tasks
// [GET] /api/tasks
// Each task must include project_name and project description so you will need to join tables

router.get('/', (req, res) => {
  
})

module.exports = router;