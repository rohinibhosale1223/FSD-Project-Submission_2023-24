// Set express as Node.js web application server framework.
var express= require('express');
var app=express(); //created express library variable

// set the view engine to ejs. ejs is a javascript template library
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
//create .ejs file for pages
// index page
app.get('/', function(req, res) {
    // Now, we will render home page (index.ejs) on a certain request by the user: 
    //The render method takes the name of the HTML page to be rendered as input.
    // This page should be in the views folder in the root directory.
    res.render('pages/index');
    //Now, the page home.ejs will be displayed on requesting localhost.
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
  // Now, we will render about page (about.ejs) on a certain request by the user.
});

app.listen(8080);
console.log('Server is listening on port 8080');