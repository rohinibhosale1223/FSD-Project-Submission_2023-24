const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Atharv1',
  password: 'Atharv',
  database: 'project_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// GET signup page
router.get('/signup', (req, res) => {
  res.render('signup'); // Render the signup EJS view
});

// POST registration data
router.post('/signup', (req, res) => {
  const { username, password } = req.body;

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err) => {
    if (err) {
      // Registration failed, redirect to signup page with an error message
      res.render('signup', { error: 'Registration failed' });
    } else {
      // Registration successful, redirect to login page or another success page
      res.redirect('/login');
    }
  });
});

module.exports = router;
