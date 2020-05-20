const Category = require('../category.js')
const db = require('../../config/mongoose')

db.once('open', () => {
  Category.create(
    { name: '家居物業', id: '01'},
    { name: '交通出行', id: '02'},
    { name: '休閒娛樂', id: '03'},
    { name: '餐飲食品', id: '04'},
    { name: '其他', id: '05'}
  )
  
  console.log('category done')
})