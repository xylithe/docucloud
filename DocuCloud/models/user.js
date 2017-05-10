var mongoose = require('mongoose')
	, Schema = mongoose.Schema

var userSchema = new Schema({
	firstname: String,
    lastname: String,
});

module.exports = mongoose.model("User", userSchema);