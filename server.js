var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
<<<<<<< 54be4ac9b21b507106de229e9f52729d060acd43
<<<<<<< f236c8374ab808cd30f5ab464bd9bbd6e096b18e
  response.end('Hello');
=======
  response.end('Hello LSD, I am V1');
>>>>>>> Add v1 branch
=======
  response.end('Hello LSD, I am V1\n');
>>>>>>> Add a breakline
};
var www = http.createServer(handleRequest);
www.listen(8080);
