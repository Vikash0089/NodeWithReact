const Todo = require('../models/Todo');

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createTodo = async (req, res) => {
    const { title } = req.body;

    try {
        const newTodo = new Todo({ title });
        await newTodo.save();
        res.status(201).json(newTodo);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id, req.body,
            { new: true });
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task Deleted Successfully' });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
module.exports = { getTodos, createTodo, updateTodo, deleteTodo };