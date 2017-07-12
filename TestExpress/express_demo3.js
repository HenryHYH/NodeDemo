var express = require('express');
var app = express();

app.use(express.static('TestExpress/public'));

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.listen(9001);
