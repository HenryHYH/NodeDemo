var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

app.use('/user/:id', function (req, res, next) {
    console.log('method: ', req.method);
    next();
}, function (req, res, next) {
    console.log('url: ', req.originalUrl);
    next();
});

app.get('/user/:id', function (req, res, next) {
    res.send('User.id = ' + req.params.id);
});

app.get('/test/:id', function (req, res, next) {
    if (req.params.id == 0)
        next('route');
    else
        next();
}, function (req, res, next) {
    res.send('regular');
});

app.get('/test/:id', function (req, res, next) {
    res.send('special');
});

app.listen(9001);
