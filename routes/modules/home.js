const express = require('express')
const router = express.Router()
const Record = require('../../models/record')




router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(
      Record.aggregate([
        { $group: { _id: null, amount: { $sum: "$amount" } } }
      ])
      .then(amount => total = amount[0].amount)
    )
    .then(records => res.render('index', { records, total }))
    .catch(error => console.log(error))
})

module.exports = router