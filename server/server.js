const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});