import React, { useState, useEffect } from 'react';
import { getTasks, deleteTask } from '../services/taskService';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const tasks = await getTasks();
        setTasks(tasks);
    }

    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            fetchTasks();
        }
        catch (error) {
            console.log('Error deleting task', error);
            alert('Failed to delete task, please try again')
        }
    };

    return (
        <div className='task-list'>
            <h1>Taskify</h1>
            <TaskForm onTaskCreated={fetchTasks} />
            <div className='tasks-container'>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};
export default TaskList;