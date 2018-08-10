const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello');
});

app.use(function (err,req,res,next) {
  console.error(err.stack);
  res.status(500).send('something broke');
});

app.listen(3000, function () {
  console.log(`Server Starts on ${port}`);
});
