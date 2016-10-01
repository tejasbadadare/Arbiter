var mongodb = require('monogdb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb:27017/decisions';

module.exports = {
  addDecisionToDB : function(decision_name, choice_one, choice_two, userId, callback){
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
    });
}
