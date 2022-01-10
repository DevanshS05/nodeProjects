const mongoose = require('mongoose'); 

const TaskSchema = new mongoose.Schema({
    name:String,completed:Boolean
})

const model = mongoose.model('Products',TaskSchema)

module.exports = model