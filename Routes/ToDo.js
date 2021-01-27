const express = require('express');
const routes = express.Router();
const todo = require('../Controllers/ToDo');

routes.get('/test', todo.test);

routes.get('/', todo.getToDos);

routes.get('/:id', todo.getToDoByID);

routes.post('/create', todo.newToDo);

routes.put('/update/:id', todo.updateToDo);

routes.delete('/delete/:id', todo.deleteToDo);

module.exports = routes; 