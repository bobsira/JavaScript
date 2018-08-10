const express = require('express');
const app = express();

app.all('/secret',  function(req, res, next) => {
  next(); // pass control to the next handler
  console.log('Accessing the secret section...');
});

app.listen(3000, function () {
  console.log(`Example app listening  on ${port}!`);
});
