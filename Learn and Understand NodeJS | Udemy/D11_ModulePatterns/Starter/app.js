var greet = require('./greet1');
greet();

var greet1 = require('./greet2').greet;
greet1();

var greet2 = require('./greet3');
greet2.greet();
greet2.greeting = 'Guten Nacht';

var greet2b = require('./greet3');
greet2b.greet();

var Greet = require('./greet4');
var greet3 = new Greet();
greet3.greet();

var greet4 = require('./greet5').greet;
greet4();