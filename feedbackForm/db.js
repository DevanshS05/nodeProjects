const mongoose = require('mongoose')
const d = require('./dat')


const mySchema = mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        message:{type:String,required:true}
    }
)

const connect = async (url)=>{
    try{
        await mongoose.connect(url)
        console.log("Successfully connected to DB")
    }
    catch(err){
        console.log("Some error occured in connecting to DB")
        console.log(err)
    }
}

const model = mongoose.model("feedback",mySchema)

//Creating the connection to the database as soon as we are loading this file
connect(d)

module.exports = model