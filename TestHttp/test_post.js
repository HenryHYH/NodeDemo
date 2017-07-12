var http = require('http');
var querystring = require('querystring');
var fs = require('fs');

var postHtml = fs.readFileSync('post.html').toString();

http.createServer(function (req, res) {
    var body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        console.log("body:{" + body + "}");
        body = querystring.parse(body);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

        if (body.name && body.url) {
            res.write('名称=' + body.name);
            res.write('<br />');
            res.write('Url=' + body.url);
        } else {
            res.write(postHtml);
        }

        res.end();
    });
}).listen(9001);