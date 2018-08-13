var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple NodeJS App' });

  //setTimeout( res.render('index', { title: 'Simple NodeJS App' }) , 1500 );
});

module.exports = router;
