var Moneyflow = require("../../moneyflow")
var moneyflow;

module.exports.start = function(callback){
  process.env.CELL_MODE = "test";
  moneyflow = new Moneyflow(callback);
}

module.exports.stop = function(){
  moneyflow.kill();
  moneyflow = null;
}

module.exports.apiendpoint = "http://127.0.0.1:8081/api";
module.exports.siteurl = "http://127.0.0.1:8081";

module.exports.users = require("./users")(module.exports);
module.exports.clients = require("./clients")(module.exports);
module.exports.projects = require("./projects")(module.exports);
module.exports.organizations = require("./organizations")(module.exports);
module.exports.suite = require("./suite")(module.exports);