const Record = require('../record.js')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i = 0; i < 10; i++){
    Record.create({ name: `expensename-${i}`})
  }
  console.log('record done')
})