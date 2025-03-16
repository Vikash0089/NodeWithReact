const mongoose = require('mongoose');

const TaskySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date },
    completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskySchema);