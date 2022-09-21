const express = require('express')
const path = require('path')
const app = express()
const port = 3000




app.post('/api', (req, res) => {
        console.log(req.body)   
        res.send("Your Name is " + req.body.name)

        name = req.body.name 
        adress = req.body.adress
        phone = req.body.phone
   })
   app.get('/intro', (req, res) => {
    res.send('Your Name is ' + name + ' Your Adress is ' + adress + 'Your Phone is ' + phone )
    })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})