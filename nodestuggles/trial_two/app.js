const axios = require('axios');

function postToApi() {
  let fisrtAPIEndPoint = 'https://api.thingspeak.com/update.json';
  let secondAPIEndPoint = 'https://thingspeak.com/channels/533666';
  let data = {
    api_key: 'j3GER6CSBNU6PIIZ',
    field1: '123',
    field2: '456'
  };
  // post to 1st api
  axios.post(fisrtAPIEndPoint, data).then(response => {
    console.log(response);
    // post to second api
    axios.post(secondAPIEndPoint, response).then( res => {
      // response from second post request
    }).catch(error => {
      console.log(error)
    });
  }).catch(error => {
    console.log(error)
  });
}

// run the function
postToApi(); // you can pass data to it if any.
