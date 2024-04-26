const express = require('express')
const movies = require('./movies.json')

const app = express()
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

// Todos los recursos que sean movies  se indentifican /movies
app.get('/movies', (req, res) => {
  res.json(movies)
})

const PORT = process.env.PORT ?? 1235

app.listen(PORT, () => {
  console.log(`serve listening on port http://localhost:${PORT}`)
})