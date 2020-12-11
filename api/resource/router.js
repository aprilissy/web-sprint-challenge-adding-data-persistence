const express = require('express');
const Resources = require('./model');
const { validateResource } = require('../middleware/project-middleware');

const router = express.Router();

router.post('/', validateResource, async (req, res) => {
  try {
    const newResource = await Resources.addResource(req.body)
    res.status(201).json(newResource)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
router.get('/', async (req, res) => {
  try {    
    const resources = await Resources.getAllResources()
    res.status(200).json(resources)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router;