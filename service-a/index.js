const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! a')
})

app.listen(port, () => {
  console.log(`Example app a listening at http://localhost:${port}`)
})