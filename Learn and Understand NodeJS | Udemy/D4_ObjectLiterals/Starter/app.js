// Your Javascript Code Goes Here
var girl = {
    firstname : "Josphine",
    lastname : "Wamaitha",
    greet : function() {
        console.log("Hello, " + this.firstname + " " + this.lastname );
        
    }
}

girl.greet();

console.log(girl["lastname"]);
;