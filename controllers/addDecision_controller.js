var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb:27017/decisions';

exports.view = function(req, res){

    for (var key in req) {
      console.log("key: " + key);
    }

  console.error("decision_name: " + req.body.decision_name);

  /*var userId = "1234";
  var decision_name = req.body.decision_name;
  var choice_one = req.body.choice_one;
  var choice_two = req.body.choice_two;

  console.log("decision_name: " + decision_name);
  console.log("choice_once: " + choice_one);
  console.log("choice_two: " + choice_two);
*/
}
  /*
  MongoClient.connect(url, function(err, db){
    if(!err){
      var collection_decisions = db.collection('decisions');
      var decisionToAdd = {
        "decision_name" : decision_name,
        "choice_one" : choice_one,
        "choice_two" : choice_two,
        "userId" : userId
      };

      var ans = collection_decisions.insertOne(
        decisionToAdd, function(err, resp){
          console.log(err ? "Shit" : "GOod");
          db.close();
          callback(err);
        });
      }
    });
  }
*/
