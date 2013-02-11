module.exports = Backbone.View.extend({

  template: jadeCompile(require("./LoginView.jade.raw")),
  className: "row-fluid",
  events: {
    "submit .loginForm": "login"
  },
  login: function(e) {
    e.preventDefault();
    
    this.model.login(
      this.$(".loginForm .username").val(), 
      this.$(".loginForm .password").val()
    );
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }

});