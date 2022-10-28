const express = require('express')
const router = require('./routes')
const cors = require('cors')
const app = express()
const port = 4000


app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))


app.get('/', async (req, res) => {
  try {
    res.status(200).json({message: 'Test orchestrator!!'}) 
  } catch (error) {
    console.log(error)
  }
})


app.use('/', router)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})