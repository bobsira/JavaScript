msg = "Hello, " + "world";
greeting = "Welcome to my blog," + " " + name;

var s = "hello, world";
s.length; //12
s.charAt(0); //h
s.charAt(s.length-1); //d
s.substring(1,4); //ell - 2nd, 3rd and 4th characters
s.slice(1,4); //ell
s.indexOf("l"); //2
s.lastIndexOf("l"); //10
s.indexOf("l",3); //3 -position of first "l" at or after 3
s.split(", "); //["hello", "world"] split into substrings
s.replace("h", "H"); //"Hello, world": replaces all instances
s.toUpperCase(); //"HELLO, WORLD"
