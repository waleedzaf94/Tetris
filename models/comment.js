
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
	username: {
		type: String,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true,
		"default": Date.now
	}
});

module.exports = mongoose.model('Comment', Comment);

// mongoose.connect('mongodb://localhost/TicTac');
