'use strict';

var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'test'});
});

router.post('/upload', upload.single('filename'), function (req, res, next) {
  // console.log(req.file);
  res.json({
    file_size : req.file.size
  });
});


module.exports = router;
