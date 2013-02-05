module.exports = function(){
  return function(bundle){
    var clientEnv = require(__dirname+"/../client/config/"+process.env.CELL_MODE+".json");
    bundle.include(null, "config", "module.exports = "+JSON.stringify(clientEnv)+";");
  }
}