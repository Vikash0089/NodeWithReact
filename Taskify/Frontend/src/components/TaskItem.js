import React from 'react';

const TaskItem = ({ task, onDelete }) => {
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
    );
};

export default TaskItem;