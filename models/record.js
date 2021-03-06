const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    default: true
  },
  category: {
    type: String,
    default: true
  },
  date: {
    type: String,
    default: true
  },
  amount: {
    type: Number,
    default: true
  }
})
module.exports = mongoose.model('record', recordSchema)