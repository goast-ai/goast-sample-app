const express = require('express');
const app = express();
const PORT = 3000;

let users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];

app.use(express.json());

app.get('/users', (req, res) => {
    res.json(users);
});

app.put('/users/:id', (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10);
        const userIndex = users.findIndex(u => u.id === userId);

        if (userIndex === -1) {
            return res.status(404).send('User not found');
        }

        const updatedUserData = req.body;
        if (typeof updatedUserData !== 'object' || updatedUserData === null) {
            return res.status(400).send('Invalid user data');
        }

        // Ensure that the updated user data does not contain an undefined value
        for (const key in updatedUserData) {
            if (updatedUserData[key] === undefined) {
                return res.status(400).send(`Invalid value for field ${key}`);
            }
        }

        users[userIndex] = { ...users[userIndex], ...updatedUserData };

        res.json(users[userIndex]);
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error updating user:', error);
        res.status(500).send('An unexpected error occurred while updating the user');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
