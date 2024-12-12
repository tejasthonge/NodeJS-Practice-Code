


//in this file we writing the routes
const express = require('express');

const router = express.Router();
const Todo = require('../models/todo');

//createing the new todo route

router.post(
    '/',
    async (req,res)=>{
        const {title,description} = req.body;
        try{
            const todo =new Todo({
                title,
                description
            })
            await todo.save();
            res.json(todo);
        }
        catch (error){
            res.status(500).send('Server Error');
        }
    }
);

router.get('/',async(req ,res)=>{
    try{
        const todos = await Todo.find();
        res.json(todos);
    }
    catch (error){
        res.status(500).send('Server Error');
    }
})

module.exports = router;