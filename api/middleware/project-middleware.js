const validateProject = async (req, res, next) => {
  if(!req.body) {
    res.status(400).json({ message: 'missing project data '})
  } else if (!req.body.project_name) {
    res.status(400).json({ message: 'missing required project_name field'})
  } else if (!req.body.project_completed) {
    res.status(400).json({ message: 'missing required project_completed field'})
  } else {
    next()
  }
}
const validateResource = async (req, res, next) => {
  if(!req.body) {
    res.status(400).json({ message: 'missing resource data '})
  } else if (!req.body.resource_name) {
    res.status(400).json({ message: 'missing required resource_name field'})
  } else {
    next()
  }
}

module.exports = {
  validateProject,
  validateResource
}