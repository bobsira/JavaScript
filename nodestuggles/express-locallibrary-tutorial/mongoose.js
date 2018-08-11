//Defining schemas
//require mongoose
const mongoose = require('mongoose');
//define a schema
var Schema = mongoose.Schema;
var SomeModelSchema = new Schema({
  a_string : String,
  a_date : Date
});
