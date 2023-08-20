const express = require('express');
const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const todos = [];

app.get('/', (req, res) => {
    res.render('index', { todos });
});

app.post('/', (req, res) => {
    const newTodo = req.body.todo;
    todos.push(newTodo);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
