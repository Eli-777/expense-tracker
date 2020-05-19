const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
  name: {
    type: String,
    default: true
  },
  // category: {
  //   type: String,
  //   default: true
  // },
  // date: {
  //   type: Date,
  //   default: true
  // },
  // amount: {
  //   type: Number,
  //   default: true
  // }
})
module.exports = mongoose.model('category', categorySchema)

