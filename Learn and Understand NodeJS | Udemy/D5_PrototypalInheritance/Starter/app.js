// Your Javascript Code Goes Here
function Girl(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Girl.prototype.greet = function () {
    console.log("Hello " + this.firstname + " " + this.lastname);
    
};

var tiffany = new Girl("Tiffany","Teteyan");
tiffany.greet();

var josphine = new Girl("Josphine","Wamaitha");
josphine.greet();

console.log(tiffany.__proto__);
console.log(josphine.__proto__);
console.log(tiffany.__proto__ == josphine.__proto__);


