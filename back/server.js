require('dotenv').config()
const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const app = express()
const db = require('./models/index')
const api = require('./routes/api')
const cors = require('cors')

app.use(bodyParser.json())
app.use((req,res,next) =>{
  req.db = db.sequelize.models
  return next()
})
app.use(cors())

app.use('/api/v1', api)
app.get("/", (req,res) => {
return res.send('Hello ...')
})


app.listen('1000')
console.log('Listening ON PORT ...');