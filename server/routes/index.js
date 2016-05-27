var router = require('express').Router();
var path = require('path');

// // Rest API
require(path.join(__dirname, './', 'users'))(router);
require(path.join(__dirname, './', 'trips'))(router);

// Homepage/Client 
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../', 'dist', 'index.html'));
});



module.exports = function(app) {
  // set authentication routes
  //require('./authentication.js')(app);
  app.use('/', router);
};