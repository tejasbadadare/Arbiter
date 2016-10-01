var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'Decision' }
)};
