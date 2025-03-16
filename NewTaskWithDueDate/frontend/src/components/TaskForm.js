import React, { useState } from 'react';
import { createTask } from '../services/taskService';
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';

const TaskForm = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!title.trim() || !description.trim()) {
            setError('Please fill in both title and description.');
            setOpenSnackbar(true);
            return;
        }

        try {
            await createTask({ title, description, dueDate });
            setTitle('');
            setDescription('');
            setDueDate('');
            setError('');
            onTaskCreated();
        } catch (error) {
            console.error('Error creating task:', error);
            setError('Failed to create task. Please try again.');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
                Add a New Task
            </Typography>
            <TextField
                fullWidth
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Due Date"
                type="date"
                variant="outlined"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
                Add Task
            </Button>


            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default TaskForm;