const express = require('express')
const router = express.Router()
const Record = require('../../models/record')




router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(
      //資料庫裡的每個項目的金額全部加總，帶入參數totalAmount
      Record.aggregate([
        { $group: { _id: null, amount: { $sum: "$amount" } } }
      ])
      .then(amount => totalAmount = amount[0].amount)
    )
    .then(records => res.render('index', { records, totalAmount }))
    .catch(error => console.log(error))
})

module.exports = router