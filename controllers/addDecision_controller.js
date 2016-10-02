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

            // Increment decision id
            var sequenceDocument = db.collection('counters').updateOne(
                {'_id': "decisionId" },
                {'$inc':{"seq":1}},
                function(err, doc) {
                    if (err) {
                        throw(err)
                    }

                    db.collection('counters').find({'_id': 'decisionId'}).toArray(function(err, docs) {
                        if (err) throw (err);
                        console.log("Found the following records");
                        console.log(docs);

                        if (docs.length == 0) {
                          console.error("shitting");
                          throw(null);
                        }

                        // Insert the new decision.
                        console.error('getting here 3');
                        insertNewDecision(res, db, decision_name, choice_one, choice_two, docs[0].seq);
                    });

                }
            );
        }
    });
}

function getIncremented() {
    var findDocuments = function(db, callback) {
        // Get the documents collection
        var collection = db.collection('counters');
        // Find some documents
        collection.find({'_id': 'decisionId'}).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);

            // Insert the new decision.
            console.error('getting here 3');
            insertNewDecision(decision_name, choice_one, choice_two);
        });
    }
}

function insertNewDecision(res, db, decision_name, choice_one, choice_two, decision_id) {
    var collection_decisions = db.collection('decisions');
    var decisionToAdd = {
        "decision_id" : decision_id,
        "decision_name" : decision_name,
        "choice_a" : choice_one,
        "choice_b" : choice_two,
        "score_a" : 0,
        "score_b" : 0,
        "date_created" : Date.now()
    };

    var ans = collection_decisions.insertOne(decisionToAdd, function(err, resp) {
        if (!err) {
            console.log("Successfully inserted in DB: " + decision_name);
            res.redirect("../index.html");
        } else {
            console.error("DB insert failed: " + decision_name);
            console.error(err);
        }
        db.close();
    });
}
