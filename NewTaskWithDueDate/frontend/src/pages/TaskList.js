import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../services/taskService';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';
import { Container, Typography, Box, Button } from '@mui/material';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const tasks = await getTasks();
            setTasks(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleUpdate = async (id, updatedTask) => {
        try {
            await updateTask(id, updatedTask);
            fetchTasks();
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true; // 'all'
    });

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
                Taskify
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'contained' : 'outlined'}>
                    All
                </Button>
                <Button onClick={() => setFilter('completed')} variant={filter === 'completed' ? 'contained' : 'outlined'}>
                    Completed
                </Button>
                <Button onClick={() => setFilter('pending')} variant={filter === 'pending' ? 'contained' : 'outlined'}>
                    Pending
                </Button>
            </Box>
            <TaskForm onTaskCreated={fetchTasks} />
            <Box sx={{ mt: 3 }}>
                {filteredTasks.map((task) => (
                    <TaskItem key={task._id} task={task} onDelete={handleDelete} onUpdate={handleUpdate} />
                ))}
            </Box>
        </Container>
    );
};

export default TaskList;