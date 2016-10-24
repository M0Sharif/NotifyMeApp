var mongoose = require('mongoose');

//create new schema
var ImageSchema = mongoose.Schema({

  	title: {type: String},
	url: {type: String},
	description: {type: String},
	views: {type: String},
	ups: {type: String},
	downs: {type: String},
	score: {type: String},
	topic: {type: String},
	image_count: {type: String}
  	// email : {type: String, required:true},
});

//tell mongoose to create a real model from our shcema and export it
module.exports = mongoose.model('image', ImageSchema);