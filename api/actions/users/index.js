module.exports = function(config){
  var User = require(config.models+"/User");

  return {
    "GET": function(req, res){
      User.find(function(err, users){
        if(err) return res.error(err);
        res.result(users);  
      });
    }
  }
}