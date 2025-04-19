const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Simple Node App!');
});

// Import and use user routes
const userRouter = require('./routes/userRoutes');
app.use('/users', userRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});