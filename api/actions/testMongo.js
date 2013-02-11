module.exports = function(config){
  var User = require(config.models+"/TestModel");

  return {
    "POST": function(req, res) {
      User.create({username: "1", "bla": { v1: "test1" }}, function(err, user){
        if(err) res.error(err);
        User.update({username: "1"}, {"bla.v1": null}, function(err, updated){
          if(err) res.error(err);
          User.findOne({"username": "1"}, function(err, updatedUser){
            res.result(updatedUser);  
          })
        })
      })
    }
  }
}