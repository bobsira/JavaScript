//Defining schemas
//require mongoose
const mongoose = require('mongoose');
//define a schema
var Schema = mongoose.Schema;
var SomeModelSchema = new Schema({
  a_string : String,
  a_date : Date
});
// Compile model from schema
var SomeModel = mongoose.model('SomeModel',SomeModelSchema);

var schema = new Schema({
  name : String,
  binary : Buffer,
  living : Boolean,
  updated : { type : Date, default : Date.now },
  age : { type : Number, min : 18, max : 65, required : true },
  mixed : Schema.Types.Mixed,
  _someId : Schema.Types.ObjectID,
  array: [],
  ofString : [String], //You can also have an array of each of the other types too.
  nested: { stuff : { type: String, lowercase : true, trim : true }}
});

var breakfastSchema = new Schema( {
  eggs: {
    type : Number,
    min: [6, 'Too few eggs'],
    max :12
    required : [true, 'Why no eggs?']
  },
  drink: {
    type : String,
    enum : ['Coffee','Tea','Water',]
  }
});


//create an instance of model SomeModel
var awesome_instance = new SomeModel({
  name : 'awesome'
});
//save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if(err) return handleError(err);
  //saved
});

SomeModel.create({ name : 'also_awesome' }, function (err,awesome_instance) {
  if(err) return handleError(err);
  //saved!
});


//access model field values using dot notation
console.log(awesome_instance); //should log 'awesome_instance'

//change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
awesome_instance.save(function (err ) {
  if(err ) return handleError(err ); // saved
});
