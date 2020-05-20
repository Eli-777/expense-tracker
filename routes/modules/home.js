const express = require('express')
const router = express.Router()
const Record = require('../../models/record')



router.get('/', (req, res) => {
  let totalAmount = 0
  Record.find()
    .lean()
    .then( //資料庫裡的每個項目的金額全部加總，帶入參數totalAmount
      items => {
        items.forEach(item=>{
          totalAmount += item.amount
        })
        return items
      }
    )
    .then(records => res.render('index', { records, totalAmount }))
    .catch(error => console.log(error))
})

module.exports = router