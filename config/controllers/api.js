var User = require('../../models/user');
var axios = require('axios');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SESSIONKEY;

function authenticate(req, res, next){	
    var token = req.session.token
    if (token){
        jwt.verify(token, SECRET, function (err){
            if (err){
                res.send(err);
            } else {
                next();
            }
        });
    } else {
        res.status(403).send("no token present");
    }      
}

function imgurRequest(req, res){
	axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
	.then(function (response) {
    	var data = {
    		images: response.data.data,
    		message: "successful"
    	}
    	res.send(data)
	})
	.catch(function (error) {
    	res.send(error);
	});
}

module.exports = { 
	auth: authenticate,
	imgur: imgurRequest
}