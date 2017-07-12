var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sa',
    password: 'mytest',
    database: 'helloworld'
});

var sql = 'INSERT INTO user(name) VALUES (?)';
var parameters = ['ByNode'];

connection.connect();
connection.query(sql, parameters, function (err, result) {
    if (err)
        throw err;

    console.log(result);
    console.log(result.insertId);
});
connection.end();