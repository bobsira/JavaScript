// load http module
const http = require('http');

//create http server and listen on port 8000 for request
http.createServer(function (request,response) {
  // set the response http header with status and content type
  response.writeHead(200, {'Content-Type' : 'text/plain'});
  //send the response body "Hello World"
  response.end('Hello World\n');
}).listen(8000);

//print url for accessing server 
