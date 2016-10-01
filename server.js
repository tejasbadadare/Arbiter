var express = require('express')
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

var addDecision_controller = require('./controllers/addDecision_controller');


app.use(express.static(__dirname ));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  try {
    res.sendFile('./single.html', {root: __dirname});
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})

app.post('/api/addDecision', addDecision_controller.view);
