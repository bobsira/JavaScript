var http = require('http');

http.createServer(function (req,res) {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    var obj = {
        firstname: 'Tiffany',
        lastname: 'Sira Sira'
    };
    res.end(JSON.stringify(obj));
}).listen(1337,'127.0.0.1');