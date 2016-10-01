var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/decisions';

exports.view = function(req, res){

    var currentDate = Date.now();

    console.log("decision_name: " + decision_name);
    console.log("choice_once: " + choice_one);
    console.log("choice_two: " + choice_two);

    // Connect to MongoDB and insert new decision_name
    MongoClient.connect(url, function(err, db) {
        if (!err) {
            var collection_decisions = db.collection('decisions');
            var decisionToAdd = {
                "decision_name" : decision_name,
                "choice_a" : choice_one,
                "choice_b" : choice_two,
                "score_a" : 0,
                "userId" : 0,
                "date_created" : Date.now()
            };

            var ans = collection_decisions.insertOne(decisionToAdd, function(err, resp) {
                console.log(err ? "DB insert failed." : "DB insert successful.");
                db.close();
                console.error(err);
            });
        }
    });
}
