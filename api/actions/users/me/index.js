module.exports = function(config){
  var User = require(config.models+"/User");

  return {
    "POST": function(req, res){
      User.findOne({username: req.body.username}, function(err, user){
        if(err || user) return res.error(err || "not available");
        User.create({
          username: req.body.username,
          password: req.body.password
        }, function(err, user){
          if(err) return res.error(err);
          req.session.userId = user._id;
          res.result(user);
        });
      });
    },
    "GET": function(req, res){
      User.findOne({
        username: req.query.username,
        password: req.query.password
      }, function(err, user){
        if(err || !user) return res.error(err || "not found");
        req.session.userId = user._id;
        res.result(user);
      });
    },
    "DELETE": function(req, res) {
      User.findById(req.session.userId, function(err, user){
        req.session.userId = null;
        req.session.destroy();
        res.result(true);
      });
    },
  }
}