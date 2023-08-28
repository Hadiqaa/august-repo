//todo.routes.js
const express = require('express');
const router = express.Router();
const todocontroller = require('../controllers/todo.controller');

router.post('/', todocontroller.createNewTodoItem);
router.get('/', todocontroller.getAllTodoItems);

module.exports = router;
