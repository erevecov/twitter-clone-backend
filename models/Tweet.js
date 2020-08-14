const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({  
  name: { type: String, required: true },
  username: { type: String, required: true },
  text: { type: String, required: true },
  avatarUrl: { type: String, required: true },
  date: { type: String, required: true }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('Tweets', TweetSchema);