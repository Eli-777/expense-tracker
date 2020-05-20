const express = require('express')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

//依類別代號選擇圖示
Handlebars.registerHelper('categoryImg', function (categoryNumber, styleNumber, options) {
  if (categoryNumber === styleNumber) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
})


app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})