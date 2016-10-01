var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/decisions';

exports.view = function(req, res){

    var userId = "1234";
    var decision_name = req.body.decision_name;
    var choice_one = req.body.choice_one;
    var choice_two = req.body.choice_two;
    var date_created = Date.now();

    // Connect to MongoDB and insert new decision_name
    MongoClient.connect(url, function(err, db) {
        if (!err) {
            var collection_decisions = db.collection('decisions');
            var decisionToAdd = {
                "_id" : getNextSequence("decId"),
                "decision_name" : decision_name,
                "choice_one" : choice_one,
                "choice_two" : choice_two,
                "score_a" : 0,
                "score_b" : 0,
                "date_created" : Date.now()
            };

            var ans = collection_decisions.insertOne(decisionToAdd, function(err, resp) {
                if (!err) {
                    console.log("Successfully inserted in DB: " + decision_name);
                    res.redirect("../single.html");
                } else {
                    console.error("DB insert failed: " + decision_name);
                    console.error(err);
                }
                db.close();
            });
        }
    });
}

function getNextSequenceValue(sequenceName){

   var sequenceDocument = db.counters.findAndModify({
      query:{_id: sequenceName },
      update: {$inc:{sequence_value:1}},
      new:true
   });

   return sequenceDocument.sequence_value;
}
