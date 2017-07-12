var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('helloworld', function (arg1, arg2) {
    console.log('helloworld', arg1, arg2);
});
emitter.on('helloworld', function (arg1, arg2) {
    console.log('helloworld2', arg1, arg2);
});
emitter.emit('helloworld', 'arg1', 'arg2');
