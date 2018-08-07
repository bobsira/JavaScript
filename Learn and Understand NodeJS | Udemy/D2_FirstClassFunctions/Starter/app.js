// Your Javascript Code Goes Here
function greet() {
    console.log("Hi");
    
}
greet();

// functions are first class 
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expressions
var greetMe = function () {
    console.log("Hi Tonny!");
    
}
greetMe();

// function expressions are still first class
logGreeting(greetMe);

// use a function expression to create a function on the fly
logGreeting(function () {
    console.log("Hello Tonny");
    
});