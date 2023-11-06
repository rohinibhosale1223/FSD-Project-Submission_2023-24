const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Atharv1',
  password: 'Atharv',
  database: 'project_db',
});
const loginRoute = require('./login/login');
const signupRoute = require('./login/signup');

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      if (results[0].password === password) {
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect('/');
      } else {
        res.send('Incorrect Password');
      }
    } else {
      res.send('Username does not exist');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
