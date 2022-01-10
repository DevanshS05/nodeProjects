const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const model = require('./db')
const app = express()
const PORT = process.env.PORT || 3000


app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    console.log("Hello World")
})

app.post('/',(req,res)=>{

    model.create({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    .then(()=>{
        res.status(201).sendFile(path.join(__dirname,"/public/thanks.html")).end()
    })
    .catch((err)=>{
        res.status(500).end("Some error occured")
    })
    
})

app.get('/messages',(req,res)=>{
    model.find({})
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(404).json({err:"There was some difficulty in fetching the records"})
    })
})

app.all('*',(req,res)=>{
    res.status(404).end("You are making an invalid request \nThe resource you are looking for does not exist")
})

app.listen(PORT,()=>{
    console.log(`Server has started on PORT ${PORT}`)
})