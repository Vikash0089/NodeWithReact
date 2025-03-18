import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

// Fetch all todos
export const getTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Create a new todo
export const createTodo = async (title) => {
    const response = await axios.post(API_URL, { title });
    return response.data;
};

// Update a todo
export const updateTodo = async (id, updatedData) => {
    const response = await axios.patch(`${API_URL}/${id}`, updatedData);
    return response.data;
};

// Delete a todo
export const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
};