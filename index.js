const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/focusflow', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"));

// Routes
app.use('/api/tasks', taskRoutes);

// Gemini API Route (Backend Proxy)
// Move your Gemini logic here to hide the API Key!
app.post('/api/ai/breakdown', async (req, res) => {
    const { text } = req.body;
    // ... Call Gemini API here using server-side fetch ...
    res.json({ result: "Step 1, Step 2..." });
});

app.listen(5000, () => console.log("Server running on port 5000"));