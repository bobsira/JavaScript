var empty = {};

var point = { x:0, y:0};

var point2 = {x:point.x, y:point.y+1};

var book = {
  "main title": "JavaScript",
  'sub-title': "The Definitive Guide",
  "for": "all audiences",
  author: {
    firstname:"David",
    surname:"Flanagan"
  }
};


var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp("js");

// inherit() returns a newly created object that inherits properties from the
// prototype object p. It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.
function inherit(p) {
 if (p == null) throw TypeError(); // p must be a non-null object
 if (Object.create) // If Object.create() is defined...
 return Object.create(p); // then just use it.
 var t = typeof p; // Otherwise do some more type checking
 if (t !== "object" && t !== "function") throw TypeError();
 function f() {}; // Define a dummy constructor function.
 f.prototype = p; // Set its prototype property to p.
 return new f(); // Use f() to create an "heir" of p.
}
