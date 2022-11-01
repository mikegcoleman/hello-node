const express = require('express')
const app = express()
const port = 3000
const os = require ('os')

app.get('/', (req, res) => {
  res.send('Hello, world form ' + os.hostname())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
