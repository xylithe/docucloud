var express = require('express')
	, app = express()

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/docucloud');

app.use(require('./controllers'))

app.set('view engine', 'pug');

app.listen(3000, function () {
	console.log('Listening on port 3000...');
})