var mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, ObjectId = Schema.ObjectId;

var documentSchema = new Schema({
	documentId: ObjectId,
	filename: String,
	lastname: String
});

module.exports = mongoose.model('User', userSchema);