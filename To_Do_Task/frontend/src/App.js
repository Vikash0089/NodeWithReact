import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodos } from './api/todoApi';

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const todos = await getTodos();
        setTodos(todos);
    };

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const handleUpdateTodo = (updatedTodo) => {
        setTodos(todos.map((todo) => (todo._id === updatedTodo._id ? updatedTodo : todo)));
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo._id !== id));
    };

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom style={{ color: '#fff', marginTop: '20px' }}>
                Todo App
            </Typography>
            <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#ffffff10', backdropFilter: 'blur(10px)' }}>
                <TodoForm onAddTodo={handleAddTodo} />
                <TodoList
                    todos={todos}
                    onUpdateTodo={handleUpdateTodo}
                    onDeleteTodo={handleDeleteTodo}
                />
            </Paper>
        </Container>
    );
};

export default App;