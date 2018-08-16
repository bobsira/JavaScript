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

      console.dir(JSON.parse(body));

      Request.post({
          "headers": { "Content-Type": "application/json" },
          "url": "http://weather.brck.io/api/logs/",
          "body": JSON.stringify( {
    	"secret":"cf43052fa26c422aac813eee7b0e7fcb",
    	"package":{
    		"unique_identifier":"9C4DA30E004B1200",
    		"winddir":"1110716464",
    		"windspeedmph":"808464945",
    		"windgustmph":"0",
    		"windgustdir":"0",
    		"windspdmph_avg2m":"0",
    		"winddir_avg2m":"29",
    		"windgustmph_10m":"0",
    		"windgustdir_10m":"0",
    		"humidity":"49",
    		"tempc":"29",
    		"rainin":0.0,
    		"dailyrainin":0.0,
    		"batt_lvl":0
    		}
    	})
      }, (error, response, body) => {
          if(error) {
              return console.dir(error);
          }
          console.dir(JSON.parse(body));
      });

  });

}

//setInterval(postToApi,1500);
postToApi();
