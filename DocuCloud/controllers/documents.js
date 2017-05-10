var express = require('express')
	, router = express.Router()
//	, Comment = require('../models/comment')

router.get('/', function (req, res) {
	res.render('documents');
})

router.get('/create', function (req, res) {
	res.send('Create Document');
})

router.post('/upload', function (req, res) {
	var form = new multiparty.Form();
	var fileid = uuidV4();
	form.parse(req, function (err, fields, files) {
		res.writeHead(200, { 'content-type': 'text/plain' });
		res.write('received upload:\n\n');
		res.end(util.inspect({ fields: fields, files: files }));
	});
	form.on('file', function (name, file) {

		var gfs = Grid(conn.db);
		var writestream = gfs.createWriteStream({
			filename: fileid
		});

		fs.createReadStream(file.path).pipe(writestream);
		writestream.on('close', function (file) {
			// do something with `file`
			console.log(file.filename + 'Written To DB');

			//write content to file system
			var fs_write_stream = fs.createWriteStream('write.pdf');

			//read from mongodb
			var readstream = gfs.createReadStream({
				filename: fileid
			});
			readstream.pipe(fs_write_stream);
			fs_write_stream.on('close', function () {
				console.log('file has been written fully!');
			});
		});
		console.log(file.path);
	});
});

module.exports = router