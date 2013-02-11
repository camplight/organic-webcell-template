var User = require("./models/User");
var UsersCollection = require("./models/UsersCollection");

module.exports = Backbone.Router.extend({

  routes: {
    "":        "index",
    "login":   "login",
    "register":   "register",
    "landing": "landing"
  },

  initialize: function(options) {
    var MainMenuView = require("./views/MainMenuView");
    this.mainMenu = new MainMenuView();
    $(".menu").html("").append(this.mainMenu.render().el);
  },

  index: function() {
    var IndexView = require("./views/IndexView");
    var view = new IndexView();
    $(".content").html("").append(view.render().el);
    this.mainMenu.select(1);
    return view;
  },
  landing: function() {
    var view;
    var LandingView = require("./views/LandingView");
    var collection = new UsersCollection();
    var view = new LandingView({collection: collection});
    $(".content").html("").append(view.render().el);
    this.mainMenu.select(2);
    return view;
  },
  login: function() {
    var LoginView = require("./views/LoginView");
    var view = new LoginView({model: new User()});
    $(".content").html("").append(view.render().el);
    this.mainMenu.select(3);
    return view;
  },
  register: function() {
    var RegisterView = require("./views/RegisterView");
    var view = new RegisterView({model: new User()});
    $(".content").html("").append(view.render().el);
    this.mainMenu.select(4);
    return view;
  }
});