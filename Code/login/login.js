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

// GET login page
router.get('/login', (req, res) => {
  res.render('login'); // Render the login EJS view
});

// POST login data
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) throw err;

    if (results.length === 1) {
      // User is authenticated, set a session or token and redirect
      req.session.user = results[0];
      res.redirect('/');
    } else {
      // Authentication failed, redirect to login page with an error message
      res.render('login', { error: 'Invalid username or password' });
    }
  });
});

module.exports = router;
