// object properties and methods
var obj = {
    greet:'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

// functions and arrays
var arr = [];

arr.push(function () {
    console.log('Hello NodeJS');
});

arr.push(function () {
    console.log('Hello Apple Developer');
});

arr.push(function () {
    console.log('Hello Artificial Intelligence');
});

arr.forEach(function (item) {
    item();
});


