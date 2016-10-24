var mongoose = require('mongoose');

//create new schema
var UserSchema = mongoose.Schema({

	username : {type: String, required:true, unique: true},
  	password : {type: String, required:true}
  	// email : {type: String, required:true},
});

//tell mongoose to create a real model from our shcema and export it
module.exports = mongoose.model('user', UserSchema);