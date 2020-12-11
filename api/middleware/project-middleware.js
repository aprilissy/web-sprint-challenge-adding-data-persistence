const validateProject = async (req, res, next) => {
  if(!req.body) {
    res.status(400).json({ message: 'missing project data '})
  } else if (!req.body.name) {
    res.status(400).json({ message: 'missing required name field'})
  // } else if (req.body.completed === undefined) {
  //   res.status(400).json({ message: 'missing required completed field'})
  } else {
    next()
  }
}
const validateResource = async (req, res, next) => {
  if(!req.body) {
    res.status(400).json({ message: 'missing resource data '})
  } else if (!req.body.name) {
    res.status(400).json({ message: 'missing required name field'})
  } else {
    next()
  }
}
const validateTask = async (req, res, next) => {
  console.log("VALIDATE: ", req.body)
  if(!req.body) {
    res.status(400).json({ message: 'missing task data '})
  } else if (!req.body.description) {
    res.status(400).json({ message: 'missing required description'})
  // }  else if (req.body.completed === undefined) {
  //   res.status(400).json({ message: 'missing required completed'})
  } else if (!req.body.id) {
    res.status(400).json({ message: 'missing required id'})
  } else {
    next()
  }
}

module.exports = {
  validateProject,
  validateResource,
  validateTask
}