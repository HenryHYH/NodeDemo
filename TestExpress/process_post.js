var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('TestExpress/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/process_post.html');
});

app.post('/process_post', urlEncodedParser, function (req, res) {
    var json = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    }
    res.send(JSON.stringify(json));
});

app.listen(9001);
