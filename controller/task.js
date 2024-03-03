const { json } = require("express")
const Task = require(`../models/Tasks`)
const asyncWrapper = require(`../middleware/async`)
const getAllTasks =asyncWrapper(async(req,res) =>{
        const task=await Task.find({})
        res.status(200).json({tasks})
       // res.status(200).json({tasks,amount:task.length })
       
})
const createTask = asyncWrapper(async(req,res) =>{
    try{
    const task=await Task.create(req.body)
    res.status(201).json({Task})
}catch(error){
    res.status(500).json({msg:error})
}

})
const getTask =asyncWrapper(async(req,res) =>{

        const{id:taskID}=req.params
        const task=await Task.findOne({_id:taskID});
        if(!tasks){
            return res.status(404).json({msg:`no task with id:${taskID}`})
        }
        res.status(200).json({tasks})
    }
     ) 
const deleteTask =asyncWrapper(async(req,res) =>{
        const{id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID});
        if(!tasks){
            return res.status(404).json({msg:`no task with id:${taskID}`})
        }
        res.status(200).json({tasks})
    })
const updateTask =asyncWrapper(async(req,res) =>{
        const{id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        });
        if(!tasks){
            return res.status(404).json({msg:`no task with id:${taskID}`})
        }
        res.status(200).json({tasks})
    })

module.exports ={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTasks
}