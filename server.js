var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/decisions';

var express = require('express')
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

var addDecision_controller = require('./controllers/addDecision_controller');
var getNewest_controller = require('./controllers/getNewestDecision_controller');


app.use(express.static(__dirname ));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
    try {
        res.sendFile('./index.html', {root: __dirname});
    } catch (e) {
        next(e)
    }
})

app.get('/api/getNewest', function(req, res) {
    try {

        MongoClient.connect(url, function(err, db) {

            db.collection('decisions').find().sort({'decision_id': -1}).toArray(function(err, docs) {
                if (err) throw (err);
                if (docs.length != 0) {
                    console.log(docs[0])
                    res.json(docs[0]);
                } else {
                    res.send(null);
                }
            });
        });
    } catch (e) {
        throw(e);
    }
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})

app.post('/api/addDecision', addDecision_controller.view);
