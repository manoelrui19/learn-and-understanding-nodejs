var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed Hello World!!!';

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var greet4 = new Greet4();
greet4.greet()

var greet5 = require('./greet5');
greet5.greet();
