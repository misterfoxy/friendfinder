// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// GLOBAL VARIABLES
const app = express();
const PORT = 3000;

// use .static and path to give access to public directory
app.use(express.static(path.join(__dirname,'./app/public')));

// apply middleware to parse incoming reuest bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());

// load view routes
require(path.join(__dirname,'./app/routes/htmlroutes'))(app);

// initiate server

app.listen(process.env.PORT || PORT, function(){
  console.log('Application is listening on PORT '+ PORT);
});
