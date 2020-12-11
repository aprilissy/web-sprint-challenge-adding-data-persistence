const validateProject = async (req, res, next) => {
  console.log('validate',req.body);
  
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

module.exports = {
  validateProject
}