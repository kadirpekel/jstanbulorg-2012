var http = require('http');

var server = http.createServer(function(req, resp) {
  resp.end('Hello World');
});

server.listen(3000);
