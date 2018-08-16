var Request = require("request");
function postToApi(){


  Request.post({
      "headers": { "content-type": "application/json" },
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

}

setInterval(postToApi,1500);
//postToApi();
