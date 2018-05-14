'use strict'

const express = require('express');
const path = require('path');
const expHbs = require('express-handlebars');
require('dotenv').load();

var app = express();

const authenticatedRoutes = require('./src/routes/routes');

app.use(authenticatedRoutes);

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expHbs({ 
    defaultLayout : 'main'
}));
app.set('view engine', 'handlebars');
app.use( express.static( path.join(__dirname, 'src/css') ));
app.use( express.static( path.join(__dirname, 'src/js') ));
app.use( express.static( path.join(__dirname, 'images') ));
app.use( express.static( path.join(__dirname, 'fonts') ));
app.set('port', (process.env.PORT || 5000));

app.listen( app.get('port'), () => {
    console.log('Server initialized on localhost correctly');    
});

// app.get('*', (req, res) => {
//     res.redirect('error');
// });

module.exports = app;