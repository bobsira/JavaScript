var Emitter = require('events');


var emtr = new Emitter();


emtr.on('greet',function () {
    console.log('Hello BRCK.This is not fun at all');
    
});

emtr.on('greet',function () {
    console.log('Passing time here doing node. Hello.');
    
});

console.log('Ring Ring!!!');

emtr.emit('greet');
