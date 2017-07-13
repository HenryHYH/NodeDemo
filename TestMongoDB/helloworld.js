var mongodb = require('mongodb'),
    mongoClient = mongodb.MongoClient;
var connectionString = 'mongodb://localhost:27017/helloworld';

var insertData = function (db, callback) {
    var collection = db.collection('site');
    var data = [
        { "name": "Henry", "num": 1 },
        { "name": "Jack", "num": 2 }
    ];

    collection.insert(data, function (err, result) {
        if (err) {
            console.log('Error ' + err);
            return;
        }
        callback(result);
    });
};

mongoClient.connect(connectionString, function (err, db) {
    insertData(db, function (result) {
        console.log(result);
        db.close();
    });
});