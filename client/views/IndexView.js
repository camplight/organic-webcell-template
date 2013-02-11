module.exports = Backbone.View.extend({

  template: jadeCompile(require("./IndexView.jade.raw")),
  className: "row-fluid",
  events: {
    "click .login": "login"
  },
  initialize: function() {
    //this.listenTo(this.model, "change", this.render);
  },
  login: function() {
    app.router.navigate("login", true);
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }

});