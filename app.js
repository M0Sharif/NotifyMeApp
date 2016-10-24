var express = require('express');
var app = express();
var routes = require('./config/router');
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
var mongoose = require('mongoose');
var session = require('express-session');
var cookieParser = require('cookie-parser');

//access public folder
app.use(express.static(__dirname + '/public'))
// app.use('/public', express.static('public'));

// add support for cookies
app.use(cookieParser());

// add support for sessions
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'applicationumber2'
}));

//connect to the databse
mongoose.connect('mongodb://localhost/posts');

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// add the router last
app.use(routes);

app.listen(3000 , function(){
  console.log('listening on port 3000');
});