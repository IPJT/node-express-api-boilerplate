import express from 'express'
const app = express()
const port = 1337

app.get('/', (req, res) => {
  res.send('Hello Worlds!')
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})