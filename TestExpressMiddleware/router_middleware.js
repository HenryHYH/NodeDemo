var express = require('express');
var router = express.Router();
var app = express();

router.use(function (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.use('/user/:id', function (req, res, next) {
    console.log('url: ', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('method: ', req.method);
    next();
});

router.get('/user/:id', function (req, res, next) {
    if (req.params.id == 0)
        next('route');
    else
        next();
}, function (req, res, next) {
    res.send('regular');
});

router.get('/user/:id', function (req, res, next) {
    res.send('special');
});

app.use('/', router);

app.listen(9001);
