const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.render('pages/home');
});

// Define routes for other pages
app.get('/cars', (req, res) => {
    res.render('pages/cars');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/parts', (req, res) => {
    res.render('pages/parts');
});

app.get('/blog', (req, res) => {
    res.render('pages/blog');
});

app.get('/login', (req, res) => {
    res.render('pages/login');
});

app.get('/register', (req, res) => {
    res.render('pages/register');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
