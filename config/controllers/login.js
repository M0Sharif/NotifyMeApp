var User = require('../../models/user');
var passwordHash = require('password-hash/lib/password-hash');
var hash = require('password-hash');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SESSIONKEY;

function indexLogin(req, res){
	var token;
	var username = req.body.username;
	var password = req.body.password;
	User.findOne({username: username}, function(err, user){
		var hashedPassword;
		if(!user){
			res.send("error: "+ err);
		}else if(err){
			res.send("error: "+err);
		}else{
			hashedPassword = user.password;
		};
		if(passwordHash.verify(password, hashedPassword)){
			var myToken = jwt.sign({username}, SECRET, {expiresIn: "12h"})
			req.session.token = myToken;
			token = myToken;
			data = {
				token: token,
				message: "success"
			}
			res.send(data);
		}
		// else{
		// 	res.send({message: "unsuccessful"});
		// }
 	});
}

module.exports = { index: indexLogin }