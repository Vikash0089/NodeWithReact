import React from "react";
import "../App.css";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task._id} className={task.completed ? "completed" : ""}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task._id)}
                    />
                    <span>{task.title}</span>
                    <button onClick={() => deleteTask(task._id)}>❌</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;