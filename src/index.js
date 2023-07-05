const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const morgan = require('morgan')
const port = 3000
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())
app.use(express.json())
app.use(morgan('combined'))
app.engine('hbs', handlebars.engine({
  extname: ".hbs"
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})