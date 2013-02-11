module.exports = Backbone.Collection.extend({
  model: require("./User"),
  url: function(){
    return "api/users";
  },
  parse: function(data){
    return data.result || data;
  }
})