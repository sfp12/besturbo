var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/best', function(req, res, next) {
  res.render('besturbo.html');
});

router.get('/login', function(req, res, next) {
  res.render('logedin.html');
});

router.get('/', function(req, res, next) {
  res.render('chat.html');
});

router.get('/test', function(req, res, next) {
  res.render('test.html');
});

module.exports = router;
