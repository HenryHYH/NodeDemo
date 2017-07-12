var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(req, res) {
        var pathName = url.parse(req.url).pathname;
        console.log('Requrest for ' + pathName);

        route(pathName);

        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write("Hello world");
        res.end();
    };

    http.createServer(onRequest).listen(9001);
    console.log('Server start on 9001');
};

exports.start = start;
