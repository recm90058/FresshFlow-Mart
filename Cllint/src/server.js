// server.js (Node.js Backend)
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow your HTML file to talk to this server
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    // Logic: Here you would call Gemini API or OpenAI API
    // For now, we return a simple response
    const botReply = "I received your message: " + userMessage;

    res.json({ reply: botReply });
});

app.listen(5000, () => console.log('Server running on port 5000'));