const express = require('express');
// const mongoose = require('mongoose');

// Read and set environment variables
require("dotenv").config();

// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

const cookieSession = require('cookie-session');
const passport = require('passport')
var keys = require('./config/keys.js');
require('./models/user.js')
require('./services/passport.js');

mongoose.connect(keys.mongoUri);

const app = express();

app.use (
    cookieSession ({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());  

require('./routes/authRoutes.js')(app);

app.get('/', (req,res) => {
    res.send({hi: 'there'})
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log("Todo List listening on port: " + PORT);
});