var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sa',
    password: 'mytest',
    database: 'helloworld'
});

var sql_select = 'SELECT * FROM user';

connection.connect();
connection.query(sql_select, function (err, results, fields) {
    if (err)
        throw err;

    console.log(results);
});
connection.end();