
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
	username: String,
	comment: String,
	date: Date
});

module.exports = mongoose.model('Comment', Comment);
