const express = require('express');
const app = express();

// an example middleware function
var a_middleware_function = function (req, res, next) {
  // ... perform some operations
  next();  // call next so Express will call the next middleware function in the chain
}

//function addded with use() for all routes and verbs
app.use(a_middleware_function);

//function addded with use() for a specific route
app.use('/someroute',a_middleware_function);

//a middleware function added for a specific http verb and route
app.get('/', a_middleware_function);

app.listen(3000, function () {
  console.log(`Server Starts on ${port}`);
});

 // app.listen(8000);
