var express = require('express');
var router = express.Router();
var Image = require('../models/image');
var axios = require('axios');
var path = require('path');

var login = require('./controllers/login.js');
var register = require('./controllers/register.js');
var api = require('./controllers/api.js');

router.route('/login')
	.post(login.index);

router.route('/register')
	.post(register.create);

router.route('/api')
	.get(api.auth, api.imgur);

router.route('*')
      .get(function(req, res){
        res.sendFile(path.resolve("./public/index.html"));
      });

router.route('/logout')
	  .post(function(req, res){
	  		console.log("deleting req.session!!");
	  		req.session.destroy();
    		return res.send("successful");
	  });

module.exports = router;