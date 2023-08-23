//todo.service.js
const Todo =  require(`../models/todo.model`);

let todos =[];

async function createTodo(todoData){
    const id = todos.length + 1;
    const newTodo = new Todo(id, todoData.text, false);
    todos.push(newTodo);

    return newTodo;
}


async function getAllTodos(){
    return todos;
}

module.exports = {
    createTodo,
    getAllTodos
};