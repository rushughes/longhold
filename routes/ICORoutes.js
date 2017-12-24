const logger = require('../config/logger');
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const ICO = mongoose.model('icos');

module.exports = app => {
  app.get('/api/icos', requireLogin, async (req, res) => {
    const icos = await ICO.find({ _user: req.user.id }).select();
    res.send(icos);
  });

  app.get('/api/icos/:icoId', requireLogin, async (req, res) => {
    const ico = await ICO.find({ _user: req.user.id, _id: req.params.icoId }).select();
    res.send(ico);
  });

  app.post('/api/icos', requireLogin, async (req, res) => {
    logger.debug(req.body);
    const { project, symbol, investment, transactionID } = req.body;

    const ico = new ICO({
      project,
      symbol,
      investment,
      transactionID,
      _user: req.user.id,
    });

    try {
      await ico.save();
      res.send();
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.put('/api/icos', requireLogin, async (req, res) => {
    logger.debug(req.body);
    const { _id, project, symbol, investment, transactionID } = req.body;
    const doc = {
      _id,
      project,
      symbol,
      investment,
      transactionID,
      _user: req.user.id,
    };

    logger.debug('Updating record', doc);
    const ico = await ICO.findOneAndUpdate({ _user: req.user.id, _id: _id }, doc);

    const icos = await ICO.find({ _user: req.user.id }).select();
    logger.debug('Returning records', icos);
    res.send(icos);
  });
};
