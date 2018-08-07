var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet',function () {
    console.log('Hi Teteyan');
});

emtr.on('greet',function () {
    console.log('Hello Tiffany');
    
});

console.log('Excuse me dear');

emtr.emit('greet');
