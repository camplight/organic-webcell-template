module.exports = Backbone.View.extend({

  template: jadeCompile(require("./LandingView.jade.raw")),
  UserItemView: require("./itemRenders/UserItemView"),
  className: "row-fluid",

  events: {
  },

  initialize: function() {
    var _self = this;

    this.collection.fetch().success(function(){
      console.log("-ClientCollection-");
      _self.render();
    });
  },

  render: function() {
    var self = this;
    this.$el.html(this.template());

    this.collection.each(function(client){
      var view = new self.UserItemView({model: client});
      self.$(".itemsContainer").append(view.render().el);
    });

    return this;
  }

});