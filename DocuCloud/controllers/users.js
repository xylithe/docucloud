var express = require('express')
	, router = express.Router()
	, User = require('../models/user')

router.get('/', function (req, res) {
	var users = User.find(function (error, users) {
		res.render('User/ListUsers', { title: 'title', users: users });
	});
})

router.get('/createUser', function (req, res) {
	res.render('User/CreateUser');
})

router.post('/create', function (req, res) {
	new User({ firstname: req.body.firstname, lastname: req.body.lastname }).save();
	res.send('User ' + req.body.firstname + ' ' + req.body.lastname + ' created');	
})

module.exports = router