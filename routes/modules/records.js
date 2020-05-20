const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

//新增record的頁面
router.get('/new', (req, res) => {
  return res.render('new')
})
//接住表單，並送往資料庫 ＝ create 功能
router.post('/', (req, res) => {
  const { name, date, category, amount } = req.body
  return Record.create({ name, date, category, amount })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//新增修改頁面
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id) 
    .lean() 
    .then((record) => res.render('edit', { record })) 
    .catch(error => console.log(error))
})



module.exports = router