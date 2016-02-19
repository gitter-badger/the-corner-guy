'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var LocationSchema = new mongoose.Schema({
  location: String,
  timestamp: {
    type: Date,
    default: Date.now
  },
  business: String,
  wait: Number
});

export default mongoose.model('Location', LocationSchema);
