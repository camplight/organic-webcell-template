module.exports = Backbone.View.extend({

  template: jadeCompile(require("./MainMenuView.jade.raw")),
  className: "navbar",
  currentSelected: null,
  events: {
    "click .menuItem1": "index",
    "click .menuItem2": "landing",
    "click .menuItem3": "login",
    "click .menuItem4": "register"
  },
  initialize: function() {
    this.currentSelected = 1;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  index: function(e) {
    e.preventDefault();
    app.router.navigate("", true);
  },
  login: function(e) {
    e.preventDefault();
    app.router.navigate("login", true);
  },
  register: function(e) {
    e.preventDefault();
    app.router.navigate("register", true);
  },
  landing: function(e) {
    e.preventDefault();
    app.router.navigate("landing", true);
  },
  select: function(index) {
    if (index == this.currentSelected)
      return ;

    $(".menuItem"+this.currentSelected).attr('href', "#");
    $(".li"+this.currentSelected).removeClass("active");

    this.currentSelected = index;

    if (this.currentSelected != 0) {
      $(".menuItem"+this.currentSelected).attr('href', null);
      $(".li"+this.currentSelected).addClass("active");
    }
  }

});