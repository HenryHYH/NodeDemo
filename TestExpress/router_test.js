var router = require('./router');
var express = require('express');
var app = express();

app.use('/hello', router);
app.use('/', router);

app.listen(9001);
