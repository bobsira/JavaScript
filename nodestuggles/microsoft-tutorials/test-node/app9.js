const express = require('express');
const app = express();

// this works with older version of mongodb version ~2.2.33
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/animals',function (err,db)  {
  if(err) throw err;
  db.collection('Mammals').find().toArray(function (err,result) {
    if(err) throw err;
    console.log(result);
  });
});


//for  mongodb version 3.0 and up
let MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/animals', function (err,client) {
  if(err) throw err;

  let db = client.db('animals');
  db.collection('mammals').find().toArray(function (err,result) {
    if(err) throw err;
    console.log(result);
    client.close();
  });
});


app.get('/', (req, res) => {
  res.send('Hello');
});



app.listen(3000, function () {
  console.log(`Server Starts on ${port}`);
});
