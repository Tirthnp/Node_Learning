const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter {

}

//Intit obj

const myemitter = new MyEmitter();

//Event listener

myemitter.on('event', ()=>console.log('Event Fired!'));

//Init event

myemitter.emit('event');