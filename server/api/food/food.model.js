'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var FoodSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Food', FoodSchema);
