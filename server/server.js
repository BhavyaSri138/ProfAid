const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
const doubtRoutes = require('./routes/doubtRoutes');

app.use('/api/doubts', doubtRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
