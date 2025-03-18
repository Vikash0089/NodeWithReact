import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateTodo, deleteTodo } from '../api/todoApi';

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }) => {
    const handleToggle = async () => {
        const updatedTodo = await updateTodo(todo._id, { completed: !todo.completed });
        onUpdateTodo(updatedTodo);
    };

    const handleDelete = async () => {
        await deleteTodo(todo._id);
        onDeleteTodo(todo._id);
    };

    return (
        <Paper elevation={2} style={{ marginBottom: '10px', backgroundColor: '#ffffff10', backdropFilter: 'blur(10px)' }}>
            <ListItem>
                <Checkbox
                    checked={todo.completed}
                    onChange={handleToggle}
                    color="primary"
                />
                <ListItemText
                    primary={todo.title}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: '#fff',
                    }}
                />
                <IconButton edge="end" onClick={handleDelete} style={{ color: '#ff6b6b' }}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>
        </Paper>
    );
};

export default TodoItem;