//wiki.js - Wiki route module
const express = require('express');
var router = express.Router();

//home page route
router.get('/',function (req,res) {
  res.send('Wiki home page');
});

//about page route
router.get('/about',function (req,res) {
  res.send('About this Wiki');
});

module.exports = router;

//to use this router
var wiki = require('./wiki.js');
//...
app.use('/wiki',wiki);
