const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
const mongoose = require("mongoose");
const usersRoute = require("./routes/users.js");
const tweetsRoute = require("./routes/tweets.js");
const passport = require("passport")
const passportLocal = require("passport-local").Strategy
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs")
const expressSession = require("express-session")
var session = require("express-session")
const jwt = require("jsonwebtoken")
require('dotenv').config()

app.use(bodyParser.json())

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: false }));
require('./authentication/passportConfig.js')(passport)

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
});

app.use('/users', usersRoute)
app.use('/tweets', tweetsRoute)

// load client public folder
app.use(express.static(path.join(__dirname, 'client', 'build')));

// load client index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
