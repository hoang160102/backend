const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const morgan = require('morgan')
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())
app.use(express.json())
app.use(morgan('combined'))
app.engine('hbs', handlebars.engine({
  extname: ".hbs"
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route(app)



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})