// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./dbconnection/connection');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
