const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// js destructuring :
const { Schema } = mongoose;

const coinSchema = new Schema({
  name: String,
  website: String,
  supply: String,
  priceUSD: String,
  supplyAvailable: String,
  tryingToRaise: String,
  icoMarketcap: String,
  presaleDate: String,
  icoDate: String,
  icoCoinUsed: String,
  symbol: String,
  biddingStatus: String,
  usdRaised: String,
  tokensSoldDuringIco: String,
  currentTokenPriceUSD: String,
  tokenReturn: String,
  country: String,
  industry: String,
});

mongoose.model('coins', coinSchema);
