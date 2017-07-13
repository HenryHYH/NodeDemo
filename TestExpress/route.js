var express = require('express');
var app = express();

// 请求中间件
app.all('/', function (req, res, next) {
    console.log('execute all');
    next();
});

app.get('/', function (req, res) {
    res.send('hello world');
});

// 匹配 acd 和 abcd
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd');
});

// 匹配 abcd、abbcd、abbbcd等
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd');
});

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd');
});

// 匹配 /abe 和 /abcde
app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e');
});

// 匹配任何路径中含有 a 的路径：
app.get(/1/, function (req, res) {
    res.send('/a/');
});

// 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/');
});

app.get('/example/b', function (req, res, next) {
    console.log('example/b');
    next();
}, function (req, res) {
    res.send('example/b');
});

var cb0 = function (req, res, next) {
    console.log('cb0');
    next();
};
var cb1 = function (req, res, next) {
    console.log('cb1');
    next();
};
var cb2 = function (req, res) {
    res.send('example/c');
};
app.get('/example/c', [cb0, cb1, cb2]);

app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('example/d');
    next();
}, function (req, res) {
    res.send('example/d');
});

app.route('/book')
    .get(function (req, res) {
        res.send('book from get');
    })
    .post(function (req, res) {
        res.send('book from post');
    })
    .put(function (req, res) {
        res.send('book from put');
    })
    .delete(function (req, res) {
        res.send('book from delete');
    });

app.listen(9001);
