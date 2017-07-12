var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sa',
    password: 'mytest',
    database: 'helloworld'
});

var sql_select = 'SELECT COUNT(1) AS solution FROM user';

connection.connect();
connection.query(sql_select, function (err, results, fields) {
    if (err)
        throw err;

    console.log('solution = ', results[0].solution);
});
connection.end();