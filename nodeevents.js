var events = require('events');
var eventEmitter = new events.EventEmitter();
//result
var message = function(){
    console.log("You Fired off an event");

};
//event listener
eventEmitter.on("evnt", message);

module.exports.nodeevents = function(){
    eventEmitter.emit('evnt');
}
