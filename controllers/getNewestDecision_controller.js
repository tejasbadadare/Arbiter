var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/decisions';

// Get latest decision as a JSON object.
exports.asJSON = function(req, res) {

    collection.find({}, {sort: {datefield: 1}}).toArray(function(err, docs) {...});

    db.collection('decisions').find({}, {sort: {decision_id : 'desc'}}).toArray(function(err, docs) {
        if (err) throw (err);

        console.log("Found the following records");
        console.log(docs);

        if (docs.length != 0) {
            return docs[0];
        } else {
            return null;
        }
    });
}
