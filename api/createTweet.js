const connectToDatabase = require('../lib/database');
const Tweet = require('../models/Tweet');
const moment = require('moment')

module.exports = async (req, res) => {
  try {
    const payload = req.body  
    await connectToDatabase();
    
    let newTweet = new Tweet({
      name: payload.name,
      username: payload.username,
      text: payload.text,
      avatarUrl: payload.avatarUrl,
      date: moment().format('YYYY-MM-DDTHH:mm:ss.SSSSS')
    });
    
    let saveTweet = await newTweet.save()
    
    return res.status(200).json({ tweet: saveTweet })
  } catch (error) {
    console.log(error)

    return res.status(500).json({ status: 'ERROR. Could not create the tweet', error: true })
  }
}

