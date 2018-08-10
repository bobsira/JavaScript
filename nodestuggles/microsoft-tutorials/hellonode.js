//load http module
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//create http server and listen on port 3000 for requests
const server = http.createServer((req,res) =>{
  //set the response http header with http status and content
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function
server.listen(port, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});;
