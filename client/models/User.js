module.exports = require("./MongoModel").extend({
  url: "api/users/me",

  login: function(username, password){
    var self = this;

    $.get(this.url+"?username="+username+"&password="+password)
    .success(function(response){
      self.set(response.result, {parse: true});
    }).error(function(){
      self.trigger("error", "failed");
    });
  },

  logout: function(callback){
    var self = this;

    $.ajax({
      url:this.url,
      type: "DELETE"
    })
    .success(callback)
    .error(function(){
      alert("failed");
    });
  },

  register: function(username, password) {
    var self = this;

    $.ajax({
      url:this.url,
      type: "POST",
      data: {
        username: username,
        password: password
      }
    })
    .success(function(response){
      self.set(response.result, {parse: true});
    }).error(function(){
      self.trigger("error", "failed");
    });
  }
});