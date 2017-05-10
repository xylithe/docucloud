var express = require('express')
	, router = express.Router()

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/documents', require('./documents'))
router.use('/users', require('./users'))

router.get('/', function (req, res) {
	res.send('Home Screen');
})

module.exports = router