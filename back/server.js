const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'c_ges',
  })
  
  connection.connect((error) => {
    if (error) {
      throw error
    }


app.listen('4000')
console.log('Listening ON PORT ...');

app.get("/", (req,res) =>{
    res.send('Welcome')
})

app.get('/users', (req, res) => {
   
    connection.query('SELECT * FROM user', (error, results) => {
      if (error) {
        throw error
      }

      res.send(results)
       })
    })

app.get('/users/:id', (req, res) => {
    const { id } = req.params

    connection.query('SELECT * FROM user WHERE iduser = ? LIMIT 1', [id], (error, results, _) => {
      if (error) {
        throw error
      }
      res.send(results[0])
    })
  })

  //edificios
  app.get('/edificios', (req,res)=>{
    connection.query('SELECT * FROM edificio', (error, results) => {
        if (error) {
          throw error
        }
  
        res.send(results)
  })
})

//edificio por id
app.get('/edificios/:id', (req,res)=>{
    const { id } = req.params
    connection.query('SELECT * FROM edificio WHERE idedificio = ? LIMIT 1', [id], (error, results, _) => {
        if (error) {
          throw error
        }
        res.send(results[0])
  })
})
//put



// inserindo edificio

























  
})