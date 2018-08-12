exports.some_model_count = function (req,res,next) {
  SomeModel.count( { a_model_field: 'match_value'},  function (err,count) {
    //  .. do something if there is an err

    //On sucess . render the result by passing count into the render function(here, as the variable 'data'.).
    res.render('the_template', { data : count });
  })
}

async.parallel({
  one: function(callback) { ... },
  two: function(callback) { ... },
  ...
  something_else: function(callback) { ... }
},
//optional callback
function(err,results){
  //'results' is now equal to: { one: 1, two: 2, ..., something_else: some_value}
}
);

async.series({
  one:function(callback){...},
  two:function(callback){...},
  ...
  something_else: function(callback){....}
},
//optional callback after the last asynchronous function completes.
function(err,results){
  //results is now equal to : { one:1, two:2,..., something_else:some_value}
}
);


async.series([
  function(callback){
    //do some stuff ...
    callback(null,'two');
  },
  function(callback){
    //do some stuff
    callback(null,'two');
  }
],
//optional callback
function (err,results) {
  //results is now equal to ['one','two']
}
);

async.waterfall([
  function(callback){
    callback(null,'one','two');
  },
  function(arg1,arg2,callback){
    //arg1 now equal 'one', and arg2 now equal 'two'
    callback(null,'three')
  },
  function(arg1,callback){
    //arg1 now equals 'three'
    callback(null,'done');
  }
],
function (err,results) {
  //results now equals 'done'
}
);
