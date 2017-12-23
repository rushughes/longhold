var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');

const mongoose = require('mongoose');
const keys = require('../config/keys');
require('../models/Coin');

mongoose.connect(keys.mongoURI);
const Coin = mongoose.model('coins');

var inputFile = process.argv[2];

console.log('inputFile:', inputFile);

var parser = parse({ delimiter: ',' }, function (err, data) {
  async.eachSeries(data, function (line, callback) {

    console.log('Processing coin:', line[0], line[10]);

    const coin = new Coin({
      name: line[0],
      website: line[1],
      supply: line[2],
      priceUSD: line[3],
      supplyAvailable: line[4],
      tryingToRaise: line[5],
      icoMarketcap: line[6],
      presaleDate: line[7],
      icoDate: line[8],
      icoCoinUsed: line[9],
      symbol: line[10],
      biddingStatus: line[11],
      usdRaised: line[12],
      tokensSoldDuringIco: line[13],
      currentTokenPriceUSD: line[14],
      tokenReturn: line[15],
      country: line[16],
      industry: line[17]
    });

    coin.save().then(function () {
      // when processing finishes invoke the callback to move to the next one
      callback();
    });
  });
});

fs.createReadStream(inputFile).pipe(parser);
