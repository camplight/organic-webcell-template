var boot = require("../client/boot");

$(document).ready(function(){
  
  window.app = {};

  var AppRouter = require("../client/AppRouter");
  app.router = new AppRouter();

  Backbone.history.start({trigger: true});  
});

