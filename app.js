const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const serviceRoutes = require('./routes/serviceRoutes');
const dotenv = require('dotenv');

// Initialize environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Service Routes
app.use('/api', serviceRoutes);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
