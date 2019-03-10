//Adds express to the application
const express = require('express');
const app = express();

//set the vew for pug files
app.set('view engine', 'pug');

//Using a static route for static files
app.use('/static', express.static('public'));

//Imports the routes
const routes = require('./routes');

//Uses the routes
app.use(routes);

//Renders the 404 error
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Handles errors
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

//Calls port to listen from
app.listen(process.env.PORT || 3000);
