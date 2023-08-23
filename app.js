const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const todoRoutes = require('./routes/todo.routes.js');
const bodyParser = require('body-parser')
const todosService = require('./services/todo.service.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('app is working');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});