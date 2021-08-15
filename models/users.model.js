var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    username: { type: String, required: true }, //reference to the associated book
    password: {type: String, required: true},
    email: {type: String, required: false},
    phone: {type: String, required: false},
    monthOfBirth: {type: String, required: true},
    dayOfBirth: {type: String, required: true},
    yearOfBirth: {type: String, required: true}
  }
);

// Virtual for bookinstance's URL

//Export model
module.exports = mongoose.model('users', userSchema);
