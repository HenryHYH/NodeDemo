var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world!!!');
}).listen(9001);

console.log('Server running at http://127.0.0.1:9001/');
