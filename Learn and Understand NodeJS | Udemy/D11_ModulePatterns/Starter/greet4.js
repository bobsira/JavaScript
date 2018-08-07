function Greet() {
    this.greeting = 'Hello!!!!';
    this.greet = function () {
        console.log(this.greeting);
        
    }
};

module.exports = Greet;