const express = require('express');

// Dummy user list
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const userRouter = express.Router();

// Example user route with try/catch
userRouter.get('/', (req, res) => {
    try {
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

// Create a new user
userRouter.post('/', (req, res) => {
    try {
        const newUser = { id: users.length + 1, ...req.body };
        users.push(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

// Read a user by ID
userRouter.get('/:id', (req, res) => {
    try {
        const user = users.find(u => u.id === parseInt(req.params.id));
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

// Update a user by ID
userRouter.put('/:id', (req, res) => {
    try {
        const user = users.find(u => u.id === parseInt(req.params.id));
        if (!user) return res.status(404).json({ message: 'User not found' });
        Object.assign(user, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

// Delete a user by ID
userRouter.delete('/:id', (req, res) => {
    try {
        const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
        if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
        const deletedUser = users.splice(userIndex, 1);
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

module.exports = userRouter;