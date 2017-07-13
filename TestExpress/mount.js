var express = require('express');
var app = express();

var admin = express();
admin.on('mount', function (parent) {
    console.log('admin mount');
    console.log(parent);
});
admin.get('/', function (req, res) {
    console.log(admin.mountpath);
    res.send('admin');
});

var secret = express();
secret.get('/', function (req, res) {
    console.log(secret.mountpath);
    res.send('secret');
});

admin.use('/secret', secret);
app.use(['/admin', '/'], admin);

app.listen(9001);
