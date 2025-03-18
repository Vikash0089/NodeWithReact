
const express = require('express');
const router = express.Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');


// GET all todos
router.get('/', getTodos);

// POST a new todo
router.post('/', createTodo);

// PATCH update a todo
router.patch('/:id', updateTodo);

// DELETE a todo
router.delete('/:id', deleteTodo);

module.exports = router;