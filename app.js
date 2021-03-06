#!/usr/bin/env node
var argv = require('optimist').argv;

require('coffee-script')

var util = require("util");
var Cell = require("organic-webcell/WebCell");
var DNA = require("organic").DNA;

var mongoose = require('mongoose');
var mongojs = require("mongojs");
var modelBase = require("./api/models/Base");

process.env.CELL_MODE = process.env.NODE_ENV || process.env.CELL_MODE || "development";

module.exports = function(callback) {
  console.log(("api running in CELL_MODE == "+process.env.CELL_MODE).blue);
  
  var self = this;
  var bootApp = function(){
    var db = mongoose.createConnection('localhost', dna.plasma.ExpressHttpActions.mongo.dbname);
    db.once("open", function(){
      modelBase.db = db;
      Cell.call(self, dna, callback);
      self.plasma.on("WebSocketServer", function(c){
        modelBase.io = c.data.server;
      });
    });
  }

  var dna = new DNA();
  dna.loadDir(process.cwd()+"/dna", function(){
    if(dna[process.env.CELL_MODE])
      dna.mergeBranchInRoot(process.env.CELL_MODE);
    
    if(process.env.CELL_MODE == "test" || argv.cleanDB) {
      var connection = mongojs.connect(dna.plasma.ExpressHttpActions.mongo.dbname)
      connection.dropDatabase(function(){
        console.log((dna.plasma.ExpressHttpActions.mongo.dbname+" is dropped").red);
        connection.close();
        bootApp();
      });
    } else 
      bootApp();
  });
}

util.inherits(module.exports, Cell);

// start the cell if this file is not required
if(!module.parent)
  new module.exports();