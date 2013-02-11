module.exports = Backbone.View.extend({
  template: jadeCompile(require("./UserItemView.jade.raw")),
  className: "row-fluid",
  render: function(){
    this.$el.html(this.template({model: this.model}));
    return this;
  }
});