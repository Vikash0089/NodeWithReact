import React, { useState } from "react";
import "../App.css";

const TaskInput = ({ addTask }) => {
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask);
        setNewTask("");
    };

    return (
        <form className="task-input" onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskInput;
