var mongoose = require('mongoose');

var DecisionSchema = new mongoose.Schema({
  choiceA: String,
  choiceB: String,
  scoreA: {type: Number, default:0},
  scoreB: {type: Number, default:0},
  userID: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  decID: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

mongoose.model('Decision', DecisionSchema);
