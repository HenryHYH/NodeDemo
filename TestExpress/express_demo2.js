var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('get index');
});

app.post('/', function (req, res) {
    res.send('post index');
});

app.get('/del_user', function (req, res) {
    res.send('del_user');
});

app.get('/list_user', function (req, res) {
    res.send('list_user');
});

app.get('/ab*cd', function (req, res) {
    res.send("ab*cd");
});

app.listen(9001);
