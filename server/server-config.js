var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var util = require('../lib/utility');
var engines = require('consolidate');
var path = require('path');

var handler = require('../lib/request-handler');

var app = express();

//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
app.set('views', path.dirname('dist'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');


app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('../dist')));
//console.log(__dirname + '../dist');

app.use(cookieParser('shhhh, very secret'));
app.use(session({
  secret: 'shhh, it\'s a secret',
  resave: false,
  saveUninitialized: true
}));

app.get('/', util.checkUser, handler.renderIndex);
app.get('/create', util.checkUser, handler.renderIndex);

app.get('/login', handler.loginUserForm);
app.post('/login', handler.loginUser);
app.get('/logout', handler.logoutUser);

app.get('/signup', handler.signupUserForm);
app.post('/signup', handler.signupUser);

//app.get('/*', handler.navToLink);


var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');
 
new WebpackDevServer(webpack(config), {
  hot: true,
  inline: true,
  historyApiFallback: true,
  proxy: {
     "*": "http://localhost:3000"
   }
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
   console.log(err);
  }

  console.log('Listening at localhost:3001');
});





module.exports = app;