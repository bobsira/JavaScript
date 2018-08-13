var express = require('express');
var Request = require("request");
var router = express.Router();

var results = [];
function postToApi() {
  Request.post({
    "headers":{ "content-type": "application/json" },
    "url": "https://api.thingspeak.com/update.json",
    "body": JSON.stringify({
      "api_key": "j3GER6CSBNU6PIIZ",
      "field1": "123"
    })
  }, (error,response,body) =>{
    if(error) {return console.dir(error);}
    results = JSON.parse(body);
  });
}

//postToApi();
setInterval(postToApi,5000);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*test two routes*/
//  router.get('/test',function (req,res,next) {
//    console.log(results);
//    res.send(results);
//    //setTimeout(  res.send(results) , 1500 );
//  })

/* GET test page. */
router.get('/test', function(req, res, next) {
  Request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://api.thingspeak.com/update.json",
    "body": JSON.stringify({
      "api_key": "j3GER6CSBNU6PIIZ",
      "field1": "123"
    })
  },(error,response,body)=>{
    if(error){return next(error);}
    result = JSON.parse(body);
    console.log(result);
    
    res.render('test',{ title: 'Results After Posting to an Online API', results: JSON.parse(body) });
  }
);
  //res.render('test', { title: 'Test', result: results,});
});



module.exports = router;
