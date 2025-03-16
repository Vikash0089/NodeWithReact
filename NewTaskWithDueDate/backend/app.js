const express = require("express");
const cors = require("cors");
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors());
app.use(express.json());


app.use('/api/tasks', taskRoutes);



app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
