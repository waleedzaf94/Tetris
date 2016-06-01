
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Score = new Schema({
	username: {
		type: String,
		required: true
	},
	wins: {
		type: Number,
		required: true
	},
	losses: {
		type: Number,
		required: true
	}
})

module.exports = mongoose.model('Score', Score);
