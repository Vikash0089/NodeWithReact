import React, { useState } from 'react';
import { TextField, Button, Paper, Box } from '@mui/material';
import { createTodo } from '../api/todoApi';

const TodoForm = ({ onAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            const addedTodo = await createTodo(newTodo);
            onAddTodo(addedTodo);
            setNewTodo('');
        }
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: '#ffffff10', backdropFilter: 'blur(10px)' }}>
            <form onSubmit={handleSubmit}>
                <Box display="flex" gap={2} alignItems="center">
                    <TextField
                        label="New Todo"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff' } }}
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ height: '56px' }}>
                        Add
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default TodoForm;