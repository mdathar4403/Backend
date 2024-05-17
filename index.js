const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000 || process.env.PORT
// console.log(process.env.PORT)


app.get('/', (req, res) => {
  res.send('hello world to Athar')
})
app.get('/login', (req, res)=>{
    res.send('Login page')
})

app.get('/register', (req, res)=>{
    res.send('Register page')
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})