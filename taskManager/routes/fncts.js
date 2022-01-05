const getAllTasks = (req,res)=>{
    console.log("Call to get all tasks")
    res.send("Giving you all tasks")
    res.end()
}

const createTask = (req,res)=>{
    console.log("Request to post a task");
    res.send(req.body);
    res.end()
}

const getTask = (req,res)=>{
    console.log("Call to get a task with a specific ID %d",req.params.id);
    res.end();
}

const updateTask = (req,res)=>{
    console.log("Call to update a task with a specific ID %d",req.params.id);
    res.end();
}

const deleteTask = (req,res)=>{
    console.log("Call to delete a specific task with a given ID %d",req.params.id);
    res.end();
}

module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}