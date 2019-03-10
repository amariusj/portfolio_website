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

//Calls port to listen from
app.listen(3000);
