var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  postToApi();
  res.send('respond with a resource');
});


/* GET json data from post request . */
router.get('/data', function(req, res) {
  var db = req.db;
  var collection = db.get('data');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});



function postToApi(){
  Request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://api.thingspeak.com/update.json",
    "body": JSON.stringify({
      "api_key": "j3GER6CSBNU6PIIZ",
      "field1": "123"
    })
  }, (error, response, body) => {
    if(error) {
      return console.dir(error);
    }

    var data = JSON.parse(body);
    console.dir(JSON.parse(body));
    console.log(data);
    //insert data to my database
    var db = req.db;
    var collection = db.get('data');
    collection.insert(data, function(err, result){
      res.send(
        (err === null) ? { msg: 'Successful' } : { msg: err }
      );
    });

  });

}




module.exports = router;
