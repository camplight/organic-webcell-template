var test = require("./helpers");
var request = require("request");

describe("mongo test", function(){

  it("starts cell", function(){
    test.start(function(){
      request.post({
        uri: test.apiendpoint+"/testMongo",
        json: {
          "bla": {
            "v2": "test"
          }
        }
      }, function(err, res, body){
        console.log(res, body);
      })
    });
  })

})