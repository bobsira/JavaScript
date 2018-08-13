// var express = require('express')
//   , bodyParser = require('body-parser');
// const axios = require('axios');
//
// var app = express();
//
// app.use(bodyParser.json());
//
// app.post('/', function(request, response){
//   console.log(request.body);      // your JSON
//    response.send(request.body);    // echo the result back
// });

//app.listen(3000);


var Request = require("request");



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

      //var data = JSON.parse(body);
      console.dir(JSON.parse(body));
      //console.log(data);
  });

}

setInterval(postToApi,300000);
//postToApi();
