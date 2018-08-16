'use strict';
var EventEmiter = require('events');

module.exports = class Greetr extends EventEmiter{
    constructor(){
        super();
        this.greeting = 'Hello World';
    }

    greet(data){
        console.log(` ${this.greeting} : ${ data}`);
        this.emit('greet',data);
    }
}