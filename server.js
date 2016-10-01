var express = require('express'), app = express();
var router = express.Router();


app.use(express.static(__dirname ))

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
