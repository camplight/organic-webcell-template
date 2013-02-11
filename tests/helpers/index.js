var App = require("../../app")
var app;

module.exports.start = function(callback){
  process.env.CELL_MODE = "test";
  app = new App(callback);
}

module.exports.stop = function(){
  app.kill();
  app = null;
}

module.exports.apiendpoint = "http://127.0.0.1:8081/api";
module.exports.siteurl = "http://127.0.0.1:8081";