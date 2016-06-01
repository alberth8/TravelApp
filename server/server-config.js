var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser'); 
var engines = require('consolidate'); // not sure what this does, but i'm leaving it untouched
var path = require('path');
var router = require('./router');

var app = express();

// Set port
app.set('port', 8181);

//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
app.set('views', path.dirname('dist')); 
app.engine('html', engines.mustache); // ?? 
app.set('view engine', 'html'); // ?? 

app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('../dist')));
//console.log(__dirname + '../dist');

// app.use(cookieParser('shhhh, very secret'));
// app.use(session({
//   secret: 'shhh, it\'s a secret',
//   resave: false,
//   saveUninitialized: true
// }));

app.use('/', router);

// assuming our client folder will be called client
app.use(express.static(__dirname + '/../client')); 

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

// app.get('/', util.checkUser, handler.renderIndex);
// app.get('/create', util.checkUser, handler.renderIndex);

// // login
// app.get('/login', handler.loginUserForm);
// app.post('/login', handler.loginUser);

// // logout
// app.get('/logout', handler.logoutUser);

// // signup
// app.get('/signup', handler.signupUserForm);
// app.post('/signup', handler.signupUser);

//app.get('/*', handler.navToLink);

// module.exports = app;