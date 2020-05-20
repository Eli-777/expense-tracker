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

//新增edit頁面
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id) 
    .lean() 
    .then((record) => res.render('edit', { record })) 
    .catch(error => console.log(error))
})
//接住修改頁面的表單，把資料庫的資料改成表單資料 = update 功能
router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, date , category , amount } = req.body //解構賦值
  return Record.findById(id)
    .then(record => {
      record.name = name  
      record.date = date
      record.category = category
      record.amount = amount
      return record.save() 
    })
    .then(() => res.redirect(`/`)) 
    .catch(error => console.log(error))
})

//接住修改頁面的表單，按表單回傳的資料把資料庫的同樣的資料刪除 = delete 功能
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id) 
    .then(record => record.remove()) 
    .then(() => res.redirect('/')) 
    .catch(error => console.log(error))
})


module.exports = router