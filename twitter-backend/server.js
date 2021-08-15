const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
const usersRoute = require("./routes/users.js");
const passport = require("passport")
const passportLocal = require("passport-local").Strategy
const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs")
const expressSession = require("express-session")


app.use(cors());
app.use(express.json());
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: false }));
require('./authentication/passportConfig.js')(passport)

mongoose.connect("mongodb+srv://user:mHiggYh6HgJNAEfN@cluster0.bcveo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

app.use('/users', usersRoute)

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});