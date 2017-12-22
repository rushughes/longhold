const mongoose = require('mongoose');
const { Schema } = mongoose;

const ICOSchema = new Schema({
  project: String,
  symbol: String,
  investment: String,
  transactionID: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('icos', ICOSchema);
