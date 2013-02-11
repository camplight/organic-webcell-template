module.exports = Backbone.View.extend({

  template: jadeCompile(require("./RegisterView.jade.raw")),
  className: "row-fluid",
  events: {
    "submit .registerForm": "register"
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  register: function(e) {
    e.preventDefault();
    
    var self = this;
    var result = this.model.register(
      this.$(".registerForm .username").val(), 
      this.$(".registerForm .password").val()
    );

    if(result) result.success(function(){
      console.log("Saved:");
    }); else {
      console.log("SHIT");
    }
    
    return this;
  }

});