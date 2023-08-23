//todo.routes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

router.post('/', todoController.createNewTodoItem);
router.get('/', todoController.getAllTodoItems);

module.exports = router;
