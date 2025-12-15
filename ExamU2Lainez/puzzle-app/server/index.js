const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const puzzleRoutes = require('./routes/puzzle');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', puzzleRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});