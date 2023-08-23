//todo.controller.js
const express = require(`express`);
const todoService = require(`../services/todo.service`);

const createNewTodoItem = async (req, res) => {
    try {   
        const newItem = await todoService.createTodo(req.body);
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Bad request' });
    }
};

const getAllTodoItems = async (req, res) => {
    try {
        const item = await todoService.getAllTodos(req.body);
        res.json(item);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Bad request' });
    }
};




module.exports = { createNewTodoItem, getAllTodoItems };
