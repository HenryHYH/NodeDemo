var express = require("express");
var app = express();

app.get('/', function (req, res) {
    //res.send('Hello world');
    res.json({ "name": "abc", "age": 1 });
});

var server = app.listen(9001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("url: http://%s:%s/", host, port);
});