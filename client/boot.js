require("./vendor/jquery");
require("./vendor/bootstrap.min");
require("./vendor/Date.format");

_ = require("./vendor/underscore");
Backbone = require("./vendor/backbone");

jadeCompile = function(path){
  var compiled = jade.compile(path);
  return function(data) {
    data = data || {};
    data.t = $.t;
    return compiled(data);
  }
};