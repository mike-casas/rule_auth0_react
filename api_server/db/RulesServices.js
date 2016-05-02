var request= require('request');
var http= require('http');
var data= require('./rules');
var async = require("async");

var _self = {};

function fncallback(templatesarray,params,callback){
   var config=[];
  async.forEachOf(templatesarray, function (value, key, callback) {
    if (value.id===params){
       config= value;
    }
    callback();
  }, function (err) {
    if (err) {console.error(err.message);}
      return callback(config);
  });
}

  _self.all= function (params, callback){
      var templatesarray=[];
       async.each(data, function(x, callback) {
          async.each(x.templates, function(i){
                templatesarray.push(i);
              });
          return callback(); // show that no errors happened
      }, function(err,result) {
          console.log(result);
          if(err) {
              console.log('There was an error' + err);
          } else {
              fncallback(templatesarray,params, function(config){
                 return callback(config);
              });

          }
      });
  };

module.exports= _self;
