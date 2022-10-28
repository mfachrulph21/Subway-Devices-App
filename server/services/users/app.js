const express = require('express')
const app = express()
const cors = require('cors')
const port = 4001
const userRouter = require('./routes/index')
const { connect } = require('./config/config-mongo')


app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRouter)

connect().then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
})
