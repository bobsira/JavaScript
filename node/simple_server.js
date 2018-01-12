var http = require('http');
function handle_incoming_request(req,res) {
  console.log("INCOMING REQUEST: " + req.method + " " + req.url);
  //var body = 'Thanks for calling!\n';
  //var content_length = body.length;
  res.writeHead(200, {
    //'Content-Length':content_length,
    'Content-Type':'application/json'
  });
  res.end(JSON.stringify( { error:null }) + "\n");
}

var s = http.createServer(handle_incoming_request);
s.listen(8080);
