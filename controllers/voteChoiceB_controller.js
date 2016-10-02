var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/decisions';

exports.view = function(req, res){

    for (var key in req) {
        console.log('in upvote b: ' + key);
    }

    // Connect to MongoDB and insert new decision_name
    MongoClient.connect(url, function(err, db) {
        if (!err) {
            db.collection('decisions').updateOne({'decisionId': req.body.decision_id},{'$inc':{'score_b' : 1}},function(err, docs) {
                if (err) throw (err);
                if (docs.length == 0) {
                    console.error("Could not get decision to upvote: " + req.body.decision_id);
                }
                console.log("Found the following to upvote: " + docs);
            });
        }
    });
    res.redirect("../index.html");
}
