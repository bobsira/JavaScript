var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* cool users. */
router.get('/cool', function(req, res, next) {
  res.render('cool', { title: 'Hello, World!' });
});


module.exports = router;
