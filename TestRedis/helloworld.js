var redis = require('redis'),
    client = redis.createClient({
        host: 'localhost',
        port: '6379'
    });

client.on('error', function (err) {
    console.log('Error ' + err);
});

client.set('hello', 'world', redis.print);
client.get('hello', function (err, reply) {
    console.log(reply.toString());
});

client.quit();
