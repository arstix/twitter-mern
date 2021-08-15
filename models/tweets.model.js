var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tweetsSchema = new Schema(
  {
    tweets: { type: String, required: true }, //reference to the associated book
    replies: { type: String, required: false },
    username: { type: Schema.Types.ObjectId, ref: 'users' }
  }
);

// Virtual for bookinstance's URL
const Tweets = mongoose.model("tweets", tweetsSchema)
//Export model

module.exports = Tweets
