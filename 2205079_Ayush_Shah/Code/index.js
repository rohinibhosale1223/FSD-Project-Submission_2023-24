const express = require('express');
const app = express();
const port = 3000;

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.send(`Welcome, ${username}! Logged in successfully.`);
    } else {
        res.send('Invalid username or password.');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
