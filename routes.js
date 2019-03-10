//Requires express
const express = require('express');

//Creates the router constructor
const router = express.Router();

//Add data.json file
const { projects } = require('./data/data.json');

//Adds root route, home route
router.get('/', (req, res, next) => {
  res.locals.projects = projects
  res.render('index');
});

//Adds projects page
router.get('/projects', (req, res) => {
  return res.redirect('projects/0');
});

router.get('/projects/:id', (req, res, next) => {
  let id = req.params.id;

  if ( id < 0 || id > projects.length || isNaN(id) ) {
    let = randomProject = Math.floor(Math.random() * projects.length);
    return res.redirect(`/project/${randomProject}`);
  }

  const project = projects[id]
  console.log(project);
  res.render('project', { project : project });
});

//Renders the 404 error page
router.get('/error', (req, res, next) => {
  res.render('error');
});

//Adds about page
router.get('/about', (req, res, next) => {
  res.render('about');
});

//Exports the router
module.exports = router;
