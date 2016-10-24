var User = require('../../models/user');
var passwordHash = require('password-hash/lib/password-hash');
var hash = require('password-hash');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SESSIONKEY;

function createRegister(req, res){

	var username = req.body.username;
    var password = req.body.password;
    var hashedPassword = hash.generate(password);

      User.create({username: username, password: hashedPassword}, function(err, user){
	        if(err || req.body.password == "") {
	          res.send("username and password are required"); 
	        }else{
	          res.send("success");
	        }
      });    
}

module.exports = { create: createRegister }