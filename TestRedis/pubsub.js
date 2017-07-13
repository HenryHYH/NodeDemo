var redis = require('redis'),
    sub = redis.createClient(),
    pub = redis.createClient();

var msg_count = 0;

sub.on('subscribe', function (channel, count) {
    pub.publish('mychannel', '1');
    pub.publish('mychannel', '2');
    pub.publish('mychannel', '3');
});

sub.on('message', function (channel, message) {
    console.log('sub channel = ' + channel + ', message = ' + message);
    msg_count += 1;
    if (3 === msg_count) {
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    }
});

sub.subscribe('mychannel');
