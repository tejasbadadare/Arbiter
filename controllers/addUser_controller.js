var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/users';

exports.view = function(req, res){

    var username = req.body.username;
    var password = req.body.password;

    // Connect to MongoDB and insert new decision_name
    MongoClient.connect(url, function(err, db) {
        if (!err) {

            // Increment decision id
            var sequenceDocument = db.collection('counters').updateOne(
                {'_id': "userId" },
                {'$inc':{"seq":1}},
                function(err, doc) {
                    if (err) {
                        throw(err)
                    }

                    db.collection('counters').find({'_id': 'userId'}).toArray(function(err, docs) {
                        if (err) throw (err);
                        console.log("Found the following records");
                        console.log(docs);

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
        collection.find({'_id': 'userId'}).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);

            // Insert the new decision.
            console.error('getting here 3');
            insertNewDecision(decision_name, choice_one, choice_two);
        });
    }
}

function insertNewUser(res, db, username, password, userId) {
    var collection_users = db.collection('users');
    var userToAdd = {
        "userId" : userId,
        "username" : username,
        "password" : password,
        "score_user" : 0,
    };

    var ans = collection_users.insertOne(userToAdd, function(err, resp) {
        if (!err) {
            console.log("Successfully inserted in DB: " + username);
            res.redirect("../index.html");
        } else {
            console.error("DB insert failed: " + username);
            console.error(err);
        }
        db.close();
    });
}
