const express = require('express')
const connectDB = require('./db/connect.js')
const app = express()
const tasks = require('./routes/tasks.js')
require('dotenv').config()

app.use(express.json()) 
app.use("/api",tasks)


app.get('/',(req,res)=>{
    res.status(200).end("Hello World")
})

app.post('/',(req,res)=>{
    res.send(req.body);
    res.end();
})

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,()=>{console.log("Server started")})
    } catch(error){
        console.log(error)
    }
}

start()