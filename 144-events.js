var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log('connection succesfull');
    eventEmitter.emit('data recived');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
 });

eventEmitter.emit('data_received');

console.log("Program Ended.");