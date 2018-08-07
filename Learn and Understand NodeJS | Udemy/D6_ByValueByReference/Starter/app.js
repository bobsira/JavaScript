// pass by value
function change_j(b) {
    b = 3;
}
var j = 1;
change_j(j);
console.log(j);

// pass by reference 
function change_t(t) {
    t.prop1 = function(){};
    t.prop2 = {};
}

var c = {};
c.prop1 = {};
change_t(c);
console.log(c);


